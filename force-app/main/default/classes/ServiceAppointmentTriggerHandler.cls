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
            // Get the WorkOrder Ids
            Set<Id> workOrderIdsSet = workOrders.keySet();
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
                    appointment.Original_Due_Date__c = sa.Original_Due_Date__c;
                    appointment.Original_Earliest_Start_Permitted__c = sa.EarliestStartTime ;
                    appointment.Original_Due_Date__c = sa.DueDate;

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
            copyAssignedResources(workOrderIdsSet);

        }
    }

    /**
     * @description This methods takes a set of work order ids. It queries them, and check whether they have a ParentWorkOrderId
     * If they do, it get the ServiceAppointments that have the WorkOrder as ParentRecordId
     * It then gets the AssignedResource records for those ServiceAppointments
     * It then gets the ServiceAppointments that look up to the original WorkOrders
     * For each of those ServiceAppointments, it creates a new the AssignedResource record based on the original AssignedResource record
     * We won't always find matches, in that case we exit gracefully
     * @param workOrderIds
     */

    public void copyAssignedResources(Set<Id> workOrderIds) {
        // Query Work Orders with their Parent IDs
        List<WorkOrder> workOrders = [
                SELECT Id, ParentWorkOrderId
                FROM WorkOrder
                WHERE Id IN :workOrderIds
                AND ParentWorkOrderId != null
        ];

        if (workOrders.isEmpty()) return;

        // Get parent work order IDs
        Set<Id> parentWorkOrderIds = new Set<Id>();
        Map<Id, Id> childToParentMap = new Map<Id, Id>();
        for (WorkOrder wo : workOrders) {
            parentWorkOrderIds.add(wo.ParentWorkOrderId);
            childToParentMap.put(wo.Id, wo.ParentWorkOrderId);
        }

        // First, query the Service Appointments with scheduling information
        List<ServiceAppointment> parentServiceAppointments = [
                SELECT Id, ParentRecordId, SchedStartTime, SchedEndTime, Duration
                FROM ServiceAppointment
                WHERE ParentRecordId IN :parentWorkOrderIds
        ];

        // Create a map of Service Appointment IDs and store in parent map
        Map<Id, List<ServiceAppointment>> parentWOtoSAMap = new Map<Id, List<ServiceAppointment>>();
        Set<Id> parentSAIds = new Set<Id>();
        for(ServiceAppointment sa : parentServiceAppointments) {
            parentSAIds.add(sa.Id);
            if (!parentWOtoSAMap.containsKey(sa.ParentRecordId)) {
                parentWOtoSAMap.put(sa.ParentRecordId, new List<ServiceAppointment>());
            }
            parentWOtoSAMap.get(sa.ParentRecordId).add(sa);
        }

        // Query AssignedResource records separately
        Map<Id, List<AssignedResource>> saToAssignedResourcesMap = new Map<Id, List<AssignedResource>>();
        for(AssignedResource ar : [
                SELECT Id, ServiceAppointmentId, ServiceResourceId, ServiceResource.ResourceType
                FROM AssignedResource
                WHERE ServiceAppointmentId IN :parentSAIds
                AND ServiceResource.ResourceType = 'C'
        ]) {
            if(!saToAssignedResourcesMap.containsKey(ar.ServiceAppointmentId)) {
                saToAssignedResourcesMap.put(ar.ServiceAppointmentId, new List<AssignedResource>());
            }
            saToAssignedResourcesMap.get(ar.ServiceAppointmentId).add(ar);
        }

        // First update the Service Appointments with new scheduling times
        List<ServiceAppointment> childServiceAppointmentsToUpdate = [
                SELECT Id, ParentRecordId, SchedStartTime, SchedEndTime, Duration
                FROM ServiceAppointment
                WHERE ParentRecordId IN :workOrderIds
        ];

        if (childServiceAppointmentsToUpdate.isEmpty()) return;

        // Update child SAs with new times
        for (ServiceAppointment childSA : childServiceAppointmentsToUpdate) {
            Id parentWorkOrderId = childToParentMap.get(childSA.ParentRecordId);
            List<ServiceAppointment> parentSAs = parentWOtoSAMap.get(parentWorkOrderId);

            if (parentSAs != null && !parentSAs.isEmpty() && parentSAs[0].SchedStartTime != null && parentSAs[0].SchedEndTime != null && parentSAs[0].Duration != null) {
                ServiceAppointment parentSA = parentSAs[0]; // Take first parent SA as reference
                childSA.SchedStartTime = parentSA.SchedEndTime;
                childSA.SchedEndTime = parentSA.SchedEndTime.addMinutes((Integer)parentSA.Duration);
            }
        }

        update childServiceAppointmentsToUpdate;

        // Now create the AssignedResource records
        List<AssignedResource> newAssignedResources = new List<AssignedResource>();

        for (ServiceAppointment childSA : childServiceAppointmentsToUpdate) {
            Id parentWorkOrderId = childToParentMap.get(childSA.ParentRecordId);
            List<ServiceAppointment> parentSAs = parentWOtoSAMap.get(parentWorkOrderId);

            if (parentSAs != null) {
                for (ServiceAppointment parentSA : parentSAs) {
                    List<AssignedResource> assignedResources = saToAssignedResourcesMap.get(parentSA.Id);
                    if(assignedResources != null) {
                        for (AssignedResource parentAR : assignedResources) {
                            System.debug('parentAR: ' + parentAR.ServiceResourceId);
                            System.debug('childSA: ' + childSA.Id);
                            AssignedResource newAR = new AssignedResource(
                                    ServiceAppointmentId = childSA.Id,
                                    ServiceResourceId = parentAR.ServiceResourceId,
                                    External_Id__c = childSA.Id + '-' +parentAR.ServiceResourceId
                            );
                            newAssignedResources.add(newAR);
                        }
                    }
                }
            }
        }

        if (!newAssignedResources.isEmpty()) {
            Schema.SObjectField externalIdField = AssignedResource.External_Id__c;
            Database.UpsertResult[] results = Database.upsert(newAssignedResources, externalIdField, false);
            for(Database.UpsertResult result : results) {
                if (!result.isSuccess()) {
                    for(Database.Error error : result.getErrors()) {
                        System.debug('Error: ' + error.getMessage());
                    }
                }
            }
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