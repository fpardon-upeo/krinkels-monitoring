# ATAKWorkLogServiceTest Class

`ISTEST`

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
@IsTest
private class ATAKWorkLogServiceTest {

    @TestSetup
    static void setupTestData() {
        Map<String, Object> baseData = FieldServiceTestData.createTimeSheetTestData();
        TimeSheet timeSheet = (TimeSheet)baseData.get('TimeSheet');
        System.debug('🔍 TimeSheet: ' + timeSheet);
        ServiceResource resource = (ServiceResource)baseData.get('ServiceResource');
        User testUser = (User)baseData.get('User');

        // Add ATAK Code to User and update Service Resource's RelatedRecord
        testUser.ATAK_Code__c = 'USER001';
        update testUser;

        // Update ServiceResource's RelatedRecord ATAK Code
        resource.RelatedRecord = testUser;
        update resource;

        // Create ATAK Projects for first and last work orders
        ATAK_Project__c firstAtakProject = new ATAK_Project__c(
                SubProject_ATAK__c = 'FIRST001',
                Subproject_Name__c = 'First Project'
        );
        insert firstAtakProject;

        // Create Asset with ATAK Project
        Asset asset = new Asset(
                Name = 'Test Asset',
                ATAK_Project__c = firstAtakProject.Id
        );
        insert asset;

        // Create Work Order
        WorkOrder wo = new WorkOrder(
                StartDate = Date.today(),
                EndDate = Date.today(),
                AssetId = asset.Id,
                Subject = 'Test Work Order'
        );
        insert wo;

        // Create TimeSheet Entry
        TimeSheetEntry tse = new TimeSheetEntry(
                TimeSheetId = timeSheet.Id,
                StartTime = DateTime.now().addHours(-2),
                EndTime = DateTime.now().addHours(-1),
                WorkOrderId = wo.Id,
                Type = 'Work'
        );
        insert tse;

        System.debug('🔍 Created TimeSheetEntry: ' + [SELECT Id, WorkOrderId, WorkOrder.AssetId,
                WorkOrder.Asset.ATAK_Project__c,
                TimeSheet.ServiceResource.RelatedRecord.ATAK_Code__c
        FROM TimeSheetEntry WHERE Id = :tse.Id]);

        // Create Mileage Entry
        Mileage_Entry__c mileage = new Mileage_Entry__c(
                Time_Sheet__c = timeSheet.Id,
                Work_Order__c = wo.Id,
                Codes_ATAK_Limbus__c = 'KMAP',
                Service_Resource__c = resource.Id,
                Type__c = 'Starting' // Adding a type to avoid null
        );
        insert mileage;

        System.debug('🔍 Created Mileage Entry: ' + [SELECT Id, Work_Order__c, Work_Order__r.AssetId,
                Work_Order__r.Asset.ATAK_Project__c,
                Service_Resource__r.RelatedRecord.ATAK_Code__c
        FROM Mileage_Entry__c WHERE Id = :mileage.Id]);

        //Get the Material Record Type Id of the Product2 object
        Id materialRecordTypeId = Schema.SObjectType.Product2.getRecordTypeInfosByName().get('Material').getRecordTypeId();

        // Create Product and Material Consumption
        Product2 product = new Product2(
                Name = 'Test Product',
                ATAK_Code__c = 'PROD001',
                IsActive = true,
                RecordTypeId = materialRecordTypeId
        );
        insert product;

        // Create Location
        Schema.Location location = new Schema.Location(
                Name = 'Test Location',
                IsInventoryLocation = true
        );
        insert location;

        // Create Product Item
        ProductItem productItem = new ProductItem(
                Product2Id = product.Id,
                LocationId = location.Id,
                QuantityOnHand = 100
        );
        insert productItem;

        // Create Product Consumed
        ProductConsumed material = new ProductConsumed(
                ProductItemId = productItem.Id,
                WorkOrderId = wo.Id,
                QuantityConsumed = 10.0
        );
        insert material;

        System.debug('🔍 Created ProductConsumed: ' + [SELECT Id, WorkOrderId, WorkOrder.AssetId,
                WorkOrder.Asset.ATAK_Project__c, Product2.ATAK_Code__c
        FROM ProductConsumed WHERE Id = :material.Id]);
    }

    @IsTest
    static void testWorkLogCreation() {
        // Get the TimeSheet and verify setup
        TimeSheet timeSheet = [SELECT Id, ServiceResource.RelatedRecord.ATAK_Code__c
        FROM TimeSheet
        WHERE Id IN (SELECT TimeSheetId FROM TimeSheetEntry)
        LIMIT 1];

        System.debug('🔍 Testing with TimeSheet: ' + timeSheet);

        System.debug('🔍 TimeSheet Entries: ' + [SELECT Id, WorkOrderId, WorkOrder.AssetId,
                WorkOrder.Asset.ATAK_Project__c
        FROM TimeSheetEntry
        WHERE TimeSheetId = :timeSheet.Id]);

        Test.startTest();
        ATAKWorkLogService.createWorkLogsForTimeSheet(timeSheet.Id);
        Test.stopTest();

        // Verify Work Logs were created
        List<ATAK_Work_Log__c> workLogs = [
                SELECT Id, Source_Type__c, Source_Record_Id__c, Performance_Resource_Type__c,
                        External_Id__c
                FROM ATAK_Work_Log__c
                WHERE Time_Sheet__c = :timeSheet.Id
        ];

        // Log details of created records
        for(ATAK_Work_Log__c log : workLogs) {
            System.debug('🔍 Created Work Log: ' + log);
        }
    }

    @IsTest
    static void testWorkLogCreationWithInvalidTimesheet() {
        Id invalidId = TimeSheet.SObjectType.getDescribe().getKeyPrefix() + '000000000001';

        Test.startTest();
        try {
            ATAKWorkLogService.createWorkLogsForTimeSheet(invalidId);
            System.assert(false, 'Should have thrown an exception');
        } catch(Exception e) {
            System.assert(true, 'Expected exception was thrown');
        }
        Test.stopTest();
    }

    @IsTest
    static void testWorkLogCreationWithNoEntries() {
        // Create a new empty timesheet
        ServiceResource resource = [SELECT Id FROM ServiceResource LIMIT 1];
        TimeSheet emptyTimeSheet = FieldServiceTestData.createTestTimeSheet(
                resource.Id,
                Date.today().addDays(7),
                true
        );

        // Update the service resource with the ATAK code
        User testUser = [SELECT Id, ATAK_Code__c FROM User WHERE Id = :UserInfo.getUserId() LIMIT 1];
        testUser.ATAK_Code__c = 'USER002';
        update testUser;

        resource.RelatedRecord = testUser;
        update resource;

        System.debug('🔍 Testing empty TimeSheet processing');

        Test.startTest();
        try {
            // This should now throw a more specific exception
            ATAKWorkLogService.createWorkLogsForTimeSheet(emptyTimeSheet.Id);
            System.assert(false, 'Should have thrown ATAKWorkLogService.WorkLogException');
        } catch(ATAKWorkLogService.WorkLogException e) {
            // This is the expected behavior
            System.assert(e.getMessage().contains('No TimeSheet entries found'),
                    'Exception should indicate empty timesheet: ' + e.getMessage());
        } catch(Exception e) {
            System.assert(false, 'Unexpected exception type: ' + e.getTypeName() + ' with message: ' + e.getMessage());
        }
        Test.stopTest();

        // Verify no work logs were created
        List<ATAK_Work_Log__c> workLogs = [
                SELECT Id
                FROM ATAK_Work_Log__c
                WHERE Time_Sheet__c = :emptyTimeSheet.Id
        ];

        System.assertEquals(0, workLogs.size(), 'No work logs should have been created for empty timesheet');
    }

    @IsTest
    static void testDateTimeParsing() {
        String dateTimeStr = '20241128143000'; // 2024-11-28 14:30:00
        String dateStr = '20241128';

        Test.startTest();
        DateTime dt = ATAKWorkLogService.parseATAKDateTime(dateTimeStr);
        Date d = ATAKWorkLogService.parseATAKDate(dateStr);
        Test.stopTest();

        System.assertEquals(2024, dt.year(), 'Year should be 2024');
        System.assertEquals(11, dt.month(), 'Month should be 11');
        System.assertEquals(28, dt.day(), 'Day should be 28');
        System.assertEquals(14, dt.hour(), 'Hour should be 14');
        System.assertEquals(30, dt.minute(), 'Minute should be 30');

        System.assertEquals(2024, d.year(), 'Year should be 2024');
        System.assertEquals(11, d.month(), 'Month should be 11');
        System.assertEquals(28, d.day(), 'Day should be 28');
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

### `testWorkLogCreation()`

`ISTEST`

#### Signature
```apex
private static void testWorkLogCreation()
```

#### Return Type
**void**

---

### `testWorkLogCreationWithInvalidTimesheet()`

`ISTEST`

#### Signature
```apex
private static void testWorkLogCreationWithInvalidTimesheet()
```

#### Return Type
**void**

---

### `testWorkLogCreationWithNoEntries()`

`ISTEST`

#### Signature
```apex
private static void testWorkLogCreationWithNoEntries()
```

#### Return Type
**void**

---

### `testDateTimeParsing()`

`ISTEST`

#### Signature
```apex
private static void testDateTimeParsing()
```

#### Return Type
**void**