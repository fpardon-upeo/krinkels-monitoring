# GanttRoundPinAction Class

Created by Frederik on 10/22/2024. 
Description: 
Change Log: 
Dependencies:

**Implements**

FSL.CustomGanttServiceAppointmentAction

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
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
                (SELECT Id, ServiceResourceId, ServiceCrewId, ServiceAppointmentId from ServiceResources WHERE ServiceResource.ResourceType = 'C' OR ServiceResource.ResourceType = 'T' ORDER BY ServiceResource.ResourceType DESC LIMIT 1),
                TYPEOF ParentRecord
                WHEN WorkOrder THEN Asset.Recurrence_Pattern__c, Asset.Id, WorkType.Name
        END
        FROM ServiceAppointment WHERE Id IN :serviceAppointmentsIds
        ];

        List<ServiceAppointment> serviceAppointmentsToUpdate = new List<ServiceAppointment>();
        List<AssignedResource> assignedResources = new List<AssignedResource>();
        List<AssignedResource> assignedResourcesToDelete = new List<AssignedResource>();
        List<String> assignedResourceIdsToKeep = new List<String>();
        List<String> serviceAppointmentsToQuery = new List<String>();

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
                    ar.External_Id__c = sr.Id + '-' + saRescheduled.Id;
                    assignedResourceIdsToKeep.add(ar.External_Id__c);
                    assignedResources.add(ar);
                    serviceAppointmentsToQuery.add(saRescheduled.Id);
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

        Schema.SObjectField externalIdField = AssignedResource.External_Id__c;

        Database.UpsertResult[] saveResults = Database.upsert(assignedResources, externalIdField, false);
        for(Database.UpsertResult sr: saveResults){
            if(!sr.isSuccess()){
                for(Database.Error e: sr.getErrors()){
                    System.debug('Error inserting assigned resource: ' + e.getMessage());
                }
            }
        }

        assignedResourcesToDelete = [SELECT Id FROM AssignedResource WHERE ServiceAppointmentId IN :serviceAppointmentsToQuery AND External_Id__c NOT IN :assignedResourceIdsToKeep];
        System.debug('assignedResourcesToDelete: ' + assignedResourcesToDelete.size());
        Database.DeleteResult[] deleteResults = Database.delete(assignedResourcesToDelete, false);
        for(Database.DeleteResult dr: deleteResults){
            if(!dr.isSuccess()){
                for(Database.Error e: dr.getErrors()){
                    System.debug('Error deleting assigned resource: ' + e.getMessage());
                }
            }
        }

        return 'success';
    }
}
```

## Methods
### `action(serviceAppointmentsIds, ganttStartDate, ganttEndDate, additionalParameters)`

#### Signature
```apex
global String action(List<Id> serviceAppointmentsIds, Datetime ganttStartDate, Datetime ganttEndDate, Map<String,Object> additionalParameters)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| serviceAppointmentsIds | List&lt;Id&gt; |  |
| ganttStartDate | Datetime |  |
| ganttEndDate | Datetime |  |
| additionalParameters | Map&lt;String,Object&gt; |  |

#### Return Type
**String**