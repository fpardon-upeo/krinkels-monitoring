# [Location Visit][After-Save][Record-Triggered] Inform visitor when Opportunity visit

## Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["<b>START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b></b>"]):::startClassChanged


click START "#general-information" "2335033166"



New_Location_Visit_Notification("<b>⚡ <em></em><br/>New Location Visit Notification</b>"):::actionCallsAdded
click New_Location_Visit_Notification "#new_location_visit_notification" "233160756"

Planned_Location_Visit_Notification("<b>⚡ <em></em><br/>Planned Location Visit Notification</b>"):::actionCallsAdded
click Planned_Location_Visit_Notification "#planned_location_visit_notification" "1036259048"

Visitor_ID[\"<b>🟰 <em></em><br/>Visitor ID</b>"/]:::assignmentsAdded
click Visitor_ID "#visitor_id" "406092534"

Location_Visit_Planned{"<b>🔀 <em></em><br/>Location Visit Planned ?</b>"}:::decisionsAdded
click Location_Visit_Planned "#location_visit_planned" "622861650"

Visitor_Filled_In{"<b>🔀 <em></em><br/>Visitor Filled In ?</b>"}:::decisionsAdded
click Visitor_Filled_In "#visitor_filled_in" "241890594"


Get_Notification[("<b>🔍 <em></em><br/>Get Notification</b>")]:::recordLookupsChanged


click Get_Notification "#get_notification" "3148319973"



Get_Notification -.-> END_Get_Notification
START -.->  Get_Notification
END_Get_Notification(( END )):::endClassRemoved

Update[("<b>🛠️ <em></em><br/>Update</b>")]:::recordUpdatesAdded
click Update "#update" "2443626981"



New_Location_Visit_Notification ==> Update
Planned_Location_Visit_Notification ==> Update
Visitor_ID ==> Visitor_Filled_In
Location_Visit_Planned ==> |"🟩<b>Yes</b>"| Planned_Location_Visit_Notification
Location_Visit_Planned ==> |"🟩<b>No</b>"| New_Location_Visit_Notification
Visitor_Filled_In ==> |"🟩<b>Yes</b>"| Get_Notification
Visitor_Filled_In ==> |"🟩<b>No</b>"| END_Visitor_Filled_In
Get_Notification ==> Location_Visit_Planned
Update ==> END_Update
START ==>  Visitor_ID
END_Visitor_Filled_In(( END )):::endClassAdded
END_Update(( END )):::endClassAdded





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
  
linkStyle 2,3,4,5,6,7,8,9,10,11 stroke:#00ff00,stroke-width:4px,color:green;
linkStyle 0,1 stroke:#ff0000,stroke-width:4px,color:red;
```

<!-- Flow description -->

## General Information

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⚠️ Draft</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Filter Formula</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>(ISNEW() && NOT(ISNULL( {!$Record.Visitor_Internal__c})))<br/></i></span>|<span style="background-color: #ff7f7f; color: black;"><i><br/>(ISCHANGED({!$Record.Visitor_Internal__c})&&NOT(ISNULL( {!$Record.Visitor_Internal__c})))</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Active</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Filter Formula</b></span>|<span style="background-color: #a6e22e; color: black;"><b>AND(<br/>    NOT(ISBLANK({!$Record.Visitor_Internal__c})),<br/>    OR(<br/>        ISNEW(),<br/>        ISCHANGED({!$Record.Visitor_Internal__c})<br/>    )<br/>)</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Notification](#get_notification)</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Next Node</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Notification](#get_notification)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Visitor_ID](#visitor_id)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Next Node</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Visitor_ID](#visitor_id)</b></span>|

## 🟩Variables

|Name|Data Type|Is Collection|Is Input|Is Output|Object Type|Description|
|:-- |:--:|:--:|:--:|:--:|:--:|:--  |
|🟩<span style="background-color: #a6e22e; color: black;"><b>CreatorName</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>VisitorId</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|

## 🟩Text Templates

|Name|Text|Description|
|:-- |:-- |:--  |
|🟩<span style="background-color: #a6e22e; color: black;"><b>NewVisitBody</b></span>|<span style="background-color: #a6e22e; color: black;"><b>A(n) {!$Record.Location_Visit_Type__c} visit has been assigned to you by {!$Record.CreatedBy.FirstName} {!$Record.CreatedBy.LastName}. Please plan a visit.</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>NewVisitTitle</b></span>|<span style="background-color: #a6e22e; color: black;"><b>New Location Visit</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>VisitPlannedBody</b></span>|<span style="background-color: #a6e22e; color: black;"><b>A(n) {!$Record.Location_Visit_Type__c} visit has been scheduled for {!$Record.Visit_Date__c} by {!$Record.CreatedBy.FirstName} {!$Record.CreatedBy.LastName}.</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>VisitPlannedTitle</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Location Visit Planned</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|

## Flow Nodes Details


### 🟩New_Location_Visit_Notification

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Action Call</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>New Location Visit Notification</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Action Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Custom Notification Action</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Action Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>customNotificationAction</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Flow Transaction Model</b></span>|<span style="background-color: #a6e22e; color: black;"><b>CurrentTransaction</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Name Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>customNotificationAction</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Offset</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Version Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Custom Notif Type Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Notification.Id</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Ids (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>VisitorId</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Title (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>NewVisitTitle</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Body (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>NewVisitBody</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Target Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Id</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update](#update)</b></span>|

### 🟩Planned_Location_Visit_Notification

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Action Call</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Planned Location Visit Notification</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Action Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Custom Notification Action</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Action Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>customNotificationAction</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Flow Transaction Model</b></span>|<span style="background-color: #a6e22e; color: black;"><b>CurrentTransaction</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Name Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>customNotificationAction</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Offset</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Version Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Custom Notif Type Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Notification.Id</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Ids (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>VisitorId</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Title (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>VisitPlannedTitle</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Body (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>VisitPlannedBody</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Target Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Id</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update](#update)</b></span>|

### 🟩Visitor_ID

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Assignment</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Visitor ID</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Visitor_Filled_In](#visitor_filled_in)</b></span>|

#### 🟩Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>VisitorId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Add</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Visitor_Internal__c</b></span>|

### 🟩Location_Visit_Planned

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Location Visit Planned ?</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[New_Location_Visit_Notification](#new_location_visit_notification)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>No</b></span>|

#### 🟩Rule Yes (Yes)

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Planned_Location_Visit_Notification](#planned_location_visit_notification)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|

|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Fixed_date_Already_planned__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|

### 🟩Visitor_Filled_In

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Visitor Filled In ?</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>No</b></span>|

#### 🟩Rule Yes_Visitor_Filled_In (Yes)

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Notification](#get_notification)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|

|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>VisitorId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Empty</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|

### Get_Notification

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Location_Visit_Planned](#location_visit_planned)</b></span>|

### 🟩Update



|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Update</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update](#update)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Input Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record</b></span>|

#### 🟩Input Assignments



|Field|Value|
|:-- |:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>OwnerId</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Visitor_Internal__r.Id</b></span>|

___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_