public with sharing class TimeSheetController {
  public class TimeSheetWrapper {
    @AuraEnabled
    public TimeSheet timeSheet;
    @AuraEnabled
    public List<ResourceAbsence> resourceAbsences;
  }

  @AuraEnabled
  public static TimeSheetWrapper getTimeSheet(String recordId) {
    TimeSheetWrapper wrapper = new TimeSheetWrapper();

    // Get TimeSheet and its entries ordered by StartTime
    wrapper.timeSheet = [
      SELECT
        Id,
        TimeSheetNumber,
        ServiceResourceId,
        StartDate,
        EndDate,
        Total_Hours__c,
        Total_Km__c,
        Total_Normal_Hours__c,
        Total_Travel_Time__c,
        Total_Break_Time__c,
        Total_Hours_Minus_Breaks__c,
        Total_Break_and_Absent_Time_Minutes__c,
        Status,
        (
          SELECT
            Id,
            StartTime,
            EndTime,
            Subject,
            Type,
            Code_ATAK_Limbus__c,
            WorkOrder.Asset.Name,
            WorkOrder.WorkType.Name,
            WorkOrder.Account.Name,
            WorkOrderId
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
            Calculated_Mileage__c,
            Type__c,
            Work_Order__c
          FROM Mileage_Entries__r
        )
      FROM TimeSheet
      WHERE Id = :recordId
    ];

    // Get ResourceAbsence records for the same ServiceResource
    wrapper.resourceAbsences = [
      SELECT
        Id,
        Start,
        End,
        Type,
        ResourceId,
        RecordTypeId,
        Description,
        FSL__Duration_In_Minutes__c
      FROM ResourceAbsence
      WHERE
        ResourceId = :wrapper.timeSheet.ServiceResourceId
        AND Start <= :wrapper.timeSheet.EndDate.addDays(1)
        AND End >= :wrapper.timeSheet.StartDate
        // Query only ResourceAbsence records with the Break record type
    ];

    return wrapper;
  }

  @AuraEnabled
  public static TimeSheetWrapper getTimeSheetByResourceAndDate(
    String serviceResourceId,
    Date endDate
  ) {
    // First find the TimeSheet Id
    List<TimeSheet> timeSheets = [
      SELECT Id
      FROM TimeSheet
      WHERE ServiceResourceId = :serviceResourceId AND EndDate = :endDate
      LIMIT 1
    ];

    // If found, use getTimeSheet to get full data
    if (!timeSheets.isEmpty()) {
      return getTimeSheet(timeSheets[0].Id);
    }

    // If no TimeSheet found, return empty wrapper
    TimeSheetWrapper wrapper = new TimeSheetWrapper();
    wrapper.timeSheet = null;
    wrapper.resourceAbsences = new List<ResourceAbsence>();
    return wrapper;
  }

  @AuraEnabled
  public static Work_Schedule__c getWorkSchedule(String resourceId) {
    try {
      // Validate input
      if (String.isBlank(resourceId)) {
        return null;
      }

      List<ServiceResource> resources = [
        SELECT Work_Schedule__c
        FROM ServiceResource
        WHERE Id = :resourceId
      ];

      if (resources.isEmpty() || resources[0].Work_Schedule__c == null) {
        return null;
      }

      return [
        SELECT
          Id,
          Name,
          (
            SELECT Id, Day_of_Week__c, Day_of_Week_Number__c, Hours__c
            FROM Work_Schedule_Days__r
            ORDER BY Day_of_Week_Number__c ASC
          )
        FROM Work_Schedule__c
        WHERE Id = :resources[0].Work_Schedule__c
      ];
    } catch (Exception e) {
      // Log the error for debugging
      System.debug('Error in getWorkSchedule: ' + e.getMessage());
      // Return null instead of throwing exception
      return null;
    }
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

  @AuraEnabled
  public static TimeSheet getMileageEntries(Id recordId) {
    try {
      return [
        SELECT
          Id,
          Total_KM__c,
          StartDate,
          EndDate,
          (
            SELECT
              Id,
              Allowance_Type__c,
              Starting_Mileage__c,
              Ending_Mileage__c,
              Type__c
            FROM Mileage_Entries__r
          )
        FROM TimeSheet
        WHERE Id = :recordId
      ];
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }

  // Helper method to convert milliseconds into Time
  private static Time millisecondsToTime(Integer milliseconds) {
    Integer totalSeconds = milliseconds / 1000;
    Integer hours = totalSeconds / 3600;
    Integer minutes = Math.mod(totalSeconds, 3600) / 60;
    Integer seconds = Math.mod(totalSeconds, 60);

    return Time.newInstance(hours, minutes, seconds, 0);
  }

  @AuraEnabled
  public static User_Settings__c getUserSettings(String userId) {
    List<User_Settings__c> userSettings = [
      SELECT Id, Start_Time__c, End_Time__c
      FROM User_Settings__c
      WHERE Service_Resource__c = :userId
      LIMIT 1
    ];

    // Return null if no settings found
    return userSettings.isEmpty() ? null : userSettings[0];
  }

  @AuraEnabled
  public static void updateUserSettings(
    String settingsId,
    Integer startMilliseconds,
    Integer endMilliseconds
  ) {
    User_Settings__c userSettings = [
      SELECT Id, Start_Time__c, End_Time__c
      FROM User_Settings__c
      WHERE Id = :settingsId
      LIMIT 1
    ];
    Time startTime = millisecondsToTime(startMilliseconds);
    Time endTime = millisecondsToTime(endMilliseconds);

    try {
      userSettings.Start_Time__c = startTime;
      userSettings.End_Time__c = endTime;

      update userSettings;
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }

  @AuraEnabled
  public static void createUserSettings(
    String userId,
    Integer startMilliseconds,
    Integer endMilliseconds
  ) {
    // Convert milliseconds to Time
    Time startTime = millisecondsToTime(startMilliseconds);
    Time endTime = millisecondsToTime(endMilliseconds);

    try {
      // Create the User_Settings__c record
      User_Settings__c userSettings = new User_Settings__c();
      userSettings.Service_Resource__c = userId;
      userSettings.Start_Time__c = startTime;
      userSettings.End_Time__c = endTime;

      insert userSettings;
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}