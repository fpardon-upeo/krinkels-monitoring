# Work_Order_Mobile_Flow_Screen_Flow_Log_LMRA_Information history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Jan 11, 2025"

    _Jan 11, 2025, by fpardon-upeo in commit Org state on 2025-01-11 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START"]):::startClass
    click START "#general-information" "459049158"
    
    
    Set_Tasks_Of_Day_Value[\"<b>🟰 <em></em><br/>Set Tasks Of Day Value</b>"/]:::assignmentsAdded
    click Set_Tasks_Of_Day_Value "#set_tasks_of_day_value" "3916738752"
    
    
    Full_or_Limited_LMRA{"🔀 <em></em><br/>Full or Limited LMRA ?"}:::decisions
    click Full_or_Limited_LMRA "#full_or_limited_lmra" "2088660188"
    
    Limited_LMRA_Confirmed{"🔀 <em></em><br/>Limited LMRA Confirmed ?"}:::decisions
    click Limited_LMRA_Confirmed "#limited_lmra_confirmed" "2857364459"
    
    LMRA_Already_Done{"🔀 <em></em><br/>LMRA Already Done ?"}:::decisions
    click LMRA_Already_Done "#lmra_already_done" "2884183025"
    
    
    Loop_Lines{{"<b>🔁 <em></em><br/>Loop Lines</b>"}}:::loopsAdded
    click Loop_Lines "#loop_lines" "1034807019"
    
    
    Create_Full_LMRA[("➕ <em></em><br/>Create Full LMRA")]:::recordCreates
    click Create_Full_LMRA "#create_full_lmra" "3999568703"
    
    Create_Limited_LMRA[("➕ <em></em><br/>Create Limited LMRA")]:::recordCreates
    click Create_Limited_LMRA "#create_limited_lmra" "2204160202"
    
    Get_Related_Operational_Account[("<b>🔍 <em></em><br/>Get Related Operational Account</b>")]:::recordLookupsChanged
    
    
    click Get_Related_Operational_Account "#get_related_operational_account" "3839606916"
    
    
    Get_Related_Work_Order[("<b>🔍 <em></em><br/>Get Related Work Order</b>")]:::recordLookupsChanged
    
    
    click Get_Related_Work_Order "#get_related_work_order" "514490499"
    
    
    
    Get_Work_Lines[("<b>🔍 <em></em><br/>Get Work Lines</b>")]:::recordLookupsAdded
    click Get_Work_Lines "#get_work_lines" "2948152931"
    
    
    Get_Work_Step_Information[("🔍 <em></em><br/>Get Work Step Information")]:::recordLookups
    click Get_Work_Step_Information "#get_work_step_information" "968707648"
    
    Confirmed_LMRA_Done_at_WO_level[("🛠️ <em></em><br/>Confirmed LMRA Done at WO level")]:::recordUpdates
    click Confirmed_LMRA_Done_at_WO_level "#confirmed_lmra_done_at_wo_level" "3771151378"
    
    Update_Work_Step_Status_to_Complete[("🛠️ <em></em><br/>Update Work Step Status to Complete")]:::recordUpdates
    click Update_Work_Step_Status_to_Complete "#update_work_step_status_to_complete" "1882464419"
    
    Update_Work_Step_Status_to_Complete_After[("🛠️ <em></em><br/>Update Work Step Status to Complete After")]:::recordUpdates
    click Update_Work_Step_Status_to_Complete_After "#update_work_step_status_to_complete_after" "247084983"
    
    Full_LMRA_Information(["<b>💻 <em></em><br/>Full LMRA Information</b>"]):::screensChanged
    
    
    click Full_LMRA_Information "#full_lmra_information" "793521090"
    
    
    Limited_LMRA_Information(["💻 <em></em><br/>Limited LMRA Information"]):::screens
    click Limited_LMRA_Information "#limited_lmra_information" "3519037032"
    
    LMRA_Done_Message(["💻 <em></em><br/>LMRA Done Message"]):::screens
    click LMRA_Done_Message "#lmra_done_message" "581062939"
    
    
    Set_Tasks_Of_Day_Value ==> Loop_Lines
    
    Full_or_Limited_LMRA --> |"Full"| Full_LMRA_Information
    Full_or_Limited_LMRA --> |"Limited"| Limited_LMRA_Information
    Limited_LMRA_Confirmed --> |"Yes"| Create_Limited_LMRA
    Limited_LMRA_Confirmed --> |"No"| Limited_LMRA_Information
    LMRA_Already_Done --> |"No"| Full_or_Limited_LMRA
    LMRA_Already_Done --> |"Yes"| LMRA_Done_Message
    
    Loop_Lines ==> |"🟩<b>For Each</b>"|Set_Tasks_Of_Day_Value
    Loop_Lines ===> |"🟩<b>After Last</b>"|LMRA_Already_Done
    
    Create_Full_LMRA --> Update_Work_Step_Status_to_Complete_After
    Create_Limited_LMRA --> Update_Work_Step_Status_to_Complete_After
    
    Get_Related_Operational_Account -.-> LMRA_Already_Done
    Get_Related_Work_Order -.-> Get_Related_Operational_Account
    
    Get_Related_Operational_Account ==> Loop_Lines
    Get_Related_Work_Order ==> Get_Work_Lines
    Get_Work_Lines ==> Get_Related_Operational_Account
    
    Get_Work_Step_Information --> Get_Related_Work_Order
    Confirmed_LMRA_Done_at_WO_level --> END_Confirmed_LMRA_Done_at_WO_level
    Update_Work_Step_Status_to_Complete --> END_Update_Work_Step_Status_to_Complete
    Update_Work_Step_Status_to_Complete_After --> Confirmed_LMRA_Done_at_WO_level
    Full_LMRA_Information --> Create_Full_LMRA
    Limited_LMRA_Information --> Limited_LMRA_Confirmed
    LMRA_Done_Message --> Update_Work_Step_Status_to_Complete
    START -->  Get_Work_Step_Information
    END_Confirmed_LMRA_Done_at_WO_level(( END )):::endClass
    END_Update_Work_Step_Status_to_Complete(( END )):::endClass
    
    
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
      
    linkStyle 0,7,8,13,14,15 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 11,12 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    <!-- Flow description -->
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|Description|
    |:-- |:--:|:--:|:--:|:--:|:--:|:--  |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>tasksOfDay</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>workLineLoopVar</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderLineItem</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>workOrderLines</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderLineItem</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    
    ## Flow Nodes Details
    
    
    ### 🟩Set_Tasks_Of_Day_Value
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Assignment</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Set Tasks Of Day Value</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Loop_Lines](#loop_lines)</b></span>|
    
    #### 🟩Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>tasksOfDay</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Add</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!workLineLoopVar.Description},</b></span>|
    
    ### 🟩Loop_Lines
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Loop</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Loop Lines</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Next Value To Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>workLineLoopVar</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Collection Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>workOrderLines</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Iteration Order</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Asc</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Next Value Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Set_Tasks_Of_Day_Value](#set_tasks_of_day_value)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>No More Values Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[LMRA_Already_Done](#lmra_already_done)</b></span>|
    
    ### Get_Related_Operational_Account
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[LMRA_Already_Done](#lmra_already_done)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Loop_Lines](#loop_lines)</b></span>|
    
    ### Get_Related_Work_Order
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Related_Operational_Account](#get_related_operational_account)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Work_Lines](#get_work_lines)</b></span>|
    
    ### 🟩Get_Work_Lines
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderLineItem</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Work Lines</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Output Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>workOrderLines</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Id<br/>- Description<br/></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Related_Operational_Account](#get_related_operational_account)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>workOrderRecord.Id</b></span>|
    
    ### Full_LMRA_Information
    
    #### 🟩Header
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p style="text-align: center;"><img src="https://krinkelsgreencare--upeodev.sandbox.file.force.com/sfc/servlet.shepherd/version/download/068KF000001eO36?asPdf=false&amp;operationContext=CHATTER" alt="LMRA_Header.png"></p></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|
    
    #### 🟩Do_you_have_to_use_a_thermal_burner_because_there_is_no_alternative
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Boolean</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Choice References</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Choice_Yes<br/>- Choice_No<br/></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Do you have to use a thermal burner (because there is no alternative?)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Dropdown Box</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    #### Tasks_of_the_Day_1
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Value</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!tasksOfDay}</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 26, 2024"

    _Nov 26, 2024, by fpardon-upeo in commit Org state on 2024-11-26 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START"]):::startClass
    click START "#general-information" "459049158"
    
    Full_or_Limited_LMRA{"<b>🔀 <em></em><br/>Full or Limited LMRA ?</b>"}:::decisionsChanged
    
    
    click Full_or_Limited_LMRA "#full_or_limited_lmra" "2088660188"
    
    
    Limited_LMRA_Confirmed{"🔀 <em></em><br/>Limited LMRA Confirmed ?"}:::decisions
    click Limited_LMRA_Confirmed "#limited_lmra_confirmed" "2857364459"
    
    LMRA_Already_Done{"🔀 <em></em><br/>LMRA Already Done ?"}:::decisions
    click LMRA_Already_Done "#lmra_already_done" "2884183025"
    
    Create_Full_LMRA[("➕ <em></em><br/>Create Full LMRA")]:::recordCreates
    click Create_Full_LMRA "#create_full_lmra" "3999568703"
    
    Create_Limited_LMRA[("➕ <em></em><br/>Create Limited LMRA")]:::recordCreates
    click Create_Limited_LMRA "#create_limited_lmra" "2204160202"
    
    
    Get_Related_Operational_Account[("<b>🔍 <em></em><br/>Get Related Operational Account</b>")]:::recordLookupsAdded
    click Get_Related_Operational_Account "#get_related_operational_account" "449706841"
    
    
    Get_Related_Work_Order[("<b>🔍 <em></em><br/>Get Related Work Order</b>")]:::recordLookupsChanged
    
    
    click Get_Related_Work_Order "#get_related_work_order" "3976601376"
    
    
    Get_Work_Step_Information[("🔍 <em></em><br/>Get Work Step Information")]:::recordLookups
    click Get_Work_Step_Information "#get_work_step_information" "968707648"
    
    Confirmed_LMRA_Done_at_WO_level[("🛠️ <em></em><br/>Confirmed LMRA Done at WO level")]:::recordUpdates
    click Confirmed_LMRA_Done_at_WO_level "#confirmed_lmra_done_at_wo_level" "3771151378"
    
    Update_Work_Step_Status_to_Complete[("🛠️ <em></em><br/>Update Work Step Status to Complete")]:::recordUpdates
    click Update_Work_Step_Status_to_Complete "#update_work_step_status_to_complete" "1882464419"
    
    Update_Work_Step_Status_to_Complete_After[("🛠️ <em></em><br/>Update Work Step Status to Complete After")]:::recordUpdates
    click Update_Work_Step_Status_to_Complete_After "#update_work_step_status_to_complete_after" "247084983"
    
    Full_LMRA_Information(["💻 <em></em><br/>Full LMRA Information"]):::screens
    click Full_LMRA_Information "#full_lmra_information" "737905365"
    
    Limited_LMRA_Information(["💻 <em></em><br/>Limited LMRA Information"]):::screens
    click Limited_LMRA_Information "#limited_lmra_information" "3519037032"
    
    LMRA_Done_Message(["💻 <em></em><br/>LMRA Done Message"]):::screens
    click LMRA_Done_Message "#lmra_done_message" "581062939"
    
    Full_or_Limited_LMRA --> |"Full"| Full_LMRA_Information
    Full_or_Limited_LMRA --> |"Limited"| Limited_LMRA_Information
    Limited_LMRA_Confirmed --> |"Yes"| Create_Limited_LMRA
    Limited_LMRA_Confirmed --> |"No"| Limited_LMRA_Information
    LMRA_Already_Done --> |"No"| Full_or_Limited_LMRA
    LMRA_Already_Done --> |"Yes"| LMRA_Done_Message
    Create_Full_LMRA --> Update_Work_Step_Status_to_Complete_After
    Create_Limited_LMRA --> Update_Work_Step_Status_to_Complete_After
    
    Get_Related_Work_Order -.-> LMRA_Already_Done
    
    Get_Related_Operational_Account ==> LMRA_Already_Done
    Get_Related_Work_Order ==> Get_Related_Operational_Account
    
    Get_Work_Step_Information --> Get_Related_Work_Order
    Confirmed_LMRA_Done_at_WO_level --> END_Confirmed_LMRA_Done_at_WO_level
    Update_Work_Step_Status_to_Complete --> END_Update_Work_Step_Status_to_Complete
    Update_Work_Step_Status_to_Complete_After --> Confirmed_LMRA_Done_at_WO_level
    Full_LMRA_Information --> Create_Full_LMRA
    Limited_LMRA_Information --> Limited_LMRA_Confirmed
    LMRA_Done_Message --> Update_Work_Step_Status_to_Complete
    START -->  Get_Work_Step_Information
    END_Confirmed_LMRA_Done_at_WO_level(( END )):::endClass
    END_Update_Work_Step_Status_to_Complete(( END )):::endClass
    
    
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
      
    linkStyle 9,10 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 8 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    <!-- Flow description -->
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|Description|
    |:-- |:--:|:--:|:--:|:--:|:--:|:--  |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>RelatedAccount</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Account</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    
    ## Flow Nodes Details
    
    ### Full_or_Limited_LMRA
    
    #### Rule Full_Full_or_Limited_LMRA (Full)
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>workOrderRecord.LMRA__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Full</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>RelatedAccount.LMRA_Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Full</b></span>|
    
    ### 🟩Get_Related_Operational_Account
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Account</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Related Operational Account</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Output Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>RelatedAccount</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Id<br/>- LMRA_Type__c<br/></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[LMRA_Already_Done](#lmra_already_done)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>workOrderRecord.AccountId</b></span>|
    
    ### Get_Related_Work_Order
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Queried Fields</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>- Id<br/>- WorkOrderNumber<br/>- LMRA__c<br/>- LMRA_Done__c<br/></i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[LMRA_Already_Done](#lmra_already_done)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Id<br/>- WorkOrderNumber<br/>- LMRA__c<br/>- LMRA_Done__c<br/>- AccountId<br/></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Related_Operational_Account](#get_related_operational_account)</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 20, 2024"

    _Nov 20, 2024, by fpardon-upeo in commit Org state on 2024-11-20 00:24 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START"]):::startClass
    click START "#general-information" "459049158"
    
    Full_or_Limited_LMRA{"🔀 <em></em><br/>Full or Limited LMRA ?"}:::decisions
    click Full_or_Limited_LMRA "#full_or_limited_lmra" "1047146990"
    
    Limited_LMRA_Confirmed{"🔀 <em></em><br/>Limited LMRA Confirmed ?"}:::decisions
    click Limited_LMRA_Confirmed "#limited_lmra_confirmed" "2857364459"
    
    LMRA_Already_Done{"🔀 <em></em><br/>LMRA Already Done ?"}:::decisions
    click LMRA_Already_Done "#lmra_already_done" "2884183025"
    
    Create_Full_LMRA[("➕ <em></em><br/>Create Full LMRA")]:::recordCreates
    click Create_Full_LMRA "#create_full_lmra" "3999568703"
    
    Create_Limited_LMRA[("➕ <em></em><br/>Create Limited LMRA")]:::recordCreates
    click Create_Limited_LMRA "#create_limited_lmra" "2204160202"
    
    Get_Related_Work_Order[("🔍 <em></em><br/>Get Related Work Order")]:::recordLookups
    click Get_Related_Work_Order "#get_related_work_order" "710350311"
    
    Get_Work_Step_Information[("🔍 <em></em><br/>Get Work Step Information")]:::recordLookups
    click Get_Work_Step_Information "#get_work_step_information" "968707648"
    
    Confirmed_LMRA_Done_at_WO_level[("🛠️ <em></em><br/>Confirmed LMRA Done at WO level")]:::recordUpdates
    click Confirmed_LMRA_Done_at_WO_level "#confirmed_lmra_done_at_wo_level" "3771151378"
    
    Update_Work_Step_Status_to_Complete[("🛠️ <em></em><br/>Update Work Step Status to Complete")]:::recordUpdates
    click Update_Work_Step_Status_to_Complete "#update_work_step_status_to_complete" "1882464419"
    
    Update_Work_Step_Status_to_Complete_After[("🛠️ <em></em><br/>Update Work Step Status to Complete After")]:::recordUpdates
    click Update_Work_Step_Status_to_Complete_After "#update_work_step_status_to_complete_after" "247084983"
    
    Full_LMRA_Information(["<b>💻 <em></em><br/>Full LMRA Information</b>"]):::screensChanged
    
    
    click Full_LMRA_Information "#full_lmra_information" "737905365"
    
    
    Limited_LMRA_Information(["💻 <em></em><br/>Limited LMRA Information"]):::screens
    click Limited_LMRA_Information "#limited_lmra_information" "3519037032"
    
    LMRA_Done_Message(["💻 <em></em><br/>LMRA Done Message"]):::screens
    click LMRA_Done_Message "#lmra_done_message" "581062939"
    
    Full_or_Limited_LMRA --> |"Full"| Full_LMRA_Information
    Full_or_Limited_LMRA --> |"Limited"| Limited_LMRA_Information
    Limited_LMRA_Confirmed --> |"Yes"| Create_Limited_LMRA
    Limited_LMRA_Confirmed --> |"No"| Limited_LMRA_Information
    LMRA_Already_Done --> |"No"| Full_or_Limited_LMRA
    LMRA_Already_Done --> |"Yes"| LMRA_Done_Message
    Create_Full_LMRA --> Update_Work_Step_Status_to_Complete_After
    Create_Limited_LMRA --> Update_Work_Step_Status_to_Complete_After
    Get_Related_Work_Order --> LMRA_Already_Done
    Get_Work_Step_Information --> Get_Related_Work_Order
    Confirmed_LMRA_Done_at_WO_level --> END_Confirmed_LMRA_Done_at_WO_level
    Update_Work_Step_Status_to_Complete --> END_Update_Work_Step_Status_to_Complete
    Update_Work_Step_Status_to_Complete_After --> Confirmed_LMRA_Done_at_WO_level
    Full_LMRA_Information --> Create_Full_LMRA
    Limited_LMRA_Information --> Limited_LMRA_Confirmed
    LMRA_Done_Message --> Update_Work_Step_Status_to_Complete
    START -->  Get_Work_Step_Information
    END_Confirmed_LMRA_Done_at_WO_level(( END )):::endClass
    END_Update_Work_Step_Status_to_Complete(( END )):::endClass
    
    
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
    
    ### Full_LMRA_Information
    
    #### Project_Lead_Full
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    #### Tasks_of_the_Day_1
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    #### Surrounding_Risks_1
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    #### Corrective_Measures_1
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    #### EPC_EPI_CBM_PBM_1
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 18, 2024"

    _Nov 18, 2024, by fpardon-upeo in commit Org state on 2024-11-18 00:30 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START"]):::startClass
    click START "#general-information" "459049158"
    
    Full_or_Limited_LMRA{"🔀 <em></em><br/>Full or Limited LMRA ?"}:::decisions
    click Full_or_Limited_LMRA "#full_or_limited_lmra" "1047146990"
    
    Limited_LMRA_Confirmed{"🔀 <em></em><br/>Limited LMRA Confirmed ?"}:::decisions
    click Limited_LMRA_Confirmed "#limited_lmra_confirmed" "2857364459"
    
    LMRA_Already_Done{"🔀 <em></em><br/>LMRA Already Done ?"}:::decisions
    click LMRA_Already_Done "#lmra_already_done" "2884183025"
    
    Create_Full_LMRA[("<b>➕ <em></em><br/>Create Full LMRA</b>")]:::recordCreatesChanged
    
    
    click Create_Full_LMRA "#create_full_lmra" "3999568703"
    
    
    Create_Limited_LMRA[("<b>➕ <em></em><br/>Create Limited LMRA</b>")]:::recordCreatesChanged
    
    
    click Create_Limited_LMRA "#create_limited_lmra" "2204160202"
    
    
    Get_Related_Work_Order[("🔍 <em></em><br/>Get Related Work Order")]:::recordLookups
    click Get_Related_Work_Order "#get_related_work_order" "710350311"
    
    Get_Work_Step_Information[("🔍 <em></em><br/>Get Work Step Information")]:::recordLookups
    click Get_Work_Step_Information "#get_work_step_information" "968707648"
    
    Confirmed_LMRA_Done_at_WO_level[("🛠️ <em></em><br/>Confirmed LMRA Done at WO level")]:::recordUpdates
    click Confirmed_LMRA_Done_at_WO_level "#confirmed_lmra_done_at_wo_level" "3771151378"
    
    Update_Work_Step_Status_to_Complete[("<b>🛠️ <em></em><br/>Update Work Step Status to Complete</b>")]:::recordUpdatesChanged
    click Update_Work_Step_Status_to_Complete "#update_work_step_status_to_complete" "1882464419"
    
    
    Update_Work_Step_Status_to_Complete_After[("<b>🛠️ <em></em><br/>Update Work Step Status to Complete After</b>")]:::recordUpdatesAdded
    click Update_Work_Step_Status_to_Complete_After "#update_work_step_status_to_complete_after" "247084983"
    
    
    Full_LMRA_Information(["💻 <em></em><br/>Full LMRA Information"]):::screens
    click Full_LMRA_Information "#full_lmra_information" "1170505404"
    
    Limited_LMRA_Information(["💻 <em></em><br/>Limited LMRA Information"]):::screens
    click Limited_LMRA_Information "#limited_lmra_information" "3519037032"
    
    LMRA_Done_Message(["💻 <em></em><br/>LMRA Done Message"]):::screens
    click LMRA_Done_Message "#lmra_done_message" "581062939"
    
    Full_or_Limited_LMRA --> |"Full"| Full_LMRA_Information
    Full_or_Limited_LMRA --> |"Limited"| Limited_LMRA_Information
    Limited_LMRA_Confirmed --> |"Yes"| Create_Limited_LMRA
    Limited_LMRA_Confirmed --> |"No"| Limited_LMRA_Information
    LMRA_Already_Done --> |"No"| Full_or_Limited_LMRA
    LMRA_Already_Done --> |"Yes"| LMRA_Done_Message
    
    Create_Full_LMRA -.-> Confirmed_LMRA_Done_at_WO_level
    Create_Limited_LMRA -.-> Confirmed_LMRA_Done_at_WO_level
    
    Create_Full_LMRA ==> Update_Work_Step_Status_to_Complete_After
    Create_Limited_LMRA ==> Update_Work_Step_Status_to_Complete_After
    
    Get_Related_Work_Order --> LMRA_Already_Done
    Get_Work_Step_Information --> Get_Related_Work_Order
    Confirmed_LMRA_Done_at_WO_level --> END_Confirmed_LMRA_Done_at_WO_level
    Update_Work_Step_Status_to_Complete --> END_Update_Work_Step_Status_to_Complete
    
    Update_Work_Step_Status_to_Complete_After ==> Confirmed_LMRA_Done_at_WO_level
    
    Full_LMRA_Information --> Create_Full_LMRA
    Limited_LMRA_Information --> Limited_LMRA_Confirmed
    LMRA_Done_Message --> Update_Work_Step_Status_to_Complete
    START -->  Get_Work_Step_Information
    END_Confirmed_LMRA_Done_at_WO_level(( END )):::endClass
    END_Update_Work_Step_Status_to_Complete(( END )):::endClass
    
    
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
      
    linkStyle 8,9,14 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 6,7 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    <!-- Flow description -->
    
    ## Flow Nodes Details
    
    ### Create_Full_LMRA
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Confirmed_LMRA_Done_at_WO_level](#confirmed_lmra_done_at_wo_level)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_Work_Step_Status_to_Complete_After](#update_work_step_status_to_complete_after)</b></span>|
    
    ### Create_Limited_LMRA
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Confirmed_LMRA_Done_at_WO_level](#confirmed_lmra_done_at_wo_level)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_Work_Step_Status_to_Complete_After](#update_work_step_status_to_complete_after)</b></span>|
    
    ### 🟩Update_Work_Step_Status_to_Complete_After
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Update</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStep</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Update Work Step Status to Complete After</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Confirmed_LMRA_Done_at_WO_level](#confirmed_lmra_done_at_wo_level)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord.Id</b></span>|
    
    #### 🟩Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Completed</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 16, 2024"

    _Nov 16, 2024, by fpardon-upeo in commit Org state on 2024-11-16 00:24 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START"]):::startClass
    click START "#general-information" "459049158"
    
    Full_or_Limited_LMRA{"🔀 <em></em><br/>Full or Limited LMRA ?"}:::decisions
    click Full_or_Limited_LMRA "#full_or_limited_lmra" "1047146990"
    
    
    Limited_LMRA_Confirmed{"<b>🔀 <em></em><br/>Limited LMRA Confirmed ?</b>"}:::decisionsAdded
    click Limited_LMRA_Confirmed "#limited_lmra_confirmed" "2857364459"
    
    
    LMRA_Already_Done{"🔀 <em></em><br/>LMRA Already Done ?"}:::decisions
    click LMRA_Already_Done "#lmra_already_done" "2884183025"
    
    Create_Full_LMRA[("<b>➕ <em></em><br/>Create Full LMRA</b>")]:::recordCreatesChanged
    
    
    click Create_Full_LMRA "#create_full_lmra" "3896107074"
    
    
    Create_Limited_LMRA[("<b>➕ <em></em><br/>Create Limited LMRA</b>")]:::recordCreatesChanged
    
    
    click Create_Limited_LMRA "#create_limited_lmra" "2999553559"
    
    
    Get_Related_Work_Order[("🔍 <em></em><br/>Get Related Work Order")]:::recordLookups
    click Get_Related_Work_Order "#get_related_work_order" "710350311"
    
    Get_Work_Step_Information[("🔍 <em></em><br/>Get Work Step Information")]:::recordLookups
    click Get_Work_Step_Information "#get_work_step_information" "968707648"
    
    Confirmed_LMRA_Done_at_WO_level[("🛠️ <em></em><br/>Confirmed LMRA Done at WO level")]:::recordUpdates
    click Confirmed_LMRA_Done_at_WO_level "#confirmed_lmra_done_at_wo_level" "3771151378"
    
    Update_Work_Step_Status_to_Complete[("🛠️ <em></em><br/>Update Work Step Status to Complete")]:::recordUpdates
    click Update_Work_Step_Status_to_Complete "#update_work_step_status_to_complete" "1882464419"
    
    Full_LMRA_Information(["<b>💻 <em></em><br/>Full LMRA Information</b>"]):::screensChanged
    
    
    click Full_LMRA_Information "#full_lmra_information" "1170505404"
    
    
    
    Full_LMRA_Information_Part_Two(["<i>💻 <em></em><br/>Full LMRA Information - Part Two</i>"]):::screensRemoved
    click Full_LMRA_Information_Part_Two "#full_lmra_information_part_two" "4241642172"
    
    
    Limited_LMRA_Information(["<b>💻 <em></em><br/>Limited LMRA Information</b>"]):::screensChanged
    
    
    click Limited_LMRA_Information "#limited_lmra_information" "3519037032"
    
    
    LMRA_Done_Message(["💻 <em></em><br/>LMRA Done Message"]):::screens
    click LMRA_Done_Message "#lmra_done_message" "581062939"
    
    Full_or_Limited_LMRA --> |"Full"| Full_LMRA_Information
    Full_or_Limited_LMRA --> |"Limited"| Limited_LMRA_Information
    
    Limited_LMRA_Confirmed ==> |"🟩<b>Yes</b>"| Create_Limited_LMRA
    Limited_LMRA_Confirmed ==> |"🟩<b>No</b>"| Limited_LMRA_Information
    
    LMRA_Already_Done --> |"No"| Full_or_Limited_LMRA
    LMRA_Already_Done --> |"Yes"| LMRA_Done_Message
    Create_Full_LMRA --> Confirmed_LMRA_Done_at_WO_level
    Create_Limited_LMRA --> Confirmed_LMRA_Done_at_WO_level
    Get_Related_Work_Order --> LMRA_Already_Done
    Get_Work_Step_Information --> Get_Related_Work_Order
    Confirmed_LMRA_Done_at_WO_level --> END_Confirmed_LMRA_Done_at_WO_level
    Update_Work_Step_Status_to_Complete --> END_Update_Work_Step_Status_to_Complete
    
    Full_LMRA_Information -.-> Full_LMRA_Information_Part_Two
    Full_LMRA_Information_Part_Two -.-> Create_Full_LMRA
    Limited_LMRA_Information -.-> Create_Limited_LMRA
    
    Full_LMRA_Information ==> Create_Full_LMRA
    Limited_LMRA_Information ==> Limited_LMRA_Confirmed
    
    LMRA_Done_Message --> Update_Work_Step_Status_to_Complete
    START -->  Get_Work_Step_Information
    END_Confirmed_LMRA_Done_at_WO_level(( END )):::endClass
    END_Update_Work_Step_Status_to_Complete(( END )):::endClass
    
    
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
      
    linkStyle 2,3,15,16 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 12,13,14 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    <!-- Flow description -->
    
    ## Flow Nodes Details
    
    ### 🟩Limited_LMRA_Confirmed
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Limited LMRA Confirmed ?</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>isGoTo: true<br/>targetReference: Limited_LMRA_Information<br/></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>No</b></span>|
    
    #### 🟩Rule Yes (Yes)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Create_Limited_LMRA](#create_limited_lmra)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Limited_LMRA_Done</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    ### Create_Full_LMRA
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Corrective_Measures__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Corrective_Measures</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Date__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Date_Full</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>EPC_EPI_CBM_PBM__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>EPC_EPI_CBM_PBM</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Corrective_Measures__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Corrective_Measures_1</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>EPC_EPI_CBM_PBM__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EPC_EPI_CBM_PBM_1</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Surrounding_Risks__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Surrounding_Risks</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Tasks_of_the_Day__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Tasks_of_the_Day</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Surrounding_Risks__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Surrounding_Risks_1</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Tasks_of_the_Day__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Tasks_of_the_Day_1</b></span>|
    
    ### Create_Limited_LMRA
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Date__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Date_Lmited</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Project_Lead__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Project_Lead</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Limited_LMRA_Done__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Limited_LMRA_Done</b></span>|
    
    ### Full_LMRA_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Full_LMRA_Information_Part_Two](#full_lmra_information_part_two)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Create_Full_LMRA](#create_full_lmra)</b></span>|
    
    #### 🟥FullLMRATitle
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i><p><strong>Full LMRA</strong></p></i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Display Text</i></span>|
    
    #### 🟥Date_Full
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Data Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Date</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Date</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Input Field</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Inputs On Next Nav To Assoc Scrn</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Use Stored Values</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    
    ### 🟥Full_LMRA_Information_Part_Two
    
    #### 🟩Tasks_of_the_Day_1
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Screen</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Full LMRA Information - Part Two</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Back</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Finish</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Pause</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Show Footer</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Show Header</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Create_Full_LMRA](#create_full_lmra)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Tasks of the Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Large Text Area</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    #### 🟥FullLMRATitleTwo
    
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i><p><strong>Full LMRA</strong></p></i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Display Text</i></span>|
    
    #### 🟩Surrounding_Risks_1
    
    
    
    
    
    #### 🟥Tasks_of_the_Day
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Tasks of the Day</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Surrounding Risks</b></span>|
    
    #### 🟥Surrounding_Risks
    
    #### 🟩Corrective_Measures_1
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Surrounding Risks</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Corrective Measures</b></span>|
    
    #### 🟥Corrective_Measures
    
    #### 🟩EPC_EPI_CBM_PBM_1
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Corrective Measures</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EPC - EPI/CBM - PBM</b></span>|
    
    #### 🟥EPC_EPI_CBM_PBM
    
    #### 🟩FileUpload
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>EPC - EPI/CBM - PBM</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Large Text Area</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Extension Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>forceContent:fileUpload</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Component Instance</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Attach Photos</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Multiple (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Record Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord.Id</b></span>|
    
    ### Limited_LMRA_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Create_Limited_LMRA](#create_limited_lmra)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Limited_LMRA_Confirmed](#limited_lmra_confirmed)</b></span>|
    
    #### 🟥LimitedLMRATitle
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i><p><strong>Limited LMRA</strong></p></i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Display Text</i></span>|
    
    #### LmitedLMRAMessage
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i><p><strong style="color: rgb(231, 24, 24); font-size: 14px;">Don't forget your LMRA, avoid accidents!</strong></p></i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p><strong style="font-size: 14px; color: rgb(11, 11, 11);">Don't forget your LMRA, avoid accidents!</strong></p></b></span>|
    
    #### 🟥Work_Order
    
    #### 🟩Limited_LMRA_Done
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Data Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>String</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Value</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>workOrderRecord.WorkOrderNumber</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Work Order</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Boolean</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Limited LMRA Done</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Disabled</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>true</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Read Only</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>true</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    #### 🟥Date_Lmited
    
    #### 🟩confirmedLMRA
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Data Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Date</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Date</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Input Field</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Inputs On Next Nav To Assoc Scrn</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Use Stored Values</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p><em>To confirm that a limited LMRA has been done, please tick the box.</em></p></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|
    
    #### 🟥Project_Lead
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Data Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>String</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Project Lead</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Input Field</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Inputs On Next Nav To Assoc Scrn</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Use Stored Values</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 8, 2024"

    _Nov 8, 2024, by fpardon-upeo in commit Org state on 2024-11-08 00:23 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START"]):::startClass
    click START "#general-information" "459049158"
    
    Full_or_Limited_LMRA{"🔀 <em></em><br/>Full or Limited LMRA ?"}:::decisions
    click Full_or_Limited_LMRA "#full_or_limited_lmra" "1047146990"
    
    LMRA_Already_Done{"🔀 <em></em><br/>LMRA Already Done ?"}:::decisions
    click LMRA_Already_Done "#lmra_already_done" "2884183025"
    
    Create_Full_LMRA[("➕ <em></em><br/>Create Full LMRA")]:::recordCreates
    click Create_Full_LMRA "#create_full_lmra" "4175645033"
    
    Create_Limited_LMRA[("➕ <em></em><br/>Create Limited LMRA")]:::recordCreates
    click Create_Limited_LMRA "#create_limited_lmra" "69133525"
    
    Get_Related_Work_Order[("🔍 <em></em><br/>Get Related Work Order")]:::recordLookups
    click Get_Related_Work_Order "#get_related_work_order" "710350311"
    
    Get_Work_Step_Information[("<b>🔍 <em></em><br/>Get Work Step Information</b>")]:::recordLookupsChanged
    
    
    click Get_Work_Step_Information "#get_work_step_information" "968707648"
    
    
    Confirmed_LMRA_Done_at_WO_level[("🛠️ <em></em><br/>Confirmed LMRA Done at WO level")]:::recordUpdates
    click Confirmed_LMRA_Done_at_WO_level "#confirmed_lmra_done_at_wo_level" "3771151378"
    
    
    Update_Work_Step_Status_to_Complete[("<b>🛠️ <em></em><br/>Update Work Step Status to Complete</b>")]:::recordUpdatesAdded
    click Update_Work_Step_Status_to_Complete "#update_work_step_status_to_complete" "1882464419"
    
    
    Full_LMRA_Information(["💻 <em></em><br/>Full LMRA Information"]):::screens
    click Full_LMRA_Information "#full_lmra_information" "2192336012"
    
    Full_LMRA_Information_Part_Two(["💻 <em></em><br/>Full LMRA Information - Part Two"]):::screens
    click Full_LMRA_Information_Part_Two "#full_lmra_information_part_two" "4241642172"
    
    Limited_LMRA_Information(["💻 <em></em><br/>Limited LMRA Information"]):::screens
    click Limited_LMRA_Information "#limited_lmra_information" "1254657940"
    
    LMRA_Done_Message(["<b>💻 <em></em><br/>LMRA Done Message</b>"]):::screensChanged
    
    
    click LMRA_Done_Message "#lmra_done_message" "581062939"
    
    
    Full_or_Limited_LMRA --> |"Full"| Full_LMRA_Information
    Full_or_Limited_LMRA --> |"Limited"| Limited_LMRA_Information
    LMRA_Already_Done --> |"No"| Full_or_Limited_LMRA
    LMRA_Already_Done --> |"Yes"| LMRA_Done_Message
    Create_Full_LMRA --> Confirmed_LMRA_Done_at_WO_level
    Create_Limited_LMRA --> Confirmed_LMRA_Done_at_WO_level
    Get_Related_Work_Order --> LMRA_Already_Done
    Get_Work_Step_Information --> Get_Related_Work_Order
    Confirmed_LMRA_Done_at_WO_level --> END_Confirmed_LMRA_Done_at_WO_level
    
    Update_Work_Step_Status_to_Complete ==> END_Update_Work_Step_Status_to_Complete
    
    Full_LMRA_Information --> Full_LMRA_Information_Part_Two
    Full_LMRA_Information_Part_Two --> Create_Full_LMRA
    Limited_LMRA_Information --> Create_Limited_LMRA
    
    LMRA_Done_Message -.-> END_LMRA_Done_Message
    
    LMRA_Done_Message ==> Update_Work_Step_Status_to_Complete
    
    START -->  Get_Work_Step_Information
    END_Confirmed_LMRA_Done_at_WO_level(( END )):::endClass
    
    END_LMRA_Done_Message(( END )):::endClassRemoved
    
    END_Update_Work_Step_Status_to_Complete(( END )):::endClassAdded
    
    
    
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
      
    linkStyle 9,14 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 13 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    <!-- Flow description -->
    
    ## Flow Nodes Details
    
    ### Get_Work_Step_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Queried Fields</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>- Id<br/>- WorkOrderId<br/></i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Id<br/>- WorkOrderId<br/>- Status<br/></b></span>|
    
    ### 🟩Update_Work_Step_Status_to_Complete
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Update</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStep</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Update Work Step Status to Complete</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord.Id</b></span>|
    
    #### 🟩Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Completed</b></span>|
    
    ### LMRA_Done_Message
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_Work_Step_Status_to_Complete](#update_work_step_status_to_complete)</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 6, 2024"

    _Nov 6, 2024, by fpardon-upeo in commit Org state on 2024-11-06 00:23 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["<b>START</b>"]):::startClassChanged
    
    
    click START "#general-information" "459049158"
    
    
    
    Full_or_Limited_LMRA{"<b>🔀 <em></em><br/>Full or Limited LMRA ?</b>"}:::decisionsAdded
    click Full_or_Limited_LMRA "#full_or_limited_lmra" "1047146990"
    
    LMRA_Already_Done{"<b>🔀 <em></em><br/>LMRA Already Done ?</b>"}:::decisionsAdded
    click LMRA_Already_Done "#lmra_already_done" "2884183025"
    
    Create_Full_LMRA[("<b>➕ <em></em><br/>Create Full LMRA</b>")]:::recordCreatesAdded
    click Create_Full_LMRA "#create_full_lmra" "4175645033"
    
    Create_Limited_LMRA[("<b>➕ <em></em><br/>Create Limited LMRA</b>")]:::recordCreatesAdded
    click Create_Limited_LMRA "#create_limited_lmra" "69133525"
    
    
    Get_Related_Work_Order[("<b>🔍 <em></em><br/>Get Related Work Order</b>")]:::recordLookupsChanged
    
    
    click Get_Related_Work_Order "#get_related_work_order" "710350311"
    
    
    
    Equipment_Information(["<i>💻 <em></em><br/>Equipment Information</i>"]):::screensRemoved
    click Equipment_Information "#equipment_information" "2163154206"
    
    Get_Work_Step_Information[("<b>🔍 <em></em><br/>Get Work Step Information</b>")]:::recordLookupsAdded
    click Get_Work_Step_Information "#get_work_step_information" "1637338462"
    
    
    
    LMRA_Information(["<i>💻 <em></em><br/>LMRA Information</i>"]):::screensRemoved
    click LMRA_Information "#lmra_information" "245551225"
    
    Confirmed_LMRA_Done_at_WO_level[("<b>🛠️ <em></em><br/>Confirmed LMRA Done at WO level</b>")]:::recordUpdatesAdded
    click Confirmed_LMRA_Done_at_WO_level "#confirmed_lmra_done_at_wo_level" "3771151378"
    
    
    
    Risk_Information(["<i>💻 <em></em><br/>Risk Information</i>"]):::screensRemoved
    click Risk_Information "#risk_information" "4290839850"
    
    Full_LMRA_Information(["<b>💻 <em></em><br/>Full LMRA Information</b>"]):::screensAdded
    click Full_LMRA_Information "#full_lmra_information" "2192336012"
    
    
    
    Task_Information(["<i>💻 <em></em><br/>Task Information</i>"]):::screensRemoved
    click Task_Information "#task_information" "578828805"
    
    Full_LMRA_Information_Part_Two(["<b>💻 <em></em><br/>Full LMRA Information - Part Two</b>"]):::screensAdded
    click Full_LMRA_Information_Part_Two "#full_lmra_information_part_two" "4241642172"
    
    
    
    Get_Related_Work_Order -.-> LMRA_Information
    Equipment_Information -.-> END_Equipment_Information
    LMRA_Information -.-> Task_Information
    Risk_Information -.-> Equipment_Information
    Task_Information -.-> Risk_Information
    START -.->  Get_Related_Work_Order
    END_Equipment_Information(( END )):::endClassRemoved
    
    Limited_LMRA_Information(["<b>💻 <em></em><br/>Limited LMRA Information</b>"]):::screensAdded
    click Limited_LMRA_Information "#limited_lmra_information" "1254657940"
    
    
    
    LMRA_Done_Message(["<b>💻 <em></em><br/>LMRA Done Message</b>"]):::screensAdded
    click LMRA_Done_Message "#lmra_done_message" "4218021228"
    
    
    
    Full_or_Limited_LMRA ==> |"🟩<b>Full</b>"| Full_LMRA_Information
    Full_or_Limited_LMRA ==> |"🟩<b>Limited</b>"| Limited_LMRA_Information
    LMRA_Already_Done ==> |"🟩<b>No</b>"| Full_or_Limited_LMRA
    LMRA_Already_Done ==> |"🟩<b>Yes</b>"| LMRA_Done_Message
    Create_Full_LMRA ==> Confirmed_LMRA_Done_at_WO_level
    Create_Limited_LMRA ==> Confirmed_LMRA_Done_at_WO_level
    Get_Related_Work_Order ==> LMRA_Already_Done
    Get_Work_Step_Information ==> Get_Related_Work_Order
    Confirmed_LMRA_Done_at_WO_level ==> END_Confirmed_LMRA_Done_at_WO_level
    Full_LMRA_Information ==> Full_LMRA_Information_Part_Two
    Full_LMRA_Information_Part_Two ==> Create_Full_LMRA
    Limited_LMRA_Information ==> Create_Limited_LMRA
    LMRA_Done_Message ==> END_LMRA_Done_Message
    START ==>  Get_Work_Step_Information
    END_Confirmed_LMRA_Done_at_WO_level(( END )):::endClassAdded
    END_LMRA_Done_Message(( END )):::endClassAdded
    
    
    
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
      
    linkStyle 6,7,8,9,10,11,12,13,14,15,16,17,18,19 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 0,1,2,3,4,5 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    <!-- Flow description -->
    
    ## General Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⚠️ Draft</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Active</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Related_Work_Order](#get_related_work_order)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Next Node</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Related_Work_Order](#get_related_work_order)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Work_Step_Information](#get_work_step_information)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Next Node</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Work_Step_Information](#get_work_step_information)</b></span>|
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|Description|
    |:-- |:--:|:--:|:--:|:--:|:--:|:--  |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStep</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    
    ## Flow Nodes Details
    
    
    ### 🟩Full_or_Limited_LMRA
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Full or Limited LMRA ?</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Limited_LMRA_Information](#limited_lmra_information)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Limited</b></span>|
    
    #### 🟩Rule Full_Full_or_Limited_LMRA (Full)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Full_LMRA_Information](#full_lmra_information)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>workOrderRecord.LMRA__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Full</b></span>|
    
    ### 🟩LMRA_Already_Done
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LMRA Already Done ?</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[LMRA_Done_Message](#lmra_done_message)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Yes</b></span>|
    
    #### 🟩Rule No (No)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Full_or_Limited_LMRA](#full_or_limited_lmra)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>workOrderRecord.LMRA_Done__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    ### 🟩Create_Full_LMRA
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Create</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LMRA__c</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Create Full LMRA</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Confirmed_LMRA_Done_at_WO_level](#confirmed_lmra_done_at_wo_level)</b></span>|
    
    #### 🟩Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Corrective_Measures__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Corrective_Measures</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Date__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Date_Full</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>EPC_EPI_CBM_PBM__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EPC_EPI_CBM_PBM</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>LMRA_Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Full</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Project_Lead__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Project_Lead_Full</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Surrounding_Risks__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Surrounding_Risks</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Tasks_of_the_Day__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Tasks_of_the_Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Work_Order__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>workOrderRecord.Id</b></span>|
    
    ### 🟩Create_Limited_LMRA
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Create</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LMRA__c</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Create Limited LMRA</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Confirmed_LMRA_Done_at_WO_level](#confirmed_lmra_done_at_wo_level)</b></span>|
    
    #### 🟩Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Date__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Date_Lmited</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>LMRA_Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Limited</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Project_Lead__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Project_Lead</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Work_Order__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>workOrderRecord.Id</b></span>|
    
    ### Get_Related_Work_Order
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Queried Fields</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>- Id<br/>- WorkOrderNumber<br/></i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[LMRA_Information](#lmra_information)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Id<br/>- WorkOrderNumber<br/>- LMRA__c<br/>- LMRA_Done__c<br/></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[LMRA_Already_Done](#lmra_already_done)</b></span>|
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Id</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Id</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord.WorkOrderId</b></span>|
    
    ### 🟥Equipment_Information
    
    ### 🟩Get_Work_Step_Information
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Screen</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Equipment Information</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Back</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Finish</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Pause</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Show Footer</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Show Header</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStep</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Work Step Information</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Output Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Id<br/>- WorkOrderId<br/></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Related_Work_Order](#get_related_work_order)</b></span>|
    
    #### 🟥EPC_EPI_CBM_PBM
    
    #### 🟩Filters (logic: **and**)
    
    
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|
    
    ### 🟩Confirmed_LMRA_Done_at_WO_level
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>EPC - EPI/CBM - PBM</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Large Text Area</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Inputs On Next Nav To Assoc Scrn</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Use Stored Values</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Update</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrder</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Confirmed LMRA Done at WO level</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>workOrderRecord.Id</b></span>|
    
    ### 🟥LMRA_Information
    
    
    
    
    
    #### 🟩Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>LMRA_Done__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    ### 🟩Full_LMRA_Information
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>LMRA Information</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Full LMRA Information</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Task_Information](#task_information)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Full_LMRA_Information_Part_Two](#full_lmra_information_part_two)</b></span>|
    
    #### 🟥Work_Order_Number
    
    #### 🟩FullLMRATitle
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p><strong>Full LMRA</strong></p></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|
    
    #### 🟩Work_Order_Full
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Work Order Number</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Work Order</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Read Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>true</b></span>|
    
    #### 🟥Date
    
    #### 🟩Date_Full
    
    
    #### 🟥LMRA_Type
    
    #### 🟩Project_Lead_Full
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Choice References</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>- Limited<br/>- Full<br/></i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>LMRA Type</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Dropdown Box</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Project Lead</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Input Field</b></span>|
    
    ### 🟥Risk_Information
    
    ### 🟩Full_LMRA_Information_Part_Two
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Risk Information</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Back</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Full LMRA Information - Part Two</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Back</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Equipment_Information](#equipment_information)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Create_Full_LMRA](#create_full_lmra)</b></span>|
    
    #### 🟥Surrounding_Risks
    
    #### 🟩FullLMRATitleTwo
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Surrounding Risks</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p><strong>Full LMRA</strong></p></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|
    
    #### 🟩Tasks_of_the_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Tasks of the Day</b></span>|
    
    #### 🟥SurroundRisksPhoto
    
    #### 🟩Surrounding_Risks
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Extension Name</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>forceContent:fileUpload</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Component Instance</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Surrounding Risks</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Large Text Area</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Record Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>workOrderRecord.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Surrounding Risks Photo</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    #### 🟥CorrectiveMeasuresPhoto
    
    #### 🟩EPC_EPI_CBM_PBM
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Extension Name</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>forceContent:fileUpload</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Component Instance</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EPC - EPI/CBM - PBM</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Large Text Area</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Is Required</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Corrective Measures Photo</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Record Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>workOrderRecord.Id</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    ### 🟥Task_Information
    
    ### 🟩Limited_LMRA_Information
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Task Information</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Back</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Limited LMRA Information</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Back</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Risk_Information](#risk_information)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Create_Limited_LMRA](#create_limited_lmra)</b></span>|
    
    #### 🟥Tasks_of_the_Day
    
    #### 🟩LimitedLMRATitle
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Tasks of the Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Large Text Area</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p><strong>Limited LMRA</strong></p></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|
    
    #### 🟩LmitedLMRAMessage
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p><strong style="color: rgb(231, 24, 24); font-size: 14px;">Don't forget your LMRA, avoid accidents!</strong></p></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|
    
    #### 🟩Work_Order
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Value</b></span>|<span style="background-color: #a6e22e; color: black;"><b>workOrderRecord.WorkOrderNumber</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Work Order</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Input Field</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Disabled</b></span>|<span style="background-color: #a6e22e; color: black;"><b>true</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Read Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>true</b></span>|
    
    #### 🟩Date_Lmited
    
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Date</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Date</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Input Field</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    #### 🟩Project_Lead
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Project Lead</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Input Field</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    ### 🟩LMRA_Done_Message
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Screen</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LMRA Done Message</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Back</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Finish</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Pause</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Next Or Finish Button Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Close</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Show Footer</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Show Header</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    #### 🟩LMRADoneMessage
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p>LMRA already done for this work order at this location. You can continue with your tasks.&nbsp;</p></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

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
    START(["START"]):::startClass
    click START "#general-information" "4117675639"
    
    Get_Related_Work_Order[("🔍 <em></em><br/>Get Related Work Order")]:::recordLookups
    click Get_Related_Work_Order "#get_related_work_order" "1776090283"
    
    Equipment_Information(["💻 <em></em><br/>Equipment Information"]):::screens
    click Equipment_Information "#equipment_information" "2163154206"
    
    LMRA_Information(["💻 <em></em><br/>LMRA Information"]):::screens
    click LMRA_Information "#lmra_information" "245551225"
    
    Risk_Information(["💻 <em></em><br/>Risk Information"]):::screens
    click Risk_Information "#risk_information" "4290839850"
    
    Task_Information(["💻 <em></em><br/>Task Information"]):::screens
    click Task_Information "#task_information" "578828805"
    
    Get_Related_Work_Order --> LMRA_Information
    Equipment_Information --> END_Equipment_Information
    LMRA_Information --> Task_Information
    Risk_Information --> Equipment_Information
    Task_Information --> Risk_Information
    START -->  Get_Related_Work_Order
    END_Equipment_Information(( END )):::endClass
    
    
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
    |Process Type| Field Service Mobile|
    |Label|[Work Order][Mobile Flow][Screen-Flow] Log LMRA Information|
    |Status|⚠️ Draft|
    |Environments|Default|
    |Interview Label|[Work Order][Mobile Flow][Screen-Flow] Log LMRA Information {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Get_Related_Work_Order](#get_related_work_order)|
    |Next Node|[Get_Related_Work_Order](#get_related_work_order)|
    
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|Description|
    |:-- |:--:|:--:|:--:|:--:|:--:|:--  |
    |Id|String|⬜|✅|⬜|<!-- -->|<!-- -->|
    |workOrderRecord|SObject|⬜|✅|⬜|WorkOrder|<!-- -->|
    
    
    ## Flow Nodes Details
    
    ### Get_Related_Work_Order
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkOrder|
    |Label|Get Related Work Order|
    |Assign Null Values If No Records Found|⬜|
    |Output Reference|workOrderRecord|
    |Queried Fields|- Id<br/>- WorkOrderNumber<br/>|
    |Connector|[LMRA_Information](#lmra_information)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|Id|
    
    
    
    
    ### Equipment_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Screen|
    |Label|Equipment Information|
    |Allow Back|✅|
    |Allow Finish|✅|
    |Allow Pause|⬜|
    |Show Footer|✅|
    |Show Header|⬜|
    
    
    #### EPC_EPI_CBM_PBM
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Text|EPC - EPI/CBM - PBM|
    |Field Type| Large Text Area|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|⬜|
    
    
    
    
    ### LMRA_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Screen|
    |Label|LMRA Information|
    |Allow Back|⬜|
    |Allow Finish|✅|
    |Allow Pause|⬜|
    |Show Footer|✅|
    |Show Header|⬜|
    |Connector|[Task_Information](#task_information)|
    
    
    #### Work_Order_Number
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|String|
    |Default Value|workOrderRecord.WorkOrderNumber|
    |Field Text|Work Order Number|
    |Field Type| Input Field|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Disabled|true|
    |Is Required|⬜|
    
    
    
    
    #### Date
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|Date|
    |Field Text|Date|
    |Field Type| Input Field|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|⬜|
    
    
    
    
    #### LMRA_Type
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|String|
    |Choice References|- Limited<br/>- Full<br/>|
    |Field Text|LMRA Type|
    |Field Type| Dropdown Box|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|⬜|
    
    
    
    
    ### Risk_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Screen|
    |Label|Risk Information|
    |Allow Back|✅|
    |Allow Finish|✅|
    |Allow Pause|⬜|
    |Show Footer|✅|
    |Show Header|⬜|
    |Connector|[Equipment_Information](#equipment_information)|
    
    
    #### Surrounding_Risks
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Text|Surrounding Risks|
    |Field Type| Large Text Area|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|⬜|
    
    
    
    
    #### SurroundRisksPhoto
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Extension Name|forceContent:fileUpload|
    |Field Type| Component Instance|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|✅|
    |Record Id (input)|workOrderRecord.Id|
    |Label (input)|Surrounding Risks Photo|
    
    
    
    
    #### Corrective_Measures
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Text|Corrective Measures|
    |Field Type| Large Text Area|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|⬜|
    
    
    
    
    #### CorrectiveMeasuresPhoto
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Extension Name|forceContent:fileUpload|
    |Field Type| Component Instance|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|✅|
    |Label (input)|Corrective Measures Photo|
    |Record Id (input)|workOrderRecord.Id|
    
    
    
    
    ### Task_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Screen|
    |Label|Task Information|
    |Allow Back|✅|
    |Allow Finish|✅|
    |Allow Pause|⬜|
    |Show Footer|✅|
    |Show Header|⬜|
    |Connector|[Risk_Information](#risk_information)|
    
    
    #### Tasks_of_the_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Text|Tasks of the Day|
    |Field Type| Large Text Area|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|⬜|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

