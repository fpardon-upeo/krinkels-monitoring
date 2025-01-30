## ServiceContract

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Accepted__c | Accepted | Checkbox | <!-- --> |
| Additional_Work_in_scope_contract__c | Additional Work in scope contract | Checkbox | <!-- --> |
| Allocation_key__c | Allocation key | Text | <!-- --> |
| Allocation_Key__c | Allocation Key | Html | <!-- --> |
| Cancellation_Date_Contract__c | Cancellation Date Contract | Date | <!-- --> |
| Check_In_At_Work_Reference__c | Check-In-At-Work Reference | Text | <!-- --> |
| Check_In_At_Work_Required__c | Check-In-At-Work Required | Checkbox | <!-- --> |
| Check_In_Work__c | Check-In@Work | Checkbox | <!-- --> |
| Checkin_work__c | Checkin@work | Checkbox | <!-- --> |
| Contract_type__c | Contract / Invoice type | Picklist | <!-- --> |
| Contract_Type__c | Contract Type | Picklist | <!-- --> |
| Default_LMRA__c | Default LMRA | Picklist | <!-- --> |
| External_Contract_Reference__c | External Contract Reference | TextArea | <!-- --> |
| Generate_Maintenance_Plan__c | Generate Maintenance Plan | Checkbox | <!-- --> |
| Global_Contract_ID__c | Global Contract ID | Text | <!-- --> |
| Indexation_Allowed__c | Indexation Allowed | Checkbox | <!-- --> |
| Indexation_Date__c | Indexation Date | Date | <!-- --> |
| Indexation_Formula__c | Indexation Formula | TextArea | <!-- --> |
| Indexation_Needed__c | Indexation Needed | Checkbox | <!-- --> |
| Invoice_Type__c | Invoice Type | Picklist | <!-- --> |
| Invoice_Type_MS__c | Invoice Type | MultiselectPicklist | <!-- --> |
| Is_New__c | Is New | Checkbox | <!-- --> |
| Link_contract__c | DMS Link contract | Url | <!-- --> |
| Location_Type__c | Location Type | Picklist | <!-- --> |
| Location_Visit__c | Location Visit | Picklist | <!-- --> |
| Notify_Customer_When_En_Route__c | Notify Customer When En Route | Checkbox | <!-- --> |
| Payment_Conditions__c | Payment Conditions | Picklist | <!-- --> |
| Priority__c | Priority | Picklist | <!-- --> |
| Product__c | Service (Package) | Lookup | <!-- --> |
| Renewal_Reminder_Needed__c | Renewal Reminder Needed | Checkbox | used in a flow to indicate if a renewal remnder needs to be sent (if End date = Today - 90 days) |
| Request_date_for_indexation__c | Request date for indexation | Date | <!-- --> |
| Service_Appointments_Color_on_Gantt__c | Service Appointments Color on Gantt | Text | <!-- --> |
| Service_Appointments_Icon_on_Gantt__c | Service Appointments Icon on Gantt | Url | <!-- --> |
| Service_Package_Type__c | Service Package Type | Picklist | <!-- --> |
| Signature_Required__c | Signature Required? | Checkbox | <!-- --> |
| SLA__c | SLA | LongTextArea | <!-- --> |
| SPOC_Client__c | SPOC Client | Lookup | <!-- --> |
| SPOC_KGC__c | SPOC KGC | Lookup | <!-- --> |
| Status_custom__c | Status | Picklist | <!-- --> |
| Tender_Code__c | Tender Code | Text | <!-- --> |
| Type__c | Type | Picklist | <!-- --> |

## Validation Rules

| Rule      | Active | Description | Formula |
| :-------- | :---- | :---------- | :------ |
| Commercial_Contract_Commercial_Acc | Yes |  | `TEXT(Type__c) = 'Commercial Agreement' &&  Account.RecordType.Name != 'Commercial Account'` |
| Service_Contract_Commercial_Contract | Yes |  | `TEXT(Type__c) = 'Service Contract' &&  ParentServiceContractId = ''` |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Account_Screen_Flow_Add_Extra_Work](../flows/Account_Screen_Flow_Add_Extra_Work.md) [🕒](../flows/Account_Screen_Flow_Add_Extra_Work-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Account_Screen_Flow_Add_Extra_Work_Quote](../flows/Account_Screen_Flow_Add_Extra_Work_Quote.md) |  Screen Flow | <!-- --> |
| Quote | [Quote_After_Save_Create_Work_Order_on_Acceptance](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance.md) [🕒](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance-history.md) |  Record After Save | <!-- --> |
| ServiceContract | [Service_Contract_After_Save_RecordTrigered_Account_Fields_duplication](../flows/Service_Contract_After_Save_RecordTrigered_Account_Fields_duplication.md) |  Record After Save | Takes over account fields on the service contract |
| ServiceContract | [Service_Contract_Before_Save_Record_Triggered_Set_Pricebook2Id](../flows/Service_Contract_Before_Save_Record_Triggered_Set_Pricebook2Id.md) |  Record After Save | <!-- --> |
| ServiceContract | [Service_contract_Scheduled_Contract_Renewal_Reminder](../flows/Service_contract_Scheduled_Contract_Renewal_Reminder.md) [🕒](../flows/Service_contract_Scheduled_Contract_Renewal_Reminder-history.md) |  Scheduled | sends reminder mail to the contract manager 3 months before the end of a contract |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [ExtraWorkOrderController](../apex/ExtraWorkOrderController.md) | Lightning Controller |
| [ImportRecordsController](../apex/ImportRecordsController.md) | Lightning Controller |
| [MaintenancePlanService](../apex/MaintenancePlanService.md) | Lightning Controller |
| [MaintenancePlanServiceTest](../apex/MaintenancePlanServiceTest.md) | Test |
| [ReadyForValidation](../apex/ReadyForValidation.md) | Lightning Controller |
| [ReadyForValidationTest](../apex/ReadyForValidationTest.md) | Test |
| [SFS_WorkOrderCreatorController](../apex/SFS_WorkOrderCreatorController.md) | Lightning Controller |
| [ServiceAppointmentTriggerHandler](../apex/ServiceAppointmentTriggerHandler.md) | Trigger Handler |
| [ServiceAppointmentTriggerHandlerTest](../apex/ServiceAppointmentTriggerHandlerTest.md) | Test |
| [ServiceBuilderController](../apex/ServiceBuilderController.md) | Lightning Controller |
| [ServiceBuilderControllerTest](../apex/ServiceBuilderControllerTest.md) | Test |
| [ServiceContractHandler](../apex/ServiceContractHandler.md) | Class |
| [ServiceContractTriggerHandler](../apex/ServiceContractTriggerHandler.md) | Trigger Handler |
| [WorkOrderScheduler](../apex/WorkOrderScheduler.md) | Class |
| [WorkOrderSchedulerBatch](../apex/WorkOrderSchedulerBatch.md) | Batch |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [Commercial_Account_Record_Page.](../pages/Commercial_Account_Record_Page..md) |  Record Page |
| [Service_Contract_Record_Page.](../pages/Service_Contract_Record_Page..md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
