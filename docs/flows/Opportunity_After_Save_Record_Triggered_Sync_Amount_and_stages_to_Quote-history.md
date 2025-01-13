# Opportunity_After_Save_Record_Triggered_Sync_Amount_and_stages_to_Quote history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Dec 24, 2024"

    _Dec 24, 2024, by fpardon-upeo in commit Org state on 2024-12-24 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    <span style="background-color: #ff7f7f; color: black;"><i>🟥# [Opportunity][After-Save][Record-Triggered] Sync Amount and stages to Quote</i></span>
    
    <span style="background-color: #a6e22e; color: black;"><b>🟩# [Opportunity][After-Save][Record-Triggered] Sync Contact,Amount and stages to Quote</b></span>
    
    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["<b>START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b></b>"]):::startClassChanged
    
    
    click START "#general-information" "1657010413"
    
    
    
    Contact_changed{"<b>🔀 <em></em><br/>Contact changed?</b>"}:::decisionsAdded
    click Contact_changed "#contact_changed" "3200572552"
    
    
    Quote_Found{"🔀 <em></em><br/>Quote Found?"}:::decisions
    click Quote_Found "#quote_found" "2612636205"
    
    Status{"<b>🔀 <em></em><br/>Status</b>"}:::decisionsChanged
    
    
    click Status "#status" "2329185142"
    
    
    Get_Synced_Quote[("🔍 <em></em><br/>Get Synced Quote")]:::recordLookups
    click Get_Synced_Quote "#get_synced_quote" "1298821066"
    
    
    Add_Contact_to_Quote[("<b>🛠️ <em></em><br/>Add Contact to Quote</b>")]:::recordUpdatesAdded
    click Add_Contact_to_Quote "#add_contact_to_quote" "1235784476"
    
    
    Update_Quote_to_Accepted[("<b>🛠️ <em></em><br/>Update Quote to Accepted</b>")]:::recordUpdatesChanged
    
    
    click Update_Quote_to_Accepted "#update_quote_to_accepted" "3568210785"
    
    
    Update_Quote_to_Denied[("<b>🛠️ <em></em><br/>Update Quote to Denied</b>")]:::recordUpdatesChanged
    
    
    click Update_Quote_to_Denied "#update_quote_to_denied" "1009977618"
    
    
    Update_Quote_to_Draft[("<b>🛠️ <em></em><br/>Update Quote to Draft</b>")]:::recordUpdatesChanged
    
    
    click Update_Quote_to_Draft "#update_quote_to_draft" "1908298646"
    
    
    Update_Quote_to_Presented[("<b>🛠️ <em></em><br/>Update Quote to Presented</b>")]:::recordUpdatesChanged
    
    
    click Update_Quote_to_Presented "#update_quote_to_presented" "1628262988"
    
    
    
    Contact_changed ==> |"🟩<b>Yes Contact changed</b>"| Add_Contact_to_Quote
    Contact_changed ==> |"🟩<b>No</b>"| END_Contact_changed
    
    Quote_Found --> |"Yes"| Status
    Quote_Found --> |"No"| END_Quote_Found
    Status --> |"To Pricing"| Update_Quote_to_Draft
    Status --> |"To Presented"| Update_Quote_to_Presented
    Status --> |"To Accepted"| Update_Quote_to_Accepted
    Status --> |"To Denied"| Update_Quote_to_Denied
    
    Status -.-> |"🟥<i>Default Outcome</i>"| END_Status
    
    Status ==> |"🟩<b>Default Outcome</b>"| Contact_changed
    
    Get_Synced_Quote --> Quote_Found
    
    Update_Quote_to_Accepted -.-> END_Update_Quote_to_Accepted
    Update_Quote_to_Denied -.-> END_Update_Quote_to_Denied
    Update_Quote_to_Draft -.-> END_Update_Quote_to_Draft
    Update_Quote_to_Presented -.-> END_Update_Quote_to_Presented
    
    Add_Contact_to_Quote ==> END_Add_Contact_to_Quote
    Update_Quote_to_Accepted ==> Contact_changed
    Update_Quote_to_Denied ==> Contact_changed
    Update_Quote_to_Draft ==> Contact_changed
    Update_Quote_to_Presented ==> Contact_changed
    
    START -->  Get_Synced_Quote
    
    END_Contact_changed(( END )):::endClassAdded
    
    END_Quote_Found(( END )):::endClass
    
    END_Status(( END )):::endClassRemoved
    END_Update_Quote_to_Accepted(( END )):::endClassRemoved
    END_Update_Quote_to_Denied(( END )):::endClassRemoved
    END_Update_Quote_to_Draft(( END )):::endClassRemoved
    END_Update_Quote_to_Presented(( END )):::endClassRemoved
    
    END_Add_Contact_to_Quote(( END )):::endClassAdded
    
    
    
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
      
    linkStyle 0,1,9,15,16,17,18,19 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 8,11,12,13,14 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    <!-- Flow description -->
    
    ## General Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Opportunity][After-Save][Record-Triggered] Sync Amount and stages to Quote</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Opportunity][After-Save][Record-Triggered] Sync Contact,Amount and stages to Quote</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Description</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Keeps quote in sync when opportunity amounts are changed</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Description</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Keeps quote in sync when opportunity amounts or contact is changed</b></span>|
    
    #### 🟥Filters (logic: **1 OR  (2 AND (3 OR 4 OR 5 OR 6 OR 7 OR 8 OR 9 OR 10))**)
    
    #### 🟩Filters (logic: **1 OR  (2 AND (3 OR 4 OR 5 OR 6 OR 7 OR 8 OR 9 OR 10)) OR (11 AND 12)**)
    
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>11</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Main_Contact__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Changed</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>12</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Main_Contact__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    
    ## Flow Nodes Details
    
    
    ### 🟩Contact_changed
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Contact changed?</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>No</b></span>|
    
    #### 🟩Rule Yes_Contact_changed (Yes Contact changed)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Add_Contact_to_Quote](#add_contact_to_quote)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record__Prior.Main_Contact__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Not Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Main_Contact__c</b></span>|
    
    ### Status
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Contact_changed](#contact_changed)</b></span>|
    
    ### 🟩Add_Contact_to_Quote
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Update</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Quote</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Add Contact to Quote</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Synced_Quote.Id</b></span>|
    
    #### 🟩Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>ContactId</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Main_Contact__c</b></span>|
    
    ### Update_Quote_to_Accepted
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Contact_changed](#contact_changed)</b></span>|
    
    ### Update_Quote_to_Denied
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Contact_changed](#contact_changed)</b></span>|
    
    ### Update_Quote_to_Draft
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Contact_changed](#contact_changed)</b></span>|
    
    ### Update_Quote_to_Presented
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Contact_changed](#contact_changed)</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Dec 10, 2024"

    _Dec 10, 2024, by fpardon-upeo in commit Org state on 2024-12-10 00:26 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "1435106702"
    
    Quote_Found{"🔀 <em></em><br/>Quote Found?"}:::decisions
    click Quote_Found "#quote_found" "2612636205"
    
    Status{"<b>🔀 <em></em><br/>Status</b>"}:::decisionsChanged
    
    
    click Status "#status" "2078131733"
    
    
    Get_Synced_Quote[("🔍 <em></em><br/>Get Synced Quote")]:::recordLookups
    click Get_Synced_Quote "#get_synced_quote" "1298821066"
    
    Update_Quote_to_Accepted[("🛠️ <em></em><br/>Update Quote to Accepted")]:::recordUpdates
    click Update_Quote_to_Accepted "#update_quote_to_accepted" "958942517"
    
    Update_Quote_to_Denied[("🛠️ <em></em><br/>Update Quote to Denied")]:::recordUpdates
    click Update_Quote_to_Denied "#update_quote_to_denied" "3958151075"
    
    Update_Quote_to_Draft[("<b>🛠️ <em></em><br/>Update Quote to Draft</b>")]:::recordUpdatesChanged
    
    
    click Update_Quote_to_Draft "#update_quote_to_draft" "1870751152"
    
    
    Update_Quote_to_Presented[("🛠️ <em></em><br/>Update Quote to Presented")]:::recordUpdates
    click Update_Quote_to_Presented "#update_quote_to_presented" "497563539"
    
    Quote_Found --> |"Yes"| Status
    Quote_Found --> |"No"| END_Quote_Found
    
    Status -.-> |"🟥<i>To Draft</i>"| Update_Quote_to_Draft
    
    Status ==> |"🟩<b>To Pricing</b>"| Update_Quote_to_Draft
    
    Status --> |"To Presented"| Update_Quote_to_Presented
    Status --> |"To Accepted"| Update_Quote_to_Accepted
    Status --> |"To Denied"| Update_Quote_to_Denied
    Status --> |"Default Outcome"| END_Status
    Get_Synced_Quote --> Quote_Found
    Update_Quote_to_Accepted --> END_Update_Quote_to_Accepted
    Update_Quote_to_Denied --> END_Update_Quote_to_Denied
    Update_Quote_to_Draft --> END_Update_Quote_to_Draft
    Update_Quote_to_Presented --> END_Update_Quote_to_Presented
    START -->  Get_Synced_Quote
    END_Quote_Found(( END )):::endClass
    END_Status(( END )):::endClass
    END_Update_Quote_to_Accepted(( END )):::endClass
    END_Update_Quote_to_Denied(( END )):::endClass
    END_Update_Quote_to_Draft(( END )):::endClass
    END_Update_Quote_to_Presented(( END )):::endClass
    
    
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
      
    linkStyle 3 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 2 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    <!-- Flow description -->
    
    ## Flow Nodes Details
    
    ### Status
    
    #### 🟥Rule To_Draft (To Draft)
    
    #### 🟩Rule To_Pricing (To Pricing)
    
    
    ### Update_Quote_to_Draft
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>[Status](#status)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Draft</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>[Status](#status)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Pricing</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

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
    click START "#general-information" "1435106702"
    
    Quote_Found{"🔀 <em></em><br/>Quote Found?"}:::decisions
    click Quote_Found "#quote_found" "2612636205"
    
    Status{"🔀 <em></em><br/>Status"}:::decisions
    click Status "#status" "3603588043"
    
    Get_Synced_Quote[("🔍 <em></em><br/>Get Synced Quote")]:::recordLookups
    click Get_Synced_Quote "#get_synced_quote" "1298821066"
    
    Update_Quote_to_Accepted[("🛠️ <em></em><br/>Update Quote to Accepted")]:::recordUpdates
    click Update_Quote_to_Accepted "#update_quote_to_accepted" "958942517"
    
    Update_Quote_to_Denied[("🛠️ <em></em><br/>Update Quote to Denied")]:::recordUpdates
    click Update_Quote_to_Denied "#update_quote_to_denied" "3958151075"
    
    Update_Quote_to_Draft[("🛠️ <em></em><br/>Update Quote to Draft")]:::recordUpdates
    click Update_Quote_to_Draft "#update_quote_to_draft" "2144086580"
    
    Update_Quote_to_Presented[("🛠️ <em></em><br/>Update Quote to Presented")]:::recordUpdates
    click Update_Quote_to_Presented "#update_quote_to_presented" "497563539"
    
    Quote_Found --> |"Yes"| Status
    Quote_Found --> |"No"| END_Quote_Found
    Status --> |"To Draft"| Update_Quote_to_Draft
    Status --> |"To Presented"| Update_Quote_to_Presented
    Status --> |"To Accepted"| Update_Quote_to_Accepted
    Status --> |"To Denied"| Update_Quote_to_Denied
    Status --> |"Default Outcome"| END_Status
    Get_Synced_Quote --> Quote_Found
    Update_Quote_to_Accepted --> END_Update_Quote_to_Accepted
    Update_Quote_to_Denied --> END_Update_Quote_to_Denied
    Update_Quote_to_Draft --> END_Update_Quote_to_Draft
    Update_Quote_to_Presented --> END_Update_Quote_to_Presented
    START -->  Get_Synced_Quote
    END_Quote_Found(( END )):::endClass
    END_Status(( END )):::endClass
    END_Update_Quote_to_Accepted(( END )):::endClass
    END_Update_Quote_to_Denied(( END )):::endClass
    END_Update_Quote_to_Draft(( END )):::endClass
    END_Update_Quote_to_Presented(( END )):::endClass
    
    
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
    |Object|Opportunity|
    |Process Type| Auto Launched Flow|
    |Trigger Type| Record After Save|
    |Record Trigger Type| Create And Update|
    |Label|[Opportunity][After-Save][Record-Triggered] Sync Amount and stages to Quote|
    |Status|Active|
    |Description|Keeps quote in sync when opportunity amounts are changed|
    |Environments|Default|
    |Interview Label|[Opportunity][After-Save][Record-Triggered] Sync Amount and stages to Quote {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Get_Synced_Quote](#get_synced_quote)|
    |Next Node|[Get_Synced_Quote](#get_synced_quote)|
    
    
    #### Filters (logic: **1 OR  (2 AND (3 OR 4 OR 5 OR 6 OR 7 OR 8 OR 9 OR 10))**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Amount__c| Is Changed|✅|
    |2|StageName| Is Changed|✅|
    |3|StageName| Equal To|New|
    |4|StageName| Equal To|Evaluation|
    |5|StageName| Equal To|Pricing|
    |6|StageName| Equal To|Quote Sent|
    |7|StageName| Equal To|Negotiation|
    |8|StageName| Equal To|BAFO|
    |9|StageName| Equal To|Closed Won|
    |10|StageName| Equal To|Closed Lost|
    
    
    ## Flow Nodes Details
    
    ### Quote_Found
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Quote Found?|
    |Description|is there a synced quote|
    |Default Connector Label|No|
    
    
    #### Rule Yes (Yes)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Status](#status)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|[Get_Synced_Quote](#get_synced_quote)| Is Null|⬜|
    
    
    
    
    ### Status
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|[Status](#status)|
    |Description|to which status the quote needs to be updated?|
    |Default Connector Label|Default Outcome|
    
    
    #### Rule To_Draft (To Draft)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Update_Quote_to_Draft](#update_quote_to_draft)|
    |Condition Logic|or|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.StageName| Equal To|New|
    |2|$Record.StageName| Equal To|Evaluation|
    |3|$Record.StageName| Equal To|Pricing|
    
    
    
    
    #### Rule To_Presented (To Presented)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Update_Quote_to_Presented](#update_quote_to_presented)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.StageName| Equal To|Quote Sent|
    
    
    
    
    #### Rule To_Accepted (To Accepted)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Update_Quote_to_Accepted](#update_quote_to_accepted)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.StageName| Equal To|Closed Won|
    
    
    
    
    #### Rule To_Denied (To Denied)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Update_Quote_to_Denied](#update_quote_to_denied)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.StageName| Equal To|Closed Lost|
    
    
    
    
    ### Get_Synced_Quote
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|Quote|
    |Label|Get Synced Quote|
    |Description|Get the synced quote to update|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Queried Fields|- Id<br/>- Status<br/>- Amount__c<br/>|
    |Store Output Automatically|✅|
    |Connector|[Quote_Found](#quote_found)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|OpportunityId| Equal To|$Record.Id|
    |2|IsSyncing| Equal To|✅|
    
    
    
    
    ### Update_Quote_to_Accepted
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Object|Quote|
    |Label|Update Quote to Accepted|
    |Description|Update quote status + amount|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|Get_Synced_Quote.Id|
    
    
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Amount__c|$Record.Amount__c|
    |[Status](#status)|Accepted|
    
    
    
    
    ### Update_Quote_to_Denied
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Object|Quote|
    |Label|Update Quote to Denied|
    |Description|Update quote status + amount|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|Get_Synced_Quote.Id|
    
    
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Amount__c|$Record.Amount__c|
    |[Status](#status)|Denied|
    
    
    
    
    ### Update_Quote_to_Draft
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Object|Quote|
    |Label|Update Quote to Draft|
    |Description|Update quote status + amount|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|Get_Synced_Quote.Id|
    
    
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Amount__c|$Record.Amount__c|
    |[Status](#status)|Draft|
    
    
    
    
    ### Update_Quote_to_Presented
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Object|Quote|
    |Label|Update Quote to Presented|
    |Description|Update quote status + amount|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|Get_Synced_Quote.Id|
    
    
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Amount__c|$Record.Amount__c|
    |[Status](#status)|Presented|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

