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
click START "#general-information" "459049158"

Full_or_Limited_LMRA{"🔀 <em></em><br/>Full or Limited LMRA ?"}:::decisions
click Full_or_Limited_LMRA "#full_or_limited_lmra" "2088660188"

Limited_LMRA_Confirmed{"🔀 <em></em><br/>Limited LMRA Confirmed ?"}:::decisions
click Limited_LMRA_Confirmed "#limited_lmra_confirmed" "2857364459"

LMRA_Already_Done{"🔀 <em></em><br/>LMRA Already Done ?"}:::decisions
click LMRA_Already_Done "#lmra_already_done" "2884183025"

Create_Full_LMRA[("➕ <em></em><br/>Create Full LMRA")]:::recordCreates
click Create_Full_LMRA "#create_full_lmra" "3999568703"

Create_Limited_LMRA[("➕ <em></em><br/>Create Limited LMRA")]:::recordCreates
click Create_Limited_LMRA "#create_limited_lmra" "2204160202"

Get_Related_Operational_Account[("🔍 <em></em><br/>Get Related Operational Account")]:::recordLookups
click Get_Related_Operational_Account "#get_related_operational_account" "449706841"

Get_Related_Work_Order[("🔍 <em></em><br/>Get Related Work Order")]:::recordLookups
click Get_Related_Work_Order "#get_related_work_order" "3976601376"

Get_Work_Step_Information[("🔍 <em></em><br/>Get Work Step Information")]:::recordLookups
click Get_Work_Step_Information "#get_work_step_information" "968707648"

Confirmed_LMRA_Done_at_WO_level[("🛠️ <em></em><br/>Confirmed LMRA Done at WO level")]:::recordUpdates
click Confirmed_LMRA_Done_at_WO_level "#confirmed_lmra_done_at_wo_level" "3771151378"

Update_Work_Step_Status_to_Complete[("🛠️ <em></em><br/>Update Work Step Status to Complete")]:::recordUpdates
click Update_Work_Step_Status_to_Complete "#update_work_step_status_to_complete" "1882464419"

Update_Work_Step_Status_to_Complete_After[("🛠️ <em></em><br/>Update Work Step Status to Complete After")]:::recordUpdates
click Update_Work_Step_Status_to_Complete_After "#update_work_step_status_to_complete_after" "247084983"

Full_LMRA_Information(["💻 <em></em><br/>Full LMRA Information"]):::screens
click Full_LMRA_Information "#full_lmra_information" "737905365"

Limited_LMRA_Information(["💻 <em></em><br/>Limited LMRA Information"]):::screens
click Limited_LMRA_Information "#limited_lmra_information" "3519037032"

LMRA_Done_Message(["💻 <em></em><br/>LMRA Done Message"]):::screens
click LMRA_Done_Message "#lmra_done_message" "581062939"

Full_or_Limited_LMRA --> |"Full"| Full_LMRA_Information
Full_or_Limited_LMRA --> |"Limited"| Limited_LMRA_Information
Limited_LMRA_Confirmed --> |"Yes"| Create_Limited_LMRA
Limited_LMRA_Confirmed --> |"No"| Limited_LMRA_Information
LMRA_Already_Done --> |"No"| Full_or_Limited_LMRA
LMRA_Already_Done --> |"Yes"| LMRA_Done_Message
Create_Full_LMRA --> Update_Work_Step_Status_to_Complete_After
Create_Limited_LMRA --> Update_Work_Step_Status_to_Complete_After
Get_Related_Operational_Account --> LMRA_Already_Done
Get_Related_Work_Order --> Get_Related_Operational_Account
Get_Work_Step_Information --> Get_Related_Work_Order
Confirmed_LMRA_Done_at_WO_level --> END_Confirmed_LMRA_Done_at_WO_level
Update_Work_Step_Status_to_Complete --> END_Update_Work_Step_Status_to_Complete
Update_Work_Step_Status_to_Complete_After --> Confirmed_LMRA_Done_at_WO_level
Full_LMRA_Information --> Create_Full_LMRA
Limited_LMRA_Information --> Limited_LMRA_Confirmed
LMRA_Done_Message --> Update_Work_Step_Status_to_Complete
START -->  Get_Work_Step_Information
END_Confirmed_LMRA_Done_at_WO_level(( END )):::endClass
END_Update_Work_Step_Status_to_Complete(( END )):::endClass


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
|Status|Active|
|Environments|Default|
|Interview Label|[Work Order][Mobile Flow][Screen-Flow] Log LMRA Information {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|
|Connector|[Get_Work_Step_Information](#get_work_step_information)|
|Next Node|[Get_Work_Step_Information](#get_work_step_information)|


## Variables

|Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
|:-- |:--:|:--:|:--:|:--:|:--: |
|Id|String|⬜|✅|⬜|<!-- -->|
|RelatedAccount|SObject|⬜|⬜|⬜|Account|
|workOrderRecord|SObject|⬜|✅|⬜|WorkOrder|
|WorkStepRecord|SObject|⬜|✅|⬜|WorkStep|


## Flow Nodes Details

### Full_or_Limited_LMRA

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Decision|
|Label|Full or Limited LMRA ?|
|Default Connector|[Limited_LMRA_Information](#limited_lmra_information)|
|Default Connector Label|Limited|


#### Rule Full_Full_or_Limited_LMRA (Full)

|<!-- -->|<!-- -->|
|:---|:---|
|Connector|[Full_LMRA_Information](#full_lmra_information)|
|Condition Logic|and|




|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|1|RelatedAccount.LMRA_Type__c| Equal To|Full|




### Limited_LMRA_Confirmed

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Decision|
|Label|Limited LMRA Confirmed ?|
|Default Connector|isGoTo: true<br/>targetReference: Limited_LMRA_Information<br/>|
|Default Connector Label|No|


#### Rule Yes (Yes)

|<!-- -->|<!-- -->|
|:---|:---|
|Connector|[Create_Limited_LMRA](#create_limited_lmra)|
|Condition Logic|and|




|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|1|Limited_LMRA_Done| Equal To|✅|




### LMRA_Already_Done

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Decision|
|Label|LMRA Already Done ?|
|Default Connector|[LMRA_Done_Message](#lmra_done_message)|
|Default Connector Label|Yes|


#### Rule No (No)

|<!-- -->|<!-- -->|
|:---|:---|
|Connector|[Full_or_Limited_LMRA](#full_or_limited_lmra)|
|Condition Logic|and|




|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|1|workOrderRecord.LMRA_Done__c| Equal To|⬜|




### Create_Full_LMRA

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Create|
|Object|LMRA__c|
|Label|Create Full LMRA|
|Connector|[Update_Work_Step_Status_to_Complete_After](#update_work_step_status_to_complete_after)|


#### Input Assignments

|Field|Value|
|:-- |:--: |
|Corrective_Measures__c|Corrective_Measures_1|
|EPC_EPI_CBM_PBM__c|EPC_EPI_CBM_PBM_1|
|LMRA_Type__c|Full|
|Project_Lead__c|Project_Lead_Full|
|Surrounding_Risks__c|Surrounding_Risks_1|
|Tasks_of_the_Day__c|Tasks_of_the_Day_1|
|Work_Order__c|workOrderRecord.Id|




### Create_Limited_LMRA

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Create|
|Object|LMRA__c|
|Label|Create Limited LMRA|
|Connector|[Update_Work_Step_Status_to_Complete_After](#update_work_step_status_to_complete_after)|


#### Input Assignments

|Field|Value|
|:-- |:--: |
|LMRA_Type__c|Limited|
|Limited_LMRA_Done__c|Limited_LMRA_Done|
|Work_Order__c|workOrderRecord.Id|




### Get_Related_Operational_Account

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|Account|
|Label|Get Related Operational Account|
|Assign Null Values If No Records Found|⬜|
|Output Reference|RelatedAccount|
|Queried Fields|- Id<br/>- LMRA_Type__c<br/>|
|Connector|[LMRA_Already_Done](#lmra_already_done)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Id| Equal To|workOrderRecord.AccountId|




### Get_Related_Work_Order

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|WorkOrder|
|Label|Get Related Work Order|
|Assign Null Values If No Records Found|⬜|
|Output Reference|workOrderRecord|
|Queried Fields|- Id<br/>- WorkOrderNumber<br/>- LMRA__c<br/>- LMRA_Done__c<br/>- AccountId<br/>|
|Connector|[Get_Related_Operational_Account](#get_related_operational_account)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Id| Equal To|WorkStepRecord.WorkOrderId|




### Get_Work_Step_Information

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|WorkStep|
|Label|Get Work Step Information|
|Assign Null Values If No Records Found|⬜|
|Output Reference|WorkStepRecord|
|Queried Fields|- Id<br/>- WorkOrderId<br/>- Status<br/>|
|Connector|[Get_Related_Work_Order](#get_related_work_order)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Id| Equal To|Id|




### Confirmed_LMRA_Done_at_WO_level

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Update|
|Object|WorkOrder|
|Label|Confirmed LMRA Done at WO level|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Id| Equal To|workOrderRecord.Id|




#### Input Assignments

|Field|Value|
|:-- |:--: |
|LMRA_Done__c|✅|




### Update_Work_Step_Status_to_Complete

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Update|
|Object|WorkStep|
|Label|Update Work Step Status to Complete|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Id| Equal To|WorkStepRecord.Id|




#### Input Assignments

|Field|Value|
|:-- |:--: |
|Status|Completed|




### Update_Work_Step_Status_to_Complete_After

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Update|
|Object|WorkStep|
|Label|Update Work Step Status to Complete After|
|Connector|[Confirmed_LMRA_Done_at_WO_level](#confirmed_lmra_done_at_wo_level)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Id| Equal To|WorkStepRecord.Id|




#### Input Assignments

|Field|Value|
|:-- |:--: |
|Status|Completed|




### Full_LMRA_Information

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Screen|
|Label|Full LMRA Information|
|Allow Back|⬜|
|Allow Finish|✅|
|Allow Pause|⬜|
|Show Footer|✅|
|Show Header|⬜|
|Connector|[Create_Full_LMRA](#create_full_lmra)|


#### Work_Order_Full

|<!-- -->|<!-- -->|
|:---|:---|
|Data Type|String|
|Default Value|workOrderRecord.WorkOrderNumber|
|Field Text|Work Order|
|Field Type| Input Field|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Disabled|true|
|Is Read Only|true|
|Is Required|⬜|




#### Project_Lead_Full

|<!-- -->|<!-- -->|
|:---|:---|
|Data Type|String|
|Field Text|Project Lead|
|Field Type| Input Field|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|✅|




#### Tasks_of_the_Day_1

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|Tasks of the Day|
|Field Type| Large Text Area|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|✅|




#### Surrounding_Risks_1

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|Surrounding Risks|
|Field Type| Large Text Area|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|✅|




#### Corrective_Measures_1

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|Corrective Measures|
|Field Type| Large Text Area|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|✅|




#### EPC_EPI_CBM_PBM_1

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|EPC - EPI/CBM - PBM|
|Field Type| Large Text Area|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|✅|




#### FileUpload

|<!-- -->|<!-- -->|
|:---|:---|
|Extension Name|forceContent:fileUpload|
|Field Type| Component Instance|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|✅|
|Label (input)|Attach Photos|
|Multiple (input)|✅|
|Record Id (input)|WorkStepRecord.Id|




### Limited_LMRA_Information

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Screen|
|Label|Limited LMRA Information|
|Allow Back|⬜|
|Allow Finish|✅|
|Allow Pause|⬜|
|Show Footer|✅|
|Show Header|⬜|
|Connector|[Limited_LMRA_Confirmed](#limited_lmra_confirmed)|


#### LmitedLMRAMessage

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|<p><strong style="font-size: 14px; color: rgb(11, 11, 11);">Don't forget your LMRA, avoid accidents!</strong></p>|
|Field Type| Display Text|




#### Limited_LMRA_Done

|<!-- -->|<!-- -->|
|:---|:---|
|Data Type|Boolean|
|Field Text|Limited LMRA Done|
|Field Type| Input Field|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|✅|




#### confirmedLMRA

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|<p><em>To confirm that a limited LMRA has been done, please tick the box.</em></p>|
|Field Type| Display Text|




### LMRA_Done_Message

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Screen|
|Label|LMRA Done Message|
|Allow Back|⬜|
|Allow Finish|✅|
|Allow Pause|⬜|
|Next Or Finish Button Label|Close|
|Show Footer|✅|
|Show Header|⬜|
|Connector|[Update_Work_Step_Status_to_Complete](#update_work_step_status_to_complete)|


#### LMRADoneMessage

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|<p>LMRA already done for this work order at this location. You can continue with your tasks.&nbsp;</p>|
|Field Type| Display Text|








___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_