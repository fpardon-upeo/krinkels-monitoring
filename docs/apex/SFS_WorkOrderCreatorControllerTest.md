# SFS_WorkOrderCreatorControllerTest Class

`ISTEST`

Created by Frederik on 12/18/2024. 
Description: 
Change Log: 
Dependencies:

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
* Created by Frederik on 12/18/2024.
* Description:
* Change Log:
* Dependencies:
*/

@IsTest
private class SFS_WorkOrderCreatorControllerTest {

    @TestSetup
    static void setupTestData() {
        // Create base test data using the factory class
        Map<String, Object> testData = FieldServiceTestData.createTimeSheetTestData();
        User testUser = (User)testData.get('User');
        ServiceResource resource = (ServiceResource)testData.get('ServiceResource');

        // Create test Account (Depot)
        Account depot = new Account(
                Name = 'Test Depot',
                Sub_Type__c = 'Depot KGC',
                Type_of_Waste__c = 'Sludge;Soil',
                RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('Other').getRecordTypeId()
        );
        insert depot;

        // Create Work Types
        List<WorkType> workTypes = new List<WorkType>{
                new WorkType(Name = 'Waste Management', EstimatedDuration = 2.0),
                new WorkType(Name = 'Internal Depot', EstimatedDuration = 2.0),
                new WorkType(Name = 'Rework', EstimatedDuration = 2.0)
        };
        insert workTypes;

        MaintenancePlan maintenancePlan = new MaintenancePlan(
                Service_Appointments_Color_on_Gantt__c = '#FF0000',
                Service_Appointments_Icon_on_Gantt__c = 'test_icon',
                GenerationTimeframe = 1,
                StartDate = Date.today(),
                NextSuggestedMaintenanceDate = Date.today().addDays(1)
        );
        insert maintenancePlan;

        // Create parent WorkOrder with required fields
        WorkOrder parentWO = new WorkOrder(
                AccountId = depot.Id,
                StartDate = Date.today(),
                EndDate = Date.today().addDays(1),
                Subject = 'Parent Work Order',
                MaintenancePlanId = maintenancePlan.Id,
                SuggestedMaintenanceDate = Date.today()
        );
        insert parentWO;

        // Create ServiceAppointment
        ServiceAppointment sa = new ServiceAppointment(
                ParentRecordId = parentWO.Id,
                EarliestStartTime = DateTime.now(),
                DueDate = DateTime.now().addDays(1),
                Status = 'None',
                SchedStartTime = DateTime.now(),
                SchedEndTime = DateTime.now().addHours(2)
        );
        insert sa;

        // Create WorkOrderLineItems for testing rework functionality
        List<WorkOrderLineItem> wolis = new List<WorkOrderLineItem>{
                new WorkOrderLineItem(
                        WorkOrderId = parentWO.Id,
                        Description = 'Test Task 1'
                ),
                new WorkOrderLineItem(
                        WorkOrderId = parentWO.Id,
                        Description = 'Test Task 2'
                )
        };
        insert wolis;
    }

    @IsTest
    static void testGetWasteTypePicklist() {
        Test.startTest();
        List<String> wasteTypes = SFS_WorkOrderCreatorController.getWasteTypePicklist();
        Test.stopTest();

        Assert.isNotNull(wasteTypes, 'Waste types list should not be null');
        Assert.isTrue(!wasteTypes.isEmpty(), 'Waste types list should not be empty');
    }

    @IsTest
    static void testGetWasteDepots() {
        List<String> wasteTypes = new List<String>{'Sludge', 'Soil'};

        Test.startTest();
        List<Account> depots = SFS_WorkOrderCreatorController.getWasteDepots(wasteTypes);
        Test.stopTest();

        Assert.isNotNull(depots, 'Depots list should not be null');
        Assert.isTrue(!depots.isEmpty(), 'Should find at least one depot');
    }

    @IsTest
    static void testCreateWasteVisitWorkOrder() {
        ServiceAppointment sa = [SELECT Id FROM ServiceAppointment LIMIT 1];
        Account depot = [SELECT Id FROM Account WHERE Sub_Type__c = 'Depot KGC' LIMIT 1];
        String wasteTypes = 'Sludge;Soil';

        Test.startTest();
        Id workOrderId = SFS_WorkOrderCreatorController.createWasteVisitWorkOrder(
                sa.Id,
                depot.Id,
                wasteTypes
        );
        Test.stopTest();

        WorkOrder createdWO = [SELECT Id, Waste_Visit_Planned__c, Waste_to_Drop_Off__c
        FROM WorkOrder WHERE Id = :workOrderId];
        Assert.isTrue(createdWO.Waste_Visit_Planned__c, 'Work Order should be marked as waste visit');
        System.assertEquals(wasteTypes, createdWO.Waste_to_Drop_Off__c, 'Waste types should match');
    }

    @IsTest
    static void testGetDepots() {
        Test.startTest();
        List<Account> depots = SFS_WorkOrderCreatorController.getDepots();
        Test.stopTest();

        Assert.isNotNull(depots, 'Depots list should not be null');
        Assert.isTrue(!depots.isEmpty(), 'Should find at least one depot');
    }

    @IsTest
    static void testCreateDepotVisitWorkOrder() {
        ServiceAppointment sa = [SELECT Id FROM ServiceAppointment LIMIT 1];
        Account depot = [SELECT Id FROM Account WHERE Sub_Type__c = 'Depot KGC' LIMIT 1];
        String subject = 'Test Depot Visit';
        String dropOffItems = 'Tools';
        String pickUpItems = 'Materials';

        Test.startTest();
        Id workOrderId = SFS_WorkOrderCreatorController.createDepotVisitWorkOrder(
                sa.Id,
                depot.Id,
                subject,
                dropOffItems,
                pickUpItems
        );
        Test.stopTest();

        WorkOrder createdWO = [SELECT Id, Depot_Visit_Planned__c, Drop_Off_Items__c, Pick_Up_Items__c
        FROM WorkOrder WHERE Id = :workOrderId];
        Assert.isTrue(createdWO.Depot_Visit_Planned__c, 'Work Order should be marked as depot visit');
        System.assertEquals(dropOffItems, createdWO.Drop_Off_Items__c, 'Drop off items should match');
        System.assertEquals(pickUpItems, createdWO.Pick_Up_Items__c, 'Pick up items should match');
    }

    @IsTest
    static void testGetServiceAppointments() {
        ServiceAppointment sa = [SELECT Id FROM ServiceAppointment LIMIT 1];

        Test.startTest();
        ServiceAppointment result = SFS_WorkOrderCreatorController.getServiceAppointments(sa.Id);
        Test.stopTest();

        Assert.isNotNull(result, 'Service Appointment should be retrieved');
        System.assertEquals(sa.Id, result.Id, 'Should retrieve the correct Service Appointment');
    }

    @IsTest
    static void testGetReworkReasons() {
        Test.startTest();
        List<String> reworkReasons = SFS_WorkOrderCreatorController.getReworkReasons();
        Test.stopTest();

        Assert.isNotNull(reworkReasons, 'Rework reasons list should not be null');
    }

    @IsTest
    static void testGetExistingTasks() {
        ServiceAppointment sa = [SELECT Id FROM ServiceAppointment LIMIT 1];

        Test.startTest();
        WorkOrder result = SFS_WorkOrderCreatorController.getExistingTasks(sa.Id);
        Test.stopTest();

        Assert.isNotNull(result, 'Work Order should be retrieved');
        Assert.isNotNull(result.WorkOrderLineItems, 'Work Order should have line items');
        Assert.isTrue(!result.WorkOrderLineItems.isEmpty(), 'Work Order should have at least one line item');
    }

    @IsTest
    static void testCreateReworkOrder() {
        ServiceAppointment sa = [SELECT Id FROM ServiceAppointment LIMIT 1];
        List<WorkOrderLineItem> existingTasks = [SELECT Id FROM WorkOrderLineItem LIMIT 2];
        List<Id> selectedTaskIds = new List<Id>{existingTasks[0].Id};
        List<String> newTasks = new List<String>{'New Test Task'};

        Test.startTest();
        Id workOrderId = SFS_WorkOrderCreatorController.createReworkOrder(
                sa.Id,
                'Test Rework',
                'Quality issues',
                selectedTaskIds,
                newTasks
        );
        Test.stopTest();

        // Verify the created work order and its line items
        WorkOrder createdWO = [SELECT Id, Rework_Planned__c,
        (SELECT Id FROM WorkOrderLineItems)
        FROM WorkOrder WHERE Id = :workOrderId];
        Assert.isTrue(createdWO.Rework_Planned__c, 'Work Order should be marked as rework');
    }

}
```

## Methods
### `setupTestData()`

`TESTSETUP`

#### Signature
```apex
private static void setupTestData()
```

#### Return Type
**void**

---

### `testGetWasteTypePicklist()`

`ISTEST`

#### Signature
```apex
private static void testGetWasteTypePicklist()
```

#### Return Type
**void**

---

### `testGetWasteDepots()`

`ISTEST`

#### Signature
```apex
private static void testGetWasteDepots()
```

#### Return Type
**void**

---

### `testCreateWasteVisitWorkOrder()`

`ISTEST`

#### Signature
```apex
private static void testCreateWasteVisitWorkOrder()
```

#### Return Type
**void**

---

### `testGetDepots()`

`ISTEST`

#### Signature
```apex
private static void testGetDepots()
```

#### Return Type
**void**

---

### `testCreateDepotVisitWorkOrder()`

`ISTEST`

#### Signature
```apex
private static void testCreateDepotVisitWorkOrder()
```

#### Return Type
**void**

---

### `testGetServiceAppointments()`

`ISTEST`

#### Signature
```apex
private static void testGetServiceAppointments()
```

#### Return Type
**void**

---

### `testGetReworkReasons()`

`ISTEST`

#### Signature
```apex
private static void testGetReworkReasons()
```

#### Return Type
**void**

---

### `testGetExistingTasks()`

`ISTEST`

#### Signature
```apex
private static void testGetExistingTasks()
```

#### Return Type
**void**

---

### `testCreateReworkOrder()`

`ISTEST`

#### Signature
```apex
private static void testCreateReworkOrder()
```

#### Return Type
**void**