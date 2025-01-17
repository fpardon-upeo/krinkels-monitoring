<span style="background-color: #a6e22e; color: black;"><b>🟩# [TimesheetEntry] - After Save - Break Time</b></span>

## 🟩Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["<b>START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b></b>"]):::startClassAdded
click START "#general-information" "1773013466"

Calculate_Timesheet_Duration("<b>⚙️ <em></em><br/>Calculate Timesheet Duration</b>"):::actionCallsAdded
click Calculate_Timesheet_Duration "#calculate_timesheet_duration" "1467692425"

Calculate_Timesheet_Duration ==> END_Calculate_Timesheet_Duration
START ==> |"🟩<b>Run Immediately</b>"| Calculate_Timesheet_Duration
END_Calculate_Timesheet_Duration(( END )):::endClassAdded


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
  
linkStyle 0,1 stroke:#00ff00,stroke-width:4px,color:green;
```

<span style="background-color: #a6e22e; color: black;"><b>🟩<!-- Flow description --></b></span>

## 🟩General Information

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>TimeSheetEntry</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Process Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Auto Launched Flow</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Trigger Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Record After Save</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Record Trigger Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Create And Update</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[TimesheetEntry] - After Save - Break Time</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Active</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Does Require Record Changed To Meet Criteria</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Filter Formula</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ISCHANGED({!$Record.StartTime}) </b></span>|<span style="background-color: #a6e22e; color: black;"><b> <br/>ISCHANGED({!$Record.EndTime})</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Environments</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Default</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Interview Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[TimesheetEntry] - After Save - Break Time {!$Flow.CurrentDateTime}</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b> Builder Type (PM)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LightningFlowBuilder</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b> Canvas Mode (PM)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>AUTO_LAYOUT_CANVAS</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b> Origin Builder Type (PM)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LightningFlowBuilder</b></span>|


#### 🟩Scheduled Paths

|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Offset Number</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Offset Unit</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Time Source</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|
|:-- |:-- |:-- |:-- |:-- |:-- |:--  |
|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Calculate_Timesheet_Duration](#calculate_timesheet_duration)</b></span>|


## 🟩Flow Nodes Details

### 🟩Calculate_Timesheet_Duration

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Action Call</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Calculate Timesheet Duration</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Action Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Apex</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Action Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>TimeSheetCalculationInvocable</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Flow Transaction Model</b></span>|<span style="background-color: #a6e22e; color: black;"><b>CurrentTransaction</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Name Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>TimeSheetCalculationInvocable</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Offset</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Version Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Record Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Id</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Record Type (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>TimeSheetEntry</b></span>|






___

<span style="background-color: #a6e22e; color: black;"><b>🟩_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_</b></span>