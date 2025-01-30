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
| Authorization_s__c | Authorization(s) | Picklist | <!-- --> |
| Award_criteria_Implementation_plan__c | Award criteria-Implementation plan | Picklist | <!-- --> |
| Award_criteria_Price__c | Award criteria-Price | Picklist | <!-- --> |
| Award_criteria_Social_employment__c | Award criteria-Social employment | Picklist | <!-- --> |
| Award_criteriaImplementation_details__c | Award criteria-Implementation details | TextArea | <!-- --> |
| Award_criteriaOther__c | Award criteria-Other | TextArea | <!-- --> |
| Award_criteriaPrice_details__c | Award criteria-Price details | TextArea | <!-- --> |
| Award_criteriaSocial_employment_details__c | Award criteria-Social employment details | TextArea | <!-- --> |
| Bank_statement__c | Bank statement | Picklist | <!-- --> |
| Bill_of_materials__c | Bill of materials | Picklist | <!-- --> |
| Budget_Confirmed__c | Budget Confirmed | Checkbox | <!-- --> |
| Business_Type__c | Business Type | Picklist | <!-- --> |
| Channel_Partner__c | Channel Partner | Lookup | <!-- --> |
| Competitor_Information__c | Competitor Information | LongTextArea | <!-- --> |
| Contact_form__c | Contact form | Picklist | <!-- --> |
| Contract_Type__c | Contract Type | Picklist | <!-- --> |
| Contractor_Certification__c | Contractor Certification | Picklist | <!-- --> |
| Criminal_record_KGC__c | Criminal record KGC | Picklist | <!-- --> |
| Criminal_record_KHV__c | Criminal record KHV | Picklist | <!-- --> |
| Customer_Reference__c | Customer Reference | Text | <!-- --> |
| Discovery_Completed__c | Discovery Completed | Checkbox | <!-- --> |
| Dossier_Requirements_Notes__c | Dossier Requirements Notes | LongTextArea | <!-- --> |
| Expected_Contract_Start_Date__c | Expected Contract Start Date | Date | <!-- --> |
| Extra_Work_Description__c | Extra Work Description | LongTextArea | <!-- --> |
| General_Liability_Insurance_BA__c | General Liability Insurance (BA) | Picklist | <!-- --> |
| Guarantee_modalities__c | Guarantee modalities | TextArea | <!-- --> |
| Guarantee_required__c | Guarantee required | Picklist | <!-- --> |
| Indexation__c | Indexation | Picklist | <!-- --> |
| Initiative_Party__c | Initiative Party | Picklist | <!-- --> |
| Inventory__c | Inventory | Picklist | <!-- --> |
| Language__c | Language | Picklist | <!-- --> |
| Loss_Reason__c | Loss Reason | Picklist | <!-- --> |
| Main_Contact__c | Main Contact | Lookup | <!-- --> |
| Notarial_Certificate__c | Notarial Certificate | Picklist | <!-- --> |
| Our_Reference__c | Our Reference | Text | <!-- --> |
| Price_Request_BS_Comments__c | Price Request BS Comments | TextArea | <!-- --> |
| Price_Request_Demand_Comments__c | Price Request Demand Comments | TextArea | <!-- --> |
| Price_Request_Priority__c | Price Request Priority | Picklist | <!-- --> |
| Price_Request_Status__c | Price Request Status | Picklist | <!-- --> |
| Pricing_Request_Needed__c | Pricing Request Needed | Checkbox | <!-- --> |
| Project_Plan__c | Project Plan | Picklist | <!-- --> |
| Quick_Quote__c | Quick Quote | Checkbox | <!-- --> |
| Quotation_Form__c | Quotation Form | Picklist | <!-- --> |
| Reference_list__c | Reference list | Picklist | <!-- --> |
| Risk_Analysis_Safety_Plan__c | Risk Analysis/Safety Plan | Picklist | <!-- --> |
| ROI_Analysis_Completed__c | ROI Analysis Completed | Checkbox | <!-- --> |
| Service_Contract__c | Service Contract | Lookup | <!-- --> |
| Service_Package__c | Service Package Type | Picklist | <!-- --> |
| Site_Visit_Certificate__c | Site Visit Certificate | Picklist | <!-- --> |
| Social_security_certificate_RSZ__c | Social security certificate (RSZ) | Picklist | <!-- --> |
| Special_format_requirement_Tender__c | Special (format) requirement Tender | LongTextArea | <!-- --> |
| Specification_Number__c | Specification Number | Text | <!-- --> |
| Specification_number_Client_reference__c | Specification number/ Client reference | TextArea | <!-- --> |
| Statement_of_Equipment__c | Statement of Equipment | Picklist | <!-- --> |
| Statement_of_Proper_Execution__c | Statement of Proper Execution | Picklist | <!-- --> |
| Statement_of_Truth__c | Statement of Truth | Picklist | <!-- --> |
| Subject__c | Subject | Text | <!-- --> |
| Submission_Date_Due__c | Submission Date Due | Date | <!-- --> |
| Submission_Method__c | Submission Method | Picklist | <!-- --> |
| Sustainability_Declaration__c | Sustainability Declaration | Picklist | <!-- --> |
| Tax_certificate__c | Tax certificate | Picklist | <!-- --> |
| Tender_Documents_Requirements_Notes__c | Tender Documents Requirements Notes | LongTextArea | <!-- --> |
| Turnover_Statement__c | Turnover Statement | Picklist | <!-- --> |
| Type_Code__c | Type Code | Text | <!-- --> |
| UEA__c | UEA | Picklist | <!-- --> |
| Weighted_Amount__c | Weighted Amount | Currency | <!-- --> |
| Work_Size__c | Work Size | Picklist | <!-- --> |
| Workers_Compensat_Insurance_AO__c | Workers' Compensat Insurance (AO) | Picklist | <!-- --> |

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


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [ObjectFieldSelectorControllerTest](../apex/ObjectFieldSelectorControllerTest.md) | Test |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [B2B_Opportunity_Record_Page.](../pages/B2B_Opportunity_Record_Page..md) |  Record Page |
| [Location_Visit_Record_Page.](../pages/Location_Visit_Record_Page..md) |  Record Page |
| [Opportunity_Product_Record_Page.](../pages/Opportunity_Product_Record_Page..md) |  Record Page |
| [Opportunity_Record_Page.](../pages/Opportunity_Record_Page..md) |  Record Page |
| [Public_Tender_Opportunity_Record_Page.](../pages/Public_Tender_Opportunity_Record_Page..md) |  Record Page |
| [Quick_Opportunity_Record_Page.](../pages/Quick_Opportunity_Record_Page..md) |  Record Page |
| [Quote_Quick_Quote_Record_Page.](../pages/Quote_Quick_Quote_Record_Page..md) |  Record Page |
| [Quote_Record_Page.](../pages/Quote_Record_Page..md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
