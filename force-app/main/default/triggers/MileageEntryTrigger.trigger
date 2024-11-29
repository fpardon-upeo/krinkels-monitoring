trigger MileageEntryTrigger on Mileage_Entry__c (after insert, after update) {
    if(Trigger.isAfter) {
        if(Trigger.isInsert) {
            MileageEntryProjectLinkService.handler(Trigger.new);
        }
        if(Trigger.isUpdate) {
            List<Mileage_Entry__c> entriesForWorkOrderRelink = new List<Mileage_Entry__c>();
            for(Mileage_Entry__c entry : Trigger.new) {
                Mileage_Entry__c oldEntry = Trigger.oldMap.get(entry.Id);
                if(oldEntry.Work_Order__c != entry.Work_Order__c) {
                    entriesForWorkOrderRelink.add(entry);
                }
            }
            if(entriesForWorkOrderRelink.size() > 0) {
                System.debug('Relinking Work Orders for Mileage Entries');
                MileageEntryProjectLinkService.handler(entriesForWorkOrderRelink);
            }
        }
    }
}