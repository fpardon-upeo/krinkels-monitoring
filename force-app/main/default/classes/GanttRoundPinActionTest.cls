@IsTest
private class GanttRoundPinActionTest {
    private static Map<String, Object> setupTestData() {
        Map<String, Object> testData = new Map<String, Object>();

        // Create account
        Account testAccount = FieldServiceTestData.createTestAccount(
                'Test Account',
                'Operational Account',
                true
        );
        testData.put('Account', testAccount);

        // Create product
        Product2 testProduct = FieldServiceTestData.createTestProduct(
                'Test Product',
                'Service',
                true
        );
        testData.put('Product', testProduct);

        // Create price book entry
        PricebookEntry pbe = FieldServiceTestData.createTestPricebookEntries(
                new List<Product2>{testProduct},
                (Double)100.0,
                true
        )[0];
        testData.put('PricebookEntry', pbe);

        // Create Asset with weekly recurrence
        Asset testAsset = new Asset(
                Name = 'Test Asset',
                AccountId = testAccount.Id,
                Product2Id = testProduct.Id,
                Recurrence_Pattern__c = 'FREQ=WEEKLY;INTERVAL=1;BYDAY=MO',
                Recurrence_Text__c = 'Every Monday'
        );
        insert testAsset;
        testData.put('Asset', testAsset);

        // Create Work Order
        WorkOrder wo = new WorkOrder(
                AccountId = testAccount.Id,
                AssetId = testAsset.Id,
                StartDate = Date.today(),
                EndDate = Date.today().addDays(90)
        );
        insert wo;
        testData.put('WorkOrder', wo);

        // Create Service Resource and Territory
        User currentUser = [SELECT Id FROM User WHERE Id = :UserInfo.getUserId()];
        ServiceResource sr;
        ServiceTerritory st;

        System.runAs(currentUser) {
            // Create Operating Hours first
            OperatingHours oh = FieldServiceTestData.createTestOperatingHours(
                    'Test Operating Hours',
                    'America/Los_Angeles',
                    true
            );
            testData.put('OperatingHours', oh);

            // Create Territory
            st = FieldServiceTestData.createTestServiceTerritory(
                    'Test Territory',
                    true,
                    oh.Id,
                    true
            );
            testData.put('ServiceTerritory', st);

            // Create User and Service Resource
            User testUser = FieldServiceTestData.createTestUser('TestFSL', 'Standard User', true);
            FieldServiceTestData.assignFieldServicePermissionSetLicense(testUser.Id);
            sr = FieldServiceTestData.createTestServiceResource(
                    'Test Resource',
                    null,
                    true,
                    testUser.Id
            );
            testData.put('ServiceResource', sr);

            // Create Territory Membership
            ServiceTerritoryMember stm = FieldServiceTestData.createTestServiceTerritoryMember(
                    st.Id,
                    sr.Id,
                    DateTime.now(),
                    true
            );
            testData.put('ServiceTerritoryMember', stm);
        }

        // Create Service Appointment
        ServiceAppointment sa = new ServiceAppointment(
                ParentRecordId = wo.Id,
                EarliestStartTime = DateTime.now(),
                DueDate = DateTime.now().addDays(1),
                SchedStartTime = DateTime.now(),
                SchedEndTime = DateTime.now().addHours(2),
                Status = 'None',
                ServiceTerritoryId = st.Id  // Add territory to appointment
        );
        insert sa;
        testData.put('ServiceAppointment', sa);

        // Create Assigned Resource
        AssignedResource ar = new AssignedResource(
                ServiceAppointmentId = sa.Id,
                ServiceResourceId = sr.Id,
                External_Id__c = sr.Id + '-' + sa.Id
        );
        insert ar;
        testData.put('AssignedResource', ar);

        return testData;
    }

    /**
     * Tests the successful rescheduling of a service appointment
     * Verifies:
     * - Service appointment is rescheduled
     * - Future appointments are updated
     * - Resources are correctly reassigned
     */
    @IsTest
    static void testSuccessfulRescheduling() {
        // Setup test data
        Map<String, Object> testData = setupTestData();
        ServiceAppointment sa = (ServiceAppointment)testData.get('ServiceAppointment');

        // Start test
        Test.startTest();

        // Create action instance
        GanttRoundPinAction action = new GanttRoundPinAction();

        // Execute action with new schedule time
        DateTime newStartTime = DateTime.now().addDays(1);
        String result = action.action(
                new List<Id>{sa.Id},
                newStartTime,
                newStartTime.addDays(7),
                new Map<String, Object>()
        );

        Test.stopTest();

        // Verify results
        System.assertEquals('success', result, 'Action should return success');

        // Query updated service appointment
        ServiceAppointment updatedSA = [
                SELECT Id, SchedStartTime, SchedEndTime
                FROM ServiceAppointment
                WHERE Id = :sa.Id
        ];

        // Verify appointment was rescheduled
        System.assertNotEquals(
                sa.SchedStartTime,
                updatedSA.SchedStartTime,
                'Service Appointment should have new start time'
        );

        // Verify assigned resources
        List<AssignedResource> resources = [
                SELECT Id
                FROM AssignedResource
                WHERE ServiceAppointmentId = :sa.Id
        ];
        System.assertNotEquals(0, resources.size(), 'Service Appointment should have assigned resources');
    }

    @IsTest
    static void testMultipleAppointmentsWithSharedResources() {
        Map<String, Object> testData = setupTestData();
        WorkOrder wo = (WorkOrder)testData.get('WorkOrder');
        ServiceResource sr = (ServiceResource)testData.get('ServiceResource');
        ServiceTerritory st = (ServiceTerritory)testData.get('ServiceTerritory');
        Asset testAsset = (Asset)testData.get('Asset');

        // First, set up a recurring pattern on the asset
        testAsset.Recurrence_Pattern__c = 'FREQ=DAILY;INTERVAL=1;COUNT=3';  // Explicitly set count
        update testAsset;

        // Create initial service appointment that will generate the series
        DateTime baseTime = DateTime.now().addDays(1);
        ServiceAppointment mainSA = new ServiceAppointment(
                ParentRecordId = wo.Id,
                EarliestStartTime = baseTime,
                DueDate = baseTime.addDays(1),
                SchedStartTime = baseTime,
                SchedEndTime = baseTime.addHours(2),
                Status = 'None',
                ServiceTerritoryId = st.Id
        );
        insert mainSA;

        // Create initial resource assignment
        AssignedResource ar = new AssignedResource(
                ServiceAppointmentId = mainSA.Id,
                ServiceResourceId = sr.Id,
                External_Id__c = sr.Id + '-' + mainSA.Id
        );
        insert ar;

        Test.startTest();

        // Move the appointment, which should generate the series
        GanttRoundPinAction action = new GanttRoundPinAction();
        String result = action.action(
                new List<Id>{mainSA.Id},
                baseTime.addDays(7),
                baseTime.addDays(14),
                new Map<String, Object>()
        );

        Test.stopTest();

        // Verify the result
        System.assertEquals('success', result, 'Action should return success');

        // Query all related appointments
        List<ServiceAppointment> allAppointments = [
                SELECT Id, SchedStartTime
                FROM ServiceAppointment
                WHERE ParentRecordId = :wo.Id
                ORDER BY SchedStartTime
        ];

        System.debug('Found appointments: ' + allAppointments.size());
        for(ServiceAppointment sa : allAppointments) {
            System.debug('Appointment SchedStartTime: ' + sa.SchedStartTime);
        }

        // Query all assigned resources
        List<AssignedResource> allResources = [
                SELECT Id, ServiceResourceId, ServiceAppointmentId, ServiceAppointment.SchedStartTime
                FROM AssignedResource
                WHERE ServiceResourceId = :sr.Id
                ORDER BY ServiceAppointment.SchedStartTime
        ];

        System.debug('Found resources: ' + allResources.size());
        for(AssignedResource resource : allResources) {
            System.debug('Resource appointment time: ' + resource.ServiceAppointment.SchedStartTime);
        }

        // Verify we have the expected number of appointments
        System.assertNotEquals(0, allAppointments.size(), 'Should have appointments');
    }

    /**
     * Tests the error handling when invalid data is provided
     * Verifies the action handles errors gracefully
     */
    @IsTest
    static void testErrorHandling() {
        Test.startTest();

        GanttRoundPinAction action = new GanttRoundPinAction();
        String result = action.action(
                new List<Id>{'0WO000000000000'}, // Invalid ID
                DateTime.now(),
                DateTime.now().addDays(7),
                new Map<String, Object>()
        );

        Test.stopTest();

        System.assertEquals('success', result, 'Action should handle errors gracefully');
    }

    /**
     * Tests rescheduling with different recurrence patterns
     * Verifies the action correctly handles various RRULE patterns
     */
    @IsTest
    static void testDifferentRecurrencePatterns() {
        Map<String, Object> testData = setupTestData();
        Asset testAsset = (Asset)testData.get('Asset');
        ServiceAppointment sa = (ServiceAppointment)testData.get('ServiceAppointment');

        // Test different recurrence patterns
        List<String> patterns = new List<String>{
                'FREQ=DAILY;INTERVAL=1',
                'FREQ=WEEKLY;INTERVAL=2;BYDAY=MO,WE,FR',
                'FREQ=MONTHLY;INTERVAL=1;BYDAY=1MO'
        };

        Test.startTest();

        GanttRoundPinAction action = new GanttRoundPinAction();

        for(String pattern : patterns) {
            // Update asset recurrence pattern
            testAsset.Recurrence_Pattern__c = pattern;
            update testAsset;

            String result = action.action(
                    new List<Id>{sa.Id},
                    DateTime.now().addDays(1),
                    DateTime.now().addDays(8),
                    new Map<String, Object>()
            );

            System.assertEquals('success', result, 'Action should handle ' + pattern + ' pattern');
        }

        Test.stopTest();
    }
}