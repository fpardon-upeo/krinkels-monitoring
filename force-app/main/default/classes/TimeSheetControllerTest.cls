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
      Allowance_Type__c = 'Driver (no passenger)'
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
    DateTime newStartTime = DateTime.now().addHours(-3);
    DateTime newEndTime = DateTime.now().addHours(-1);

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
    Assert.areEqual(
      newStartTime.format('yyyy-MM-dd HH:mm'),
      updatedEntry.StartTime.format('yyyy-MM-dd HH:mm'),
      'Start time should be updated'
    );
    Assert.areEqual(
      newEndTime.format('yyyy-MM-dd HH:mm'),
      updatedEntry.EndTime.format('yyyy-MM-dd HH:mm'),
      'End time should be updated'
    );
  }

  @isTest
  static void testUpdateAbsence() {
    TimeSheet ts = [SELECT Id FROM TimeSheet LIMIT 1];
    ResourceAbsence absence = [SELECT Id FROM ResourceAbsence LIMIT 1];

    DateTime newStart = DateTime.now().addHours(-2);
    DateTime newEnd = DateTime.now().addHours(-1);

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
      newStart.format('yyyy-MM-dd HH:mm'),
      updatedAbsence.Start.format('yyyy-MM-dd HH:mm'),
      'Start time should be updated'
    );
    Assert.areEqual(
      newEnd.format('yyyy-MM-dd HH:mm'),
      updatedAbsence.End.format('yyyy-MM-dd HH:mm'),
      'End time should be updated'
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

  @isTest
  static void testGetResourceId() {
    TimeSheet ts = [SELECT Id, ServiceResourceId FROM TimeSheet LIMIT 1];

    Test.startTest();
    Id resultId = TimeSheetController.getResourceId(ts.Id);
    Test.stopTest();

    Assert.areEqual(
      ts.ServiceResourceId,
      resultId,
      'Should return correct Service Resource Id'
    );
  }

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

  @isTest
  static void testGetResourceIdError() {
    Test.startTest();
    try {
      TimeSheetController.getResourceId('invalid-id');
      Assert.fail('Should throw an exception for invalid Id');
    } catch (AuraHandledException e) {
      Assert.isTrue(true, 'Exception was caught as expected');
    }
    Test.stopTest();
  }

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
}