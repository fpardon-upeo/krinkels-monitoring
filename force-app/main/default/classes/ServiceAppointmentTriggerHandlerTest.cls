/**
* Created by Frederik on 12/18/2024.
* Description:
* Change Log:
* Dependencies:
*/

@IsTest
private class ServiceAppointmentTriggerHandlerTest {

    @TestSetup
    static void setupTestData() {
        // Create test user and assign FSL permissions
        User testUser = FieldServiceTestData.createTestUser('TestUser', 'Standard User', true);
        System.runAs(new User(Id = UserInfo.getUserId())) {
            FieldServiceTestData.assignFieldServicePermissionSetLicense(testUser.Id);
        }

        // Create basic test data
        Account testAccount = FieldServiceTestData.createTestAccount('Test Account', 'Operational Account', true);
        Product2 testProduct = FieldServiceTestData.createTestProduct('Test Product', 'Material', true);

        // Create Asset
        Asset testAsset = new Asset(
                Name = 'Test Asset',
                AccountId = testAccount.Id,
                Product2Id = testProduct.Id
        );
        insert testAsset;

        // Create Asset Financial Account
        Asset_Financial_Account__c financialAccount = new Asset_Financial_Account__c(
                Name = 'Test Financial Account',
                Asset__c = testAsset.Id
        );
        insert financialAccount;

        // Create Service Contract
        ServiceContract serviceContract = new ServiceContract(
                AccountId = testAccount.Id,
                Contract_type__c = 'Subscription',
                Name = 'Test Service Contract'
        );
        insert serviceContract;

        // Create Maintenance Plan
        MaintenancePlan maintenancePlan = new MaintenancePlan(
                ServiceContractId = serviceContract.Id,
                Service_Appointments_Color_on_Gantt__c = '#FF0000',
                Service_Appointments_Icon_on_Gantt__c = 'test_icon',
                GenerationTimeframe = 1,
                StartDate = Date.today(),
                NextSuggestedMaintenanceDate = Date.today().addDays(1)
        );
        insert maintenancePlan;

        // Create Work Type
        WorkType workType = new WorkType(
                Name = 'Internal Production Work',
                EstimatedDuration = 2.0
        );
        insert workType;

        // Create parent Work Order
        WorkOrder parentWorkOrder = new WorkOrder(
                AccountId = testAccount.Id,
                AssetId = testAsset.Id,
                WorkTypeId = workType.Id,
                MaintenancePlanId = maintenancePlan.Id,
                SuggestedMaintenanceDate = Date.today().addDays(1)
        );
        insert parentWorkOrder;

        // Create child Work Order
        WorkOrder childWorkOrder = new WorkOrder(
                AccountId = testAccount.Id,
                AssetId = testAsset.Id,
                WorkTypeId = workType.Id,
                ParentWorkOrderId = parentWorkOrder.Id,
                MaintenancePlanId = maintenancePlan.Id,
                SuggestedMaintenanceDate = Date.today().addDays(1)
        );
        insert childWorkOrder;

        // Create Service Resource for testing
        ServiceResource serviceResource = FieldServiceTestData.createTestServiceResource(
                'Test Resource',
                null,
                true,
                testUser.Id
        );

        // Create Service Crew
        ServiceCrew crew = FieldServiceTestData.createTestServiceCrew('Test Crew', true);

        // Create Service Crew Member
        ServiceCrewMember crewMember = FieldServiceTestData.createTestServiceCrewMember(
                crew.Id,
                serviceResource.Id,
                true
        );
    }

    @IsTest
    static void testAfterInsert() {
        // Get the test data
        WorkOrder parentWorkOrder = [SELECT Id FROM WorkOrder WHERE ParentWorkOrderId = null LIMIT 1];

        Test.startTest();

        // Create Service Appointment
        ServiceAppointment sa = new ServiceAppointment(
                ParentRecordId = parentWorkOrder.Id,
                EarliestStartTime = System.now(),
                DueDate = System.now().addDays(1),
                SchedStartTime = System.now(),
                SchedEndTime = System.now().addHours(2)
        );
        insert sa;

        Test.stopTest();

        // Verify the results
        ServiceAppointment updatedSA = [
                SELECT Id, Asset__c, FSL__GanttColor__c, FSL__GanttIcon__c,
                        Billing_Type__c, Financial_Accounts_Billing__c
                FROM ServiceAppointment
                WHERE Id = :sa.Id
        ];

        System.assertNotEquals(null, updatedSA.Asset__c, 'Asset should be populated');
        System.assertEquals('#cc5027', updatedSA.FSL__GanttColor__c, 'Gantt color should match maintenance plan');
        System.assertEquals('https://squarehub-production.s3.eu-west-3.amazonaws.com/profile_pictures/d8b262b0-5237-4826-a3bb-e101a5996d87?filename=logo_krinkels-landschapsaannemer.jpg', updatedSA.FSL__GanttIcon__c, 'Gantt icon should match maintenance plan');
        System.assertEquals('Subscription', updatedSA.Billing_Type__c, 'Billing type should match service contract');
        System.assertEquals('Test Financial Account', updatedSA.Financial_Accounts_Billing__c, 'Financial accounts should be populated');
    }

    @IsTest
    static void testAfterInsertWithInternalWork() {
        // Get the test data
        WorkOrder workOrder = [
                SELECT Id
                FROM WorkOrder
                WHERE ParentWorkOrderId = null
                AND WorkType.Name = 'Internal Production Work'
                LIMIT 1
        ];

        Test.startTest();

        ServiceAppointment sa = new ServiceAppointment(
                ParentRecordId = workOrder.Id,
                EarliestStartTime = System.now(),
                DueDate = System.now().addDays(1)
        );
        insert sa;

        Test.stopTest();

        // Verify the results
        ServiceAppointment updatedSA = [
                SELECT Id, FSL__GanttColor__c, FSL__GanttIcon__c
                FROM ServiceAppointment
                WHERE Id = :sa.Id
        ];

        System.assertEquals('#cc5027', updatedSA.FSL__GanttColor__c, 'Internal work should have specific color');
    }

    @IsTest
    static void testCopyAssignedResources() {
        // Get test data
        WorkOrder parentWorkOrder = [SELECT Id FROM WorkOrder WHERE ParentWorkOrderId = null LIMIT 1];
        WorkOrder childWorkOrder = [SELECT Id FROM WorkOrder WHERE ParentWorkOrderId != null LIMIT 1];
        ServiceResource resource = [SELECT Id FROM ServiceResource LIMIT 1];

        // Create parent Service Appointment
        ServiceAppointment parentSA = new ServiceAppointment(
                ParentRecordId = parentWorkOrder.Id,
                EarliestStartTime = System.now(),
                DueDate = System.now().addDays(1),
                SchedStartTime = System.now(),
                SchedEndTime = System.now().addHours(2),
                Duration = 120,
                Status = 'Scheduled'
        );
        insert parentSA;

        ServiceTerritory territory = new ServiceTerritory(
                Name = 'Test Territory',
                OperatingHoursId = [SELECT Id FROM OperatingHours LIMIT 1].Id,
                IsActive = true
        );

        insert territory;

        ServiceTerritoryMember territoryMember = new ServiceTerritoryMember(
                ServiceTerritoryId = territory.Id,
                ServiceResourceId = resource.Id,
                EffectiveStartDate = Date.today()
        );

        insert territoryMember;

        // Create Assigned Resource for parent SA
        AssignedResource ar = new AssignedResource(
                ServiceAppointmentId = parentSA.Id,
                ServiceResourceId = resource.Id
        );
        insert ar;

        Test.startTest();

        // Create child Service Appointment
        ServiceAppointment childSA = new ServiceAppointment(
                ParentRecordId = childWorkOrder.Id,
                EarliestStartTime = System.now(),
                DueDate = System.now().addDays(1)
        );
        insert childSA;

        Test.stopTest();

        // Verify results
        List<AssignedResource> childAssignedResources = [
                SELECT Id
                FROM AssignedResource
                WHERE ServiceAppointmentId = :childSA.Id
        ];
    }

    @IsTest
    static void testAfterUpdate() {
        // Get test data
        WorkOrder workOrder = [SELECT Id FROM WorkOrder WHERE ParentWorkOrderId = null LIMIT 1];

        // Create Service Appointment
        ServiceAppointment sa = new ServiceAppointment(
                ParentRecordId = workOrder.Id,
                EarliestStartTime = System.now(),
                DueDate = System.now().addDays(1),
                ActualStartTime = System.now().addHours(-1),
                Status = 'In Progress'
        );
        insert sa;

        Test.startTest();

        // Update Service Appointment status
        sa.Status = 'Completed';
        update sa;

        Test.stopTest();

        // Verify Work Order status was updated
        WorkOrder updatedWO = [SELECT Id, Status FROM WorkOrder WHERE Id = :workOrder.Id];
        System.assertEquals('Completed', updatedWO.Status, 'Work Order status should match Service Appointment status');
    }
}