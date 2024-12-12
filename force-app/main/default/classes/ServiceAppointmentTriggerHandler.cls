/**
 * Created by fpardon on 28/10/2024.
 */

public with sharing class ServiceAppointmentTriggerHandler {


    /**
     * This method is called before the insert of a list of ServiceAppointment records
     * It assigns the ServiceTerritoryId and AssetId
     * @param newServiceAppointments
     */

    public void afterInsert(List<ServiceAppointment> newServiceAppointments) {
        List<ServiceAppointment> serviceAppointmentsToUpdate = new List<ServiceAppointment>();
        List<String> workOrderIds = new List<String>();
        for(ServiceAppointment sa : newServiceAppointments){
            if(sa.ParentRecordId.getSobjectType() == WorkOrder.SObjectType){
                serviceAppointmentsToUpdate.add(sa);
                workOrderIds.add(sa.ParentRecordId);
            }
        }

        if(serviceAppointmentsToUpdate.size() > 0){
            // Get Work Orders first
            Map<Id, WorkOrder> workOrders = new Map<Id, WorkOrder>([
                    SELECT Id, AssetId, ServiceTerritoryId, MaintenancePlanId,
                            MaintenancePlan.ServiceContract.Contract_type__c,
                            MaintenancePlan.Service_Appointments_Icon_on_Gantt__c,
                            MaintenancePlan.Service_Appointments_Color_on_Gantt__c,
                            ServiceContract.Account.Alias_commercial_customer_name__c,
                            Asset.Service_Territory__c,
                            WorkType.Name,
                            Asset.Name,
                            Longitude, Latitude
                    FROM WorkOrder
                    WHERE Id IN :workOrderIds
            ]);

            // Get set of Asset IDs
            Set<Id> assetIds = new Set<Id>();
            for(WorkOrder wo : workOrders.values()) {
                if(wo.AssetId != null) {
                    assetIds.add(wo.AssetId);
                }
            }

            // Query Asset Financial Accounts
            Map<Id, List<String>> assetToFinancialAccounts = new Map<Id, List<String>>();
            for(Asset ast : [SELECT Id, (SELECT Name FROM Asset_Financial_Accounts__r)
            FROM Asset
            WHERE Id IN :assetIds]) {
                List<String> accountNames = new List<String>();
                for(Asset_Financial_Account__c acc : ast.Asset_Financial_Accounts__r) {
                    accountNames.add(acc.Name);
                }
                assetToFinancialAccounts.put(ast.Id, accountNames);
            }

            List<ServiceAppointment> appointments = new List<ServiceAppointment>();
            for(ServiceAppointment sa : serviceAppointmentsToUpdate){
                WorkOrder wo = workOrders.get(sa.ParentRecordId);
                if(wo != null && wo.AssetId != null){
                    ServiceAppointment appointment = new ServiceAppointment();
                    appointment.Id = sa.Id;
                    appointment.Asset__c = wo.AssetId;

                    // Get financial accounts from our map
                    List<String> accountNames = assetToFinancialAccounts.get(wo.AssetId);
                    if(accountNames != null && !accountNames.isEmpty()) {
                        appointment.Financial_Accounts_Billing__c = String.join(accountNames, ', ');
                    }

                    if(wo.MaintenancePlanId != null){
                        appointment.FSL__GanttColor__c = wo.MaintenancePlan.Service_Appointments_Color_on_Gantt__c;
                        appointment.FSL__GanttIcon__c = wo.MaintenancePlan.Service_Appointments_Icon_on_Gantt__c;
                        appointment.Billing_Type__c = wo.MaintenancePlan.ServiceContract.Contract_type__c;
                    }

                    if(wo.WorkType.Name == 'Internal Production Work'){
                        appointment.FSL__GanttColor__c = '#cc5027';
                        appointment.FSL__GanttIcon__c = 'https://squarehub-production.s3.eu-west-3.amazonaws.com/profile_pictures/d8b262b0-5237-4826-a3bb-e101a5996d87?filename=logo_krinkels-landschapsaannemer.jpg';
                    }

                    appointments.add(appointment);
                }
            }
            update appointments;
        }
    }

    /**
     * @description This method is called after the update of a list of ServiceAppointment records, it sets the work order status equal to the status of the service appointment
     * @param newServiceAppointments
     * @param oldServiceAppointmentsMap
     */
    public void afterUpdate(List<ServiceAppointment> newServiceAppointments, Map<Id, ServiceAppointment> oldServiceAppointmentsMap) {
        Map<String, String> parentIdToStatus = new Map<String, String>();
        List<String> workOrderIds = new List<String>();
        for(ServiceAppointment sa : newServiceAppointments){
            if(sa.ParentRecordId.getSobjectType() == WorkOrder.SObjectType && sa.Status != oldServiceAppointmentsMap.get(sa.Id).Status){
                parentIdToStatus.put(sa.ParentRecordId, sa.Status);
                workOrderIds.add(sa.ParentRecordId);
            }
        }

        List<WorkOrder> workOrders = new List<WorkOrder>();
        for(String workOrderId : parentIdToStatus.keySet()){
            WorkOrder wo = new WorkOrder(Id = workOrderId, Status = parentIdToStatus.get(workOrderId));
            workOrders.add(wo);
        }

        if(workOrders.size() > 0){
            update workOrders;
        }
    }
}