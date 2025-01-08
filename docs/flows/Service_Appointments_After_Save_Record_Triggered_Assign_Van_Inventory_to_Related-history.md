# Service_Appointments_After_Save_Record_Triggered_Assign_Van_Inventory_to_Related history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Dec 6, 2024 (Initial)"

    _Dec 6, 2024, by fpardon-upeo in commit Org state on 2024-12-06 00:30 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "3799994820"
    
    Set_Van_Inventory_Values[\"🟰 <em></em><br/>Set Van Inventory Values"/]:::assignments
    click Set_Van_Inventory_Values "#set_van_inventory_values" "2900780539"
    
    Loop_Through_Material_Items{{"🔁 <em></em><br/>Loop Through Material Items"}}:::loops
    click Loop_Through_Material_Items "#loop_through_material_items" "3219178592"
    
    Create_Van_Inventory_Items[("➕ <em></em><br/>Create Van Inventory Items")]:::recordCreates
    click Create_Van_Inventory_Items "#create_van_inventory_items" "2117213628"
    
    Get_All_Product_Items[("🔍 <em></em><br/>Get All Product Items")]:::recordLookups
    click Get_All_Product_Items "#get_all_product_items" "1260749785"
    
    Get_Assigned_Resources[("🔍 <em></em><br/>Get Assigned Resources")]:::recordLookups
    click Get_Assigned_Resources "#get_assigned_resources" "3075861501"
    
    Get_Service_Crew[("🔍 <em></em><br/>Get Service Crew")]:::recordLookups
    click Get_Service_Crew "#get_service_crew" "908537936"
    
    Set_Van_Inventory_Values --> Loop_Through_Material_Items
    Loop_Through_Material_Items --> |"For Each"|Set_Van_Inventory_Values
    Loop_Through_Material_Items ---> |"After Last"|Create_Van_Inventory_Items
    Create_Van_Inventory_Items --> END_Create_Van_Inventory_Items
    Get_All_Product_Items --> Loop_Through_Material_Items
    Get_Assigned_Resources --> Get_Service_Crew
    Get_Service_Crew --> Get_All_Product_Items
    START -->  Get_Assigned_Resources
    END_Create_Van_Inventory_Items(( END )):::endClass
    
    
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
    |Object|ServiceAppointment|
    |Process Type| Auto Launched Flow|
    |Trigger Type| Record After Save|
    |Record Trigger Type| Update|
    |Label|[Service Appointments][After-Save][Record-Triggered] Assign Van Inventory to Related WO|
    |Status|Obsolete|
    |Description|This flow retrieves a van inventory based on the assigned resources of a service appointment.|
    |Environments|Default|
    |Interview Label|[Service Appointments][After-Save][Record-Triggered] Assign Van Inventory to Related WO {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Get_Assigned_Resources](#get_assigned_resources)|
    |Next Node|[Get_Assigned_Resources](#get_assigned_resources)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Status| Is Changed|✅|
    |2|Status| Equal To|Dispatched|
    |3|Work_Type_Name__c| Equal To|Internal Depot|
    
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|Description|
    |:-- |:--:|:--:|:--:|:--:|:--:|:--  |
    |ProductRequiredCollections|SObject|✅|✅|⬜|ProductRequired|<!-- -->|
    |ProductRequiredRecord|SObject|⬜|✅|⬜|ProductRequired|<!-- -->|
    
    
    ## Flow Nodes Details
    
    ### Set_Van_Inventory_Values
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Set Van Inventory Values|
    |Connector|[Loop_Through_Material_Items](#loop_through_material_items)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |ProductRequiredRecord.Product2Id| Assign|Loop_Through_Material_Items.Product2Id|
    |ProductRequiredRecord.ParentRecordId| Assign|$Record.ParentRecordId|
    |ProductRequiredCollections| Add|ProductRequiredRecord|
    
    
    
    
    ### Loop_Through_Material_Items
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Loop|
    |Label|Loop Through Material Items|
    |Collection Reference|[Get_All_Product_Items](#get_all_product_items)|
    |Iteration Order|Asc|
    |Next Value Connector|[Set_Van_Inventory_Values](#set_van_inventory_values)|
    |No More Values Connector|[Create_Van_Inventory_Items](#create_van_inventory_items)|
    
    
    ### Create_Van_Inventory_Items
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Create|
    |Label|Create Van Inventory Items|
    |Input Reference|ProductRequiredCollections|
    
    
    ### Get_All_Product_Items
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|ProductItem|
    |Label|Get All Product Items|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|⬜|
    |Store Output Automatically|✅|
    |Connector|[Loop_Through_Material_Items](#loop_through_material_items)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Van_Crew__c| Equal To|Get_Service_Crew.Id|
    
    
    
    
    ### Get_Assigned_Resources
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|AssignedResource|
    |Label|Get Assigned Resources|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Get_Service_Crew](#get_service_crew)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|ServiceAppointmentId| Equal To|$Record.Id|
    |2|Id| Is Null|<!-- -->|
    
    
    
    
    ### Get_Service_Crew
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|ServiceCrew|
    |Label|Get Service Crew|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Get_All_Product_Items](#get_all_product_items)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|Get_Assigned_Resources.ServiceCrewId|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

