## Asset

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Additional_Scheduling_Information__c | Additional Scheduling Information | TextArea | <!-- --> |
| ATAK_Project__c | ATAK Project | Lookup | <!-- --> |
| ATAK_Project_Code__c | ATAK Project Code | Text | <!-- --> |
| Contract_Line_Item__c | Contract Line Item | Lookup | <!-- --> |
| Default_Duration_in_Minutes__c | Default Duration in Minutes | Number | <!-- --> |
| Desired_Visual_Quality__c | Desired Visual Quality | Picklist | <!-- --> |
| LastSuggestedMaintenanceDate__c | Date of the last work order in the nex | Date | <!-- --> |
| LMRA__c | LMRA | Picklist | <!-- --> |
| Notify_Customer_When_En_Route__c | Notify Customer When En Route | Checkbox | <!-- --> |
| Recurrence_Pattern__c | Recurrence Pattern | Text | <!-- --> |
| Recurrence_Text__c | Recurrence Text | Text | <!-- --> |
| Service_Territory__c | Service Territory | Lookup | <!-- --> |
| Unique_Id__c | Unique Id | Text | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Work_Order_Screen_Flow_Create_Internal_Work](../flows/Work_Order_Screen_Flow_Create_Internal_Work.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Internal_Work-history.md) |  Screen Flow | <!-- --> |
| Asset | [Asset_Notify_Business_Support_for_ATAK_Project](../flows/Asset_Notify_Business_Support_for_ATAK_Project.md) [🕒](../flows/Asset_Notify_Business_Support_for_ATAK_Project-history.md) |  Record After Save | <!-- --> |
| Quote | [Quote_After_Save_Create_Work_Order_on_Acceptance](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance.md) [🕒](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance-history.md) |  Record After Save | <!-- --> |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [ATAKPerformanceService](../apex/ATAKPerformanceService.md) | Callout |
| [ATAKPerformanceServiceTest](../apex/ATAKPerformanceServiceTest.md) | Test |
| [ATAKWorkLogServiceTest](../apex/ATAKWorkLogServiceTest.md) | Test |
| [ExtraWorkOrderController](../apex/ExtraWorkOrderController.md) | Lightning Controller |
| [GanttRoundPinAction](../apex/GanttRoundPinAction.md) | Class |
| [GanttRoundPinActionTest](../apex/GanttRoundPinActionTest.md) | Test |
| [InternalWorkOrderController](../apex/InternalWorkOrderController.md) | Lightning Controller |
| [MaintenancePlanService](../apex/MaintenancePlanService.md) | Lightning Controller |
| [MaintenancePlanServiceTest](../apex/MaintenancePlanServiceTest.md) | Test |
| [SFS_WorkOrderCreatorController](../apex/SFS_WorkOrderCreatorController.md) | Lightning Controller |
| [SchedulingController](../apex/SchedulingController.md) | Lightning Controller |
| [ServiceAppointmentRescheduler](../apex/ServiceAppointmentRescheduler.md) | Class |
| [ServiceAppointmentTriggerHandler](../apex/ServiceAppointmentTriggerHandler.md) | Trigger Handler |
| [ServiceAppointmentTriggerHandlerTest](../apex/ServiceAppointmentTriggerHandlerTest.md) | Test |
| [ServiceBuilderController](../apex/ServiceBuilderController.md) | Lightning Controller |
| [TimeSheetController](../apex/TimeSheetController.md) | Lightning Controller |
| [ValidationService](../apex/ValidationService.md) | Class |
| [WorkOrderLocationBatch](../apex/WorkOrderLocationBatch.md) | Batch |
| [WorkOrderLocationQueueable](../apex/WorkOrderLocationQueueable.md) | Class |
| [WorkOrderScheduler](../apex/WorkOrderScheduler.md) | Class |
| [WorkOrderSchedulerBatch](../apex/WorkOrderSchedulerBatch.md) | Batch |
| [WorkOrderTriggerHandler](../apex/WorkOrderTriggerHandler.md) | Trigger Handler |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [Asset_Record_Page](../pages/Asset_Record_Page.md) |  Record Page |
| [Asset_Scheduler](../pages/Asset_Scheduler.md) |  App Page |
| [Location_Visit_Record_Page](../pages/Location_Visit_Record_Page.md) |  Record Page |
| [Maintenance_Asset_Record_Page](../pages/Maintenance_Asset_Record_Page.md) |  Record Page |
| [Operational_Account_Record_Page](../pages/Operational_Account_Record_Page.md) |  Record Page |
| [Service_Appointment](../pages/Service_Appointment.md) |  Service Document |
| [Work_Order_Service_Report](../pages/Work_Order_Service_Report.md) |  Service Document |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
