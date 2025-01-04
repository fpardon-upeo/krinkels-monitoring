# [Work Order][Mobile Flow][Screen-Flow] Log LMRA Information

## Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["START"]):::startClass
click START "#general-information" "4117675639"

Get_Related_Work_Order[("🔍 <em></em><br/>Get Related Work Order")]:::recordLookups
click Get_Related_Work_Order "#get_related_work_order" "1776090283"

Equipment_Information(["💻 <em></em><br/>Equipment Information"]):::screens
click Equipment_Information "#equipment_information" "2163154206"

LMRA_Information(["💻 <em></em><br/>LMRA Information"]):::screens
click LMRA_Information "#lmra_information" "245551225"

Risk_Information(["💻 <em></em><br/>Risk Information"]):::screens
click Risk_Information "#risk_information" "4290839850"

Task_Information(["💻 <em></em><br/>Task Information"]):::screens
click Task_Information "#task_information" "578828805"

Get_Related_Work_Order --> LMRA_Information
Equipment_Information --> END_Equipment_Information
LMRA_Information --> Task_Information
Risk_Information --> Equipment_Information
Task_Information --> Risk_Information
START -->  Get_Related_Work_Order
END_Equipment_Information(( END )):::endClass


classDef actionCalls fill:#D4E4FC,color:black,max-height:100px
classDef assignments fill:#FBEED7,color:black,max-height:100px
classDef collectionProcessors fill:#F0E3FA,color:black,max-height:100px
classDef customErrors fill:#FFE9E9,color:black,max-height:100px
classDef decisions fill:#FDEAF6,color:black,max-height:100px
classDef loops fill:#FDEAF6,color:black,max-height:100px
classDef recordCreates fill:#FFF8C9,color:black,max-height:100px
classDef recordDeletes fill:#FFF8C9,color:black,max-height:100px
classDef recordLookups fill:#EDEAFF,color:black,max-height:100px
classDef recordUpdates fill:#FFF8C9,color:black,max-height:100px
classDef screens fill:#DFF6FF,color:black,max-height:100px
classDef subflows fill:#D4E4FC,color:black,max-height:100px
classDef startClass fill:#D9F2E6,color:black,max-height:100px
classDef endClass fill:#F9BABA,color:black,max-height:100px


```

## General Information

|<!-- -->|<!-- -->|
|:---|:---|
|Process Type| Field Service Mobile|
|Label|[Work Order][Mobile Flow][Screen-Flow] Log LMRA Information|
|Status|⚠️ Draft|
|Environments|Default|
|Interview Label|[Work Order][Mobile Flow][Screen-Flow] Log LMRA Information {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|
|Connector|[Get_Related_Work_Order](#get_related_work_order)|
|Next Node|[Get_Related_Work_Order](#get_related_work_order)|


## Variables

|Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
|:-- |:--:|:--:|:--:|:--:|:--: |
|Id|String|⬜|✅|⬜|<!-- -->|
|workOrderRecord|SObject|⬜|✅|⬜|WorkOrder|


## Flow Nodes Details

### Get_Related_Work_Order

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|WorkOrder|
|Label|Get Related Work Order|
|Assign Null Values If No Records Found|⬜|
|Output Reference|workOrderRecord|
|Queried Fields|- Id<br/>- WorkOrderNumber<br/>|
|Connector|[LMRA_Information](#lmra_information)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Id| Equal To|Id|




### Equipment_Information

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Screen|
|Label|Equipment Information|
|Allow Back|✅|
|Allow Finish|✅|
|Allow Pause|⬜|
|Show Footer|✅|
|Show Header|⬜|


#### EPC_EPI_CBM_PBM

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|EPC - EPI/CBM - PBM|
|Field Type| Large Text Area|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|⬜|




### LMRA_Information

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Screen|
|Label|LMRA Information|
|Allow Back|⬜|
|Allow Finish|✅|
|Allow Pause|⬜|
|Show Footer|✅|
|Show Header|⬜|
|Connector|[Task_Information](#task_information)|


#### Work_Order_Number

|<!-- -->|<!-- -->|
|:---|:---|
|Data Type|String|
|Default Value|workOrderRecord.WorkOrderNumber|
|Field Text|Work Order Number|
|Field Type| Input Field|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Disabled|true|
|Is Required|⬜|




#### Date

|<!-- -->|<!-- -->|
|:---|:---|
|Data Type|Date|
|Field Text|Date|
|Field Type| Input Field|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|⬜|




#### LMRA_Type

|<!-- -->|<!-- -->|
|:---|:---|
|Data Type|String|
|Choice References|- Limited<br/>- Full<br/>|
|Field Text|LMRA Type|
|Field Type| Dropdown Box|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|⬜|




### Risk_Information

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Screen|
|Label|Risk Information|
|Allow Back|✅|
|Allow Finish|✅|
|Allow Pause|⬜|
|Show Footer|✅|
|Show Header|⬜|
|Connector|[Equipment_Information](#equipment_information)|


#### Surrounding_Risks

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|Surrounding Risks|
|Field Type| Large Text Area|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|⬜|




#### SurroundRisksPhoto

|<!-- -->|<!-- -->|
|:---|:---|
|Extension Name|forceContent:fileUpload|
|Field Type| Component Instance|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|✅|
|Record Id (input)|workOrderRecord.Id|
|Label (input)|Surrounding Risks Photo|




#### Corrective_Measures

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|Corrective Measures|
|Field Type| Large Text Area|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|⬜|




#### CorrectiveMeasuresPhoto

|<!-- -->|<!-- -->|
|:---|:---|
|Extension Name|forceContent:fileUpload|
|Field Type| Component Instance|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|✅|
|Label (input)|Corrective Measures Photo|
|Record Id (input)|workOrderRecord.Id|




### Task_Information

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Screen|
|Label|Task Information|
|Allow Back|✅|
|Allow Finish|✅|
|Allow Pause|⬜|
|Show Footer|✅|
|Show Header|⬜|
|Connector|[Risk_Information](#risk_information)|


#### Tasks_of_the_Day

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|Tasks of the Day|
|Field Type| Large Text Area|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|⬜|








___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_