# test history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Dec 23, 2024 (Initial)"

    _Dec 23, 2024, by fpardon-upeo in commit Org state on 2024-12-23 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>Screen Flow</b>"]):::startClass
    click START "#general-information" "2678071010"
    
    Get_Browser_Information("⚡ <em></em><br/>Get Browser Information"):::actionCalls
    click Get_Browser_Information "#get_browser_information" "397215846"
    
    Force_Logout_for_Unauthorized_Access[\"🟰 <em></em><br/>Force Logout for Unauthorized Access"/]:::assignments
    click Force_Logout_for_Unauthorized_Access "#force_logout_for_unauthorized_access" "3751768036"
    
    Forced_Logout{"🔀 <em></em><br/>Forced Logout ?"}:::decisions
    click Forced_Logout "#forced_logout" "3468942549"
    
    Get_User_Information[("🔍 <em></em><br/>Get User Information")]:::recordLookups
    click Get_User_Information "#get_user_information" "3904744117"
    
    Force_Logout(["💻 <em></em><br/>Force Logout"]):::screens
    click Force_Logout "#force_logout" "1686755026"
    
    logout_screen(["💻 <em></em><br/>logout screen"]):::screens
    click logout_screen "#logout_screen" "40092859"
    
    tittre(["💻 <em></em><br/>tittre"]):::screens
    click tittre "#tittre" "889418800"
    
    Get_Browser_Information --> tittre
    Force_Logout_for_Unauthorized_Access --> logout_screen
    Forced_Logout --> |"Yes"| Force_Logout
    Get_User_Information --> Forced_Logout
    Force_Logout --> Force_Logout_for_Unauthorized_Access
    logout_screen --> END_logout_screen
    tittre --> Get_User_Information
    START -->  Get_Browser_Information
    END_logout_screen(( END )):::endClass
    
    
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
    |Process Type| Flow|
    |Label|test|
    |Status|Obsolete|
    |Environments|Default|
    |Interview Label|test {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Get_Browser_Information](#get_browser_information)|
    |Next Node|[Get_Browser_Information](#get_browser_information)|
    
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
    |:-- |:--:|:--:|:--:|:--:|:--: |
    |formFactor|String|⬜|✅|⬜|<!-- -->|
    |iOS|Boolean|⬜|✅|⬜|<!-- -->|
    |LoginFlow_ForceLogout|String|⬜|✅|⬜|<!-- -->|
    |LoginFlow_Platform|String|⬜|✅|⬜|<!-- -->|
    |LoginFlow_UserAgent|String|⬜|✅|⬜|<!-- -->|
    
    
    ## Flow Nodes Details
    
    ### Get_Browser_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Action Call|
    |Label|Get Browser Information|
    |Action Type|Component|
    |Action Name|c:GetBrowserInformation|
    |Flow Transaction Model|CurrentTransaction|
    |Name Segment|c:GetBrowserInformation|
    |Offset|0|
    |Output Parameters|assignToReference: formFactor<br/>name: formFactor<br/>|
    |Version Segment|1|
    |Connector|[tittre](#tittre)|
    
    
    ### Force_Logout_for_Unauthorized_Access
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Force Logout for Unauthorized Access|
    |Connector|[logout_screen](#logout_screen)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |LoginFlow_ForceLogout| Assign|✅|
    
    
    
    
    ### Forced_Logout
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Forced Logout ?|
    |Default Connector|[Force_Logout](#force_logout)|
    |Default Connector Label|Yes|
    
    
    #### Rule No (No)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|formFactor| Not Equal To|DESKTOP|
    |2|Get_User_Information.Restrict_Desktop_Access__c| Not Equal To|⬜|
    
    
    
    
    ### Get_User_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|User|
    |Label|Get User Information|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Forced_Logout](#forced_logout)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|$User.Id|
    |2|IsActive| Equal To|✅|
    
    
    
    
    ### Force_Logout
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Screen|
    |Label|Force Logout|
    |Allow Back|⬜|
    |Allow Finish|✅|
    |Allow Pause|⬜|
    |Next Or Finish Button Label|Logout|
    |Show Footer|✅|
    |Show Header|⬜|
    |Connector|[Force_Logout_for_Unauthorized_Access](#force_logout_for_unauthorized_access)|
    
    
    #### ErrorMessage
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Text|<p style="text-align: center;"><u>Insufficient privileges</u>: you do not have the required permissions to access the desktop version of Salesforce.</p>|
    |Field Type| Display Text|
    
    
    
    
    ### logout_screen
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Screen|
    |Label|logout screen|
    |Allow Back|⬜|
    |Allow Finish|✅|
    |Allow Pause|⬜|
    |Next Or Finish Button Label|Logout|
    |Show Footer|✅|
    |Show Header|⬜|
    
    
    ### tittre
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Screen|
    |Label|[tittre](#tittre)|
    |Allow Back|✅|
    |Allow Finish|✅|
    |Allow Pause|✅|
    |Show Footer|✅|
    |Show Header|✅|
    |Connector|[Get_User_Information](#get_user_information)|
    
    
    #### msgfactor
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Text|<p>{!formFactor}</p><p><br></p><p>{!iOS}</p>|
    |Field Type| Display Text|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

