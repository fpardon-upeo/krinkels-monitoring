public with sharing class TimeSheetController {
  public class TimeSheetWrapper {
    @AuraEnabled
    public TimeSheet timeSheet;
    @AuraEnabled
    public List<ResourceAbsence> resourceAbsences;
  }

  @AuraEnabled
  public static TimeSheetWrapper getTimeSheet(Id recordId) {
    TimeSheetWrapper wrapper = new TimeSheetWrapper();

    // Get TimeSheet and its entries ordered by StartTime
    wrapper.timeSheet = [
      SELECT
        Id,
        TimeSheetNumber,
        ServiceResourceId,
        StartDate,
        EndDate,
        (
          SELECT Id, StartTime, EndTime, Subject, Type
          FROM TimeSheetEntries
          ORDER BY StartTime ASC
        ),
        (
          SELECT
            Id,
            Allowance_Type__c,
            Starting_Mileage__c,
            Ending_Mileage__c,
            Starting_Location_Type__c,
            Ending_Location_Type__c,
            Calculated_Mileage__c
          FROM Mileage_Entries__r
        )
      FROM TimeSheet
      WHERE Id = :recordId
    ];

    // Get ResourceAbsence records for the same ServiceResource
    wrapper.resourceAbsences = [
      SELECT Id, Start, End, Type, ResourceId, RecordTypeId
      FROM ResourceAbsence
      WHERE
        ResourceId = :wrapper.timeSheet.ServiceResourceId
        AND Start <= :wrapper.timeSheet.EndDate.addDays(1)
        AND End >= :wrapper.timeSheet.StartDate
        // Query only ResourceAbsence records with the Break record type
        AND RecordTypeId = :Schema.SObjectType.ResourceAbsence.getRecordTypeInfosByDeveloperName()
          .get('Break')
          .getRecordTypeId()
    ];

    return wrapper;
  }

  @AuraEnabled
  public static TimeSheetWrapper updateTimeSheetEntry(
    Id timeSheetEntryId,
    DateTime startTime,
    DateTime endTime
  ) {
    try {
      TimeSheetEntry timeSheetEntry = [
        SELECT Id, StartTime, EndTime, TimeSheetId
        FROM TimeSheetEntry
        WHERE Id = :timeSheetEntryId
      ];

      timeSheetEntry.StartTime = startTime;
      timeSheetEntry.EndTime = endTime;

      update timeSheetEntry;

      return getTimeSheet(timeSheetEntry.TimeSheetId);
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }

  @AuraEnabled
  public static TimeSheetWrapper updateAbsence(
    Id absenceId,
    DateTime startTime,
    DateTime endTime,
    Id timeSheetId
  ) {
    ResourceAbsence absence = [
      SELECT Id, Start, End
      FROM ResourceAbsence
      WHERE Id = :absenceId
    ];

    absence.Start = startTime;
    absence.End = endTime;

    update absence;

    return getTimeSheet(timeSheetId);
  }

  @AuraEnabled
  //Fetch the Time Sheet and set the field Status to "Submitted"
  public static void submitTimeSheet(String timeSheetId) {
    try {
      TimeSheet timeSheet = [
        SELECT Id, Status
        FROM TimeSheet
        WHERE Id = :timeSheetId
      ];

      timeSheet.Status = 'Submitted';
      update timeSheet;
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }

  @AuraEnabled(cacheable=true)
  public static Id getBreakRecordTypeId() {
    try {
      return Schema.SObjectType.ResourceAbsence.getRecordTypeInfosByDeveloperName()
        .get('Break')
        .getRecordTypeId();
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}