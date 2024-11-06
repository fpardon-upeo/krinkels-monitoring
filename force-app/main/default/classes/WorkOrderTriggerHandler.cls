public without sharing class WorkOrderTriggerHandler {

    public void afterUpdate(List<WorkOrder> newWorkOrders, Map<Id, WorkOrder> oldWorkOrderMap) {
        Map<Id, WorkOrderLocationQueueable.Location> workOrderLocations = new Map<Id, WorkOrderLocationQueueable.Location>();

        for(WorkOrder wo : newWorkOrders) {
            if(wo.Latitude != oldWorkOrderMap.get(wo.Id).Latitude ||
                    wo.Longitude != oldWorkOrderMap.get(wo.Id).Longitude) {
                workOrderLocations.put(wo.Id,
                        new WorkOrderLocationQueueable.Location(wo.Latitude, wo.Longitude));
            }
        }

        if(!workOrderLocations.isEmpty()) {
            System.enqueueJob(new WorkOrderLocationQueueable(workOrderLocations));
        }
    }

    public void afterInsert(List<WorkOrder> newWorkOrders) {
        Map<Id, WorkOrderLocationQueueable.Location> workOrderLocations = new Map<Id, WorkOrderLocationQueueable.Location>();
        Set<Id> accountIds = new Set<Id>();

        for(WorkOrder wo : newWorkOrders) {
            if(wo.AccountId != null) {
                accountIds.add(wo.AccountId);
            }
        }

        Map<Id, Account> accounts = new Map<Id, Account>([
                SELECT Id, ShippingLatitude, ShippingLongitude
                FROM Account
                WHERE Id IN :accountIds
        ]);

        for(WorkOrder wo : newWorkOrders) {
            Account acc = accounts.get(wo.AccountId);
            if(acc != null && acc.ShippingLatitude != null && acc.ShippingLongitude != null) {
                workOrderLocations.put(wo.Id,
                        new WorkOrderLocationQueueable.Location(
                                acc.ShippingLatitude,
                                acc.ShippingLongitude
                        ));
            } else if(wo.Latitude != null && wo.Longitude != null) {
                workOrderLocations.put(wo.Id,
                        new WorkOrderLocationQueueable.Location(
                                wo.Latitude,
                                wo.Longitude
                        ));
            }
        }

        if(!workOrderLocations.isEmpty()) {
            System.enqueueJob(new WorkOrderLocationQueueable(workOrderLocations));
        }
    }
}