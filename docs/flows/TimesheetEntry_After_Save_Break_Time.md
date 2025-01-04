# [TimesheetEntry] - After Save - Break Time

## Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
click START "#general-information" "2382856535"

Calculate_Timesheet_Duration("⚙️ <em></em><br/>Calculate Timesheet Duration"):::actionCalls
click Calculate_Timesheet_Duration "#calculate_timesheet_duration" "1467692425"

Calculate_Timesheet_Duration --> END_Calculate_Timesheet_Duration
START --> |"Run Immediately"| Calculate_Timesheet_Duration
END_Calculate_Timesheet_Duration(( END )):::endClass


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
|Object|TimeSheetEntry|
|Process Type| Auto Launched Flow|
|Trigger Type| Record After Save|
|Record Trigger Type| Create And Update|
|Label|[TimesheetEntry] - After Save - Break Time|
|Status|Obsolete|
|Does Require Record Changed To Meet Criteria|✅|
|Filter Formula|ISCHANGED({!$Record.StartTime}) || <br/>ISCHANGED({!$Record.EndTime})|
|Environments|Default|
|Interview Label|[TimesheetEntry] - After Save - Break Time {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|


#### Scheduled Paths

|Label|Name|Offset Number|Offset Unit|Record Field|Time Source|Connector|
|:-- |:-- |:-- |:-- |:-- |:-- |:--  |
|<!-- -->|<!-- -->|<!-- -->|<!-- -->|<!-- -->|<!-- -->|[Calculate_Timesheet_Duration](#calculate_timesheet_duration)|


## Flow Nodes Details

### Calculate_Timesheet_Duration

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Action Call|
|Label|Calculate Timesheet Duration|
|Action Type|Apex|
|Action Name|TimeSheetCalculationInvocable|
|Flow Transaction Model|CurrentTransaction|
|Name Segment|TimeSheetCalculationInvocable|
|Offset|0|
|Version Segment|1|
|Record Id (input)|$Record.Id|
|Record Type (input)|TimeSheetEntry|






___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_