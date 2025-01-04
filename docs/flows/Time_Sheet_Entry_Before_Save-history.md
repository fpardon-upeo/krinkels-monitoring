# Time_Sheet_Entry_Before_Save history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Jan 1, 2025"

    _Jan 1, 2025, by fpardon-upeo in commit Org state on 2025-01-01 00:27 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record Before Save</b>"]):::startClass
    click START "#general-information" "2143815732"
    
    
    Change_by_CM_or_BS{"<b>🔀 <em></em><br/>Change by CM or BS</b>"}:::decisionsAdded
    click Change_by_CM_or_BS "#change_by_cm_or_bs" "463927690"
    
    
    Code_ATAK{"🔀 <em></em><br/>Code ATAK"}:::decisions
    click Code_ATAK "#code_atak" "4117200828"
    
    
    Correction{"<b>🔀 <em></em><br/>Correction?</b>"}:::decisionsAdded
    click Correction "#correction" "3123589101"
    
    
    Is_there_a_Break{"<b>🔀 <em></em><br/>Is there a Break?</b>"}:::decisionsChanged
    
    
    click Is_there_a_Break "#is_there_a_break" "3434070419"
    
    
    Get_Break[("🔍 <em></em><br/>Get Break")]:::recordLookups
    click Get_Break "#get_break" "2682123174"
    
    Get_Break_Record_Type_ID[("🔍 <em></em><br/>Get Break Record Type ID")]:::recordLookups
    click Get_Break_Record_Type_ID "#get_break_record_type_id" "3724942779"
    
    
    Get_Profile_Current_User[("<b>🔍 <em></em><br/>Get Profile Current User</b>")]:::recordLookupsAdded
    click Get_Profile_Current_User "#get_profile_current_user" "3315820586"
    
    Set_Corrected_to_True[("<b>🛠️ <em></em><br/>Set Corrected to True</b>")]:::recordUpdatesAdded
    click Set_Corrected_to_True "#set_corrected_to_true" "3858117658"
    
    
    Update_ATAK_Code[("🛠️ <em></em><br/>Update ATAK Code")]:::recordUpdates
    click Update_ATAK_Code "#update_atak_code" "1766681701"
    
    Update_Time_Sheet_Entry_with_Break[("<b>🛠️ <em></em><br/>Update Time Sheet Entry with Break</b>")]:::recordUpdatesChanged
    
    
    click Update_Time_Sheet_Entry_with_Break "#update_time_sheet_entry_with_break" "712582584"
    
    
    
    Change_by_CM_or_BS ==> |"🟩<b>Yes</b>"| Correction
    Change_by_CM_or_BS ==> |"🟩<b>Default Outcome</b>"| END_Change_by_CM_or_BS
    
    Code_ATAK --> |"Is Empty or Changed"| Update_ATAK_Code
    Code_ATAK --> |"Default Outcome"| Get_Break_Record_Type_ID
    
    Correction ==> |"🟩<b>Yes Correction</b>"| Set_Corrected_to_True
    Correction ==> |"🟩<b>Default Outcome</b>"| END_Correction
    
    Is_there_a_Break --> |"Yes"| Update_Time_Sheet_Entry_with_Break
    
    Is_there_a_Break -.-> |"🟥<i>Default Outcome</i>"| END_Is_there_a_Break
    
    Is_there_a_Break ==> |"🟩<b>Default Outcome</b>"| Get_Profile_Current_User
    
    Get_Break --> Is_there_a_Break
    Get_Break_Record_Type_ID --> Get_Break
    
    Get_Profile_Current_User ==> Change_by_CM_or_BS
    Set_Corrected_to_True ==> END_Set_Corrected_to_True
    
    Update_ATAK_Code --> Get_Break_Record_Type_ID
    
    Update_Time_Sheet_Entry_with_Break -.-> END_Update_Time_Sheet_Entry_with_Break
    
    Update_Time_Sheet_Entry_with_Break ==> Get_Profile_Current_User
    
    START -->  Code_ATAK
    
    END_Is_there_a_Break(( END )):::endClassRemoved
    END_Update_Time_Sheet_Entry_with_Break(( END )):::endClassRemoved
    
    END_Change_by_CM_or_BS(( END )):::endClassAdded
    END_Correction(( END )):::endClassAdded
    END_Set_Corrected_to_True(( END )):::endClassAdded
    
    
    
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
      
    linkStyle 0,1,4,5,8,11,12,15 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 7,14 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    ## Flow Nodes Details
    
    
    ### 🟩Change_by_CM_or_BS
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Change by CM or BS</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Description</b></span>|<span style="background-color: #a6e22e; color: black;"><b>is the current change made by BS or CM (Not for New TSE)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Default Outcome</b></span>|
    
    #### 🟩Rule YesBS_CM (Yes)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Correction](#correction)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>or</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Profile_Current_User.Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Contains</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Contract Manager</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Profile_Current_User.Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Contains</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Business</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>3</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record__Prior.Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    ### 🟩Correction
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Correction?</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Description</b></span>|<span style="background-color: #a6e22e; color: black;"><b>TS = Submitted + change impacts type or duraction</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Default Outcome</b></span>|
    
    #### 🟩Rule Yes_Correction (Yes Correction)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Set_Corrected_to_True](#set_corrected_to_true)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1 AND ( 2 OR 3 OR 4 OR 5 OR 6 OR 7)</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.TimeSheet.Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Submitted</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.StartTime</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Changed</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>3</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.EndTime</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Changed</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>4</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Changed</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>5</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Working_Time__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Changed</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>6</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Pause_Duration__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Changed</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>7</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Break_Duration__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Changed</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    ### Is_there_a_Break
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Profile_Current_User](#get_profile_current_user)</b></span>|
    
    ### 🟩Get_Profile_Current_User
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Profile</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Profile Current User</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Change_by_CM_or_BS](#change_by_cm_or_bs)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$User.ProfileId</b></span>|
    
    ### 🟩Set_Corrected_to_True
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Update</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Set Corrected to True</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Input Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record</b></span>|
    
    #### 🟩Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Corrected__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    ### Update_Time_Sheet_Entry_with_Break
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Profile_Current_User](#get_profile_current_user)</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Dec 12, 2024"

    _Dec 12, 2024, by fpardon-upeo in commit Org state on 2024-12-12 00:26 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record Before Save</b>"]):::startClass
    click START "#general-information" "2143815732"
    
    Code_ATAK{"🔀 <em></em><br/>Code ATAK"}:::decisions
    click Code_ATAK "#code_atak" "4117200828"
    
    Is_there_a_Break{"🔀 <em></em><br/>Is there a Break?"}:::decisions
    click Is_there_a_Break "#is_there_a_break" "4186903804"
    
    Get_Break[("🔍 <em></em><br/>Get Break")]:::recordLookups
    click Get_Break "#get_break" "2682123174"
    
    Get_Break_Record_Type_ID[("🔍 <em></em><br/>Get Break Record Type ID")]:::recordLookups
    click Get_Break_Record_Type_ID "#get_break_record_type_id" "3724942779"
    
    Update_ATAK_Code[("🛠️ <em></em><br/>Update ATAK Code")]:::recordUpdates
    click Update_ATAK_Code "#update_atak_code" "1766681701"
    
    Update_Time_Sheet_Entry_with_Break[("🛠️ <em></em><br/>Update Time Sheet Entry with Break")]:::recordUpdates
    click Update_Time_Sheet_Entry_with_Break "#update_time_sheet_entry_with_break" "4265655950"
    
    Code_ATAK --> |"Is Empty or Changed"| Update_ATAK_Code
    Code_ATAK --> |"Default Outcome"| Get_Break_Record_Type_ID
    Is_there_a_Break --> |"Yes"| Update_Time_Sheet_Entry_with_Break
    Is_there_a_Break --> |"Default Outcome"| END_Is_there_a_Break
    Get_Break --> Is_there_a_Break
    Get_Break_Record_Type_ID --> Get_Break
    Update_ATAK_Code --> Get_Break_Record_Type_ID
    Update_Time_Sheet_Entry_with_Break --> END_Update_Time_Sheet_Entry_with_Break
    START -->  Code_ATAK
    END_Is_there_a_Break(( END )):::endClass
    END_Update_Time_Sheet_Entry_with_Break(( END )):::endClass
    
    
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
    
    ## Formulas
    
    |Name|Data Type|Expression|
    |:-- |:--:|:--  |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>CalculateATAKCode</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>String</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>IF($Record.Urgent_Intervention__c, "URG", <br/>  CASE($Record.Type, <br/>    "Normal Hours", "HR", <br/>    "Travel Time", "RT",<br/>    "Night Work", "NW",<br/>    "Machines", "MU",<br/>    "Frost Delay", "VV", <br/>    "Industrial Accident", "HR",<br/>    "Illness",  "HR",<br/>    "Recup Overtime", "SP-",<br/>    "Absent Hours", "HR",<br/>    ""<br/>  )<br/>)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>CalculateATAKCode</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|<span style="background-color: #a6e22e; color: black;"><b>IF($Record.Urgent_Intervention__c, "DI", <br/>  CASE($Record.Type, <br/>    "Normal Hours", "HR", <br/>    "Travel Time", "RT",<br/>    "Night Work", "NW",<br/>    "Machines", "MU",<br/>    "Frost Delay", "VV", <br/>    "Industrial Accident", "A",<br/>    "Illness",  "Z",<br/>    "Recup Overtime", "SP-",<br/>    "Absent Hours", "AF",<br/>    "HR"<br/>  )<br/>)</b></span>|
    
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
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record Before Save</b>"]):::startClass
    click START "#general-information" "2143815732"
    
    Code_ATAK{"🔀 <em></em><br/>Code ATAK"}:::decisions
    click Code_ATAK "#code_atak" "4117200828"
    
    Is_there_a_Break{"🔀 <em></em><br/>Is there a Break?"}:::decisions
    click Is_there_a_Break "#is_there_a_break" "4186903804"
    
    Get_Break[("🔍 <em></em><br/>Get Break")]:::recordLookups
    click Get_Break "#get_break" "2682123174"
    
    Get_Break_Record_Type_ID[("🔍 <em></em><br/>Get Break Record Type ID")]:::recordLookups
    click Get_Break_Record_Type_ID "#get_break_record_type_id" "3724942779"
    
    Update_ATAK_Code[("🛠️ <em></em><br/>Update ATAK Code")]:::recordUpdates
    click Update_ATAK_Code "#update_atak_code" "1766681701"
    
    Update_Time_Sheet_Entry_with_Break[("🛠️ <em></em><br/>Update Time Sheet Entry with Break")]:::recordUpdates
    click Update_Time_Sheet_Entry_with_Break "#update_time_sheet_entry_with_break" "4265655950"
    
    Code_ATAK --> |"Is Empty or Changed"| Update_ATAK_Code
    Code_ATAK --> |"Default Outcome"| Get_Break_Record_Type_ID
    Is_there_a_Break --> |"Yes"| Update_Time_Sheet_Entry_with_Break
    Is_there_a_Break --> |"Default Outcome"| END_Is_there_a_Break
    Get_Break --> Is_there_a_Break
    Get_Break_Record_Type_ID --> Get_Break
    Update_ATAK_Code --> Get_Break_Record_Type_ID
    Update_Time_Sheet_Entry_with_Break --> END_Update_Time_Sheet_Entry_with_Break
    START -->  Code_ATAK
    END_Is_there_a_Break(( END )):::endClass
    END_Update_Time_Sheet_Entry_with_Break(( END )):::endClass
    
    
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
    
    ## Formulas
    
    |Name|Data Type|Expression|
    |:-- |:--:|:--  |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>CalculateATAKCode</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>String</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>IF($Record.Urgent_Intervention__c, "URG", <br/>  CASE($Record.Type, <br/>    "Normal Hours", "HR", <br/>    "Travel Time", "HR",<br/>    "Night Work", "NW",<br/>    "Machines", "MU",<br/>    "Frost Delay", "VV", <br/>    "Industrial Accident", "HR",<br/>    "Illness",  "HR",<br/>    "Recup Overtime", "SP",<br/>    "Absent Hours", "HR",<br/>    ""<br/>  )<br/>)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>CalculateATAKCode</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|<span style="background-color: #a6e22e; color: black;"><b>IF($Record.Urgent_Intervention__c, "URG", <br/>  CASE($Record.Type, <br/>    "Normal Hours", "HR", <br/>    "Travel Time", "RT",<br/>    "Night Work", "NW",<br/>    "Machines", "MU",<br/>    "Frost Delay", "VV", <br/>    "Industrial Accident", "HR",<br/>    "Illness",  "HR",<br/>    "Recup Overtime", "SP-",<br/>    "Absent Hours", "HR",<br/>    ""<br/>  )<br/>)</b></span>|
    
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
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record Before Save</b>"]):::startClass
    click START "#general-information" "2143815732"
    
    Code_ATAK{"🔀 <em></em><br/>Code ATAK"}:::decisions
    click Code_ATAK "#code_atak" "4117200828"
    
    Is_there_a_Break{"🔀 <em></em><br/>Is there a Break?"}:::decisions
    click Is_there_a_Break "#is_there_a_break" "4186903804"
    
    Get_Break[("🔍 <em></em><br/>Get Break")]:::recordLookups
    click Get_Break "#get_break" "2682123174"
    
    Get_Break_Record_Type_ID[("🔍 <em></em><br/>Get Break Record Type ID")]:::recordLookups
    click Get_Break_Record_Type_ID "#get_break_record_type_id" "3724942779"
    
    Update_ATAK_Code[("🛠️ <em></em><br/>Update ATAK Code")]:::recordUpdates
    click Update_ATAK_Code "#update_atak_code" "1766681701"
    
    Update_Time_Sheet_Entry_with_Break[("🛠️ <em></em><br/>Update Time Sheet Entry with Break")]:::recordUpdates
    click Update_Time_Sheet_Entry_with_Break "#update_time_sheet_entry_with_break" "4265655950"
    
    Code_ATAK --> |"Is Empty or Changed"| Update_ATAK_Code
    Code_ATAK --> |"Default Outcome"| Get_Break_Record_Type_ID
    Is_there_a_Break --> |"Yes"| Update_Time_Sheet_Entry_with_Break
    Is_there_a_Break --> |"Default Outcome"| END_Is_there_a_Break
    Get_Break --> Is_there_a_Break
    Get_Break_Record_Type_ID --> Get_Break
    Update_ATAK_Code --> Get_Break_Record_Type_ID
    Update_Time_Sheet_Entry_with_Break --> END_Update_Time_Sheet_Entry_with_Break
    START -->  Code_ATAK
    END_Is_there_a_Break(( END )):::endClass
    END_Update_Time_Sheet_Entry_with_Break(( END )):::endClass
    
    
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
    
    ## Formulas
    
    |Name|Data Type|Expression|
    |:-- |:--:|:--  |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>CalculateATAKCode</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>String</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>IF($Record.Urgent_Intervention__c, "URG", <br/>  CASE($Record.Type, <br/>    "Normal Hours", "HR", <br/>    "Travel Time", "HR",<br/>    "Night Work", <br/>      IF($Record.Starting_Allowance_Winter_Service__c, "P", "NW"),<br/>    "Machines", "MU",<br/>    "Frost Delay", "VV", <br/>    "Industrial Accident", "HR",<br/>    "Illness",  "HR",<br/>    "Recup Overtime", "SP",<br/>    "Absent Hours", "HR",<br/>    ""<br/>  )<br/>)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>CalculatedSoccode</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>String</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>IF($Record.Urgent_Intervention__c, "", <br/>  CASE($Record.Type, <br/>    "Normal Hours", "1010", <br/>    "Travel Time", "1010",<br/>    "Night Work", <br/>      IF($Record.Starting_Allowance_Winter_Service__c, "1710", "1706"),<br/>    "Machines", "",<br/>    "Frost Delay", "9720", <br/>    "Industrial Accident", "",<br/>    "Illness",  "",<br/>    "Recup Overtime", "4025",<br/>    "Absent Hours", "",<br/>    ""<br/>  )<br/>)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>CalculateATAKCode</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|<span style="background-color: #a6e22e; color: black;"><b>IF($Record.Urgent_Intervention__c, "URG", <br/>  CASE($Record.Type, <br/>    "Normal Hours", "HR", <br/>    "Travel Time", "HR",<br/>    "Night Work", "NW",<br/>    "Machines", "MU",<br/>    "Frost Delay", "VV", <br/>    "Industrial Accident", "HR",<br/>    "Illness",  "HR",<br/>    "Recup Overtime", "SP",<br/>    "Absent Hours", "HR",<br/>    ""<br/>  )<br/>)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>CalculatedSoccode</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|<span style="background-color: #a6e22e; color: black;"><b>IF($Record.Urgent_Intervention__c, "", <br/>  CASE($Record.Type, <br/>    "Normal Hours", "1010", <br/>    "Travel Time", "1010",<br/>    "Night Work", "1706",<br/>    "Machines", "",<br/>    "Frost Delay", "9720", <br/>    "Industrial Accident", "",<br/>    "Illness",  "",<br/>    "Recup Overtime", "4025",<br/>    "Absent Hours", "",<br/>    ""<br/>  )<br/>)</b></span>|
    
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
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record Before Save</b>"]):::startClass
    click START "#general-information" "2143815732"
    
    Code_ATAK{"<b>🔀 <em></em><br/>Code ATAK</b>"}:::decisionsChanged
    
    
    click Code_ATAK "#code_atak" "4117200828"
    
    
    
    Is_there_a_Break{"<b>🔀 <em></em><br/>Is there a Break?</b>"}:::decisionsAdded
    click Is_there_a_Break "#is_there_a_break" "4186903804"
    
    Get_Break[("<b>🔍 <em></em><br/>Get Break</b>")]:::recordLookupsAdded
    click Get_Break "#get_break" "2682123174"
    
    Get_Break_Record_Type_ID[("<b>🔍 <em></em><br/>Get Break Record Type ID</b>")]:::recordLookupsAdded
    click Get_Break_Record_Type_ID "#get_break_record_type_id" "3724942779"
    
    
    Update_ATAK_Code[("<b>🛠️ <em></em><br/>Update ATAK Code</b>")]:::recordUpdatesChanged
    
    
    click Update_ATAK_Code "#update_atak_code" "1766681701"
    
    
    
    Update_Time_Sheet_Entry_with_Break[("<b>🛠️ <em></em><br/>Update Time Sheet Entry with Break</b>")]:::recordUpdatesAdded
    click Update_Time_Sheet_Entry_with_Break "#update_time_sheet_entry_with_break" "4265655950"
    
    
    Code_ATAK --> |"Is Empty or Changed"| Update_ATAK_Code
    
    Code_ATAK -.-> |"🟥<i>Default Outcome</i>"| END_Code_ATAK
    Update_ATAK_Code -.-> END_Update_ATAK_Code
    
    Code_ATAK ==> |"🟩<b>Default Outcome</b>"| Get_Break_Record_Type_ID
    Is_there_a_Break ==> |"🟩<b>Yes</b>"| Update_Time_Sheet_Entry_with_Break
    Is_there_a_Break ==> |"🟩<b>Default Outcome</b>"| END_Is_there_a_Break
    Get_Break ==> Is_there_a_Break
    Get_Break_Record_Type_ID ==> Get_Break
    Update_ATAK_Code ==> Get_Break_Record_Type_ID
    Update_Time_Sheet_Entry_with_Break ==> END_Update_Time_Sheet_Entry_with_Break
    
    START -->  Code_ATAK
    
    END_Code_ATAK(( END )):::endClassRemoved
    END_Update_ATAK_Code(( END )):::endClassRemoved
    
    END_Is_there_a_Break(( END )):::endClassAdded
    END_Update_Time_Sheet_Entry_with_Break(( END )):::endClassAdded
    
    
    
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
      
    linkStyle 3,4,5,6,7,8,9 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 1,2 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    ## Flow Nodes Details
    
    ### Code_ATAK
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Break_Record_Type_ID](#get_break_record_type_id)</b></span>|
    
    ### 🟩Is_there_a_Break
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Is there a Break?</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Default Outcome</b></span>|
    
    #### 🟩Rule Yes (Yes)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_Time_Sheet_Entry_with_Break](#update_time_sheet_entry_with_break)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Break.Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    ### 🟩Get_Break
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ResourceAbsence</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Break</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Is_there_a_Break](#is_there_a_break)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ResourceId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.TimeSheet.ServiceResourceId</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>RecordTypeId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Break_Record_Type_ID.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>3</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Start</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Greater Than Or Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.StartTime</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>4</b></span>|<span style="background-color: #a6e22e; color: black;"><b>End</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Less Than Or Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.EndTime</b></span>|
    
    ### 🟩Get_Break_Record_Type_ID
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>RecordType</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Break Record Type ID</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Break](#get_break)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>DeveloperName</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Break</b></span>|
    
    ### Update_ATAK_Code
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Break_Record_Type_ID](#get_break_record_type_id)</b></span>|
    
    ### 🟩Update_Time_Sheet_Entry_with_Break
    
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Update</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Update Time Sheet Entry with Break</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Input Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record</b></span>|
    
    #### 🟩Input Assignments
    
    
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Resource_Absence__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Break.Id</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 19, 2024"

    _Nov 19, 2024, by fpardon-upeo in commit Org state on 2024-11-19 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    <span style="background-color: #ff7f7f; color: black;"><i>🟥# Time Sheet Entry - Before Save</i></span>
    
    <span style="background-color: #a6e22e; color: black;"><b>🟩# [Time Sheet Entry] - [Before-Save] - [Record-Triggered]</b></span>
    
    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["<b>START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record Before Save</b></b>"]):::startClassChanged
    
    
    click START "#general-information" "2143815732"
    
    
    Code_ATAK{"🔀 <em></em><br/>Code ATAK"}:::decisions
    click Code_ATAK "#code_atak" "26410005"
    
    Update_ATAK_Code[("🛠️ <em></em><br/>Update ATAK Code")]:::recordUpdates
    click Update_ATAK_Code "#update_atak_code" "696003204"
    
    Code_ATAK --> |"Is Empty or Changed"| Update_ATAK_Code
    Code_ATAK --> |"Default Outcome"| END_Code_ATAK
    Update_ATAK_Code --> END_Update_ATAK_Code
    START -->  Code_ATAK
    END_Code_ATAK(( END )):::endClass
    END_Update_ATAK_Code(( END )):::endClass
    
    
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
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Time Sheet Entry - Before Save</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⚠️ Draft</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Time Sheet Entry] - [Before-Save] - [Record-Triggered]</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Active</b></span>|
    
    ## Formulas
    
    |Name|Data Type|Expression|
    |:-- |:--:|:--  |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>CalculateATAKCode</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>String</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>IF($Record.Urgent_Intervention__c, "URG", <br/>  CASE($Record.Type, <br/>    "Normal Hours", "HR", <br/>    "Travel Time", "HR",<br/>    "Night Work", <br/>      IF($Record.Starting_Allowance_Winter_Service__c, "P", "NW"),<br/>    "Machines", "MU",<br/>    ""<br/>  )<br/>)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>CalculatedSoccode</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>String</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>IF($Record.Urgent_Intervention__c, "", <br/>  CASE($Record.Type, <br/>    "Normal Hours", "1010", <br/>    "Travel Time", "1010",<br/>    "Night Work", <br/>      IF($Record.Starting_Allowance_Winter_Service__c, "1710", "1706"),<br/>    "Machines", "",<br/>    ""<br/>  )<br/>)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>CalculateATAKCode</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|<span style="background-color: #a6e22e; color: black;"><b>IF($Record.Urgent_Intervention__c, "URG", <br/>  CASE($Record.Type, <br/>    "Normal Hours", "HR", <br/>    "Travel Time", "HR",<br/>    "Night Work", <br/>      IF($Record.Starting_Allowance_Winter_Service__c, "P", "NW"),<br/>    "Machines", "MU",<br/>    "Frost Delay", "VV", <br/>    "Industrial Accident", "HR",<br/>    "Illness",  "HR",<br/>    "Recup Overtime", "SP",<br/>    "Absent Hours", "HR",<br/>    ""<br/>  )<br/>)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>CalculatedSoccode</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|<span style="background-color: #a6e22e; color: black;"><b>IF($Record.Urgent_Intervention__c, "", <br/>  CASE($Record.Type, <br/>    "Normal Hours", "1010", <br/>    "Travel Time", "1010",<br/>    "Night Work", <br/>      IF($Record.Starting_Allowance_Winter_Service__c, "1710", "1706"),<br/>    "Machines", "",<br/>    "Frost Delay", "9720", <br/>    "Industrial Accident", "",<br/>    "Illness",  "",<br/>    "Recup Overtime", "4025",<br/>    "Absent Hours", "",<br/>    ""<br/>  )<br/>)</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 15, 2024 (Initial)"

    _Nov 15, 2024, by fpardon-upeo in commit Org state on 2024-11-15 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record Before Save</b>"]):::startClass
    click START "#general-information" "3957369726"
    
    Code_ATAK{"🔀 <em></em><br/>Code ATAK"}:::decisions
    click Code_ATAK "#code_atak" "26410005"
    
    Update_ATAK_Code[("🛠️ <em></em><br/>Update ATAK Code")]:::recordUpdates
    click Update_ATAK_Code "#update_atak_code" "696003204"
    
    Code_ATAK --> |"Is Empty or Changed"| Update_ATAK_Code
    Code_ATAK --> |"Default Outcome"| END_Code_ATAK
    Update_ATAK_Code --> END_Update_ATAK_Code
    START -->  Code_ATAK
    END_Code_ATAK(( END )):::endClass
    END_Update_ATAK_Code(( END )):::endClass
    
    
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
    |Object|TimeSheetEntry|
    |Process Type| Auto Launched Flow|
    |Trigger Type| Record Before Save|
    |Record Trigger Type| Create And Update|
    |Label|Time Sheet Entry - Before Save|
    |Status|⚠️ Draft|
    |Description|This flow is configured to update and fill in some data automatically on Time Sheet Entries|
    |Environments|Default|
    |Interview Label|Time Sheet Entry - Before Save {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Code_ATAK](#code_atak)|
    |Next Node|[Code_ATAK](#code_atak)|
    
    
    ## Formulas
    
    |Name|Data Type|Expression|
    |:-- |:--:|:--  |
    |CalculateATAKCode|String|IF($Record.Urgent_Intervention__c, "URG", <br/>  CASE($Record.Type, <br/>    "Normal Hours", "HR", <br/>    "Travel Time", "HR",<br/>    "Night Work", <br/>      IF($Record.Starting_Allowance_Winter_Service__c, "P", "NW"),<br/>    "Machines", "MU",<br/>    ""<br/>  )<br/>)|
    |CalculatedSoccode|String|IF($Record.Urgent_Intervention__c, "", <br/>  CASE($Record.Type, <br/>    "Normal Hours", "1010", <br/>    "Travel Time", "1010",<br/>    "Night Work", <br/>      IF($Record.Starting_Allowance_Winter_Service__c, "1710", "1706"),<br/>    "Machines", "",<br/>    ""<br/>  )<br/>)|
    
    
    ## Flow Nodes Details
    
    ### Code_ATAK
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Code ATAK|
    |Default Connector Label|Default Outcome|
    
    
    #### Rule Is_Empty_or_Changed (Is Empty or Changed)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Update_ATAK_Code](#update_atak_code)|
    |Condition Logic|or|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.Code_ATAK_Limbus__c| Is Null|✅|
    |2|$Record.Type| Is Changed|✅|
    |3|$Record.Starting_Allowance_Winter_Service__c| Equal To|✅|
    |4|$Record.Urgent_Intervention__c| Equal To|✅|
    
    
    
    
    ### Update_ATAK_Code
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Label|Update ATAK Code|
    |Input Reference|$Record|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Code_ATAK_Limbus__c|CalculateATAKCode|
    |Soccode__c|CalculatedSoccode|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

