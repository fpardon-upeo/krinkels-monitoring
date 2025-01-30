# TimeSheetControllerTest Class

`ISTEST`

This class contains unit tests for validating the behavior of Apex classes 
and triggers. 
 
Unit tests are class methods that verify whether a particular piece 
of code is working properly. Unit test methods take no arguments, 
commit no data to the database, and are flagged with the testMethod 
keyword in the method definition. 
 
All test methods in an org are executed whenever Apex code is deployed 
to a production org to confirm correctness, ensure code 
coverage, and prevent regressions. All Apex classes are 
required to have at least 75% code coverage in order to be deployed 
to a production org. In addition, all triggers must have some code coverage. 
 
The

**IsTest** 

class annotation indicates this class only contains test 
methods. Classes defined with the

**IsTest** 

annotation do not count against 
the org size limit for all Apex scripts. 
 
See the Apex Language Reference for more information about Testing and Code Coverage.

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * This class contains unit tests for validating the behavior of Apex classes
 * and triggers.
 *
 * Unit tests are class methods that verify whether a particular piece
 * of code is working properly. Unit test methods take no arguments,
 * commit no data to the database, and are flagged with the testMethod
 * keyword in the method definition.
 *
 * All test methods in an org are executed whenever Apex code is deployed
 * to a production org to confirm correctness, ensure code
 * coverage, and prevent regressions. All Apex classes are
 * required to have at least 75% code coverage in order to be deployed
 * to a production org. In addition, all triggers must have some code coverage.
 *
 * The @isTest class annotation indicates this class only contains test
 * methods. Classes defined with the @isTest annotation do not count against
 * the org size limit for all Apex scripts.
 *
 * See the Apex Language Reference for more information about Testing and Code Coverage.
 */
@isTest
private class TimeSheetControllerTest {
  // Create test data setup method to avoid repetition
  @TestSetup
  static void setupTestData() {
    //Create User
    Profile p = [SELECT Id FROM Profile WHERE Name = 'Standard User' LIMIT 1];
    User u = new User(
      FirstName = 'Test',
      LastName = 'User',
      Email = 'testuser@test.com',
      Username = 'testuser' + DateTime.now().getTime() + '@test.com',
      Alias = 'tuser',
      TimeZoneSidKey = 'America/Los_Angeles',
      LocaleSidKey = 'en_US',
      EmailEncodingKey = 'UTF-8',
      LanguageLocaleKey = 'en_US',
      ProfileId = p.Id
    );
    insert u;

    // Create Service Resource
    ServiceResource resource = new ServiceResource(
      Name = 'Test Resource',
      ResourceType = 'T',
      IsActive = true,
      RelatedRecordId = u.Id
    );
    insert resource;

    // Create TimeSheet
    TimeSheet timeSheet = new TimeSheet(
      ServiceResourceId = resource.Id,
      StartDate = Date.today(),
      EndDate = Date.today().addDays(6),
      Status = 'New'
    );
    insert timeSheet;

    // Create TimeSheet Entry
    TimeSheetEntry timeSheetEntry = new TimeSheetEntry(
      TimeSheetId = timeSheet.Id,
      StartTime = Datetime.now().addHours(-4),
      EndTime = Datetime.now().addHours(-2),
      Type = 'Regular',
      Status = 'New',
      Subject = 'Test Entry'
    );
    insert timeSheetEntry;

    // Create Break Resource Absence
    Id breakRecordTypeId = Schema.SObjectType.ResourceAbsence.getRecordTypeInfosByDeveloperName()
      .get('Break')
      .getRecordTypeId();

    ResourceAbsence break1 = new ResourceAbsence(
      ResourceId = resource.Id,
      Start = timeSheetEntry.StartTime.addHours(1),
      End = timeSheetEntry.StartTime.addHours(2),
      Type = 'Break',
      RecordTypeId = breakRecordTypeId
    );
    insert break1;

    // Create Mileage Entry
    Mileage_Entry__c mileageEntry = new Mileage_Entry__c(
      Time_Sheet__c = timeSheet.Id,
      Starting_Mileage__c = 100,
      Ending_Mileage__c = 150,
      Starting_Location_Type__c = 'Home',
      Ending_Location_Type__c = 'Customer',
      Allowance_Type__c = 'Driver'
    );
    insert mileageEntry;

    TimeSheetShare tsShare = new TimeSheetShare(
      ParentId = timeSheet.Id,
      UserOrGroupId = u.Id,
      AccessLevel = 'Edit'
    );
    insert tsShare;
  }

  @isTest
  static void testGetTimeSheet() {
    TimeSheet ts = [SELECT Id FROM TimeSheet LIMIT 1];

    Test.startTest();

    TimeSheetController.TimeSheetWrapper wrapper = TimeSheetController.getTimeSheet(
      ts.Id
    );

    Test.stopTest();

    Assert.isNotNull(wrapper.timeSheet, 'TimeSheet should not be null');
    Assert.isNotNull(
      wrapper.resourceAbsences,
      'ResourceAbsences should not be null'
    );
    Assert.areEqual(
      1,
      wrapper.timeSheet.TimeSheetEntries.size(),
      'Should have one time sheet entry'
    );
    Assert.areEqual(
      1,
      wrapper.resourceAbsences.size(),
      'Should have one break record'
    );
    Assert.areEqual(
      1,
      wrapper.timeSheet.Mileage_Entries__r.size(),
      'Should have one mileage entry'
    );
  }

  @isTest
  static void testUpdateTimeSheetEntry() {
    TimeSheetEntry entry = [SELECT Id, TimeSheetId FROM TimeSheetEntry LIMIT 1];

    // Create input times
    DateTime newStartTime = DateTime.now().addHours(-3);
    DateTime newEndTime = DateTime.now().addHours(-1);

    System.debug(
      'Original input start time: ' + newStartTime.format('yyyy-MM-dd HH:mm:ss')
    );

    // Round input times to match the expected behavior
    DateTime expectedStartTime = DateTimeRounder.roundSingle(newStartTime, 5); // Changed to 20 minutes
    DateTime expectedEndTime = DateTimeRounder.roundSingle(newEndTime, 5);

    System.debug(
      'Expected rounded start time: ' +
      expectedStartTime.format('yyyy-MM-dd HH:mm:ss')
    );

    Test.startTest();
    TimeSheetController.TimeSheetWrapper result = TimeSheetController.updateTimeSheetEntry(
      entry.Id,
      newStartTime,
      newEndTime
    );
    Test.stopTest();

    TimeSheetEntry updatedEntry = [
      SELECT StartTime, EndTime
      FROM TimeSheetEntry
      WHERE Id = :entry.Id
    ];

    System.debug(
      'Actual stored start time: ' +
      updatedEntry.StartTime.format('yyyy-MM-dd HH:mm:ss')
    );

    Assert.areEqual(
      expectedStartTime.format('yyyy-MM-dd HH:mm'),
      updatedEntry.StartTime.format('yyyy-MM-dd HH:mm'),
      'Start time should be rounded to nearest 5-minute interval'
    );
    Assert.areEqual(
      expectedEndTime.format('yyyy-MM-dd HH:mm'),
      updatedEntry.EndTime.format('yyyy-MM-dd HH:mm'),
      'End time should be rounded to nearest 5-minute interval'
    );
  }

  @isTest
  static void testUpdateAbsence() {
    TimeSheet ts = [SELECT Id FROM TimeSheet LIMIT 1];
    ResourceAbsence absence = [SELECT Id FROM ResourceAbsence LIMIT 1];

    // Create input times - using specific times to test rounding
    DateTime newStart = DateTime.newInstance(2025, 1, 7, 7, 52, 0); // Should round to 7:50
    DateTime newEnd = DateTime.newInstance(2025, 1, 7, 8, 58, 0); // Should round to 9:00

    // Calculate expected rounded times
    DateTime expectedStart = DateTime.newInstance(2025, 1, 7, 7, 50, 0); // 7:50
    DateTime expectedEnd = DateTime.newInstance(2025, 1, 7, 9, 0, 0); // 9:00

    Test.startTest();
    TimeSheetController.TimeSheetWrapper result = TimeSheetController.updateAbsence(
      absence.Id,
      newStart,
      newEnd,
      ts.Id
    );
    Test.stopTest();

    ResourceAbsence updatedAbsence = [
      SELECT Start, End
      FROM ResourceAbsence
      WHERE Id = :absence.Id
    ];

    Assert.areEqual(
      expectedStart,
      updatedAbsence.Start,
      'Start time should round down to 7:50 as it\'s closer than 7:55'
    );
    Assert.areEqual(
      expectedEnd,
      updatedAbsence.End,
      'End time should round up to 9:00 as it\'s closer than 8:55'
    );
  }

  //Still to rework////
  // @isTest
  // static void testSubmitTimeSheet() {
  //   // Get a TimeSheet in 'New' status
  //   TimeSheet ts = [
  //     SELECT Id, Status
  //     FROM TimeSheet
  //     WHERE Status = 'New'
  //     LIMIT 1
  //   ];

  //   String timeSheetId = String.valueOf(ts.Id);

  //   Test.startTest();
  //   try {
  //     // Convert Id to String since the method expects a String parameter
  //     TimeSheetController.submitTimeSheet(timeSheetId);

  //     // Verify the status was updated
  //     TimeSheet submittedTS = [SELECT Status FROM TimeSheet WHERE Id = :ts.Id];

  //     Assert.areEqual(
  //       'Submitted',
  //       submittedTS.Status,
  //       'TimeSheet status should be Submitted'
  //     );
  //   } catch (Exception e) {
  //     System.debug(
  //       'Exception caught: ' + e.getTypeName() + ' - ' + e.getMessage()
  //     );
  //     Assert.fail(
  //       'Test failed with exception: ' +
  //         e.getTypeName() +
  //         ' - ' +
  //         e.getMessage() +
  //         '\nStack Trace: ' +
  //         e.getStackTraceString()
  //     );
  //   }
  //   Test.stopTest();
  // }

  @isTest
  static void testSubmitTimeSheetWithInvalidId() {
    Test.startTest();
    try {
      TimeSheetController.submitTimeSheet('invalid-id');
      Assert.fail('Should throw an exception for invalid ID');
    } catch (AuraHandledException e) {
      Assert.isTrue(true, 'Exception was thrown as expected');
    }
    Test.stopTest();
  }

  @isTest
  static void testGetMileageEntries() {
    TimeSheet ts = [SELECT Id FROM TimeSheet LIMIT 1];

    Test.startTest();
    TimeSheet result = TimeSheetController.getMileageEntries(ts.Id);
    Test.stopTest();

    Assert.isNotNull(result, 'Should return TimeSheet');
    Assert.isNotNull(result.Mileage_Entries__r, 'Should have mileage entries');
    Assert.areEqual(
      1,
      result.Mileage_Entries__r.size(),
      'Should have one mileage entry'
    );
  }

  // @isTest
  // static void testGetResourceId() {
  //   // This test needs to be removed or modified to match the actual implementation
  //   // since getResourceId() doesn't exist in the controller
  //   TimeSheet ts = [SELECT Id, ServiceResourceId FROM TimeSheet LIMIT 1];

  //   Test.startTest();
  //   Id resultId = TimeSheetController.getResourceId(ts.Id);
  //   Test.stopTest();

  //   Assert.areEqual(
  //     ts.ServiceResourceId,
  //     resultId,
  //     'Should return correct Service Resource Id'
  //   );
  // }

  @isTest
  static void testGetBreakRecordTypeId() {
    Test.startTest();
    Id breakRTId = TimeSheetController.getBreakRecordTypeId();
    Test.stopTest();

    Id expectedRTId = Schema.SObjectType.ResourceAbsence.getRecordTypeInfosByDeveloperName()
      .get('Break')
      .getRecordTypeId();
    Assert.areEqual(
      expectedRTId,
      breakRTId,
      'Should return correct Break record type Id'
    );
  }

  @isTest
  static void testGetMileageEntriesError() {
    Test.startTest();
    try {
      TimeSheetController.getMileageEntries(null);
      Assert.fail('Should throw an exception for null Id');
    } catch (AuraHandledException e) {
      Assert.isTrue(true, 'Exception was caught as expected');
    }
    Test.stopTest();
  }

  // @isTest
  // static void testGetResourceIdError() {
  //   // This test needs to be removed or modified to match the actual implementation
  //   Test.startTest();
  //   try {
  //     TimeSheetController.getResourceId(null);
  //     Assert.fail('Should throw an exception for invalid Id');
  //   } catch (AuraHandledException e) {
  //     Assert.isTrue(true, 'Exception was caught as expected');
  //   }
  //   Test.stopTest();
  // }

  @isTest
  static void testTimeSheetWrapperError() {
    Test.startTest();
    try {
      TimeSheetController.getTimeSheet(null);
      Assert.fail('Should throw an exception for null Id');
    } catch (Exception e) {
      Assert.isTrue(true, 'Exception was caught as expected');
    }
    Test.stopTest();
  }

  @isTest
  static void testGetTimeSheetByResourceAndDate() {
    TimeSheet ts = [
      SELECT Id, ServiceResourceId, EndDate
      FROM TimeSheet
      LIMIT 1
    ];

    Test.startTest();
    TimeSheetController.TimeSheetWrapper wrapper = TimeSheetController.getTimeSheetByResourceAndDate(
      ts.ServiceResourceId,
      ts.EndDate
    );
    Test.stopTest();

    Assert.isNotNull(wrapper.timeSheet, 'TimeSheet should be found');
    Assert.isNotNull(
      wrapper.resourceAbsences,
      'ResourceAbsences should not be null'
    );
  }

  @isTest
  static void testGetTimeSheetByResourceAndDateNoResults() {
    ServiceResource resource = [SELECT Id FROM ServiceResource LIMIT 1];

    Test.startTest();
    TimeSheetController.TimeSheetWrapper wrapper = TimeSheetController.getTimeSheetByResourceAndDate(
      resource.Id,
      Date.today().addYears(1)
    );
    Test.stopTest();

    Assert.isNull(wrapper.timeSheet, 'TimeSheet should be null when not found');
    Assert.isNotNull(
      wrapper.resourceAbsences,
      'ResourceAbsences should be empty list'
    );
    Assert.areEqual(
      0,
      wrapper.resourceAbsences.size(),
      'ResourceAbsences should be empty'
    );
  }

  @isTest
  static void testGetWorkSchedule() {
    ServiceResource resource = [SELECT Id FROM ServiceResource LIMIT 1];

    // Create test work schedule
    Work_Schedule__c schedule = new Work_Schedule__c(Name = 'Test Schedule');
    insert schedule;

    // Update service resource with work schedule
    resource.Work_Schedule__c = schedule.Id;
    update resource;

    Test.startTest();
    Work_Schedule__c result = TimeSheetController.getWorkSchedule(resource.Id);
    Test.stopTest();

    Assert.isNotNull(result, 'Work Schedule should be returned');
    Assert.areEqual(
      schedule.Id,
      result.Id,
      'Correct schedule should be returned'
    );
  }

  @isTest
  static void testGetUserSettings() {
    ServiceResource resource = [SELECT Id FROM ServiceResource LIMIT 1];

    // Create test user settings
    User_Settings__c settings = new User_Settings__c(
      Service_Resource__c = resource.Id,
      Start_Time__c = Time.newInstance(9, 0, 0, 0),
      End_Time__c = Time.newInstance(17, 0, 0, 0)
    );
    insert settings;

    Test.startTest();
    User_Settings__c result = TimeSheetController.getUserSettings(resource.Id);
    Test.stopTest();

    Assert.isNotNull(result, 'User Settings should be returned');
    Assert.areEqual(
      Time.newInstance(9, 0, 0, 0),
      result.Start_Time__c,
      'Start time should match'
    );
  }

  @isTest
  static void testUpdateUserSettings() {
    ServiceResource resource = [SELECT Id FROM ServiceResource LIMIT 1];

    User_Settings__c settings = new User_Settings__c(
      Service_Resource__c = resource.Id,
      Start_Time__c = Time.newInstance(9, 0, 0, 0),
      End_Time__c = Time.newInstance(17, 0, 0, 0)
    );
    insert settings;

    Test.startTest();
    TimeSheetController.updateUserSettings(
      settings.Id,
      36000000, // 10:00 AM in milliseconds
      57600000 // 4:00 PM in milliseconds
    );
    Test.stopTest();

    User_Settings__c updated = [
      SELECT Start_Time__c, End_Time__c
      FROM User_Settings__c
      WHERE Id = :settings.Id
    ];
    Assert.areEqual(
      Time.newInstance(10, 0, 0, 0),
      updated.Start_Time__c,
      'Start time should be updated'
    );
    Assert.areEqual(
      Time.newInstance(16, 0, 0, 0),
      updated.End_Time__c,
      'End time should be updated'
    );
  }

  @isTest
  static void testCreateUserSettings() {
    ServiceResource resource = [SELECT Id FROM ServiceResource LIMIT 1];

    Test.startTest();
    TimeSheetController.createUserSettings(
      resource.Id,
      32400000, // 9:00 AM in milliseconds
      61200000 // 5:00 PM in milliseconds
    );
    Test.stopTest();

    List<User_Settings__c> settings = [
      SELECT Start_Time__c, End_Time__c
      FROM User_Settings__c
      WHERE Service_Resource__c = :resource.Id
    ];

    Assert.areEqual(
      1,
      settings.size(),
      'One settings record should be created'
    );
    Assert.areEqual(
      Time.newInstance(9, 0, 0, 0),
      settings[0].Start_Time__c,
      'Start time should be set correctly'
    );
    Assert.areEqual(
      Time.newInstance(17, 0, 0, 0),
      settings[0].End_Time__c,
      'End time should be set correctly'
    );
  }

  @isTest
  static void testMillisecondsToTime() {
    ServiceResource resource = [SELECT Id FROM ServiceResource LIMIT 1];

    User_Settings__c settings = new User_Settings__c(
      Service_Resource__c = resource.Id,
      Start_Time__c = Time.newInstance(9, 0, 0, 0),
      End_Time__c = Time.newInstance(17, 0, 0, 0)
    );
    insert settings;

    Test.startTest();
    TimeSheetController.updateUserSettings(
      settings.Id,
      43200000, // 12:00 PM in milliseconds
      46800000 // 1:00 PM in milliseconds
    );
    Test.stopTest();

    User_Settings__c updated = [
      SELECT Start_Time__c, End_Time__c
      FROM User_Settings__c
      WHERE Id = :settings.Id
    ];
    Assert.areEqual(
      Time.newInstance(12, 0, 0, 0),
      updated.Start_Time__c,
      'Milliseconds should be correctly converted to Time'
    );
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

### `testGetTimeSheet()`

`ISTEST`

#### Signature
```apex
private static void testGetTimeSheet()
```

#### Return Type
**void**

---

### `testUpdateTimeSheetEntry()`

`ISTEST`

#### Signature
```apex
private static void testUpdateTimeSheetEntry()
```

#### Return Type
**void**

---

### `testUpdateAbsence()`

`ISTEST`

#### Signature
```apex
private static void testUpdateAbsence()
```

#### Return Type
**void**

---

### `testSubmitTimeSheetWithInvalidId()`

`ISTEST`

#### Signature
```apex
private static void testSubmitTimeSheetWithInvalidId()
```

#### Return Type
**void**

---

### `testGetMileageEntries()`

`ISTEST`

#### Signature
```apex
private static void testGetMileageEntries()
```

#### Return Type
**void**

---

### `testGetBreakRecordTypeId()`

`ISTEST`

#### Signature
```apex
private static void testGetBreakRecordTypeId()
```

#### Return Type
**void**

---

### `testGetMileageEntriesError()`

`ISTEST`

#### Signature
```apex
private static void testGetMileageEntriesError()
```

#### Return Type
**void**

---

### `testTimeSheetWrapperError()`

`ISTEST`

#### Signature
```apex
private static void testTimeSheetWrapperError()
```

#### Return Type
**void**

---

### `testGetTimeSheetByResourceAndDate()`

`ISTEST`

#### Signature
```apex
private static void testGetTimeSheetByResourceAndDate()
```

#### Return Type
**void**

---

### `testGetTimeSheetByResourceAndDateNoResults()`

`ISTEST`

#### Signature
```apex
private static void testGetTimeSheetByResourceAndDateNoResults()
```

#### Return Type
**void**

---

### `testGetWorkSchedule()`

`ISTEST`

#### Signature
```apex
private static void testGetWorkSchedule()
```

#### Return Type
**void**

---

### `testGetUserSettings()`

`ISTEST`

#### Signature
```apex
private static void testGetUserSettings()
```

#### Return Type
**void**

---

### `testUpdateUserSettings()`

`ISTEST`

#### Signature
```apex
private static void testUpdateUserSettings()
```

#### Return Type
**void**

---

### `testCreateUserSettings()`

`ISTEST`

#### Signature
```apex
private static void testCreateUserSettings()
```

#### Return Type
**void**

---

### `testMillisecondsToTime()`

`ISTEST`

#### Signature
```apex
private static void testMillisecondsToTime()
```

#### Return Type
**void**