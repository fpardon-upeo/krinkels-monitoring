## Location

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Account__c | Account | Lookup | <!-- --> |
| Code__c | Code | Text | <!-- --> |
| Contract_Manager__c | Contract Manager | Lookup | <!-- --> |
| Current_User_is_CM__c | Current User is CM | Checkbox | Technical field to use in List view filtering |
| Driver_Code__c | Driver Code | Text | <!-- --> |
| License_Plate__c | License Plate | Text | <!-- --> |
| Van_Crew__c | Van Crew | Lookup | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Service_Crew_and_Van_Creator](../flows/Service_Crew_and_Van_Creator.md) [🕒](../flows/Service_Crew_and_Van_Creator-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Work_Order_Screen_Flow_Create_Internal_Work](../flows/Work_Order_Screen_Flow_Create_Internal_Work.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Internal_Work-history.md) |  Screen Flow | <!-- --> |
| Location | [Van_After_Save_Record_Triggered_Assign_Van_to_Lead_Crew_Member](../flows/Van_After_Save_Record_Triggered_Assign_Van_to_Lead_Crew_Member.md) |  Record After Save | This flow populates the Van field on the service resource record of the lead van crew member, allowing him to log the products consumed. |
| Location | [Van_Before_Save_Record_Triggered_Set_Naming_Convention](../flows/Van_Before_Save_Record_Triggered_Set_Naming_Convention.md) [🕒](../flows/Van_Before_Save_Record_Triggered_Set_Naming_Convention-history.md) |  Record Before Save | This flow sets the naming convention for a Van and flagged the record as an inventory location. We can link material items only to inventory locations. |
| Location_Visit__c | [Location_Visit_After_Save_Record_Triggered_Inform_visitor_when_Opportunity_visit](../flows/Location_Visit_After_Save_Record_Triggered_Inform_visitor_when_Opportunity_visit.md) |  Record After Save | Send a notification to the expected visitor that they are expected to do a visit |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [ATAKPerformanceServiceTest](../apex/ATAKPerformanceServiceTest.md) | Test |
| [ATAKVehicleService](../apex/ATAKVehicleService.md) | Class |
| [ATAKWorkLogServiceTest](../apex/ATAKWorkLogServiceTest.md) | Test |
| [CheckInService](../apex/CheckInService.md) | Lightning Controller |
| [ContractLineItemTriggerHandler](../apex/ContractLineItemTriggerHandler.md) | Trigger Handler |
| [LocationMonitorController](../apex/LocationMonitorController.md) | Lightning Controller |
| [MaintenancePlanService](../apex/MaintenancePlanService.md) | Lightning Controller |
| [MaintenancePlanServiceTest](../apex/MaintenancePlanServiceTest.md) | Test |
| [MapsGeoCodeWrapper](../apex/MapsGeoCodeWrapper.md) | Class |
| [MaterialPickupController](../apex/MaterialPickupController.md) | Lightning Controller |
| [ServiceBuilderController](../apex/ServiceBuilderController.md) | Lightning Controller |
| [ServiceBuilderControllerTest](../apex/ServiceBuilderControllerTest.md) | Test |
| [ServiceBuilderWrapper](../apex/ServiceBuilderWrapper.md) | Class |
| [TimeSheetController](../apex/TimeSheetController.md) | Lightning Controller |
| [TimeSheetControllerTest](../apex/TimeSheetControllerTest.md) | Test |
| [WorkOrderLocationBatch](../apex/WorkOrderLocationBatch.md) | Batch |
| [WorkOrderLocationQueueable](../apex/WorkOrderLocationQueueable.md) | Class |
| [WorkOrderTriggerHandler](../apex/WorkOrderTriggerHandler.md) | Trigger Handler |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [General_Opportunity_Record_Page.](../pages/General_Opportunity_Record_Page..md) |  Record Page |
| [Location_Passport_Record_Page.](../pages/Location_Passport_Record_Page..md) |  Record Page |
| [Location_Record_Page.](../pages/Location_Record_Page..md) |  Record Page |
| [Location_Visit_Record_Page.](../pages/Location_Visit_Record_Page..md) |  Record Page |
| [Notification_Crew_on_its_way_ENG.](../pages/Notification_Crew_on_its_way_ENG..md) |  Email Template Page |
| [Notification_REScheduled_WO_Day_ENG.](../pages/Notification_REScheduled_WO_Day_ENG..md) |  Email Template Page |
| [Notification_REScheduled_WO_ENG.](../pages/Notification_REScheduled_WO_ENG..md) |  Email Template Page |
| [Notification_Scheduled_WO_Day_ENG.](../pages/Notification_Scheduled_WO_Day_ENG..md) |  Email Template Page |
| [Notification_Scheduled_WO_ENG.](../pages/Notification_Scheduled_WO_ENG..md) |  Email Template Page |
| [One_Shot_Record_Page.](../pages/One_Shot_Record_Page..md) |  Record Page |
| [Operational_Account_Record_Page.](../pages/Operational_Account_Record_Page..md) |  Record Page |
| [Service_Contract_Record_Page.](../pages/Service_Contract_Record_Page..md) |  Record Page |
| [Work_Order_Record_Page.](../pages/Work_Order_Record_Page..md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
