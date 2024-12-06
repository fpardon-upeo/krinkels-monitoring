/**
* Created by Frederik on 11/29/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class InternalWorkOrderController {

    public class InternalWorkOrderWrapper {
        @AuraEnabled public String workOrderId;  // Add @AuraEnabled and public
        @AuraEnabled public String serviceAppointmentId;  // Add @AuraEnabled and public
    }

    @AuraEnabled
    public static InternalWorkOrderWrapper createInternalWorkOrder(String subject, String workTypeId, String parentWorkOrderId, String accountId) {

        System.debug('Creating Internal Work Order');
        System.debug('subject: ' + subject);
        System.debug('workTypeId: ' + workTypeId);
        System.debug('parentWorkOrderId: ' + parentWorkOrderId);
        System.debug('accountId: ' + accountId);
        WorkOrder parentWorkOrder = getParentWorkOrder(parentWorkOrderId);

        WorkOrder internalWorkOrder = new WorkOrder();
        internalWorkOrder.Subject = subject;
        internalWorkOrder.WorkTypeId = workTypeId;
        internalWorkOrder.AssetId = parentWorkOrder.AssetId;
        internalWorkOrder.ServiceTerritoryId = parentWorkOrder.ServiceTerritoryId;
        internalWorkOrder.ParentWorkOrderId = parentWorkOrderId;
        internalWorkOrder.SuggestedMaintenanceDate = Date.today();
        internalWorkOrder.MaintenancePlanId = parentWorkOrder.MaintenancePlanId;
        internalWorkOrder.AccountId = accountId;
        internalWorkOrder.Work_Order_Type__c = 'Depot Visit';

        insert internalWorkOrder;
        InternalWorkOrderWrapper internalWorkOrderWrapper = new InternalWorkOrderWrapper();
        String assignedResource = assignServiceResource(getServiceResourceId(), internalWorkOrder.Id);
        if(assignedResource != null) {
            internalWorkOrderWrapper.workOrderId = internalWorkOrder.Id;
            internalWorkOrderWrapper.serviceAppointmentId = assignedResource;
            System.debug('Internal Work Order Created');
            System.debug('internalWorkOrderWrapper: ' + internalWorkOrderWrapper);
            return internalWorkOrderWrapper;
        } else {
            return null;
        }
    }

    private static WorkOrder getParentWorkOrder(String parentWorkOrderId) {
        System.debug('Getting Parent Work Order');
        System.debug('parentWorkOrderId: ' + parentWorkOrderId);
        WorkOrder parentWorkOrder = [SELECT Id, Subject, AccountId, WorkTypeId, AssetId, ServiceTerritoryId, MaintenancePlanId FROM WorkOrder WHERE Id = :parentWorkOrderId];
        return parentWorkOrder;
    }

    private static String getServiceResourceId(){

        ServiceResource serviceResource = [SELECT Id FROM ServiceResource WHERE IsActive = true AND RelatedRecordId = :UserInfo.getUserId() LIMIT 1 ];
        return serviceResource.Id;
    }

    private static String assignServiceResource(String serviceResourceId, String internalWorkOrderId) {
        System.debug('Assigning Service Resource');
        System.debug('serviceResourceId: ' + serviceResourceId);
        System.debug('internalWorkOrderId: ' + internalWorkOrderId);

        //Check if the Service Resource is part of a Crew
        //The Service Crew Member record Start Date needs to be less than today
        //The Service Crew Member record End Date needs to be blank or greater than today
        //The Service Crew Member record Service Resource ID needs to be the same as the Service Resource ID

        ServiceCrewMember serviceCrewMember = null;

        try {
            serviceCrewMember = [SELECT Id, ServiceCrewId FROM ServiceCrewMember WHERE ServiceResourceId = :serviceResourceId AND StartDate <= TODAY AND (EndDate = NULL OR EndDate >= TODAY) LIMIT 1];
        } catch (QueryException e) {
            System.debug('No Service Crew Member found');
        }

        System.debug('serviceCrewMember: ' + serviceCrewMember);

        ServiceAppointment serviceAppointment = [SELECT Id FROM ServiceAppointment WHERE ParentRecordId = :internalWorkOrderId];
        serviceAppointment.SchedStartTime = Datetime.now();
        serviceAppointment.SchedEndTime = Datetime.now().addHours(1);

        update serviceAppointment;

        AssignedResource assignedResource = new AssignedResource();
        assignedResource.ServiceAppointmentId = serviceAppointment.Id;

        if(serviceCrewMember != null && serviceCrewMember.ServiceCrewId != null) {
            assignedResource.ServiceCrewId = serviceCrewMember.ServiceCrewId;
            assignedResource.ServiceResourceId = serviceResourceId;
        } else {
            assignedResource.ServiceResourceId = serviceResourceId;
        }

        insert assignedResource;

        serviceAppointment.Status = 'Dispatched';
        update serviceAppointment;
        return serviceAppointment.Id;

    }

}