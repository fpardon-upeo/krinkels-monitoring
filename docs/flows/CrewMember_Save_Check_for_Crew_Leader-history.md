# CrewMember_Save_Check_for_Crew_Leader history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Dec 17, 2024 (Initial)"

    _Dec 17, 2024, by fpardon-upeo in commit Org state on 2024-12-17 00:26 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record Before Save</b>"]):::startClass
    click START "#general-information" "4103044921"
    
    Check_Leader{"🔀 <em></em><br/>Check Leader"}:::decisions
    click Check_Leader "#check_leader" "3296390613"
    
    Is_Leader{"🔀 <em></em><br/>Is Leader"}:::decisions
    click Is_Leader "#is_leader" "2987137367"
    
    Get_Other_Crew_Members[("🔍 <em></em><br/>Get Other Crew Members")]:::recordLookups
    click Get_Other_Crew_Members "#get_other_crew_members" "3885880498"
    
    Set_Crew_Leader[("🛠️ <em></em><br/>Set Crew Leader")]:::recordUpdates
    click Set_Crew_Leader "#set_crew_leader" "2523927107"
    
    Set_Current_Is_Leader[("🛠️ <em></em><br/>Set Current Is Leader")]:::recordUpdates
    click Set_Current_Is_Leader "#set_current_is_leader" "3572336918"
    
    Set_No_Crew_Leader[("🛠️ <em></em><br/>Set No Crew Leader")]:::recordUpdates
    click Set_No_Crew_Leader "#set_no_crew_leader" "2088481534"
    
    Check_Leader --> |"No Leader"| Set_No_Crew_Leader
    Check_Leader --> |"Default Outcome"| Set_Crew_Leader
    Is_Leader --> |"Yes"| Set_Current_Is_Leader
    Is_Leader --> |"No"| Get_Other_Crew_Members
    Is_Leader --> |"Default Outcome"| END_Is_Leader
    Get_Other_Crew_Members --> Check_Leader
    Set_Crew_Leader --> END_Set_Crew_Leader
    Set_Current_Is_Leader --> END_Set_Current_Is_Leader
    Set_No_Crew_Leader --> END_Set_No_Crew_Leader
    START -->  Is_Leader
    END_Is_Leader(( END )):::endClass
    END_Set_Crew_Leader(( END )):::endClass
    END_Set_Current_Is_Leader(( END )):::endClass
    END_Set_No_Crew_Leader(( END )):::endClass
    
    
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
    |Object|ServiceCrewMember|
    |Process Type| Auto Launched Flow|
    |Trigger Type| Record Before Save|
    |Record Trigger Type| Create And Update|
    |Label|[CrewMember] - Save - Check for Crew Leader|
    |Status|Active|
    |Environments|Default|
    |Interview Label|[CrewMember] - Save - Check for Crew Leader {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Is_Leader](#is_leader)|
    |Next Node|[Is_Leader](#is_leader)|
    
    
    ## Flow Nodes Details
    
    ### Check_Leader
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Check Leader|
    |Default Connector|[Set_Crew_Leader](#set_crew_leader)|
    |Default Connector Label|Default Outcome|
    
    
    #### Rule No_Leader (No Leader)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Set_No_Crew_Leader](#set_no_crew_leader)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|[Get_Other_Crew_Members](#get_other_crew_members)| Is Null|✅|
    
    
    
    
    ### Is_Leader
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Is Leader|
    |Default Connector Label|Default Outcome|
    
    
    #### Rule Yes (Yes)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Set_Current_Is_Leader](#set_current_is_leader)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.IsLeader| Equal To|✅|
    
    
    
    
    #### Rule No (No)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Get_Other_Crew_Members](#get_other_crew_members)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.IsLeader| Equal To|⬜|
    
    
    
    
    ### Get_Other_Crew_Members
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|ServiceCrewMember|
    |Label|Get Other Crew Members|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Check_Leader](#check_leader)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|ServiceCrewId| Equal To|$Record.ServiceCrewId|
    |2|IsLeader| Equal To|✅|
    |3|Id| Not Equal To|$Record.Id|
    
    
    
    
    ### Set_Crew_Leader
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Label|Set Crew Leader|
    |Input Reference|$Record|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Crew_Has_Leader__c|✅|
    
    
    
    
    ### Set_Current_Is_Leader
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Label|Set Current Is Leader|
    |Input Reference|$Record|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Crew_Has_Leader__c|✅|
    
    
    
    
    ### Set_No_Crew_Leader
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Label|Set No Crew Leader|
    |Input Reference|$Record|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Crew_Has_Leader__c|⬜|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

