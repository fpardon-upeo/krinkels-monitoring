# Time_Sheet_Before_Save_Record_Triggered_Review_Approval_Auto_Update history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Nov 21, 2024 (Initial)"

    _Nov 21, 2024, by fpardon-upeo in commit Org state on 2024-11-21 00:44 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record Before Save</b>"]):::startClass
    click START "#general-information" "4081138135"
    
    Status_Changes{"🔀 <em></em><br/>Status Changes"}:::decisions
    click Status_Changes "#status_changes" "2389864391"
    
    Update_to_Approved[("🛠️ <em></em><br/>Update to Approved")]:::recordUpdates
    click Update_to_Approved "#update_to_approved" "3177147087"
    
    Status_Changes --> |"Needs Review"| Update_to_Approved
    Status_Changes --> |"Default Outcome"| END_Status_Changes
    Update_to_Approved --> END_Update_to_Approved
    START -->  Status_Changes
    END_Status_Changes(( END )):::endClass
    END_Update_to_Approved(( END )):::endClass
    
    
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
    |Object|TimeSheet|
    |Process Type| Auto Launched Flow|
    |Trigger Type| Record Before Save|
    |Record Trigger Type| Create And Update|
    |Label|[Time Sheet] - [Before-Save] - [Record-Triggered] - Review Approval Auto Update|
    |Status|Obsolete|
    |Description|Automatically approves the Time Sheet if it is submitted a second time after having been flagged for review.|
    |Environments|Default|
    |Interview Label|[Time Sheet] - [Before-Save] - [Record-Triggered] - Review Approval Auto Update {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Status_Changes](#status_changes)|
    |Next Node|[Status_Changes](#status_changes)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Status| Is Changed|✅|
    
    
    ## Flow Nodes Details
    
    ### Status_Changes
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Status Changes|
    |Default Connector Label|Default Outcome|
    
    
    #### Rule Needs_Review (Needs Review)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Update_to_Approved](#update_to_approved)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.Status| Equal To|Submitted|
    |2|$Record.Needs_Review__c| Equal To|✅|
    
    
    
    
    ### Update_to_Approved
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Label|Update to Approved|
    |Input Reference|$Record|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Status|Approved|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

