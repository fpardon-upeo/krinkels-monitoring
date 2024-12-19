@IsTest
private class FirstWorkOrderCheckerTest {

    @TestSetup
    static void setupTestData() {
        // Create test user and service resource using the factory
        Map<String, Object> testData = FieldServiceTestData.createTimeSheetTestData();
        User testUser = (User)testData.get('User');
        ServiceResource resource = (ServiceResource)testData.get('ServiceResource');

        OperatingHours oh = FieldServiceTestData.createTestOperatingHours(
                'Test Operating Hours',
                'America/Los_Angeles',
                true
        );

        // Create Territory
        ServiceTerritory st = FieldServiceTestData.createTestServiceTerritory(
                'Test Territory',
                true,
                oh.Id,
                true
        );

        ServiceTerritoryMember stm = FieldServiceTestData.createTestServiceTerritoryMember(
                st.Id,
                resource.Id,
                DateTime.now(),
                true
        );

        // Create test Account
        Account testAccount = new Account(
                Name = 'Test Account',
                RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('Operational Account').getRecordTypeId()
        );
        insert testAccount;

        // Create Work Type
        WorkType workType = new WorkType(
                Name = 'Test Work Type',
                EstimatedDuration = 2.0
        );
        insert workType;

        // Create multiple work orders for testing
        List<WorkOrder> workOrders = new List<WorkOrder>();

        // First work order of the day
        WorkOrder firstWO = new WorkOrder(
                AccountId = testAccount.Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                WorkTypeId = workType.Id,
                Is_First_of_Day__c = true
        );
        workOrders.add(firstWO);

        // Regular work order
        WorkOrder regularWO = new WorkOrder(
                AccountId = testAccount.Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                WorkTypeId = workType.Id,
                Is_First_of_Day__c = false
        );
        workOrders.add(regularWO);

        insert workOrders;

        // Create Service Appointments for today
        List<ServiceAppointment> appointments = new List<ServiceAppointment>();
        for(WorkOrder wo : workOrders) {
            ServiceAppointment sa = new ServiceAppointment(
                    ParentRecordId = wo.Id,
                    EarliestStartTime = DateTime.now(),
                    DueDate = DateTime.now().addDays(1),
                    SchedStartTime = DateTime.now(),
                    SchedEndTime = DateTime.now().addHours(2),
                    Status = 'Scheduled'
            );
            appointments.add(sa);
        }
        insert appointments;

        // Create Assigned Resources
        List<AssignedResource> assignedResources = new List<AssignedResource>();
        for(ServiceAppointment sa : appointments) {
            AssignedResource ar = new AssignedResource(
                    ServiceAppointmentId = sa.Id,
                    ServiceResourceId = resource.Id
            );
            assignedResources.add(ar);
        }
        insert assignedResources;
    }

    @IsTest
    static void testHasFirstWorkOrder() {
        User testUser = [SELECT Id FROM User WHERE FirstName = 'TestFSL' LIMIT 1];

        Test.startTest();
        System.runAs(testUser) {
            Boolean hasFirst = FirstWorkOrderChecker.hasFirstWorkOrder(); }
        Test.stopTest();
    }

    @IsTest
    static void testNoFirstWorkOrder() {
        User testUser = [SELECT Id FROM User WHERE FirstName = 'TestFSL' LIMIT 1];

        // Update all work orders to not be first of day
        List<WorkOrder> workOrders = [SELECT Id FROM WorkOrder];
        for(WorkOrder wo : workOrders) {
            wo.Is_First_of_Day__c = false;
        }
        update workOrders;

        Test.startTest();
        System.runAs(testUser) {
            Boolean hasFirst = FirstWorkOrderChecker.hasFirstWorkOrder();
            Assert.isFalse(hasFirst, 'Should not have found a first work order of the day');
        }
        Test.stopTest();
    }

    @IsTest
    static void testNoServiceAppointments() {
        User testUser = [SELECT Id FROM User WHERE FirstName = 'TestFSL' LIMIT 1];

        // Delete all assigned resources
        delete [SELECT Id FROM AssignedResource];

        Test.startTest();
        System.runAs(testUser) {
            Boolean hasFirst = FirstWorkOrderChecker.hasFirstWorkOrder();
            Assert.isFalse(hasFirst, 'Should not have found any work orders without assignments');
        }
        Test.stopTest();
    }

    @IsTest
    static void testFutureServiceAppointments() {
        User testUser = [SELECT Id FROM User WHERE FirstName = 'TestFSL' LIMIT 1];

        // Update service appointments to future date
        List<ServiceAppointment> appointments = [SELECT Id FROM ServiceAppointment];
        for(ServiceAppointment sa : appointments) {
            sa.SchedStartTime = DateTime.now().addDays(1);
            sa.SchedEndTime = DateTime.now().addDays(1).addHours(2);
        }
        update appointments;

        Test.startTest();
        System.runAs(testUser) {
            Boolean hasFirst = FirstWorkOrderChecker.hasFirstWorkOrder();
            Assert.isFalse(hasFirst, 'Should not have found any work orders for future dates');
        }
        Test.stopTest();
    }
}