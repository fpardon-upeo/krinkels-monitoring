# [Work Order][After-Save][Record-Triggered] Delete Work Steps

## Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
click START "#general-information" "3151913961"

Set_Check_Out_Original_Order[\"🟰 <em></em><br/>Set Check Out Original Order"/]:::assignments
click Set_Check_Out_Original_Order "#set_check_out_original_order" "1579729643"

Set_Take_After_Work_Photos_Original_Order[\"🟰 <em></em><br/>Set Take After Work Photos Original Order"/]:::assignments
click Set_Take_After_Work_Photos_Original_Order "#set_take_after_work_photos_original_order" "3544116068"

Which_Work_Step{"🔀 <em></em><br/>Which Work Step ?"}:::decisions
click Which_Work_Step "#which_work_step" "2788234871"

Loop{{"🔁 <em></em><br/>Loop"}}:::loops
click Loop "#loop" "2988518701"

Delete_Work_Steps[("🗑️ <em></em><br/>Delete Work Steps")]:::recordDeletes
click Delete_Work_Steps "#delete_work_steps" "1446951536"

Get_Checkout_Take_After_Photos_Work_steps[("🔍 <em></em><br/>Get Checkout & Take After Photos Work steps")]:::recordLookups
click Get_Checkout_Take_After_Photos_Work_steps "#get_checkout_take_after_photos_work_steps" "3757441661"

Get_Work_Steps_Added_from_WOL[("🔍 <em></em><br/>Get Work Steps Added from WOL")]:::recordLookups
click Get_Work_Steps_Added_from_WOL "#get_work_steps_added_from_wol" "2287265600"

Update_Work_Steps_Order[("🛠️ <em></em><br/>Update Work Steps Order")]:::recordUpdates
click Update_Work_Steps_Order "#update_work_steps_order" "2787149501"

Set_Check_Out_Original_Order --> Loop
Set_Take_After_Work_Photos_Original_Order --> Loop
Which_Work_Step --> |"Checkout"| Set_Check_Out_Original_Order
Which_Work_Step --> |"Take After Work Photos"| Set_Take_After_Work_Photos_Original_Order
Loop --> |"For Each"|Which_Work_Step
Loop ---> |"After Last"|Update_Work_Steps_Order
Delete_Work_Steps --> Get_Checkout_Take_After_Photos_Work_steps
Get_Checkout_Take_After_Photos_Work_steps --> Loop
Get_Work_Steps_Added_from_WOL --> Delete_Work_Steps
Update_Work_Steps_Order --> END_Update_Work_Steps_Order
START -->  Get_Work_Steps_Added_from_WOL
END_Update_Work_Steps_Order(( END )):::endClass


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
|Label|[Work Order][After-Save][Record-Triggered] Delete Work Steps|
|Status|Active|
|Filter Formula|TEXT({!$Record__Prior.Status}) = "Dispatched" && <br/>(TEXT({!$Record.Status}) = "Unscheduled" || TEXT({!$Record.Status}) = "Scheduled")|
|Description|This flow deletes the work steps when the work order status changes from 'Dispatched' to either 'Unscheduled' or 'Scheduled'.|
|Environments|Default|
|Interview Label|[Work Order][After-Save][Record-Triggered] Delete Work Steps {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|
|Connector|[Get_Work_Steps_Added_from_WOL](#get_work_steps_added_from_wol)|
|Next Node|[Get_Work_Steps_Added_from_WOL](#get_work_steps_added_from_wol)|


## Variables

|Name|Data Type|Is Collection|Is Input|Is Output|Object Type|Description|
|:-- |:--:|:--:|:--:|:--:|:--:|:--  |
|WorkStepCollection|SObject|✅|✅|⬜|WorkStep|<!-- -->|
|WorkStepRecord|SObject|⬜|✅|⬜|WorkStep|<!-- -->|


## Flow Nodes Details

### Set_Check_Out_Original_Order

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Assignment|
|Label|Set Check Out Original Order|
|Connector|[Loop](#loop)|


#### Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|WorkStepRecord.Id| Assign|Loop.Id|
|WorkStepRecord.ExecutionOrder| Assign|21|
|WorkStepCollection| Add|WorkStepRecord|




### Set_Take_After_Work_Photos_Original_Order

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Assignment|
|Label|Set Take After Work Photos Original Order|
|Connector|[Loop](#loop)|


#### Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|WorkStepRecord.Id| Assign|Loop.Id|
|WorkStepRecord.ExecutionOrder| Assign|20|
|WorkStepCollection| Add|WorkStepRecord|




### Which_Work_Step

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Decision|
|Label|Which Work Step ?|
|Default Connector|[Set_Take_After_Work_Photos_Original_Order](#set_take_after_work_photos_original_order)|
|Default Connector Label|Take After Work Photos|


#### Rule Checkout (Checkout)

|<!-- -->|<!-- -->|
|:---|:---|
|Connector|[Set_Check_Out_Original_Order](#set_check_out_original_order)|
|Condition Logic|and|




|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|1|Loop.Name| Equal To|Check Out|




### Loop

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Loop|
|Label|[Loop](#loop)|
|Collection Reference|[Get_Checkout_Take_After_Photos_Work_steps](#get_checkout_take_after_photos_work_steps)|
|Iteration Order|Asc|
|Next Value Connector|[Which_Work_Step](#which_work_step)|
|No More Values Connector|[Update_Work_Steps_Order](#update_work_steps_order)|


### Delete_Work_Steps

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Delete|
|Label|Delete Work Steps|
|Input Reference|[Get_Work_Steps_Added_from_WOL](#get_work_steps_added_from_wol)|
|Connector|[Get_Checkout_Take_After_Photos_Work_steps](#get_checkout_take_after_photos_work_steps)|


### Get_Checkout_Take_After_Photos_Work_steps

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|WorkStep|
|Label|Get Checkout & Take After Photos Work steps|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|⬜|
|Store Output Automatically|✅|
|Connector|[Loop](#loop)|


#### Filters (logic: **1 AND (2 OR 3)**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|WorkOrderId| Equal To|$Record.Id|
|2|Name| Equal To|Take After Work Photos|
|3|Name| Equal To|Check Out|




### Get_Work_Steps_Added_from_WOL

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|WorkStep|
|Label|Get Work Steps Added from WOL|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|⬜|
|Store Output Automatically|✅|
|Connector|[Delete_Work_Steps](#delete_work_steps)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|WorkOrderId| Equal To|$Record.Id|
|2|Added_from_WOL__c| Equal To|✅|




### Update_Work_Steps_Order

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Update|
|Label|Update Work Steps Order|
|Input Reference|WorkStepCollection|






___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_