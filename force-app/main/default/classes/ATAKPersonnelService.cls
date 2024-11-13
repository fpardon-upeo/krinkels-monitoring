/**
 * Created by fpardon on 12/11/2024.
 */

public with sharing class ATAKPersonnelService {

    public static String createATAKPersonnel(ATAKPersonnelWrapper personnel) {
        System.debug('ATAKPersonnelService.createATAKPersonnel');
        List<ATAK_Personnel__c> atakPersonnel = new List<ATAK_Personnel__c>();
        for(ATAKPersonnelWrapper.Data personnelData : personnel.data) {
            ATAK_Personnel__c atakPerson = createSingleATAKPersonnel(personnelData);
            atakPersonnel.add(atakPerson);
        }

        Database.UpsertResult[] results = Database.upsert(atakPersonnel, ATAK_Personnel__c.Fields.Code__c, false);
        Integer successCount = 0;
        Integer errorCount = 0;
        for(Database.UpsertResult result : results) {
            if(!result.isSuccess()) {
                for(Database.Error error : result.getErrors()) {
                    System.debug('Error: ' + error.getMessage());
                    errorCount++;
                }
            } else {
                successCount++;
            }
        }

        return 'Success: ' + successCount + ' Error: ' + errorCount + ' Total: ' + results.size() + ' processed.';

    }

    public static ATAK_Personnel__c createSingleATAKPersonnel(ATAKPersonnelWrapper.Data personnelData) {
        System.debug('ATAKPersonnelService.createATAKPersonnel');
        System.debug('personnelData: ' + personnelData.code);
        ATAK_Personnel__c atakPerson = new ATAK_Personnel__c();
        atakPerson.Code__c = personnelData.code;
        atakPerson.Name = personnelData.name;
        atakPerson.Phone__c = personnelData.phone;
        atakPerson.Mobile__c = personnelData.mobile;
        atakPerson.Email__c = personnelData.email;
        atakPerson.Depot_Code__c = personnelData.depot_code;
        atakPerson.Depot_Name__c = personnelData.depot_name;
        atakPerson.Department_Code__c = personnelData.department_code;
        atakPerson.Statute__c = personnelData.statute;
        atakPerson.Startdate__c = personnelData.startdate != '' ? Date.valueOf(personnelData.startdate) : null;
        atakPerson.Enddate__c = personnelData.enddate != '' ? Date.valueOf(personnelData.enddate) : null;
        atakPerson.Department_Name__c = personnelData.department_name;
        atakPerson.Sitemanager_Code__c = personnelData.sitemanager_code;
        atakPerson.Sitemanager_Code__c = personnelData.sitemanager_name;
        return atakPerson;
    }

}