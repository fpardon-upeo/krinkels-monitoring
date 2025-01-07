# [Work Order][Screen-Flow] Create Waste Depot Visit

## Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["START<br/><b>Screen Flow</b>"]):::startClass
click START "#general-information" "3367959752"

Extract_Multiselect_Values("⚙️ <em></em><br/>Extract Multiselect Values"):::actionCalls
click Extract_Multiselect_Values "#extract_multiselect_values" "2358325047"

Get_Accounts("⚙️ <em></em><br/>Get Accounts"):::actionCalls
click Get_Accounts "#get_accounts" "2487802627"

Success_Message("⚡ <em></em><br/>Success Message"):::actionCalls
click Success_Message "#success_message" "2972984463"

Create_Waste_Visit_WO[("➕ <em></em><br/>Create Waste Visit WO")]:::recordCreates
click Create_Waste_Visit_WO "#create_waste_visit_wo" "2254408978"

Get_Selected_Account_Information[("🔍 <em></em><br/>Get Selected Account Information")]:::recordLookups
click Get_Selected_Account_Information "#get_selected_account_information" "1699421265"

Get_Work_Order_Information[("🔍 <em></em><br/>Get Work Order Information")]:::recordLookups
click Get_Work_Order_Information "#get_work_order_information" "2928867733"

Get_Work_Type[("🔍 <em></em><br/>Get Work Type")]:::recordLookups
click Get_Work_Type "#get_work_type" "473360228"

List_of_Waste_Depot_Identified(["💻 <em></em><br/>List of Waste Depot Identified"]):::screens
click List_of_Waste_Depot_Identified "#list_of_waste_depot_identified" "3419262983"

Select_Type_of_Waste(["💻 <em></em><br/>Select Type of Waste"]):::screens
click Select_Type_of_Waste "#select_type_of_waste" "1714196864"

Extract_Multiselect_Values --> Get_Accounts
Get_Accounts --> List_of_Waste_Depot_Identified
Success_Message --> END_Success_Message
Create_Waste_Visit_WO --> Success_Message
Get_Selected_Account_Information --> Get_Work_Order_Information
Get_Work_Order_Information --> Get_Work_Type
Get_Work_Type --> Create_Waste_Visit_WO
List_of_Waste_Depot_Identified --> Get_Selected_Account_Information
Select_Type_of_Waste --> Extract_Multiselect_Values
START -->  Select_Type_of_Waste
END_Success_Message(( END )):::endClass


classDef actionCalls fill:#D4E4FC,color:black,text-decoration:none,max-height:100px
classDef assignments fill:#FBEED7,color:black,text-decoration:none,max-height:100px
classDef collectionProcessors fill:#F0E3FA,color:black,text-decoration:none,max-height:100px
classDef customErrors fill:#FFE9E9,color:black,text-decoration:none,max-height:100px
classDef decisions fill:#FDEAF6,color:black,text-decoration:none,max-height:100px
classDef loops fill:#FDEAF6,color:black,text-decoration:none,max-height:100px
classDef recordCreates fill:#FFF8C9,color:black,text-decoration:none,max-height:100px
classDef recordDeletes fill:#FFF8C9,color:black,text-decoration:none,max-height:100px
classDef recordLookups fill:#EDEAFF,color:black,text-decoration:none,max-height:100px
classDef recordUpdates fill:#FFF8C9,color:black,text-decoration:none,max-height:100px
classDef screens fill:#DFF6FF,color:black,text-decoration:none,max-height:100px
classDef subflows fill:#D4E4FC,color:black,text-decoration:none,max-height:100px
classDef startClass fill:#D9F2E6,color:black,text-decoration:none,max-height:100px
classDef endClass fill:#F9BABA,color:black,text-decoration:none,max-height:100px


```

## General Information

|<!-- -->|<!-- -->|
|:---|:---|
|Process Type| Flow|
|Label|[Work Order][Screen-Flow] Create Waste Depot Visit|
|Status|Active|
|Description|This flow allows a contract manager to create a waste depot visit.|
|Environments|Default|
|Interview Label|[Work Order][Screen-Flow] Create Waste Depot Visit {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|
|Connector|[Select_Type_of_Waste](#select_type_of_waste)|
|Next Node|[Select_Type_of_Waste](#select_type_of_waste)|


## Variables

|Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
|:-- |:--:|:--:|:--:|:--:|:--: |
|currentItem_Test|SObject|⬜|⬜|⬜|Account|
|currentItem_Test_0|SObject|⬜|⬜|⬜|Account|
|currentItemFromSourceCollection|SObject|⬜|⬜|⬜|Account|
|recordId|String|⬜|✅|⬜|<!-- -->|
|SelectedMSPValues|String|✅|✅|⬜|<!-- -->|
|WasteDepotFoundCollection|SObject|✅|✅|⬜|Account|
|WasteDepotFoundRecord|SObject|⬜|✅|⬜|Account|
|WasteDepotVisitId|String|⬜|✅|⬜|<!-- -->|


## Formulas

|Name|Data Type|Expression|
|:-- |:--:|:--  |
|today|Date|TODAY()|
|WasteDepotURL|String|LEFT({!$Api.Partner_Server_URL_340},FIND("/services", {!$Api.Partner_Server_URL_340})) & {!WasteDepotVisitId}|


## Flow Nodes Details

### Extract_Multiselect_Values

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Action Call|
|Label|Extract Multiselect Values|
|Action Type|Apex|
|Action Name|MultiSelectFlowValues|
|Flow Transaction Model|Automatic|
|Name Segment|MultiSelectFlowValues|
|Offset|0|
|Output Parameters|assignToReference: SelectedMSPValues<br/>name: output<br/>|
|Version Segment|1|
|Values (input)|Types_of_Waste_to_Drop_Off|
|Connector|[Get_Accounts](#get_accounts)|


### Get_Accounts

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Action Call|
|Label|Get Accounts|
|Action Type|Apex|
|Action Name|AccountWasteRetriever|
|Flow Transaction Model|Automatic|
|Name Segment|AccountWasteRetriever|
|Offset|0|
|Store Output Automatically|✅|
|Version Segment|1|
|Waste Types (input)|SelectedMSPValues|
|Connector|[List_of_Waste_Depot_Identified](#list_of_waste_depot_identified)|


### Success_Message

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Action Call|
|Label|Success Message|
|Action Type|Component|
|Action Name|c:showToast|
|Flow Transaction Model|CurrentTransaction|
|Name Segment|c:showToast|
|Offset|0|
|Store Output Automatically|✅|
|Version Segment|1|
|Message (input)|{url} was created.|
|Mode (input)|dismissible|
|Duration (input)|5|
|Url Link (input)|WasteDepotURL|
|Url Label (input)|Waste Depot Visit|


### Create_Waste_Visit_WO

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Create|
|Object|WorkOrder|
|Label|Create Waste Visit WO|
|Assign Record Id To Reference|WasteDepotVisitId|
|Connector|[Success_Message](#success_message)|


#### Input Assignments

|Field|Value|
|:-- |:--: |
|AccountId|Get_Selected_Account_Information.Id|
|MaintenancePlanId|Get_Work_Order_Information.MaintenancePlanId|
|Subject|Waste Depot Visit|
|SuggestedMaintenanceDate|today|
|Waste_to_Drop_Off__c|Types_of_Waste_to_Drop_Off|
|WorkTypeId|Get_Work_Type.Id|
|Work_Order_Type__c|Waste Depot Visit|




### Get_Selected_Account_Information

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|Account|
|Label|Get Selected Account Information|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|✅|
|Store Output Automatically|✅|
|Connector|[Get_Work_Order_Information](#get_work_order_information)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Id| Equal To|WasteDepots.firstSelectedRow.Id|




### Get_Work_Order_Information

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|WorkOrder|
|Label|Get Work Order Information|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|✅|
|Store Output Automatically|✅|
|Connector|[Get_Work_Type](#get_work_type)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Id| Equal To|recordId|




### Get_Work_Type

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|WorkType|
|Label|Get Work Type|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|✅|
|Store Output Automatically|✅|
|Connector|[Create_Waste_Visit_WO](#create_waste_visit_wo)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Name| Equal To|Waste Management|




### List_of_Waste_Depot_Identified

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Screen|
|Label|List of Waste Depot Identified|
|Allow Back|✅|
|Allow Finish|✅|
|Allow Pause|⬜|
|Show Footer|✅|
|Show Header|⬜|
|Connector|[Get_Selected_Account_Information](#get_selected_account_information)|


#### WasteDepots

|<!-- -->|<!-- -->|
|:---|:---|
|Data Type Mappings|typeName: T<br/>typeValue: Account<br/>|
|Extension Name|flowruntime:datatable|
|Field Type| Component Instance|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|✅|
|Store Output Automatically|✅|
|Selection Mode (input)|SINGLE_SELECT|
|Min Row Selection (input)|1|
|Table Data (input)|[Get_Accounts](#get_accounts)|
|Should Display Label (input)|✅|
|Label (input)|Waste Depots Found|
|Max Row Selection (input)|1|
|Columns (input)|[{"apiName":"Name","guid":"column-843d","editable":false,"hasCustomHeaderLabel":true,"customHeaderLabel":"Waste Depot","wrapText":true,"order":0,"label":"Account Name","type":"text"},{"apiName":"Contract__c","guid":"column-896c","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":1,"label":"Contract","type":"boolean"},{"apiName":"Type_of_Waste__c","guid":"column-7260","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":2,"label":"Type of Waste","type":"customRichText"},{"apiName":"ShippingPostalCode","guid":"column-b534","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":3,"label":"Shipping Zip/Postal Code","type":"text"},{"apiName":"ShippingCity","guid":"column-0ee8","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":4,"label":"Shipping City","type":"text"}]|




### Select_Type_of_Waste

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Screen|
|Label|Select Type of Waste|
|Allow Back|⬜|
|Allow Finish|✅|
|Allow Pause|⬜|
|Show Footer|✅|
|Show Header|⬜|
|Connector|[Extract_Multiselect_Values](#extract_multiselect_values)|


#### Types_of_Waste_to_Drop_Off

|<!-- -->|<!-- -->|
|:---|:---|
|Data Type|String|
|Choice References|TypeOfWaste|
|Field Text|Types of Waste to Drop Off|
|Field Type| Multi Select Picklist|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|✅|








___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_