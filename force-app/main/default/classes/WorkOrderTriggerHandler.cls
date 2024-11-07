public without sharing class WorkOrderTriggerHandler {

    public void afterUpdate(List<WorkOrder> newWorkOrders, Map<Id, WorkOrder> oldWorkOrderMap) {
        Set<Id> workOrdersToProcess = new Set<Id>();

        for(WorkOrder wo : newWorkOrders) {
            // Only process if lat/long changed AND it wasn't set from a batch process
            if((wo.Latitude != oldWorkOrderMap.get(wo.Id).Latitude ||
                    wo.Longitude != oldWorkOrderMap.get(wo.Id).Longitude) &&
                    !System.isBatch()) {
                workOrdersToProcess.add(wo.Id);
            }
        }

        if(!workOrdersToProcess.isEmpty()) {
            updateWorkOrderLocations(workOrdersToProcess);
        }
    }

    public void afterInsert(List<WorkOrder> newWorkOrders) {
        // Skip processing if this is coming from our batch job
        if(System.isBatch()) return;

        Set<Id> workOrdersToProcess = new Set<Id>();
        for(WorkOrder wo : newWorkOrders) {
            workOrdersToProcess.add(wo.Id);
        }

        if(!workOrdersToProcess.isEmpty()) {
            updateWorkOrderLocations(workOrdersToProcess);
        }
    }

    private void updateWorkOrderLocations(Set<Id> workOrderIds) {
        // Query work orders with all needed fields
        List<WorkOrder> workOrders = [
                SELECT Id, Latitude, Longitude, AccountId,
                        Account.ShippingLatitude, Account.ShippingLongitude,
                        Asset.Service_Territory__c
                FROM WorkOrder
                WHERE Id IN :workOrderIds
        ];

        List<WorkOrder> workOrdersToUpdate = new List<WorkOrder>();
        Map<String, Id> locationToTerritoryMap = new Map<String, Id>();
        Map<Id, Id> workOrderToTerritory = new Map<Id, Id>();

        for(WorkOrder wo : workOrders) {
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

                // Only call FSL API if we haven't already checked this location
                if(!locationToTerritoryMap.containsKey(locationKey)) {
                    try {
                        Id territoryId = FSL.PolygonUtils.getTerritoryIdByPolygons(
                                longitude.doubleValue(),
                                latitude.doubleValue()
                        );
                        if(territoryId != null) {
                            locationToTerritoryMap.put(locationKey, territoryId);
                        }
                    } catch(Exception e) {
                        System.debug('Error getting territory for location: ' + e.getMessage());
                    }
                }

                // Get territory ID - either from map or fall back to asset's territory
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
            try {
                update workOrdersToUpdate;

                // Update related Service Appointments
                List<ServiceAppointment> serviceAppointments = [
                        SELECT Id, ParentRecordId
                        FROM ServiceAppointment
                        WHERE ParentRecordId IN :workOrdersToUpdate
                ];

                List<ServiceAppointment> appointmentsToUpdate = new List<ServiceAppointment>();
                for(ServiceAppointment sa : serviceAppointments) {
                    if(workOrderToTerritory.containsKey(sa.ParentRecordId)) {
                        sa.ServiceTerritoryId = workOrderToTerritory.get(sa.ParentRecordId);
                        appointmentsToUpdate.add(sa);
                    }
                }

                if(!appointmentsToUpdate.isEmpty()) {
                    update appointmentsToUpdate;
                }
            } catch(Exception e) {
                System.debug('Error updating work orders or service appointments: ' + e.getMessage());
            }
        }
    }
}