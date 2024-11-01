/**
* Created by Frederik on 10/31/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class WorkOrderTriggerHandler {

    public void afterUpdate(List<WorkOrder> newWorkOrders, Map<Id, WorkOrder> oldWorkOrderMap){

        System.debug('in afterUpdate');

        //Map that will contain the workOrderIds and the new values of the Latitude and Longitude fields
        Map<String, String> workOrderIds = new Map<String, String>();

        //Check if the Latitude and Longitude fields have been updated
        for(WorkOrder wo : newWorkOrders){
            if(wo.Latitude != oldWorkOrderMap.get(wo.Id).Latitude || wo.Longitude != oldWorkOrderMap.get(wo.Id).Longitude){
                workOrderIds.put(wo.Id, wo.Latitude + ';' + wo.Longitude);
            }
        }

        System.debug('workOrderIds: ' + workOrderIds.size());

        //If there are workOrders to update, call the future method
        if(!workOrderIds.isEmpty()){
            updateWorkOrderLocation(workOrderIds);
        }
    }

    public void afterInsert(List<WorkOrder> newWorkOrders){

        System.debug('in afterInsert');

        List<String> accountIds = new List<String>();
        for(WorkOrder wo : newWorkOrders){
            accountIds.add(wo.AccountId);
        }

        Map<String, Account> accounts = new Map<String, Account>([SELECT Id, ShippingLatitude, ShippingLongitude FROM Account WHERE Id IN :accountIds]);

        //Map that will contain the workOrderIds and the new values of the Latitude and Longitude fields
        Map<String, String> workOrderIds = new Map<String, String>();

        //Check if the Latitude and Longitude fields have been updated
        for(WorkOrder wo : newWorkOrders){
            if(accounts.get(wo.AccountId).ShippingLatitude != null && accounts.get(wo.AccountId).ShippingLongitude != null){
                System.debug('Using Shipping Latitude and Longitude');
                System.debug('Shipping Latitude: ' + accounts.get(wo.AccountId).ShippingLatitude);
                System.debug('Shipping Longitude: ' + accounts.get(wo.AccountId).ShippingLongitude);
                workOrderIds.put(wo.Id, accounts.get(wo.AccountId).ShippingLongitude + ';' + accounts.get(wo.AccountId).ShippingLatitude);
            } else {
                System.debug('Using Latitude and Longitude');
                workOrderIds.put(wo.Id, wo.Longitude + ';' + wo.Latitude);
            }
        }

        System.debug('workOrderIds: ' + workOrderIds.size());

        //If there are workOrders to update, call the future method
        if(!workOrderIds.isEmpty()){
            updateWorkOrderLocation(workOrderIds);
        }
    }

    @future
    private static void updateWorkOrderLocation(Map<String, String> workOrderIds){
        System.debug('in updateWorkOrderLocation');
        List<WorkOrder> workOrdersToUpdate = new List<WorkOrder>();
        List<WorkOrder> workOrders = [SELECT Id, Asset.Service_Territory__c, Account.ShippingLatitude, Account.ShippingLongitude FROM WorkOrder WHERE Id IN :workOrderIds.keySet()];

        Map<String, String> workOrderAssetTerritory = new Map<String, String>();
        for(WorkOrder wo : workOrders){
            workOrderAssetTerritory.put(wo.Id, wo.Asset.Service_Territory__c);
        }

        System.debug('workOrderAssetTerritory: ' + workOrderAssetTerritory.size());

        List<String> uniqueGeoLocations = new List<String>();
        for(String latLong : workOrderIds.values()){
            if(!uniqueGeoLocations.contains(latLong)){
                uniqueGeoLocations.add(latLong);
            }
        }

        System.debug('uniqueGeoLocations: ' + uniqueGeoLocations.size());

        Map<String, String> geoLocationToTerritory = new Map<String, String>();
        for(String latLong : uniqueGeoLocations){
            String[] latLongArray = latLong.split(';');
            String geoId = geoLocationToTerritory.put(latLong, FSL.PolygonUtils.getTerritoryIdByPolygons(Double.valueOf(latLongArray[0]), Double.valueOf(latLongArray[1])));
            if(geoId != null){
                System.debug('Found GeoId: ' + geoId);
                geoLocationToTerritory.put(latLong, geoId);
            }
        }

        System.debug('geoLocationToTerritory: ' + geoLocationToTerritory.size());


        Map<String, String> workOrderToTerritory = new Map<String, String>();

        for(String woId : workOrderIds.keySet()){
            WorkOrder wo = new WorkOrder(Id = woId);
            Id serviceTerritoryId;

            //First check if we find the current GeoLocation in the geoLocationToTerritory map
            if(geoLocationToTerritory.containsKey(workOrderIds.get(woId)) && geoLocationToTerritory.get(workOrderIds.get(woId)) != null){
                System.debug('Found GeoLocation in Map ' + workOrderIds.get(woId) + ' - ' + geoLocationToTerritory.get(workOrderIds.get(woId)) );
                serviceTerritoryId = geoLocationToTerritory.get(workOrderIds.get(woId));
            } else {
                System.debug('GeoLocation not found in Map');
            //If not, we use the Asset's Service Territory
                serviceTerritoryId = workOrderAssetTerritory.get(woId);
            }

            wo.ServiceTerritoryId = serviceTerritoryId;
            workOrderToTerritory.put(woId, serviceTerritoryId);
            workOrdersToUpdate.add(wo);
        }

        update workOrdersToUpdate;

        //Then find all ServiceAppointments whose ParentRecordId is in the workOrdersToUpdate list
        List<ServiceAppointment> serviceAppointments = [SELECT Id, ParentRecordId FROM ServiceAppointment WHERE ParentRecordId IN :workOrdersToUpdate];

        //Update the ServiceAppointments with the new ServiceTerritoryId
        for(ServiceAppointment sa : serviceAppointments){
            if(workOrderToTerritory.containsKey(sa.ParentRecordId)){
                sa.ServiceTerritoryId = workOrderToTerritory.get(sa.ParentRecordId);
            }
        }

        update serviceAppointments;
    }



}