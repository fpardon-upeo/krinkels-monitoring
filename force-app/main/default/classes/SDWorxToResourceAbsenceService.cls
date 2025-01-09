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
    //upsert resourceAbsences ResourceAbsence.Unique_Key__c;
    Database.UpsertResult[] upsertResults = Database.upsert(resourceAbsences, ResourceAbsence.Unique_Key__c, false);
  }

  public static void errorLogger(List<Database.UpsertResult> upsertResults) {

    List<Error_Log__c> errorLogs = new List<Error_Log__c>();

    for (Database.UpsertResult upsertResult : upsertResults) {
      if (!upsertResult.isSuccess()) {
        for (Database.Error error : upsertResult.getErrors()) {
          Error_Log__c errorLog = new Error_Log__c();
          errorLog.Error_Message__c = error.getMessage();
          errorLog.Object__c = 'ResourceAbsence';
          errorLog.Type__c = 'SD Import Error';
          errorLogs.add(errorLog);
        }
      }

      insert errorLogs;

    }
  }

}