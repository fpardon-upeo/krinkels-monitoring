# [ResourceAbsence] - After Save - Set Total Absence Time on TimeSheet

## Flow Diagram [(_View History_)](ResourceAbsence_After_Save_Set_Total_Absence_Time_on_TimeSheet-history.md)

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
click START "#general-information" "2475860394"

Add_Minutes[\"🟰 <em></em><br/>Add Minutes"/]:::assignments
click Add_Minutes "#add_minutes" "3406657122"

Loop_Retrieved_Timesheets{{"🔁 <em></em><br/>Loop Retrieved Timesheets"}}:::loops
click Loop_Retrieved_Timesheets "#loop_retrieved_timesheets" "4282866477"

Get_All_Absences_for_Timesheet[("🔍 <em></em><br/>Get All Absences for Timesheet")]:::recordLookups
click Get_All_Absences_for_Timesheet "#get_all_absences_for_timesheet" "1143233189"

Update_Timesheet[("🛠️ <em></em><br/>Update Timesheet")]:::recordUpdates
click Update_Timesheet "#update_timesheet" "1005070212"

Add_Minutes --> Loop_Retrieved_Timesheets
Loop_Retrieved_Timesheets --> |"For Each"|Add_Minutes
Loop_Retrieved_Timesheets ---> |"After Last"|Update_Timesheet
Get_All_Absences_for_Timesheet --> Loop_Retrieved_Timesheets
Update_Timesheet --> END_Update_Timesheet
START -->  Get_All_Absences_for_Timesheet
END_Update_Timesheet(( END )):::endClass


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
|Object|ResourceAbsence|
|Process Type| Auto Launched Flow|
|Trigger Type| Record After Save|
|Record Trigger Type| Create And Update|
|Label|[ResourceAbsence] - After Save - Set Total Absence Time on TimeSheet|
|Status|Active|
|Environments|Default|
|Interview Label|[ResourceAbsence] - After Save - Set Total Absence Time on TimeSheet {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|
|Connector|[Get_All_Absences_for_Timesheet](#get_all_absences_for_timesheet)|
|Next Node|[Get_All_Absences_for_Timesheet](#get_all_absences_for_timesheet)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Time_Sheet__c| Is Null|<!-- -->|


## Variables

|Name|Data Type|Is Collection|Is Input|Is Output|Object Type|Description|
|:-- |:--:|:--:|:--:|:--:|:--:|:--  |
|totalDuration|Number|⬜|⬜|⬜|<!-- -->|<!-- -->|


## Formulas

|Name|Data Type|Expression|Description|
|:-- |:--:|:-- |:--  |
|absenceDuration|Number|IF (ISBLANK({!Loop_Retrieved_Timesheets.Start}), 0, ({!Loop_Retrieved_Timesheets.End}- {!Loop_Retrieved_Timesheets.Start})*24*60)|<!-- -->|


## Flow Nodes Details

### Add_Minutes

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Assignment|
|Label|Add Minutes|
|Connector|[Loop_Retrieved_Timesheets](#loop_retrieved_timesheets)|


#### Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|totalDuration| Add|absenceDuration|




### Loop_Retrieved_Timesheets

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Loop|
|Label|Loop Retrieved Timesheets|
|Collection Reference|[Get_All_Absences_for_Timesheet](#get_all_absences_for_timesheet)|
|Iteration Order|Asc|
|Next Value Connector|[Add_Minutes](#add_minutes)|
|No More Values Connector|[Update_Timesheet](#update_timesheet)|


### Get_All_Absences_for_Timesheet

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|ResourceAbsence|
|Label|Get All Absences for Timesheet|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|⬜|
|Store Output Automatically|✅|
|Connector|[Loop_Retrieved_Timesheets](#loop_retrieved_timesheets)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Time_Sheet__c| Equal To|$Record.Time_Sheet__c|




### Update_Timesheet

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Update|
|Object|TimeSheet|
|Label|Update Timesheet|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Id| Equal To|$Record.Time_Sheet__c|




#### Input Assignments

|Field|Value|
|:-- |:--: |
|Total_Break_and_Absent_Time_Minutes__c|totalDuration|








___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_