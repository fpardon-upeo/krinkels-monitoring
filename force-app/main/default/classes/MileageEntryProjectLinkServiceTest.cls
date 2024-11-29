@IsTest
private class MileageEntryProjectLinkServiceTest {

    @TestSetup
    static void setupTestData() {
        Map<String, Object> baseData = FieldServiceTestData.createTimeSheetTestData();
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

        // Create Mileage Entries with explicit order
        Mileage_Entry__c wasteEntry = new Mileage_Entry__c(
                Time_Sheet__c = timeSheet.Id,
                Work_Order__c = wasteWO.Id
        );

        // Regular work entry
        Mileage_Entry__c regularEntry = new Mileage_Entry__c(
                Time_Sheet__c = timeSheet.Id,
                Work_Order__c = regularWO.Id
        );

        // Internal depot entry
        Mileage_Entry__c internalEntry = new Mileage_Entry__c(
                Time_Sheet__c = timeSheet.Id,
                Work_Order__c = internalWO.Id
        );

        // Insert in specific order - regular first (to be the "last" entry), then internal, then waste
        insert new List<Mileage_Entry__c>{regularEntry, internalEntry, wasteEntry};
    }

    @IsTest
    static void testWasteManagementLinking() {
        // Get the Waste Management Mileage Entry
        Mileage_Entry__c wasteEntry = [
                SELECT Id, Work_Order__c, Time_Sheet__c, Work_Order__r.WorkType.Name
                FROM Mileage_Entry__c
                WHERE Work_Order__r.WorkType.Name = 'Waste Management'
                LIMIT 1
        ];

        // Get the Regular Work Order ID for verification
        Id regularWorkOrderId = [
                SELECT Work_Order__c
                FROM Mileage_Entry__c
                WHERE Work_Order__r.WorkType.Name = 'Regular Work'
                LIMIT 1
        ].Work_Order__c;

        Test.startTest();
        MileageEntryProjectLinkService.handler(new List<Mileage_Entry__c>{wasteEntry});
        Test.stopTest();

        // Verify the Waste Management entry was linked to the regular work order
        Mileage_Entry__c updatedEntry = [
                SELECT Work_Order__c
                FROM Mileage_Entry__c
                WHERE Id = :wasteEntry.Id
        ];
        System.assertEquals(regularWorkOrderId, updatedEntry.Work_Order__c,
                'Waste Management entry should be linked to the regular work order');
    }

    @IsTest
    static void testInternalDepotNoLinking() {
        // Get the Internal Depot Mileage Entry
        Mileage_Entry__c internalEntry = [
                SELECT Id, Work_Order__c, Time_Sheet__c, Work_Order__r.WorkType.Name
                FROM Mileage_Entry__c
                WHERE Work_Order__r.WorkType.Name = 'Internal Depot'
                LIMIT 1
        ];
        Id originalWorkOrderId = internalEntry.Work_Order__c;

        Test.startTest();
        MileageEntryProjectLinkService.handler(new List<Mileage_Entry__c>{internalEntry});
        Test.stopTest();

        // Verify the Internal Depot entry was not modified
        Mileage_Entry__c updatedEntry = [
                SELECT Work_Order__c
                FROM Mileage_Entry__c
                WHERE Id = :internalEntry.Id
        ];
        System.assertEquals(originalWorkOrderId, updatedEntry.Work_Order__c,
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
        Mileage_Entry__c wasteEntry = new Mileage_Entry__c(
                Time_Sheet__c = newTimeSheet.Id,
                Work_Order__c = wasteWO.Id
        );
        insert wasteEntry;

        Test.startTest();
        MileageEntryProjectLinkService.handler(new List<Mileage_Entry__c>{wasteEntry});
        Test.stopTest();

        // Verify the Waste Management entry remains unchanged since there are no other entries
        Mileage_Entry__c updatedEntry = [
                SELECT Work_Order__c
                FROM Mileage_Entry__c
                WHERE Id = :wasteEntry.Id
        ];
        System.assertEquals(wasteWO.Id, updatedEntry.Work_Order__c,
                'Waste Management entry should remain unchanged when no other entries exist');
    }

    @IsTest
    static void testBulkOperation() {
        // Get all Mileage Entries
        List<Mileage_Entry__c> allEntries = [
                SELECT Id, Work_Order__c, Time_Sheet__c, Work_Order__r.WorkType.Name
                FROM Mileage_Entry__c
        ];

        Test.startTest();
        MileageEntryProjectLinkService.handler(allEntries);
        Test.stopTest();

        // Verify only Waste Management entries were modified
        Integer modifiedCount = [
                SELECT COUNT()
                FROM Mileage_Entry__c
                WHERE Work_Order__r.WorkType.Name = 'Waste Management'
                AND Work_Order__c != null
        ];
        System.assert(modifiedCount > 0, 'Expected Waste Management entries to be modified');
    }
}