## Service_Appointment_Status__c

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| New_Status__c | New Status | Text | <!-- --> |
| Previous_Status__c | Previous Status | Text | <!-- --> |
| Service_Appointment__c | Service Appointment | MasterDetail | <!-- --> |
| Status_Change_Date__c | Status Change Date | DateTime | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| ServiceAppointment | [Service_Appointment_Time_Sheet_Automations](../flows/Service_Appointment_Time_Sheet_Automations.md) [🕒](../flows/Service_Appointment_Time_Sheet_Automations-history.md) |  Record After Save | This flows creates the automatic time sheet entries based on the evolving status of the service appointment |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
