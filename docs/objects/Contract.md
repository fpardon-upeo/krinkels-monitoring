## Contract

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Check_in_Work__c | Check-in @Work | Checkbox | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Account_Screen_Flow_Add_Extra_Work](../flows/Account_Screen_Flow_Add_Extra_Work.md) [🕒](../flows/Account_Screen_Flow_Add_Extra_Work-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Account_Screen_Flow_Add_Extra_Work_Quote](../flows/Account_Screen_Flow_Add_Extra_Work_Quote.md) |  Screen Flow | <!-- --> |
| ContractLineItem | [ContractLineItem_After_Save_Add_Default_Field_Values](../flows/ContractLineItem_After_Save_Add_Default_Field_Values.md) [🕒](../flows/ContractLineItem_After_Save_Add_Default_Field_Values-history.md) |  Record After Save | <!-- --> |
| ContractLineItem | [ContractLineItem_After_Save_Add_Default_Financial_Accounts](../flows/ContractLineItem_After_Save_Add_Default_Financial_Accounts.md) |  Record After Save | <!-- --> |
| Quote | [Quote_After_Save_Create_Work_Order_on_Acceptance](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance.md) [🕒](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance-history.md) |  Record After Save | <!-- --> |
| ServiceContract | [Service_Contract_After_Save_RecordTrigered_Account_Fields_duplication](../flows/Service_Contract_After_Save_RecordTrigered_Account_Fields_duplication.md) |  Record After Save | Takes over account fields on the service contract |
| ServiceContract | [Service_Contract_Before_Save_Record_Triggered_Set_Pricebook2Id](../flows/Service_Contract_Before_Save_Record_Triggered_Set_Pricebook2Id.md) |  Record After Save | <!-- --> |
| ServiceContract | [Service_contract_Scheduled_Contract_Renewal_Reminder](../flows/Service_contract_Scheduled_Contract_Renewal_Reminder.md) [🕒](../flows/Service_contract_Scheduled_Contract_Renewal_Reminder-history.md) |  Scheduled | sends reminder mail to the contract manager 3 months before the end of a contract |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [AccountWasteRetriever](../apex/AccountWasteRetriever.md) | Invocable |
| [ContractLineItemTriggerHandler](../apex/ContractLineItemTriggerHandler.md) | Trigger Handler |
| [ExtraWorkOrderController](../apex/ExtraWorkOrderController.md) | Lightning Controller |
| [ImportRecordsController](../apex/ImportRecordsController.md) | Lightning Controller |
| [LocationMonitorController](../apex/LocationMonitorController.md) | Lightning Controller |
| [MaintenancePlanService](../apex/MaintenancePlanService.md) | Lightning Controller |
| [MaintenancePlanServiceTest](../apex/MaintenancePlanServiceTest.md) | Test |
| [ReadyForValidation](../apex/ReadyForValidation.md) | Lightning Controller |
| [ReadyForValidationTest](../apex/ReadyForValidationTest.md) | Test |
| [SDWorxAbsenceBatch](../apex/SDWorxAbsenceBatch.md) | Batch |
| [SDWorxToResourceAbsenceService](../apex/SDWorxToResourceAbsenceService.md) | Class |
| [SDWorxToResourceAbsenceServiceTest](../apex/SDWorxToResourceAbsenceServiceTest.md) | Test |
| [SFS_WorkOrderCreatorController](../apex/SFS_WorkOrderCreatorController.md) | Lightning Controller |
| [ServiceAppointmentTriggerHandler](../apex/ServiceAppointmentTriggerHandler.md) | Trigger Handler |
| [ServiceAppointmentTriggerHandlerTest](../apex/ServiceAppointmentTriggerHandlerTest.md) | Test |
| [ServiceBuilderController](../apex/ServiceBuilderController.md) | Lightning Controller |
| [ServiceBuilderControllerTest](../apex/ServiceBuilderControllerTest.md) | Test |
| [ServiceBuilderWrapper](../apex/ServiceBuilderWrapper.md) | Class |
| [ServiceContractHandler](../apex/ServiceContractHandler.md) | Class |
| [ServiceContractTriggerHandler](../apex/ServiceContractTriggerHandler.md) | Trigger Handler |
| [TimeSheetHandler](../apex/TimeSheetHandler.md) | Class |
| [WorkOrderScheduler](../apex/WorkOrderScheduler.md) | Class |
| [WorkOrderSchedulerBatch](../apex/WorkOrderSchedulerBatch.md) | Batch |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [B2B_Opportunity_Record_Page.](../pages/B2B_Opportunity_Record_Page..md) |  Record Page |
| [Commercial_Account_Record_Page.](../pages/Commercial_Account_Record_Page..md) |  Record Page |
| [Contract_Line_Item_Record_Page.](../pages/Contract_Line_Item_Record_Page..md) |  Record Page |
| [Home_Page_Contract_Manager.](../pages/Home_Page_Contract_Manager..md) |  Home Page |
| [Location_Visit_Record_Page.](../pages/Location_Visit_Record_Page..md) |  Record Page |
| [Notification_Crew_on_its_way_ENG.](../pages/Notification_Crew_on_its_way_ENG..md) |  Email Template Page |
| [Notification_Crew_on_its_way_FR.](../pages/Notification_Crew_on_its_way_FR..md) |  Email Template Page |
| [Notification_Crew_on_its_way_NL.](../pages/Notification_Crew_on_its_way_NL..md) |  Email Template Page |
| [Notification_Planned_WO_NL.](../pages/Notification_Planned_WO_NL..md) |  Email Template Page |
| [Notification_REScheduled_WO_Day_ENG.](../pages/Notification_REScheduled_WO_Day_ENG..md) |  Email Template Page |
| [Notification_REScheduled_WO_Day_FR.](../pages/Notification_REScheduled_WO_Day_FR..md) |  Email Template Page |
| [Notification_REScheduled_WO_Day_NL.](../pages/Notification_REScheduled_WO_Day_NL..md) |  Email Template Page |
| [Notification_REScheduled_WO_ENG.](../pages/Notification_REScheduled_WO_ENG..md) |  Email Template Page |
| [Notification_REScheduled_WO_FR.](../pages/Notification_REScheduled_WO_FR..md) |  Email Template Page |
| [Notification_REScheduled_WO_NL.](../pages/Notification_REScheduled_WO_NL..md) |  Email Template Page |
| [Notification_Scheduled_WO_Day_ENG.](../pages/Notification_Scheduled_WO_Day_ENG..md) |  Email Template Page |
| [Notification_Scheduled_WO_Day_FR.](../pages/Notification_Scheduled_WO_Day_FR..md) |  Email Template Page |
| [Notification_Scheduled_WO_Day_NL.](../pages/Notification_Scheduled_WO_Day_NL..md) |  Email Template Page |
| [Notification_Scheduled_WO_ENG.](../pages/Notification_Scheduled_WO_ENG..md) |  Email Template Page |
| [Notification_Scheduled_WO_FR.](../pages/Notification_Scheduled_WO_FR..md) |  Email Template Page |
| [Operational_Account_Record_Page.](../pages/Operational_Account_Record_Page..md) |  Record Page |
| [Other_Record_Page.](../pages/Other_Record_Page..md) |  Record Page |
| [Public_Tender_Opportunity_Record_Page.](../pages/Public_Tender_Opportunity_Record_Page..md) |  Record Page |
| [Quick_Opportunity_Record_Page.](../pages/Quick_Opportunity_Record_Page..md) |  Record Page |
| [Quote_Record_Page.](../pages/Quote_Record_Page..md) |  Record Page |
| [Service_Appointment.](../pages/Service_Appointment..md) |  Service Document |
| [Service_Appointment_Service_Report_NL.](../pages/Service_Appointment_Service_Report_NL..md) |  Service Document |
| [Service_Appointment_Service_Report_Without_Signature_NL.](../pages/Service_Appointment_Service_Report_Without_Signature_NL..md) |  Service Document |
| [Service_Contract_Record_Page.](../pages/Service_Contract_Record_Page..md) |  Record Page |
| [Service_Report_Notification.](../pages/Service_Report_Notification..md) |  Email Template Page |
| [Service_Report_Notification_fr.](../pages/Service_Report_Notification_fr..md) |  Email Template Page |
| [Service_Report_Notification_nl.](../pages/Service_Report_Notification_nl..md) |  Email Template Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
