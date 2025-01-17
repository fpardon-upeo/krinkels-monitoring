# Work_Order_After_Save_Record_Triggered_Add_WOL_As_Work_Steps history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Jan 8, 2025"

    _Jan 8, 2025, by fpardon-upeo in commit Org state on 2025-01-08 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "4252839996"
    
    Increment_Order[\"🟰 <em></em><br/>Increment Order"/]:::assignments
    click Increment_Order "#increment_order" "2242132951"
    
    Set_beforeExecutions[\"🟰 <em></em><br/>Set beforeExecutions"/]:::assignments
    click Set_beforeExecutions "#set_beforeexecutions" "1601222617"
    
    Set_Values_for_Work_Steps[\"<b>🟰 <em></em><br/>Set Values for Work Steps</b>"/]:::assignmentsChanged
    
    
    click Set_Values_for_Work_Steps "#set_values_for_work_steps" "2871189508"
    
    
    Check_beforeExectionsOrder{"🔀 <em></em><br/>Check beforeExectionsOrder"}:::decisions
    click Check_beforeExectionsOrder "#check_beforeexectionsorder" "3664902101"
    
    WOL_presents{"🔀 <em></em><br/>WOL presents ?"}:::decisions
    click WOL_presents "#wol_presents" "2033851454"
    
    Work_Plan_Present{"🔀 <em></em><br/>Work Plan Present  ?"}:::decisions
    click Work_Plan_Present "#work_plan_present" "1562172295"
    
    Loop_Through_WOL{{"🔁 <em></em><br/>Loop Through WOL"}}:::loops
    click Loop_Through_WOL "#loop_through_wol" "2757755997"
    
    Create_New_Work_Steps[("➕ <em></em><br/>Create New Work Steps")]:::recordCreates
    click Create_New_Work_Steps "#create_new_work_steps" "3617022635"
    
    Create_Platform_Event_to_Reorder_Last_Steps[("➕ <em></em><br/>Create Platform Event to Reorder Last Steps")]:::recordCreates
    click Create_Platform_Event_to_Reorder_Last_Steps "#create_platform_event_to_reorder_last_steps" "657826964"
    
    Get_Before_Work_Photos_Step_Information[("🔍 <em></em><br/>Get Before Work Photos Step Information")]:::recordLookups
    click Get_Before_Work_Photos_Step_Information "#get_before_work_photos_step_information" "4165026208"
    
    Get_WOL[("🔍 <em></em><br/>Get WOL")]:::recordLookups
    click Get_WOL "#get_wol" "3672556536"
    
    Get_Work_Plan_Information[("🔍 <em></em><br/>Get Work Plan Information")]:::recordLookups
    click Get_Work_Plan_Information "#get_work_plan_information" "824162745"
    
    Increment_Order --> Loop_Through_WOL
    Set_beforeExecutions --> Get_WOL
    Set_Values_for_Work_Steps --> Increment_Order
    Check_beforeExectionsOrder --> |"Is Null"| Set_beforeExecutions
    Check_beforeExectionsOrder --> |"Default Outcome"| Get_WOL
    WOL_presents --> |"Yes"| Loop_Through_WOL
    WOL_presents --> |"No"| END_WOL_presents
    Work_Plan_Present --> |"Yes"| Get_Before_Work_Photos_Step_Information
    Work_Plan_Present --> |"No"| END_Work_Plan_Present
    Loop_Through_WOL --> |"For Each"|Set_Values_for_Work_Steps
    Loop_Through_WOL ---> |"After Last"|Create_New_Work_Steps
    Create_New_Work_Steps --> Create_Platform_Event_to_Reorder_Last_Steps
    Create_Platform_Event_to_Reorder_Last_Steps --> END_Create_Platform_Event_to_Reorder_Last_Steps
    Get_Before_Work_Photos_Step_Information --> Check_beforeExectionsOrder
    Get_WOL --> WOL_presents
    Get_Work_Plan_Information --> Work_Plan_Present
    START -->  Get_Work_Plan_Information
    END_WOL_presents(( END )):::endClass
    END_Work_Plan_Present(( END )):::endClass
    END_Create_Platform_Event_to_Reorder_Last_Steps(( END )):::endClass
    
    
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
    
    ### Set_Values_for_Work_Steps
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Set Values for Work Steps|
    |Connector|[Increment_Order](#increment_order)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |WorkStepRecord.WorkOrderId| Assign|$Record.Id|
    |WorkStepRecord.Name| Assign|Loop_Through_WOL.Description|
    |WorkStepRecord.WorkPlanId| Assign|Get_Work_Plan_Information.Id|
    |WorkStepRecord.Work_Order_Line_Item__c| Assign|Loop_Through_WOL.Id|
    |WorkStepRecord.ExecutionOrder| Assign|NextNumber|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord.Added_from_WOL__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |WorkStepCollection| Add|WorkStepRecord|
    
    
    
    
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
    click START "#general-information" "4252839996"
    
    Increment_Order[\"🟰 <em></em><br/>Increment Order"/]:::assignments
    click Increment_Order "#increment_order" "2242132951"
    
    
    Set_beforeExecutions[\"<b>🟰 <em></em><br/>Set beforeExecutions</b>"/]:::assignmentsAdded
    click Set_beforeExecutions "#set_beforeexecutions" "1601222617"
    
    
    Set_Values_for_Work_Steps[\"🟰 <em></em><br/>Set Values for Work Steps"/]:::assignments
    click Set_Values_for_Work_Steps "#set_values_for_work_steps" "4058244898"
    
    
    Check_beforeExectionsOrder{"<b>🔀 <em></em><br/>Check beforeExectionsOrder</b>"}:::decisionsAdded
    click Check_beforeExectionsOrder "#check_beforeexectionsorder" "3664902101"
    
    
    WOL_presents{"🔀 <em></em><br/>WOL presents ?"}:::decisions
    click WOL_presents "#wol_presents" "2033851454"
    
    Work_Plan_Present{"🔀 <em></em><br/>Work Plan Present  ?"}:::decisions
    click Work_Plan_Present "#work_plan_present" "1562172295"
    
    Loop_Through_WOL{{"🔁 <em></em><br/>Loop Through WOL"}}:::loops
    click Loop_Through_WOL "#loop_through_wol" "2757755997"
    
    Create_New_Work_Steps[("➕ <em></em><br/>Create New Work Steps")]:::recordCreates
    click Create_New_Work_Steps "#create_new_work_steps" "3617022635"
    
    Create_Platform_Event_to_Reorder_Last_Steps[("➕ <em></em><br/>Create Platform Event to Reorder Last Steps")]:::recordCreates
    click Create_Platform_Event_to_Reorder_Last_Steps "#create_platform_event_to_reorder_last_steps" "657826964"
    
    Get_Before_Work_Photos_Step_Information[("<b>🔍 <em></em><br/>Get Before Work Photos Step Information</b>")]:::recordLookupsChanged
    
    
    click Get_Before_Work_Photos_Step_Information "#get_before_work_photos_step_information" "4165026208"
    
    
    Get_WOL[("🔍 <em></em><br/>Get WOL")]:::recordLookups
    click Get_WOL "#get_wol" "3672556536"
    
    Get_Work_Plan_Information[("🔍 <em></em><br/>Get Work Plan Information")]:::recordLookups
    click Get_Work_Plan_Information "#get_work_plan_information" "824162745"
    
    Increment_Order --> Loop_Through_WOL
    
    Set_beforeExecutions ==> Get_WOL
    
    Set_Values_for_Work_Steps --> Increment_Order
    
    Check_beforeExectionsOrder ==> |"🟩<b>Is Null</b>"| Set_beforeExecutions
    Check_beforeExectionsOrder ==> |"🟩<b>Default Outcome</b>"| Get_WOL
    
    WOL_presents --> |"Yes"| Loop_Through_WOL
    WOL_presents --> |"No"| END_WOL_presents
    Work_Plan_Present --> |"Yes"| Get_Before_Work_Photos_Step_Information
    Work_Plan_Present --> |"No"| END_Work_Plan_Present
    Loop_Through_WOL --> |"For Each"|Set_Values_for_Work_Steps
    Loop_Through_WOL ---> |"After Last"|Create_New_Work_Steps
    Create_New_Work_Steps --> Create_Platform_Event_to_Reorder_Last_Steps
    Create_Platform_Event_to_Reorder_Last_Steps --> END_Create_Platform_Event_to_Reorder_Last_Steps
    
    Get_Before_Work_Photos_Step_Information -.-> Get_WOL
    
    Get_Before_Work_Photos_Step_Information ==> Check_beforeExectionsOrder
    
    Get_WOL --> WOL_presents
    Get_Work_Plan_Information --> Work_Plan_Present
    START -->  Get_Work_Plan_Information
    END_WOL_presents(( END )):::endClass
    END_Work_Plan_Present(( END )):::endClass
    END_Create_Platform_Event_to_Reorder_Last_Steps(( END )):::endClass
    
    
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
      
    linkStyle 1,3,4,14 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 13 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    <!-- Flow description -->
    
    ## Flow Nodes Details
    
    ### 🟩Set_beforeExecutions
    
    |🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Assignment</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Set beforeExecutions</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_WOL](#get_wol)</b></span>|
    
    
    #### 🟩Assignments
    
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign To Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
    |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>BeforePhotosOrder</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
    
    
    
    
    
    ### 🟩Check_beforeExectionsOrder
    
    |🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Check beforeExectionsOrder</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_WOL](#get_wol)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Default Outcome</b></span>|
    
    
    #### 🟩Rule Is_Null (Is Null)
    
    |🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Set_beforeExecutions](#set_beforeexecutions)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    
    
    
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Left Value Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Right Value</b></span>|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>BeforePhotosOrder</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    
    
    
    
    ### Get_Before_Work_Photos_Step_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkStep|
    |Label|Get Before Work Photos Step Information|
    |Assign Null Values If No Records Found|⬜|
    |Output Assignments|assignToReference: BeforePhotosOrder<br/>field: ExecutionOrder<br/>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_WOL](#get_wol)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Check_beforeExectionsOrder](#check_beforeexectionsorder)</b></span>|
    
    
    
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
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "4252839996"
    
    Increment_Order[\"🟰 <em></em><br/>Increment Order"/]:::assignments
    click Increment_Order "#increment_order" "2242132951"
    
    Set_Values_for_Work_Steps[\"<b>🟰 <em></em><br/>Set Values for Work Steps</b>"/]:::assignmentsChanged
    
    
    click Set_Values_for_Work_Steps "#set_values_for_work_steps" "4058244898"
    
    
    WOL_presents{"🔀 <em></em><br/>WOL presents ?"}:::decisions
    click WOL_presents "#wol_presents" "2033851454"
    
    Work_Plan_Present{"🔀 <em></em><br/>Work Plan Present  ?"}:::decisions
    click Work_Plan_Present "#work_plan_present" "1562172295"
    
    Loop_Through_WOL{{"🔁 <em></em><br/>Loop Through WOL"}}:::loops
    click Loop_Through_WOL "#loop_through_wol" "2757755997"
    
    Create_New_Work_Steps[("➕ <em></em><br/>Create New Work Steps")]:::recordCreates
    click Create_New_Work_Steps "#create_new_work_steps" "3617022635"
    
    Create_Platform_Event_to_Reorder_Last_Steps[("➕ <em></em><br/>Create Platform Event to Reorder Last Steps")]:::recordCreates
    click Create_Platform_Event_to_Reorder_Last_Steps "#create_platform_event_to_reorder_last_steps" "657826964"
    
    Get_Before_Work_Photos_Step_Information[("🔍 <em></em><br/>Get Before Work Photos Step Information")]:::recordLookups
    click Get_Before_Work_Photos_Step_Information "#get_before_work_photos_step_information" "1331861420"
    
    Get_WOL[("🔍 <em></em><br/>Get WOL")]:::recordLookups
    click Get_WOL "#get_wol" "3672556536"
    
    Get_Work_Plan_Information[("🔍 <em></em><br/>Get Work Plan Information")]:::recordLookups
    click Get_Work_Plan_Information "#get_work_plan_information" "824162745"
    
    Increment_Order --> Loop_Through_WOL
    Set_Values_for_Work_Steps --> Increment_Order
    WOL_presents --> |"Yes"| Loop_Through_WOL
    WOL_presents --> |"No"| END_WOL_presents
    Work_Plan_Present --> |"Yes"| Get_Before_Work_Photos_Step_Information
    Work_Plan_Present --> |"No"| END_Work_Plan_Present
    Loop_Through_WOL --> |"For Each"|Set_Values_for_Work_Steps
    Loop_Through_WOL ---> |"After Last"|Create_New_Work_Steps
    Create_New_Work_Steps --> Create_Platform_Event_to_Reorder_Last_Steps
    Create_Platform_Event_to_Reorder_Last_Steps --> END_Create_Platform_Event_to_Reorder_Last_Steps
    Get_Before_Work_Photos_Step_Information --> Get_WOL
    Get_WOL --> WOL_presents
    Get_Work_Plan_Information --> Work_Plan_Present
    START -->  Get_Work_Plan_Information
    END_WOL_presents(( END )):::endClass
    END_Work_Plan_Present(( END )):::endClass
    END_Create_Platform_Event_to_Reorder_Last_Steps(( END )):::endClass
    
    
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
    |Object|WorkOrder|
    |Process Type| Auto Launched Flow|
    |Trigger Type| Record After Save|
    |Record Trigger Type| Create And Update|
    |Label|[Work Order][After-Save][Record-Triggered] Add WOL As Work Steps|
    |Status|Active|
    |Environments|Default|
    |Interview Label|[Work Order][After-Save][Record-Triggered] Add WOL As Work Steps {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Get_Work_Plan_Information](#get_work_plan_information)|
    |Next Node|[Get_Work_Plan_Information](#get_work_plan_information)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Status| Is Changed|✅|
    |2|Status| Equal To|Dispatched|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>3</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Work_Order_Type__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Not Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Depot Visit</i></span>|
    
    
    
    ## Flow Nodes Details
    
    ### Set_Values_for_Work_Steps
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Set Values for Work Steps|
    |Connector|[Increment_Order](#increment_order)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |WorkStepRecord.WorkOrderId| Assign|$Record.Id|
    |WorkStepRecord.Name| Assign|Loop_Through_WOL.Description|
    |WorkStepRecord.WorkPlanId| Assign|Get_Work_Plan_Information.Id|
    |WorkStepRecord.Work_Order_Line_Item__c| Assign|Loop_Through_WOL.Id|
    |WorkStepRecord.ExecutionOrder| Assign|NextNumber|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>WorkStepRecord.ActionDefinition</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>WorkStep.Set_Service_Status</i></span>|
    |WorkStepCollection| Add|WorkStepRecord|
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 30, 2024"

    _Nov 30, 2024, by fpardon-upeo in commit Org state on 2024-11-30 00:24 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "4252839996"
    
    Increment_Order[\"🟰 <em></em><br/>Increment Order"/]:::assignments
    click Increment_Order "#increment_order" "2242132951"
    
    Set_Values_for_Work_Steps[\"🟰 <em></em><br/>Set Values for Work Steps"/]:::assignments
    click Set_Values_for_Work_Steps "#set_values_for_work_steps" "4051926435"
    
    WOL_presents{"🔀 <em></em><br/>WOL presents ?"}:::decisions
    click WOL_presents "#wol_presents" "2033851454"
    
    Work_Plan_Present{"🔀 <em></em><br/>Work Plan Present  ?"}:::decisions
    click Work_Plan_Present "#work_plan_present" "1562172295"
    
    Loop_Through_WOL{{"🔁 <em></em><br/>Loop Through WOL"}}:::loops
    click Loop_Through_WOL "#loop_through_wol" "2757755997"
    
    Create_New_Work_Steps[("➕ <em></em><br/>Create New Work Steps")]:::recordCreates
    click Create_New_Work_Steps "#create_new_work_steps" "3617022635"
    
    Create_Platform_Event_to_Reorder_Last_Steps[("➕ <em></em><br/>Create Platform Event to Reorder Last Steps")]:::recordCreates
    click Create_Platform_Event_to_Reorder_Last_Steps "#create_platform_event_to_reorder_last_steps" "657826964"
    
    Get_Before_Work_Photos_Step_Information[("🔍 <em></em><br/>Get Before Work Photos Step Information")]:::recordLookups
    click Get_Before_Work_Photos_Step_Information "#get_before_work_photos_step_information" "1331861420"
    
    Get_WOL[("🔍 <em></em><br/>Get WOL")]:::recordLookups
    click Get_WOL "#get_wol" "3672556536"
    
    Get_Work_Plan_Information[("🔍 <em></em><br/>Get Work Plan Information")]:::recordLookups
    click Get_Work_Plan_Information "#get_work_plan_information" "824162745"
    
    Increment_Order --> Loop_Through_WOL
    Set_Values_for_Work_Steps --> Increment_Order
    WOL_presents --> |"Yes"| Loop_Through_WOL
    WOL_presents --> |"No"| END_WOL_presents
    Work_Plan_Present --> |"Yes"| Get_Before_Work_Photos_Step_Information
    Work_Plan_Present --> |"No"| END_Work_Plan_Present
    Loop_Through_WOL --> |"For Each"|Set_Values_for_Work_Steps
    Loop_Through_WOL ---> |"After Last"|Create_New_Work_Steps
    Create_New_Work_Steps --> Create_Platform_Event_to_Reorder_Last_Steps
    Create_Platform_Event_to_Reorder_Last_Steps --> END_Create_Platform_Event_to_Reorder_Last_Steps
    Get_Before_Work_Photos_Step_Information --> Get_WOL
    Get_WOL --> WOL_presents
    Get_Work_Plan_Information --> Work_Plan_Present
    START -->  Get_Work_Plan_Information
    END_WOL_presents(( END )):::endClass
    END_Work_Plan_Present(( END )):::endClass
    END_Create_Platform_Event_to_Reorder_Last_Steps(( END )):::endClass
    
    
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
    |Object|WorkOrder|
    |Process Type| Auto Launched Flow|
    |Trigger Type| Record After Save|
    |Record Trigger Type| Create And Update|
    |Label|[Work Order][After-Save][Record-Triggered] Add WOL As Work Steps|
    |Status|Active|
    |Environments|Default|
    |Interview Label|[Work Order][After-Save][Record-Triggered] Add WOL As Work Steps {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Get_Work_Plan_Information](#get_work_plan_information)|
    |Next Node|[Get_Work_Plan_Information](#get_work_plan_information)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Status| Is Changed|✅|
    |2|Status| Equal To|Dispatched|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>3</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Work_Order_Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Not Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Depot Visit</b></span>|
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 21, 2024"

    _Nov 21, 2024, by fpardon-upeo in commit Org state on 2024-11-21 00:44 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "4252839996"
    
    Increment_Order[\"🟰 <em></em><br/>Increment Order"/]:::assignments
    click Increment_Order "#increment_order" "2242132951"
    
    Set_Values_for_Work_Steps[\"<b>🟰 <em></em><br/>Set Values for Work Steps</b>"/]:::assignmentsChanged
    
    
    click Set_Values_for_Work_Steps "#set_values_for_work_steps" "4051926435"
    
    
    WOL_presents{"🔀 <em></em><br/>WOL presents ?"}:::decisions
    click WOL_presents "#wol_presents" "2033851454"
    
    Work_Plan_Present{"🔀 <em></em><br/>Work Plan Present  ?"}:::decisions
    click Work_Plan_Present "#work_plan_present" "1562172295"
    
    Loop_Through_WOL{{"🔁 <em></em><br/>Loop Through WOL"}}:::loops
    click Loop_Through_WOL "#loop_through_wol" "2757755997"
    
    Create_New_Work_Steps[("➕ <em></em><br/>Create New Work Steps")]:::recordCreates
    click Create_New_Work_Steps "#create_new_work_steps" "3617022635"
    
    Create_Platform_Event_to_Reorder_Last_Steps[("➕ <em></em><br/>Create Platform Event to Reorder Last Steps")]:::recordCreates
    click Create_Platform_Event_to_Reorder_Last_Steps "#create_platform_event_to_reorder_last_steps" "657826964"
    
    Get_Before_Work_Photos_Step_Information[("🔍 <em></em><br/>Get Before Work Photos Step Information")]:::recordLookups
    click Get_Before_Work_Photos_Step_Information "#get_before_work_photos_step_information" "1331861420"
    
    Get_WOL[("🔍 <em></em><br/>Get WOL")]:::recordLookups
    click Get_WOL "#get_wol" "3672556536"
    
    Get_Work_Plan_Information[("🔍 <em></em><br/>Get Work Plan Information")]:::recordLookups
    click Get_Work_Plan_Information "#get_work_plan_information" "824162745"
    
    Increment_Order --> Loop_Through_WOL
    Set_Values_for_Work_Steps --> Increment_Order
    WOL_presents --> |"Yes"| Loop_Through_WOL
    WOL_presents --> |"No"| END_WOL_presents
    Work_Plan_Present --> |"Yes"| Get_Before_Work_Photos_Step_Information
    Work_Plan_Present --> |"No"| END_Work_Plan_Present
    Loop_Through_WOL --> |"For Each"|Set_Values_for_Work_Steps
    Loop_Through_WOL ---> |"After Last"|Create_New_Work_Steps
    Create_New_Work_Steps --> Create_Platform_Event_to_Reorder_Last_Steps
    Create_Platform_Event_to_Reorder_Last_Steps --> END_Create_Platform_Event_to_Reorder_Last_Steps
    Get_Before_Work_Photos_Step_Information --> Get_WOL
    Get_WOL --> WOL_presents
    Get_Work_Plan_Information --> Work_Plan_Present
    START -->  Get_Work_Plan_Information
    END_WOL_presents(( END )):::endClass
    END_Work_Plan_Present(( END )):::endClass
    END_Create_Platform_Event_to_Reorder_Last_Steps(( END )):::endClass
    
    
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
    
    ### Set_Values_for_Work_Steps
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Set Values for Work Steps|
    |Connector|[Increment_Order](#increment_order)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |WorkStepRecord.WorkOrderId| Assign|$Record.Id|
    |WorkStepRecord.Name| Assign|Loop_Through_WOL.Description|
    |WorkStepRecord.WorkPlanId| Assign|Get_Work_Plan_Information.Id|
    |WorkStepRecord.Work_Order_Line_Item__c| Assign|Loop_Through_WOL.Id|
    |WorkStepRecord.ExecutionOrder| Assign|NextNumber|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord.ActionDefinition</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStep.Set_Service_Status</b></span>|
    |WorkStepCollection| Add|WorkStepRecord|
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 17, 2024 (Initial)"

    _Nov 17, 2024, by fpardon-upeo in commit Org state on 2024-11-17 00:26 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "4252839996"
    
    Increment_Order[\"🟰 <em></em><br/>Increment Order"/]:::assignments
    click Increment_Order "#increment_order" "2242132951"
    
    Set_Values_for_Work_Steps[\"🟰 <em></em><br/>Set Values for Work Steps"/]:::assignments
    click Set_Values_for_Work_Steps "#set_values_for_work_steps" "4058244898"
    
    WOL_presents{"🔀 <em></em><br/>WOL presents ?"}:::decisions
    click WOL_presents "#wol_presents" "2033851454"
    
    Work_Plan_Present{"🔀 <em></em><br/>Work Plan Present  ?"}:::decisions
    click Work_Plan_Present "#work_plan_present" "1562172295"
    
    Loop_Through_WOL{{"🔁 <em></em><br/>Loop Through WOL"}}:::loops
    click Loop_Through_WOL "#loop_through_wol" "2757755997"
    
    Create_New_Work_Steps[("➕ <em></em><br/>Create New Work Steps")]:::recordCreates
    click Create_New_Work_Steps "#create_new_work_steps" "3617022635"
    
    Create_Platform_Event_to_Reorder_Last_Steps[("➕ <em></em><br/>Create Platform Event to Reorder Last Steps")]:::recordCreates
    click Create_Platform_Event_to_Reorder_Last_Steps "#create_platform_event_to_reorder_last_steps" "657826964"
    
    Get_Before_Work_Photos_Step_Information[("🔍 <em></em><br/>Get Before Work Photos Step Information")]:::recordLookups
    click Get_Before_Work_Photos_Step_Information "#get_before_work_photos_step_information" "1331861420"
    
    Get_WOL[("🔍 <em></em><br/>Get WOL")]:::recordLookups
    click Get_WOL "#get_wol" "3672556536"
    
    Get_Work_Plan_Information[("🔍 <em></em><br/>Get Work Plan Information")]:::recordLookups
    click Get_Work_Plan_Information "#get_work_plan_information" "824162745"
    
    Increment_Order --> Loop_Through_WOL
    Set_Values_for_Work_Steps --> Increment_Order
    WOL_presents --> |"Yes"| Loop_Through_WOL
    WOL_presents --> |"No"| END_WOL_presents
    Work_Plan_Present --> |"Yes"| Get_Before_Work_Photos_Step_Information
    Work_Plan_Present --> |"No"| END_Work_Plan_Present
    Loop_Through_WOL --> |"For Each"|Set_Values_for_Work_Steps
    Loop_Through_WOL ---> |"After Last"|Create_New_Work_Steps
    Create_New_Work_Steps --> Create_Platform_Event_to_Reorder_Last_Steps
    Create_Platform_Event_to_Reorder_Last_Steps --> END_Create_Platform_Event_to_Reorder_Last_Steps
    Get_Before_Work_Photos_Step_Information --> Get_WOL
    Get_WOL --> WOL_presents
    Get_Work_Plan_Information --> Work_Plan_Present
    START -->  Get_Work_Plan_Information
    END_WOL_presents(( END )):::endClass
    END_Work_Plan_Present(( END )):::endClass
    END_Create_Platform_Event_to_Reorder_Last_Steps(( END )):::endClass
    
    
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
    |Object|WorkOrder|
    |Process Type| Auto Launched Flow|
    |Trigger Type| Record After Save|
    |Record Trigger Type| Create And Update|
    |Label|[Work Order][After-Save][Record-Triggered] Add WOL As Work Steps|
    |Status|Active|
    |Environments|Default|
    |Interview Label|[Work Order][After-Save][Record-Triggered] Add WOL As Work Steps {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Get_Work_Plan_Information](#get_work_plan_information)|
    |Next Node|[Get_Work_Plan_Information](#get_work_plan_information)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Status| Is Changed|✅|
    |2|Status| Equal To|Dispatched|
    
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|Description|
    |:-- |:--:|:--:|:--:|:--:|:--:|:--  |
    |BeforePhotosOrder|Number|⬜|✅|⬜|<!-- -->|<!-- -->|
    |IncrementOrder|Number|⬜|✅|⬜|<!-- -->|<!-- -->|
    |WorkStepCollection|SObject|✅|✅|⬜|WorkStep|<!-- -->|
    |WorkStepRecord|SObject|⬜|✅|⬜|WorkStep|<!-- -->|
    
    
    ## Formulas
    
    |Name|Data Type|Expression|Description|
    |:-- |:--:|:-- |:--  |
    |NextNumber|Number|{!BeforePhotosOrder} + {!IncrementOrder}|<!-- -->|
    
    
    ## Flow Nodes Details
    
    ### Increment_Order
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Increment Order|
    |Connector|[Loop_Through_WOL](#loop_through_wol)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |IncrementOrder| Add|1|
    
    
    
    
    ### Set_Values_for_Work_Steps
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Set Values for Work Steps|
    |Connector|[Increment_Order](#increment_order)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |WorkStepRecord.WorkOrderId| Assign|$Record.Id|
    |WorkStepRecord.Name| Assign|Loop_Through_WOL.Description|
    |WorkStepRecord.WorkPlanId| Assign|Get_Work_Plan_Information.Id|
    |WorkStepRecord.Work_Order_Line_Item__c| Assign|Loop_Through_WOL.Id|
    |WorkStepRecord.ExecutionOrder| Assign|NextNumber|
    |WorkStepCollection| Add|WorkStepRecord|
    
    
    
    
    ### WOL_presents
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|WOL presents ?|
    |Default Connector Label|No|
    
    
    #### Rule Yes_WOL_presents (Yes)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Loop_Through_WOL](#loop_through_wol)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|[Get_WOL](#get_wol)| Is Empty|⬜|
    
    
    
    
    ### Work_Plan_Present
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Work Plan Present  ?|
    |Default Connector Label|No|
    
    
    #### Rule Yes_Work_Plan_Present (Yes)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Get_Before_Work_Photos_Step_Information](#get_before_work_photos_step_information)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|Get_Work_Plan_Information.Id| Is Null|⬜|
    
    
    
    
    ### Loop_Through_WOL
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Loop|
    |Label|Loop Through WOL|
    |Collection Reference|[Get_WOL](#get_wol)|
    |Iteration Order|Asc|
    |Next Value Connector|[Set_Values_for_Work_Steps](#set_values_for_work_steps)|
    |No More Values Connector|[Create_New_Work_Steps](#create_new_work_steps)|
    
    
    ### Create_New_Work_Steps
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Create|
    |Label|Create New Work Steps|
    |Input Reference|WorkStepCollection|
    |Connector|[Create_Platform_Event_to_Reorder_Last_Steps](#create_platform_event_to_reorder_last_steps)|
    
    
    ### Create_Platform_Event_to_Reorder_Last_Steps
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Create|
    |Object|Reorder_Work_Step__e|
    |Label|Create Platform Event to Reorder Last Steps|
    |Store Output Automatically|✅|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Next_Number__c|NextNumber|
    |Work_Order_Id__c|$Record.Id|
    
    
    
    
    ### Get_Before_Work_Photos_Step_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkStep|
    |Label|Get Before Work Photos Step Information|
    |Assign Null Values If No Records Found|⬜|
    |Output Assignments|assignToReference: BeforePhotosOrder<br/>field: ExecutionOrder<br/>|
    |Connector|[Get_WOL](#get_wol)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|WorkOrderId| Equal To|$Record.Id|
    |2|Name| Equal To|Take Before Work Photos|
    
    
    
    
    ### Get_WOL
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkOrderLineItem|
    |Label|Get WOL|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|⬜|
    |Store Output Automatically|✅|
    |Connector|[WOL_presents](#wol_presents)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|WorkOrderId| Equal To|$Record.Id|
    
    
    
    
    ### Get_Work_Plan_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkPlan|
    |Label|Get Work Plan Information|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Work_Plan_Present](#work_plan_present)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|WorkOrderId| Equal To|$Record.Id|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

