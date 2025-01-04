# Work_Order_Mobile_Flow_Screen_Flow_Log_Mileage history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Dec 20, 2024"

    _Dec 20, 2024, by fpardon-upeo in commit Org state on 2024-12-20 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START"]):::startClass
    click START "#general-information" "1073547091"
    
    Set_Mileage_Values[\"<b>🟰 <em></em><br/>Set Mileage Values</b>"/]:::assignmentsChanged
    
    
    click Set_Mileage_Values "#set_mileage_values" "1391318204"
    
    
    Get_Mileage_Entry[("🔍 <em></em><br/>Get Mileage Entry")]:::recordLookups
    click Get_Mileage_Entry "#get_mileage_entry" "505407534"
    
    Get_Timesheet_Id[("🔍 <em></em><br/>Get Timesheet Id")]:::recordLookups
    click Get_Timesheet_Id "#get_timesheet_id" "718657793"
    
    Get_Work_Step[("🔍 <em></em><br/>Get Work Step")]:::recordLookups
    click Get_Work_Step "#get_work_step" "1197441476"
    
    Update_Kilometers[("🛠️ <em></em><br/>Update Kilometers")]:::recordUpdates
    click Update_Kilometers "#update_kilometers" "31216743"
    
    Update_Work_Step[("🛠️ <em></em><br/>Update Work Step")]:::recordUpdates
    click Update_Work_Step "#update_work_step" "3555008714"
    
    Log_KM(["<b>💻 <em></em><br/>Log KM</b>"]):::screensChanged
    
    
    click Log_KM "#log_km" "1271325963"
    
    
    Set_Mileage_Values --> Update_Kilometers
    Get_Mileage_Entry --> Log_KM
    Get_Timesheet_Id --> Get_Mileage_Entry
    Get_Work_Step --> Get_Timesheet_Id
    Update_Kilometers --> Update_Work_Step
    Update_Work_Step --> END_Update_Work_Step
    Log_KM --> Set_Mileage_Values
    START -->  Get_Work_Step
    END_Update_Work_Step(( END )):::endClass
    
    
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
    
    ## Flow Nodes Details
    
    ### Set_Mileage_Values
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>MileageEntryRecord.Starting_Mileage__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Starting_Kilomters</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>MileageEntryRecord.Starting_Mileage__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Starting_Kilometers</b></span>|
    
    ### Log_KM
    
    #### 🟥Starting_Kilomters
    
    #### 🟩Starting_Kilometers
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Starting Kilomters</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Starting Kilometers</b></span>|
    
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
    START(["START"]):::startClass
    click START "#general-information" "1073547091"
    
    Set_Mileage_Values[\"<b>🟰 <em></em><br/>Set Mileage Values</b>"/]:::assignmentsChanged
    
    
    click Set_Mileage_Values "#set_mileage_values" "5075702"
    
    
    Get_Mileage_Entry[("<b>🔍 <em></em><br/>Get Mileage Entry</b>")]:::recordLookupsChanged
    
    
    click Get_Mileage_Entry "#get_mileage_entry" "505407534"
    
    
    
    Get_Timesheet_Id[("<b>🔍 <em></em><br/>Get Timesheet Id</b>")]:::recordLookupsAdded
    click Get_Timesheet_Id "#get_timesheet_id" "718657793"
    
    
    Get_Work_Step[("<b>🔍 <em></em><br/>Get Work Step</b>")]:::recordLookupsChanged
    
    
    click Get_Work_Step "#get_work_step" "1197441476"
    
    
    Update_Kilometers[("🛠️ <em></em><br/>Update Kilometers")]:::recordUpdates
    click Update_Kilometers "#update_kilometers" "31216743"
    
    Update_Work_Step[("🛠️ <em></em><br/>Update Work Step")]:::recordUpdates
    click Update_Work_Step "#update_work_step" "3555008714"
    
    Log_KM(["💻 <em></em><br/>Log KM"]):::screens
    click Log_KM "#log_km" "494045391"
    
    Set_Mileage_Values --> Update_Kilometers
    Get_Mileage_Entry --> Log_KM
    
    Get_Work_Step -.-> Get_Mileage_Entry
    
    Get_Timesheet_Id ==> Get_Mileage_Entry
    Get_Work_Step ==> Get_Timesheet_Id
    
    Update_Kilometers --> Update_Work_Step
    Update_Work_Step --> END_Update_Work_Step
    Log_KM --> Set_Mileage_Values
    START -->  Get_Work_Step
    END_Update_Work_Step(( END )):::endClass
    
    
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
      
    linkStyle 3,4 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 2 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
    |:-- |:--:|:--:|:--:|:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>timesheetId</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>UserId</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    
    ## Flow Nodes Details
    
    ### Set_Mileage_Values
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>MileageEntryRecord.Work_Order__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStepRecord.WorkOrderId</b></span>|
    
    ### Get_Mileage_Entry
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Work_Order__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>WorkStepRecord.WorkOrderId</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Starting</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Time_Sheet__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>timesheetId</b></span>|
    
    ### 🟩Get_Timesheet_Id
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>TimeSheet</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Timesheet Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Output Assignments</b></span>|<span style="background-color: #a6e22e; color: black;"><b>assignToReference: timesheetId<br/>field: Id<br/></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Mileage_Entry](#get_mileage_entry)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OwnerId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>UserId</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>StartDate</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Flow.CurrentDate</b></span>|
    
    ### Get_Work_Step
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Mileage_Entry](#get_mileage_entry)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Timesheet_Id](#get_timesheet_id)</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 21, 2024 (Initial)"

    _Nov 21, 2024, by fpardon-upeo in commit Org state on 2024-11-21 00:44 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START"]):::startClass
    click START "#general-information" "1073547091"
    
    Set_Mileage_Values[\"🟰 <em></em><br/>Set Mileage Values"/]:::assignments
    click Set_Mileage_Values "#set_mileage_values" "1168915445"
    
    Get_Mileage_Entry[("🔍 <em></em><br/>Get Mileage Entry")]:::recordLookups
    click Get_Mileage_Entry "#get_mileage_entry" "3132636032"
    
    Get_Work_Step[("🔍 <em></em><br/>Get Work Step")]:::recordLookups
    click Get_Work_Step "#get_work_step" "2399507764"
    
    Update_Kilometers[("🛠️ <em></em><br/>Update Kilometers")]:::recordUpdates
    click Update_Kilometers "#update_kilometers" "31216743"
    
    Update_Work_Step[("🛠️ <em></em><br/>Update Work Step")]:::recordUpdates
    click Update_Work_Step "#update_work_step" "3555008714"
    
    Log_KM(["💻 <em></em><br/>Log KM"]):::screens
    click Log_KM "#log_km" "494045391"
    
    Set_Mileage_Values --> Update_Kilometers
    Get_Mileage_Entry --> Log_KM
    Get_Work_Step --> Get_Mileage_Entry
    Update_Kilometers --> Update_Work_Step
    Update_Work_Step --> END_Update_Work_Step
    Log_KM --> Set_Mileage_Values
    START -->  Get_Work_Step
    END_Update_Work_Step(( END )):::endClass
    
    
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
    |Process Type| Field Service Mobile|
    |Label|[Work Order][Mobile Flow][Screen-Flow] Log Mileage|
    |Status|Active|
    |Environments|Default|
    |Interview Label|[Work Order][Mobile Flow][Screen-Flow] Log KM {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Get_Work_Step](#get_work_step)|
    |Next Node|[Get_Work_Step](#get_work_step)|
    
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
    |:-- |:--:|:--:|:--:|:--:|:--: |
    |Id|String|⬜|✅|⬜|<!-- -->|
    |MileageEntryRecord|SObject|⬜|⬜|⬜|Mileage_Entry__c|
    |WorkStepRecord|SObject|⬜|✅|⬜|WorkStep|
    
    
    ## Flow Nodes Details
    
    ### Set_Mileage_Values
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Set Mileage Values|
    |Connector|[Update_Kilometers](#update_kilometers)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |MileageEntryRecord.Starting_Mileage__c| Assign|Starting_Kilomters|
    |MileageEntryRecord.Ending_Mileage__c| Assign|Ending_Kilometers|
    
    
    
    
    ### Get_Mileage_Entry
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|Mileage_Entry__c|
    |Label|Get Mileage Entry|
    |Assign Null Values If No Records Found|⬜|
    |Output Reference|MileageEntryRecord|
    |Queried Fields|- Id<br/>- Starting_Mileage__c<br/>- Ending_Mileage__c<br/>|
    |Sort Field|CreatedDate|
    |Sort Order|Desc|
    |Connector|[Log_KM](#log_km)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Work_Order__c| Equal To|WorkStepRecord.WorkOrderId|
    
    
    
    
    ### Get_Work_Step
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkStep|
    |Label|Get Work Step|
    |Assign Null Values If No Records Found|⬜|
    |Output Reference|WorkStepRecord|
    |Queried Fields|- Id<br/>- WorkOrderId<br/>|
    |Connector|[Get_Mileage_Entry](#get_mileage_entry)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|Id|
    
    
    
    
    ### Update_Kilometers
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Label|Update Kilometers|
    |Input Reference|MileageEntryRecord|
    |Connector|[Update_Work_Step](#update_work_step)|
    
    
    ### Update_Work_Step
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Object|WorkStep|
    |Label|Update Work Step|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|Id|
    
    
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Status|Completed|
    
    
    
    
    ### Log_KM
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Screen|
    |Label|Log KM|
    |Allow Back|✅|
    |Allow Finish|✅|
    |Allow Pause|⬜|
    |Back Button Label|Cancel|
    |Show Footer|✅|
    |Show Header|✅|
    |Connector|[Set_Mileage_Values](#set_mileage_values)|
    
    
    #### Starting_Kilomters
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|Number|
    |Default Value|MileageEntryRecord.Starting_Mileage__c|
    |Field Text|Starting Kilomters|
    |Field Type| Input Field|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|✅|
    |Scale|0|
    
    
    
    
    #### Ending_Kilometers
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|Number|
    |Default Value|MileageEntryRecord.Ending_Mileage__c|
    |Field Text|Ending Kilometers|
    |Field Type| Input Field|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Required|✅|
    |Scale|0|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

