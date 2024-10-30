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
        //Check the ParentRecordId, if it is a WorkOrder, then get the Service_Territory__c from the WorkOrder.Asset

        List<ServiceAppointment> serviceAppointmentsToUpdate = new List<ServiceAppointment>();
        List<String> workOrderIds = new List<String>();
        for(ServiceAppointment sa : newServiceAppointments){
            if(sa.ParentRecordId.getSobjectType() == WorkOrder.SObjectType){
                serviceAppointmentsToUpdate.add(sa);
                workOrderIds.add(sa.ParentRecordId);
            }
        }

        if(serviceAppointmentsToUpdate.size() > 0){
            Map<Id, WorkOrder> workOrders = new Map<Id, WorkOrder>([SELECT Id, AssetId, ServiceContract.Account.Short_Name__c, Asset.Service_Territory__c FROM WorkOrder WHERE Id IN :workOrderIds]);
            List<ServiceAppointment> appointments = new List<ServiceAppointment>();
            for(ServiceAppointment sa : serviceAppointmentsToUpdate){
                WorkOrder wo = workOrders.get(sa.ParentRecordId);
                if(wo != null && wo.AssetId != null){
                    ServiceAppointment appointment = new ServiceAppointment();
                    appointment.Id = sa.Id;
                    appointment.ServiceTerritoryId = wo.Asset.Service_Territory__c;
                    appointment.Asset__c = wo.AssetId;
                    appointment.FSL__GanttLabel__c = wo.ServiceContract.Account.Short_Name__c + ' - ' + sa.Street;
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