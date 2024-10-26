/**
 * Created by fpardon on 25/10/2024.
 */

public with sharing class ContractLineItemTriggerHandler {

    /**
     * This method will call the reverseGeoCodeAddresses method to get the address from the coordinates
     * @param newContractLineItems (List<ContractLineItem>) - List of ContractLineItems
     * @calledBy ContractLineItemTrigger
     */

    public static void reverseGeoCodeAddresses(List<ContractLineItem> newContractLineItems) {
        List<String> contractLineItemsToUpdate = new List<String>();
        for(ContractLineItem contractLineItem: newContractLineItems){
            contractLineItemsToUpdate.add(contractLineItem.Id);
        }
        getAddressDataFromMaps(contractLineItemsToUpdate);
    }

    /**
     * This method will call the MapsGeoCodeService to get the address from the coordinates
     * @param contractLineItemIds (List<String>) - List of ContractLineItem Ids - needed because future methods are annoying
     */

    @future(callout=true)
    public static void getAddressDataFromMaps(List<String> contractLineItemIds){
        System.debug('starting getAddressDataFromMaps');

        List<ContractLineItem> contractLineItems = [
            SELECT Id, Geolocation__Latitude__s, Geolocation__Longitude__s, Location__Street__s, Location__City__s, Location__PostalCode__s, Location__CountryCode__s, Location__Latitude__s, Location__Longitude__s
            FROM ContractLineItem WHERE Id IN :contractLineItemIds
        ];

        for(ContractLineItem contractLineItem: contractLineItems){
            if(contractLineItem.Geolocation__Latitude__s != null && contractLineItem.Geolocation__Longitude__s != null){
                MapsGeoCodeService.AddressResult res = MapsGeoCodeService.getAddressFromCoordinates(contractLineItem.Geolocation__Latitude__s, contractLineItem.Geolocation__Longitude__s);
                if(res != null){
                    contractLineItem.Location__Street__s = res.street;
                    contractLineItem.Location__City__s = res.city;
                    contractLineItem.Location__PostalCode__s = res.zipCode;
                    contractLineItem.Location__CountryCode__s = res.country;
                    contractLineItem.Location__Latitude__s = contractLineItem.Geolocation__Latitude__s;
                    contractLineItem.Location__Longitude__s = contractLineItem.Geolocation__Longitude__s;
                }
            }
        }
        update contractLineItems;
    }

}