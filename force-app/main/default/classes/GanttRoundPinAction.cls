/**
* Created by Frederik on 10/22/2024.
* Description:
* Change Log:
* Dependencies:
*/

global class GanttRoundPinAction implements FSL.CustomGanttServiceAppointmentAction{

    global String action(List<Id> serviceAppointmentsIds, Datetime ganttStartDate, Datetime ganttEndDate, Map<String, Object> additionalParameters) {

        List<ServiceAppointment> serviceAppointments = [
                SELECT Id, SchedStartTime, SchedEndTime, AppointmentNumber,
                (SELECT Id, ServiceResourceId, ServiceCrewId, ServiceAppointmentId from ServiceResources WHERE ServiceResource.ResourceType = 'C'),
                TYPEOF ParentRecord
                WHEN WorkOrder THEN Asset.Recurrence_Pattern__c, Asset.Id
        END
        FROM ServiceAppointment WHERE Id IN :serviceAppointmentsIds
        ];

        List<ServiceAppointment> serviceAppointmentsToUpdate = new List<ServiceAppointment>();
        List<AssignedResource> assignedResources = new List<AssignedResource>();
        List<AssignedResource> assignedResourcesToDelete = new List<AssignedResource>();
        List<String> assignedResourceIdsToDelete = new List<String>();

        List<String> assignedResourcesAdded = new List<String>();

        TimeZone userTZ = UserInfo.getTimeZone();

        //The issue is the deletion of the AssignedResources, that resets the Serviceappointment scheduling

        for(ServiceAppointment sa: serviceAppointments){
            System.debug('starting SA is: ' + sa.AppointmentNumber);
            List<ServiceAppointment> serviceAppointmentsRescheduled = (ServiceAppointmentRescheduler.rescheduleAppointments(sa, sa.SchedStartTime));
            System.debug('serviceAppointmentsRescheduled: ' + serviceAppointmentsRescheduled.size());
            serviceAppointmentsToUpdate.addAll(serviceAppointmentsRescheduled);
            for(ServiceAppointment saRescheduled: serviceAppointmentsRescheduled){
                System.debug('saRescheduled: ' + saRescheduled.AppointmentNumber);
                if(saRescheduled.Id == sa.Id){
                    continue;
                }
                for(AssignedResource sr: sa.ServiceResources){
                    String uniqueKey = sr.ServiceResourceId + '-' + saRescheduled.Id;
                    System.debug('uniqueKey: ' + uniqueKey);
                    if(assignedResourcesAdded.contains(uniqueKey)){
                        System.debug('Skipping resource: ' + sr.Id);
                        continue;
                    } else {
                        assignedResourcesAdded.add(uniqueKey);
                    }

                    AssignedResource ar = new AssignedResource();
                    ar.ServiceResourceId = sr.ServiceResourceId;
                    ar.ServiceAppointmentId = saRescheduled.Id;
                    ar.ServiceCrewId = sr.ServiceCrewId;
                    assignedResourceIdsToDelete.add(saRescheduled.Id);
                    assignedResources.add(ar);
                }
            }
        }

        Database.SaveResult[] saveResultsAppointments = Database.update(serviceAppointmentsToUpdate, false);
        for(Database.SaveResult sr: saveResultsAppointments){
            if(!sr.isSuccess()){
                for(Database.Error e: sr.getErrors()){
                    System.debug('Error updating service appointments: ' + e.getMessage());
                }
            }
        }

        System.debug('serviceAppointmentsToUpdate: ' + serviceAppointmentsToUpdate.size());
        System.debug('assignedResources: ' + assignedResources.size());

        //Update the service appointments
        try{
            assignedResourcesToDelete = [SELECT Id FROM AssignedResource WHERE ServiceAppointmentId IN :assignedResourceIdsToDelete];
            delete assignedResourcesToDelete;
        }catch(Exception e){
            System.debug('Error updating service appointments: ' + e.getMessage());
            return 'error: ' + e.getMessage();
        }

        Database.SaveResult[] saveResults = Database.insert(assignedResources, false);
        for(Database.SaveResult sr: saveResults){
            if(!sr.isSuccess()){
                for(Database.Error e: sr.getErrors()){
                    System.debug('Error inserting assigned resource: ' + e.getMessage());
                }
            }
        }

        return 'success';
    }
}