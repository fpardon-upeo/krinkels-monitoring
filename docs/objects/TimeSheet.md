## TimeSheet

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Current_User_is_CM__c | Current User is CM | Checkbox | <!-- --> |
| Needs_Review__c | Needs Review | Checkbox | <!-- --> |
| Send_to_ATAK__c | Send to ATAK | Checkbox | <!-- --> |
| Total_Break_and_Absent_Time_Minutes__c | Total Break and Absent Time (Minutes) | Number | <!-- --> |
| Total_Break_Time__c | Total Break Time | Summary | <!-- --> |
| Total_Hours__c | Total Hours | Summary | <!-- --> |
| Total_Hours_Minus_Breaks__c | Total Hours Minus Breaks | Summary | <!-- --> |
| Total_KM__c | Total KM | Summary | <!-- --> |
| Total_Normal_Hours__c | Total Normal Hours | Summary | <!-- --> |
| Total_Travel_Time__c | Total Travel Time | Summary | <!-- --> |
| Working_Hours_in_Contract__c | Working Hours in Contract | Number | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Log_Mileage](../flows/Work_Order_Mobile_Flow_Screen_Flow_Log_Mileage.md) [🕒](../flows/Work_Order_Mobile_Flow_Screen_Flow_Log_Mileage-history.md) |  Field Service Mobile | <!-- --> |
| Mileage_Entry__c | [Mileage_Entry_After_Save_Record_Triggered_Set_Work_As_Travel_Time_Work_Order](../flows/Mileage_Entry_After_Save_Record_Triggered_Set_Work_As_Travel_Time_Work_Order.md) [🕒](../flows/Mileage_Entry_After_Save_Record_Triggered_Set_Work_As_Travel_Time_Work_Order-history.md) |  Record After Save | <!-- --> |
| ResourceAbsence | [ResourceAbsence_After_Delete_Set_Total_Absence_Time_on_TimeSheet](../flows/ResourceAbsence_After_Delete_Set_Total_Absence_Time_on_TimeSheet.md) [🕒](../flows/ResourceAbsence_After_Delete_Set_Total_Absence_Time_on_TimeSheet-history.md) |  Record Before Delete | <!-- --> |
| ResourceAbsence | [ResourceAbsence_After_Save_Set_Total_Absence_Time_on_TimeSheet](../flows/ResourceAbsence_After_Save_Set_Total_Absence_Time_on_TimeSheet.md) [🕒](../flows/ResourceAbsence_After_Save_Set_Total_Absence_Time_on_TimeSheet-history.md) |  Record After Save | <!-- --> |
| ResourceAbsence | [ResourceAbsence_Before_Save_Set_Timesheet_Id](../flows/ResourceAbsence_Before_Save_Set_Timesheet_Id.md) |  Record After Save | <!-- --> |
| ServiceAppointment | [Service_Appointment_Time_Sheet_Automations](../flows/Service_Appointment_Time_Sheet_Automations.md) [🕒](../flows/Service_Appointment_Time_Sheet_Automations-history.md) |  Record After Save | This flows creates the automatic time sheet entries based on the evolving status of the service appointment |
| TimeSheet | [TimeSheet_Record_Trigger_Set_Contract_Hours](../flows/TimeSheet_Record_Trigger_Set_Contract_Hours.md) |  Record After Save | <!-- --> |
| TimeSheet | [Time_Sheet_After_Save_Record_Triggered_Approval](../flows/Time_Sheet_After_Save_Record_Triggered_Approval.md) [🕒](../flows/Time_Sheet_After_Save_Record_Triggered_Approval-history.md) |  Record After Save | <!-- --> |
| TimeSheet | [Time_Sheet_After_Save_Send_to_ATAK](../flows/Time_Sheet_After_Save_Send_to_ATAK.md) [🕒](../flows/Time_Sheet_After_Save_Send_to_ATAK-history.md) |  Record After Save | <!-- --> |
| TimeSheet | [Time_Sheet_Before_Save_Record_Triggered_Approval](../flows/Time_Sheet_Before_Save_Record_Triggered_Approval.md) [🕒](../flows/Time_Sheet_Before_Save_Record_Triggered_Approval-history.md) |  Record After Save | <!-- --> |
| TimeSheet | [Time_Sheet_Before_Save_Record_Triggered_Review_Approval_Auto_Update](../flows/Time_Sheet_Before_Save_Record_Triggered_Review_Approval_Auto_Update.md) [🕒](../flows/Time_Sheet_Before_Save_Record_Triggered_Review_Approval_Auto_Update-history.md) |  Record Before Save | Automatically approves the Time Sheet if it is submitted a second time after having been flagged for review. |
| TimeSheetEntry | [Time_Sheet_Entry_Before_Save](../flows/Time_Sheet_Entry_Before_Save.md) [🕒](../flows/Time_Sheet_Entry_Before_Save-history.md) |  Record Before Save | This flow is configured to update and fill in some data automatically on Time Sheet Entries |
| TimeSheetEntry | [TimesheetEntry_After_Save_Break_Time](../flows/TimesheetEntry_After_Save_Break_Time.md) |  Record After Save | <!-- --> |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [ATAKPerformanceService](../apex/ATAKPerformanceService.md) | Callout |
| [ATAKPerformanceServiceInvocable](../apex/ATAKPerformanceServiceInvocable.md) | Invocable |
| [ATAKPerformanceServiceTest](../apex/ATAKPerformanceServiceTest.md) | Test |
| [ATAKWorkLogService](../apex/ATAKWorkLogService.md) | Class |
| [ATAKWorkLogServiceTest](../apex/ATAKWorkLogServiceTest.md) | Test |
| [FieldServiceTestData](../apex/FieldServiceTestData.md) | Test |
| [FirstWorkOrderCheckerTest](../apex/FirstWorkOrderCheckerTest.md) | Test |
| [LocationMonitorController](../apex/LocationMonitorController.md) | Lightning Controller |
| [MileageEntryProjectLinkService](../apex/MileageEntryProjectLinkService.md) | Class |
| [MileageEntryProjectLinkServiceTest](../apex/MileageEntryProjectLinkServiceTest.md) | Test |
| [SDWorxToResourceAbsenceServiceTest](../apex/SDWorxToResourceAbsenceServiceTest.md) | Test |
| [SFS_WorkOrderCreatorControllerTest](../apex/SFS_WorkOrderCreatorControllerTest.md) | Test |
| [TimeSheetCalculationInvocable](../apex/TimeSheetCalculationInvocable.md) | Invocable |
| [TimeSheetCalculationService](../apex/TimeSheetCalculationService.md) | Class |
| [TimeSheetCalculationServiceTest](../apex/TimeSheetCalculationServiceTest.md) | Test |
| [TimeSheetController](../apex/TimeSheetController.md) | Lightning Controller |
| [TimeSheetControllerTest](../apex/TimeSheetControllerTest.md) | Test |
| [TimeSheetHandler](../apex/TimeSheetHandler.md) | Class |
| [TimeSheetMapController](../apex/TimeSheetMapController.md) | Lightning Controller |
| [TimeSheetProjectLinkService](../apex/TimeSheetProjectLinkService.md) | Class |
| [TimeSheetProjectLinkServiceTest](../apex/TimeSheetProjectLinkServiceTest.md) | Test |
| [ValidationService](../apex/ValidationService.md) | Class |
| [WorkOrderReviewController](../apex/WorkOrderReviewController.md) | Lightning Controller |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [Home_Page_Contract_Manager.](../pages/Home_Page_Contract_Manager..md) |  Home Page |
| [Time_Sheet_Entry_Record_Page.](../pages/Time_Sheet_Entry_Record_Page..md) |  Record Page |
| [Time_Sheet_Record_Page.](../pages/Time_Sheet_Record_Page..md) |  Record Page |
| [Work_Order_Record_Page.](../pages/Work_Order_Record_Page..md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
