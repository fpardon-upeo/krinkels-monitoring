# Account_Screen_Flow_Add_Extra_Work history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Dec 11, 2024"

    _Dec 11, 2024, by fpardon-upeo in commit Org state on 2024-12-11 00:26 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>Screen Flow</b>"]):::startClass
    click START "#general-information" "3354280388"
    
    
    ATAK_Project_Needed{"<b>🔀 <em></em><br/>ATAK Project Needed</b>"}:::decisionsAdded
    click ATAK_Project_Needed "#atak_project_needed" "1021156515"
    
    
    Pricing{"<b>🔀 <em></em><br/>Pricing</b>"}:::decisionsChanged
    click Pricing "#pricing" "897206153"
    
    Pricing_Request_Needed{"<b>🔀 <em></em><br/>Pricing Request Needed</b>"}:::decisionsChanged
    
    
    click Pricing_Request_Needed "#pricing_request_needed" "1199015834"
    
    
    Create_Empty_Quote_Product[("➕ <em></em><br/>Create Empty Quote Product")]:::recordCreates
    click Create_Empty_Quote_Product "#create_empty_quote_product" "1069075530"
    
    Create_Opportunity[("<b>➕ <em></em><br/>Create Opportunity</b>")]:::recordCreatesChanged
    
    
    click Create_Opportunity "#create_opportunity" "1138322838"
    
    
    Create_Opportunity_Pricing[("<b>➕ <em></em><br/>Create Opportunity Pricing Request</b>")]:::recordCreatesChanged
    
    
    click Create_Opportunity_Pricing "#create_opportunity_pricing" "814792322"
    
    
    Create_Quote[("<b>➕ <em></em><br/>Create Quote</b>")]:::recordCreatesChanged
    
    
    click Create_Quote "#create_quote" "1558405254"
    
    
    Create_Quote_Products[("➕ <em></em><br/>Create Quote Products")]:::recordCreates
    click Create_Quote_Products "#create_quote_products" "2152442002"
    
    Get_Account_Details[("<b>🔍 <em></em><br/>Get Account Details</b>")]:::recordLookupsChanged
    
    
    click Get_Account_Details "#get_account_details" "2074714055"
    
    
    Get_Price_Book[("🔍 <em></em><br/>Get Price Book")]:::recordLookups
    click Get_Price_Book "#get_price_book" "2689493689"
    
    Get_Price_Book_Entry[("🔍 <em></em><br/>Get Price Book Entry")]:::recordLookups
    click Get_Price_Book_Entry "#get_price_book_entry" "3888028995"
    
    Get_Product[("🔍 <em></em><br/>Get Product")]:::recordLookups
    click Get_Product "#get_product" "1550029501"
    
    Get_Record_Type[("<b>🔍 <em></em><br/>Get Record Type</b>")]:::recordLookupsChanged
    
    
    click Get_Record_Type "#get_record_type" "2687488839"
    
    
    Get_Service_Contracts[("<b>🔍 <em></em><br/>Get Service Contracts</b>")]:::recordLookupsChanged
    
    
    click Get_Service_Contracts "#get_service_contracts" "2318674667"
    
    
    
    Set_ATAK_Project[("<b>🛠️ <em></em><br/>Set ATAK Project</b>")]:::recordUpdatesAdded
    click Set_ATAK_Project "#set_atak_project" "1225614173"
    
    Set_ATAK_Project_Requested[("<b>🛠️ <em></em><br/>Set ATAK Project Requested</b>")]:::recordUpdatesAdded
    click Set_ATAK_Project_Requested "#set_atak_project_requested" "2913384462"
    
    
    Update_Opportunity_with_Sync_Quote[("🛠️ <em></em><br/>Update Opportunity with Sync Quote")]:::recordUpdates
    click Update_Opportunity_with_Sync_Quote "#update_opportunity_with_sync_quote" "3282998306"
    
    Add_Extra_Work(["💻 <em></em><br/>Add Extra Work"]):::screens
    click Add_Extra_Work "#add_extra_work" "3509726432"
    
    
    Atak_Project(["<b>💻 <em></em><br/>Atak Project</b>"]):::screensAdded
    click Atak_Project "#atak_project" "3246555534"
    
    
    PricingScreen(["<b>💻 <em></em><br/>Pricing</b>"]):::screensChanged
    
    
    click PricingScreen "#pricingscreen" "411734992"
    
    
    
    ATAK_Project_Needed ==> |"🟩<b>Project Selected</b>"| Set_ATAK_Project
    ATAK_Project_Needed ==> |"🟩<b>Project Requested</b>"| Set_ATAK_Project_Requested
    ATAK_Project_Needed ==> |"🟩<b>Default Outcome</b>"| Create_Quote
    
    Pricing --> |"Defined"| Create_Quote_Products
    Pricing --> |"Requested"| Create_Empty_Quote_Product
    Pricing --> |"Default Outcome"| Update_Opportunity_with_Sync_Quote
    Pricing_Request_Needed --> |"Yes"| Create_Opportunity_Pricing
    Pricing_Request_Needed --> |"No"| Create_Opportunity
    
    Pricing_Request_Needed -.-> |"🟥<i>Default Outcome</i>"| Create_Quote
    
    Pricing_Request_Needed ==> |"🟩<b>Default Outcome</b>"| ATAK_Project_Needed
    
    Create_Empty_Quote_Product --> Update_Opportunity_with_Sync_Quote
    
    Create_Opportunity -.-> Create_Quote
    Create_Opportunity_Pricing -.-> Create_Quote
    
    Create_Opportunity ==> ATAK_Project_Needed
    Create_Opportunity_Pricing ==> ATAK_Project_Needed
    
    Create_Quote --> Pricing
    Create_Quote_Products --> Update_Opportunity_with_Sync_Quote
    
    Get_Account_Details -.-> Add_Extra_Work
    
    Get_Account_Details ==> Get_Service_Contracts
    
    Get_Price_Book --> Get_Price_Book_Entry
    Get_Price_Book_Entry --> PricingScreen
    Get_Product --> Get_Price_Book
    
    Get_Record_Type -.-> Get_Service_Contracts
    Get_Service_Contracts -.-> Get_Account_Details
    
    Get_Record_Type ==> Get_Account_Details
    Get_Service_Contracts ==> Add_Extra_Work
    Set_ATAK_Project ==> Create_Quote
    Set_ATAK_Project_Requested ==> Create_Quote
    
    Update_Opportunity_with_Sync_Quote --> END_Update_Opportunity_with_Sync_Quote
    Add_Extra_Work --> Get_Product
    
    PricingScreen -.-> Pricing_Request_Needed
    
    Atak_Project ==> Pricing_Request_Needed
    PricingScreen ==> Atak_Project
    
    START -->  Get_Record_Type
    END_Update_Opportunity_with_Sync_Quote(( END )):::endClass
    
    
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
      
    linkStyle 0,1,2,9,13,14,18,24,25,26,27,31,32 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 8,11,12,17,22,23,30 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    ## Flow Nodes Details
    
    
    ### 🟩ATAK_Project_Needed
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ATAK Project Needed</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Create_Quote](#create_quote)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Default Outcome</b></span>|
    
    #### 🟩Rule Project_Selected (Project Selected)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Set_ATAK_Project](#set_atak_project)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Existing_ATAK_Project.recordId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    #### 🟩Rule Project_Requested (Project Requested)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Set_ATAK_Project_Requested](#set_atak_project_requested)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Existing_ATAK_Project.recordId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    ### Pricing_Request_Needed
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Create_Quote](#create_quote)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[ATAK_Project_Needed](#atak_project_needed)</b></span>|
    
    ### Create_Opportunity
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Create_Quote](#create_quote)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[ATAK_Project_Needed](#atak_project_needed)</b></span>|
    
    ### Create_Opportunity_Pricing
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Create_Quote](#create_quote)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[ATAK_Project_Needed](#atak_project_needed)</b></span>|
    
    ### Create_Quote
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>QuoteAccountId</b></span>|<span style="background-color: #a6e22e; color: black;"><b>recordId</b></span>|
    
    ### Get_Account_Details
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Add_Extra_Work](#add_extra_work)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Service_Contracts](#get_service_contracts)</b></span>|
    
    ### Get_Record_Type
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Service_Contracts](#get_service_contracts)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Account_Details](#get_account_details)</b></span>|
    
    ### Get_Service_Contracts
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Account_Details](#get_account_details)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Add_Extra_Work](#add_extra_work)</b></span>|
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>AccountId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>recordId</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>AccountId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Account_Details.ParentId</b></span>|
    
    ### 🟩Set_ATAK_Project
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Update</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Opportunity</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Set ATAK Project</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Create_Quote](#create_quote)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>CreatedOpportunityId</b></span>|
    
    #### 🟩Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>ATAK_Projectx__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Existing_ATAK_Project.recordId</b></span>|
    
    ### 🟩Set_ATAK_Project_Requested
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Update</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Opportunity</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Set ATAK Project Requested</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Create_Quote](#create_quote)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>CreatedOpportunityId</b></span>|
    
    #### 🟩Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>ATAK_Project_Needed__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>ATAK_Project_Request_Comment__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Any_specific_comments_for_this_project_request</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>ATAK_Project_Request_Priority__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Priority</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>ATAK_Project_Request_Status__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Requested</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Service_Package__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Service_Package_Type</b></span>|
    
    ### 🟥PricingScreen
    
    ### 🟩Atak_Project
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Pricing](#pricing)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Atak Project</b></span>|
    
    #### 🟩Copy_1_of_ExtraWorkTitleScreen2
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p><strong style="font-size: 18px;">Add Extra Work</strong></p><p><br></p><p>Select an existing ATAK Project or request a new ATAK Project creation</p></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|
    
    #### 🟩Existing_ATAK_Project
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Extension Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>flowruntime:lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Component Instance</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Atak_Project_Section1_Column1](#atak_project_section1_column1)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Api Name (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ATAK_Projectx__c</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Existing ATAK Project</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object Api Name (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Opportunity</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Disabled (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>New_ATAK_Toggle.value</b></span>|
    
    #### 🟩New_ATAK_Toggle
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Extension Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>flowruntime:toggle</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Component Instance</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Atak_Project_Section1_Column1](#atak_project_section1_column1)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Request New Project</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Message Toggle Active (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Yes</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Message Toggle Inactive (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>No</b></span>|
    
    #### 🟩Atak_Project_Section1_Column1
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Region</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Atak_Project_Section1](#atak_project_section1)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Width (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>6</b></span>|
    
    #### 🟩Atak_Project_Section1_Column2
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Region</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Atak_Project_Section1](#atak_project_section1)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Width (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>6</b></span>|
    
    #### 🟩Atak_Project_Section1
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Region Container</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Region Container Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Section Without Header</b></span>|
    
    #### 🟩Priority
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Choice References</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Low<br/>- Medium<br/>- High<br/></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Priority</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Dropdown Box</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Atak_Project_Section2_Column1](#atak_project_section2_column1)</b></span>|
    
    #### 🟩Any_specific_comments_for_this_project_request
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Any specific comments for this project request?</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Input Field</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Atak_Project_Section2_Column1](#atak_project_section2_column1)</b></span>|
    
    #### 🟩Atak_Project_Section2_Column1
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Region</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Atak_Project_Section2](#atak_project_section2)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Width (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>6</b></span>|
    
    #### 🟩Service_Package_Type
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Choice References</b></span>|<span style="background-color: #a6e22e; color: black;"><b>servicePackageType</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Service Package Type</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Dropdown Box</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Help Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p>Used to generate a suggested project name</p></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Atak_Project_Section2_Column2](#atak_project_section2_column2)</b></span>|
    
    #### 🟩Atak_Project_Section2_Column2
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Region</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Atak_Project_Section2](#atak_project_section2)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Width (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>6</b></span>|
    
    #### 🟩Atak_Project_Section2
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Region Container</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Region Container Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Section Without Header</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Visibility Rule</b></span>|<span style="background-color: #a6e22e; color: black;"><b>conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: New_ATAK_Toggle.value<br/>&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;booleanValue: true<br/></b></span>|
    
    ### 🟩PricingScreen
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Screen</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Pricing](#pricing)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Back</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Finish</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Pause</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Next Or Finish Button Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Next</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Show Footer</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Show Header</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Atak_Project](#atak_project)</b></span>|
    
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
    START(["START<br/><b>Screen Flow</b>"]):::startClass
    click START "#general-information" "3354280388"
    
    Pricing{"🔀 <em></em><br/>Pricing"}:::decisions
    click Pricing "#pricing" "897206153"
    
    Pricing_Request_Needed{"🔀 <em></em><br/>Pricing Request Needed"}:::decisions
    click Pricing_Request_Needed "#pricing_request_needed" "3517777077"
    
    Create_Empty_Quote_Product[("➕ <em></em><br/>Create Empty Quote Product")]:::recordCreates
    click Create_Empty_Quote_Product "#create_empty_quote_product" "1069075530"
    
    Create_Opportunity[("<b>➕ <em></em><br/>Create Opportunity</b>")]:::recordCreatesChanged
    
    
    click Create_Opportunity "#create_opportunity" "3617263965"
    
    
    Create_Opportunity_Pricing[("<b>➕ <em></em><br/>Create Opportunity Pricing Request</b>")]:::recordCreatesChanged
    
    
    click Create_Opportunity_Pricing "#create_opportunity_pricing" "4138911717"
    
    
    Create_Quote[("➕ <em></em><br/>Create Quote")]:::recordCreates
    click Create_Quote "#create_quote" "40700417"
    
    Create_Quote_Products[("➕ <em></em><br/>Create Quote Products")]:::recordCreates
    click Create_Quote_Products "#create_quote_products" "2152442002"
    
    Get_Account_Details[("🔍 <em></em><br/>Get Account Details")]:::recordLookups
    click Get_Account_Details "#get_account_details" "1096591173"
    
    Get_Price_Book[("🔍 <em></em><br/>Get Price Book")]:::recordLookups
    click Get_Price_Book "#get_price_book" "2689493689"
    
    Get_Price_Book_Entry[("🔍 <em></em><br/>Get Price Book Entry")]:::recordLookups
    click Get_Price_Book_Entry "#get_price_book_entry" "3888028995"
    
    Get_Product[("🔍 <em></em><br/>Get Product")]:::recordLookups
    click Get_Product "#get_product" "1550029501"
    
    Get_Record_Type[("🔍 <em></em><br/>Get Record Type")]:::recordLookups
    click Get_Record_Type "#get_record_type" "3104978074"
    
    Get_Service_Contracts[("🔍 <em></em><br/>Get Service Contracts")]:::recordLookups
    click Get_Service_Contracts "#get_service_contracts" "1814175263"
    
    Update_Opportunity_with_Sync_Quote[("🛠️ <em></em><br/>Update Opportunity with Sync Quote")]:::recordUpdates
    click Update_Opportunity_with_Sync_Quote "#update_opportunity_with_sync_quote" "3282998306"
    
    Add_Extra_Work(["💻 <em></em><br/>Add Extra Work"]):::screens
    click Add_Extra_Work "#add_extra_work" "3509726432"
    
    PricingScreen(["💻 <em></em><br/>Pricing"]):::screens
    click PricingScreen "#pricingscreen" "3115227867"
    
    Pricing --> |"Defined"| Create_Quote_Products
    Pricing --> |"Requested"| Create_Empty_Quote_Product
    Pricing --> |"Default Outcome"| Update_Opportunity_with_Sync_Quote
    Pricing_Request_Needed --> |"Yes"| Create_Opportunity_Pricing
    Pricing_Request_Needed --> |"No"| Create_Opportunity
    Pricing_Request_Needed --> |"Default Outcome"| Create_Quote
    Create_Empty_Quote_Product --> Update_Opportunity_with_Sync_Quote
    Create_Opportunity --> Create_Quote
    Create_Opportunity_Pricing --> Create_Quote
    Create_Quote --> Pricing
    Create_Quote_Products --> Update_Opportunity_with_Sync_Quote
    Get_Account_Details --> Add_Extra_Work
    Get_Price_Book --> Get_Price_Book_Entry
    Get_Price_Book_Entry --> PricingScreen
    Get_Product --> Get_Price_Book
    Get_Record_Type --> Get_Service_Contracts
    Get_Service_Contracts --> Get_Account_Details
    Update_Opportunity_with_Sync_Quote --> END_Update_Opportunity_with_Sync_Quote
    Add_Extra_Work --> Get_Product
    PricingScreen --> Pricing_Request_Needed
    START -->  Get_Record_Type
    END_Update_Opportunity_with_Sync_Quote(( END )):::endClass
    
    
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
    
    ## Flow Nodes Details
    
    ### Create_Opportunity
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Amount__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Unit_Price</b></span>|
    
    ### Create_Opportunity_Pricing
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Amount__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Unit_Price</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Dec 5, 2024"

    _Dec 5, 2024, by fpardon-upeo in commit Org state on 2024-12-05 00:26 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>Screen Flow</b>"]):::startClass
    click START "#general-information" "3354280388"
    
    Pricing{"🔀 <em></em><br/>Pricing"}:::decisions
    click Pricing "#pricing" "897206153"
    
    Pricing_Request_Needed{"🔀 <em></em><br/>Pricing Request Needed"}:::decisions
    click Pricing_Request_Needed "#pricing_request_needed" "3517777077"
    
    Create_Empty_Quote_Product[("➕ <em></em><br/>Create Empty Quote Product")]:::recordCreates
    click Create_Empty_Quote_Product "#create_empty_quote_product" "1069075530"
    
    Create_Opportunity[("<b>➕ <em></em><br/>Create Opportunity</b>")]:::recordCreatesChanged
    
    
    click Create_Opportunity "#create_opportunity" "814726716"
    
    
    Create_Opportunity_Pricing[("<b>➕ <em></em><br/>Create Opportunity Pricing Request</b>")]:::recordCreatesChanged
    
    
    click Create_Opportunity_Pricing "#create_opportunity_pricing" "1284726836"
    
    
    Create_Quote[("➕ <em></em><br/>Create Quote")]:::recordCreates
    click Create_Quote "#create_quote" "40700417"
    
    Create_Quote_Products[("➕ <em></em><br/>Create Quote Products")]:::recordCreates
    click Create_Quote_Products "#create_quote_products" "2152442002"
    
    Get_Account_Details[("🔍 <em></em><br/>Get Account Details")]:::recordLookups
    click Get_Account_Details "#get_account_details" "1096591173"
    
    Get_Price_Book[("🔍 <em></em><br/>Get Price Book")]:::recordLookups
    click Get_Price_Book "#get_price_book" "2689493689"
    
    Get_Price_Book_Entry[("🔍 <em></em><br/>Get Price Book Entry")]:::recordLookups
    click Get_Price_Book_Entry "#get_price_book_entry" "3888028995"
    
    Get_Product[("🔍 <em></em><br/>Get Product")]:::recordLookups
    click Get_Product "#get_product" "1550029501"
    
    Get_Record_Type[("🔍 <em></em><br/>Get Record Type")]:::recordLookups
    click Get_Record_Type "#get_record_type" "3104978074"
    
    Get_Service_Contracts[("🔍 <em></em><br/>Get Service Contracts")]:::recordLookups
    click Get_Service_Contracts "#get_service_contracts" "1814175263"
    
    Update_Opportunity_with_Sync_Quote[("🛠️ <em></em><br/>Update Opportunity with Sync Quote")]:::recordUpdates
    click Update_Opportunity_with_Sync_Quote "#update_opportunity_with_sync_quote" "3282998306"
    
    Add_Extra_Work(["💻 <em></em><br/>Add Extra Work"]):::screens
    click Add_Extra_Work "#add_extra_work" "3509726432"
    
    PricingScreen(["💻 <em></em><br/>Pricing"]):::screens
    click PricingScreen "#pricingscreen" "3115227867"
    
    Pricing --> |"Defined"| Create_Quote_Products
    Pricing --> |"Requested"| Create_Empty_Quote_Product
    Pricing --> |"Default Outcome"| Update_Opportunity_with_Sync_Quote
    Pricing_Request_Needed --> |"Yes"| Create_Opportunity_Pricing
    Pricing_Request_Needed --> |"No"| Create_Opportunity
    Pricing_Request_Needed --> |"Default Outcome"| Create_Quote
    Create_Empty_Quote_Product --> Update_Opportunity_with_Sync_Quote
    Create_Opportunity --> Create_Quote
    Create_Opportunity_Pricing --> Create_Quote
    Create_Quote --> Pricing
    Create_Quote_Products --> Update_Opportunity_with_Sync_Quote
    Get_Account_Details --> Add_Extra_Work
    Get_Price_Book --> Get_Price_Book_Entry
    Get_Price_Book_Entry --> PricingScreen
    Get_Product --> Get_Price_Book
    Get_Record_Type --> Get_Service_Contracts
    Get_Service_Contracts --> Get_Account_Details
    Update_Opportunity_with_Sync_Quote --> END_Update_Opportunity_with_Sync_Quote
    Add_Extra_Work --> Get_Product
    PricingScreen --> Pricing_Request_Needed
    START -->  Get_Record_Type
    END_Update_Opportunity_with_Sync_Quote(( END )):::endClass
    
    
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
    
    ## Flow Nodes Details
    
    ### Create_Opportunity
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Extra Work</b></span>|
    
    ### Create_Opportunity_Pricing
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Extra Work</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Dec 4, 2024"

    _Dec 4, 2024, by fpardon-upeo in commit Org state on 2024-12-04 00:26 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>Screen Flow</b>"]):::startClass
    click START "#general-information" "3354280388"
    
    Pricing{"<b>🔀 <em></em><br/>Pricing</b>"}:::decisionsChanged
    click Pricing "#pricing" "897206153"
    
    Pricing_Request_Needed{"🔀 <em></em><br/>Pricing Request Needed"}:::decisions
    click Pricing_Request_Needed "#pricing_request_needed" "3517777077"
    
    Create_Empty_Quote_Product[("➕ <em></em><br/>Create Empty Quote Product")]:::recordCreates
    click Create_Empty_Quote_Product "#create_empty_quote_product" "1069075530"
    
    Create_Opportunity[("<b>➕ <em></em><br/>Create Opportunity</b>")]:::recordCreatesChanged
    
    
    click Create_Opportunity "#create_opportunity" "1561806067"
    
    
    Create_Opportunity_Pricing[("<b>➕ <em></em><br/>Create Opportunity Pricing Request</b>")]:::recordCreatesChanged
    
    
    click Create_Opportunity_Pricing "#create_opportunity_pricing" "2703846835"
    
    
    Create_Quote[("<b>➕ <em></em><br/>Create Quote</b>")]:::recordCreatesChanged
    
    
    click Create_Quote "#create_quote" "40700417"
    
    
    Create_Quote_Products[("<b>➕ <em></em><br/>Create Quote Products</b>")]:::recordCreatesChanged
    
    
    click Create_Quote_Products "#create_quote_products" "2152442002"
    
    
    Get_Account_Details[("🔍 <em></em><br/>Get Account Details")]:::recordLookups
    click Get_Account_Details "#get_account_details" "1096591173"
    
    Get_Price_Book[("<b>🔍 <em></em><br/>Get Price Book</b>")]:::recordLookupsChanged
    
    
    click Get_Price_Book "#get_price_book" "2689493689"
    
    
    Get_Price_Book_Entry[("🔍 <em></em><br/>Get Price Book Entry")]:::recordLookups
    click Get_Price_Book_Entry "#get_price_book_entry" "3888028995"
    
    Get_Product[("🔍 <em></em><br/>Get Product")]:::recordLookups
    click Get_Product "#get_product" "1550029501"
    
    Get_Record_Type[("🔍 <em></em><br/>Get Record Type")]:::recordLookups
    click Get_Record_Type "#get_record_type" "3104978074"
    
    Get_Service_Contracts[("🔍 <em></em><br/>Get Service Contracts")]:::recordLookups
    click Get_Service_Contracts "#get_service_contracts" "1814175263"
    
    Update_Opportunity_with_Sync_Quote[("🛠️ <em></em><br/>Update Opportunity with Sync Quote")]:::recordUpdates
    click Update_Opportunity_with_Sync_Quote "#update_opportunity_with_sync_quote" "3282998306"
    
    Add_Extra_Work(["<b>💻 <em></em><br/>Add Extra Work</b>"]):::screensChanged
    
    
    click Add_Extra_Work "#add_extra_work" "3509726432"
    
    
    PricingScreen(["<b>💻 <em></em><br/>Pricing</b>"]):::screensChanged
    
    
    click PricingScreen "#pricingscreen" "3115227867"
    
    
    Pricing --> |"Defined"| Create_Quote_Products
    Pricing --> |"Requested"| Create_Empty_Quote_Product
    Pricing --> |"Default Outcome"| Update_Opportunity_with_Sync_Quote
    Pricing_Request_Needed --> |"Yes"| Create_Opportunity_Pricing
    Pricing_Request_Needed --> |"No"| Create_Opportunity
    Pricing_Request_Needed --> |"Default Outcome"| Create_Quote
    Create_Empty_Quote_Product --> Update_Opportunity_with_Sync_Quote
    Create_Opportunity --> Create_Quote
    Create_Opportunity_Pricing --> Create_Quote
    Create_Quote --> Pricing
    Create_Quote_Products --> Update_Opportunity_with_Sync_Quote
    Get_Account_Details --> Add_Extra_Work
    Get_Price_Book --> Get_Price_Book_Entry
    Get_Price_Book_Entry --> PricingScreen
    Get_Product --> Get_Price_Book
    Get_Record_Type --> Get_Service_Contracts
    Get_Service_Contracts --> Get_Account_Details
    Update_Opportunity_with_Sync_Quote --> END_Update_Opportunity_with_Sync_Quote
    Add_Extra_Work --> Get_Product
    PricingScreen --> Pricing_Request_Needed
    START -->  Get_Record_Type
    END_Update_Opportunity_with_Sync_Quote(( END )):::endClass
    
    
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
    
    ## Flow Nodes Details
    
    ### Create_Opportunity
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Work_Size__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Size_of_the_Extra_Work</i></span>|
    
    ### Create_Opportunity_Pricing
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Work_Size__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Size_of_the_Extra_Work</i></span>|
    
    ### Create_Quote
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Amount__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Unit_Price</b></span>|
    
    ### Create_Quote_Products
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Quantity</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Quantity</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Quantity</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>UnitPrice</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Unit_Price</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>UnitPrice</b></span>|<span style="background-color: #a6e22e; color: black;"><b>numberValue: 0<br/></b></span>|
    
    ### Get_Price_Book
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>IsStandard</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Extra Work</b></span>|
    
    ### Add_Extra_Work
    
    #### 🟥Size_of_the_Extra_Work
    
    #### 🟩Expected_Work_Date
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Data Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>String</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Choice References</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>WorkSizeChoice</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Size of the Extra Work</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Dropdown Box</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Date</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Value</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Flow.CurrentDate</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Expected Work Date</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Input Field</b></span>|
    
    #### 🟥Expected_Work_Date
    
    #### 🟩Please_provide_a_description_of_the_extra_work
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Data Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Date</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Value</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Flow.CurrentDate</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Expected Work Date</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Input Field</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Please provide a description of the extra work</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Large Text Area</b></span>|
    
    #### 🟥Please_provide_a_description_of_the_extra_work
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Please provide a description of the extra work</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Large Text Area</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Inputs On Next Nav To Assoc Scrn</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Use Stored Values</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    
    ### PricingScreen
    
    #### 🟥Quantity
    
    #### 🟩Unit_Price
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Data Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Number</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Value</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Quantity</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Currency</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Sales Price</b></span>|
    
    #### 🟥Unit_Price
    
    #### 🟩Any_additional_comments
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Data Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Currency</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Unit Price</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Any additional comments?</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Scale</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>0</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Visibility Rule</b></span>|<span style="background-color: #a6e22e; color: black;"><b>conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: Request_Pricing_to_Business_Support_Choice<br/>&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;elementReference: 'No'<br/></b></span>|
    
    #### 🟥Any_additional_comments
    
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Data Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>String</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Any additional comments?</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Input Field</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Inputs On Next Nav To Assoc Scrn</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Use Stored Values</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Visibility Rule</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: Request_Pricing_to_Business_Support_Choice<br/>&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;elementReference: 'No'<br/></i></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 28, 2024 (Initial)"

    _Nov 28, 2024, by fpardon-upeo in commit Org state on 2024-11-28 00:30 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>Screen Flow</b>"]):::startClass
    click START "#general-information" "3354280388"
    
    Pricing{"🔀 <em></em><br/>Pricing"}:::decisions
    click Pricing "#pricing" "897206153"
    
    Pricing_Request_Needed{"🔀 <em></em><br/>Pricing Request Needed"}:::decisions
    click Pricing_Request_Needed "#pricing_request_needed" "3517777077"
    
    Create_Empty_Quote_Product[("➕ <em></em><br/>Create Empty Quote Product")]:::recordCreates
    click Create_Empty_Quote_Product "#create_empty_quote_product" "1069075530"
    
    Create_Opportunity[("➕ <em></em><br/>Create Opportunity")]:::recordCreates
    click Create_Opportunity "#create_opportunity" "1365363296"
    
    Create_Opportunity_Pricing[("➕ <em></em><br/>Create Opportunity Pricing Request")]:::recordCreates
    click Create_Opportunity_Pricing "#create_opportunity_pricing" "418666356"
    
    Create_Quote[("➕ <em></em><br/>Create Quote")]:::recordCreates
    click Create_Quote "#create_quote" "3280064280"
    
    Create_Quote_Products[("➕ <em></em><br/>Create Quote Products")]:::recordCreates
    click Create_Quote_Products "#create_quote_products" "2536997767"
    
    Get_Account_Details[("🔍 <em></em><br/>Get Account Details")]:::recordLookups
    click Get_Account_Details "#get_account_details" "1096591173"
    
    Get_Price_Book[("🔍 <em></em><br/>Get Price Book")]:::recordLookups
    click Get_Price_Book "#get_price_book" "2106789388"
    
    Get_Price_Book_Entry[("🔍 <em></em><br/>Get Price Book Entry")]:::recordLookups
    click Get_Price_Book_Entry "#get_price_book_entry" "3888028995"
    
    Get_Product[("🔍 <em></em><br/>Get Product")]:::recordLookups
    click Get_Product "#get_product" "1550029501"
    
    Get_Record_Type[("🔍 <em></em><br/>Get Record Type")]:::recordLookups
    click Get_Record_Type "#get_record_type" "3104978074"
    
    Get_Service_Contracts[("🔍 <em></em><br/>Get Service Contracts")]:::recordLookups
    click Get_Service_Contracts "#get_service_contracts" "1814175263"
    
    Update_Opportunity_with_Sync_Quote[("🛠️ <em></em><br/>Update Opportunity with Sync Quote")]:::recordUpdates
    click Update_Opportunity_with_Sync_Quote "#update_opportunity_with_sync_quote" "3282998306"
    
    Add_Extra_Work(["💻 <em></em><br/>Add Extra Work"]):::screens
    click Add_Extra_Work "#add_extra_work" "1486421613"
    
    PricingScreen(["💻 <em></em><br/>Pricing"]):::screens
    click PricingScreen "#pricingscreen" "604722931"
    
    Pricing --> |"Defined"| Create_Quote_Products
    Pricing --> |"Requested"| Create_Empty_Quote_Product
    Pricing --> |"Default Outcome"| Update_Opportunity_with_Sync_Quote
    Pricing_Request_Needed --> |"Yes"| Create_Opportunity_Pricing
    Pricing_Request_Needed --> |"No"| Create_Opportunity
    Pricing_Request_Needed --> |"Default Outcome"| Create_Quote
    Create_Empty_Quote_Product --> Update_Opportunity_with_Sync_Quote
    Create_Opportunity --> Create_Quote
    Create_Opportunity_Pricing --> Create_Quote
    Create_Quote --> Pricing
    Create_Quote_Products --> Update_Opportunity_with_Sync_Quote
    Get_Account_Details --> Add_Extra_Work
    Get_Price_Book --> Get_Price_Book_Entry
    Get_Price_Book_Entry --> PricingScreen
    Get_Product --> Get_Price_Book
    Get_Record_Type --> Get_Service_Contracts
    Get_Service_Contracts --> Get_Account_Details
    Update_Opportunity_with_Sync_Quote --> END_Update_Opportunity_with_Sync_Quote
    Add_Extra_Work --> Get_Product
    PricingScreen --> Pricing_Request_Needed
    START -->  Get_Record_Type
    END_Update_Opportunity_with_Sync_Quote(( END )):::endClass
    
    
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
    |Label|[Account][Screen-Flow] Add Extra Work|
    |Status|Active|
    |Environments|Default|
    |Interview Label|[Account][Screen-Flow] Add Extra Work {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Get_Record_Type](#get_record_type)|
    |Next Node|[Get_Record_Type](#get_record_type)|
    
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|Description|
    |:-- |:--:|:--:|:--:|:--:|:--:|:--  |
    |CreatedOpportunityId|String|⬜|✅|⬜|<!-- -->|<!-- -->|
    |CreatedQuoteId|String|⬜|✅|⬜|<!-- -->|<!-- -->|
    |recordId|String|⬜|✅|⬜|<!-- -->|<!-- -->|
    
    
    ## Formulas
    
    |Name|Data Type|Expression|Description|
    |:-- |:--:|:-- |:--  |
    |OpportunityNameCalculation|String|{!Get_Account_Details.Name} &' - Extra Work'&' - '&TEXT({!Expected_Work_Date})|<!-- -->|
    |PricingRequestStatus|String|IF({!Request_Pricing_to_Business_Support_Choice}='Yes', 'Requested', '')|<!-- -->|
    
    
    ## Flow Nodes Details
    
    ### Pricing
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|[Pricing](#pricing)|
    |Default Connector|[Update_Opportunity_with_Sync_Quote](#update_opportunity_with_sync_quote)|
    |Default Connector Label|Default Outcome|
    
    
    #### Rule Defined (Defined)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Create_Quote_Products](#create_quote_products)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|Request_Pricing_to_Business_Support_Choice| Equal To|No|
    
    
    
    
    #### Rule Requested (Requested)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Create_Empty_Quote_Product](#create_empty_quote_product)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|Request_Pricing_to_Business_Support_Choice| Equal To|Yes|
    
    
    
    
    ### Pricing_Request_Needed
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Pricing Request Needed|
    |Default Connector|[Create_Quote](#create_quote)|
    |Default Connector Label|Default Outcome|
    
    
    #### Rule yesPricingNeeded (Yes)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Create_Opportunity_Pricing](#create_opportunity_pricing)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|Request_Pricing_to_Business_Support_Choice| Equal To|Yes|
    
    
    
    
    #### Rule NoPricingNotNeeded (No)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Create_Opportunity](#create_opportunity)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|Request_Pricing_to_Business_Support_Choice| Equal To|No|
    
    
    
    
    ### Create_Empty_Quote_Product
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Create|
    |Object|QuoteLineItem|
    |Label|Create Empty Quote Product|
    |Store Output Automatically|✅|
    |Connector|[Update_Opportunity_with_Sync_Quote](#update_opportunity_with_sync_quote)|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |PricebookEntryId|Get_Price_Book_Entry.Id|
    |Product2Id|Get_Product.Id|
    |Quantity|1|
    |QuoteId|CreatedQuoteId|
    |UnitPrice|numberValue: 0<br/>|
    
    
    
    
    ### Create_Opportunity
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Create|
    |Object|Opportunity|
    |Label|Create Opportunity|
    |Assign Record Id To Reference|CreatedOpportunityId|
    |Connector|[Create_Quote](#create_quote)|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |AccountId|recordId|
    |CloseDate|Expected_Work_Date|
    |Description|Please_provide_a_description_of_the_extra_work|
    |Name|OpportunityNameCalculation|
    |Pricebook2Id|Get_Price_Book.Id|
    |RecordTypeId|Get_Record_Type.Id|
    |Service_Contract__c|ServiceContractTable.firstSelectedRow.Id|
    |StageName|[Pricing](#pricing)|
    |Work_Size__c|Size_of_the_Extra_Work|
    
    
    
    
    ### Create_Opportunity_Pricing
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Create|
    |Object|Opportunity|
    |Label|Create Opportunity Pricing Request|
    |Assign Record Id To Reference|CreatedOpportunityId|
    |Connector|[Create_Quote](#create_quote)|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |AccountId|recordId|
    |CloseDate|Expected_Work_Date|
    |Description|Please_provide_a_description_of_the_extra_work|
    |Name|OpportunityNameCalculation|
    |Price_Request_Demand_Comments__c|Pricing_Request_Comment|
    |Price_Request_Priority__c|Pricing_Request_Priority|
    |Price_Request_Status__c|Requested|
    |Pricebook2Id|Get_Price_Book.Id|
    |Pricing_Request_Needed__c|✅|
    |RecordTypeId|Get_Record_Type.Id|
    |Service_Contract__c|ServiceContractTable.firstSelectedRow.Id|
    |StageName|[Pricing](#pricing)|
    |Work_Size__c|Size_of_the_Extra_Work|
    
    
    
    
    ### Create_Quote
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Create|
    |Object|Quote|
    |Label|Create Quote|
    |Assign Record Id To Reference|CreatedQuoteId|
    |Connector|[Pricing](#pricing)|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Name|OpportunityNameCalculation|
    |OpportunityId|CreatedOpportunityId|
    |Pricebook2Id|Get_Price_Book.Id|
    
    
    
    
    ### Create_Quote_Products
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Create|
    |Object|QuoteLineItem|
    |Label|Create Quote Products|
    |Store Output Automatically|✅|
    |Connector|[Update_Opportunity_with_Sync_Quote](#update_opportunity_with_sync_quote)|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Description|Any_additional_comments|
    |PricebookEntryId|Get_Price_Book_Entry.Id|
    |Product2Id|Get_Product.Id|
    |Quantity|Quantity|
    |QuoteId|CreatedQuoteId|
    |UnitPrice|Unit_Price|
    
    
    
    
    ### Get_Account_Details
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|Account|
    |Label|Get Account Details|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Add_Extra_Work](#add_extra_work)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|recordId|
    
    
    
    
    ### Get_Price_Book
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|Pricebook2|
    |Label|Get Price Book|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Get_Price_Book_Entry](#get_price_book_entry)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|IsStandard| Equal To|✅|
    
    
    
    
    ### Get_Price_Book_Entry
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|PricebookEntry|
    |Label|Get Price Book Entry|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[PricingScreen](#pricingscreen)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Product2Id| Equal To|Get_Product.Id|
    |2|Pricebook2Id| Equal To|Get_Price_Book.Id|
    
    
    
    
    ### Get_Product
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|Product2|
    |Label|Get Product|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Get_Price_Book](#get_price_book)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|ProductCode| Equal To|XTRA|
    
    
    
    
    ### Get_Record_Type
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|RecordType|
    |Label|Get Record Type|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Get_Service_Contracts](#get_service_contracts)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|DeveloperName| Equal To|Quick_Quote|
    
    
    
    
    ### Get_Service_Contracts
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|ServiceContract|
    |Label|Get Service Contracts|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|⬜|
    |Store Output Automatically|✅|
    |Connector|[Get_Account_Details](#get_account_details)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|AccountId| Equal To|recordId|
    
    
    
    
    ### Update_Opportunity_with_Sync_Quote
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Object|Opportunity|
    |Label|Update Opportunity with Sync Quote|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|CreatedOpportunityId|
    
    
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |SyncedQuoteId|CreatedQuoteId|
    
    
    
    
    ### Add_Extra_Work
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Screen|
    |Label|Add Extra Work|
    |Allow Back|⬜|
    |Allow Finish|✅|
    |Allow Pause|⬜|
    |Show Footer|✅|
    |Show Header|⬜|
    |Connector|[Get_Product](#get_product)|
    
    
    #### ExtraWorkTitle
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Text|<p><strong style="font-size: 18px;">Add Extra Work</strong></p><p><br></p><p>Create a fast-track Opportunity and Quote for your smaller extra work.</p>|
    |Field Type| Display Text|
    
    
    
    
    #### Size_of_the_Extra_Work
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|String|
    |Choice References|WorkSizeChoice|
    |Field Text|Size of the Extra Work|
    |Field Type| Dropdown Box|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|✅|
    |Parent Field|[Add_Extra_Work_Section1_Column1](#add_extra_work_section1_column1)|
    
    
    
    
    #### Add_Extra_Work_Section1_Column1
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Type| Region|
    |Is Required|⬜|
    |Parent Field|[Add_Extra_Work_Section1](#add_extra_work_section1)|
    |Width (input)|6|
    
    
    
    
    #### Expected_Work_Date
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|Date|
    |Default Value|$Flow.CurrentDate|
    |Field Text|Expected Work Date|
    |Field Type| Input Field|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|✅|
    |Parent Field|[Add_Extra_Work_Section1_Column2](#add_extra_work_section1_column2)|
    
    
    
    
    #### Add_Extra_Work_Section1_Column2
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Type| Region|
    |Is Required|⬜|
    |Parent Field|[Add_Extra_Work_Section1](#add_extra_work_section1)|
    |Width (input)|6|
    
    
    
    
    #### Add_Extra_Work_Section1
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Type| Region Container|
    |Is Required|⬜|
    |Region Container Type| Section Without Header|
    
    
    
    
    #### Please_provide_a_description_of_the_extra_work
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Text|Please provide a description of the extra work|
    |Field Type| Large Text Area|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|✅|
    
    
    
    
    #### Link_this_Extra_Work_to_a_Service_Contract
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|Boolean|
    |Field Text|Link this Extra Work to a Service Contract|
    |Field Type| Input Field|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|✅|
    
    
    
    
    #### ServiceContractTable
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type Mappings|typeName: T<br/>typeValue: ServiceContract<br/>|
    |Extension Name|flowruntime:datatable|
    |Field Type| Component Instance|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|✅|
    |Store Output Automatically|✅|
    |Visibility Rule|conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: Link_this_Extra_Work_to_a_Service_Contract<br/>&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;booleanValue: true<br/>|
    |Label (input)|Data Table|
    |Selection Mode (input)|SINGLE_SELECT|
    |Min Row Selection (input)|1|
    |Table Data (input)|[Get_Service_Contracts](#get_service_contracts)|
    |Columns (input)|[{"apiName":"Name","guid":"column-5617","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":0,"label":"Contract Name","type":"text"},{"apiName":"Type__c","guid":"column-996f","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":1,"label":"Type","type":"text"},{"apiName":"Contract_type__c","guid":"column-efcd","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":2,"label":"Contract type","type":"text"},{"apiName":"Status","guid":"column-d462","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":3,"label":"Status","type":"text"},{"apiName":"EndDate","guid":"column-e2a7","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":4,"label":"End Date","type":"date-local"},{"apiName":"","guid":"column-e54f","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":4}]|
    |Max Row Selection (input)|1|
    
    
    
    
    ### PricingScreen
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Screen|
    |Label|[Pricing](#pricing)|
    |Allow Back|⬜|
    |Allow Finish|✅|
    |Allow Pause|⬜|
    |Next Or Finish Button Label|Create Extra Work|
    |Show Footer|✅|
    |Show Header|⬜|
    |Connector|[Pricing_Request_Needed](#pricing_request_needed)|
    
    
    #### ExtraWorkTitleScreen2
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Text|<p><strong style="font-size: 18px;">Add Extra Work</strong></p><p><br></p><p>Define the pricing or pricing request need.</p>|
    |Field Type| Display Text|
    
    
    
    
    #### Request_Pricing_to_Business_Support_Choice
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|String|
    |Choice References|- 'Yes'<br/>- 'No'<br/>|
    |Field Text|Request Pricing to Business Support|
    |Field Type| Dropdown Box|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|✅|
    |Parent Field|[PricingScreen_Section1_Column1](#pricingscreen_section1_column1)|
    
    
    
    
    #### PricingScreen_Section1_Column1
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Type| Region|
    |Is Required|⬜|
    |Parent Field|[PricingScreen_Section1](#pricingscreen_section1)|
    |Width (input)|6|
    
    
    
    
    #### Pricing_Request_Priority
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|String|
    |Choice References|PricingRequestPriority|
    |Field Text|Pricing Request Priority|
    |Field Type| Dropdown Box|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|⬜|
    |Visibility Rule|conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: Request_Pricing_to_Business_Support_Choice<br/>&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;elementReference: 'Yes'<br/>|
    |Parent Field|[PricingScreen_Section1_Column2](#pricingscreen_section1_column2)|
    
    
    
    
    #### Pricing_Request_Comment
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|String|
    |Field Text|Pricing Request Comment|
    |Field Type| Input Field|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|⬜|
    |Visibility Rule|conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: Request_Pricing_to_Business_Support_Choice<br/>&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;elementReference: 'Yes'<br/>|
    |Parent Field|[PricingScreen_Section1_Column2](#pricingscreen_section1_column2)|
    
    
    
    
    #### PricingScreen_Section1_Column2
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Type| Region|
    |Is Required|⬜|
    |Parent Field|[PricingScreen_Section1](#pricingscreen_section1)|
    |Width (input)|6|
    
    
    
    
    #### PricingScreen_Section1
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Type| Region Container|
    |Is Required|⬜|
    |Region Container Type| Section Without Header|
    
    
    
    
    #### Quantity
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|Number|
    |Default Value|1|
    |Field Text|Quantity|
    |Field Type| Input Field|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|✅|
    |Scale|0|
    |Parent Field|[PricingScreen_Section2_Column1](#pricingscreen_section2_column1)|
    
    
    
    
    #### PricingScreen_Section2_Column1
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Type| Region|
    |Is Required|⬜|
    |Parent Field|[PricingScreen_Section2](#pricingscreen_section2)|
    |Width (input)|6|
    
    
    
    
    #### Unit_Price
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|Currency|
    |Field Text|Unit Price|
    |Field Type| Input Field|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|✅|
    |Scale|0|
    |Parent Field|[PricingScreen_Section2_Column2](#pricingscreen_section2_column2)|
    
    
    
    
    #### PricingScreen_Section2_Column2
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Type| Region|
    |Is Required|⬜|
    |Parent Field|[PricingScreen_Section2](#pricingscreen_section2)|
    |Width (input)|6|
    
    
    
    
    #### PricingScreen_Section2
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Type| Region Container|
    |Is Required|⬜|
    |Region Container Type| Section Without Header|
    |Visibility Rule|conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: Request_Pricing_to_Business_Support_Choice<br/>&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;elementReference: 'No'<br/>|
    
    
    
    
    #### Any_additional_comments
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|String|
    |Field Text|Any additional comments?|
    |Field Type| Input Field|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|⬜|
    |Visibility Rule|conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: Request_Pricing_to_Business_Support_Choice<br/>&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;elementReference: 'No'<br/>|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

