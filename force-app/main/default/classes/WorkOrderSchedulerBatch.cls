/**
* Created by Frederik on 11/5/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class WorkOrderSchedulerBatch implements Database.Batchable<SObject>, Database.Stateful {

    private String maintenancePlanId;
    private MaintenancePlan mp;

    public WorkOrderSchedulerBatch(String maintenancePlanId) {
        this.maintenancePlanId = maintenancePlanId;
    }

    public Database.QueryLocator start(Database.BatchableContext bc) {
        // Query the MaintenancePlan once and store it in the stateful variable
        this.mp = [SELECT Id, AccountId, Account.Name, GenerationTimeframe,
                ServiceContractId, ServiceContract.Priority__c, MaintenanceWindowStartDays
        FROM MaintenancePlan
        WHERE Id = :maintenancePlanId];

        // Return MaintenanceAssets query as QueryLocator
        return Database.getQueryLocator([
                SELECT Id, AssetId, WorkTypeId, Asset.LMRA__c, Asset.AccountId,
                        Asset.Name, Asset.Street, Asset.City, Asset.PostalCode,
                        Asset.Country, NextSuggestedMaintenanceDate,
                        LastSuggestedMaintenanceDate__c, Default_Duration_in_Minutes__c,
                        MaintenancePlanId,
                (SELECT Id, NextSuggestedMaintenanceDate, RecurrencePattern
                FROM MaintenanceWorkRules)
                FROM MaintenanceAsset
                WHERE MaintenancePlanId = :maintenancePlanId
        ]);
    }

    public void execute(Database.BatchableContext bc, List<MaintenanceAsset> scope) {
        List<WorkOrder> workOrders = new List<WorkOrder>();

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

            Integer instanceCount = adjuster.calculateInstanceCount(
                    mA.NextSuggestedMaintenanceDate,
                    mA.LastSuggestedMaintenanceDate__c,
                    recurrencePattern
            );

            System.debug('instanceCount: ' + instanceCount);
            System.debug('newDates: ' + result.newDates);

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
                workOrders.add(wo);
            }
        }

        insert workOrders;
    }

    public void finish(Database.BatchableContext bc) {
        System.debug('WorkOrderSchedulerBatch finished');
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