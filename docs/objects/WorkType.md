## WorkType

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| FSL__Due_Date_Offset__c | Due Date Offset | Number | Minutes |
| FSL__Exact_Appointments__c | Exact Appointments | Checkbox | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Work_Order_Screen_Flow_Create_Depot_Visit](../flows/Work_Order_Screen_Flow_Create_Depot_Visit.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Depot_Visit-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Work_Order_Screen_Flow_Create_Depot_Visit_Console](../flows/Work_Order_Screen_Flow_Create_Depot_Visit_Console.md) |  Screen Flow | <!-- --> |
| 💻 | [Work_Order_Screen_Flow_Create_Internal_Work](../flows/Work_Order_Screen_Flow_Create_Internal_Work.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Internal_Work-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Work_Order_Screen_Flow_Create_Rework_WO](../flows/Work_Order_Screen_Flow_Create_Rework_WO.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Rework_WO-history.md) |  Screen Flow | This flow allows the contract manager to create a rework work order. |
| 💻 | [Work_Order_Screen_Flow_Create_Waste_Depot_Visit](../flows/Work_Order_Screen_Flow_Create_Waste_Depot_Visit.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Waste_Depot_Visit-history.md) |  Screen Flow | This flow allows a contract manager to create a waste depot visit. |
| Quote | [Quote_After_Save_Create_Work_Order_on_Acceptance](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance.md) [🕒](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance-history.md) |  Record After Save | <!-- --> |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [ATAKPerformanceService](../apex/ATAKPerformanceService.md) | Callout |
| [ATAKPerformanceServiceTest](../apex/ATAKPerformanceServiceTest.md) | Test |
| [ExtraWorkOrderController](../apex/ExtraWorkOrderController.md) | Lightning Controller |
| [FirstWorkOrderCheckerTest](../apex/FirstWorkOrderCheckerTest.md) | Test |
| [GanttRoundPinAction](../apex/GanttRoundPinAction.md) | Class |
| [InternalWorkOrderController](../apex/InternalWorkOrderController.md) | Lightning Controller |
| [MaintenancePlanService](../apex/MaintenancePlanService.md) | Lightning Controller |
| [MileageEntryProjectLinkService](../apex/MileageEntryProjectLinkService.md) | Class |
| [MileageEntryProjectLinkServiceTest](../apex/MileageEntryProjectLinkServiceTest.md) | Test |
| [SFS_WorkOrderCreatorController](../apex/SFS_WorkOrderCreatorController.md) | Lightning Controller |
| [SFS_WorkOrderCreatorControllerTest](../apex/SFS_WorkOrderCreatorControllerTest.md) | Test |
| [ServiceAppointmentRescheduler](../apex/ServiceAppointmentRescheduler.md) | Class |
| [ServiceAppointmentTriggerHandler](../apex/ServiceAppointmentTriggerHandler.md) | Trigger Handler |
| [ServiceAppointmentTriggerHandlerTest](../apex/ServiceAppointmentTriggerHandlerTest.md) | Test |
| [ServiceReportGenerationBatch](../apex/ServiceReportGenerationBatch.md) | Batch |
| [TimeSheetController](../apex/TimeSheetController.md) | Lightning Controller |
| [TimeSheetProjectLinkService](../apex/TimeSheetProjectLinkService.md) | Class |
| [TimeSheetProjectLinkServiceTest](../apex/TimeSheetProjectLinkServiceTest.md) | Test |
| [WorkOrderScheduler](../apex/WorkOrderScheduler.md) | Class |
| [WorkOrderSchedulerBatch](../apex/WorkOrderSchedulerBatch.md) | Batch |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [Service_Contract_Record_Page.](../pages/Service_Contract_Record_Page..md) |  Record Page |
| [Work_Order_Record_Page.](../pages/Work_Order_Record_Page..md) |  Record Page |
| [Work_Type_Record_Page.](../pages/Work_Type_Record_Page..md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
