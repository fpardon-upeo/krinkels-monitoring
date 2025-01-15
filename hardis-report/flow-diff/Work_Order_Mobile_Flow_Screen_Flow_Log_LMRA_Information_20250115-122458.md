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
click Full_or_Limited_LMRA "#full_or_limited_lmra" "1047146990"


Limited_LMRA_Confirmed{"<b>🔀 <em></em><br/>Limited LMRA Confirmed ?</b>"}:::decisionsAdded
click Limited_LMRA_Confirmed "#limited_lmra_confirmed" "2857364459"


LMRA_Already_Done{"🔀 <em></em><br/>LMRA Already Done ?"}:::decisions
click LMRA_Already_Done "#lmra_already_done" "2884183025"

Create_Full_LMRA[("<b>➕ <em></em><br/>Create Full LMRA</b>")]:::recordCreatesChanged


click Create_Full_LMRA "#create_full_lmra" "3896107074"


Create_Limited_LMRA[("<b>➕ <em></em><br/>Create Limited LMRA</b>")]:::recordCreatesChanged


click Create_Limited_LMRA "#create_limited_lmra" "2999553559"


Get_Related_Work_Order[("🔍 <em></em><br/>Get Related Work Order")]:::recordLookups
click Get_Related_Work_Order "#get_related_work_order" "710350311"

Get_Work_Step_Information[("🔍 <em></em><br/>Get Work Step Information")]:::recordLookups
click Get_Work_Step_Information "#get_work_step_information" "968707648"

Confirmed_LMRA_Done_at_WO_level[("🛠️ <em></em><br/>Confirmed LMRA Done at WO level")]:::recordUpdates
click Confirmed_LMRA_Done_at_WO_level "#confirmed_lmra_done_at_wo_level" "3771151378"

Update_Work_Step_Status_to_Complete[("🛠️ <em></em><br/>Update Work Step Status to Complete")]:::recordUpdates
click Update_Work_Step_Status_to_Complete "#update_work_step_status_to_complete" "1882464419"

Full_LMRA_Information(["<b>💻 <em></em><br/>Full LMRA Information</b>"]):::screensChanged


click Full_LMRA_Information "#full_lmra_information" "1170505404"



Full_LMRA_Information_Part_Two(["<i>💻 <em></em><br/>Full LMRA Information - Part Two</i>"]):::screensRemoved
click Full_LMRA_Information_Part_Two "#full_lmra_information_part_two" "4241642172"


Limited_LMRA_Information(["<b>💻 <em></em><br/>Limited LMRA Information</b>"]):::screensChanged


click Limited_LMRA_Information "#limited_lmra_information" "3519037032"


LMRA_Done_Message(["💻 <em></em><br/>LMRA Done Message"]):::screens
click LMRA_Done_Message "#lmra_done_message" "581062939"

Full_or_Limited_LMRA --> |"Full"| Full_LMRA_Information
Full_or_Limited_LMRA --> |"Limited"| Limited_LMRA_Information

Limited_LMRA_Confirmed ==> |"🟩<b>Yes</b>"| Create_Limited_LMRA
Limited_LMRA_Confirmed ==> |"🟩<b>No</b>"| Limited_LMRA_Information

LMRA_Already_Done --> |"No"| Full_or_Limited_LMRA
LMRA_Already_Done --> |"Yes"| LMRA_Done_Message
Create_Full_LMRA --> Confirmed_LMRA_Done_at_WO_level
Create_Limited_LMRA --> Confirmed_LMRA_Done_at_WO_level
Get_Related_Work_Order --> LMRA_Already_Done
Get_Work_Step_Information --> Get_Related_Work_Order
Confirmed_LMRA_Done_at_WO_level --> END_Confirmed_LMRA_Done_at_WO_level
Update_Work_Step_Status_to_Complete --> END_Update_Work_Step_Status_to_Complete

Full_LMRA_Information -.-> Full_LMRA_Information_Part_Two
Full_LMRA_Information_Part_Two -.-> Create_Full_LMRA
Limited_LMRA_Information -.-> Create_Limited_LMRA

Full_LMRA_Information ==> Create_Full_LMRA
Limited_LMRA_Information ==> Limited_LMRA_Confirmed

LMRA_Done_Message --> Update_Work_Step_Status_to_Complete
START -->  Get_Work_Step_Information
END_Confirmed_LMRA_Done_at_WO_level(( END )):::endClass
END_Update_Work_Step_Status_to_Complete(( END )):::endClass


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
  
linkStyle 2,3,15,16 stroke:#00ff00,stroke-width:4px,color:green;
linkStyle 12,13,14 stroke:#ff0000,stroke-width:4px,color:red;
```

<!-- Flow description -->

## Flow Nodes Details

### 🟩Limited_LMRA_Confirmed

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Limited LMRA Confirmed ?</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>isGoTo: true<br/>targetReference: Limited_LMRA_Information<br/></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>No</b></span>|

#### 🟩Rule Yes (Yes)

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Create_Limited_LMRA](#create_limited_lmra)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|

|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Limited_LMRA_Done</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|

### Create_Full_LMRA

#### Input Assignments

|Field|Value|
|:-- |:--: |
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Corrective_Measures__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Corrective_Measures</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Date__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Date_Full</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>EPC_EPI_CBM_PBM__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>EPC_EPI_CBM_PBM</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Corrective_Measures__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Corrective_Measures_1</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>EPC_EPI_CBM_PBM__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EPC_EPI_CBM_PBM_1</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Surrounding_Risks__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Surrounding_Risks</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Tasks_of_the_Day__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Tasks_of_the_Day</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Surrounding_Risks__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Surrounding_Risks_1</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Tasks_of_the_Day__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Tasks_of_the_Day_1</b></span>|

### Create_Limited_LMRA

#### Input Assignments

|Field|Value|
|:-- |:--: |
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Date__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Date_Lmited</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Project_Lead__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Project_Lead</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Limited_LMRA_Done__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Limited_LMRA_Done</b></span>|

### Full_LMRA_Information

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Full_LMRA_Information_Part_Two](#full_lmra_information_part_two)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Create_Full_LMRA](#create_full_lmra)</b></span>|

#### 🟥FullLMRATitle

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i><p><strong>Full LMRA</strong></p></i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Display Text</i></span>|

#### 🟥Date_Full

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Data Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Date</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Date</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Input Field</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Inputs On Next Nav To Assoc Scrn</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Use Stored Values</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|

### 🟥Full_LMRA_Information_Part_Two

#### 🟩Tasks_of_the_Day_1


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Screen</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Full LMRA Information - Part Two</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Back</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Finish</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Pause</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Show Footer</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Show Header</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Create_Full_LMRA](#create_full_lmra)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Tasks of the Day</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Large Text Area</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|

#### 🟥FullLMRATitleTwo



|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i><p><strong>Full LMRA</strong></p></i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Display Text</i></span>|

#### 🟩Surrounding_Risks_1





#### 🟥Tasks_of_the_Day


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Tasks of the Day</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Surrounding Risks</b></span>|

#### 🟥Surrounding_Risks

#### 🟩Corrective_Measures_1


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Surrounding Risks</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Corrective Measures</b></span>|

#### 🟥Corrective_Measures

#### 🟩EPC_EPI_CBM_PBM_1


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Corrective Measures</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EPC - EPI/CBM - PBM</b></span>|

#### 🟥EPC_EPI_CBM_PBM

#### 🟩FileUpload


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>EPC - EPI/CBM - PBM</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Large Text Area</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Extension Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>forceContent:fileUpload</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Component Instance</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Attach Photos</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Multiple (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Record Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord.Id</b></span>|

### Limited_LMRA_Information

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Create_Limited_LMRA](#create_limited_lmra)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Limited_LMRA_Confirmed](#limited_lmra_confirmed)</b></span>|

#### 🟥LimitedLMRATitle

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i><p><strong>Limited LMRA</strong></p></i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Display Text</i></span>|

#### LmitedLMRAMessage

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i><p><strong style="color: rgb(231, 24, 24); font-size: 14px;">Don't forget your LMRA, avoid accidents!</strong></p></i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p><strong style="font-size: 14px; color: rgb(11, 11, 11);">Don't forget your LMRA, avoid accidents!</strong></p></b></span>|

#### 🟥Work_Order

#### 🟩Limited_LMRA_Done


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Data Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>String</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Value</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>workOrderRecord.WorkOrderNumber</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Work Order</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Boolean</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Limited LMRA Done</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Disabled</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>true</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Read Only</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>true</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|

#### 🟥Date_Lmited

#### 🟩confirmedLMRA


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Data Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Date</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Date</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Input Field</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Inputs On Next Nav To Assoc Scrn</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Use Stored Values</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p><em>To confirm that a limited LMRA has been done, please tick the box.</em></p></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|

#### 🟥Project_Lead

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Data Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>String</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Project Lead</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Input Field</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Inputs On Next Nav To Assoc Scrn</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Use Stored Values</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|

___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_