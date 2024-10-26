/**
 * Created by fpardon on 25/10/2024.
 */

trigger ContractLineItemTrigger on ContractLineItem (after insert, after update) {

    if (Trigger.isAfter) {
        if (Trigger.isUpdate) {
            System.debug('ContractLineItemTriggerHandler.updateContractLineItem');
            //Check if Geolocation__Latitude__s and Geolocation__Longitude__s are changed
            //If they are add them to a new list and send it to the handler
            List<ContractLineItem> contractLineItems = new List<ContractLineItem>();
            for (ContractLineItem contractLineItem : Trigger.new) {
                ContractLineItem oldContractLineItem = Trigger.oldMap.get(contractLineItem.Id);
                if (contractLineItem.Geolocation__Latitude__s != oldContractLineItem.Geolocation__Latitude__s ||
                        contractLineItem.Geolocation__Longitude__s != oldContractLineItem.Geolocation__Longitude__s) {
                    contractLineItems.add(contractLineItem);
                }
            }
            if (!contractLineItems.isEmpty()) {
                ContractLineItemTriggerHandler.reverseGeoCodeAddresses(contractLineItems);
            }
        }

        if (Trigger.isInsert) {
            System.debug('ContractLineItemTriggerHandler.insertContractLineItem');
            //Send the new ContractLineItems to the handler
            List<ContractLineItem> contractLineItems = new List<ContractLineItem>();
            for (ContractLineItem contractLineItem : Trigger.new) {
                if(contractLineItem.Geolocation__Latitude__s != null && contractLineItem.Geolocation__Longitude__s != null) {
                    contractLineItems.add(contractLineItem);
                }
            }
        }
    }

}