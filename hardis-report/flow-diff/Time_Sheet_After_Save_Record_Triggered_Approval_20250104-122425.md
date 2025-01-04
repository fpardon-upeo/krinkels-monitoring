# [Time Sheet] - [After-Save] - [Record-Triggered] - Approval

## Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
click START "#general-information" "3124097786"

Send_Approved_Timesheet_to_ATAK("⚙️ <em></em><br/>Send Approved Timesheet to ATAK"):::actionCalls
click Send_Approved_Timesheet_to_ATAK "#send_approved_timesheet_to_atak" "1143983406"

Submit_Record_for_Approval("⚡ <em></em><br/>Submit Record for Approval"):::actionCalls
click Submit_Record_for_Approval "#submit_record_for_approval" "2191804054"

Submit_Record_for_Automated_Approval("⚡ <em></em><br/>Submit Record for Automated Approval"):::actionCalls
click Submit_Record_for_Automated_Approval "#submit_record_for_automated_approval" "1743783742"

Async_Status_Changes{"🔀 <em></em><br/>Async Status Changes"}:::decisions
click Async_Status_Changes "#async_status_changes" "3969040862"

Reviewed_Timesheet{"🔀 <em></em><br/>Reviewed Timesheet"}:::decisions
click Reviewed_Timesheet "#reviewed_timesheet" "1720153751"

Status_Changes{"🔀 <em></em><br/>Status Changes"}:::decisions
click Status_Changes "#status_changes" "4286881972"

Update_Entries_to_Approved[("🛠️ <em></em><br/>Update Entries to Approved")]:::recordUpdates
click Update_Entries_to_Approved "#update_entries_to_approved" "2866930110"

Update_Entries_to_Needs_Review[("🛠️ <em></em><br/>Update Entries to Needs Review")]:::recordUpdates
click Update_Entries_to_Needs_Review "#update_entries_to_needs_review" "664399946"

Update_Entries_to_Submitted[("🛠️ <em></em><br/>Update Entries to Submitted")]:::recordUpdates
click Update_Entries_to_Submitted "#update_entries_to_submitted" "3564611663"

Send_Approved_Timesheet_to_ATAK --> Update_Entries_to_Approved
Submit_Record_for_Approval --> Update_Entries_to_Submitted
Submit_Record_for_Automated_Approval --> END_Submit_Record_for_Automated_Approval
Async_Status_Changes --> |"Approved"| Send_Approved_Timesheet_to_ATAK
Async_Status_Changes --> |"Default Outcome"| END_Async_Status_Changes
Reviewed_Timesheet --> |"No"| Submit_Record_for_Approval
Reviewed_Timesheet --> |"Yes"| Submit_Record_for_Automated_Approval
Reviewed_Timesheet --> |"Default Outcome"| END_Reviewed_Timesheet
Status_Changes --> |"Submitted"| Reviewed_Timesheet
Status_Changes --> |"Needs Review"| Update_Entries_to_Needs_Review
Status_Changes --> |"Default Outcome"| END_Status_Changes
Update_Entries_to_Approved --> END_Update_Entries_to_Approved
Update_Entries_to_Needs_Review --> END_Update_Entries_to_Needs_Review
Update_Entries_to_Submitted --> END_Update_Entries_to_Submitted
START --> |"Run Immediately"| Status_Changes
START --> |"Run Immediately"| Async_Status_Changes
END_Submit_Record_for_Automated_Approval(( END )):::endClass
END_Async_Status_Changes(( END )):::endClass
END_Reviewed_Timesheet(( END )):::endClass
END_Status_Changes(( END )):::endClass
END_Update_Entries_to_Approved(( END )):::endClass
END_Update_Entries_to_Needs_Review(( END )):::endClass
END_Update_Entries_to_Submitted(( END )):::endClass


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
|Object|TimeSheet|
|Process Type| Auto Launched Flow|
|Trigger Type| Record After Save|
|Record Trigger Type| Create And Update|
|Label|[Time Sheet] - [After-Save] - [Record-Triggered] - Approval|
|Status|Active|
|Environments|Default|
|Interview Label|[Time Sheet] - [After-Save] - [Record-Triggered] - Approval {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|
|Connector|[Status_Changes](#status_changes)|
|Next Node|[Status_Changes](#status_changes)|


#### Scheduled Paths

|Label|Name|Offset Number|Offset Unit|Record Field|Time Source|Connector|
|:-- |:-- |:-- |:-- |:-- |:-- |:--  |
|<!-- -->|<!-- -->|<!-- -->|<!-- -->|<!-- -->|<!-- -->|[Async_Status_Changes](#async_status_changes)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Status| Is Changed|✅|


## Flow Nodes Details

### Send_Approved_Timesheet_to_ATAK

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Action Call|
|Label|Send Approved Timesheet to ATAK|
|Action Type|Apex|
|Action Name|ATAKPerformanceServiceInvocable|
|Flow Transaction Model|CurrentTransaction|
|Name Segment|ATAKPerformanceServiceInvocable|
|Offset|0|
|Version Segment|1|
|Timesheet Id (input)|$Record.Id|
|Connector|[Update_Entries_to_Approved](#update_entries_to_approved)|


### Submit_Record_for_Approval

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Action Call|
|Label|Submit Record for Approval|
|Action Type|Submit|
|Action Name|submit|
|Flow Transaction Model|CurrentTransaction|
|Name Segment|submit|
|Offset|0|
|Store Output Automatically|✅|
|Version Segment|1|
|Object Id (input)|$Record.Id|
|Connector|[Update_Entries_to_Submitted](#update_entries_to_submitted)|


### Submit_Record_for_Automated_Approval

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Action Call|
|Label|Submit Record for Automated Approval|
|Action Type|Submit|
|Action Name|submit|
|Flow Transaction Model|CurrentTransaction|
|Name Segment|submit|
|Offset|0|
|Store Output Automatically|✅|
|Version Segment|1|
|Object Id (input)|$Record.Id|


### Async_Status_Changes

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Decision|
|Label|Async Status Changes|
|Default Connector Label|Default Outcome|


#### Rule Approved (Approved)

|<!-- -->|<!-- -->|
|:---|:---|
|Connector|[Send_Approved_Timesheet_to_ATAK](#send_approved_timesheet_to_atak)|
|Condition Logic|and|




|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|1|$Record.Status| Equal To|Approved|




### Reviewed_Timesheet

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Decision|
|Label|Reviewed Timesheet|
|Default Connector Label|Default Outcome|


#### Rule No (No)

|<!-- -->|<!-- -->|
|:---|:---|
|Connector|[Submit_Record_for_Approval](#submit_record_for_approval)|
|Condition Logic|and|




|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|1|$Record.Needs_Review__c| Equal To|⬜|




#### Rule Yes (Yes)

|<!-- -->|<!-- -->|
|:---|:---|
|Connector|[Submit_Record_for_Automated_Approval](#submit_record_for_automated_approval)|
|Condition Logic|and|




|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|1|$Record.Needs_Review__c| Equal To|✅|




### Status_Changes

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Decision|
|Label|Status Changes|
|Default Connector Label|Default Outcome|


#### Rule Submitted (Submitted)

|<!-- -->|<!-- -->|
|:---|:---|
|Connector|[Reviewed_Timesheet](#reviewed_timesheet)|
|Condition Logic|and|




|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|1|$Record.Status| Equal To|Submitted|




#### Rule Needs_Review (Needs Review)

|<!-- -->|<!-- -->|
|:---|:---|
|Connector|[Update_Entries_to_Needs_Review](#update_entries_to_needs_review)|
|Condition Logic|and|




|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|1|$Record.Status| Equal To|Needs Review|
|2|$Record.Needs_Review__c| Equal To|⬜|




### Update_Entries_to_Approved

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Update|
|Label|Update Entries to Approved|
|Input Reference|$Record.TimeSheetEntries|


#### Input Assignments

|Field|Value|
|:-- |:--: |
|Status|Approved|




### Update_Entries_to_Needs_Review

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Update|
|Label|Update Entries to Needs Review|
|Input Reference|$Record.TimeSheetEntries|


#### Input Assignments

|Field|Value|
|:-- |:--: |
|Status|Needs Review|




### Update_Entries_to_Submitted

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Update|
|Label|Update Entries to Submitted|
|Input Reference|$Record.TimeSheetEntries|


#### Input Assignments

|Field|Value|
|:-- |:--: |
|Status|Submitted|








___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_