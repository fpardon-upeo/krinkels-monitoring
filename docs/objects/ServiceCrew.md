## ServiceCrew

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Driver_Code__c | Driver Code | Text | <!-- --> |
| FSL__GanttColor__c | Gantt Color | Text | <!-- --> |
| Has_Leader__c | Has Leader | Summary | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Service_Crew_and_Van_Creator](../flows/Service_Crew_and_Van_Creator.md) [🕒](../flows/Service_Crew_and_Van_Creator-history.md) |  Screen Flow | <!-- --> |
| Location | [Van_After_Save_Record_Triggered_Assign_Van_to_Lead_Crew_Member](../flows/Van_After_Save_Record_Triggered_Assign_Van_to_Lead_Crew_Member.md) |  Record After Save | This flow populates the Van field on the service resource record of the lead van crew member, allowing him to log the products consumed. |
| ResourceAbsence | [ResourceAbsence_After_Save_Copy_Breaks_from_Crew_to_Agents](../flows/ResourceAbsence_After_Save_Copy_Breaks_from_Crew_to_Agents.md) [🕒](../flows/ResourceAbsence_After_Save_Copy_Breaks_from_Crew_to_Agents-history.md) |  Record After Save | <!-- --> |
| ServiceAppointment | [Service_Appointments_After_Save_Record_Triggered_Assign_Van_Inventory_to_Related](../flows/Service_Appointments_After_Save_Record_Triggered_Assign_Van_Inventory_to_Related.md) [🕒](../flows/Service_Appointments_After_Save_Record_Triggered_Assign_Van_Inventory_to_Related-history.md) |  Record After Save | This flow retrieves a van inventory based on the assigned resources of a service appointment. |
| ServiceCrewMember | [CrewMember_Save_Check_for_Crew_Leader](../flows/CrewMember_Save_Check_for_Crew_Leader.md) [🕒](../flows/CrewMember_Save_Check_for_Crew_Leader-history.md) |  Record Before Save | <!-- --> |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
