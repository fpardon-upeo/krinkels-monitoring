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

    // Get TimeSheet and its entries
    wrapper.timeSheet = [
      SELECT
        Id,
        TimeSheetNumber,
        ServiceResourceId,
        StartDate,
        EndDate,
        (SELECT Id, StartTime, EndTime, Subject, Type FROM TimeSheetEntries)
      FROM TimeSheet
      WHERE Id = :recordId
    ];

    // Get ResourceAbsence records for the same ServiceResource
    wrapper.resourceAbsences = [
      SELECT Id, Start, End, Type, ResourceId
      FROM ResourceAbsence
      WHERE
        ResourceId = :wrapper.timeSheet.ServiceResourceId
        AND Start <= :wrapper.timeSheet.EndDate.addDays(1)
        AND End >= :wrapper.timeSheet.StartDate
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
    Id recordId
  ) {
    ResourceAbsence absence = [
      SELECT Id, Start, End
      FROM ResourceAbsence
      WHERE Id = :absenceId
    ];

    absence.Start = startTime;
    absence.End = endTime;

    update absence;

    return getTimeSheet(recordId);
  }
}