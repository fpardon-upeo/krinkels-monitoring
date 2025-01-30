# TimeSheetProjectLinkServiceTest Class

`ISTEST`

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
@IsTest
private class TimeSheetProjectLinkServiceTest {

    @TestSetup
    static void setupTestData() {
        Map<String, Object> baseData = FieldServiceTestData.createTimeSheetTestData();
        User testUser = (User)baseData.get('User');
        ServiceResource resource = (ServiceResource)baseData.get('ServiceResource');
        TimeSheet timeSheet = (TimeSheet)baseData.get('TimeSheet');

        // Create WorkTypes
        WorkType wasteManagement = new WorkType(
                Name = 'Waste Management',
                EstimatedDuration = 2.00
        );
        WorkType internalDepot = new WorkType(
                Name = 'Internal Depot',
                EstimatedDuration = 2.00
        );
        WorkType regularWork = new WorkType(
                Name = 'Regular Work',
                EstimatedDuration = 2.00
        );
        insert new List<WorkType>{wasteManagement, internalDepot, regularWork};

        // Create Work Orders
        WorkOrder regularWO = new WorkOrder(
                WorkTypeId = regularWork.Id,
                StartDate = Date.today(),
                EndDate = Date.today()
        );
        WorkOrder wasteWO = new WorkOrder(
                WorkTypeId = wasteManagement.Id,
                StartDate = Date.today(),
                EndDate = Date.today()
        );
        WorkOrder internalWO = new WorkOrder(
                WorkTypeId = internalDepot.Id,
                StartDate = Date.today(),
                EndDate = Date.today()
        );
        insert new List<WorkOrder>{regularWO, wasteWO, internalWO};

        // Create TimeSheet Entries with explicit timing to ensure correct order
        DateTime baseTime = DateTime.now();

        // First create the waste management entry (earlier in the day)
        TimeSheetEntry wasteEntry = new TimeSheetEntry(
                TimeSheetId = timeSheet.Id,
                StartTime = baseTime,
                EndTime = baseTime.addHours(1),
                WorkOrderId = wasteWO.Id,
                Type = 'Work'
        );

        // Then create the regular work entry (later in the day - this should be the one we link to)
        TimeSheetEntry regularEntry = new TimeSheetEntry(
                TimeSheetId = timeSheet.Id,
                StartTime = baseTime.addHours(2),  // Later time to ensure it's the "last" entry
                EndTime = baseTime.addHours(3),
                WorkOrderId = regularWO.Id,
                Type = 'Work'
        );

        // Internal depot entry in between
        TimeSheetEntry internalEntry = new TimeSheetEntry(
                TimeSheetId = timeSheet.Id,
                StartTime = baseTime.addHours(1),
                EndTime = baseTime.addHours(2),
                WorkOrderId = internalWO.Id,
                Type = 'Work'
        );

        insert new List<TimeSheetEntry>{wasteEntry, regularEntry, internalEntry};
    }

    @IsTest
    static void testWasteManagementLinking() {
        // Get the Waste Management TimeSheetEntry
        TimeSheetEntry wasteEntry = [
                SELECT Id, WorkOrderId, TimeSheetId, WorkOrder.WorkType.Name
                FROM TimeSheetEntry
                WHERE WorkOrder.WorkType.Name = 'Waste Management'
                LIMIT 1
        ];

        // Get the Regular Work Order ID for verification - specifically get the latest one by StartTime
        Id regularWorkOrderId = [
                SELECT WorkOrderId
                FROM TimeSheetEntry
                WHERE WorkOrder.WorkType.Name = 'Regular Work'
                ORDER BY StartTime DESC
                LIMIT 1
        ].WorkOrderId;

        Test.startTest();
        TimeSheetProjectLinkService.handler(new List<TimeSheetEntry>{wasteEntry});
        Test.stopTest();

        // Verify the Waste Management entry was linked to the regular work order
        TimeSheetEntry updatedEntry = [
                SELECT WorkOrderId
                FROM TimeSheetEntry
                WHERE Id = :wasteEntry.Id
        ];

        System.assertEquals(regularWorkOrderId, updatedEntry.WorkOrderId,
                'Waste Management entry should be linked to the regular work order');
    }

    @IsTest
    static void testInternalDepotNoLinking() {
        // Get the Internal Depot TimeSheetEntry
        TimeSheetEntry internalEntry = [
                SELECT Id, WorkOrderId, TimeSheetId, WorkOrder.WorkType.Name
                FROM TimeSheetEntry
                WHERE WorkOrder.WorkType.Name = 'Internal Depot'
                LIMIT 1
        ];
        Id originalWorkOrderId = internalEntry.WorkOrderId;

        Test.startTest();
        TimeSheetProjectLinkService.handler(new List<TimeSheetEntry>{internalEntry});
        Test.stopTest();

        // Verify the Internal Depot entry was not modified
        TimeSheetEntry updatedEntry = [
                SELECT WorkOrderId
                FROM TimeSheetEntry
                WHERE Id = :internalEntry.Id
        ];
        System.assertEquals(originalWorkOrderId, updatedEntry.WorkOrderId,
                'Internal Depot entry should not be modified');
    }

    @IsTest
    static void testWasteManagementWithNoOtherEntries() {
        // Create a new TimeSheet
        TimeSheet newTimeSheet = FieldServiceTestData.createTestTimeSheet(
                [SELECT Id FROM ServiceResource LIMIT 1].Id,
                Date.today().addDays(7),
                true
        );

        // Create a Waste Management Work Order
        WorkOrder wasteWO = new WorkOrder(
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Waste Management' LIMIT 1].Id,
                StartDate = Date.today(),
                EndDate = Date.today()
        );
        insert wasteWO;

        // Create a single Waste Management entry
        TimeSheetEntry wasteEntry = new TimeSheetEntry(
                TimeSheetId = newTimeSheet.Id,
                StartTime = DateTime.now(),
                EndTime = DateTime.now().addHours(1),
                WorkOrderId = wasteWO.Id,
                Type = 'Work'
        );
        insert wasteEntry;

        Test.startTest();
        TimeSheetProjectLinkService.handler(new List<TimeSheetEntry>{wasteEntry});
        Test.stopTest();

        // Verify the Waste Management entry remains unchanged since there are no other entries
        TimeSheetEntry updatedEntry = [
                SELECT WorkOrderId
                FROM TimeSheetEntry
                WHERE Id = :wasteEntry.Id
        ];
        System.assertEquals(wasteWO.Id, updatedEntry.WorkOrderId,
                'Waste Management entry should remain unchanged when no other entries exist');
    }

    @IsTest
    static void testBulkOperation() {
        // Get all TimeSheetEntries
        List<TimeSheetEntry> allEntries = [
                SELECT Id, WorkOrderId, TimeSheetId, WorkOrder.WorkType.Name
                FROM TimeSheetEntry
        ];

        Test.startTest();
        TimeSheetProjectLinkService.handler(allEntries);
        Test.stopTest();

        // Verify only Waste Management entries were modified
        Integer modifiedCount = [
                SELECT COUNT()
                FROM TimeSheetEntry
                WHERE WorkOrder.WorkType.Name = 'Waste Management'
                AND WorkOrderId != null
        ];
        System.assert(modifiedCount > 0, 'Expected Waste Management entries to be modified');
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

### `testWasteManagementLinking()`

`ISTEST`

#### Signature
```apex
private static void testWasteManagementLinking()
```

#### Return Type
**void**

---

### `testInternalDepotNoLinking()`

`ISTEST`

#### Signature
```apex
private static void testInternalDepotNoLinking()
```

#### Return Type
**void**

---

### `testWasteManagementWithNoOtherEntries()`

`ISTEST`

#### Signature
```apex
private static void testWasteManagementWithNoOtherEntries()
```

#### Return Type
**void**

---

### `testBulkOperation()`

`ISTEST`

#### Signature
```apex
private static void testBulkOperation()
```

#### Return Type
**void**