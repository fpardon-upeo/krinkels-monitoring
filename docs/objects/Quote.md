## Quote

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Additional_Remarks__c | Additional Remarks | LongTextArea | <!-- --> |
| Adjustable_Price__c | Adjustable Price | Checkbox | <!-- --> |
| Adjustment_Period__c | Adjustment Period | Picklist | <!-- --> |
| Amount__c | Amount | Currency | <!-- --> |
| Approval_Open__c | Approval Open | Checkbox | <!-- --> |
| Approval_Status__c | Approval Status | Picklist | <!-- --> |
| ATAK_Project__c | ATAK Project | Lookup | <!-- --> |
| ATAK_Project_Needed__c | ATAK Project Needed | Checkbox | <!-- --> |
| ATAK_Project_Request_Comment__c | ATAK Project Request Comment | TextArea | <!-- --> |
| ATAK_Project_Request_Priority__c | ATAK Project Request Priority | Picklist | <!-- --> |
| ATAK_Project_Request_Status__c | ATAK Project Request Status | Picklist | <!-- --> |
| ATAK_Project_Suggested_Name__c | ATAK Project Suggested Name | Text | <!-- --> |
| Commissioning_and_Framing__c | Commissioning and Framing | Currency | <!-- --> |
| Contract_Duration_in_years__c | Contract Duration (in years) | Number | <!-- --> |
| Contract_Resiliation_Time__c | Contract Resiliation Time | Text | <!-- --> |
| Customer_Reference__c | Customer Reference | Text | <!-- --> |
| Document_Language__c | Document Language | Picklist | <!-- --> |
| End_Period__c | End Period | Date | <!-- --> |
| Extra_Work__c | Extra Work Description | LongTextArea | <!-- --> |
| Implementation_Time__c | Implementation Time | Number | <!-- --> |
| Invoicing_Contact__c | Invoicing Contact | Text | <!-- --> |
| Invoicing_Contact_Function__c | Invoicing Contact Function | Text | <!-- --> |
| Language__c | Language | Text | <!-- --> |
| Language_Code__c | Language Code | Text | <!-- --> |
| Manual_Snow_Removal__c | Manual Snow Removal | Currency | <!-- --> |
| Mechanical_Unit_Placement__c | Mechanical Unit Placement | Currency | <!-- --> |
| Mechanical_Unit_Use__c | Mechanical Unit Use | Currency | <!-- --> |
| Offer_Valid_For__c | Offer Validity (in months) | Number | <!-- --> |
| Our_Reference__c | Our Reference | Text | <!-- --> |
| Owner__c | Owner | Text | <!-- --> |
| Payment_Term__c | Payment Term | Number | <!-- --> |
| Permanence_Fee__c | Permanence Fee | Currency | <!-- --> |
| PO_NUmber__c | PO NUmber | Text | <!-- --> |
| Price_Request_BS_Comments__c | Price Request BS Comments | TextArea | <!-- --> |
| Price_Request_Demand_Comments__c | Price Request Demand Comments | TextArea | <!-- --> |
| Price_Request_Priority__c | Price Request Priority | Picklist | <!-- --> |
| Price_Request_Status__c | Price Request Status | Picklist | <!-- --> |
| Pricing_Request_Needed__c | Pricing Request Needed | Checkbox | <!-- --> |
| Salt_Delivery_and_Distribution__c | Salt Delivery and Distribution | Currency | <!-- --> |
| Saturday_Night_Work_Rate__c | Saturday Night Work Rate | Currency | <!-- --> |
| Saturday_Rate__c | Saturday Rate | Currency | <!-- --> |
| Service_Contract__c | Service Contract | Lookup | <!-- --> |
| Service_Package_Type__c | Service Package Type | Picklist | <!-- --> |
| Signer_Function__c | Signer Function | Text | <!-- --> |
| Signer_Name__c | Signer Name | Text | <!-- --> |
| Signing_Date__c | Signing Date | Date | <!-- --> |
| Signing_Status__c | Signing Status | Picklist | <!-- --> |
| Smartscape_SLAs__c | Smartscape SLAs | LongTextArea | <!-- --> |
| Start_Period__c | Start Period | Date | <!-- --> |
| Subject__c | Subject | Text | <!-- --> |
| Sunday_and_Holiday_Night_Work_Rate__c | Sunday and Holiday Night Work Rate | Currency | <!-- --> |
| Sunday_and_Holiday_Rate__c | Sunday and Holiday Rate | Currency | <!-- --> |
| Tacit_Contract__c | Tacit Contract | Checkbox | <!-- --> |
| Travel_Allowance__c | Travel Allowance | Currency | <!-- --> |
| Type__c | Type | Picklist | <!-- --> |
| Type_Code__c | Type Code | Text | <!-- --> |
| Use_of_Mechanical_Snowplow__c | Use of Mechanical Snowplow | Currency | <!-- --> |
| VAT_Number__c | VAT Number | Text | <!-- --> |
| Weekdays_Night_Work_Rate__c | Weekdays Night Work Rate | Currency | <!-- --> |
| Winter_Service_Price_Adjustment__c | Winter Service Price Adjustment | Text | <!-- --> |

## Validation Rules

| Rule      | Active | Description | Formula |
| :-------- | :---- | :---------- | :------ |
| ATAK_Project_needed_for_Closed | Yes |  | `AND(
 ISBLANK(ATAK_Project__c ),
 ISPICKVAL(Status, 'Accepted') ,
  Opportunity.RecordTypeId = '012KF000003QSlNYAW'
)` |
| Maximum_Value_for_Quick_Quote | Yes |  | `AND(
   RecordType.DeveloperName ='Quick_Quote'   ,
 Amount__c  > 5000
)` |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Account_Screen_Flow_Add_Extra_Work](../flows/Account_Screen_Flow_Add_Extra_Work.md) [🕒](../flows/Account_Screen_Flow_Add_Extra_Work-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Account_Screen_Flow_Add_Extra_Work_Quote](../flows/Account_Screen_Flow_Add_Extra_Work_Quote.md) |  Screen Flow | <!-- --> |
| Opportunity | [Opportunity_After_Save_Record_Triggered_Sync_Amount_and_stages_to_Quote](../flows/Opportunity_After_Save_Record_Triggered_Sync_Amount_and_stages_to_Quote.md) [🕒](../flows/Opportunity_After_Save_Record_Triggered_Sync_Amount_and_stages_to_Quote-history.md) |  Record After Save | Keeps quote in sync when opportunity amounts or contact is changed |
| Quote | [Quote_After_Save_Create_Work_Order_on_Acceptance](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance.md) [🕒](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance-history.md) |  Record After Save | <!-- --> |
| Quote | [Quote_After_Save_Record_Triggered_Sync_Amount_and_stages_to_Opportunity](../flows/Quote_After_Save_Record_Triggered_Sync_Amount_and_stages_to_Opportunity.md) [🕒](../flows/Quote_After_Save_Record_Triggered_Sync_Amount_and_stages_to_Opportunity-history.md) |  Record After Save | Keeps opportunity in sync when opportunity amounts are changed |
| Quote | [Quote_After_Save_Record_Triggered_Trigged_Quote_Approval_Process](../flows/Quote_After_Save_Record_Triggered_Trigged_Quote_Approval_Process.md) |  Record After Save | This flow triggers the approval process for the quote over 5000€. |
| Quote | [Quote_After_Save_Update_Status_to_RfE](../flows/Quote_After_Save_Update_Status_to_RfE.md) |  Record After Save | <!-- --> |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [SFS_WorkOrderCreatorController](../apex/SFS_WorkOrderCreatorController.md) | Lightning Controller |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [B2B_Opportunity_Record_Page.](../pages/B2B_Opportunity_Record_Page..md) |  Record Page |
| [Home_Page_Business_Support.](../pages/Home_Page_Business_Support..md) |  Home Page |
| [Public_Tender_Opportunity_Record_Page.](../pages/Public_Tender_Opportunity_Record_Page..md) |  Record Page |
| [Quick_Opportunity_Record_Page.](../pages/Quick_Opportunity_Record_Page..md) |  Record Page |
| [Quote_Quick_Quote_Record_Page.](../pages/Quote_Quick_Quote_Record_Page..md) |  Record Page |
| [Quote_Record_Page.](../pages/Quote_Record_Page..md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
