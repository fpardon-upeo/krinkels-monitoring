## Product2

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| ATAK_Code__c | ATAK Code | Text | <!-- --> |
| Code__c | Code | Text | <!-- --> |
| Date_Out_of_Service__c | Date Out of Service | Date | <!-- --> |
| Date_Use_End__c | Date Use End | Date | <!-- --> |
| Department_Code__c | Department Code | Text | <!-- --> |
| Department_Name__c | Department Name | Text | <!-- --> |
| Depot_Code__c | Depot Code | Text | <!-- --> |
| Depot_Name__c | Depot Name | Text | <!-- --> |
| Driver_Code__c | Driver Code | Text | <!-- --> |
| Driver_Name__c | Driver Name | Text | <!-- --> |
| Group_Code__c | Group Code | Text | <!-- --> |
| Group_Description__c | Group Description | Picklist | <!-- --> |
| License_Plate__c | License Plate | Text | <!-- --> |
| Means_Category__c | Means Category | Text | <!-- --> |
| Means_Code__c | Means Code | Text | <!-- --> |
| Means_Description__c | Means Description | Text | <!-- --> |
| Product_Name_FR__c | Product Name FR | TextArea | <!-- --> |
| Product_Name_NL__c | Product Name NL | TextArea | <!-- --> |
| Rate__c | Rate | Currency | <!-- --> |
| Service_Package_Product__c | Service Package Product | Lookup | <!-- --> |
| Work_Type__c | Work Type | Lookup | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Account_Screen_Flow_Add_Extra_Work](../flows/Account_Screen_Flow_Add_Extra_Work.md) [🕒](../flows/Account_Screen_Flow_Add_Extra_Work-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Account_Screen_Flow_Add_Extra_Work_Quote](../flows/Account_Screen_Flow_Add_Extra_Work_Quote.md) |  Screen Flow | <!-- --> |
| 💻 | [Service_Crew_and_Van_Creator](../flows/Service_Crew_and_Van_Creator.md) [🕒](../flows/Service_Crew_and_Van_Creator-history.md) |  Screen Flow | <!-- --> |
| Quote | [Quote_After_Save_Create_Work_Order_on_Acceptance](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance.md) [🕒](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance-history.md) |  Record After Save | <!-- --> |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [ATAKMaterialService](../apex/ATAKMaterialService.md) | Class |
| [ATAKPerformanceService](../apex/ATAKPerformanceService.md) | Callout |
| [ATAKPerformanceServiceTest](../apex/ATAKPerformanceServiceTest.md) | Test |
| [ATAKVehicleService](../apex/ATAKVehicleService.md) | Class |
| [ATAKWorkLogService](../apex/ATAKWorkLogService.md) | Class |
| [ATAKWorkLogServiceTest](../apex/ATAKWorkLogServiceTest.md) | Test |
| [ExtraWorkOrderController](../apex/ExtraWorkOrderController.md) | Lightning Controller |
| [FieldServiceTestData](../apex/FieldServiceTestData.md) | Test |
| [GanttRoundPinActionTest](../apex/GanttRoundPinActionTest.md) | Test |
| [MachineRestResourceTest](../apex/MachineRestResourceTest.md) | Test |
| [MaintenancePlanService](../apex/MaintenancePlanService.md) | Lightning Controller |
| [MaintenancePlanServiceTest](../apex/MaintenancePlanServiceTest.md) | Test |
| [MaterialPickupController](../apex/MaterialPickupController.md) | Lightning Controller |
| [ReadyForValidationTest](../apex/ReadyForValidationTest.md) | Test |
| [SchedulingController](../apex/SchedulingController.md) | Lightning Controller |
| [ServiceAppointmentTriggerHandlerTest](../apex/ServiceAppointmentTriggerHandlerTest.md) | Test |
| [ServiceBuilderController](../apex/ServiceBuilderController.md) | Lightning Controller |
| [ServiceBuilderControllerTest](../apex/ServiceBuilderControllerTest.md) | Test |
| [ServiceBuilderWrapper](../apex/ServiceBuilderWrapper.md) | Class |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [Product_Record_Page.](../pages/Product_Record_Page..md) |  Record Page |
| [Service_Appointment.](../pages/Service_Appointment..md) |  Service Document |
| [Work_Order_Service_Report.](../pages/Work_Order_Service_Report..md) |  Service Document |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
