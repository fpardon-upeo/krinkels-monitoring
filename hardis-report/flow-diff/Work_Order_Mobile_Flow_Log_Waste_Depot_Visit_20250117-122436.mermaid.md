<span style="background-color: #a6e22e; color: black;"><b>🟩# [Work Order][Mobile Flow] Log Waste Depot Visit</b></span>

## 🟩Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["<b>START</b>"]):::startClassAdded
click START "#general-information" "233366232"

Set_WorkStep_Status[\"<b>🟰 <em></em><br/>Set WorkStep Status</b>"/]:::assignmentsAdded
click Set_WorkStep_Status "#set_workstep_status" "157142891"

Get_Work_Order_Information[("<b>🔍 <em></em><br/>Get Work Order Information</b>")]:::recordLookupsAdded
click Get_Work_Order_Information "#get_work_order_information" "1656706463"

Get_Work_Step_Information[("<b>🔍 <em></em><br/>Get Work Step Information</b>")]:::recordLookupsAdded
click Get_Work_Step_Information "#get_work_step_information" "2718793161"

Marked_Waste_Depot_Visit_as_Done[("<b>🛠️ <em></em><br/>Marked Waste Depot Visit as Done</b>")]:::recordUpdatesAdded
click Marked_Waste_Depot_Visit_as_Done "#marked_waste_depot_visit_as_done" "1580016462"

Update_Work_Step[("<b>🛠️ <em></em><br/>Update Work Step</b>")]:::recordUpdatesAdded
click Update_Work_Step "#update_work_step" "566050632"

Attach_receipt(["<b>💻 <em></em><br/>Attach receipt</b>"]):::screensAdded
click Attach_receipt "#attach_receipt" "3224878217"

Set_WorkStep_Status ==> Update_Work_Step
Get_Work_Order_Information ==> Attach_receipt
Get_Work_Step_Information ==> Get_Work_Order_Information
Marked_Waste_Depot_Visit_as_Done ==> Set_WorkStep_Status
Update_Work_Step ==> END_Update_Work_Step
Attach_receipt ==> Marked_Waste_Depot_Visit_as_Done
START ==>  Get_Work_Step_Information
END_Update_Work_Step(( END )):::endClassAdded


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



classDef actionCallsAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef assignmentsAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef collectionProcessorsAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef customErrorsAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef decisionsAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef loopsAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordCreatesAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordDeletesAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordLookupsAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordUpdatesAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef screensAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef subflowsAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef startClassAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px

classDef actionCallsRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef assignmentsRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef collectionProcessorsRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef customErrorsRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef decisionsRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef loopsRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordCreatesRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordDeletesRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordLookupsRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordUpdatesRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef screensRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef subflowsRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef startClassRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px

classDef actionCallsChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef assignmentsChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef collectionProcessorsChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef customErrorsChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef decisionsChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef loopsChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordCreatesChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordDeletesChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordLookupsChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordUpdatesChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef screensChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef subflowsChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef startClassChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
  
linkStyle 0,1,2,3,4,5,6 stroke:#00ff00,stroke-width:4px,color:green;
```

<span style="background-color: #a6e22e; color: black;"><b>🟩<!-- Flow description --></b></span>

## 🟩General Information

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Process Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Field Service Mobile</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Work Order][Mobile Flow] Log Waste Depot Visit</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Active</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Description</b></span>|<span style="background-color: #a6e22e; color: black;"><b>This flow allows the operator to log a waste depot visit</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Environments</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Default</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Interview Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Work Order][Mobile Flow] Log Waste Depot Visit {!$Flow.CurrentDateTime}</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b> Builder Type (PM)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LightningFlowBuilder</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b> Canvas Mode (PM)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>AUTO_LAYOUT_CANVAS</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b> Origin Builder Type (PM)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LightningFlowBuilder</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Work_Step_Information](#get_work_step_information)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Next Node</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Work_Step_Information](#get_work_step_information)</b></span>|


## 🟩Variables

|🟩<span style="background-color: #a6e22e; color: black;"><b>Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Is Collection</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Is Input</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Is Output</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Object Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Description</b></span>|
|:-- |:--:|:--:|:--:|:--:|:--:|:--  |
|🟩<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>WorkOrderRecord</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrder</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStep</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|


## 🟩Flow Nodes Details

### 🟩Set_WorkStep_Status

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Assignment</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Set WorkStep Status</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_Work_Step](#update_work_step)</b></span>|


#### 🟩Assignments

|🟩<span style="background-color: #a6e22e; color: black;"><b>Assign To Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord.Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Completed</b></span>|




### 🟩Get_Work_Order_Information

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrder</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Work Order Information</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Output Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderRecord</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Attach_receipt](#attach_receipt)</b></span>|


#### 🟩Filters (logic: **and**)

|🟩<span style="background-color: #a6e22e; color: black;"><b>Filter Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord.WorkOrderId</b></span>|




### 🟩Get_Work_Step_Information

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStep</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Work Step Information</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Output Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Id<br/>- WorkOrderId<br/></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Work_Order_Information](#get_work_order_information)</b></span>|


#### 🟩Filters (logic: **and**)

|🟩<span style="background-color: #a6e22e; color: black;"><b>Filter Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|




### 🟩Marked_Waste_Depot_Visit_as_Done

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Update</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrder</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Marked Waste Depot Visit as Done</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Set_WorkStep_Status](#set_workstep_status)</b></span>|


#### 🟩Filters (logic: **and**)

|🟩<span style="background-color: #a6e22e; color: black;"><b>Filter Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderRecord.Id</b></span>|




#### 🟩Input Assignments

|🟩<span style="background-color: #a6e22e; color: black;"><b>Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>Waste_Visit_Done__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|




### 🟩Update_Work_Step

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Update</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Update Work Step</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Input Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord</b></span>|


### 🟩Attach_receipt

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Screen</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Attach receipt</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Back</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Finish</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Pause</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Show Footer</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Show Header</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Marked_Waste_Depot_Visit_as_Done](#marked_waste_depot_visit_as_done)</b></span>|


#### 🟩FileUpload

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Extension Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>forceContent:fileUpload</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Component Instance</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>If nessary, attach a receipt.</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Multiple (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Record Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderRecord.Id</b></span>|








___

<span style="background-color: #a6e22e; color: black;"><b>🟩_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_</b></span>