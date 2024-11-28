/**
 * Created by Frederik on 11/13/2024.
 * Description:
 * Change Log:
 * Dependencies:
 */

public without sharing class SDWorxToResourceAbsenceService {
  private static Map<String, String> getATAKCodeToResourceMap() {
    Map<String, String> atakCodeToResourceMap = new Map<String, String>();

    List<ServiceResource> resources = [
      SELECT Id, Name, RelatedRecord.ATAK_Id__c
      FROM ServiceResource
    ];
    for (ServiceResource resource : resources) {
      atakCodeToResourceMap.put(resource.RelatedRecord.ATAK_Id__c, resource.Id);
    }
    return atakCodeToResourceMap;
  }

  public static void createAbsenceRecords(List<SD_Import__c> sdworxAbsences) {
    Map<String, String> atakCodeToResourceMap = getATAKCodeToResourceMap();
    List<ResourceAbsence> resourceAbsences = new List<ResourceAbsence>();
    Id absenceRecordType = Schema.SObjectType.ResourceAbsence.getRecordTypeInfosByName()
      .get('Non Availability')
      .getRecordTypeId();
    for (SD_Import__c sdworxAbsence : sdworxAbsences) {
      //First check if the resource exists, if it does not, skip this record
      //The SD ArbeidsContractWerknemer__c field is the ATAK code, it needs to be prepended with 'G' to match the ATAK code in Salesforce
      String atakCode = 'G' + sdworxAbsence.ArbeidsContractWerknemer__c;
      System.debug('ATAK code: ' + atakCode);
      if (!atakCodeToResourceMap.containsKey(atakCode)) {
        System.debug('Resource with ATAK code ' + atakCode + ' not found');
        continue;
      }

      ResourceAbsence resourceAbsence = new ResourceAbsence();
      resourceAbsence.ResourceId = atakCodeToResourceMap.get(atakCode);
      resourceAbsence.RecordTypeId = absenceRecordType;

      Date startDate = Date.valueOf(sdworxAbsence.KalenderdagDat__c);

      //Set the start and end date of the absence
      //If AfwezigheidDagdeelKode__c is 'Volledige dag', the start date is 08:00 and the end date is 16:00

      if (sdworxAbsence.AfwezigheidDagdeelKode__c == 'Volledige dag') {
        resourceAbsence.Start = Datetime.newInstance(
          startDate.year(),
          startDate.month(),
          startDate.day(),
          9,
          0,
          0
        );
        resourceAbsence.End = Datetime.newInstance(
          startDate.year(),
          startDate.month(),
          startDate.day(),
          17,
          0,
          0
        );
      } else if (sdworxAbsence.AfwezigheidDagdeelKode__c == 'Voormiddag') {
        resourceAbsence.Start = Datetime.newInstance(
          startDate.year(),
          startDate.month(),
          startDate.day(),
          9,
          0,
          0
        );
        resourceAbsence.End = resourceAbsence.Start.addHours(
          Integer.valueOf(sdworxAbsence.AfwezigheidPresturen__c)
        );
      } else if (sdworxAbsence.AfwezigheidDagdeelKode__c == 'Namiddag') {
        resourceAbsence.Start = Datetime.newInstance(
          startDate.year(),
          startDate.month(),
          startDate.day(),
          13,
          0,
          0
        );
        resourceAbsence.End = resourceAbsence.Start.addHours(
          Integer.valueOf(sdworxAbsence.AfwezigheidPresturen__c)
        );
      }
      //Set the absence typeq
      resourceAbsence.Type = 'Eblox';
      //Set the unique key
      resourceAbsence.Unique_Key__c =
        sdworxAbsence.PersoonId__c +
        '-' +
        sdworxAbsence.KalenderdagDat__c +
        '-' +
        sdworxAbsence.AfwezigheidscodelabelCode__c;
      resourceAbsences.add(resourceAbsence);
    }
    upsert resourceAbsences ResourceAbsence.Unique_Key__c;
  }

  private static Map<String, Map<String, Decimal>> SCHEDULE_CONFIGS = new Map<String, Map<String, Decimal>>{
    '00' => new Map<String, Decimal>{
      'Weekly' => 39.0,
      'Monday' => 8.0,
      'Tuesday' => 8.0,
      'Wednesday' => 8.0,
      'Thursday' => 8.0,
      'Friday' => 7.0
    },
    '02' => new Map<String, Decimal>{
      'Weekly' => 38.0,
      'Monday' => 7.6,
      'Tuesday' => 7.6,
      'Wednesday' => 7.6,
      'Thursday' => 7.6,
      'Friday' => 7.6
    },
    '05' => new Map<String, Decimal>{
      'Weekly' => 39.0,
      'Monday' => 8.0,
      'Tuesday' => 8.0,
      'Wednesday' => 8.0,
      'Thursday' => 8.0,
      'Friday' => 7.0
    },
    '12' => new Map<String, Decimal>{
      'Weekly' => 31.0,
      'Monday' => 8.0,
      'Tuesday' => 8.0,
      'Wednesday' => 0.0,
      'Thursday' => 8.0,
      'Friday' => 7.0
    },
    '13' => new Map<String, Decimal>{
      'Weekly' => 32.0,
      'Monday' => 8.0,
      'Tuesday' => 8.0,
      'Wednesday' => 0.0,
      'Thursday' => 8.0,
      'Friday' => 0.0
    },
    '16' => new Map<String, Decimal>{
      'Weekly' => 20.0,
      'Monday' => 5.0,
      'Tuesday' => 4.0,
      'Wednesday' => 0.0,
      'Thursday' => 4.0,
      'Friday' => 0.0
    }
  };

  //Can a Work Schedule be linked to a Service Resource?
  // To be discuss with Frederik
  public static void createWorkScheduleRecords(
    List<SD_Import__c> sdWorxRecords
  ) {
    Set<String> uniqueWorkScheduleNames = new Set<String>();
    List<Work_Schedule__c> workSchedulesToInsert = new List<Work_Schedule__c>();
    List<Work_Schedule_Day__c> workScheduleDaysToInsert = new List<Work_Schedule_Day__c>();

    //Get all unique work schedule names in a set to avoid duplicates (I'm assuming their type is String - Are they strings?)
    for (SD_Import__c sdWorxRecord : sdWorxRecords) {
      uniqueWorkScheduleNames.add(sdWorxRecord.Werkschema__c);
    }

    //Create new work schedule records
    for (String workScheduleName : uniqueWorkScheduleNames) {
      Work_Schedule__c workSchedule = new Work_Schedule__c();

      workSchedule.Name = workScheduleName;
      //Set the weekly hours based on the work schedule name
      if (SCHEDULE_CONFIGS.containsKey(workScheduleName)) {
        workSchedule.Total_Weekly_Hours__c = SCHEDULE_CONFIGS.get(
            workScheduleName
          )
          .get('Weekly');
      }

      workSchedulesToInsert.add(workSchedule);
    }

    upsert workSchedulesToInsert;

    //Create new work schedule day records
    for (Work_Schedule__c workSchedule : workSchedulesToInsert) {
      //Get the config for the work schedule by work schedule name
      Map<String, Decimal> scheduleConfig = SCHEDULE_CONFIGS.get(
        workSchedule.Name
      );

      for (String day : scheduleConfig.keySet()) {
        if (day != 'Weekly') {
          Work_Schedule_Day__c workScheduleDay = new Work_Schedule_Day__c(
            Name = workSchedule.Name + ' - ' + day,
            Work_Schedule__c = workSchedule.Id,
            Day_of_Week__c = day,
            Hours__c = scheduleConfig.get(day)
          );
          workScheduleDaysToInsert.add(workScheduleDay);
        }
      }
    }
    upsert workScheduleDaysToInsert;
  }
}