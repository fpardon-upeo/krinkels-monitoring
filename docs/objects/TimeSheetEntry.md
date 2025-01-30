## TimeSheetEntry

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Atak_Project__c | Atak Project | Text | <!-- --> |
| Break_Duration__c | Break Duration | Number | <!-- --> |
| Break_Duration_in_Minutes__c | Break Duration (in Minutes) | Number | <!-- --> |
| Code_ATAK_Limbus__c | Code ATAK/Limbus | Picklist | <!-- --> |
| Corrected__c | Corrected | Checkbox | TSE was corrected by CM or BS after submission  - added via flow |
| Current_User_is_Manager__c | Current User is Manager | Checkbox | Technical Field used in Report Filtering |
| Invoice_Type__c | Invoice Type | Text | For Reporting Purposes |
| Is_Kilometer_Allowance__c | Is Kilometer Allowance | Checkbox | <!-- --> |
| Is_Kilometer_Allowance_Entry__c | Is Kilometer Allowance Entry | Checkbox | <!-- --> |
| Operator__c | Operator | Text | <!-- --> |
| Pause_Duration__c | Pause Duration (in Minutes) | Number | <!-- --> |
| Resource_Absence__c | Resource Absence | Lookup | <!-- --> |
| Soccode__c | Soccode | Text | <!-- --> |
| Starting_Allowance_Winter_Service__c | Starting Allowance (Winter Service) | Checkbox | <!-- --> |
| Total_Hours__c | Total Hours | Number | <!-- --> |
| Total_Hours_Minus_Breaks__c | Total Hours Minus Breaks | Number | <!-- --> |
| Total_Hours_Minus_Breaks_and_Pauses__c | Total Hours Minus Breaks and Pauses | Number | <!-- --> |
| Total_Hours_Minus_Pauses__c | Total Hours Minus Pauses | Number | <!-- --> |
| Urgent_Intervention__c | Urgent Intervention | Checkbox | <!-- --> |
| Work_Type__c | Work Type | Text | <!-- --> |
| Working_Time__c | Working Time | Number | <!-- --> |

## Validation Rules

| Rule      | Active | Description | Formula |
| :-------- | :---- | :---------- | :------ |
| Winter_Maintenance_Time_Sheet | Yes |  | `AND(
    Starting_Allowance_Winter_Service__c,
    WorkOrder.Asset.Product2.Name <> "Winter Maintenance"
)` |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| Mileage_Entry__c | [Mileage_Entry_After_Save_Record_Triggered_Set_Work_As_Travel_Time_Work_Order](../flows/Mileage_Entry_After_Save_Record_Triggered_Set_Work_As_Travel_Time_Work_Order.md) [🕒](../flows/Mileage_Entry_After_Save_Record_Triggered_Set_Work_As_Travel_Time_Work_Order-history.md) |  Record After Save | <!-- --> |
| ServiceAppointment | [Service_Appointment_Time_Sheet_Automations](../flows/Service_Appointment_Time_Sheet_Automations.md) [🕒](../flows/Service_Appointment_Time_Sheet_Automations-history.md) |  Record After Save | This flows creates the automatic time sheet entries based on the evolving status of the service appointment |
| TimeSheetEntry | [Time_Sheet_Entry_Before_Save](../flows/Time_Sheet_Entry_Before_Save.md) [🕒](../flows/Time_Sheet_Entry_Before_Save-history.md) |  Record Before Save | This flow is configured to update and fill in some data automatically on Time Sheet Entries |
| TimeSheetEntry | [TimesheetEntry_After_Save_Break_Time](../flows/TimesheetEntry_After_Save_Break_Time.md) |  Record After Save | <!-- --> |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [ATAKPerformanceService](../apex/ATAKPerformanceService.md) | Callout |
| [ATAKPerformanceServiceTest](../apex/ATAKPerformanceServiceTest.md) | Test |
| [ATAKWorkLogService](../apex/ATAKWorkLogService.md) | Class |
| [ATAKWorkLogServiceTest](../apex/ATAKWorkLogServiceTest.md) | Test |
| [FieldServiceTestData](../apex/FieldServiceTestData.md) | Test |
| [LocationMonitorController](../apex/LocationMonitorController.md) | Lightning Controller |
| [TimeSheetCalculationInvocable](../apex/TimeSheetCalculationInvocable.md) | Invocable |
| [TimeSheetCalculationService](../apex/TimeSheetCalculationService.md) | Class |
| [TimeSheetCalculationServiceTest](../apex/TimeSheetCalculationServiceTest.md) | Test |
| [TimeSheetController](../apex/TimeSheetController.md) | Lightning Controller |
| [TimeSheetControllerTest](../apex/TimeSheetControllerTest.md) | Test |
| [TimeSheetProjectLinkService](../apex/TimeSheetProjectLinkService.md) | Class |
| [TimeSheetProjectLinkServiceTest](../apex/TimeSheetProjectLinkServiceTest.md) | Test |
| [ValidationService](../apex/ValidationService.md) | Class |
| [WorkOrderReviewController](../apex/WorkOrderReviewController.md) | Lightning Controller |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [Time_Sheet_Entry_Record_Page.](../pages/Time_Sheet_Entry_Record_Page..md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
