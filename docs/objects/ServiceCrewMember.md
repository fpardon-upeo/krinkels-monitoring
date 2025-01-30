## ServiceCrewMember

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Active_Member__c | Active Member | Checkbox | <!-- --> |
| Crew_Already_Has_Leader__c | Crew Already Has Leader | Checkbox | <!-- --> |
| Crew_Has_Leader__c | Crew Has Leader | Checkbox | <!-- --> |
| FSL__GanttLabel__c | Gantt Label | Text | <!-- --> |

## Validation Rules

| Rule      | Active | Description | Formula |
| :-------- | :---- | :---------- | :------ |
| Crew_Should_Have_Leader | Yes |  | `Crew_Has_Leader__c = FALSE` |
| FSL__Prevent_Crew_Allocation_For_Contractors | Yes |  | `ServiceResource.IsCapacityBased = true` |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Service_Crew_and_Van_Creator](../flows/Service_Crew_and_Van_Creator.md) [🕒](../flows/Service_Crew_and_Van_Creator-history.md) |  Screen Flow | <!-- --> |
| Location | [Van_After_Save_Record_Triggered_Assign_Van_to_Lead_Crew_Member](../flows/Van_After_Save_Record_Triggered_Assign_Van_to_Lead_Crew_Member.md) |  Record After Save | This flow populates the Van field on the service resource record of the lead van crew member, allowing him to log the products consumed. |
| ResourceAbsence | [ResourceAbsence_After_Save_Copy_Breaks_from_Crew_to_Agents](../flows/ResourceAbsence_After_Save_Copy_Breaks_from_Crew_to_Agents.md) [🕒](../flows/ResourceAbsence_After_Save_Copy_Breaks_from_Crew_to_Agents-history.md) |  Record After Save | <!-- --> |
| ServiceCrewMember | [CrewMember_Save_Check_for_Crew_Leader](../flows/CrewMember_Save_Check_for_Crew_Leader.md) [🕒](../flows/CrewMember_Save_Check_for_Crew_Leader-history.md) |  Record Before Save | <!-- --> |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [ATAKPerformanceService](../apex/ATAKPerformanceService.md) | Callout |
| [ATAKPerformanceServiceTest](../apex/ATAKPerformanceServiceTest.md) | Test |
| [FieldServiceTestData](../apex/FieldServiceTestData.md) | Test |
| [InternalWorkOrderController](../apex/InternalWorkOrderController.md) | Lightning Controller |
| [ServiceAppointmentTriggerHandlerTest](../apex/ServiceAppointmentTriggerHandlerTest.md) | Test |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [Van_Crew_Member_Record_Page.](../pages/Van_Crew_Member_Record_Page..md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
