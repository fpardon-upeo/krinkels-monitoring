## LMRA__c

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Corrective_Measures__c | Corrective Measures | LongTextArea | <!-- --> |
| Date__c | Date | Date | <!-- --> |
| EPC_EPI_CBM_PBM__c | EPC - EPI/CBM - PBM | LongTextArea | <!-- --> |
| Limited_LMRA_Done__c | Limited LMRA Done | Checkbox | <!-- --> |
| LMRA_Ok__c | LMRA Ok? | Checkbox | <!-- --> |
| LMRA_Type__c | LMRA Type | Picklist | <!-- --> |
| Other_Risks__c | Other Risks | LongTextArea | <!-- --> |
| Project_Lead__c | Project Lead | Text | <!-- --> |
| Surrounding_Risks__c | Surrounding Risks | LongTextArea | <!-- --> |
| Tasks_of_the_Day__c | Tasks of the Day | LongTextArea | <!-- --> |
| Thermal_Burner_Used__c | Thermal Burner Used | Checkbox | <!-- --> |
| Work_Order__c | Work Order | Lookup | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Log_LMRA_Information](../flows/Work_Order_Mobile_Flow_Screen_Flow_Log_LMRA_Information.md) [🕒](../flows/Work_Order_Mobile_Flow_Screen_Flow_Log_LMRA_Information-history.md) |  Field Service Mobile | <!-- --> |
| WorkStep | [Work_Step_After_Save_Record_Triggered_Relink_Photo_to_LMRA_record](../flows/Work_Step_After_Save_Record_Triggered_Relink_Photo_to_LMRA_record.md) [🕒](../flows/Work_Step_After_Save_Record_Triggered_Relink_Photo_to_LMRA_record-history.md) |  Record After Save | <!-- --> |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [MaintenancePlanService](../apex/MaintenancePlanService.md) | Lightning Controller |
| [ServiceBuilderController](../apex/ServiceBuilderController.md) | Lightning Controller |
| [WorkOrderScheduler](../apex/WorkOrderScheduler.md) | Class |
| [WorkOrderSchedulerBatch](../apex/WorkOrderSchedulerBatch.md) | Batch |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [LMRA_Record_Page](../pages/LMRA_Record_Page.md) |  Record Page |
| [Operational_Account_Record_Page](../pages/Operational_Account_Record_Page.md) |  Record Page |
| [Service_Contract_Record_Page](../pages/Service_Contract_Record_Page.md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
