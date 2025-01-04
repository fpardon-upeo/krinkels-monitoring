# Quote_After_Save_Create_Work_Order_on_Acceptance history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Dec 16, 2024"

    _Dec 16, 2024, by fpardon-upeo in commit Org state on 2024-12-16 00:27 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "643246429"
    
    Set_Work_Order_Initial_Values[\"🟰 <em></em><br/>Set Work Order Initial Values"/]:::assignments
    click Set_Work_Order_Initial_Values "#set_work_order_initial_values" "1220509163"
    
    Create_Asset[("<b>➕ <em></em><br/>Create Asset</b>")]:::recordCreatesChanged
    
    
    click Create_Asset "#create_asset" "1954652505"
    
    
    Create_Work_Order[("➕ <em></em><br/>Create Work Order")]:::recordCreates
    click Create_Work_Order "#create_work_order" "814093845"
    
    Create_Work_Order_Line[("➕ <em></em><br/>Create Work Order Line")]:::recordCreates
    click Create_Work_Order_Line "#create_work_order_line" "3451497171"
    
    
    Get_Extra_Work_Asset_for_Operational_Account[("<i>🔍 <em></em><br/>Get Extra Work Asset for Operational Account</i>")]:::recordLookupsRemoved
    click Get_Extra_Work_Asset_for_Operational_Account "#get_extra_work_asset_for_operational_account" "2905031740"
    
    
    Get_Extra_Work_Product[("<b>🔍 <em></em><br/>Get Extra Work Product</b>")]:::recordLookupsChanged
    
    
    click Get_Extra_Work_Product "#get_extra_work_product" "458901165"
    
    
    Get_Maintenance_Plan[("🔍 <em></em><br/>Get Maintenance Plan")]:::recordLookups
    click Get_Maintenance_Plan "#get_maintenance_plan" "3920850060"
    
    Get_Product_Work_Type[("🔍 <em></em><br/>Get Product Work Type")]:::recordLookups
    click Get_Product_Work_Type "#get_product_work_type" "3925412178"
    
    Get_Quote_Line_Items[("🔍 <em></em><br/>Get Quote Line Items")]:::recordLookups
    click Get_Quote_Line_Items "#get_quote_line_items" "742878451"
    
    Get_Random_Child_of_Parent_Contract[("🔍 <em></em><br/>Get Random Child of Parent Contract")]:::recordLookups
    click Get_Random_Child_of_Parent_Contract "#get_random_child_of_parent_contract" "2631774189"
    
    Set_Work_Order_Initial_Values --> Create_Work_Order
    Create_Asset --> Set_Work_Order_Initial_Values
    Create_Work_Order --> Get_Quote_Line_Items
    Create_Work_Order_Line --> END_Create_Work_Order_Line
    
    Get_Extra_Work_Asset_for_Operational_Account -.-> Create_Asset
    Get_Extra_Work_Product -.-> Get_Extra_Work_Asset_for_Operational_Account
    
    Get_Extra_Work_Product ==> Create_Asset
    
    Get_Maintenance_Plan --> Get_Extra_Work_Product
    Get_Product_Work_Type --> Get_Random_Child_of_Parent_Contract
    Get_Quote_Line_Items --> Create_Work_Order_Line
    Get_Random_Child_of_Parent_Contract --> Get_Maintenance_Plan
    START -->  Get_Product_Work_Type
    END_Create_Work_Order_Line(( END )):::endClass
    
    
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
    
    
    
    classDef actionCallsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef assignmentsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef collectionProcessorsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef customErrorsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef decisionsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef loopsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef recordCreatesAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef recordDeletesAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef recordLookupsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef recordUpdatesAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef screensAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef subflowsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef startClassAdded fill:green,color:white,stroke-width:4px,max-height:100px
    
    classDef actionCallsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef assignmentsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef collectionProcessorsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef customErrorsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef decisionsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef loopsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef recordCreatesRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef recordDeletesRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef recordLookupsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef recordUpdatesRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef screensRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef subflowsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef startClassRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    
    classDef actionCallsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef assignmentsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef collectionProcessorsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef customErrorsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef decisionsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef loopsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef recordCreatesChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef recordDeletesChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef recordLookupsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef recordUpdatesChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef screensChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef subflowsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef startClassChanged fill:orange,color:white,stroke-width:4px,max-height:100px
      
    linkStyle 6 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 4,5 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    ## Flow Nodes Details
    
    ### Create_Asset
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Operation Mult Matching Records</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>UpdateLatestRecord</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Operation One Matching Record</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>UpdateAllRecords</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Operation Zero Matching Records</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>AddRecord</i></span>|
    
    #### 🟥Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>AccountId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record__Prior.QuoteAccountId</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>2</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Product2Id</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_Extra_Work_Product.Id</i></span>|
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>ATAK_Project__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Opportunity.ATAK_Projectx__c</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>ATAK_Project__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.ATAK_Project__c</b></span>|
    
    ### 🟥Get_Extra_Work_Asset_for_Operational_Account
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Record Lookup</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Object</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Asset</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get Extra Work Asset for Operational Account</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Assign Null Values If No Records Found</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Get First Record Only</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Store Output Automatically</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Create_Asset](#create_asset)</i></span>|
    
    #### 🟥Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Product2Id</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_Extra_Work_Product.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>2</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>AccountId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.AccountId</i></span>|
    
    ### Get_Extra_Work_Product
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Extra_Work_Asset_for_Operational_Account](#get_extra_work_asset_for_operational_account)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Create_Asset](#create_asset)</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Dec 14, 2024"

    _Dec 14, 2024, by fpardon-upeo in commit Org state on 2024-12-14 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "643246429"
    
    Set_Work_Order_Initial_Values[\"🟰 <em></em><br/>Set Work Order Initial Values"/]:::assignments
    click Set_Work_Order_Initial_Values "#set_work_order_initial_values" "1220509163"
    
    Create_Asset[("<b>➕ <em></em><br/>Create Asset</b>")]:::recordCreatesChanged
    
    
    click Create_Asset "#create_asset" "1358141115"
    
    
    Create_Work_Order[("<b>➕ <em></em><br/>Create Work Order</b>")]:::recordCreatesChanged
    
    
    click Create_Work_Order "#create_work_order" "814093845"
    
    
    
    Create_Work_Order_Line[("<b>➕ <em></em><br/>Create Work Order Line</b>")]:::recordCreatesAdded
    click Create_Work_Order_Line "#create_work_order_line" "3451497171"
    
    
    Get_Extra_Work_Asset_for_Operational_Account[("🔍 <em></em><br/>Get Extra Work Asset for Operational Account")]:::recordLookups
    click Get_Extra_Work_Asset_for_Operational_Account "#get_extra_work_asset_for_operational_account" "2905031740"
    
    Get_Extra_Work_Product[("🔍 <em></em><br/>Get Extra Work Product")]:::recordLookups
    click Get_Extra_Work_Product "#get_extra_work_product" "1338484692"
    
    Get_Maintenance_Plan[("<b>🔍 <em></em><br/>Get Maintenance Plan</b>")]:::recordLookupsChanged
    
    
    click Get_Maintenance_Plan "#get_maintenance_plan" "3920850060"
    
    
    Get_Product_Work_Type[("<b>🔍 <em></em><br/>Get Product Work Type</b>")]:::recordLookupsChanged
    
    
    click Get_Product_Work_Type "#get_product_work_type" "3925412178"
    
    
    
    Get_Quote_Line_Items[("<b>🔍 <em></em><br/>Get Quote Line Items</b>")]:::recordLookupsAdded
    click Get_Quote_Line_Items "#get_quote_line_items" "742878451"
    
    Get_Random_Child_of_Parent_Contract[("<b>🔍 <em></em><br/>Get Random Child of Parent Contract</b>")]:::recordLookupsAdded
    click Get_Random_Child_of_Parent_Contract "#get_random_child_of_parent_contract" "2631774189"
    
    
    Set_Work_Order_Initial_Values --> Create_Work_Order
    Create_Asset --> Set_Work_Order_Initial_Values
    
    Create_Work_Order -.-> END_Create_Work_Order
    
    Create_Work_Order ==> Get_Quote_Line_Items
    Create_Work_Order_Line ==> END_Create_Work_Order_Line
    
    Get_Extra_Work_Asset_for_Operational_Account --> Create_Asset
    Get_Extra_Work_Product --> Get_Extra_Work_Asset_for_Operational_Account
    Get_Maintenance_Plan --> Get_Extra_Work_Product
    
    Get_Product_Work_Type -.-> Get_Maintenance_Plan
    
    Get_Product_Work_Type ==> Get_Random_Child_of_Parent_Contract
    Get_Quote_Line_Items ==> Create_Work_Order_Line
    Get_Random_Child_of_Parent_Contract ==> Get_Maintenance_Plan
    
    START -->  Get_Product_Work_Type
    
    END_Create_Work_Order(( END )):::endClassRemoved
    
    END_Create_Work_Order_Line(( END )):::endClassAdded
    
    
    
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
    
    
    
    classDef actionCallsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef assignmentsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef collectionProcessorsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef customErrorsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef decisionsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef loopsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef recordCreatesAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef recordDeletesAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef recordLookupsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef recordUpdatesAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef screensAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef subflowsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef startClassAdded fill:green,color:white,stroke-width:4px,max-height:100px
    
    classDef actionCallsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef assignmentsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef collectionProcessorsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef customErrorsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef decisionsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef loopsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef recordCreatesRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef recordDeletesRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef recordLookupsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef recordUpdatesRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef screensRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef subflowsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef startClassRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    
    classDef actionCallsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef assignmentsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef collectionProcessorsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef customErrorsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef decisionsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef loopsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef recordCreatesChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef recordDeletesChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef recordLookupsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef recordUpdatesChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef screensChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef subflowsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef startClassChanged fill:orange,color:white,stroke-width:4px,max-height:100px
      
    linkStyle 3,4,9,10,11 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 2,8 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
    |:-- |:--:|:--:|:--:|:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>extraLineItem</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderLineItem</b></span>|
    
    ## Flow Nodes Details
    
    ### Create_Asset
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>AccountId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record__Prior.AccountId</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>AccountId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record__Prior.QuoteAccountId</b></span>|
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>AccountId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.AccountId</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>AccountId</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.QuoteAccountId</b></span>|
    
    ### Create_Work_Order
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Quote_Line_Items](#get_quote_line_items)</b></span>|
    
    ### 🟩Create_Work_Order_Line
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Create</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderLineItem</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Create Work Order Line</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    #### 🟩Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Description</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Quote_Line_Items.Description</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Subject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Quote_Line_Items.Description</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>WorkOrderId</b></span>|<span style="background-color: #a6e22e; color: black;"><b>extraWorkOrder.Id</b></span>|
    
    ### Get_Maintenance_Plan
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>ServiceContractId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Service_Contract__c</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ServiceContractId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Random_Child_of_Parent_Contract.Id</b></span>|
    
    ### Get_Product_Work_Type
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Maintenance_Plan](#get_maintenance_plan)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Random_Child_of_Parent_Contract](#get_random_child_of_parent_contract)</b></span>|
    
    ### 🟩Get_Quote_Line_Items
    
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>QuoteLineItem</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Quote Line Items</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Create_Work_Order_Line](#create_work_order_line)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>QuoteId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Id</b></span>|
    
    ### 🟩Get_Random_Child_of_Parent_Contract
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ServiceContract</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Random Child of Parent Contract</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Maintenance_Plan](#get_maintenance_plan)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ParentServiceContractId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Service_Contract__c</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Dec 13, 2024"

    _Dec 13, 2024, by fpardon-upeo in commit Org state on 2024-12-13 00:26 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "643246429"
    
    Set_Work_Order_Initial_Values[\"<b>🟰 <em></em><br/>Set Work Order Initial Values</b>"/]:::assignmentsChanged
    
    
    click Set_Work_Order_Initial_Values "#set_work_order_initial_values" "1220509163"
    
    
    Create_Asset[("➕ <em></em><br/>Create Asset")]:::recordCreates
    click Create_Asset "#create_asset" "3973496147"
    
    Create_Work_Order[("➕ <em></em><br/>Create Work Order")]:::recordCreates
    click Create_Work_Order "#create_work_order" "476657433"
    
    Get_Extra_Work_Asset_for_Operational_Account[("🔍 <em></em><br/>Get Extra Work Asset for Operational Account")]:::recordLookups
    click Get_Extra_Work_Asset_for_Operational_Account "#get_extra_work_asset_for_operational_account" "2905031740"
    
    Get_Extra_Work_Product[("🔍 <em></em><br/>Get Extra Work Product")]:::recordLookups
    click Get_Extra_Work_Product "#get_extra_work_product" "1338484692"
    
    
    Get_Maintenance_Plan[("<b>🔍 <em></em><br/>Get Maintenance Plan</b>")]:::recordLookupsAdded
    click Get_Maintenance_Plan "#get_maintenance_plan" "526720673"
    
    
    Get_Product_Work_Type[("<b>🔍 <em></em><br/>Get Product Work Type</b>")]:::recordLookupsChanged
    
    
    click Get_Product_Work_Type "#get_product_work_type" "3615289887"
    
    
    Set_Work_Order_Initial_Values --> Create_Work_Order
    Create_Asset --> Set_Work_Order_Initial_Values
    Create_Work_Order --> END_Create_Work_Order
    Get_Extra_Work_Asset_for_Operational_Account --> Create_Asset
    Get_Extra_Work_Product --> Get_Extra_Work_Asset_for_Operational_Account
    
    Get_Product_Work_Type -.-> Get_Extra_Work_Product
    
    Get_Maintenance_Plan ==> Get_Extra_Work_Product
    Get_Product_Work_Type ==> Get_Maintenance_Plan
    
    START -->  Get_Product_Work_Type
    END_Create_Work_Order(( END )):::endClass
    
    
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
    
    
    
    classDef actionCallsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef assignmentsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef collectionProcessorsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef customErrorsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef decisionsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef loopsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef recordCreatesAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef recordDeletesAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef recordLookupsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef recordUpdatesAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef screensAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef subflowsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef startClassAdded fill:green,color:white,stroke-width:4px,max-height:100px
    
    classDef actionCallsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef assignmentsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef collectionProcessorsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef customErrorsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef decisionsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef loopsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef recordCreatesRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef recordDeletesRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef recordLookupsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef recordUpdatesRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef screensRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef subflowsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef startClassRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    
    classDef actionCallsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef assignmentsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef collectionProcessorsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef customErrorsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef decisionsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef loopsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef recordCreatesChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef recordDeletesChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef recordLookupsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef recordUpdatesChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef screensChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef subflowsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef startClassChanged fill:orange,color:white,stroke-width:4px,max-height:100px
      
    linkStyle 6,7 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 5 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    ## General Information
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Accepted</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Ready for Execution</b></span>|
    
    ## Flow Nodes Details
    
    ### Set_Work_Order_Initial_Values
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>extraWorkOrder.SuggestedMaintenanceDate</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.ExpirationDate</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>extraWorkOrder.MaintenancePlanId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Maintenance_Plan.Id</b></span>|
    
    ### 🟩Get_Maintenance_Plan
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>MaintenancePlan</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Maintenance Plan</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Extra_Work_Product](#get_extra_work_product)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ServiceContractId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Service_Contract__c</b></span>|
    
    ### Get_Product_Work_Type
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Extra_Work_Product](#get_extra_work_product)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Maintenance_Plan](#get_maintenance_plan)</b></span>|
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Name</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Production Work</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Extra Work</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

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
    START(["<b>START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b></b>"]):::startClassChanged
    
    
    click START "#general-information" "643246429"
    
    
    Set_Work_Order_Initial_Values[\"<b>🟰 <em></em><br/>Set Work Order Initial Values</b>"/]:::assignmentsChanged
    
    
    click Set_Work_Order_Initial_Values "#set_work_order_initial_values" "3871008794"
    
    
    Create_Asset[("➕ <em></em><br/>Create Asset")]:::recordCreates
    click Create_Asset "#create_asset" "3973496147"
    
    Create_Work_Order[("➕ <em></em><br/>Create Work Order")]:::recordCreates
    click Create_Work_Order "#create_work_order" "476657433"
    
    Get_Extra_Work_Asset_for_Operational_Account[("🔍 <em></em><br/>Get Extra Work Asset for Operational Account")]:::recordLookups
    click Get_Extra_Work_Asset_for_Operational_Account "#get_extra_work_asset_for_operational_account" "2905031740"
    
    Get_Extra_Work_Product[("🔍 <em></em><br/>Get Extra Work Product")]:::recordLookups
    click Get_Extra_Work_Product "#get_extra_work_product" "1338484692"
    
    Get_Product_Work_Type[("🔍 <em></em><br/>Get Product Work Type")]:::recordLookups
    click Get_Product_Work_Type "#get_product_work_type" "3479751486"
    
    Set_Work_Order_Initial_Values --> Create_Work_Order
    Create_Asset --> Set_Work_Order_Initial_Values
    Create_Work_Order --> END_Create_Work_Order
    Get_Extra_Work_Asset_for_Operational_Account --> Create_Asset
    Get_Extra_Work_Product --> Get_Extra_Work_Asset_for_Operational_Account
    Get_Product_Work_Type --> Get_Extra_Work_Product
    START -->  Get_Product_Work_Type
    END_Create_Work_Order(( END )):::endClass
    
    
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
    
    
    
    classDef actionCallsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef assignmentsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef collectionProcessorsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef customErrorsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef decisionsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef loopsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef recordCreatesAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef recordDeletesAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef recordLookupsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef recordUpdatesAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef screensAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef subflowsAdded fill:green,color:white,stroke-width:4px,max-height:100px
    classDef startClassAdded fill:green,color:white,stroke-width:4px,max-height:100px
    
    classDef actionCallsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef assignmentsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef collectionProcessorsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef customErrorsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef decisionsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef loopsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef recordCreatesRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef recordDeletesRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef recordLookupsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef recordUpdatesRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef screensRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef subflowsRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    classDef startClassRemoved fill:red,color:white,stroke-width:4px,max-height:100px
    
    classDef actionCallsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef assignmentsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef collectionProcessorsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef customErrorsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef decisionsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef loopsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef recordCreatesChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef recordDeletesChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef recordLookupsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef recordUpdatesChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef screensChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef subflowsChanged fill:orange,color:white,stroke-width:4px,max-height:100px
    classDef startClassChanged fill:orange,color:white,stroke-width:4px,max-height:100px
      
    ```
    
    ## General Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⚠️ Draft</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Active</b></span>|
    
    ## Flow Nodes Details
    
    ### Set_Work_Order_Initial_Values
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>extraWorkOrder.AccountId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.AccountId</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>extraWorkOrder.ServiceContractId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Opportunity.Service_Contract__c</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>extraWorkOrder.AccountId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.QuoteAccountId</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>extraWorkOrder.ServiceContractId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Service_Contract__c</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>extraWorkOrder.Opportunity__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.OpportunityId</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>extraWorkOrder.Quote__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Id</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>extraWorkOrder.Street</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Opportunity.Account.ShippingStreet</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>extraWorkOrder.City</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Opportunity.Account.ShippingCity</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>extraWorkOrder.PostalCode</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Opportunity.Account.ShippingPostalCode</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>extraWorkOrder.Country</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Opportunity.Account.ShippingCountry</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>extraWorkOrder.Street</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.QuoteAccount.ShippingStreet</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>extraWorkOrder.City</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.QuoteAccount.ShippingCity</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>extraWorkOrder.PostalCode</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.QuoteAccount.ShippingPostalCode</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>extraWorkOrder.Country</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.QuoteAccount.ShippingCountry</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>extraWorkOrder.ServiceTerritoryId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Opportunity.ATAK_Projectx__r.Service_Territory__c</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>extraWorkOrder.ServiceTerritoryId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.ATAK_Project__r.Service_Territory__c</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>extraWorkOrder.SuggestedMaintenanceDate</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Opportunity.CloseDate</i></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Dec 10, 2024 (Initial)"

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
    click START "#general-information" "656897102"
    
    Set_Work_Order_Initial_Values[\"🟰 <em></em><br/>Set Work Order Initial Values"/]:::assignments
    click Set_Work_Order_Initial_Values "#set_work_order_initial_values" "3113885255"
    
    Create_Asset[("➕ <em></em><br/>Create Asset")]:::recordCreates
    click Create_Asset "#create_asset" "3973496147"
    
    Create_Work_Order[("➕ <em></em><br/>Create Work Order")]:::recordCreates
    click Create_Work_Order "#create_work_order" "476657433"
    
    Get_Extra_Work_Asset_for_Operational_Account[("🔍 <em></em><br/>Get Extra Work Asset for Operational Account")]:::recordLookups
    click Get_Extra_Work_Asset_for_Operational_Account "#get_extra_work_asset_for_operational_account" "2905031740"
    
    Get_Extra_Work_Product[("🔍 <em></em><br/>Get Extra Work Product")]:::recordLookups
    click Get_Extra_Work_Product "#get_extra_work_product" "1338484692"
    
    Get_Product_Work_Type[("🔍 <em></em><br/>Get Product Work Type")]:::recordLookups
    click Get_Product_Work_Type "#get_product_work_type" "3479751486"
    
    Set_Work_Order_Initial_Values --> Create_Work_Order
    Create_Asset --> Set_Work_Order_Initial_Values
    Create_Work_Order --> END_Create_Work_Order
    Get_Extra_Work_Asset_for_Operational_Account --> Create_Asset
    Get_Extra_Work_Product --> Get_Extra_Work_Asset_for_Operational_Account
    Get_Product_Work_Type --> Get_Extra_Work_Product
    START -->  Get_Product_Work_Type
    END_Create_Work_Order(( END )):::endClass
    
    
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
    |Object|Quote|
    |Process Type| Auto Launched Flow|
    |Trigger Type| Record After Save|
    |Record Trigger Type| Update|
    |Label|[Quote] - [After-Save] - Create Work Order on Acceptance|
    |Status|⚠️ Draft|
    |Does Require Record Changed To Meet Criteria|✅|
    |Environments|Default|
    |Interview Label|[Quote] - [After-Save] - Create Work Order on Acceptance {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Get_Product_Work_Type](#get_product_work_type)|
    |Next Node|[Get_Product_Work_Type](#get_product_work_type)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Status| Equal To|Accepted|
    
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
    |:-- |:--:|:--:|:--:|:--:|:--: |
    |assetId|String|⬜|⬜|⬜|<!-- -->|
    |extraWorkOrder|SObject|⬜|⬜|⬜|WorkOrder|
    
    
    ## Flow Nodes Details
    
    ### Set_Work_Order_Initial_Values
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Set Work Order Initial Values|
    |Connector|[Create_Work_Order](#create_work_order)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |extraWorkOrder.AccountId| Assign|$Record.AccountId|
    |extraWorkOrder.ServiceContractId| Assign|$Record.Opportunity.Service_Contract__c|
    |extraWorkOrder.Subject| Assign|$Record.Name|
    |extraWorkOrder.Opportunity__c| Assign|$Record.OpportunityId|
    |extraWorkOrder.Priority| Assign|High|
    |extraWorkOrder.Street| Assign|$Record.Opportunity.Account.ShippingStreet|
    |extraWorkOrder.City| Assign|$Record.Opportunity.Account.ShippingCity|
    |extraWorkOrder.PostalCode| Assign|$Record.Opportunity.Account.ShippingPostalCode|
    |extraWorkOrder.Country| Assign|$Record.Opportunity.Account.ShippingCountry|
    |extraWorkOrder.AssetId| Assign|[Create_Asset](#create_asset)|
    |extraWorkOrder.Status| Assign|Unscheduled|
    |extraWorkOrder.ServiceTerritoryId| Assign|$Record.Opportunity.ATAK_Projectx__r.Service_Territory__c|
    |extraWorkOrder.WorkTypeId| Assign|Get_Product_Work_Type.Id|
    |extraWorkOrder.SuggestedMaintenanceDate| Assign|$Record.Opportunity.CloseDate|
    
    
    
    
    ### Create_Asset
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Create|
    |Object|Asset|
    |Label|Create Asset|
    |Operation Mult Matching Records|UpdateLatestRecord|
    |Operation One Matching Record|UpdateAllRecords|
    |Operation Zero Matching Records|AddRecord|
    |Store Output Automatically|✅|
    |Connector|[Set_Work_Order_Initial_Values](#set_work_order_initial_values)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|AccountId| Equal To|$Record__Prior.AccountId|
    |2|Product2Id| Equal To|Get_Extra_Work_Product.Id|
    
    
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |ATAK_Project__c|$Record.Opportunity.ATAK_Projectx__c|
    |AccountId|$Record.AccountId|
    |Name|assetName|
    |Product2Id|Get_Extra_Work_Product.Id|
    |Service_Territory__c|$Record.Opportunity.ATAK_Projectx__r.Service_Territory__c|
    
    
    
    
    ### Create_Work_Order
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Create|
    |Label|Create Work Order|
    |Input Reference|extraWorkOrder|
    
    
    ### Get_Extra_Work_Asset_for_Operational_Account
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|Asset|
    |Label|Get Extra Work Asset for Operational Account|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Create_Asset](#create_asset)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Product2Id| Equal To|Get_Extra_Work_Product.Id|
    |2|AccountId| Equal To|$Record.AccountId|
    
    
    
    
    ### Get_Extra_Work_Product
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|Product2|
    |Label|Get Extra Work Product|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Get_Extra_Work_Asset_for_Operational_Account](#get_extra_work_asset_for_operational_account)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Name| Equal To|Extra Work|
    
    
    
    
    ### Get_Product_Work_Type
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkType|
    |Label|Get Product Work Type|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Get_Extra_Work_Product](#get_extra_work_product)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Name| Equal To|Production Work|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

