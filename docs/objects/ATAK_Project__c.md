## ATAK_Project__c

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Active__c | Active | Checkbox | <!-- --> |
| ATAK_Creation_Date__c | ATAK Creation Date | Date | <!-- --> |
| Branche__c | Branche | Text | <!-- --> |
| Client_Type__c | Client Type | Text | <!-- --> |
| Cost_centre_Atak_Id__c | Cost Centre ATAK Id | Text | <!-- --> |
| Cost_centre_Atak_Name__c | Cost centre Atak Name | Text | <!-- --> |
| Cost_Centre_Atak_Name__c | Cost Centre ATAK Name | Text | <!-- --> |
| Department_Code__c | Department Code | Text | <!-- --> |
| Department_Name__c | Department Name | Text | <!-- --> |
| Depot__c | Depot | Text | <!-- --> |
| Discipline__c | Discipline | Text | <!-- --> |
| Dossier__c | Dossier | Text | <!-- --> |
| End_Date__c | End Date | Date | <!-- --> |
| Financial_Account__c | Financial Account | Lookup | <!-- --> |
| Group__c | Group | Text | <!-- --> |
| Language__c | Language | Text | <!-- --> |
| Parent_Subproject__c | Parent Subproject | Lookup | <!-- --> |
| Region__c | Region | Text | <!-- --> |
| Service_Territory__c | Service Territory | Lookup | <!-- --> |
| Site_Manager_Code__c | Site Manager Code | Text | <!-- --> |
| Start_Date__c | Start Date | Date | <!-- --> |
| SubProject_ATAK__c | Subproject ATAK | Text | <!-- --> |
| Subproject_Description__c | Subproject Description | LongTextArea | <!-- --> |
| Subproject_Name__c | Subproject Name | Text | filled via a flow accoridng to a naming convention |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| ATAK_Project__c | [ATAK_Project_After_Save_Record_Triggered_Set_Territory_And_Owner](../flows/ATAK_Project_After_Save_Record_Triggered_Set_Territory_And_Owner.md) [🕒](../flows/ATAK_Project_After_Save_Record_Triggered_Set_Territory_And_Owner-history.md) |  Record Before Save | <!-- --> |
| ATAK_Project__c | [ATAK_Project_Before_Save_Record_Triggered_Set_Naming_Convention](../flows/ATAK_Project_Before_Save_Record_Triggered_Set_Naming_Convention.md) |  Record Before Save | Flow that gives an automatic name to ATAK projects that do not receive their name from ATAK |
| Asset | [Asset_Notify_Business_Support_for_ATAK_Project](../flows/Asset_Notify_Business_Support_for_ATAK_Project.md) [🕒](../flows/Asset_Notify_Business_Support_for_ATAK_Project-history.md) |  Record After Save | <!-- --> |
| Quote | [Quote_After_Save_Create_Work_Order_on_Acceptance](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance.md) [🕒](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance-history.md) |  Record After Save | <!-- --> |
| Quote | [Quote_After_Save_Update_Status_to_RfE](../flows/Quote_After_Save_Update_Status_to_RfE.md) |  Record After Save | <!-- --> |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
