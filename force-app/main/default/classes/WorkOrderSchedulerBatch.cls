public without sharing class WorkOrderSchedulerBatch implements Database.Batchable<SObject>, Database.Stateful {
    private String maintenancePlanId;
    private MaintenancePlan mp;

    public WorkOrderSchedulerBatch(String maintenancePlanId) {
        this.maintenancePlanId = maintenancePlanId;
    }

    public Database.QueryLocator start(Database.BatchableContext bc) {
        this.mp = [SELECT Id, AccountId, Account.Name, GenerationTimeframe,
                ServiceContractId, ServiceContract.Priority__c, MaintenanceWindowStartDays
        FROM MaintenancePlan
        WHERE Id = :maintenancePlanId];

        return Database.getQueryLocator([
                SELECT Id, AssetId, WorkTypeId, Asset.LMRA__c, Asset.AccountId,
                        Asset.Name, Asset.Street, Asset.City, Asset.PostalCode,
                        Asset.Country, NextSuggestedMaintenanceDate,
                        LastSuggestedMaintenanceDate__c, Default_Duration_in_Minutes__c,
                        MaintenancePlanId, Asset.Service_Territory__c, Number_of_Work_Orders__c,
                        Asset.Account.ShippingLatitude, Asset.Account.ShippingLongitude,
                (SELECT Id, NextSuggestedMaintenanceDate, RecurrencePattern
                FROM MaintenanceWorkRules)
                FROM MaintenanceAsset
                WHERE MaintenancePlanId = :maintenancePlanId
        ]);
    }

    public void execute(Database.BatchableContext bc, List<MaintenanceAsset> scope) {
        List<WorkOrder> workOrders = new List<WorkOrder>();
        Map<String, Id> locationToTerritoryMap = new Map<String, Id>();

        for(MaintenanceAsset mA : scope) {
            DateTime maFirstDate = mA.NextSuggestedMaintenanceDate;
            DateTime maLastDate = mA.LastSuggestedMaintenanceDate__c;
            MaintenanceWorkRule mwr = mA.MaintenanceWorkRules[0];
            String recurrencePattern = mwr.RecurrencePattern;

            RRuleAdjuster adjuster = new RRuleAdjuster(
                    recurrencePattern,
                    maFirstDate
            );

            RRuleAdjuster.RRuleResult result = adjuster.calculateAdjustment(
                    maFirstDate,
                    maFirstDate
            );

            System.debug('First date: ' + maFirstDate);
            System.debug('Adjusted first date: ' + adjuster);
            System.debug('Result: ' + result);

            Integer instanceCount = mA.Number_of_Work_Orders__c != null ? Integer.valueOf(mA.Number_of_Work_Orders__c) : 1;

            // Get territory ID for this location
            Id serviceTerritoryId = mA.Asset.Service_Territory__c;
            if(mA.Asset.Account.ShippingLatitude != null && mA.Asset.Account.ShippingLongitude != null) {
                String locationKey = mA.Asset.Account.ShippingLongitude + ';' + mA.Asset.Account.ShippingLatitude;

                if(!locationToTerritoryMap.containsKey(locationKey)) {
                    Id territoryId = FSL.PolygonUtils.getTerritoryIdByPolygons(
                            mA.Asset.Account.ShippingLongitude.doubleValue(),
                            mA.Asset.Account.ShippingLatitude.doubleValue()
                    );
                    if(territoryId != null) {
                        locationToTerritoryMap.put(locationKey, territoryId);
                        serviceTerritoryId = territoryId;
                    }
                } else {
                    serviceTerritoryId = locationToTerritoryMap.get(locationKey);
                }
            }

            System.debug('instanceCount: ' + instanceCount);

            System.debug('result.newDates: ' + result.newDates);

            for(Integer i = 0; i < instanceCount; i++) {
                WorkOrder wo = new WorkOrder();
                wo.AccountId = mA.Asset.AccountId;
                wo.AssetId = mA.AssetId;
                wo.Subject = 'Maintenance for ' + mA.Asset.Name + ' on ' + result.newDates[i];
                wo.Description = 'Maintenance for ' + mA.Asset.Name;
                wo.Duration = mA.Default_Duration_in_Minutes__c;
                wo.DurationType = 'Minutes';
                wo.MaintenancePlanId = mp.Id;
                wo.SuggestedMaintenanceDate = Date.valueOf(result.newDates[i]);
                wo.WorkTypeId = mA.WorkTypeId;
                wo.ServiceContractId = mp.ServiceContractId;
                wo.Status = 'Unscheduled';
                wo.Street = mA.Asset.Street;
                wo.City = mA.Asset.City;
                wo.PostalCode = mA.Asset.PostalCode;
                wo.Country = mA.Asset.Country;
                wo.LMRA__c = mA.Asset.LMRA__c;
                wo.Priority = mp.ServiceContract.Priority__c;
                wo.ServiceTerritoryId = serviceTerritoryId;
                if(mA.Asset.Account.ShippingLatitude != null) wo.Latitude = mA.Asset.Account.ShippingLatitude;
                if(mA.Asset.Account.ShippingLongitude != null) wo.Longitude = mA.Asset.Account.ShippingLongitude;
                workOrders.add(wo);
            }
        }

        if(!workOrders.isEmpty()) {
            insert workOrders;
        }
    }

    public void finish(Database.BatchableContext bc) {
        // Your existing finish logic
        Work_Order_Creation_Event__e event = new Work_Order_Creation_Event__e(
                Maintenance_Plan_Id__c = maintenancePlanId
        );
        EventBus.publish(event);

        Set<String> ownerIds = new Set<String>();
        MaintenancePlan mp = [SELECT Id, MaintenancePlanNumber, Account.Name FROM MaintenancePlan WHERE Id = :maintenancePlanId];

        List<MaintenanceAsset> maintenanceAssets = [SELECT Id, Asset.Service_Territory__r.Main_Responsible__c FROM MaintenanceAsset WHERE MaintenancePlanId = :maintenancePlanId];
        for(MaintenanceAsset ma : maintenanceAssets) {
            if(ma.Asset.Service_Territory__r.Main_Responsible__c != null) {
                ownerIds.add(ma.Asset.Service_Territory__r.Main_Responsible__c);
            }
        }

        CustomNotificationType notificationType = [SELECT Id FROM CustomNotificationType WHERE DeveloperName = 'Standard_Notification' LIMIT 1];
        Messaging.CustomNotification notification = new Messaging.CustomNotification();
        notification.setTitle('Work Orders Generated');
        notification.setBody('Work Orders have been generated for Maintenance Plan ' + mp.MaintenancePlanNumber + ' on Account ' + mp.Account.Name);
        notification.setNotificationTypeId(notificationType.Id);
        notification.setTargetId(maintenancePlanId);
        notification.send(ownerIds);
    }
}