# [Service Appointment][After-Save][Record-Triggered] Populate Start/End Date on WO

## Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
click START "#general-information" "4162120768"

Scheduled_or_Actual_Times{"🔀 <em></em><br/>Scheduled or Actual Times ?"}:::decisions
click Scheduled_or_Actual_Times "#scheduled_or_actual_times" "4243140208"

Update_Earliest_Start_Permitted_and_Due_date[("🛠️ <em></em><br/>Update Earliest Start Permitted and Due date")]:::recordUpdates
click Update_Earliest_Start_Permitted_and_Due_date "#update_earliest_start_permitted_and_due_date" "2051787742"

Update_with_Actual_Times[("🛠️ <em></em><br/>Update with Actual Times")]:::recordUpdates
click Update_with_Actual_Times "#update_with_actual_times" "2552944206"

Update_with_Scheduled_Times[("🛠️ <em></em><br/>Update with Scheduled Times")]:::recordUpdates
click Update_with_Scheduled_Times "#update_with_scheduled_times" "1114663059"

Scheduled_or_Actual_Times --> |"Scheduled"| Update_with_Scheduled_Times
Scheduled_or_Actual_Times --> |"Times"| Update_with_Actual_Times
Scheduled_or_Actual_Times --> |"No"| END_Scheduled_or_Actual_Times
Update_Earliest_Start_Permitted_and_Due_date --> END_Update_Earliest_Start_Permitted_and_Due_date
Update_with_Actual_Times --> END_Update_with_Actual_Times
Update_with_Scheduled_Times --> Update_Earliest_Start_Permitted_and_Due_date
START -->  Scheduled_or_Actual_Times
END_Scheduled_or_Actual_Times(( END )):::endClass
END_Update_Earliest_Start_Permitted_and_Due_date(( END )):::endClass
END_Update_with_Actual_Times(( END )):::endClass


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
|Object|ServiceAppointment|
|Process Type| Auto Launched Flow|
|Trigger Type| Record After Save|
|Record Trigger Type| Create And Update|
|Label|[Service Appointment][After-Save][Record-Triggered] Populate Start/End Date on WO|
|Status|Active|
|Description|This flow updates the start date and end date fields on WO, based on the values of scheduled start and scheduled end fields on the related SA.|
|Environments|Default|
|Interview Label|[Service Appointment][After-Save][Record-Triggered] Populate Start/End Date on WO {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|
|Connector|[Scheduled_or_Actual_Times](#scheduled_or_actual_times)|
|Next Node|[Scheduled_or_Actual_Times](#scheduled_or_actual_times)|


#### Filters (logic: **(1 AND 2 ) OR (3 AND 4) OR (5 AND 6) OR (7 AND 8)**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|SchedStartTime| Is Changed|✅|
|2|SchedStartTime| Is Null|<!-- -->|
|3|SchedEndTime| Is Changed|✅|
|4|SchedEndTime| Is Null|<!-- -->|
|5|ActualStartTime| Is Changed|✅|
|6|ActualStartTime| Is Null|<!-- -->|
|7|ActualEndTime| Is Changed|✅|
|8|ActualEndTime| Is Null|<!-- -->|


## Formulas

|Name|Data Type|Expression|
|:-- |:--:|:--  |
|NewDueDate|DateTime|DATETIMEVALUE({!$Record.SchedEndTime} + 7)|
|NewEarliestStartPermitted|DateTime|DATETIMEVALUE({!$Record.SchedStartTime} - 7)|


## Flow Nodes Details

### Scheduled_or_Actual_Times

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Decision|
|Label|Scheduled or Actual Times ?|
|Default Connector Label|No|


#### Rule Scheduled (Scheduled)

|<!-- -->|<!-- -->|
|:---|:---|
|Connector|[Update_with_Scheduled_Times](#update_with_scheduled_times)|
|Condition Logic|(1 AND 2) OR (3 AND 4)|




|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|1|$Record.SchedStartTime| Is Changed|✅|
|2|$Record.SchedStartTime| Is Null|⬜|
|3|$Record.SchedEndTime| Is Changed|✅|
|4|$Record.SchedEndTime| Is Null|⬜|




#### Rule Times (Times)

|<!-- -->|<!-- -->|
|:---|:---|
|Connector|[Update_with_Actual_Times](#update_with_actual_times)|
|Condition Logic|(1 AND 2) OR (3 AND 4)|




|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|1|$Record.ActualStartTime| Is Changed|✅|
|2|$Record.ActualStartTime| Is Null|⬜|
|3|$Record.ActualEndTime| Is Changed|✅|
|4|$Record.ActualEndTime| Is Null|⬜|




### Update_Earliest_Start_Permitted_and_Due_date

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Update|
|Label|Update Earliest Start Permitted and Due date|
|Input Reference|$Record|


#### Input Assignments

|Field|Value|
|:-- |:--: |
|DueDate|NewDueDate|
|EarliestStartTime|NewEarliestStartPermitted|




### Update_with_Actual_Times

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Update|
|Object|WorkOrder|
|Label|Update with Actual Times|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Id| Equal To|$Record.ParentRecordId|




#### Input Assignments

|Field|Value|
|:-- |:--: |
|EndDate|$Record.ActualEndTime|
|StartDate|$Record.ActualStartTime|




### Update_with_Scheduled_Times

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Update|
|Object|WorkOrder|
|Label|Update with Scheduled Times|
|Connector|[Update_Earliest_Start_Permitted_and_Due_date](#update_earliest_start_permitted_and_due_date)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Id| Equal To|$Record.ParentRecordId|




#### Input Assignments

|Field|Value|
|:-- |:--: |
|EndDate|$Record.SchedEndTime|
|StartDate|$Record.SchedStartTime|








___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_