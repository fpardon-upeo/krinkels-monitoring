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
| Depot_Manager__c | Depot Manager | Lookup | <!-- --> |
| Depot_Manager_Code__c | Depot Manager Code | Text | <!-- --> |
| Discipline__c | Discipline | Text | <!-- --> |
| Dossier__c | Dossier | Text | <!-- --> |
| End_Date__c | End Date | Date | <!-- --> |
| Financial_Account__c | Financial Account | Lookup | <!-- --> |
| Group__c | Group | Text | <!-- --> |
| Language__c | Language | Text | <!-- --> |
| Parent_Subproject__c | Parent Subproject | Lookup | <!-- --> |
| Project_Type__c | Project Type | Text | <!-- --> |
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


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [ATAKPerformanceServiceTest](../apex/ATAKPerformanceServiceTest.md) | Test |
| [ATAKProjectService](../apex/ATAKProjectService.md) | Class |
| [ATAKWorkLogServiceTest](../apex/ATAKWorkLogServiceTest.md) | Test |
| [ExtraWorkOrderController](../apex/ExtraWorkOrderController.md) | Lightning Controller |
| [FieldServiceTestData](../apex/FieldServiceTestData.md) | Test |
| [MaintenancePlanService](../apex/MaintenancePlanService.md) | Lightning Controller |
| [ProjectRestResourceTest](../apex/ProjectRestResourceTest.md) | Test |
| [ReadyForValidation](../apex/ReadyForValidation.md) | Lightning Controller |
| [ReadyForValidationTest](../apex/ReadyForValidationTest.md) | Test |
| [ServiceBuilderControllerTest](../apex/ServiceBuilderControllerTest.md) | Test |
| [ServiceContractHandler](../apex/ServiceContractHandler.md) | Class |
| [ServiceContractTriggerHandler](../apex/ServiceContractTriggerHandler.md) | Trigger Handler |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [ATAK_Project_Record_Page](../pages/ATAK_Project_Record_Page.md) |  Record Page |
| [Operational_Account_Record_Page](../pages/Operational_Account_Record_Page.md) |  Record Page |
| [Quote_Quick_Quote_Record_Page](../pages/Quote_Quick_Quote_Record_Page.md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
