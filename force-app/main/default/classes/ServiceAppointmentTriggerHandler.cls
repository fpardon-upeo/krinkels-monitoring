/**
 * Created by fpardon on 28/10/2024.
 */

public with sharing class ServiceAppointmentTriggerHandler {


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
            Map<Id, WorkOrder> workOrders = new Map<Id, WorkOrder>([SELECT Id, AssetId, Asset.Service_Territory__c FROM WorkOrder WHERE Id IN :workOrderIds]);
            List<ServiceAppointment> appointments = new List<ServiceAppointment>();
            for(ServiceAppointment sa : serviceAppointmentsToUpdate){
                WorkOrder wo = workOrders.get(sa.ParentRecordId);
                if(wo != null && wo.AssetId != null){
                    ServiceAppointment appointment = new ServiceAppointment();
                    appointment.Id = sa.Id;
                    appointment.ServiceTerritoryId = wo.Asset.Service_Territory__c;
                    appointments.add(appointment);
                }
            }
            update appointments;
        }
    }
}