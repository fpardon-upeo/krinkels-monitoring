/**
* Created by Frederik on 11/6/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class WorkOrderLocationBatch implements Database.Batchable<SObject> {
    private Set<Id> workOrderIds;

    public WorkOrderLocationBatch(Set<Id> workOrderIds) {
        this.workOrderIds = workOrderIds;
    }

    public Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator([
                SELECT Id, Latitude, Longitude, AccountId,
                        Account.ShippingLatitude, Account.ShippingLongitude,
                        Asset.Service_Territory__c
                FROM WorkOrder
                WHERE Id IN :workOrderIds
        ]);
    }

    public void execute(Database.BatchableContext bc, List<WorkOrder> scope) {
        List<WorkOrder> workOrdersToUpdate = new List<WorkOrder>();
        Map<String, Id> locationToTerritoryMap = new Map<String, Id>();
        Map<Id, Id> workOrderToTerritory = new Map<Id, Id>();

        for(WorkOrder wo : scope) {
            Decimal latitude;
            Decimal longitude;

            // Determine which coordinates to use
            if(wo.Latitude != null && wo.Longitude != null) {
                latitude = wo.Latitude;
                longitude = wo.Longitude;
            } else if(wo.Account.ShippingLatitude != null && wo.Account.ShippingLongitude != null) {
                latitude = wo.Account.ShippingLatitude;
                longitude = wo.Account.ShippingLongitude;
            }

            if(latitude != null && longitude != null) {
                String locationKey = longitude + ';' + latitude;

                if(!locationToTerritoryMap.containsKey(locationKey)) {
                    Id territoryId = FSL.PolygonUtils.getTerritoryIdByPolygons(
                            longitude.doubleValue(),
                            latitude.doubleValue()
                    );
                    if(territoryId != null) {
                        locationToTerritoryMap.put(locationKey, territoryId);
                    }
                }

                Id serviceTerritoryId = locationToTerritoryMap.get(locationKey);
                if(serviceTerritoryId == null) {
                    serviceTerritoryId = wo.Asset.Service_Territory__c;
                }

                if(serviceTerritoryId != null) {
                    wo.ServiceTerritoryId = serviceTerritoryId;
                    workOrderToTerritory.put(wo.Id, serviceTerritoryId);
                    workOrdersToUpdate.add(wo);
                }
            }
        }

        if(!workOrdersToUpdate.isEmpty()) {
            update workOrdersToUpdate;

            // Update related Service Appointments
            List<ServiceAppointment> serviceAppointments = [
                    SELECT Id, ParentRecordId
                    FROM ServiceAppointment
                    WHERE ParentRecordId IN :workOrdersToUpdate
            ];

            for(ServiceAppointment sa : serviceAppointments) {
                sa.ServiceTerritoryId = workOrderToTerritory.get(sa.ParentRecordId);
            }

            if(!serviceAppointments.isEmpty()) {
                update serviceAppointments;
            }
        }
    }

    public void finish(Database.BatchableContext bc) {
        // Add any completion logic if needed
    }
}