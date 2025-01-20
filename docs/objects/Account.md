## Account

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Access_Information__c | Access Information | LongTextArea | <!-- --> |
| Account_ATAK_Code__c | Account ATAK Code | Text | <!-- --> |
| Address_Identifier__c | Address Identifier | Text | <!-- --> |
| Alias_commercial_customer_name__c | Alias Commercial Customer Name | Text | <!-- --> |
| ATAK_Project__c | ATAK Project | Lookup | <!-- --> |
| Attention_points_for_execution__c | Attention Points for Execution | LongTextArea | <!-- --> |
| Check_In_Work__c | Check-In @Work | Checkbox | <!-- --> |
| Client_Code__c | Client Code | Text | <!-- --> |
| Client_Region__c | Client Region | Text | <!-- --> |
| Client_sector__c | Client sector | Picklist | <!-- --> |
| Closing_Days__c | Closing Days | LongTextArea | <!-- --> |
| Contactperson_commercial_customer_key__c | Contactperson Commercial Customer (key) | Lookup | <!-- --> |
| Contactperson_operational_customer_key__c | Contactperson Operational Customer (key) | Lookup | <!-- --> |
| Contract__c | Contract | Checkbox | <!-- --> |
| ContractType__c | Contract Type | MultiselectPicklist | <!-- --> |
| Default_LMRA__c | Default LMRA | Picklist | <!-- --> |
| Email__c | Email | Email | <!-- --> |
| Enterprise_Number__c | Enterprise Number | Text | <!-- --> |
| Facility_Type__c | Facility Type | Picklist | <!-- --> |
| Financial_client_ATAK_Code__c | Financial Client ATAK Code | Text | <!-- --> |
| Financial_client_type_ATAK__c | Financial Client Type ATAK | Text | <!-- --> |
| Financial_Client_Type_ATAK__c | Financial Client Type ATAK | Picklist | <!-- --> |
| Financial_External_Id__c | Financial External Id | Text | <!-- --> |
| Group__c | Group | Picklist | <!-- --> |
| Intervention_registration__c | Intervention Registration | Picklist | <!-- --> |
| Intervention_Registration_Announcement__c | Intervention Registration Announcement | Number | <!-- --> |
| Intervention_Registration_Contact__c | Intervention Registration Contact | Lookup | <!-- --> |
| Intervention_Registration_Method__c | Intervention Registration Method | Picklist | <!-- --> |
| Intervention_registration_type__c | Intervention Registration Type | Picklist | <!-- --> |
| Latitude__c | Latitude | Text | <!-- --> |
| LMRA_Type__c | LMRA Type | Picklist | <!-- --> |
| Longitude__c | Longitude | Text | <!-- --> |
| Notes__c | Notes | LongTextArea | <!-- --> |
| Opening_hours__c | Opening Hours | LongTextArea | <!-- --> |
| Opening_hours_OLD__c | Opening Hours OLD | LongTextArea | <!-- --> |
| Priority__c | Priority | Picklist | Priority used on the work orders of this customer - can be overwritten |
| Region__c | Region | Picklist | <!-- --> |
| Related_account__c | Related Account | Lookup | <!-- --> |
| Short_Name__c | Short Name | Text | <!-- --> |
| Signature_Required__c | Signature Required | Checkbox | <!-- --> |
| Status__c | Status | Picklist | <!-- --> |
| Sub_Type__c | Sub Type | Picklist | <!-- --> |
| Type_of_Waste__c | Type of Waste | MultiselectPicklist | <!-- --> |

## Validation Rules

| Rule      | Active | Description | Formula |
| :-------- | :---- | :---------- | :------ |
| Active_Commercial_Account_VAT | Yes |  | `RecordType.Name = 'Commercial Account' && TEXT(Status__c) = 'Active' &&  Enterprise_Number__c = ''` |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Account_Screen_Flow_Add_Extra_Work](../flows/Account_Screen_Flow_Add_Extra_Work.md) [🕒](../flows/Account_Screen_Flow_Add_Extra_Work-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Account_Screen_Flow_Add_Extra_Work_Quote](../flows/Account_Screen_Flow_Add_Extra_Work_Quote.md) |  Screen Flow | <!-- --> |
| 💻 | [Location_Passport_Mobile_Flow_Screen_flow_View_Location_Passport_Information](../flows/Location_Passport_Mobile_Flow_Screen_flow_View_Location_Passport_Information.md) [🕒](../flows/Location_Passport_Mobile_Flow_Screen_flow_View_Location_Passport_Information-history.md) |  Field Service Mobile | <!-- --> |
| 💻 | [Send_Better_Email_Testflow](../flows/Send_Better_Email_Testflow.md) [🕒](../flows/Send_Better_Email_Testflow-history.md) |  Screen Flow | A series of 5 examples for testing and demonstrating Send Better Email Action Component |
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Depot_Visit](../flows/Work_Order_Mobile_Flow_Screen_Flow_Depot_Visit.md) |  Field Service Mobile | This flow allows an operator to execute a depot visit. |
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Log_LMRA_Information](../flows/Work_Order_Mobile_Flow_Screen_Flow_Log_LMRA_Information.md) [🕒](../flows/Work_Order_Mobile_Flow_Screen_Flow_Log_LMRA_Information-history.md) |  Field Service Mobile | <!-- --> |
| 💻 | [Work_Order_Screen_Flow_Create_Depot_Visit](../flows/Work_Order_Screen_Flow_Create_Depot_Visit.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Depot_Visit-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Work_Order_Screen_Flow_Create_Depot_Visit_Console](../flows/Work_Order_Screen_Flow_Create_Depot_Visit_Console.md) |  Screen Flow | <!-- --> |
| 💻 | [Work_Order_Screen_Flow_Create_Internal_Work](../flows/Work_Order_Screen_Flow_Create_Internal_Work.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Internal_Work-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Work_Order_Screen_Flow_Create_Waste_Depot_Visit](../flows/Work_Order_Screen_Flow_Create_Waste_Depot_Visit.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Waste_Depot_Visit-history.md) |  Screen Flow | This flow allows a contract manager to create a waste depot visit. |
| 💻 | [sendBetterEmail_Test_Create_Test_Templates_if_needed](../flows/sendBetterEmail_Test_Create_Test_Templates_if_needed.md) [🕒](../flows/sendBetterEmail_Test_Create_Test_Templates_if_needed-history.md) |  Screen Flow | Flow to test if the templates named sendBetterEmaiTest have been created, and if not, create them |
| ContractLineItem | [ContractLineItem_After_Save_Add_Default_Financial_Accounts](../flows/ContractLineItem_After_Save_Add_Default_Financial_Accounts.md) |  Record After Save | <!-- --> |
| Lead | [Lead_After_Save_Record_Triggered_Populate_Client_Sector_Industry_Type_on_Account](../flows/Lead_After_Save_Record_Triggered_Populate_Client_Sector_Industry_Type_on_Account.md) |  Record After Save | <!-- --> |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Populate_Contact_on_WO_and_SA](../flows/Work_Order_After_Save_Record_Triggered_Populate_Contact_on_WO_and_SA.md) [🕒](../flows/Work_Order_After_Save_Record_Triggered_Populate_Contact_on_WO_and_SA-history.md) |  Record After Save | This flow populates the contact field on a work order and its related service appointment on creation. It takes an operational contact of the related operational account. |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
