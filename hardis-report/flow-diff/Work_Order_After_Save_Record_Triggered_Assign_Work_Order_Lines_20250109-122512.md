# [Work Order][After-Save][Record-Triggered] Assign Work Order Lines

## Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
click START "#general-information" "3859038422"

Add_to_Collection[\"🟰 <em></em><br/>Add to Collection"/]:::assignments
click Add_to_Collection "#add_to_collection" "716695069"

Set_WOLI_Values[\"🟰 <em></em><br/>Set WOLI Values"/]:::assignments
click Set_WOLI_Values "#set_woli_values" "884950959"

Loop_Items_And_Create_WOLI{{"🔁 <em></em><br/>Loop Items And Create WOLI"}}:::loops
click Loop_Items_And_Create_WOLI "#loop_items_and_create_woli" "1125607767"

Create_Work_Order_Lines[("➕ <em></em><br/>Create Work Order Lines")]:::recordCreates
click Create_Work_Order_Lines "#create_work_order_lines" "3435590418"

Get_Asset_Items[("🔍 <em></em><br/>Get Asset Items")]:::recordLookups
click Get_Asset_Items "#get_asset_items" "2108291657"

Add_to_Collection --> Loop_Items_And_Create_WOLI
Set_WOLI_Values --> Add_to_Collection
Loop_Items_And_Create_WOLI --> |"For Each"|Set_WOLI_Values
Loop_Items_And_Create_WOLI ---> |"After Last"|Create_Work_Order_Lines
Create_Work_Order_Lines --> END_Create_Work_Order_Lines
Get_Asset_Items --> Loop_Items_And_Create_WOLI
START -->  Get_Asset_Items
END_Create_Work_Order_Lines(( END )):::endClass


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
|Object|WorkOrder|
|Process Type| Auto Launched Flow|
|Trigger Type| Record After Save|
|Record Trigger Type| Update|
|Label|[Work Order][After-Save][Record-Triggered] Assign Work Order Lines|
|Status|Active|
|Environments|Default|
|Interview Label|[Work Order][After-Save][Record-Triggered] Assign Work Order Lines {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|
|Connector|[Get_Asset_Items](#get_asset_items)|
|Next Node|[Get_Asset_Items](#get_asset_items)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Status| Is Changed|✅|
|2|Status| Equal To|Scheduled|


## Variables

|Name|Data Type|Is Collection|Is Input|Is Output|Object Type|Description|
|:-- |:--:|:--:|:--:|:--:|:--:|:--  |
|WorkOrderLine|SObject|⬜|⬜|⬜|WorkOrderLineItem|<!-- -->|
|WorkOrderLineItems|SObject|✅|⬜|⬜|WorkOrderLineItem|<!-- -->|


## Flow Nodes Details

### Add_to_Collection

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Assignment|
|Label|Add to Collection|
|Connector|[Loop_Items_And_Create_WOLI](#loop_items_and_create_woli)|


#### Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|WorkOrderLineItems| Add|WorkOrderLine|




### Set_WOLI_Values

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Assignment|
|Label|Set WOLI Values|
|Connector|[Add_to_Collection](#add_to_collection)|


#### Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|WorkOrderLine.WorkOrderId| Assign|$Record.Id|
|WorkOrderLine.Description| Assign|Loop_Items_And_Create_WOLI.Name|
|WorkOrderLine.Status| Assign|New|




### Loop_Items_And_Create_WOLI

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Loop|
|Label|Loop Items And Create WOLI|
|Collection Reference|[Get_Asset_Items](#get_asset_items)|
|Iteration Order|Asc|
|Next Value Connector|[Set_WOLI_Values](#set_woli_values)|
|No More Values Connector|[Create_Work_Order_Lines](#create_work_order_lines)|


### Create_Work_Order_Lines

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Create|
|Label|Create Work Order Lines|
|Input Reference|WorkOrderLineItems|


### Get_Asset_Items

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|Service_Item__c|
|Label|Get Asset Items|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|⬜|
|Store Output Automatically|✅|
|Connector|[Loop_Items_And_Create_WOLI](#loop_items_and_create_woli)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Service__c| Equal To|$Record.AssetId|








___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_