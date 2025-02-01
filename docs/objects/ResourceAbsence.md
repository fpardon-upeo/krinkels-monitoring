## ResourceAbsence

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Absence_Type__c | Absence Type | Text | <!-- --> |
| Code_ATAK_Limbus__c | Code ATAK/Limbus | Picklist | <!-- --> |
| Contract_Manager__c | Contract Manager | Lookup | <!-- --> |
| Depot__c | Depot | Lookup | <!-- --> |
| External_Location__c | External Location | Text | <!-- --> |
| FSL__Approved__c | Approved | Checkbox | <!-- --> |
| FSL__Duration_In_Minutes__c | Scheduled Duration | Number | <!-- --> |
| FSL__Estimated_Travel_Time_From_Source__c | Estimated Travel Time From Source | Picklist | <!-- --> |
| FSL__Estimated_Travel_Time_To_Source__c | Estimated Travel Time To Source | Picklist | <!-- --> |
| FSL__EstimatedTravelDistanceFrom__c | Estimated Travel Distance From | Number | <!-- --> |
| FSL__EstimatedTravelDistanceTo__c | Estimated Travel Distance To | Number | <!-- --> |
| FSL__EstTravelTime__c | Estimated Travel Time | Number | <!-- --> |
| FSL__EstTravelTimeFrom__c | Estimated Travel Time From | Number | <!-- --> |
| FSL__Gantt_Color__c | Gantt Color | Text | <!-- --> |
| FSL__GanttLabel__c | Gantt Label | Text | <!-- --> |
| FSL__InternalSLRGeolocation__c | Internal SLR Geolocation | Location | <!-- --> |
| FSL__Last_Updated_Epoch__c | Last Updated Epoch | Number | <!-- --> |
| FSL__Scheduling_Policy_Used__c | Scheduling Policy Used | Lookup | <!-- --> |
| Remarks__c | Remarks | Text | <!-- --> |
| Soccode__c | Soccode | Text | <!-- --> |
| Status__c | Status | Picklist | <!-- --> |
| Time_Sheet__c | Time Sheet | Lookup | <!-- --> |
| Training_Type__c | Training Type | Picklist | <!-- --> |
| Type_of_Absence__c | Type of Absence | Picklist | <!-- --> |
| Unique_Key__c | Unique Key | Text | <!-- --> |

## Validation Rules

| Rule      | Active | Description | Formula |
| :-------- | :---- | :---------- | :------ |
| FSL__Absence_Color_HEX_Format | Yes |  | `(!ISBLANK(FSL__Gantt_Color__c)) && (NOT(REGEX(FSL__Gantt_Color__c, "#[a-fA-F0-9]{6}")))` |
| FSL__startShouldPrecedeEnd | Yes |  | `End <=  Start` |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Work_Order_Screen_Flow_Create_Internal_Work](../flows/Work_Order_Screen_Flow_Create_Internal_Work.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Internal_Work-history.md) |  Screen Flow | <!-- --> |
| ResourceAbsence | [ResourceAbsence_After_Delete_Set_Total_Absence_Time_on_TimeSheet](../flows/ResourceAbsence_After_Delete_Set_Total_Absence_Time_on_TimeSheet.md) [🕒](../flows/ResourceAbsence_After_Delete_Set_Total_Absence_Time_on_TimeSheet-history.md) |  Record Before Delete | <!-- --> |
| ResourceAbsence | [ResourceAbsence_After_Save_Break_Time](../flows/ResourceAbsence_After_Save_Break_Time.md) |  Record After Save | <!-- --> |
| ResourceAbsence | [ResourceAbsence_After_Save_Copy_Breaks_from_Crew_to_Agents](../flows/ResourceAbsence_After_Save_Copy_Breaks_from_Crew_to_Agents.md) [🕒](../flows/ResourceAbsence_After_Save_Copy_Breaks_from_Crew_to_Agents-history.md) |  Record After Save | <!-- --> |
| ResourceAbsence | [ResourceAbsence_After_Save_Set_Total_Absence_Time_on_TimeSheet](../flows/ResourceAbsence_After_Save_Set_Total_Absence_Time_on_TimeSheet.md) [🕒](../flows/ResourceAbsence_After_Save_Set_Total_Absence_Time_on_TimeSheet-history.md) |  Record After Save | <!-- --> |
| ResourceAbsence | [ResourceAbsence_Before_Save_Set_Timesheet_Id](../flows/ResourceAbsence_Before_Save_Set_Timesheet_Id.md) |  Record After Save | <!-- --> |
| ResourceAbsence | [Resource_Absence_Before_Save](../flows/Resource_Absence_Before_Save.md) [🕒](../flows/Resource_Absence_Before_Save-history.md) |  Record Before Save | <!-- --> |
| TimeSheetEntry | [Time_Sheet_Entry_Before_Save](../flows/Time_Sheet_Entry_Before_Save.md) [🕒](../flows/Time_Sheet_Entry_Before_Save-history.md) |  Record Before Save | This flow is configured to update and fill in some data automatically on Time Sheet Entries |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [FieldServiceTestData](../apex/FieldServiceTestData.md) | Test |
| [SDWorxAbsenceBatch](../apex/SDWorxAbsenceBatch.md) | Batch |
| [SDWorxToResourceAbsenceService](../apex/SDWorxToResourceAbsenceService.md) | Class |
| [SDWorxToResourceAbsenceServiceTest](../apex/SDWorxToResourceAbsenceServiceTest.md) | Test |
| [TimeSheetCalculationInvocable](../apex/TimeSheetCalculationInvocable.md) | Invocable |
| [TimeSheetCalculationService](../apex/TimeSheetCalculationService.md) | Class |
| [TimeSheetCalculationServiceTest](../apex/TimeSheetCalculationServiceTest.md) | Test |
| [TimeSheetController](../apex/TimeSheetController.md) | Lightning Controller |
| [TimeSheetControllerTest](../apex/TimeSheetControllerTest.md) | Test |
| [TimeSheetHandler](../apex/TimeSheetHandler.md) | Class |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [Resource_Absence_Record_Page](../pages/Resource_Absence_Record_Page.md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
