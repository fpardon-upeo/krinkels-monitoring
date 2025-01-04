# Work_Order_Mobile_Flow_Check_Out history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

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
    click START "#general-information" "422881515"
    
    LMRA_Done{"🔀 <em></em><br/>LMRA Done ?"}:::decisions
    click LMRA_Done "#lmra_done" "2020599569"
    
    
    Work_Order_Tasks_Completed{"<b>🔀 <em></em><br/>Work Order Tasks Completed ?</b>"}:::decisionsAdded
    click Work_Order_Tasks_Completed "#work_order_tasks_completed" "2166549268"
    
    
    Get_LMRA_Work_Step_Information[("🔍 <em></em><br/>Get LMRA Work Step Information")]:::recordLookups
    click Get_LMRA_Work_Step_Information "#get_lmra_work_step_information" "1781930665"
    
    Get_WO_Order_Information[("<b>🔍 <em></em><br/>Get WO Order Information</b>")]:::recordLookupsChanged
    
    
    click Get_WO_Order_Information "#get_wo_order_information" "3272715510"
    
    
    
    Get_Work_Order_Tasks_Completed_Step_Information[("<b>🔍 <em></em><br/>Get Work Order Tasks Completed Step Information</b>")]:::recordLookupsAdded
    click Get_Work_Order_Tasks_Completed_Step_Information "#get_work_order_tasks_completed_step_information" "3098385536"
    
    
    Get_Work_Step_Information[("🔍 <em></em><br/>Get Work Step Information")]:::recordLookups
    click Get_Work_Step_Information "#get_work_step_information" "3727188450"
    
    Update_Status_of_Service_Appointment[("🛠️ <em></em><br/>Update Status of Service Appointment")]:::recordUpdates
    click Update_Status_of_Service_Appointment "#update_status_of_service_appointment" "2008591544"
    
    Update_Status_of_Work_Order[("🛠️ <em></em><br/>Update Status of Work Order")]:::recordUpdates
    click Update_Status_of_Work_Order "#update_status_of_work_order" "3878701233"
    
    Update_Work_Step_to_New[("🛠️ <em></em><br/>Update Work Step to New")]:::recordUpdates
    click Update_Work_Step_to_New "#update_work_step_to_new" "2179782203"
    
    Complete_LMRA_Message(["💻 <em></em><br/>Complete LMRA Message"]):::screens
    click Complete_LMRA_Message "#complete_lmra_message" "3411231437"
    
    
    WO_Tasks_to_Complete_Message(["<b>💻 <em></em><br/>WO Tasks to Complete Message</b>"]):::screensAdded
    click WO_Tasks_to_Complete_Message "#wo_tasks_to_complete_message" "3310705615"
    
    
    LMRA_Done --> |"No"| Complete_LMRA_Message
    LMRA_Done --> |"Yes"| Update_Status_of_Work_Order
    
    Work_Order_Tasks_Completed ==> |"🟩<b>No</b>"| WO_Tasks_to_Complete_Message
    Work_Order_Tasks_Completed ==> |"🟩<b>Yes</b>"| Get_LMRA_Work_Step_Information
    
    Get_LMRA_Work_Step_Information --> LMRA_Done
    
    Get_WO_Order_Information -.-> Get_LMRA_Work_Step_Information
    
    Get_WO_Order_Information ==> Get_Work_Order_Tasks_Completed_Step_Information
    Get_Work_Order_Tasks_Completed_Step_Information ==> Work_Order_Tasks_Completed
    
    Get_Work_Step_Information --> Get_WO_Order_Information
    Update_Status_of_Service_Appointment --> END_Update_Status_of_Service_Appointment
    Update_Status_of_Work_Order --> Update_Status_of_Service_Appointment
    Update_Work_Step_to_New --> END_Update_Work_Step_to_New
    Complete_LMRA_Message --> Update_Work_Step_to_New
    
    WO_Tasks_to_Complete_Message ==> END_WO_Tasks_to_Complete_Message
    
    START -->  Get_Work_Step_Information
    END_Update_Status_of_Service_Appointment(( END )):::endClass
    END_Update_Work_Step_to_New(( END )):::endClass
    
    END_WO_Tasks_to_Complete_Message(( END )):::endClassAdded
    
    
    
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
      
    linkStyle 2,3,6,7,13 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 5 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
    |:-- |:--:|:--:|:--:|:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>WOTaskStepRecord</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStep</b></span>|
    
    ## Flow Nodes Details
    
    ### 🟩Work_Order_Tasks_Completed
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Work Order Tasks Completed ?</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_LMRA_Work_Step_Information](#get_lmra_work_step_information)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Yes</b></span>|
    
    #### 🟩Rule No_Work_Order_Tasks_Completed (No)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[WO_Tasks_to_Complete_Message](#wo_tasks_to_complete_message)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WOTaskStepRecord.Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Not Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Completed</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WOTaskStepRecord.Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Not Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Not Applicable</b></span>|
    
    ### Get_WO_Order_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_LMRA_Work_Step_Information](#get_lmra_work_step_information)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Work_Order_Tasks_Completed_Step_Information](#get_work_order_tasks_completed_step_information)</b></span>|
    
    ### 🟩Get_Work_Order_Tasks_Completed_Step_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStep</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Work Order Tasks Completed Step Information</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Output Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WOTaskStepRecord</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Work_Order_Tasks_Completed](#work_order_tasks_completed)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Work Order Tasks Completed</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderRecord.Id</b></span>|
    
    ### 🟩WO_Tasks_to_Complete_Message
    
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Screen</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WO Tasks to Complete Message</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Back</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Finish</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Pause</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Show Footer</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Show Header</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    #### 🟩TaskToCompleteMessage
    
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p>Make sure to complete all your tasks for this work order and tick the related work step.</p></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 9, 2024"

    _Nov 9, 2024, by fpardon-upeo in commit Org state on 2024-11-09 00:23 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START"]):::startClass
    click START "#general-information" "422881515"
    
    LMRA_Done{"🔀 <em></em><br/>LMRA Done ?"}:::decisions
    click LMRA_Done "#lmra_done" "2020599569"
    
    Get_LMRA_Work_Step_Information[("🔍 <em></em><br/>Get LMRA Work Step Information")]:::recordLookups
    click Get_LMRA_Work_Step_Information "#get_lmra_work_step_information" "1781930665"
    
    Get_WO_Order_Information[("🔍 <em></em><br/>Get WO Order Information")]:::recordLookups
    click Get_WO_Order_Information "#get_wo_order_information" "1778649093"
    
    Get_Work_Step_Information[("🔍 <em></em><br/>Get Work Step Information")]:::recordLookups
    click Get_Work_Step_Information "#get_work_step_information" "3727188450"
    
    Update_Status_of_Service_Appointment[("<b>🛠️ <em></em><br/>Update Status of Service Appointment</b>")]:::recordUpdatesChanged
    
    
    click Update_Status_of_Service_Appointment "#update_status_of_service_appointment" "2008591544"
    
    
    Update_Status_of_Work_Order[("🛠️ <em></em><br/>Update Status of Work Order")]:::recordUpdates
    click Update_Status_of_Work_Order "#update_status_of_work_order" "3878701233"
    
    Update_Work_Step_to_New[("<b>🛠️ <em></em><br/>Update Work Step to New</b>")]:::recordUpdatesChanged
    
    
    click Update_Work_Step_to_New "#update_work_step_to_new" "2179782203"
    
    
    Complete_LMRA_Message(["<b>💻 <em></em><br/>Complete LMRA Message</b>"]):::screensChanged
    
    
    click Complete_LMRA_Message "#complete_lmra_message" "3411231437"
    
    
    LMRA_Done --> |"No"| Complete_LMRA_Message
    LMRA_Done --> |"Yes"| Update_Status_of_Work_Order
    Get_LMRA_Work_Step_Information --> LMRA_Done
    Get_WO_Order_Information --> Get_LMRA_Work_Step_Information
    Get_Work_Step_Information --> Get_WO_Order_Information
    Update_Status_of_Service_Appointment --> END_Update_Status_of_Service_Appointment
    Update_Status_of_Work_Order --> Update_Status_of_Service_Appointment
    Update_Work_Step_to_New --> END_Update_Work_Step_to_New
    Complete_LMRA_Message --> Update_Work_Step_to_New
    START -->  Get_Work_Step_Information
    END_Update_Status_of_Service_Appointment(( END )):::endClass
    END_Update_Work_Step_to_New(( END )):::endClass
    
    
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
    
    ### Update_Status_of_Service_Appointment
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>ActualEndTime</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Now</b></span>|
    
    ### Update_Work_Step_to_New
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>WorkOrderId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>WorkOrderRecord.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>2</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Name</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Check Out</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|
    
    ### Complete_LMRA_Message
    
    #### MessageToCompleteLMRA
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i><p>Please complete the LMRA step before closing your work order.</p></i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p>Please complete the <strong><em>LMRA</em></strong> step before closing your work order.</p><p>Once completed, click <strong><em>Check Out</em></strong> again to close your work order.&nbsp;</p></b></span>|
    
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
    click START "#general-information" "422881515"
    
    LMRA_Done{"<b>🔀 <em></em><br/>LMRA Done ?</b>"}:::decisionsChanged
    
    
    click LMRA_Done "#lmra_done" "2020599569"
    
    
    
    Get_LMRA_Work_Step_Information[("<b>🔍 <em></em><br/>Get LMRA Work Step Information</b>")]:::recordLookupsAdded
    click Get_LMRA_Work_Step_Information "#get_lmra_work_step_information" "1781930665"
    
    
    Get_WO_Order_Information[("<b>🔍 <em></em><br/>Get WO Order Information</b>")]:::recordLookupsChanged
    
    
    click Get_WO_Order_Information "#get_wo_order_information" "1778649093"
    
    
    Get_Work_Step_Information[("<b>🔍 <em></em><br/>Get Work Step Information</b>")]:::recordLookupsChanged
    
    
    click Get_Work_Step_Information "#get_work_step_information" "3727188450"
    
    
    Update_Status_of_Service_Appointment[("<b>🛠️ <em></em><br/>Update Status of Service Appointment</b>")]:::recordUpdatesChanged
    
    
    click Update_Status_of_Service_Appointment "#update_status_of_service_appointment" "1939527503"
    
    
    Update_Status_of_Work_Order[("<b>🛠️ <em></em><br/>Update Status of Work Order</b>")]:::recordUpdatesChanged
    
    
    click Update_Status_of_Work_Order "#update_status_of_work_order" "3878701233"
    
    
    
    LMRA_Not_Done_Message(["<i>💻 <em></em><br/>LMRA Not Done Message</i>"]):::screensRemoved
    click LMRA_Not_Done_Message "#lmra_not_done_message" "3118293043"
    
    Update_Work_Step_to_New[("<b>🛠️ <em></em><br/>Update Work Step to New</b>")]:::recordUpdatesAdded
    click Update_Work_Step_to_New "#update_work_step_to_new" "2791516181"
    
    
    
    Complete_LMRA_Message(["<b>💻 <em></em><br/>Complete LMRA Message</b>"]):::screensAdded
    click Complete_LMRA_Message "#complete_lmra_message" "3360828917"
    
    LMRA_Done ==> |"🟩<b>No</b>"| Complete_LMRA_Message
    
    LMRA_Done --> |"Yes"| Update_Status_of_Work_Order
    
    LMRA_Done -.-> |"🟥<i>No</i>"| LMRA_Not_Done_Message
    Get_WO_Order_Information -.-> LMRA_Done
    
    Get_LMRA_Work_Step_Information ==> LMRA_Done
    Get_WO_Order_Information ==> Get_LMRA_Work_Step_Information
    
    Get_Work_Step_Information --> Get_WO_Order_Information
    Update_Status_of_Service_Appointment --> END_Update_Status_of_Service_Appointment
    Update_Status_of_Work_Order --> Update_Status_of_Service_Appointment
    
    LMRA_Not_Done_Message -.-> END_LMRA_Not_Done_Message
    
    Update_Work_Step_to_New ==> END_Update_Work_Step_to_New
    Complete_LMRA_Message ==> Update_Work_Step_to_New
    
    START -->  Get_Work_Step_Information
    END_Update_Status_of_Service_Appointment(( END )):::endClass
    
    END_LMRA_Not_Done_Message(( END )):::endClassRemoved
    
    END_Update_Work_Step_to_New(( END )):::endClassAdded
    
    
    
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
      
    linkStyle 0,4,5,10,11 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 2,3,9 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
    |:-- |:--:|:--:|:--:|:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>LMRAWorkStepRecord</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStep</b></span>|
    
    ## Flow Nodes Details
    
    ### LMRA_Done
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[LMRA_Not_Done_Message](#lmra_not_done_message)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>No</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_Status_of_Work_Order](#update_status_of_work_order)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Yes</b></span>|
    
    #### 🟥Rule Yes (Yes)
    
    #### 🟩Rule No (No)
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Update_Status_of_Work_Order](#update_status_of_work_order)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Complete_LMRA_Message](#complete_lmra_message)</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>WorkOrderRecord.LMRA_Done__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LMRAWorkStepRecord.Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Not Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Completed</b></span>|
    
    ### 🟩Get_LMRA_Work_Step_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStep</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get LMRA Work Step Information</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Output Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LMRAWorkStepRecord</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Id<br/>- Status<br/></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[LMRA_Done](#lmra_done)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LMRA</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderRecord.Id</b></span>|
    
    ### Get_WO_Order_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[LMRA_Done](#lmra_done)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_LMRA_Work_Step_Information](#get_lmra_work_step_information)</b></span>|
    
    ### Get_Work_Step_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Queried Fields</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Id</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Id<br/>- WorkOrderId<br/></b></span>|
    
    ### Update_Status_of_Service_Appointment
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>ParentRecordId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Id</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ParentRecordId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderRecord.Id</b></span>|
    
    ### Update_Status_of_Work_Order
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Id</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Id</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderRecord.Id</b></span>|
    
    ### 🟥LMRA_Not_Done_Message
    
    ### 🟩Update_Work_Step_to_New
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Update</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStep</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Update Work Step to New</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderRecord.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Check Out</b></span>|
    
    #### 🟩Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>New</b></span>|
    
    ### 🟩Complete_LMRA_Message
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>LMRA Not Done Message</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Complete LMRA Message</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Next Or Finish Button Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Close</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_Work_Step_to_New](#update_work_step_to_new)</b></span>|
    
    #### 🟥LMRANotDoneMessage
    
    #### 🟩MessageToCompleteLMRA
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i><p>The LMRA has not been done. Please do this before closing this work order.</p></i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p>Please complete the LMRA step before closing your work order.</p></b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 6, 2024 (Initial)"

    _Nov 6, 2024, by fpardon-upeo in commit Org state on 2024-11-06 00:23 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START"]):::startClass
    click START "#general-information" "422881515"
    
    LMRA_Done{"🔀 <em></em><br/>LMRA Done ?"}:::decisions
    click LMRA_Done "#lmra_done" "3214563232"
    
    Get_WO_Order_Information[("🔍 <em></em><br/>Get WO Order Information")]:::recordLookups
    click Get_WO_Order_Information "#get_wo_order_information" "1054679956"
    
    Get_Work_Step_Information[("🔍 <em></em><br/>Get Work Step Information")]:::recordLookups
    click Get_Work_Step_Information "#get_work_step_information" "2187699143"
    
    Update_Status_of_Service_Appointment[("🛠️ <em></em><br/>Update Status of Service Appointment")]:::recordUpdates
    click Update_Status_of_Service_Appointment "#update_status_of_service_appointment" "206949233"
    
    Update_Status_of_Work_Order[("🛠️ <em></em><br/>Update Status of Work Order")]:::recordUpdates
    click Update_Status_of_Work_Order "#update_status_of_work_order" "2985891938"
    
    LMRA_Not_Done_Message(["💻 <em></em><br/>LMRA Not Done Message"]):::screens
    click LMRA_Not_Done_Message "#lmra_not_done_message" "3118293043"
    
    LMRA_Done --> |"Yes"| Update_Status_of_Work_Order
    LMRA_Done --> |"No"| LMRA_Not_Done_Message
    Get_WO_Order_Information --> LMRA_Done
    Get_Work_Step_Information --> Get_WO_Order_Information
    Update_Status_of_Service_Appointment --> END_Update_Status_of_Service_Appointment
    Update_Status_of_Work_Order --> Update_Status_of_Service_Appointment
    LMRA_Not_Done_Message --> END_LMRA_Not_Done_Message
    START -->  Get_Work_Step_Information
    END_Update_Status_of_Service_Appointment(( END )):::endClass
    END_LMRA_Not_Done_Message(( END )):::endClass
    
    
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
    |Label|[Work Order][Mobile Flow] Check Out|
    |Status|Active|
    |Description|This flow updates the status of the work order and the related service appointment to ‘In Progress’.|
    |Environments|Default|
    |Interview Label|[Work Order][Mobile Flow] Check Out {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Get_Work_Step_Information](#get_work_step_information)|
    |Next Node|[Get_Work_Step_Information](#get_work_step_information)|
    
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
    |:-- |:--:|:--:|:--:|:--:|:--: |
    |Id|String|⬜|✅|✅|<!-- -->|
    |WorkOrderRecord|SObject|⬜|✅|⬜|WorkOrder|
    |WorkStepRecord|SObject|⬜|✅|⬜|WorkStep|
    
    
    ## Flow Nodes Details
    
    ### LMRA_Done
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|LMRA Done ?|
    |Default Connector|[LMRA_Not_Done_Message](#lmra_not_done_message)|
    |Default Connector Label|No|
    
    
    #### Rule Yes (Yes)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Update_Status_of_Work_Order](#update_status_of_work_order)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|WorkOrderRecord.LMRA_Done__c| Equal To|✅|
    
    
    
    
    ### Get_WO_Order_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkOrder|
    |Label|Get WO Order Information|
    |Assign Null Values If No Records Found|⬜|
    |Output Reference|WorkOrderRecord|
    |Queried Fields|- Id<br/>- LMRA_Done__c<br/>|
    |Connector|[LMRA_Done](#lmra_done)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|WorkStepRecord.WorkOrderId|
    
    
    
    
    ### Get_Work_Step_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkStep|
    |Label|Get Work Step Information|
    |Assign Null Values If No Records Found|⬜|
    |Output Reference|WorkStepRecord|
    |Queried Fields|Id|
    |Connector|[Get_WO_Order_Information](#get_wo_order_information)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|Id|
    
    
    
    
    ### Update_Status_of_Service_Appointment
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Object|ServiceAppointment|
    |Label|Update Status of Service Appointment|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|ParentRecordId| Equal To|Id|
    
    
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Status|Completed|
    
    
    
    
    ### Update_Status_of_Work_Order
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Object|WorkOrder|
    |Label|Update Status of Work Order|
    |Connector|[Update_Status_of_Service_Appointment](#update_status_of_service_appointment)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|Id|
    
    
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Status|Completed|
    
    
    
    
    ### LMRA_Not_Done_Message
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Screen|
    |Label|LMRA Not Done Message|
    |Allow Back|⬜|
    |Allow Finish|✅|
    |Allow Pause|⬜|
    |Next Or Finish Button Label|Close|
    |Show Footer|✅|
    |Show Header|⬜|
    
    
    #### LMRANotDoneMessage
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Text|<p>The LMRA has not been done. Please do this before closing this work order.</p>|
    |Field Type| Display Text|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

