/**
 * Created by fpardon on 14/11/2024.
 */

trigger ATAKPersonnelTrigger on ATAK_Personnel__c (after update) {

    if(Trigger.isUpdate && Trigger.isAfter){
        List<String> personnelIds = new List<String>();
        for(ATAK_Personnel__c personnel : Trigger.new){
            if(personnel.Create_Service_Resource__c == true && personnel.Create_Service_Resource__c != Trigger.oldMap.get(personnel.Id).Create_Service_Resource__c){
                System.debug('Personnel Id changed, running logic: ' + personnel.Id);
                ServiceResourceHandler.createServiceResource(personnel.Id);
            } else {
                System.debug('Personnel Id not changed, skipping logic: ' + personnel.Id);
            }
        }
    }
}