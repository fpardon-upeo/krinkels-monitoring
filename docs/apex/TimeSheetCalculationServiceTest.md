# TimeSheetCalculationServiceTest Class

`ISTEST`

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
@IsTest
private class TimeSheetCalculationServiceTest {

    private static User testUser;
    private static ServiceResource resource;

    private static void setupTestData() {
        System.runAs(new User(Id = UserInfo.getUserId())) {
            testUser = FieldServiceTestData.createTestUser('TestFSL', 'Standard User', true);
            FieldServiceTestData.assignFieldServicePermissionSetLicense(testUser.Id);
        }

        System.runAs(testUser) {
            resource = FieldServiceTestData.createTestServiceResource('Test Resource', null, true, testUser.Id);
        }
    }

    @IsTest
    static void testBreakFullyWithinTimeSheetEntry() {
        setupTestData();

        System.runAs(testUser) {
            // Create TimeSheet with entry from 8 AM to 12 PM
            TimeSheet timeSheet = FieldServiceTestData.createTestTimeSheet(resource.Id, Date.today(), true);
            DateTime startTime = DateTime.newInstance(Date.today(), Time.newInstance(8, 0, 0, 0));
            TimeSheetEntry entry = FieldServiceTestData.createTestTimeSheetEntry(timeSheet.Id, startTime,
                    startTime.addHours(4), true);

            // Create break from 9 AM to 10 AM (1 hour break fully within entry)
            ResourceAbsence absence = FieldServiceTestData.createTestResourceAbsence(resource.Id,
                    startTime.addHours(1), startTime.addHours(2), true);

            Test.startTest();
            TimeSheetCalculationService.processResourceAbsenceChanges(new List<ResourceAbsence>{absence});
            Test.stopTest();

            // Verify results
            TimeSheetEntry updatedEntry = [SELECT Id, Working_Time__c, Break_Duration__c
            FROM TimeSheetEntry WHERE Id = :entry.Id];
            System.assertEquals(180, updatedEntry.Working_Time__c, 'Working time should be 3 hours (240 - 60 minutes)');
            System.assertEquals(60, updatedEntry.Break_Duration__c, 'Break duration should be 1 hour (60 minutes)');
        }
    }

    @IsTest
    static void testBreakOverlappingStart() {
        setupTestData();

        System.runAs(testUser) {
            TimeSheet timeSheet = FieldServiceTestData.createTestTimeSheet(resource.Id, Date.today(), true);
            DateTime startTime = DateTime.newInstance(Date.today(), Time.newInstance(8, 0, 0, 0));
            TimeSheetEntry entry = FieldServiceTestData.createTestTimeSheetEntry(timeSheet.Id, startTime,
                    startTime.addHours(4), true);

            // Create break from 7:30 AM to 8:30 AM
            DateTime breakStart = DateTime.newInstance(Date.today(), Time.newInstance(7, 30, 0, 0));
            DateTime breakEnd = DateTime.newInstance(Date.today(), Time.newInstance(8, 30, 0, 0));
            ResourceAbsence absence = FieldServiceTestData.createTestResourceAbsence(resource.Id,
                    breakStart, breakEnd, true);

            Test.startTest();
            TimeSheetCalculationService.processResourceAbsenceChanges(new List<ResourceAbsence>{absence});
            Test.stopTest();

            TimeSheetEntry updatedEntry = [SELECT Id, Working_Time__c, Break_Duration__c
            FROM TimeSheetEntry WHERE Id = :entry.Id];
            System.assertEquals(210, updatedEntry.Working_Time__c, 'Working time should be 3.5 hours (240 - 30 minutes)');
            System.assertEquals(30, updatedEntry.Break_Duration__c, 'Break duration should be 30 minutes');
        }
    }

    @IsTest
    static void testMultipleBreaks() {
        setupTestData();

        System.runAs(testUser) {
            TimeSheet timeSheet = FieldServiceTestData.createTestTimeSheet(resource.Id, Date.today(), true);
            DateTime startTime = DateTime.newInstance(Date.today(), Time.newInstance(8, 0, 0, 0));
            TimeSheetEntry entry = FieldServiceTestData.createTestTimeSheetEntry(timeSheet.Id, startTime,
                    startTime.addHours(4), true);

            // Create two 30-minute breaks
            ResourceAbsence absence1 = FieldServiceTestData.createTestResourceAbsence(resource.Id,
                    DateTime.newInstance(Date.today(), Time.newInstance(9, 0, 0, 0)),
                    DateTime.newInstance(Date.today(), Time.newInstance(9, 30, 0, 0)),
                    true);

            ResourceAbsence absence2 = FieldServiceTestData.createTestResourceAbsence(resource.Id,
                    DateTime.newInstance(Date.today(), Time.newInstance(10, 30, 0, 0)),
                    DateTime.newInstance(Date.today(), Time.newInstance(11, 0, 0, 0)),
                    true);

            Test.startTest();
            TimeSheetCalculationService.processResourceAbsenceChanges(
                    new List<ResourceAbsence>{absence1, absence2});
            Test.stopTest();

            TimeSheetEntry updatedEntry = [SELECT Id, Working_Time__c, Break_Duration__c
            FROM TimeSheetEntry WHERE Id = :entry.Id];
            System.assertEquals(180, updatedEntry.Working_Time__c, 'Working time should be 3 hours (240 - 60 minutes)');
            System.assertEquals(60, updatedEntry.Break_Duration__c, 'Break duration should be 1 hour (two 30-min breaks)');
        }
    }

    @IsTest
    static void testBreakSpanningMultipleEntries() {
        setupTestData();

        System.runAs(testUser) {
            TimeSheet timeSheet = FieldServiceTestData.createTestTimeSheet(resource.Id, Date.today(), true);

            // Create two consecutive entries: 8 AM to 10 AM and 10 AM to 12 PM
            DateTime firstEntryStart = DateTime.newInstance(Date.today(), Time.newInstance(8, 0, 0, 0));
            DateTime firstEntryEnd = DateTime.newInstance(Date.today(), Time.newInstance(10, 0, 0, 0));
            DateTime secondEntryEnd = DateTime.newInstance(Date.today(), Time.newInstance(12, 0, 0, 0));

            TimeSheetEntry entry1 = FieldServiceTestData.createTestTimeSheetEntry(timeSheet.Id,
                    firstEntryStart, firstEntryEnd, true);
            TimeSheetEntry entry2 = FieldServiceTestData.createTestTimeSheetEntry(timeSheet.Id,
                    firstEntryEnd, secondEntryEnd, true);

            // Create break spanning both entries (9:30 AM to 10:30 AM)
            DateTime breakStart = DateTime.newInstance(Date.today(), Time.newInstance(9, 30, 0, 0));
            DateTime breakEnd = DateTime.newInstance(Date.today(), Time.newInstance(10, 30, 0, 0));
            ResourceAbsence absence = FieldServiceTestData.createTestResourceAbsence(resource.Id,
                    breakStart, breakEnd, true);

            Test.startTest();
            TimeSheetCalculationService.processResourceAbsenceChanges(new List<ResourceAbsence>{absence});
            Test.stopTest();

            TimeSheetEntry updatedEntry1 = [SELECT Id, Working_Time__c, Break_Duration__c
            FROM TimeSheetEntry WHERE Id = :entry1.Id];
            TimeSheetEntry updatedEntry2 = [SELECT Id, Working_Time__c, Break_Duration__c
            FROM TimeSheetEntry WHERE Id = :entry2.Id];

            System.assertEquals(90, updatedEntry1.Working_Time__c,
                    'First entry should have 1.5 hours working time (120 - 30 minutes)');
            System.assertEquals(30, updatedEntry1.Break_Duration__c,
                    'First entry should have 30 minutes break time');

            System.assertEquals(90, updatedEntry2.Working_Time__c,
                    'Second entry should have 1.5 hours working time (120 - 30 minutes)');
            System.assertEquals(30, updatedEntry2.Break_Duration__c,
                    'Second entry should have 30 minutes break time');
        }
    }

    @IsTest
    static void testTimeSheetEntryUpdate() {
        setupTestData();

        System.runAs(testUser) {
            TimeSheet timeSheet = FieldServiceTestData.createTestTimeSheet(resource.Id, Date.today(), true);

            // Create entry from 8 AM to 12 PM
            DateTime startTime = DateTime.newInstance(Date.today(), Time.newInstance(8, 0, 0, 0));
            DateTime endTime = DateTime.newInstance(Date.today(), Time.newInstance(12, 0, 0, 0));

            TimeSheetEntry entry = FieldServiceTestData.createTestTimeSheetEntry(timeSheet.Id, startTime,
                    endTime, true);

            // Create break from 9 AM to 10 AM
            DateTime breakStart = DateTime.newInstance(Date.today(), Time.newInstance(9, 0, 0, 0));
            DateTime breakEnd = DateTime.newInstance(Date.today(), Time.newInstance(10, 0, 0, 0));
            ResourceAbsence absence = FieldServiceTestData.createTestResourceAbsence(resource.Id,
                    breakStart, breakEnd, true);

            Test.startTest();
            // Update TimeSheetEntry to end at 1 PM instead of 12 PM
            entry = [SELECT Id, StartTime, EndTime, TimeSheet.ServiceResourceId
            FROM TimeSheetEntry WHERE Id = :entry.Id];
            entry.EndTime = DateTime.newInstance(Date.today(), Time.newInstance(13, 0, 0, 0));
            update entry;
            TimeSheetCalculationService.processTimeSheetEntryChanges(new List<TimeSheetEntry>{entry});
            Test.stopTest();

            TimeSheetEntry updatedEntry = [SELECT Id, Working_Time__c, Break_Duration__c
            FROM TimeSheetEntry WHERE Id = :entry.Id];

            // Total time is now 5 hours (300 minutes), minus 1 hour break (60 minutes)
            // Should be 240 minutes working time
            System.assertEquals(240, updatedEntry.Working_Time__c,
                    'Working time should be 4 hours (300 - 60 minutes)');
            System.assertEquals(60, updatedEntry.Break_Duration__c,
                    'Break duration should be 1 hour');
        }
    }

    @IsTest
    static void testResourceAbsenceDeleteTrigger() {
        setupTestData();

        System.runAs(testUser) {
            TimeSheet timeSheet = FieldServiceTestData.createTestTimeSheet(resource.Id, Date.today(), true);

            // Create TimeSheetEntry from 8 AM to 12 PM
            DateTime entryStart = DateTime.newInstance(Date.today(), Time.newInstance(8, 0, 0, 0));
            DateTime entryEnd = DateTime.newInstance(Date.today(), Time.newInstance(12, 0, 0, 0));
            TimeSheetEntry entry = FieldServiceTestData.createTestTimeSheetEntry(timeSheet.Id,
                    entryStart, entryEnd, true);

            // Create ResourceAbsence from 9 AM to 10 AM
            DateTime breakStart = DateTime.newInstance(Date.today(), Time.newInstance(9, 0, 0, 0));
            DateTime breakEnd = DateTime.newInstance(Date.today(), Time.newInstance(10, 0, 0, 0));
            ResourceAbsence absence = FieldServiceTestData.createTestResourceAbsence(resource.Id,
                    breakStart, breakEnd, true);

            // Get affected TimeSheetEntries before deletion
            List<TimeSheetEntry> affectedEntries = [
                    SELECT Id, StartTime, EndTime, TimeSheet.ServiceResourceId
                    FROM TimeSheetEntry
                    WHERE TimeSheet.ServiceResourceId = :resource.Id
                    AND StartTime <= :breakEnd
                    AND EndTime >= :breakStart
            ];

            Test.startTest();
            delete absence;

            // Recalculate for affected entries
            TimeSheetCalculationService.processTimeSheetEntryChanges(affectedEntries);
            Test.stopTest();

            TimeSheetEntry updatedEntry = [SELECT Id, Working_Time__c, Break_Duration__c
            FROM TimeSheetEntry WHERE Id = :entry.Id];
            System.assertEquals(240, updatedEntry.Working_Time__c,
                    'Working time should be 4 hours (no breaks)');
            System.assertEquals(0, updatedEntry.Break_Duration__c,
                    'Break duration should be 0 after deletion');
        }
    }

    @IsTest
    static void testTimeSheetEntryCreatedTrigger() {
        setupTestData();

        System.runAs(testUser) {
            TimeSheet timeSheet = FieldServiceTestData.createTestTimeSheet(resource.Id, Date.today(), true);

            // First create a ResourceAbsence from 9 AM to 10 AM
            DateTime breakStart = DateTime.newInstance(Date.today(), Time.newInstance(9, 0, 0, 0));
            DateTime breakEnd = DateTime.newInstance(Date.today(), Time.newInstance(10, 0, 0, 0));
            ResourceAbsence absence = FieldServiceTestData.createTestResourceAbsence(resource.Id,
                    breakStart, breakEnd, true);

            Test.startTest();
            // Then create a TimeSheetEntry that overlaps it (8 AM to 12 PM)
            DateTime entryStart = DateTime.newInstance(Date.today(), Time.newInstance(8, 0, 0, 0));
            DateTime entryEnd = DateTime.newInstance(Date.today(), Time.newInstance(12, 0, 0, 0));

            TimeSheetEntry entry = new TimeSheetEntry(
                    TimeSheetId = timeSheet.Id,
                    StartTime = entryStart,
                    EndTime = entryEnd
            );
            insert entry;

            // Query the full TimeSheetEntry record including TimeSheet relationship
            entry = [SELECT Id, StartTime, EndTime, TimeSheet.ServiceResourceId
            FROM TimeSheetEntry WHERE Id = :entry.Id];

            TimeSheetCalculationService.processTimeSheetEntryChanges(new List<TimeSheetEntry>{entry});
            Test.stopTest();

            TimeSheetEntry updatedEntry = [SELECT Id, Working_Time__c, Break_Duration__c
            FROM TimeSheetEntry WHERE Id = :entry.Id];
            System.assertEquals(180, updatedEntry.Working_Time__c,
                    'Working time should be 3 hours (240 - 60 minutes)');
            System.assertEquals(60, updatedEntry.Break_Duration__c,
                    'Break duration should be 1 hour');
        }
    }

    @IsTest
    static void testRealDataWithTwoOverlappingBreaks() {
        setupTestData();

        System.runAs(testUser) {
            TimeSheet timeSheet = FieldServiceTestData.createTestTimeSheet(resource.Id, Date.today(), true);

            // Create TimeSheetEntry 13:00-18:00
            DateTime entryStart = DateTime.newInstance(2024, 11, 20, 13, 0, 0);
            DateTime entryEnd = DateTime.newInstance(2024, 11, 20, 18, 0, 0);
            TimeSheetEntry entry = FieldServiceTestData.createTestTimeSheetEntry(timeSheet.Id,
                    entryStart, entryEnd, true);

            // Create first ResourceAbsence 12:45-13:45 (overlaps 45 min from 13:00-13:45)
            DateTime break1Start = DateTime.newInstance(2024, 11, 20, 12, 45, 0);
            DateTime break1End = DateTime.newInstance(2024, 11, 20, 13, 45, 0);
            ResourceAbsence absence1 = FieldServiceTestData.createTestResourceAbsence(resource.Id,
                    break1Start, break1End, true);

            // Create second ResourceAbsence 17:30-18:30 (overlaps 30 min from 17:30-18:00)
            DateTime break2Start = DateTime.newInstance(2024, 11, 20, 17, 30, 0);
            DateTime break2End = DateTime.newInstance(2024, 11, 20, 18, 30, 0);
            ResourceAbsence absence2 = FieldServiceTestData.createTestResourceAbsence(resource.Id,
                    break2Start, break2End, true);

            Test.startTest();

            // Debug individual break calculations
            System.debug('Break 1 overlap minutes: ' +
                    TimeSheetCalculationService.calculateOverlapMinutes(entry, absence1));
            System.debug('Break 2 overlap minutes: ' +
                    TimeSheetCalculationService.calculateOverlapMinutes(entry, absence2));

            TimeSheetCalculationService.processResourceAbsenceChanges(
                    new List<ResourceAbsence>{absence1, absence2});
            Test.stopTest();

            TimeSheetEntry updatedEntry = [SELECT Id, Working_Time__c, Break_Duration__c
            FROM TimeSheetEntry WHERE Id = :entry.Id];

            // Total time is 5 hours (300 minutes)
            // Break 1 overlaps for 45 minutes (13:00-13:45)
            // Break 2 overlaps for 30 minutes (17:30-18:00)
            // Total break time should be 75 minutes
            System.assertEquals(225, updatedEntry.Working_Time__c,
                    'Working time should be 3 hours and 45 minutes (300 - 75 minutes)');
            System.assertEquals(75, updatedEntry.Break_Duration__c,
                    'Break duration should be 75 minutes (45 + 30)');

            System.debug('Entry Start: ' + entry.StartTime);
            System.debug('Entry End: ' + entry.EndTime);
            System.debug('Break 1 Start: ' + absence1.Start);
            System.debug('Break 1 End: ' + absence1.End);
            System.debug('Break 2 Start: ' + absence2.Start);
            System.debug('Break 2 End: ' + absence2.End);
            System.debug('Total Break Duration: ' + updatedEntry.Break_Duration__c);
            System.debug('Working Time: ' + updatedEntry.Working_Time__c);
        }
    }

}
```

## Fields
### `testUser`

#### Signature
```apex
private static testUser
```

#### Type
[User](../objects/User.md)

---

### `resource`

#### Signature
```apex
private static resource
```

#### Type
[ServiceResource](../objects/ServiceResource.md)

## Methods
### `setupTestData()`

#### Signature
```apex
private static void setupTestData()
```

#### Return Type
**void**

---

### `testBreakFullyWithinTimeSheetEntry()`

`ISTEST`

#### Signature
```apex
private static void testBreakFullyWithinTimeSheetEntry()
```

#### Return Type
**void**

---

### `testBreakOverlappingStart()`

`ISTEST`

#### Signature
```apex
private static void testBreakOverlappingStart()
```

#### Return Type
**void**

---

### `testMultipleBreaks()`

`ISTEST`

#### Signature
```apex
private static void testMultipleBreaks()
```

#### Return Type
**void**

---

### `testBreakSpanningMultipleEntries()`

`ISTEST`

#### Signature
```apex
private static void testBreakSpanningMultipleEntries()
```

#### Return Type
**void**

---

### `testTimeSheetEntryUpdate()`

`ISTEST`

#### Signature
```apex
private static void testTimeSheetEntryUpdate()
```

#### Return Type
**void**

---

### `testResourceAbsenceDeleteTrigger()`

`ISTEST`

#### Signature
```apex
private static void testResourceAbsenceDeleteTrigger()
```

#### Return Type
**void**

---

### `testTimeSheetEntryCreatedTrigger()`

`ISTEST`

#### Signature
```apex
private static void testTimeSheetEntryCreatedTrigger()
```

#### Return Type
**void**

---

### `testRealDataWithTwoOverlappingBreaks()`

`ISTEST`

#### Signature
```apex
private static void testRealDataWithTwoOverlappingBreaks()
```

#### Return Type
**void**