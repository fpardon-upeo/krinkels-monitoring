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
    public static InternalWorkOrderWrapper createInternalWorkOrder(String subject, String workTypeId, String parentWorkOrderId) {

        System.debug('Creating Internal Work Order');
        WorkOrder parentWorkOrder = getParentWorkOrder(parentWorkOrderId);

        WorkOrder internalWorkOrder = new WorkOrder();
        internalWorkOrder.Subject = subject;
        internalWorkOrder.WorkTypeId = workTypeId;
        internalWorkOrder.AssetId = parentWorkOrder.AssetId;
        internalWorkOrder.ServiceTerritoryId = parentWorkOrder.ServiceTerritoryId;
        internalWorkOrder.ParentWorkOrderId = parentWorkOrderId;
        internalWorkOrder.SuggestedMaintenanceDate = Date.today();
        internalWorkOrder.MaintenancePlanId = parentWorkOrder.MaintenancePlanId;
        internalWorkOrder.AccountId = parentWorkOrder.AccountId;
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

        ServiceAppointment serviceAppointment = [SELECT Id FROM ServiceAppointment WHERE ParentRecordId = :internalWorkOrderId];
        serviceAppointment.SchedStartTime = Datetime.now();
        serviceAppointment.SchedEndTime = Datetime.now().addHours(1);

        update serviceAppointment;

        AssignedResource assignedResource = new AssignedResource();
        assignedResource.ServiceResourceId = serviceResourceId;
        assignedResource.ServiceAppointmentId = serviceAppointment.Id;

        insert assignedResource;

        serviceAppointment.Status = 'Dispatched';
        update serviceAppointment;
        return serviceAppointment.Id;

    }

}