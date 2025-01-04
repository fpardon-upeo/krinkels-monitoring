# [Work Order][Mobile Flow][Screen-Flow] Log LMRA Information

## Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["<b>START</b>"]):::startClassChanged


click START "#general-information" "459049158"



Full_or_Limited_LMRA{"<b>🔀 <em></em><br/>Full or Limited LMRA ?</b>"}:::decisionsAdded
click Full_or_Limited_LMRA "#full_or_limited_lmra" "1047146990"

LMRA_Already_Done{"<b>🔀 <em></em><br/>LMRA Already Done ?</b>"}:::decisionsAdded
click LMRA_Already_Done "#lmra_already_done" "2884183025"

Create_Full_LMRA[("<b>➕ <em></em><br/>Create Full LMRA</b>")]:::recordCreatesAdded
click Create_Full_LMRA "#create_full_lmra" "4175645033"

Create_Limited_LMRA[("<b>➕ <em></em><br/>Create Limited LMRA</b>")]:::recordCreatesAdded
click Create_Limited_LMRA "#create_limited_lmra" "69133525"


Get_Related_Work_Order[("<b>🔍 <em></em><br/>Get Related Work Order</b>")]:::recordLookupsChanged


click Get_Related_Work_Order "#get_related_work_order" "710350311"



Equipment_Information(["<i>💻 <em></em><br/>Equipment Information</i>"]):::screensRemoved
click Equipment_Information "#equipment_information" "2163154206"

Get_Work_Step_Information[("<b>🔍 <em></em><br/>Get Work Step Information</b>")]:::recordLookupsAdded
click Get_Work_Step_Information "#get_work_step_information" "1637338462"



LMRA_Information(["<i>💻 <em></em><br/>LMRA Information</i>"]):::screensRemoved
click LMRA_Information "#lmra_information" "245551225"

Confirmed_LMRA_Done_at_WO_level[("<b>🛠️ <em></em><br/>Confirmed LMRA Done at WO level</b>")]:::recordUpdatesAdded
click Confirmed_LMRA_Done_at_WO_level "#confirmed_lmra_done_at_wo_level" "3771151378"



Risk_Information(["<i>💻 <em></em><br/>Risk Information</i>"]):::screensRemoved
click Risk_Information "#risk_information" "4290839850"

Full_LMRA_Information(["<b>💻 <em></em><br/>Full LMRA Information</b>"]):::screensAdded
click Full_LMRA_Information "#full_lmra_information" "2192336012"



Task_Information(["<i>💻 <em></em><br/>Task Information</i>"]):::screensRemoved
click Task_Information "#task_information" "578828805"

Full_LMRA_Information_Part_Two(["<b>💻 <em></em><br/>Full LMRA Information - Part Two</b>"]):::screensAdded
click Full_LMRA_Information_Part_Two "#full_lmra_information_part_two" "4241642172"



Get_Related_Work_Order -.-> LMRA_Information
Equipment_Information -.-> END_Equipment_Information
LMRA_Information -.-> Task_Information
Risk_Information -.-> Equipment_Information
Task_Information -.-> Risk_Information
START -.->  Get_Related_Work_Order
END_Equipment_Information(( END )):::endClassRemoved

Limited_LMRA_Information(["<b>💻 <em></em><br/>Limited LMRA Information</b>"]):::screensAdded
click Limited_LMRA_Information "#limited_lmra_information" "1254657940"



LMRA_Done_Message(["<b>💻 <em></em><br/>LMRA Done Message</b>"]):::screensAdded
click LMRA_Done_Message "#lmra_done_message" "4218021228"



Full_or_Limited_LMRA ==> |"🟩<b>Full</b>"| Full_LMRA_Information
Full_or_Limited_LMRA ==> |"🟩<b>Limited</b>"| Limited_LMRA_Information
LMRA_Already_Done ==> |"🟩<b>No</b>"| Full_or_Limited_LMRA
LMRA_Already_Done ==> |"🟩<b>Yes</b>"| LMRA_Done_Message
Create_Full_LMRA ==> Confirmed_LMRA_Done_at_WO_level
Create_Limited_LMRA ==> Confirmed_LMRA_Done_at_WO_level
Get_Related_Work_Order ==> LMRA_Already_Done
Get_Work_Step_Information ==> Get_Related_Work_Order
Confirmed_LMRA_Done_at_WO_level ==> END_Confirmed_LMRA_Done_at_WO_level
Full_LMRA_Information ==> Full_LMRA_Information_Part_Two
Full_LMRA_Information_Part_Two ==> Create_Full_LMRA
Limited_LMRA_Information ==> Create_Limited_LMRA
LMRA_Done_Message ==> END_LMRA_Done_Message
START ==>  Get_Work_Step_Information
END_Confirmed_LMRA_Done_at_WO_level(( END )):::endClassAdded
END_LMRA_Done_Message(( END )):::endClassAdded



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



classDef actionCallsAdded fill:green,color:white,stroke-width:4px,max-height:100px
classDef assignmentsAdded fill:green,color:white,stroke-width:4px,max-height:100px
classDef collectionProcessorsAdded fill:green,color:white,stroke-width:4px,max-height:100px
classDef customErrorsAdded fill:green,color:white,stroke-width:4px,max-height:100px
classDef decisionsAdded fill:green,color:white,stroke-width:4px,max-height:100px
classDef loopsAdded fill:green,color:white,stroke-width:4px,max-height:100px
classDef recordCreatesAdded fill:green,color:white,stroke-width:4px,max-height:100px
classDef recordDeletesAdded fill:green,color:white,stroke-width:4px,max-height:100px
classDef recordLookupsAdded fill:green,color:white,stroke-width:4px,max-height:100px
classDef recordUpdatesAdded fill:green,color:white,stroke-width:4px,max-height:100px
classDef screensAdded fill:green,color:white,stroke-width:4px,max-height:100px
classDef subflowsAdded fill:green,color:white,stroke-width:4px,max-height:100px
classDef startClassAdded fill:green,color:white,stroke-width:4px,max-height:100px

classDef actionCallsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
classDef assignmentsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
classDef collectionProcessorsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
classDef customErrorsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
classDef decisionsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
classDef loopsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
classDef recordCreatesRemoved fill:red,color:white,stroke-width:4px,max-height:100px
classDef recordDeletesRemoved fill:red,color:white,stroke-width:4px,max-height:100px
classDef recordLookupsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
classDef recordUpdatesRemoved fill:red,color:white,stroke-width:4px,max-height:100px
classDef screensRemoved fill:red,color:white,stroke-width:4px,max-height:100px
classDef subflowsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
classDef startClassRemoved fill:red,color:white,stroke-width:4px,max-height:100px

classDef actionCallsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
classDef assignmentsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
classDef collectionProcessorsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
classDef customErrorsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
classDef decisionsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
classDef loopsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
classDef recordCreatesChanged fill:orange,color:white,stroke-width:4px,max-height:100px
classDef recordDeletesChanged fill:orange,color:white,stroke-width:4px,max-height:100px
classDef recordLookupsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
classDef recordUpdatesChanged fill:orange,color:white,stroke-width:4px,max-height:100px
classDef screensChanged fill:orange,color:white,stroke-width:4px,max-height:100px
classDef subflowsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
classDef startClassChanged fill:orange,color:white,stroke-width:4px,max-height:100px
  
linkStyle 6,7,8,9,10,11,12,13,14,15,16,17,18,19 stroke:#00ff00,stroke-width:4px,color:green;
linkStyle 0,1,2,3,4,5 stroke:#ff0000,stroke-width:4px,color:red;
```

## General Information

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⚠️ Draft</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Active</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Related_Work_Order](#get_related_work_order)</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Next Node</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Related_Work_Order](#get_related_work_order)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Work_Step_Information](#get_work_step_information)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Next Node</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Work_Step_Information](#get_work_step_information)</b></span>|

## Variables

|Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
|:-- |:--:|:--:|:--:|:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStep</b></span>|

## Flow Nodes Details


### 🟩Full_or_Limited_LMRA

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Full or Limited LMRA ?</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Limited_LMRA_Information](#limited_lmra_information)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Limited</b></span>|

#### 🟩Rule Full_Full_or_Limited_LMRA (Full)

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Full_LMRA_Information](#full_lmra_information)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|

|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>workOrderRecord.LMRA__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Full</b></span>|

### 🟩LMRA_Already_Done

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LMRA Already Done ?</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[LMRA_Done_Message](#lmra_done_message)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Yes</b></span>|

#### 🟩Rule No (No)

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Full_or_Limited_LMRA](#full_or_limited_lmra)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|

|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>workOrderRecord.LMRA_Done__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|

### 🟩Create_Full_LMRA

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Create</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LMRA__c</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Create Full LMRA</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Confirmed_LMRA_Done_at_WO_level](#confirmed_lmra_done_at_wo_level)</b></span>|

#### 🟩Input Assignments

|Field|Value|
|:-- |:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>Corrective_Measures__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Corrective_Measures</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Date__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Date_Full</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>EPC_EPI_CBM_PBM__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EPC_EPI_CBM_PBM</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>LMRA_Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Full</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Project_Lead__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Project_Lead_Full</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Surrounding_Risks__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Surrounding_Risks</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Tasks_of_the_Day__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Tasks_of_the_Day</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Work_Order__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>workOrderRecord.Id</b></span>|

### 🟩Create_Limited_LMRA

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Create</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LMRA__c</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Create Limited LMRA</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Confirmed_LMRA_Done_at_WO_level](#confirmed_lmra_done_at_wo_level)</b></span>|

#### 🟩Input Assignments

|Field|Value|
|:-- |:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>Date__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Date_Lmited</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>LMRA_Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Limited</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Project_Lead__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Project_Lead</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Work_Order__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>workOrderRecord.Id</b></span>|

### Get_Related_Work_Order

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Queried Fields</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>- Id<br/>- WorkOrderNumber<br/></i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[LMRA_Information](#lmra_information)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Id<br/>- WorkOrderNumber<br/>- LMRA__c<br/>- LMRA_Done__c<br/></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[LMRA_Already_Done](#lmra_already_done)</b></span>|

#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Id</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Id</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord.WorkOrderId</b></span>|

### 🟥Equipment_Information

### 🟩Get_Work_Step_Information


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Screen</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Equipment Information</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Back</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Finish</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Pause</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Show Footer</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Show Header</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStep</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Work Step Information</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Output Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Id<br/>- WorkOrderId<br/></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Related_Work_Order](#get_related_work_order)</b></span>|

#### 🟥EPC_EPI_CBM_PBM

#### 🟩Filters (logic: **and**)



|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|

### 🟩Confirmed_LMRA_Done_at_WO_level


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>EPC - EPI/CBM - PBM</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Large Text Area</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Inputs On Next Nav To Assoc Scrn</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Use Stored Values</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Update</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrder</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Confirmed LMRA Done at WO level</b></span>|

#### 🟩Filters (logic: **and**)



|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>workOrderRecord.Id</b></span>|

### 🟥LMRA_Information





#### 🟩Input Assignments

|Field|Value|
|:-- |:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>LMRA_Done__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|

### 🟩Full_LMRA_Information


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>LMRA Information</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Full LMRA Information</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Task_Information](#task_information)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Full_LMRA_Information_Part_Two](#full_lmra_information_part_two)</b></span>|

#### 🟥Work_Order_Number

#### 🟩FullLMRATitle


|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p><strong>Full LMRA</strong></p></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|

#### 🟩Work_Order_Full

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Work Order Number</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Work Order</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Read Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>true</b></span>|

#### 🟥Date

#### 🟩Date_Full


#### 🟥LMRA_Type

#### 🟩Project_Lead_Full


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Choice References</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>- Limited<br/>- Full<br/></i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>LMRA Type</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Dropdown Box</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Project Lead</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Input Field</b></span>|

### 🟥Risk_Information

### 🟩Full_LMRA_Information_Part_Two


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Risk Information</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Back</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Full LMRA Information - Part Two</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Back</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Equipment_Information](#equipment_information)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Create_Full_LMRA](#create_full_lmra)</b></span>|

#### 🟥Surrounding_Risks

#### 🟩FullLMRATitleTwo


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Surrounding Risks</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p><strong>Full LMRA</strong></p></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|

#### 🟩Tasks_of_the_Day

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Tasks of the Day</b></span>|

#### 🟥SurroundRisksPhoto

#### 🟩Surrounding_Risks


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Extension Name</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>forceContent:fileUpload</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Component Instance</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Surrounding Risks</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Large Text Area</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Record Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>workOrderRecord.Id</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Label (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Surrounding Risks Photo</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|

#### 🟥CorrectiveMeasuresPhoto

#### 🟩EPC_EPI_CBM_PBM


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Extension Name</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>forceContent:fileUpload</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Component Instance</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EPC - EPI/CBM - PBM</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Large Text Area</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Label (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Corrective Measures Photo</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Record Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>workOrderRecord.Id</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|

### 🟥Task_Information

### 🟩Limited_LMRA_Information


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Task Information</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Back</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Limited LMRA Information</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Back</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Risk_Information](#risk_information)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Create_Limited_LMRA](#create_limited_lmra)</b></span>|

#### 🟥Tasks_of_the_Day

#### 🟩LimitedLMRATitle


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Tasks of the Day</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Large Text Area</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p><strong>Limited LMRA</strong></p></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|

#### 🟩LmitedLMRAMessage

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p><strong style="color: rgb(231, 24, 24); font-size: 14px;">Don't forget your LMRA, avoid accidents!</strong></p></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|

#### 🟩Work_Order

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Default Value</b></span>|<span style="background-color: #a6e22e; color: black;"><b>workOrderRecord.WorkOrderNumber</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Work Order</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Input Field</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Disabled</b></span>|<span style="background-color: #a6e22e; color: black;"><b>true</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Read Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>true</b></span>|

#### 🟩Date_Lmited



|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Date</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Date</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Input Field</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|

#### 🟩Project_Lead

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Project Lead</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Input Field</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|

### 🟩LMRA_Done_Message

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Screen</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LMRA Done Message</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Back</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Finish</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Pause</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Next Or Finish Button Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Close</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Show Footer</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Show Header</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|

#### 🟩LMRADoneMessage

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p>LMRA already done for this work order at this location. You can continue with your tasks.&nbsp;</p></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|

___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_