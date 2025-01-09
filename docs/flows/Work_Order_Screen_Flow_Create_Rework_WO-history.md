# Work_Order_Screen_Flow_Create_Rework_WO history

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
    click START "#general-information" "817197096"
    
    Success_Message("⚡ <em></em><br/>Success Message"):::actionCalls
    click Success_Message "#success_message" "876032065"
    
    Relink_The_Parent_WO_of_Existing_Tasks[\"🟰 <em></em><br/>Relink The Parent WO of Existing Tasks"/]:::assignments
    click Relink_The_Parent_WO_of_Existing_Tasks "#relink_the_parent_wo_of_existing_tasks" "278452676"
    
    Set_WOL_Values[\"🟰 <em></em><br/>Set WOL Values"/]:::assignments
    click Set_WOL_Values "#set_wol_values" "716513612"
    
    Loop_Through_Repeater_Records{{"🔁 <em></em><br/>Loop Through Repeater Records"}}:::loops
    click Loop_Through_Repeater_Records "#loop_through_repeater_records" "559170711"
    
    Loop_Through_Selected_Existing_Tasks{{"🔁 <em></em><br/>Loop Through Selected Existing Tasks"}}:::loops
    click Loop_Through_Selected_Existing_Tasks "#loop_through_selected_existing_tasks" "1665229075"
    
    Create_Rework_WO[("<b>➕ <em></em><br/>Create Rework WO</b>")]:::recordCreatesChanged
    
    
    click Create_Rework_WO "#create_rework_wo" "345420091"
    
    
    Create_WOL[("➕ <em></em><br/>Create WOL")]:::recordCreates
    click Create_WOL "#create_wol" "1240559051"
    
    Get_Related_WOL[("🔍 <em></em><br/>Get Related WOL")]:::recordLookups
    click Get_Related_WOL "#get_related_wol" "2097349637"
    
    Get_Work_Order_Information[("🔍 <em></em><br/>Get Work Order Information")]:::recordLookups
    click Get_Work_Order_Information "#get_work_order_information" "2012729330"
    
    Get_Work_Type[("🔍 <em></em><br/>Get Work Type")]:::recordLookups
    click Get_Work_Type "#get_work_type" "4286157225"
    
    Rework_Information(["💻 <em></em><br/>Rework  Information"]):::screens
    click Rework_Information "#rework_information" "554970393"
    
    Success_Message --> END_Success_Message
    Relink_The_Parent_WO_of_Existing_Tasks --> Loop_Through_Selected_Existing_Tasks
    Set_WOL_Values --> Loop_Through_Repeater_Records
    Loop_Through_Repeater_Records --> |"For Each"|Set_WOL_Values
    Loop_Through_Repeater_Records ---> |"After Last"|Create_WOL
    Loop_Through_Selected_Existing_Tasks --> |"For Each"|Relink_The_Parent_WO_of_Existing_Tasks
    Loop_Through_Selected_Existing_Tasks ---> |"After Last"|Loop_Through_Repeater_Records
    Create_Rework_WO --> Loop_Through_Selected_Existing_Tasks
    Create_WOL --> Success_Message
    Get_Related_WOL --> Get_Work_Type
    Get_Work_Order_Information --> Get_Related_WOL
    Get_Work_Type --> Rework_Information
    Rework_Information --> Create_Rework_WO
    START -->  Get_Work_Order_Information
    END_Success_Message(( END )):::endClass
    
    
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
    
    ### Create_Rework_WO
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>ParentWorkOrderId</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Work_Order_Information.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Rework_Planned__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
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
    START(["START<br/><b>Screen Flow</b>"]):::startClass
    click START "#general-information" "817197096"
    
    Success_Message("⚡ <em></em><br/>Success Message"):::actionCalls
    click Success_Message "#success_message" "876032065"
    
    Relink_The_Parent_WO_of_Existing_Tasks[\"🟰 <em></em><br/>Relink The Parent WO of Existing Tasks"/]:::assignments
    click Relink_The_Parent_WO_of_Existing_Tasks "#relink_the_parent_wo_of_existing_tasks" "278452676"
    
    Set_WOL_Values[\"🟰 <em></em><br/>Set WOL Values"/]:::assignments
    click Set_WOL_Values "#set_wol_values" "716513612"
    
    Loop_Through_Repeater_Records{{"🔁 <em></em><br/>Loop Through Repeater Records"}}:::loops
    click Loop_Through_Repeater_Records "#loop_through_repeater_records" "559170711"
    
    Loop_Through_Selected_Existing_Tasks{{"🔁 <em></em><br/>Loop Through Selected Existing Tasks"}}:::loops
    click Loop_Through_Selected_Existing_Tasks "#loop_through_selected_existing_tasks" "1665229075"
    
    Create_Rework_WO[("➕ <em></em><br/>Create Rework WO")]:::recordCreates
    click Create_Rework_WO "#create_rework_wo" "3724024733"
    
    Create_WOL[("➕ <em></em><br/>Create WOL")]:::recordCreates
    click Create_WOL "#create_wol" "1240559051"
    
    Get_Related_WOL[("🔍 <em></em><br/>Get Related WOL")]:::recordLookups
    click Get_Related_WOL "#get_related_wol" "2097349637"
    
    Get_Work_Order_Information[("🔍 <em></em><br/>Get Work Order Information")]:::recordLookups
    click Get_Work_Order_Information "#get_work_order_information" "2012729330"
    
    Get_Work_Type[("🔍 <em></em><br/>Get Work Type")]:::recordLookups
    click Get_Work_Type "#get_work_type" "4286157225"
    
    Rework_Information(["💻 <em></em><br/>Rework  Information"]):::screens
    click Rework_Information "#rework_information" "554970393"
    
    Success_Message --> END_Success_Message
    Relink_The_Parent_WO_of_Existing_Tasks --> Loop_Through_Selected_Existing_Tasks
    Set_WOL_Values --> Loop_Through_Repeater_Records
    Loop_Through_Repeater_Records --> |"For Each"|Set_WOL_Values
    Loop_Through_Repeater_Records ---> |"After Last"|Create_WOL
    Loop_Through_Selected_Existing_Tasks --> |"For Each"|Relink_The_Parent_WO_of_Existing_Tasks
    Loop_Through_Selected_Existing_Tasks ---> |"After Last"|Loop_Through_Repeater_Records
    Create_Rework_WO --> Loop_Through_Selected_Existing_Tasks
    Create_WOL --> Success_Message
    Get_Related_WOL --> Get_Work_Type
    Get_Work_Order_Information --> Get_Related_WOL
    Get_Work_Type --> Rework_Information
    Rework_Information --> Create_Rework_WO
    START -->  Get_Work_Order_Information
    END_Success_Message(( END )):::endClass
    
    
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
    |Label|[Work Order][Screen-Flow] Create Rework WO|
    |Status|Active|
    |Description|This flow allows the contract manager to create a rework work order.|
    |Environments|Default|
    |Interview Label|[Work Order][Screen-Flow] Create Rework WO {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Get_Work_Order_Information](#get_work_order_information)|
    |Next Node|[Get_Work_Order_Information](#get_work_order_information)|
    
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|Description|
    |:-- |:--:|:--:|:--:|:--:|:--:|:--  |
    |ExistingWOLCollections|SObject|✅|✅|⬜|WorkOrderLineItem|<!-- -->|
    |ExistingWOLRecord|SObject|⬜|✅|⬜|WorkOrderLineItem|<!-- -->|
    |recordId|String|⬜|✅|⬜|<!-- -->|<!-- -->|
    |ReworkWOId|String|⬜|✅|⬜|<!-- -->|<!-- -->|
    |WOLCollection|SObject|✅|✅|⬜|WorkOrderLineItem|<!-- -->|
    |WOLRecord|SObject|⬜|✅|⬜|WorkOrderLineItem|<!-- -->|
    
    
    ## Formulas
    
    |Name|Data Type|Expression|Description|
    |:-- |:--:|:-- |:--  |
    |ReworkSubject|String|"Rework of" + " " + {!Get_Work_Order_Information.WorkOrderNumber}|<!-- -->|
    |ReworkURL|String|LEFT({!$Api.Partner_Server_URL_340},FIND("/services", {!$Api.Partner_Server_URL_340})) & {!ReworkWOId}|<!-- -->|
    |today|Date|TODAY()|<!-- -->|
    
    
    ## Flow Nodes Details
    
    ### Success_Message
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Action Call|
    |Label|Success Message|
    |Action Type|Component|
    |Action Name|c:showToast|
    |Flow Transaction Model|CurrentTransaction|
    |Name Segment|c:showToast|
    |Offset|0|
    |Store Output Automatically|✅|
    |Version Segment|1|
    |Type (input)|Succes|
    |Message (input)|{url} was created.|
    |Mode (input)|dismissible|
    |Duration (input)|5|
    |Url Link (input)|ReworkURL|
    |Url Label (input)|Rework record|
    
    
    ### Relink_The_Parent_WO_of_Existing_Tasks
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Relink The Parent WO of Existing Tasks|
    |Connector|[Loop_Through_Selected_Existing_Tasks](#loop_through_selected_existing_tasks)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |ExistingWOLRecord.Id| Assign|Loop_Through_Selected_Existing_Tasks.Id|
    |ExistingWOLRecord.WorkOrderId| Assign|ReworkWOId|
    |ExistingWOLRecord.Description| Assign|Loop_Through_Selected_Existing_Tasks.Description|
    |WOLCollection| Add|ExistingWOLRecord|
    
    
    
    
    ### Set_WOL_Values
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Set WOL Values|
    |Connector|[Loop_Through_Repeater_Records](#loop_through_repeater_records)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |WOLRecord.Description| Assign|Loop_Through_Repeater_Records.Task|
    |WOLRecord.WorkOrderId| Assign|ReworkWOId|
    |WOLRecord.Status| Assign|New|
    |WOLCollection| Add|WOLRecord|
    
    
    
    
    ### Loop_Through_Repeater_Records
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Loop|
    |Label|Loop Through Repeater Records|
    |Collection Reference|NewTasks.AllItems|
    |Iteration Order|Asc|
    |Next Value Connector|[Set_WOL_Values](#set_wol_values)|
    |No More Values Connector|[Create_WOL](#create_wol)|
    
    
    ### Loop_Through_Selected_Existing_Tasks
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Loop|
    |Label|Loop Through Selected Existing Tasks|
    |Collection Reference|ExistingWOLCollections|
    |Iteration Order|Asc|
    |Next Value Connector|[Relink_The_Parent_WO_of_Existing_Tasks](#relink_the_parent_wo_of_existing_tasks)|
    |No More Values Connector|[Loop_Through_Repeater_Records](#loop_through_repeater_records)|
    
    
    ### Create_Rework_WO
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Create|
    |Object|WorkOrder|
    |Label|Create Rework WO|
    |Assign Record Id To Reference|ReworkWOId|
    |Connector|[Loop_Through_Selected_Existing_Tasks](#loop_through_selected_existing_tasks)|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |AccountId|Get_Work_Order_Information.AccountId|
    |AssetId|Get_Work_Order_Information.AssetId|
    |MaintenancePlanId|Get_Work_Order_Information.MaintenancePlanId|
    |Rework_for_Work_Order__c|Get_Work_Order_Information.Id|
    |Rework_reasons__c|Rework_reasons|
    |ServiceContractId|Get_Work_Order_Information.ServiceContractId|
    |ServiceTerritoryId|Get_Work_Order_Information.ServiceTerritoryId|
    |Subject|Subject|
    |SuggestedMaintenanceDate|today|
    |WorkTypeId|Get_Work_Type.Id|
    
    
    
    
    ### Create_WOL
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Create|
    |Label|Create WOL|
    |Input Reference|WOLCollection|
    |Connector|[Success_Message](#success_message)|
    
    
    ### Get_Related_WOL
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkOrderLineItem|
    |Label|Get Related WOL|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|⬜|
    |Store Output Automatically|✅|
    |Connector|[Get_Work_Type](#get_work_type)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|WorkOrderId| Equal To|Get_Work_Order_Information.Id|
    
    
    
    
    ### Get_Work_Order_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkOrder|
    |Label|Get Work Order Information|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Get_Related_WOL](#get_related_wol)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|recordId|
    
    
    
    
    ### Get_Work_Type
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkType|
    |Label|Get Work Type|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Rework_Information](#rework_information)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Name| Equal To|Rework|
    
    
    
    
    ### Rework_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Screen|
    |Label|Rework  Information|
    |Allow Back|⬜|
    |Allow Finish|✅|
    |Allow Pause|⬜|
    |Next Or Finish Button Label|Create|
    |Show Footer|✅|
    |Show Header|⬜|
    |Connector|[Create_Rework_WO](#create_rework_wo)|
    
    
    #### Subject
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|String|
    |Default Value|ReworkSubject|
    |Field Text|Subject|
    |Field Type| Input Field|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|⬜|
    
    
    
    
    #### Rework_reasons
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|String|
    |Choice References|ReworkReasonsList|
    |Field Text|Rework reasons|
    |Field Type| Dropdown Box|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|✅|
    
    
    
    
    #### Rework_Tasks
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|String|
    |Choice References|- Redo_tasks_from_the_previous_work_order<br/>- Add_new_tasks<br/>|
    |Field Text|Rework Tasks|
    |Field Type| Dropdown Box|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|✅|
    
    
    
    
    #### ListExistingWOL
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type Mappings|typeName: T<br/>typeValue: WorkOrderLineItem<br/>|
    |Extension Name|flowruntime:datatable|
    |Field Type| Component Instance|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|✅|
    |Output Parameters|assignToReference: ExistingWOLCollections<br/>name: selectedRows<br/>|
    |Visibility Rule|conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: Rework_Tasks<br/>&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;elementReference: Redo_tasks_from_the_previous_work_order<br/>|
    |Label (input)|Select tasks to be redone|
    |Selection Mode (input)|MULTI_SELECT|
    |Min Row Selection (input)|1|
    |Table Data (input)|[Get_Related_WOL](#get_related_wol)|
    |Columns (input)|[{"apiName":"Description","guid":"column-7038","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":0,"label":"Description","type":"text"}]|
    |Should Display Label (input)|✅|
    
    
    
    
    #### Add_additional_tasks
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|Boolean|
    |Field Text|Add additional tasks?|
    |Field Type| Input Field|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|✅|
    |Visibility Rule|conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: Rework_Tasks<br/>&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;elementReference: Redo_tasks_from_the_previous_work_order<br/>|
    
    
    
    
    #### Task
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Text|Task|
    |Field Type| Large Text Area|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|✅|
    |Parent Field|[NewTasks](#newtasks)|
    
    
    
    
    #### NewTasks
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Type| Repeater|
    |Is Required|⬜|
    |Visibility Rule|conditionLogic: or<br/>conditions:<br/>&nbsp;&nbsp;- leftValueReference: Add_additional_tasks<br/>&nbsp;&nbsp;&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;booleanValue: true<br/>&nbsp;&nbsp;- leftValueReference: Rework_Tasks<br/>&nbsp;&nbsp;&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elementReference: Add_new_tasks<br/>|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

