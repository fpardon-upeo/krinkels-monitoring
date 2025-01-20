## ServiceResource

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| FSL__Efficiency__c | Efficiency | Number | <!-- --> |
| FSL__GanttLabel__c | Gantt Label | Text | <!-- --> |
| FSL__Online_Offset__c | Online Offset | Number | Online offset in minutes |
| FSL__Picture_Link__c | Picture Link | Url | <!-- --> |
| FSL__Priority__c | Priority | Number | <!-- --> |
| FSL__Travel_Speed__c | Travel Speed | Number | <!-- --> |
| Service_Resource_Is_Van__c | Service Resource Is Van | Checkbox | <!-- --> |
| Work_Schedule__c | Work Schedule | Lookup | <!-- --> |

## Validation Rules

| Rule      | Active | Description | Formula |
| :-------- | :---- | :---------- | :------ |
| FSL__Capacity_Resource_of_Type_Crew | Yes |  | `AND(IsCapacityBased,ISPICKVAL(ResourceType, 'C'))` |
| FSL__Resource_travel | Yes |  | `FSL__Travel_Speed__c <= 0` |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Service_Crew_and_Van_Creator](../flows/Service_Crew_and_Van_Creator.md) [🕒](../flows/Service_Crew_and_Van_Creator-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Work_Order_Screen_Flow_Create_Internal_Work](../flows/Work_Order_Screen_Flow_Create_Internal_Work.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Internal_Work-history.md) |  Screen Flow | <!-- --> |
| AssignedResource | [Assigned_Resource_Before_Save_Record_Triggered_Identify_Assigned_Resource_Type](../flows/Assigned_Resource_Before_Save_Record_Triggered_Identify_Assigned_Resource_Type.md) |  Record Before Save | For reporting purposes, this flow will allow identifying the type of resource assigned to a service appointment. <br/>This flow will also allow the identification of whether the assigned resource is linked to a system admin user for the purpose of timesheet entry creation. |
| Location | [Van_After_Save_Record_Triggered_Assign_Van_to_Lead_Crew_Member](../flows/Van_After_Save_Record_Triggered_Assign_Van_to_Lead_Crew_Member.md) |  Record After Save | This flow populates the Van field on the service resource record of the lead van crew member, allowing him to log the products consumed. |
| Operator_Created_Event__e | [Operator_Created_Event_e_Create_Service_Resource](../flows/Operator_Created_Event_e_Create_Service_Resource.md) [🕒](../flows/Operator_Created_Event_e_Create_Service_Resource-history.md) |  Platform Event | <!-- --> |
| ResourceAbsence | [ResourceAbsence_Before_Save_Set_Timesheet_Id](../flows/ResourceAbsence_Before_Save_Set_Timesheet_Id.md) |  Record After Save | <!-- --> |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
