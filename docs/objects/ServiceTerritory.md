## ServiceTerritory

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| FSL__Hide_Emergency_Map__c | Hide Emergency Map | Checkbox | Determines if the map will be shown on the emergency wizard |
| FSL__Internal_SLR_Geolocation__c | Internal SLR HomeAddress Geolocation | Location | <!-- --> |
| FSL__NumberOfServicesToDripFeed__c | Number Of Services To Drip Feed | Number | <!-- --> |
| FSL__O2_Enabled__c | Use enhanced scheduling and optimization | Checkbox | Determines if enhanced scheduling and optimization engine is used |
| FSL__Service_Cluster_Min_Size__c | Service Cluster Min Size (Closed Pilot) | Number | <!-- --> |
| FSL__Service_Cluster_Proximity__c | Service Cluster Proximity (Closed Pilot) | Number | <!-- --> |
| FSL__System_Jobs__c | System Jobs | MultiselectPicklist | <!-- --> |
| FSL__TerritoryLevel__c | Territory Level | Number | <!-- --> |
| Main_Responsible__c | Main Responsible | Lookup | <!-- --> |
| Main_Responsible_Atak_Code__c | Main Responsible Atak Code | Text | <!-- --> |
| Owner_Name__c | Owner Name | Text | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Location_Passport_Mobile_Flow_Screen_flow_View_Location_Passport_Information](../flows/Location_Passport_Mobile_Flow_Screen_flow_View_Location_Passport_Information.md) [🕒](../flows/Location_Passport_Mobile_Flow_Screen_flow_View_Location_Passport_Information-history.md) |  Field Service Mobile | <!-- --> |
| 💻 | [Service_Crew_and_Van_Creator](../flows/Service_Crew_and_Van_Creator.md) [🕒](../flows/Service_Crew_and_Van_Creator-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Depot_Visit](../flows/Work_Order_Mobile_Flow_Screen_Flow_Depot_Visit.md) |  Field Service Mobile | This flow allows an operator to execute a depot visit. |
| ATAK_Project__c | [ATAK_Project_After_Save_Record_Triggered_Set_Territory_And_Owner](../flows/ATAK_Project_After_Save_Record_Triggered_Set_Territory_And_Owner.md) [🕒](../flows/ATAK_Project_After_Save_Record_Triggered_Set_Territory_And_Owner-history.md) |  Record Before Save | <!-- --> |
| Operator_Created_Event__e | [Operator_Created_Event_e_Create_Service_Resource](../flows/Operator_Created_Event_e_Create_Service_Resource.md) [🕒](../flows/Operator_Created_Event_e_Create_Service_Resource-history.md) |  Platform Event | <!-- --> |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [AccountDetailsController](../apex/AccountDetailsController.md) | Lightning Controller |
| [AccountDetailsControllerTest](../apex/AccountDetailsControllerTest.md) | Test |
| [ExtraWorkOrderController](../apex/ExtraWorkOrderController.md) | Lightning Controller |
| [FieldServiceTestData](../apex/FieldServiceTestData.md) | Test |
| [FirstWorkOrderCheckerTest](../apex/FirstWorkOrderCheckerTest.md) | Test |
| [GanttRoundPinActionTest](../apex/GanttRoundPinActionTest.md) | Test |
| [InternalWorkOrderController](../apex/InternalWorkOrderController.md) | Lightning Controller |
| [MaintenancePlanService](../apex/MaintenancePlanService.md) | Lightning Controller |
| [SFS_WorkOrderCreatorController](../apex/SFS_WorkOrderCreatorController.md) | Lightning Controller |
| [SchedulingController](../apex/SchedulingController.md) | Lightning Controller |
| [ServiceAppointmentTriggerHandler](../apex/ServiceAppointmentTriggerHandler.md) | Trigger Handler |
| [ServiceAppointmentTriggerHandlerTest](../apex/ServiceAppointmentTriggerHandlerTest.md) | Test |
| [ServiceResourceHandler](../apex/ServiceResourceHandler.md) | Class |
| [WorkOrderLocationBatch](../apex/WorkOrderLocationBatch.md) | Batch |
| [WorkOrderLocationQueueable](../apex/WorkOrderLocationQueueable.md) | Class |
| [WorkOrderSchedulerBatch](../apex/WorkOrderSchedulerBatch.md) | Batch |
| [WorkOrderTriggerHandler](../apex/WorkOrderTriggerHandler.md) | Trigger Handler |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [Service_Appointment.](../pages/Service_Appointment..md) |  Service Document |
| [Service_Appointment_Service_Report_NL.](../pages/Service_Appointment_Service_Report_NL..md) |  Service Document |
| [Service_Appointment_Service_Report_Without_Signature_NL.](../pages/Service_Appointment_Service_Report_Without_Signature_NL..md) |  Service Document |
| [Service_Territory_Record_Page.](../pages/Service_Territory_Record_Page..md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
