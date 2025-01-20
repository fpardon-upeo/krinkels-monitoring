## Opportunity

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Amount__c | Amount | Currency | <!-- --> |
| ATAK_Project_Needed__c | ATAK Project Needed | Checkbox | <!-- --> |
| ATAK_Project_Request_Comment__c | ATAK Project Request Comment | TextArea | <!-- --> |
| ATAK_Project_Request_Priority__c | ATAK Project Request Priority | Picklist | <!-- --> |
| ATAK_Project_Request_Status__c | ATAK Project Request Status | Picklist | <!-- --> |
| ATAK_Project_Suggested_Name__c | ATAK Project Suggested  Name | Text | <!-- --> |
| ATAK_Projectx__c | ATAK Project | Lookup | <!-- --> |
| Budget_Confirmed__c | Budget Confirmed | Checkbox | <!-- --> |
| Business_Type__c | Business Type | Picklist | <!-- --> |
| Channel_Partner__c | Channel Partner | Lookup | <!-- --> |
| Competitor_Information__c | Competitor Information | LongTextArea | <!-- --> |
| Contract_Type__c | Contract Type | Picklist | <!-- --> |
| Customer_Reference__c | Customer Reference | Text | <!-- --> |
| Discovery_Completed__c | Discovery Completed | Checkbox | <!-- --> |
| Expected_Contract_Start_Date__c | Expected Contract Start Date | Date | <!-- --> |
| Extra_Work_Description__c | Extra Work Description | LongTextArea | <!-- --> |
| Initiative_Party__c | Initiative Party | Picklist | <!-- --> |
| Language__c | Language | Picklist | <!-- --> |
| Loss_Reason__c | Loss Reason | Picklist | <!-- --> |
| Main_Contact__c | Main Contact | Lookup | <!-- --> |
| Our_Reference__c | Our Reference | Text | <!-- --> |
| Price_Request_BS_Comments__c | Price Request BS Comments | TextArea | <!-- --> |
| Price_Request_Demand_Comments__c | Price Request Demand Comments | TextArea | <!-- --> |
| Price_Request_Priority__c | Price Request Priority | Picklist | <!-- --> |
| Price_Request_Status__c | Price Request Status | Picklist | <!-- --> |
| Pricing_Request_Needed__c | Pricing Request Needed | Checkbox | <!-- --> |
| Quick_Quote__c | Quick Quote | Checkbox | <!-- --> |
| ROI_Analysis_Completed__c | ROI Analysis Completed | Checkbox | <!-- --> |
| Service_Contract__c | Service Contract | Lookup | <!-- --> |
| Service_Package__c | Service Package Type | Picklist | <!-- --> |
| Specification_Number__c | Specification Number | Text | <!-- --> |
| Subject__c | Subject | Text | <!-- --> |
| Submission_Date_Due__c | Submission Date Due | Date | <!-- --> |
| Submission_Method__c | Submission Method | Picklist | <!-- --> |
| Type_Code__c | Type Code | Text | <!-- --> |
| Weighted_Amount__c | Weighted Amount | Currency | <!-- --> |
| Work_Size__c | Work Size | Picklist | <!-- --> |

## Validation Rules

| Rule      | Active | Description | Formula |
| :-------- | :---- | :---------- | :------ |
| Maximum_Value_for_Quick_Quote | Yes |  | `AND(
 RecordType.DeveloperName= 'Quick_Quote'    ,
 Amount__c  > 5000
)` |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Account_Screen_Flow_Add_Extra_Work](../flows/Account_Screen_Flow_Add_Extra_Work.md) [🕒](../flows/Account_Screen_Flow_Add_Extra_Work-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Account_Screen_Flow_Add_Extra_Work_Quote](../flows/Account_Screen_Flow_Add_Extra_Work_Quote.md) |  Screen Flow | <!-- --> |
| 💻 | [Opportunity_Screen_Flow_ATAK_Project_Request](../flows/Opportunity_Screen_Flow_ATAK_Project_Request.md) |  Screen Flow | <!-- --> |
| 💻 | [Opportunity_Screen_Flow_Pricing_Request](../flows/Opportunity_Screen_Flow_Pricing_Request.md) [🕒](../flows/Opportunity_Screen_Flow_Pricing_Request-history.md) |  Screen Flow | <!-- --> |
| Opportunity | [Opportunity_After_Save_Record_Triggered_Sync_Amount_and_stages_to_Quote](../flows/Opportunity_After_Save_Record_Triggered_Sync_Amount_and_stages_to_Quote.md) [🕒](../flows/Opportunity_After_Save_Record_Triggered_Sync_Amount_and_stages_to_Quote-history.md) |  Record After Save | Keeps quote in sync when opportunity amounts or contact is changed |
| Quote | [Quote_After_Save_Record_Triggered_Sync_Amount_and_stages_to_Opportunity](../flows/Quote_After_Save_Record_Triggered_Sync_Amount_and_stages_to_Opportunity.md) [🕒](../flows/Quote_After_Save_Record_Triggered_Sync_Amount_and_stages_to_Opportunity-history.md) |  Record After Save | Keeps opportunity in sync when opportunity amounts are changed |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
