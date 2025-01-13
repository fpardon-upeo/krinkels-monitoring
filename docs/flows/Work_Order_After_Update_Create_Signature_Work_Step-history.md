# Work_Order_After_Update_Create_Signature_Work_Step history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Dec 4, 2024 (Initial)"

    _Dec 4, 2024, by fpardon-upeo in commit Org state on 2024-12-04 00:26 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "1153757542"
    
    Work_Type_Signature_Exists{"🔀 <em></em><br/>Work Type Signature Exists?"}:::decisions
    click Work_Type_Signature_Exists "#work_type_signature_exists" "1085175524"
    
    Create_Work_Step[("➕ <em></em><br/>Create Work Step")]:::recordCreates
    click Create_Work_Step "#create_work_step" "1407213871"
    
    Get_Highest_Execution_Order[("🔍 <em></em><br/>Get Highest Execution Order")]:::recordLookups
    click Get_Highest_Execution_Order "#get_highest_execution_order" "823647506"
    
    Get_Work_Plan[("🔍 <em></em><br/>Get Work Plan")]:::recordLookups
    click Get_Work_Plan "#get_work_plan" "3061216168"
    
    Get_Work_Steps[("🔍 <em></em><br/>Get Work Steps")]:::recordLookups
    click Get_Work_Steps "#get_work_steps" "234129315"
    
    Work_Type_Signature_Exists --> |"No"| Get_Work_Plan
    Work_Type_Signature_Exists --> |"Default Outcome"| END_Work_Type_Signature_Exists
    Create_Work_Step --> END_Create_Work_Step
    Get_Highest_Execution_Order --> Create_Work_Step
    Get_Work_Plan --> Get_Highest_Execution_Order
    Get_Work_Steps --> Work_Type_Signature_Exists
    START -->  Get_Work_Steps
    END_Work_Type_Signature_Exists(( END )):::endClass
    END_Create_Work_Step(( END )):::endClass
    
    
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
    
    <!-- Flow description -->
    
    ## General Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Object|WorkOrder|
    |Process Type| Auto Launched Flow|
    |Trigger Type| Record After Save|
    |Record Trigger Type| Create And Update|
    |Label|[Work Order] - [After Update] - Create Signature Work Step|
    |Status|Active|
    |Environments|Default|
    |Interview Label|[Work Order] - [After Update] - Create Signature Work Step {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Get_Work_Steps](#get_work_steps)|
    |Next Node|[Get_Work_Steps](#get_work_steps)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Status| Equal To|Dispatched|
    |2|Signature_Required__c| Equal To|✅|
    
    
    ## Formulas
    
    |Name|Data Type|Expression|Description|
    |:-- |:--:|:-- |:--  |
    |CalculatedExecutionOrder|Number|{!Get_Highest_Execution_Order.ExecutionOrder}-1|<!-- -->|
    
    
    ## Flow Nodes Details
    
    ### Work_Type_Signature_Exists
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Work Type Signature Exists?|
    |Default Connector Label|Default Outcome|
    
    
    #### Rule Yes (Yes)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|[Get_Work_Steps](#get_work_steps)| Is Empty|⬜|
    
    
    
    
    #### Rule No (No)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Get_Work_Plan](#get_work_plan)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|[Get_Work_Steps](#get_work_steps)| Is Empty|✅|
    
    
    
    
    ### Create_Work_Step
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Create|
    |Object|WorkStep|
    |Label|Create Work Step|
    |Store Output Automatically|✅|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |ActionDefinition|WorkStep.Work_Step_Signature|
    |ExecutionOrder|CalculatedExecutionOrder|
    |Name|Signature|
    |WorkPlanId|Get_Work_Plan.Id|
    
    
    
    
    ### Get_Highest_Execution_Order
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkStep|
    |Label|Get Highest Execution Order|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Sort Field|ExecutionOrder|
    |Sort Order|Desc|
    |Store Output Automatically|✅|
    |Connector|[Create_Work_Step](#create_work_step)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|WorkOrderId| Equal To|$Record.Id|
    
    
    
    
    ### Get_Work_Plan
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkPlan|
    |Label|Get Work Plan|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Get_Highest_Execution_Order](#get_highest_execution_order)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|WorkOrderId| Equal To|$Record.Id|
    
    
    
    
    ### Get_Work_Steps
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkStep|
    |Label|Get Work Steps|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|⬜|
    |Store Output Automatically|✅|
    |Connector|[Work_Type_Signature_Exists](#work_type_signature_exists)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|WorkOrderId| Equal To|$Record.Id|
    |2|Name| Equal To|Signature|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

