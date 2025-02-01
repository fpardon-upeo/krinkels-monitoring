# Quote_After_Save_Record_Triggered_Sync_Amount_and_stages_to_Opportunity history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Jan 31, 2025"

    _Jan 31, 2025, by fpardon-upeo in commit Org state on 2025-01-31 00:27 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "1176169675"
    
    Contact_on_Opportunity{"🔀 <em></em><br/>Contact on Opportunity?"}:::decisions
    click Contact_on_Opportunity "#contact_on_opportunity" "397628955"
    
    Opportunity_Found{"🔀 <em></em><br/>Opportunity Found"}:::decisions
    click Opportunity_Found "#opportunity_found" "3508567454"
    
    Status{"🔀 <em></em><br/>Status"}:::decisions
    click Status "#status" "1025549720"
    
    Get_linked_Opportunity[("🔍 <em></em><br/>Get linked Opportunity")]:::recordLookups
    click Get_linked_Opportunity "#get_linked_opportunity" "2848942797"
    
    Add_Contact_to_Quote[("🛠️ <em></em><br/>Add Contact to Quote")]:::recordUpdates
    click Add_Contact_to_Quote "#add_contact_to_quote" "2968093084"
    
    Update_Opportunity[("<b>🛠️ <em></em><br/>Update Opportunity to Quote Send</b>")]:::recordUpdatesChanged
    
    
    click Update_Opportunity "#update_opportunity" "3146806877"
    
    
    Update_Opportunity_ClsoedLost[("🛠️ <em></em><br/>Update Opportunity ClosedLost")]:::recordUpdates
    click Update_Opportunity_ClsoedLost "#update_opportunity_clsoedlost" "2864149144"
    
    Update_Opportunity_OnlyAmount[("🛠️ <em></em><br/>Update Opportunity Only Amount")]:::recordUpdates
    click Update_Opportunity_OnlyAmount "#update_opportunity_onlyamount" "3426289215"
    
    Update_Opportunity_to_ClosedWon[("🛠️ <em></em><br/>Update Opportunity to ClosedWon")]:::recordUpdates
    click Update_Opportunity_to_ClosedWon "#update_opportunity_to_closedwon" "3641345003"
    
    Contact_on_Opportunity --> |"Yes"| Add_Contact_to_Quote
    Contact_on_Opportunity --> |"No"| Status
    Opportunity_Found --> |"Yes Opportunity found"| Contact_on_Opportunity
    Opportunity_Found --> |"No"| END_Opportunity_Found
    Status --> |"To Quote Send"| Update_Opportunity
    Status --> |"To Closed Won"| Update_Opportunity_to_ClosedWon
    Status --> |"To Closed Lost"| Update_Opportunity_ClsoedLost
    Status --> |"Default Outcome"| Update_Opportunity_OnlyAmount
    Get_linked_Opportunity --> Opportunity_Found
    Add_Contact_to_Quote --> Status
    Update_Opportunity --> END_Update_Opportunity
    Update_Opportunity_ClsoedLost --> END_Update_Opportunity_ClsoedLost
    Update_Opportunity_OnlyAmount --> END_Update_Opportunity_OnlyAmount
    Update_Opportunity_to_ClosedWon --> END_Update_Opportunity_to_ClosedWon
    START -->  Get_linked_Opportunity
    END_Opportunity_Found(( END )):::endClass
    END_Update_Opportunity(( END )):::endClass
    END_Update_Opportunity_ClsoedLost(( END )):::endClass
    END_Update_Opportunity_OnlyAmount(( END )):::endClass
    END_Update_Opportunity_to_ClosedWon(( END )):::endClass
    
    
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
    
    ### Update_Opportunity
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Object|Opportunity|
    |Label|Update Opportunity to Quote Send|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Amount__c|$Record.Amount__c|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>StageName</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Quote Sent</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>StageName</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Submitted</b></span>|
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Dec 24, 2024"

    _Dec 24, 2024, by fpardon-upeo in commit Org state on 2024-12-24 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "1176169675"
    
    
    Contact_on_Opportunity{"<b>🔀 <em></em><br/>Contact on Opportunity?</b>"}:::decisionsAdded
    click Contact_on_Opportunity "#contact_on_opportunity" "397628955"
    
    Opportunity_Found{"<b>🔀 <em></em><br/>Opportunity Found</b>"}:::decisionsAdded
    click Opportunity_Found "#opportunity_found" "3508567454"
    
    
    Status{"🔀 <em></em><br/>Status"}:::decisions
    click Status "#status" "1025549720"
    
    
    Get_linked_Opportunity[("<b>🔍 <em></em><br/>Get linked Opportunity</b>")]:::recordLookupsAdded
    click Get_linked_Opportunity "#get_linked_opportunity" "2848942797"
    
    Add_Contact_to_Quote[("<b>🛠️ <em></em><br/>Add Contact to Quote</b>")]:::recordUpdatesAdded
    click Add_Contact_to_Quote "#add_contact_to_quote" "2968093084"
    
    
    Update_Opportunity[("🛠️ <em></em><br/>Update Opportunity to Quote Send")]:::recordUpdates
    click Update_Opportunity "#update_opportunity" "1354659035"
    
    Update_Opportunity_ClsoedLost[("🛠️ <em></em><br/>Update Opportunity ClosedLost")]:::recordUpdates
    click Update_Opportunity_ClsoedLost "#update_opportunity_clsoedlost" "2864149144"
    
    Update_Opportunity_OnlyAmount[("🛠️ <em></em><br/>Update Opportunity Only Amount")]:::recordUpdates
    click Update_Opportunity_OnlyAmount "#update_opportunity_onlyamount" "3426289215"
    
    Update_Opportunity_to_ClosedWon[("🛠️ <em></em><br/>Update Opportunity to ClosedWon")]:::recordUpdates
    click Update_Opportunity_to_ClosedWon "#update_opportunity_to_closedwon" "3641345003"
    
    
    Contact_on_Opportunity ==> |"🟩<b>Yes</b>"| Add_Contact_to_Quote
    Contact_on_Opportunity ==> |"🟩<b>No</b>"| Status
    Opportunity_Found ==> |"🟩<b>Yes Opportunity found</b>"| Contact_on_Opportunity
    Opportunity_Found ==> |"🟩<b>No</b>"| END_Opportunity_Found
    
    Status --> |"To Quote Send"| Update_Opportunity
    Status --> |"To Closed Won"| Update_Opportunity_to_ClosedWon
    Status --> |"To Closed Lost"| Update_Opportunity_ClsoedLost
    Status --> |"Default Outcome"| Update_Opportunity_OnlyAmount
    
    Get_linked_Opportunity ==> Opportunity_Found
    Add_Contact_to_Quote ==> Status
    
    Update_Opportunity --> END_Update_Opportunity
    Update_Opportunity_ClsoedLost --> END_Update_Opportunity_ClsoedLost
    Update_Opportunity_OnlyAmount --> END_Update_Opportunity_OnlyAmount
    Update_Opportunity_to_ClosedWon --> END_Update_Opportunity_to_ClosedWon
    
    START -.->  Status
    
    START ==>  Get_linked_Opportunity
    END_Opportunity_Found(( END )):::endClassAdded
    
    END_Update_Opportunity(( END )):::endClass
    END_Update_Opportunity_ClsoedLost(( END )):::endClass
    END_Update_Opportunity_OnlyAmount(( END )):::endClass
    END_Update_Opportunity_to_ClosedWon(( END )):::endClass
    
    
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
      
    linkStyle 0,1,2,3,8,9,15 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 14 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    <!-- Flow description -->
    
    ## General Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Object|Quote|
    |Process Type| Auto Launched Flow|
    |Trigger Type| Record After Save|
    |Record Trigger Type| Create And Update|
    |Label|[Quote][After-Save][Record-Triggered] Sync Amount and stages to Opportunity|
    |Status|Active|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Filter Formula</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!$Record.IsSyncing} = True<br/>&&<br/>(<br/>ISNEW()<br/></i></span>|<span style="background-color: #ff7f7f; color: black;"><i><br/>(<br/>ISCHANGED({!$Record.Amount__c})<br/></i></span>|<span style="background-color: #ff7f7f; color: black;"><i><br/>ISCHANGED({!$Record.Status})<br/>)<br/>)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Filter Formula</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!$Record.IsSyncing} = True<br/>&&<br/>(<br/>ISNEW()<br/></b></span>|<span style="background-color: #a6e22e; color: black;"><b><br/>(<br/>ISCHANGED({!$Record.Amount__c})<br/></b></span>|<span style="background-color: #a6e22e; color: black;"><b><br/>ISCHANGED({!$Record.Status})<br/></b></span>|<span style="background-color: #a6e22e; color: black;"><b> <br/>ISBLANK({!$Record.ContactId})<br/>)<br/>)</b></span>|
    |Description|Keeps opportunity in sync when opportunity amounts are changed|
    |Environments|Default|
    |Interview Label|[Quote][After-Save][Record-Triggered] Sync Amount and stages to Opportunity {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Status](#status)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Next Node</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Status](#status)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_linked_Opportunity](#get_linked_opportunity)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Next Node</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_linked_Opportunity](#get_linked_opportunity)</b></span>|
    
    
    
    ## Flow Nodes Details
    
    
    ### 🟩Contact_on_Opportunity
    
    |🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Contact on Opportunity?</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Status](#status)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>No</b></span>|
    
    
    #### 🟩Rule Yes (Yes)
    
    |🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Add_Contact_to_Quote](#add_contact_to_quote)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    
    
    
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Left Value Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Right Value</b></span>|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_linked_Opportunity.Main_Contact__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    
    
    
    ### 🟩Opportunity_Found
    
    |🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Opportunity Found</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>No</b></span>|
    
    
    #### 🟩Rule Yes_Opportunity_found (Yes Opportunity found)
    
    |🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Contact_on_Opportunity](#contact_on_opportunity)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    
    
    
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Left Value Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Right Value</b></span>|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_linked_Opportunity](#get_linked_opportunity)</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    
    
    
    
    ### 🟩Get_linked_Opportunity
    
    |🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Opportunity</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get linked Opportunity</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Opportunity_Found](#opportunity_found)</b></span>|
    
    
    #### 🟩Filters (logic: **and**)
    
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Filter Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.OpportunityId</b></span>|
    
    
    
    
    ### 🟩Add_Contact_to_Quote
    
    |🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Update</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Add Contact to Quote</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Input Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Status](#status)</b></span>|
    
    
    #### 🟩Input Assignments
    
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>ContactId</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_linked_Opportunity.Main_Contact__c</b></span>|
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Dec 7, 2024"

    _Dec 7, 2024, by fpardon-upeo in commit Org state on 2024-12-07 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "1176169675"
    
    Status{"🔀 <em></em><br/>Status"}:::decisions
    click Status "#status" "1025549720"
    
    Update_Opportunity[("🛠️ <em></em><br/>Update Opportunity to Quote Send")]:::recordUpdates
    click Update_Opportunity "#update_opportunity" "1354659035"
    
    Update_Opportunity_ClsoedLost[("🛠️ <em></em><br/>Update Opportunity ClosedLost")]:::recordUpdates
    click Update_Opportunity_ClsoedLost "#update_opportunity_clsoedlost" "2864149144"
    
    Update_Opportunity_OnlyAmount[("🛠️ <em></em><br/>Update Opportunity Only Amount")]:::recordUpdates
    click Update_Opportunity_OnlyAmount "#update_opportunity_onlyamount" "3426289215"
    
    Update_Opportunity_to_ClosedWon[("🛠️ <em></em><br/>Update Opportunity to ClosedWon")]:::recordUpdates
    click Update_Opportunity_to_ClosedWon "#update_opportunity_to_closedwon" "3641345003"
    
    Status --> |"To Quote Send"| Update_Opportunity
    Status --> |"To Closed Won"| Update_Opportunity_to_ClosedWon
    Status --> |"To Closed Lost"| Update_Opportunity_ClsoedLost
    Status --> |"Default Outcome"| Update_Opportunity_OnlyAmount
    Update_Opportunity --> END_Update_Opportunity
    Update_Opportunity_ClsoedLost --> END_Update_Opportunity_ClsoedLost
    Update_Opportunity_OnlyAmount --> END_Update_Opportunity_OnlyAmount
    Update_Opportunity_to_ClosedWon --> END_Update_Opportunity_to_ClosedWon
    START -->  Status
    END_Update_Opportunity(( END )):::endClass
    END_Update_Opportunity_ClsoedLost(( END )):::endClass
    END_Update_Opportunity_OnlyAmount(( END )):::endClass
    END_Update_Opportunity_to_ClosedWon(( END )):::endClass
    
    
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
    
    ## General Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Object|Quote|
    |Process Type| Auto Launched Flow|
    |Trigger Type| Record After Save|
    |Record Trigger Type| Create And Update|
    |Label|[Quote][After-Save][Record-Triggered] Sync Amount and stages to Opportunity|
    |Status|Active|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Filter Formula</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!$Record.IsSyncing} = True<br/>&&<br/>(ISNEW()<br/></i></span>|<span style="background-color: #ff7f7f; color: black;"><i><br/>(ISCHANGED({!$Record.Amount__c})</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>ISCHANGED({!$Record.Status})))</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Filter Formula</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!$Record.IsSyncing} = True<br/>&&<br/>(<br/>ISNEW()<br/></b></span>|<span style="background-color: #a6e22e; color: black;"><b><br/>(<br/>ISCHANGED({!$Record.Amount__c})<br/></b></span>|<span style="background-color: #a6e22e; color: black;"><b><br/>ISCHANGED({!$Record.Status})<br/>)<br/>)</b></span>|
    |Description|Keeps opportunity in sync when opportunity amounts are changed|
    |Environments|Default|
    |Interview Label|[Quote][After-Save][Record-Triggered] Sync Amount and stages to Opportunity {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Status](#status)|
    |Next Node|[Status](#status)|
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Dec 4, 2024 (Initial)"

    _Dec 4, 2024, by fpardon-upeo in commit Org state on 2024-12-04 00:26 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram [(_View History_)](Quote_After_Save_Record_Triggered_Sync_Amount_and_stages_to_Opportunity-history.md)
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "1176169675"
    
    Status{"🔀 <em></em><br/>Status"}:::decisions
    click Status "#status" "1025549720"
    
    Update_Opportunity[("🛠️ <em></em><br/>Update Opportunity to Quote Send")]:::recordUpdates
    click Update_Opportunity "#update_opportunity" "1354659035"
    
    Update_Opportunity_ClsoedLost[("🛠️ <em></em><br/>Update Opportunity ClosedLost")]:::recordUpdates
    click Update_Opportunity_ClsoedLost "#update_opportunity_clsoedlost" "2864149144"
    
    Update_Opportunity_OnlyAmount[("🛠️ <em></em><br/>Update Opportunity Only Amount")]:::recordUpdates
    click Update_Opportunity_OnlyAmount "#update_opportunity_onlyamount" "3426289215"
    
    Update_Opportunity_to_ClosedWon[("🛠️ <em></em><br/>Update Opportunity to ClosedWon")]:::recordUpdates
    click Update_Opportunity_to_ClosedWon "#update_opportunity_to_closedwon" "3641345003"
    
    Status --> |"To Quote Send"| Update_Opportunity
    Status --> |"To Closed Won"| Update_Opportunity_to_ClosedWon
    Status --> |"To Closed Lost"| Update_Opportunity_ClsoedLost
    Status --> |"Default Outcome"| Update_Opportunity_OnlyAmount
    Update_Opportunity --> END_Update_Opportunity
    Update_Opportunity_ClsoedLost --> END_Update_Opportunity_ClsoedLost
    Update_Opportunity_OnlyAmount --> END_Update_Opportunity_OnlyAmount
    Update_Opportunity_to_ClosedWon --> END_Update_Opportunity_to_ClosedWon
    START -->  Status
    END_Update_Opportunity(( END )):::endClass
    END_Update_Opportunity_ClsoedLost(( END )):::endClass
    END_Update_Opportunity_OnlyAmount(( END )):::endClass
    END_Update_Opportunity_to_ClosedWon(( END )):::endClass
    
    
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
    |Object|Quote|
    |Process Type| Auto Launched Flow|
    |Trigger Type| Record After Save|
    |Record Trigger Type| Create And Update|
    |Label|[Quote][After-Save][Record-Triggered] Sync Amount and stages to Opportunity|
    |Status|Active|
    |Filter Formula|{!$Record.IsSyncing} = True<br/>&&<br/>(ISNEW()<br/>||<br/>(ISCHANGED({!$Record.Amount__c})||ISCHANGED({!$Record.Status})))|
    |Description|Keeps opportunity in sync when opportunity amounts are changed|
    |Environments|Default|
    |Interview Label|[Quote][After-Save][Record-Triggered] Sync Amount and stages to Opportunity {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Status](#status)|
    |Next Node|[Status](#status)|
    
    
    ## Flow Nodes Details
    
    ### Status
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|[Status](#status)|
    |Description|to chich status the oppty must go?|
    |Default Connector|[Update_Opportunity_OnlyAmount](#update_opportunity_onlyamount)|
    |Default Connector Label|Default Outcome|
    
    
    #### Rule To_Quote_Send (To Quote Send)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Update_Opportunity](#update_opportunity)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.Status| Equal To|Presented|
    
    
    
    
    #### Rule To_Closed_Won (To Closed Won)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Update_Opportunity_to_ClosedWon](#update_opportunity_to_closedwon)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.Status| Equal To|Accepted|
    
    
    
    
    #### Rule To_Closed_Lost (To Closed Lost)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Update_Opportunity_ClsoedLost](#update_opportunity_clsoedlost)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.Status| Equal To|Denied|
    
    
    
    
    ### Update_Opportunity
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Object|Opportunity|
    |Label|Update Opportunity to Quote Send|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|$Record.OpportunityId|
    
    
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Amount__c|$Record.Amount__c|
    |StageName|Quote Sent|
    
    
    
    
    ### Update_Opportunity_ClsoedLost
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Object|Opportunity|
    |Label|Update Opportunity ClosedLost|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|$Record.OpportunityId|
    
    
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Amount__c|$Record.Amount__c|
    |StageName|Closed Lost|
    
    
    
    
    ### Update_Opportunity_OnlyAmount
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Object|Opportunity|
    |Label|Update Opportunity Only Amount|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|$Record.OpportunityId|
    
    
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Amount__c|$Record.Amount__c|
    
    
    
    
    ### Update_Opportunity_to_ClosedWon
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Object|Opportunity|
    |Label|Update Opportunity to ClosedWon|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|$Record.OpportunityId|
    
    
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Amount__c|$Record.Amount__c|
    |StageName|Closed Won|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

