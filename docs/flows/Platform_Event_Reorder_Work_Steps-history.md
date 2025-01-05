# Platform_Event_Reorder_Work_Steps history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Nov 17, 2024 (Initial)"

    _Nov 17, 2024, by fpardon-upeo in commit Org state on 2024-11-17 00:26 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Platform Event</b>"]):::startClass
    click START "#general-information" "112750625"
    
    Identify_Next_Number[\"🟰 <em></em><br/>Identify Next Number"/]:::assignments
    click Identify_Next_Number "#identify_next_number" "433279122"
    
    Increment_Execution_Number[\"🟰 <em></em><br/>Increment Execution Number"/]:::assignments
    click Increment_Execution_Number "#increment_execution_number" "328962872"
    
    Set_Values_for_Last_Work_Steps[\"🟰 <em></em><br/>Set Values for Last Work Steps"/]:::assignments
    click Set_Values_for_Last_Work_Steps "#set_values_for_last_work_steps" "1525017362"
    
    Loop_Through_Last_Work_Steps{{"🔁 <em></em><br/>Loop Through Last Work Steps"}}:::loops
    click Loop_Through_Last_Work_Steps "#loop_through_last_work_steps" "1618073776"
    
    Get_Work_Step[("🔍 <em></em><br/>Get Work Step")]:::recordLookups
    click Get_Work_Step "#get_work_step" "1411320038"
    
    Update_Last_Work_Steps[("🛠️ <em></em><br/>Update Last Work Steps")]:::recordUpdates
    click Update_Last_Work_Steps "#update_last_work_steps" "1245673036"
    
    Identify_Next_Number --> Get_Work_Step
    Increment_Execution_Number --> Loop_Through_Last_Work_Steps
    Set_Values_for_Last_Work_Steps --> Increment_Execution_Number
    Loop_Through_Last_Work_Steps --> |"For Each"|Set_Values_for_Last_Work_Steps
    Loop_Through_Last_Work_Steps ---> |"After Last"|Update_Last_Work_Steps
    Get_Work_Step --> Loop_Through_Last_Work_Steps
    Update_Last_Work_Steps --> END_Update_Last_Work_Steps
    START -->  Identify_Next_Number
    END_Update_Last_Work_Steps(( END )):::endClass
    
    
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
    |Object|Reorder_Work_Step__e|
    |Process Type| Auto Launched Flow|
    |Trigger Type| Platform Event|
    |Label|[Platform-Event] Reorder Work Steps|
    |Status|Active|
    |Flow Run As User|TriggeringUser|
    |Environments|Default|
    |Interview Label|[Platform-Event] Reorder Work Steps {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Identify_Next_Number](#identify_next_number)|
    |Next Node|[Identify_Next_Number](#identify_next_number)|
    
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
    |:-- |:--:|:--:|:--:|:--:|:--: |
    |LastWOLNumber|Number|⬜|✅|⬜|<!-- -->|
    |LastWorkStepsCollection|SObject|✅|✅|⬜|WorkStep|
    |WorkStepCollection|SObject|✅|✅|⬜|WorkStep|
    |WorkStepRecord|SObject|⬜|✅|⬜|WorkStep|
    
    
    ## Flow Nodes Details
    
    ### Identify_Next_Number
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Identify Next Number|
    |Connector|[Get_Work_Step](#get_work_step)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |LastWOLNumber| Assign|$Record.Next_Number__c|
    
    
    
    
    ### Increment_Execution_Number
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Increment Execution Number|
    |Connector|[Loop_Through_Last_Work_Steps](#loop_through_last_work_steps)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |LastWOLNumber| Add|1|
    
    
    
    
    ### Set_Values_for_Last_Work_Steps
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Set Values for Last Work Steps|
    |Connector|[Increment_Execution_Number](#increment_execution_number)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |WorkStepRecord.ExecutionOrder| Assign|LastWOLNumber|
    |WorkStepRecord.Id| Assign|Loop_Through_Last_Work_Steps.Id|
    |WorkStepCollection| Add|WorkStepRecord|
    
    
    
    
    ### Loop_Through_Last_Work_Steps
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Loop|
    |Label|Loop Through Last Work Steps|
    |Collection Reference|LastWorkStepsCollection|
    |Iteration Order|Asc|
    |Next Value Connector|[Set_Values_for_Last_Work_Steps](#set_values_for_last_work_steps)|
    |No More Values Connector|[Update_Last_Work_Steps](#update_last_work_steps)|
    
    
    ### Get_Work_Step
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkStep|
    |Label|Get Work Step|
    |Assign Null Values If No Records Found|⬜|
    |Output Reference|LastWorkStepsCollection|
    |Queried Fields|- Id<br/>- ExecutionOrder<br/>|
    |Sort Field|ExecutionOrder|
    |Sort Order|Asc|
    |Connector|[Loop_Through_Last_Work_Steps](#loop_through_last_work_steps)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|WorkOrderId| Equal To|$Record.Work_Order_Id__c|
    |2|ExecutionOrder| Greater Than|LastWOLNumber|
    
    
    
    
    ### Update_Last_Work_Steps
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Label|Update Last Work Steps|
    |Input Reference|WorkStepCollection|
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

