# ATAK_Project_After_Save_Record_Triggered_Set_Territory_And_Owner history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Oct 30, 2024 (Initial)"

    _Oct 30, 2024, by fpardon-upeo in commit Org state on 2024-10-30 00:44 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record Before Save</b>"]):::startClass
    click START "#general-information" "211912976"
    
    Get_Territory[("🔍 <em></em><br/>Get Territory")]:::recordLookups
    click Get_Territory "#get_territory" "3104759947"
    
    Get_User_from_Site_Manager_Code[("🔍 <em></em><br/>Get User from Site Manager Code")]:::recordLookups
    click Get_User_from_Site_Manager_Code "#get_user_from_site_manager_code" "3355077346"
    
    Set_Fields[("🛠️ <em></em><br/>Set Fields")]:::recordUpdates
    click Set_Fields "#set_fields" "2052876439"
    
    Get_Territory --> Set_Fields
    Get_User_from_Site_Manager_Code --> Get_Territory
    Set_Fields --> END_Set_Fields
    START -->  Get_User_from_Site_Manager_Code
    END_Set_Fields(( END )):::endClass
    
    
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
    |Object|ATAK_Project__c|
    |Process Type| Auto Launched Flow|
    |Trigger Type| Record Before Save|
    |Record Trigger Type| Create And Update|
    |Label|[ATAK Project][After-Save][Record-Triggered] Set Territory And Owner|
    |Status|Active|
    |Environments|Default|
    |Interview Label|[ATAK Project][After-Save][Record-Triggered] Populate Van Crew Field {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Get_User_from_Site_Manager_Code](#get_user_from_site_manager_code)|
    |Next Node|[Get_User_from_Site_Manager_Code](#get_user_from_site_manager_code)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Service_Territory__c| Equal To|stringValue: ''<br/>|
    
    
    ## Flow Nodes Details
    
    ### Get_Territory
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|ServiceTerritory|
    |Label|Get Territory|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Set_Fields](#set_fields)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Main_Responsible__c| Equal To|Get_User_from_Site_Manager_Code.Id|
    
    
    
    
    ### Get_User_from_Site_Manager_Code
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|User|
    |Label|Get User from Site Manager Code|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Get_Territory](#get_territory)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|ATAK_Code__c| Equal To|$Record.Site_Manager_Code__c|
    
    
    
    
    ### Set_Fields
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Label|Set Fields|
    |Input Reference|$Record|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |OwnerId|Get_User_from_Site_Manager_Code.Id|
    |Service_Territory__c|Get_Territory.Id|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

