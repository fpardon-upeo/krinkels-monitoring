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

Submit_Record_for_Approval("<b>⚡ <em></em><br/>Submit Record for Approval</b>"):::actionCallsChanged


click Submit_Record_for_Approval "#submit_record_for_approval" "4190507176"


Submit_Record_for_Automated_Approval("<b>⚡ <em></em><br/>Submit Record for Automated Approval</b>"):::actionCallsChanged


click Submit_Record_for_Automated_Approval "#submit_record_for_automated_approval" "3906090855"


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
  
```

<!-- Flow description -->

## Flow Nodes Details

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
|🟩<span style="background-color: #a6e22e; color: black;"><b>Submitter Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.ServiceResource.RelatedRecordId</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Skip Entry Criteria (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
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
|🟩<span style="background-color: #a6e22e; color: black;"><b>Submitter Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.ServiceResource.RelatedRecordId</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Skip Entry Criteria (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|



___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_