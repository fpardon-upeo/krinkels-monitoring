# Service_Appointment_Time_Sheet_Automations history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Jan 4, 2025"

    _Jan 4, 2025, by fpardon-upeo in commit Org state on 2025-01-04 00:24 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "1658851445"
    
    Prepare_Time_Sheet_Entry_Completed[\"🟰 <em></em><br/>Prepare Time Sheet Entry Completed"/]:::assignments
    click Prepare_Time_Sheet_Entry_Completed "#prepare_time_sheet_entry_completed" "412108352"
    
    Prepare_Time_Sheet_Entry_Completed_Full_Night[\"🟰 <em></em><br/>Prepare Time Sheet Entry Completed Full Night"/]:::assignments
    click Prepare_Time_Sheet_Entry_Completed_Full_Night "#prepare_time_sheet_entry_completed_full_night" "143953057"
    
    Prepare_Time_Sheet_Entry_Completed_Partial_Day[\"🟰 <em></em><br/>Prepare Time Sheet Entry Completed Partial Day"/]:::assignments
    click Prepare_Time_Sheet_Entry_Completed_Partial_Day "#prepare_time_sheet_entry_completed_partial_day" "2144551542"
    
    Prepare_Time_Sheet_Entry_Completed_Partial_Night[\"🟰 <em></em><br/>Prepare Time Sheet Entry Completed Partial Night"/]:::assignments
    click Prepare_Time_Sheet_Entry_Completed_Partial_Night "#prepare_time_sheet_entry_completed_partial_night" "605371086"
    
    Prepare_Time_Sheet_Entry_Travel[\"🟰 <em></em><br/>Prepare Time Sheet Entry Travel"/]:::assignments
    click Prepare_Time_Sheet_Entry_Travel "#prepare_time_sheet_entry_travel" "884542221"
    
    Assigned_Resource_Type_Completed{"🔀 <em></em><br/>Assigned Resource Type Completed"}:::decisions
    click Assigned_Resource_Type_Completed "#assigned_resource_type_completed" "1108422346"
    
    Assigned_Resource_Type_Travel{"🔀 <em></em><br/>Assigned Resource Type Travel"}:::decisions
    click Assigned_Resource_Type_Travel "#assigned_resource_type_travel" "1080341603"
    
    Is_Night_Hour{"🔀 <em></em><br/>Is Night Hour"}:::decisions
    click Is_Night_Hour "#is_night_hour" "218543052"
    
    Status_is_changed{"🔀 <em></em><br/>Status is changed"}:::decisions
    click Status_is_changed "#status_is_changed" "33115718"
    
    Loop_Assigned_Resources{{"🔁 <em></em><br/>Loop Assigned Resources"}}:::loops
    click Loop_Assigned_Resources "#loop_assigned_resources" "198473609"
    
    Loop_Assigned_Resources_Completed{{"🔁 <em></em><br/>Loop Assigned Resources Completed"}}:::loops
    click Loop_Assigned_Resources_Completed "#loop_assigned_resources_completed" "3254511180"
    
    Create_Status_Change_Log[("➕ <em></em><br/>Create Status Change Log")]:::recordCreates
    click Create_Status_Change_Log "#create_status_change_log" "699021533"
    
    Create_Timesheet_Entries_Completed[("➕ <em></em><br/>Create Timesheet Entries Completed")]:::recordCreates
    click Create_Timesheet_Entries_Completed "#create_timesheet_entries_completed" "1018540219"
    
    Create_Timesheet_Entries_Travel[("➕ <em></em><br/>Create Timesheet Entries Travel")]:::recordCreates
    click Create_Timesheet_Entries_Travel "#create_timesheet_entries_travel" "2562815208"
    
    Get_Assigned_Resources_Completed[("<b>🔍 <em></em><br/>Get Assigned Resources Completed</b>")]:::recordLookupsChanged
    
    
    click Get_Assigned_Resources_Completed "#get_assigned_resources_completed" "3677471298"
    
    
    Get_Assigned_Resources_Travel[("<b>🔍 <em></em><br/>Get Assigned Resources Travel</b>")]:::recordLookupsChanged
    
    
    click Get_Assigned_Resources_Travel "#get_assigned_resources_travel" "674447869"
    
    
    Get_Completed_End_Time[("🔍 <em></em><br/>Get Completed End Time")]:::recordLookups
    click Get_Completed_End_Time "#get_completed_end_time" "1294393676"
    
    Get_Completed_Start_Time[("🔍 <em></em><br/>Get Completed Start Time")]:::recordLookups
    click Get_Completed_Start_Time "#get_completed_start_time" "2028093998"
    
    Get_Current_User_Time_Sheet_Completed[("🔍 <em></em><br/>Get Current User Time Sheet Completed")]:::recordLookups
    click Get_Current_User_Time_Sheet_Completed "#get_current_user_time_sheet_completed" "4149562848"
    
    Get_Current_User_Time_Sheet_Travel[("🔍 <em></em><br/>Get Current User Time Sheet Travel")]:::recordLookups
    click Get_Current_User_Time_Sheet_Travel "#get_current_user_time_sheet_travel" "3239798822"
    
    Get_Latest_Pause_End_Time[("🔍 <em></em><br/>Get Latest Pause End Time")]:::recordLookups
    click Get_Latest_Pause_End_Time "#get_latest_pause_end_time" "3356018514"
    
    Get_Latest_Pause_Start_Time[("🔍 <em></em><br/>Get Latest Pause Start Time")]:::recordLookups
    click Get_Latest_Pause_Start_Time "#get_latest_pause_start_time" "1873021694"
    
    Get_Travel_End_Time[("🔍 <em></em><br/>Get Travel End Time")]:::recordLookups
    click Get_Travel_End_Time "#get_travel_end_time" "522330130"
    
    Get_Travel_Start_Time[("🔍 <em></em><br/>Get Travel Start Time")]:::recordLookups
    click Get_Travel_Start_Time "#get_travel_start_time" "3787332765"
    
    Update_Pauses[("🛠️ <em></em><br/>Update Pauses")]:::recordUpdates
    click Update_Pauses "#update_pauses" "1946432952"
    
    Update_Previous_Status[("🛠️ <em></em><br/>Update Previous Status")]:::recordUpdates
    click Update_Previous_Status "#update_previous_status" "1747452468"
    
    Prepare_Time_Sheet_Entry_Completed --> Loop_Assigned_Resources_Completed
    Prepare_Time_Sheet_Entry_Completed_Full_Night --> Loop_Assigned_Resources_Completed
    Prepare_Time_Sheet_Entry_Completed_Partial_Day --> Prepare_Time_Sheet_Entry_Completed_Partial_Night
    Prepare_Time_Sheet_Entry_Completed_Partial_Night --> Loop_Assigned_Resources_Completed
    Prepare_Time_Sheet_Entry_Travel --> Loop_Assigned_Resources
    Assigned_Resource_Type_Completed --> |"Person"| Get_Current_User_Time_Sheet_Completed
    Assigned_Resource_Type_Completed --> |"Crew"| Loop_Assigned_Resources_Completed
    Assigned_Resource_Type_Completed --> |"Default Outcome"| Loop_Assigned_Resources_Completed
    Assigned_Resource_Type_Travel --> |"Person"| Get_Current_User_Time_Sheet_Travel
    Assigned_Resource_Type_Travel --> |"Crew"| Loop_Assigned_Resources
    Assigned_Resource_Type_Travel --> |"Default Outcome"| Loop_Assigned_Resources
    Is_Night_Hour --> |"Yes Full"| Prepare_Time_Sheet_Entry_Completed_Full_Night
    Is_Night_Hour --> |"Yes Partial"| Prepare_Time_Sheet_Entry_Completed_Partial_Day
    Is_Night_Hour --> |"No"| Prepare_Time_Sheet_Entry_Completed
    Is_Night_Hour --> |"Default Outcome"| Loop_Assigned_Resources_Completed
    Status_is_changed --> |"Travel to In Progress"| Get_Travel_Start_Time
    Status_is_changed --> |"Completed or Cannot Complete"| Get_Completed_Start_Time
    Status_is_changed --> |"Paused to In Progress"| Get_Latest_Pause_Start_Time
    Status_is_changed --> |"Default Outcome"| END_Status_is_changed
    Loop_Assigned_Resources --> |"For Each"|Assigned_Resource_Type_Travel
    Loop_Assigned_Resources ---> |"After Last"|Create_Timesheet_Entries_Travel
    Loop_Assigned_Resources_Completed --> |"For Each"|Assigned_Resource_Type_Completed
    Loop_Assigned_Resources_Completed ---> |"After Last"|Create_Timesheet_Entries_Completed
    Create_Status_Change_Log --> Update_Previous_Status
    Create_Timesheet_Entries_Completed --> END_Create_Timesheet_Entries_Completed
    Create_Timesheet_Entries_Travel --> END_Create_Timesheet_Entries_Travel
    Get_Assigned_Resources_Completed --> Loop_Assigned_Resources_Completed
    Get_Assigned_Resources_Travel --> Loop_Assigned_Resources
    Get_Completed_End_Time --> Get_Assigned_Resources_Completed
    Get_Completed_Start_Time --> Get_Completed_End_Time
    Get_Current_User_Time_Sheet_Completed --> Is_Night_Hour
    Get_Current_User_Time_Sheet_Travel --> Prepare_Time_Sheet_Entry_Travel
    Get_Latest_Pause_End_Time --> Update_Pauses
    Get_Latest_Pause_Start_Time --> Get_Latest_Pause_End_Time
    Get_Travel_End_Time --> Get_Assigned_Resources_Travel
    Get_Travel_Start_Time --> Get_Travel_End_Time
    Update_Pauses --> END_Update_Pauses
    Update_Previous_Status --> END_Update_Previous_Status
    START --> |"Run Immediately"| Create_Status_Change_Log
    START --> |"Run Immediately"| Status_is_changed
    END_Status_is_changed(( END )):::endClass
    END_Create_Timesheet_Entries_Completed(( END )):::endClass
    END_Create_Timesheet_Entries_Travel(( END )):::endClass
    END_Update_Pauses(( END )):::endClass
    END_Update_Previous_Status(( END )):::endClass
    
    
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
    
    ### Get_Assigned_Resources_Completed
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Resource_Is_A_Person__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>3</b></span>|<span style="background-color: #a6e22e; color: black;"><b>User_Is_System_Admin__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    ### Get_Assigned_Resources_Travel
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Resource_Is_A_Person__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>3</b></span>|<span style="background-color: #a6e22e; color: black;"><b>User_Is_System_Admin__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
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
    click START "#general-information" "1658851445"
    
    Prepare_Time_Sheet_Entry_Completed[\"🟰 <em></em><br/>Prepare Time Sheet Entry Completed"/]:::assignments
    click Prepare_Time_Sheet_Entry_Completed "#prepare_time_sheet_entry_completed" "412108352"
    
    Prepare_Time_Sheet_Entry_Completed_Full_Night[\"🟰 <em></em><br/>Prepare Time Sheet Entry Completed Full Night"/]:::assignments
    click Prepare_Time_Sheet_Entry_Completed_Full_Night "#prepare_time_sheet_entry_completed_full_night" "143953057"
    
    Prepare_Time_Sheet_Entry_Completed_Partial_Day[\"🟰 <em></em><br/>Prepare Time Sheet Entry Completed Partial Day"/]:::assignments
    click Prepare_Time_Sheet_Entry_Completed_Partial_Day "#prepare_time_sheet_entry_completed_partial_day" "2144551542"
    
    Prepare_Time_Sheet_Entry_Completed_Partial_Night[\"🟰 <em></em><br/>Prepare Time Sheet Entry Completed Partial Night"/]:::assignments
    click Prepare_Time_Sheet_Entry_Completed_Partial_Night "#prepare_time_sheet_entry_completed_partial_night" "605371086"
    
    Prepare_Time_Sheet_Entry_Travel[\"🟰 <em></em><br/>Prepare Time Sheet Entry Travel"/]:::assignments
    click Prepare_Time_Sheet_Entry_Travel "#prepare_time_sheet_entry_travel" "884542221"
    
    Assigned_Resource_Type_Completed{"🔀 <em></em><br/>Assigned Resource Type Completed"}:::decisions
    click Assigned_Resource_Type_Completed "#assigned_resource_type_completed" "1108422346"
    
    Assigned_Resource_Type_Travel{"🔀 <em></em><br/>Assigned Resource Type Travel"}:::decisions
    click Assigned_Resource_Type_Travel "#assigned_resource_type_travel" "1080341603"
    
    Is_Night_Hour{"🔀 <em></em><br/>Is Night Hour"}:::decisions
    click Is_Night_Hour "#is_night_hour" "218543052"
    
    Status_is_changed{"🔀 <em></em><br/>Status is changed"}:::decisions
    click Status_is_changed "#status_is_changed" "33115718"
    
    Loop_Assigned_Resources{{"🔁 <em></em><br/>Loop Assigned Resources"}}:::loops
    click Loop_Assigned_Resources "#loop_assigned_resources" "198473609"
    
    Loop_Assigned_Resources_Completed{{"🔁 <em></em><br/>Loop Assigned Resources Completed"}}:::loops
    click Loop_Assigned_Resources_Completed "#loop_assigned_resources_completed" "3254511180"
    
    Create_Status_Change_Log[("➕ <em></em><br/>Create Status Change Log")]:::recordCreates
    click Create_Status_Change_Log "#create_status_change_log" "699021533"
    
    Create_Timesheet_Entries_Completed[("➕ <em></em><br/>Create Timesheet Entries Completed")]:::recordCreates
    click Create_Timesheet_Entries_Completed "#create_timesheet_entries_completed" "1018540219"
    
    Create_Timesheet_Entries_Travel[("➕ <em></em><br/>Create Timesheet Entries Travel")]:::recordCreates
    click Create_Timesheet_Entries_Travel "#create_timesheet_entries_travel" "2562815208"
    
    Get_Assigned_Resources_Completed[("🔍 <em></em><br/>Get Assigned Resources Completed")]:::recordLookups
    click Get_Assigned_Resources_Completed "#get_assigned_resources_completed" "2365912306"
    
    Get_Assigned_Resources_Travel[("🔍 <em></em><br/>Get Assigned Resources Travel")]:::recordLookups
    click Get_Assigned_Resources_Travel "#get_assigned_resources_travel" "1608991497"
    
    Get_Completed_End_Time[("🔍 <em></em><br/>Get Completed End Time")]:::recordLookups
    click Get_Completed_End_Time "#get_completed_end_time" "1294393676"
    
    Get_Completed_Start_Time[("🔍 <em></em><br/>Get Completed Start Time")]:::recordLookups
    click Get_Completed_Start_Time "#get_completed_start_time" "2028093998"
    
    Get_Current_User_Time_Sheet_Completed[("🔍 <em></em><br/>Get Current User Time Sheet Completed")]:::recordLookups
    click Get_Current_User_Time_Sheet_Completed "#get_current_user_time_sheet_completed" "4149562848"
    
    Get_Current_User_Time_Sheet_Travel[("🔍 <em></em><br/>Get Current User Time Sheet Travel")]:::recordLookups
    click Get_Current_User_Time_Sheet_Travel "#get_current_user_time_sheet_travel" "3239798822"
    
    Get_Latest_Pause_End_Time[("🔍 <em></em><br/>Get Latest Pause End Time")]:::recordLookups
    click Get_Latest_Pause_End_Time "#get_latest_pause_end_time" "3356018514"
    
    Get_Latest_Pause_Start_Time[("🔍 <em></em><br/>Get Latest Pause Start Time")]:::recordLookups
    click Get_Latest_Pause_Start_Time "#get_latest_pause_start_time" "1873021694"
    
    Get_Travel_End_Time[("🔍 <em></em><br/>Get Travel End Time")]:::recordLookups
    click Get_Travel_End_Time "#get_travel_end_time" "522330130"
    
    Get_Travel_Start_Time[("🔍 <em></em><br/>Get Travel Start Time")]:::recordLookups
    click Get_Travel_Start_Time "#get_travel_start_time" "3787332765"
    
    Update_Pauses[("🛠️ <em></em><br/>Update Pauses")]:::recordUpdates
    click Update_Pauses "#update_pauses" "1946432952"
    
    Update_Previous_Status[("🛠️ <em></em><br/>Update Previous Status")]:::recordUpdates
    click Update_Previous_Status "#update_previous_status" "1747452468"
    
    Prepare_Time_Sheet_Entry_Completed --> Loop_Assigned_Resources_Completed
    Prepare_Time_Sheet_Entry_Completed_Full_Night --> Loop_Assigned_Resources_Completed
    Prepare_Time_Sheet_Entry_Completed_Partial_Day --> Prepare_Time_Sheet_Entry_Completed_Partial_Night
    Prepare_Time_Sheet_Entry_Completed_Partial_Night --> Loop_Assigned_Resources_Completed
    Prepare_Time_Sheet_Entry_Travel --> Loop_Assigned_Resources
    Assigned_Resource_Type_Completed --> |"Person"| Get_Current_User_Time_Sheet_Completed
    Assigned_Resource_Type_Completed --> |"Crew"| Loop_Assigned_Resources_Completed
    Assigned_Resource_Type_Completed --> |"Default Outcome"| Loop_Assigned_Resources_Completed
    Assigned_Resource_Type_Travel --> |"Person"| Get_Current_User_Time_Sheet_Travel
    Assigned_Resource_Type_Travel --> |"Crew"| Loop_Assigned_Resources
    Assigned_Resource_Type_Travel --> |"Default Outcome"| Loop_Assigned_Resources
    Is_Night_Hour --> |"Yes Full"| Prepare_Time_Sheet_Entry_Completed_Full_Night
    Is_Night_Hour --> |"Yes Partial"| Prepare_Time_Sheet_Entry_Completed_Partial_Day
    Is_Night_Hour --> |"No"| Prepare_Time_Sheet_Entry_Completed
    Is_Night_Hour --> |"Default Outcome"| Loop_Assigned_Resources_Completed
    Status_is_changed --> |"Travel to In Progress"| Get_Travel_Start_Time
    Status_is_changed --> |"Completed or Cannot Complete"| Get_Completed_Start_Time
    Status_is_changed --> |"Paused to In Progress"| Get_Latest_Pause_Start_Time
    Status_is_changed --> |"Default Outcome"| END_Status_is_changed
    Loop_Assigned_Resources --> |"For Each"|Assigned_Resource_Type_Travel
    Loop_Assigned_Resources ---> |"After Last"|Create_Timesheet_Entries_Travel
    Loop_Assigned_Resources_Completed --> |"For Each"|Assigned_Resource_Type_Completed
    Loop_Assigned_Resources_Completed ---> |"After Last"|Create_Timesheet_Entries_Completed
    Create_Status_Change_Log --> Update_Previous_Status
    Create_Timesheet_Entries_Completed --> END_Create_Timesheet_Entries_Completed
    Create_Timesheet_Entries_Travel --> END_Create_Timesheet_Entries_Travel
    Get_Assigned_Resources_Completed --> Loop_Assigned_Resources_Completed
    Get_Assigned_Resources_Travel --> Loop_Assigned_Resources
    Get_Completed_End_Time --> Get_Assigned_Resources_Completed
    Get_Completed_Start_Time --> Get_Completed_End_Time
    Get_Current_User_Time_Sheet_Completed --> Is_Night_Hour
    Get_Current_User_Time_Sheet_Travel --> Prepare_Time_Sheet_Entry_Travel
    Get_Latest_Pause_End_Time --> Update_Pauses
    Get_Latest_Pause_Start_Time --> Get_Latest_Pause_End_Time
    Get_Travel_End_Time --> Get_Assigned_Resources_Travel
    Get_Travel_Start_Time --> Get_Travel_End_Time
    Update_Pauses --> END_Update_Pauses
    Update_Previous_Status --> END_Update_Previous_Status
    START --> |"Run Immediately"| Create_Status_Change_Log
    START --> |"Run Immediately"| Status_is_changed
    END_Status_is_changed(( END )):::endClass
    END_Create_Timesheet_Entries_Completed(( END )):::endClass
    END_Create_Timesheet_Entries_Travel(( END )):::endClass
    END_Update_Pauses(( END )):::endClass
    END_Update_Previous_Status(( END )):::endClass
    
    
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
    
    ## Formulas
    
    |Name|Data Type|Expression|
    |:-- |:--:|:--  |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>isNightHourFull</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Boolean</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>AND(<br/>    OR(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) >= 18,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) < 4<br/>    ),<br/>    OR(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) < 4,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) >= 18<br/>    )<br/>)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>isNightHourPartial</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Boolean</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>OR(<br/>    OR(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) >= 18,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) < 4<br/>    ),<br/>    OR(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) < 4,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) >= 18<br/>    )<br/>)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>NightPauseTimeMinutes</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Number</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>IF(<br/>    AND(<br/>        {!Get_Latest_Pause_End_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>        ),<br/>        {!Get_Latest_Pause_Start_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>        )<br/>    ),<br/>    (<br/>        (<br/>            IF(<br/>                {!Get_Latest_Pause_End_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                ),<br/>                {!Get_Latest_Pause_End_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                )<br/>            )<br/>        ) - (<br/>            IF(<br/>                {!Get_Latest_Pause_Start_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                ),<br/>                {!Get_Latest_Pause_Start_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                )<br/>            )<br/>        )<br/>    ) * 1440,<br/>    0<br/>)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>NonNightPauseTimeMinutes</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Number</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>IF(<br/>    AND(<br/>        {!Get_Latest_Pause_End_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>        ),<br/>        {!Get_Latest_Pause_Start_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>        )<br/>    ),<br/>    (<br/>        (<br/>            IF(<br/>                {!Get_Latest_Pause_End_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                ),<br/>                {!Get_Latest_Pause_End_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                )<br/>            )<br/>        ) - (<br/>            IF(<br/>                {!Get_Latest_Pause_Start_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                ),<br/>                {!Get_Latest_Pause_Start_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                )<br/>            )<br/>        )<br/>    ) * 1440,<br/>    0<br/>)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>PartialNightWorkEnd</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>DateTime</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>IF(<br/>    OR(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) >= 18,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) < 4<br/>    ),<br/>    {!Get_Completed_End_Time.Status_Change_Date__c},<br/>    DATETIMEVALUE(<br/>        TEXT(YEAR(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(MONTH(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(DAY(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "05:00:00"<br/>    )<br/>)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>PartialNightWorkStart</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>DateTime</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>IF(<br/>    OR(<br/>        VALUE(MID(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 12, 2)) >= 18,<br/>        VALUE(MID(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 12, 2)) < 4<br/>    ),<br/>    {!Get_Completed_Start_Time.Status_Change_Date__c},<br/>    DATETIMEVALUE(<br/>        TEXT(YEAR(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(MONTH(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(DAY(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & " 19:00:00"<br/>    )<br/>)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>PartialNonNightWorkEnd</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>DateTime</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>IF(<br/>    AND(<br/>        VALUE(MID(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 12, 2)) >= 4,<br/>        VALUE(MID(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 12, 2)) < 18<br/>    ),<br/>    {!Get_Completed_End_Time.Status_Change_Date__c},<br/>    DATETIMEVALUE(<br/>        TEXT(YEAR(DATEVALUE({!Get_Completed_End_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(MONTH(DATEVALUE({!Get_Completed_End_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(DAY(DATEVALUE({!Get_Completed_End_Time.Status_Change_Date__c}))) & " 19:00:00"<br/>    )<br/>)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>PartialNonNightWorkStart</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>DateTime</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>IF(<br/>    AND(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) >= 4,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) < 18<br/>    ),<br/>    {!Get_Completed_Start_Time.Status_Change_Date__c},<br/>    DATETIMEVALUE(<br/>        TEXT(YEAR(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(MONTH(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(DAY(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "05:00:00"<br/>    )<br/>)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>isNightHourFull</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Boolean</b></span>|<span style="background-color: #a6e22e; color: black;"><b>AND(<br/>    OR(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) >= 19,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) < 5<br/>    ),<br/>    OR(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) < 5,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) >= 19<br/>    )<br/>)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>isNightHourPartial</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Boolean</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OR(<br/>    OR(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) >= 19,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) < 5<br/>    ),<br/>    OR(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) < 5,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) >= 19<br/>    )<br/>)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>NightPauseTimeMinutes</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Number</b></span>|<span style="background-color: #a6e22e; color: black;"><b>IF(<br/>    AND(<br/>        {!Get_Latest_Pause_End_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 19:00:00"<br/>        ),<br/>        {!Get_Latest_Pause_Start_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>        )<br/>    ),<br/>    (<br/>        (<br/>            IF(<br/>                {!Get_Latest_Pause_End_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                ),<br/>                {!Get_Latest_Pause_End_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                )<br/>            )<br/>        ) - (<br/>            IF(<br/>                {!Get_Latest_Pause_Start_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                ),<br/>                {!Get_Latest_Pause_Start_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                )<br/>            )<br/>        )<br/>    ) * 1440,<br/>    0<br/>)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>NonNightPauseTimeMinutes</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Number</b></span>|<span style="background-color: #a6e22e; color: black;"><b>IF(<br/>    AND(<br/>        {!Get_Latest_Pause_End_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>        ),<br/>        {!Get_Latest_Pause_Start_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 19:00:00"<br/>        )<br/>    ),<br/>    (<br/>        (<br/>            IF(<br/>                {!Get_Latest_Pause_End_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                ),<br/>                {!Get_Latest_Pause_End_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                )<br/>            )<br/>        ) - (<br/>            IF(<br/>                {!Get_Latest_Pause_Start_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                ),<br/>                {!Get_Latest_Pause_Start_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                )<br/>            )<br/>        )<br/>    ) * 1440,<br/>    0<br/>)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>PartialNightWorkEnd</b></span>|<span style="background-color: #a6e22e; color: black;"><b>DateTime</b></span>|<span style="background-color: #a6e22e; color: black;"><b>IF(<br/>    OR(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) >= 19,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) < 5<br/>    ),<br/>    {!Get_Completed_End_Time.Status_Change_Date__c},<br/>    DATETIMEVALUE(<br/>        TEXT(YEAR(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(MONTH(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(DAY(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "05:00:00"<br/>    )<br/>)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>PartialNightWorkStart</b></span>|<span style="background-color: #a6e22e; color: black;"><b>DateTime</b></span>|<span style="background-color: #a6e22e; color: black;"><b>IF(<br/>    OR(<br/>        VALUE(MID(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 12, 2)) >= 19,<br/>        VALUE(MID(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 12, 2)) < 5<br/>    ),<br/>    {!Get_Completed_Start_Time.Status_Change_Date__c},<br/>    DATETIMEVALUE(<br/>        TEXT(YEAR(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(MONTH(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(DAY(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & " 19:00:00"<br/>    )<br/>)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>PartialNonNightWorkEnd</b></span>|<span style="background-color: #a6e22e; color: black;"><b>DateTime</b></span>|<span style="background-color: #a6e22e; color: black;"><b>IF(<br/>    AND(<br/>        VALUE(MID(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 12, 2)) >= 5,<br/>        VALUE(MID(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 12, 2)) < 19<br/>    ),<br/>    {!Get_Completed_End_Time.Status_Change_Date__c},<br/>    DATETIMEVALUE(<br/>        TEXT(YEAR(DATEVALUE({!Get_Completed_End_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(MONTH(DATEVALUE({!Get_Completed_End_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(DAY(DATEVALUE({!Get_Completed_End_Time.Status_Change_Date__c}))) & " 19:00:00"<br/>    )<br/>)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>PartialNonNightWorkStart</b></span>|<span style="background-color: #a6e22e; color: black;"><b>DateTime</b></span>|<span style="background-color: #a6e22e; color: black;"><b>IF(<br/>    AND(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) >= 5,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) < 19<br/>    ),<br/>    {!Get_Completed_Start_Time.Status_Change_Date__c},<br/>    DATETIMEVALUE(<br/>        TEXT(YEAR(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(MONTH(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(DAY(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "05:00:00"<br/>    )<br/>)</b></span>|
    
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
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "1658851445"
    
    Prepare_Time_Sheet_Entry_Completed[\"<b>🟰 <em></em><br/>Prepare Time Sheet Entry Completed</b>"/]:::assignmentsChanged
    
    
    click Prepare_Time_Sheet_Entry_Completed "#prepare_time_sheet_entry_completed" "412108352"
    
    
    Prepare_Time_Sheet_Entry_Completed_Full_Night[\"<b>🟰 <em></em><br/>Prepare Time Sheet Entry Completed Full Night</b>"/]:::assignmentsChanged
    
    
    click Prepare_Time_Sheet_Entry_Completed_Full_Night "#prepare_time_sheet_entry_completed_full_night" "143953057"
    
    
    Prepare_Time_Sheet_Entry_Completed_Partial_Day[\"<b>🟰 <em></em><br/>Prepare Time Sheet Entry Completed Partial Day</b>"/]:::assignmentsChanged
    
    
    click Prepare_Time_Sheet_Entry_Completed_Partial_Day "#prepare_time_sheet_entry_completed_partial_day" "2144551542"
    
    
    Prepare_Time_Sheet_Entry_Completed_Partial_Night[\"<b>🟰 <em></em><br/>Prepare Time Sheet Entry Completed Partial Night</b>"/]:::assignmentsChanged
    
    
    click Prepare_Time_Sheet_Entry_Completed_Partial_Night "#prepare_time_sheet_entry_completed_partial_night" "605371086"
    
    
    Prepare_Time_Sheet_Entry_Travel[\"🟰 <em></em><br/>Prepare Time Sheet Entry Travel"/]:::assignments
    click Prepare_Time_Sheet_Entry_Travel "#prepare_time_sheet_entry_travel" "884542221"
    
    Assigned_Resource_Type_Completed{"🔀 <em></em><br/>Assigned Resource Type Completed"}:::decisions
    click Assigned_Resource_Type_Completed "#assigned_resource_type_completed" "1108422346"
    
    Assigned_Resource_Type_Travel{"🔀 <em></em><br/>Assigned Resource Type Travel"}:::decisions
    click Assigned_Resource_Type_Travel "#assigned_resource_type_travel" "1080341603"
    
    Is_Night_Hour{"🔀 <em></em><br/>Is Night Hour"}:::decisions
    click Is_Night_Hour "#is_night_hour" "218543052"
    
    Status_is_changed{"<b>🔀 <em></em><br/>Status is changed</b>"}:::decisionsChanged
    
    
    click Status_is_changed "#status_is_changed" "33115718"
    
    
    
    Was_there_a_Pause{"<i>🔀 <em></em><br/>Was there a Pause?</i>"}:::decisionsRemoved
    click Was_there_a_Pause "#was_there_a_pause" "2634170321"
    
    
    Loop_Assigned_Resources{{"🔁 <em></em><br/>Loop Assigned Resources"}}:::loops
    click Loop_Assigned_Resources "#loop_assigned_resources" "198473609"
    
    Loop_Assigned_Resources_Completed{{"🔁 <em></em><br/>Loop Assigned Resources Completed"}}:::loops
    click Loop_Assigned_Resources_Completed "#loop_assigned_resources_completed" "3254511180"
    
    Create_Status_Change_Log[("<b>➕ <em></em><br/>Create Status Change Log</b>")]:::recordCreatesChanged
    
    
    click Create_Status_Change_Log "#create_status_change_log" "699021533"
    
    
    Create_Timesheet_Entries_Completed[("➕ <em></em><br/>Create Timesheet Entries Completed")]:::recordCreates
    click Create_Timesheet_Entries_Completed "#create_timesheet_entries_completed" "1018540219"
    
    Create_Timesheet_Entries_Travel[("<b>➕ <em></em><br/>Create Timesheet Entries Travel</b>")]:::recordCreatesChanged
    
    
    click Create_Timesheet_Entries_Travel "#create_timesheet_entries_travel" "2562815208"
    
    
    Get_Assigned_Resources_Completed[("<b>🔍 <em></em><br/>Get Assigned Resources Completed</b>")]:::recordLookupsChanged
    
    
    click Get_Assigned_Resources_Completed "#get_assigned_resources_completed" "2365912306"
    
    
    Get_Assigned_Resources_Travel[("🔍 <em></em><br/>Get Assigned Resources Travel")]:::recordLookups
    click Get_Assigned_Resources_Travel "#get_assigned_resources_travel" "1608991497"
    
    Get_Completed_End_Time[("🔍 <em></em><br/>Get Completed End Time")]:::recordLookups
    click Get_Completed_End_Time "#get_completed_end_time" "1294393676"
    
    Get_Completed_Start_Time[("🔍 <em></em><br/>Get Completed Start Time")]:::recordLookups
    click Get_Completed_Start_Time "#get_completed_start_time" "2028093998"
    
    Get_Current_User_Time_Sheet_Completed[("🔍 <em></em><br/>Get Current User Time Sheet Completed")]:::recordLookups
    click Get_Current_User_Time_Sheet_Completed "#get_current_user_time_sheet_completed" "4149562848"
    
    Get_Current_User_Time_Sheet_Travel[("🔍 <em></em><br/>Get Current User Time Sheet Travel")]:::recordLookups
    click Get_Current_User_Time_Sheet_Travel "#get_current_user_time_sheet_travel" "3239798822"
    
    
    Get_Pause_Check[("<i>🔍 <em></em><br/>Get Pause Check</i>")]:::recordLookupsRemoved
    click Get_Pause_Check "#get_pause_check" "3940993096"
    
    Get_Latest_Pause_End_Time[("<b>🔍 <em></em><br/>Get Latest Pause End Time</b>")]:::recordLookupsAdded
    click Get_Latest_Pause_End_Time "#get_latest_pause_end_time" "3356018514"
    
    
    
    Get_Pause_End_Time[("<i>🔍 <em></em><br/>Get Pause End Time</i>")]:::recordLookupsRemoved
    click Get_Pause_End_Time "#get_pause_end_time" "396791281"
    
    Get_Latest_Pause_Start_Time[("<b>🔍 <em></em><br/>Get Latest Pause Start Time</b>")]:::recordLookupsAdded
    click Get_Latest_Pause_Start_Time "#get_latest_pause_start_time" "1873021694"
    
    
    
    Get_Pause_Start_Time[("<i>🔍 <em></em><br/>Get Pause Start Time</i>")]:::recordLookupsRemoved
    click Get_Pause_Start_Time "#get_pause_start_time" "2086189957"
    
    
    Get_Travel_End_Time[("🔍 <em></em><br/>Get Travel End Time")]:::recordLookups
    click Get_Travel_End_Time "#get_travel_end_time" "522330130"
    
    Get_Travel_Start_Time[("🔍 <em></em><br/>Get Travel Start Time")]:::recordLookups
    click Get_Travel_Start_Time "#get_travel_start_time" "3787332765"
    
    
    Flag_Travel_is_Done[("<i>🛠️ <em></em><br/>Flag Travel is Done</i>")]:::recordUpdatesRemoved
    click Flag_Travel_is_Done "#flag_travel_is_done" "2463088965"
    
    Update_Pauses[("<b>🛠️ <em></em><br/>Update Pauses</b>")]:::recordUpdatesAdded
    click Update_Pauses "#update_pauses" "1946432952"
    
    
    
    Update_Previous_Status[("<b>🛠️ <em></em><br/>Update Previous Status</b>")]:::recordUpdatesAdded
    click Update_Previous_Status "#update_previous_status" "1747452468"
    
    
    Prepare_Time_Sheet_Entry_Completed --> Loop_Assigned_Resources_Completed
    Prepare_Time_Sheet_Entry_Completed_Full_Night --> Loop_Assigned_Resources_Completed
    Prepare_Time_Sheet_Entry_Completed_Partial_Day --> Prepare_Time_Sheet_Entry_Completed_Partial_Night
    Prepare_Time_Sheet_Entry_Completed_Partial_Night --> Loop_Assigned_Resources_Completed
    Prepare_Time_Sheet_Entry_Travel --> Loop_Assigned_Resources
    Assigned_Resource_Type_Completed --> |"Person"| Get_Current_User_Time_Sheet_Completed
    Assigned_Resource_Type_Completed --> |"Crew"| Loop_Assigned_Resources_Completed
    Assigned_Resource_Type_Completed --> |"Default Outcome"| Loop_Assigned_Resources_Completed
    Assigned_Resource_Type_Travel --> |"Person"| Get_Current_User_Time_Sheet_Travel
    Assigned_Resource_Type_Travel --> |"Crew"| Loop_Assigned_Resources
    Assigned_Resource_Type_Travel --> |"Default Outcome"| Loop_Assigned_Resources
    Is_Night_Hour --> |"Yes Full"| Prepare_Time_Sheet_Entry_Completed_Full_Night
    Is_Night_Hour --> |"Yes Partial"| Prepare_Time_Sheet_Entry_Completed_Partial_Day
    Is_Night_Hour --> |"No"| Prepare_Time_Sheet_Entry_Completed
    Is_Night_Hour --> |"Default Outcome"| Loop_Assigned_Resources_Completed
    
    Status_is_changed -.-> |"🟥<i>In Progress</i>"| Get_Travel_Start_Time
    Status_is_changed -.-> |"🟥<i>Completed</i>"| Get_Completed_Start_Time
    
    Status_is_changed ==> |"🟩<b>Travel to In Progress</b>"| Get_Travel_Start_Time
    Status_is_changed ==> |"🟩<b>Completed or Cannot Complete</b>"| Get_Completed_Start_Time
    Status_is_changed ==> |"🟩<b>Paused to In Progress</b>"| Get_Latest_Pause_Start_Time
    
    Status_is_changed --> |"Default Outcome"| END_Status_is_changed
    
    Was_there_a_Pause -.-> |"🟥<i>Yes</i>"| Get_Pause_Start_Time
    Was_there_a_Pause -.-> |"🟥<i>Default Outcome</i>"| Loop_Assigned_Resources_Completed
    
    Loop_Assigned_Resources --> |"For Each"|Assigned_Resource_Type_Travel
    Loop_Assigned_Resources ---> |"After Last"|Create_Timesheet_Entries_Travel
    Loop_Assigned_Resources_Completed --> |"For Each"|Assigned_Resource_Type_Completed
    Loop_Assigned_Resources_Completed ---> |"After Last"|Create_Timesheet_Entries_Completed
    
    Create_Status_Change_Log -.-> END_Create_Status_Change_Log
    
    Create_Status_Change_Log ==> Update_Previous_Status
    
    Create_Timesheet_Entries_Completed --> END_Create_Timesheet_Entries_Completed
    
    Create_Timesheet_Entries_Travel -.-> Flag_Travel_is_Done
    Get_Assigned_Resources_Completed -.-> Get_Pause_Check
    
    Create_Timesheet_Entries_Travel ==> END_Create_Timesheet_Entries_Travel
    Get_Assigned_Resources_Completed ==> Loop_Assigned_Resources_Completed
    
    Get_Assigned_Resources_Travel --> Loop_Assigned_Resources
    Get_Completed_End_Time --> Get_Assigned_Resources_Completed
    Get_Completed_Start_Time --> Get_Completed_End_Time
    Get_Current_User_Time_Sheet_Completed --> Is_Night_Hour
    Get_Current_User_Time_Sheet_Travel --> Prepare_Time_Sheet_Entry_Travel
    
    Get_Pause_Check -.-> Was_there_a_Pause
    Get_Pause_End_Time -.-> Loop_Assigned_Resources_Completed
    Get_Pause_Start_Time -.-> Get_Pause_End_Time
    
    Get_Latest_Pause_End_Time ==> Update_Pauses
    Get_Latest_Pause_Start_Time ==> Get_Latest_Pause_End_Time
    
    Get_Travel_End_Time --> Get_Assigned_Resources_Travel
    Get_Travel_Start_Time --> Get_Travel_End_Time
    
    Flag_Travel_is_Done -.-> END_Flag_Travel_is_Done
    
    Update_Pauses ==> END_Update_Pauses
    Update_Previous_Status ==> END_Update_Previous_Status
    
    START --> |"Run Immediately"| Create_Status_Change_Log
    START --> |"Run Immediately"| Status_is_changed
    END_Status_is_changed(( END )):::endClass
    
    END_Create_Status_Change_Log(( END )):::endClassRemoved
    
    END_Create_Timesheet_Entries_Completed(( END )):::endClass
    
    END_Flag_Travel_is_Done(( END )):::endClassRemoved
    
    END_Create_Timesheet_Entries_Travel(( END )):::endClassAdded
    END_Update_Pauses(( END )):::endClassAdded
    END_Update_Previous_Status(( END )):::endClassAdded
    
    
    
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
      
    linkStyle 17,18,19,28,32,33,42,43,47,48 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 15,16,21,22,27,30,31,39,40,41,46 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    ## Formulas
    
    |Name|Data Type|Expression|
    |:-- |:--:|:--  |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>CalculatedPauseTime</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Number</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>({!Get_Pause_End_Time.Status_Change_Date__c}-{!Get_Pause_Start_Time.Status_Change_Date__c})*1440</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>CalculatedPauseTime</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Number</b></span>|<span style="background-color: #a6e22e; color: black;"><b>({!Get_Latest_Pause_End_Time.Status_Change_Date__c}-{!Get_Latest_Pause_Start_Time.Status_Change_Date__c})*1440</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>NightPauseTimeMinutes</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Number</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>IF(<br/>    AND(<br/>        {!Get_Pause_End_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>        ),<br/>        {!Get_Pause_Start_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>        )<br/>    ),<br/>    (<br/>        (<br/>            IF(<br/>                {!Get_Pause_End_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                ),<br/>                {!Get_Pause_End_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                )<br/>            )<br/>        ) - (<br/>            IF(<br/>                {!Get_Pause_Start_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                ),<br/>                {!Get_Pause_Start_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                )<br/>            )<br/>        )<br/>    ) * 1440,<br/>    0<br/>)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>NonNightPauseTimeMinutes</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Number</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>IF(<br/>    AND(<br/>        {!Get_Pause_End_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>        ),<br/>        {!Get_Pause_Start_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>        )<br/>    ),<br/>    (<br/>        (<br/>            IF(<br/>                {!Get_Pause_End_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                ),<br/>                {!Get_Pause_End_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                )<br/>            )<br/>        ) - (<br/>            IF(<br/>                {!Get_Pause_Start_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                ),<br/>                {!Get_Pause_Start_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                )<br/>            )<br/>        )<br/>    ) * 1440,<br/>    0<br/>)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>NightPauseTimeMinutes</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Number</b></span>|<span style="background-color: #a6e22e; color: black;"><b>IF(<br/>    AND(<br/>        {!Get_Latest_Pause_End_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>        ),<br/>        {!Get_Latest_Pause_Start_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>        )<br/>    ),<br/>    (<br/>        (<br/>            IF(<br/>                {!Get_Latest_Pause_End_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                ),<br/>                {!Get_Latest_Pause_End_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                )<br/>            )<br/>        ) - (<br/>            IF(<br/>                {!Get_Latest_Pause_Start_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                ),<br/>                {!Get_Latest_Pause_Start_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                )<br/>            )<br/>        )<br/>    ) * 1440,<br/>    0<br/>)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>NonNightPauseTimeMinutes</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Number</b></span>|<span style="background-color: #a6e22e; color: black;"><b>IF(<br/>    AND(<br/>        {!Get_Latest_Pause_End_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>        ),<br/>        {!Get_Latest_Pause_Start_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>        )<br/>    ),<br/>    (<br/>        (<br/>            IF(<br/>                {!Get_Latest_Pause_End_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                ),<br/>                {!Get_Latest_Pause_End_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                )<br/>            )<br/>        ) - (<br/>            IF(<br/>                {!Get_Latest_Pause_Start_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                ),<br/>                {!Get_Latest_Pause_Start_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Latest_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                )<br/>            )<br/>        )<br/>    ) * 1440,<br/>    0<br/>)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>TopupNightPauseTimeMinutes</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Number</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!$Record.Night_Pause_Duration__c}+{!NightPauseTimeMinutes}</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>TopupNonNightPauseTimeMinutes</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Number</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!$Record.Day_Pause_Duration__c}+{!NonNightPauseTimeMinutes}</b></span>|
    
    ## Flow Nodes Details
    
    ### Prepare_Time_Sheet_Entry_Completed
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>CompletedTimesheetCurrent.Pause_Duration__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>CalculatedPauseTime</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>CompletedTimesheetCurrent.Pause_Duration__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Day_Pause_Duration__c</b></span>|
    
    ### Prepare_Time_Sheet_Entry_Completed_Full_Night
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>CompletedTimesheetCurrent.Pause_Duration__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>CalculatedPauseTime</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>CompletedTimesheetCurrent.Pause_Duration__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Night_Pause_Duration__c</b></span>|
    
    ### Prepare_Time_Sheet_Entry_Completed_Partial_Day
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>CompletedTimesheetCurrent.Pause_Duration__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>NonNightPauseTimeMinutes</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>CompletedTimesheetCurrent.Pause_Duration__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Day_Pause_Duration__c</b></span>|
    
    ### Prepare_Time_Sheet_Entry_Completed_Partial_Night
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>CompletedTimeSheetCurrentNight.Pause_Duration__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>NightPauseTimeMinutes</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>CompletedTimeSheetCurrentNight.Pause_Duration__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Night_Pause_Duration__c</b></span>|
    
    ### Status_is_changed
    
    #### 🟥Rule Travel (Travel)
    
    #### 🟩Rule In_Progress (Travel to In Progress)
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Condition Logic</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>and</i></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Travelling</i></span>|
    
    #### 🟥Rule In_Progress (In Progress)
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>2</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Travel_is_Done__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Previous_Status__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Travelling</b></span>|
    
    #### 🟥Rule Completed (Completed)
    
    #### 🟩Rule Completed (Completed or Cannot Complete)
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Condition Logic</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>and</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>or</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Cannot Complete</b></span>|
    
    #### 🟥Rule Cancelled (Cancelled)
    
    #### 🟩Rule Paused (Paused to In Progress)
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Latest_Pause_Start_Time](#get_latest_pause_start_time)</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Canceled</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>In Progress</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Previous_Status__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Paused</b></span>|
    
    #### 🟥Rule Cannot_Complete (Cannot Complete)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Condition Logic</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>and</i></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Cannot Complete</i></span>|
    
    ### 🟥Was_there_a_Pause
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Decision</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Was there a Pause?</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Loop_Assigned_Resources_Completed](#loop_assigned_resources_completed)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Default Outcome</i></span>|
    
    #### 🟥Rule YesPause (Yes)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Pause_Start_Time](#get_pause_start_time)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Condition Logic</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>and</i></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Pause_Check](#get_pause_check)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Is Null</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    
    ### Create_Status_Change_Log
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_Previous_Status](#update_previous_status)</b></span>|
    
    ### Create_Timesheet_Entries_Travel
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Flag_Travel_is_Done](#flag_travel_is_done)</i></span>|
    
    ### Get_Assigned_Resources_Completed
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Pause_Check](#get_pause_check)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Loop_Assigned_Resources_Completed](#loop_assigned_resources_completed)</b></span>|
    
    ### 🟥Get_Pause_Check
    
    ### 🟩Get_Latest_Pause_End_Time
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get Pause Check</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Latest Pause End Time</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Get First Record Only</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Store Output Automatically</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Was_there_a_Pause](#was_there_a_pause)</i></span>|
    
    #### 🟥Filters (logic: **1 AND (2 OR 3)**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Service_Appointment__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>2</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Previous_Status__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Paused</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>3</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>New_Status__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Paused</i></span>|
    
    ### 🟥Get_Pause_End_Time
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Record Lookup</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Object</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Service_Appointment_Status__c</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get Pause End Time</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Assign Null Values If No Records Found</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sort Order</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Asc</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sort Order</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Desc</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Loop_Assigned_Resources_Completed](#loop_assigned_resources_completed)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_Pauses](#update_pauses)</b></span>|
    
    ### 🟥Get_Pause_Start_Time
    
    ### 🟩Get_Latest_Pause_Start_Time
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get Pause Start Time</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Latest Pause Start Time</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sort Order</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Asc</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sort Order</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Desc</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Pause_End_Time](#get_pause_end_time)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Latest_Pause_End_Time](#get_latest_pause_end_time)</b></span>|
    
    ### 🟥Flag_Travel_is_Done
    
    ### 🟩Update_Pauses
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Flag Travel is Done</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Update Pauses</b></span>|
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Travel_is_Done__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Day_Pause_Duration__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>TopupNonNightPauseTimeMinutes</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Night_Pause_Duration__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>TopupNightPauseTimeMinutes</b></span>|
    
    ### 🟩Update_Previous_Status
    
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Update</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Update Previous Status</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Input Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record</b></span>|
    
    #### 🟩Input Assignments
    
    
    
    |Field|Value|
    |:-- |:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Previous_Status__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record__Prior.Status</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 19, 2024 (Initial)"

    _Nov 19, 2024, by fpardon-upeo in commit Org state on 2024-11-19 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "1658851445"
    
    Prepare_Time_Sheet_Entry_Completed[\"🟰 <em></em><br/>Prepare Time Sheet Entry Completed"/]:::assignments
    click Prepare_Time_Sheet_Entry_Completed "#prepare_time_sheet_entry_completed" "3068446783"
    
    Prepare_Time_Sheet_Entry_Completed_Full_Night[\"🟰 <em></em><br/>Prepare Time Sheet Entry Completed Full Night"/]:::assignments
    click Prepare_Time_Sheet_Entry_Completed_Full_Night "#prepare_time_sheet_entry_completed_full_night" "1479077476"
    
    Prepare_Time_Sheet_Entry_Completed_Partial_Day[\"🟰 <em></em><br/>Prepare Time Sheet Entry Completed Partial Day"/]:::assignments
    click Prepare_Time_Sheet_Entry_Completed_Partial_Day "#prepare_time_sheet_entry_completed_partial_day" "1130490395"
    
    Prepare_Time_Sheet_Entry_Completed_Partial_Night[\"🟰 <em></em><br/>Prepare Time Sheet Entry Completed Partial Night"/]:::assignments
    click Prepare_Time_Sheet_Entry_Completed_Partial_Night "#prepare_time_sheet_entry_completed_partial_night" "948254405"
    
    Prepare_Time_Sheet_Entry_Travel[\"🟰 <em></em><br/>Prepare Time Sheet Entry Travel"/]:::assignments
    click Prepare_Time_Sheet_Entry_Travel "#prepare_time_sheet_entry_travel" "884542221"
    
    Assigned_Resource_Type_Completed{"🔀 <em></em><br/>Assigned Resource Type Completed"}:::decisions
    click Assigned_Resource_Type_Completed "#assigned_resource_type_completed" "1108422346"
    
    Assigned_Resource_Type_Travel{"🔀 <em></em><br/>Assigned Resource Type Travel"}:::decisions
    click Assigned_Resource_Type_Travel "#assigned_resource_type_travel" "1080341603"
    
    Is_Night_Hour{"🔀 <em></em><br/>Is Night Hour"}:::decisions
    click Is_Night_Hour "#is_night_hour" "218543052"
    
    Status_is_changed{"🔀 <em></em><br/>Status is changed"}:::decisions
    click Status_is_changed "#status_is_changed" "1770081161"
    
    Was_there_a_Pause{"🔀 <em></em><br/>Was there a Pause?"}:::decisions
    click Was_there_a_Pause "#was_there_a_pause" "2634170321"
    
    Loop_Assigned_Resources{{"🔁 <em></em><br/>Loop Assigned Resources"}}:::loops
    click Loop_Assigned_Resources "#loop_assigned_resources" "198473609"
    
    Loop_Assigned_Resources_Completed{{"🔁 <em></em><br/>Loop Assigned Resources Completed"}}:::loops
    click Loop_Assigned_Resources_Completed "#loop_assigned_resources_completed" "3254511180"
    
    Create_Status_Change_Log[("➕ <em></em><br/>Create Status Change Log")]:::recordCreates
    click Create_Status_Change_Log "#create_status_change_log" "1916609929"
    
    Create_Timesheet_Entries_Completed[("➕ <em></em><br/>Create Timesheet Entries Completed")]:::recordCreates
    click Create_Timesheet_Entries_Completed "#create_timesheet_entries_completed" "1018540219"
    
    Create_Timesheet_Entries_Travel[("➕ <em></em><br/>Create Timesheet Entries Travel")]:::recordCreates
    click Create_Timesheet_Entries_Travel "#create_timesheet_entries_travel" "1242422801"
    
    Get_Assigned_Resources_Completed[("🔍 <em></em><br/>Get Assigned Resources Completed")]:::recordLookups
    click Get_Assigned_Resources_Completed "#get_assigned_resources_completed" "3678452846"
    
    Get_Assigned_Resources_Travel[("🔍 <em></em><br/>Get Assigned Resources Travel")]:::recordLookups
    click Get_Assigned_Resources_Travel "#get_assigned_resources_travel" "1608991497"
    
    Get_Completed_End_Time[("🔍 <em></em><br/>Get Completed End Time")]:::recordLookups
    click Get_Completed_End_Time "#get_completed_end_time" "1294393676"
    
    Get_Completed_Start_Time[("🔍 <em></em><br/>Get Completed Start Time")]:::recordLookups
    click Get_Completed_Start_Time "#get_completed_start_time" "2028093998"
    
    Get_Current_User_Time_Sheet_Completed[("🔍 <em></em><br/>Get Current User Time Sheet Completed")]:::recordLookups
    click Get_Current_User_Time_Sheet_Completed "#get_current_user_time_sheet_completed" "4149562848"
    
    Get_Current_User_Time_Sheet_Travel[("🔍 <em></em><br/>Get Current User Time Sheet Travel")]:::recordLookups
    click Get_Current_User_Time_Sheet_Travel "#get_current_user_time_sheet_travel" "3239798822"
    
    Get_Pause_Check[("🔍 <em></em><br/>Get Pause Check")]:::recordLookups
    click Get_Pause_Check "#get_pause_check" "3940993096"
    
    Get_Pause_End_Time[("🔍 <em></em><br/>Get Pause End Time")]:::recordLookups
    click Get_Pause_End_Time "#get_pause_end_time" "396791281"
    
    Get_Pause_Start_Time[("🔍 <em></em><br/>Get Pause Start Time")]:::recordLookups
    click Get_Pause_Start_Time "#get_pause_start_time" "2086189957"
    
    Get_Travel_End_Time[("🔍 <em></em><br/>Get Travel End Time")]:::recordLookups
    click Get_Travel_End_Time "#get_travel_end_time" "522330130"
    
    Get_Travel_Start_Time[("🔍 <em></em><br/>Get Travel Start Time")]:::recordLookups
    click Get_Travel_Start_Time "#get_travel_start_time" "3787332765"
    
    Flag_Travel_is_Done[("🛠️ <em></em><br/>Flag Travel is Done")]:::recordUpdates
    click Flag_Travel_is_Done "#flag_travel_is_done" "2463088965"
    
    Prepare_Time_Sheet_Entry_Completed --> Loop_Assigned_Resources_Completed
    Prepare_Time_Sheet_Entry_Completed_Full_Night --> Loop_Assigned_Resources_Completed
    Prepare_Time_Sheet_Entry_Completed_Partial_Day --> Prepare_Time_Sheet_Entry_Completed_Partial_Night
    Prepare_Time_Sheet_Entry_Completed_Partial_Night --> Loop_Assigned_Resources_Completed
    Prepare_Time_Sheet_Entry_Travel --> Loop_Assigned_Resources
    Assigned_Resource_Type_Completed --> |"Person"| Get_Current_User_Time_Sheet_Completed
    Assigned_Resource_Type_Completed --> |"Crew"| Loop_Assigned_Resources_Completed
    Assigned_Resource_Type_Completed --> |"Default Outcome"| Loop_Assigned_Resources_Completed
    Assigned_Resource_Type_Travel --> |"Person"| Get_Current_User_Time_Sheet_Travel
    Assigned_Resource_Type_Travel --> |"Crew"| Loop_Assigned_Resources
    Assigned_Resource_Type_Travel --> |"Default Outcome"| Loop_Assigned_Resources
    Is_Night_Hour --> |"Yes Full"| Prepare_Time_Sheet_Entry_Completed_Full_Night
    Is_Night_Hour --> |"Yes Partial"| Prepare_Time_Sheet_Entry_Completed_Partial_Day
    Is_Night_Hour --> |"No"| Prepare_Time_Sheet_Entry_Completed
    Is_Night_Hour --> |"Default Outcome"| Loop_Assigned_Resources_Completed
    Status_is_changed --> |"In Progress"| Get_Travel_Start_Time
    Status_is_changed --> |"Completed"| Get_Completed_Start_Time
    Status_is_changed --> |"Default Outcome"| END_Status_is_changed
    Was_there_a_Pause --> |"Yes"| Get_Pause_Start_Time
    Was_there_a_Pause --> |"Default Outcome"| Loop_Assigned_Resources_Completed
    Loop_Assigned_Resources --> |"For Each"|Assigned_Resource_Type_Travel
    Loop_Assigned_Resources ---> |"After Last"|Create_Timesheet_Entries_Travel
    Loop_Assigned_Resources_Completed --> |"For Each"|Assigned_Resource_Type_Completed
    Loop_Assigned_Resources_Completed ---> |"After Last"|Create_Timesheet_Entries_Completed
    Create_Status_Change_Log --> END_Create_Status_Change_Log
    Create_Timesheet_Entries_Completed --> END_Create_Timesheet_Entries_Completed
    Create_Timesheet_Entries_Travel --> Flag_Travel_is_Done
    Get_Assigned_Resources_Completed --> Get_Pause_Check
    Get_Assigned_Resources_Travel --> Loop_Assigned_Resources
    Get_Completed_End_Time --> Get_Assigned_Resources_Completed
    Get_Completed_Start_Time --> Get_Completed_End_Time
    Get_Current_User_Time_Sheet_Completed --> Is_Night_Hour
    Get_Current_User_Time_Sheet_Travel --> Prepare_Time_Sheet_Entry_Travel
    Get_Pause_Check --> Was_there_a_Pause
    Get_Pause_End_Time --> Loop_Assigned_Resources_Completed
    Get_Pause_Start_Time --> Get_Pause_End_Time
    Get_Travel_End_Time --> Get_Assigned_Resources_Travel
    Get_Travel_Start_Time --> Get_Travel_End_Time
    Flag_Travel_is_Done --> END_Flag_Travel_is_Done
    START --> |"Run Immediately"| Create_Status_Change_Log
    START --> |"Run Immediately"| Status_is_changed
    END_Status_is_changed(( END )):::endClass
    END_Create_Status_Change_Log(( END )):::endClass
    END_Create_Timesheet_Entries_Completed(( END )):::endClass
    END_Flag_Travel_is_Done(( END )):::endClass
    
    
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
    |Record Trigger Type| Create And Update|
    |Label|[Service Appointment] - [After-Save] - [Record-Triggered] - Time Sheet Automations|
    |Status|Active|
    |Description|This flows creates the automatic time sheet entries based on the evolving status of the service appointment|
    |Environments|Default|
    |Interview Label|Service Appointment - Time Sheet Automations {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Create_Status_Change_Log](#create_status_change_log)|
    |Next Node|[Create_Status_Change_Log](#create_status_change_log)|
    
    
    #### Scheduled Paths
    
    |Label|Name|Offset Number|Offset Unit|Record Field|Time Source|Connector|
    |:-- |:-- |:-- |:-- |:-- |:-- |:--  |
    |<!-- -->|<!-- -->|<!-- -->|<!-- -->|<!-- -->|<!-- -->|[Status_is_changed](#status_is_changed)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Status| Is Changed|✅|
    
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
    |:-- |:--:|:--:|:--:|:--:|:--: |
    |CompletedTimesheetCurrent|SObject|⬜|⬜|⬜|TimeSheetEntry|
    |CompletedTimeSheetCurrentNight|SObject|⬜|⬜|⬜|TimeSheetEntry|
    |CompletedTimeSheetEntryCollection|SObject|✅|⬜|⬜|TimeSheetEntry|
    |currentItem_Get_Travel_Start_Time_Test|SObject|⬜|⬜|⬜|ServiceAppointmentHistory|
    |currentItem_Travel_Time_End|SObject|⬜|⬜|⬜|ServiceAppointmentHistory|
    |currentItem_Travel_Time_Start|SObject|⬜|⬜|⬜|ServiceAppointmentHistory|
    |TravelTimeSheetCurrent|SObject|⬜|⬜|⬜|TimeSheetEntry|
    |TravelTimeSheetEntryCollection|SObject|✅|⬜|⬜|TimeSheetEntry|
    
    
    ## Formulas
    
    |Name|Data Type|Expression|
    |:-- |:--:|:--  |
    |CalculatedPauseTime|Number|({!Get_Pause_End_Time.Status_Change_Date__c}-{!Get_Pause_Start_Time.Status_Change_Date__c})*1440|
    |DebugFlow|String|RIGHT(LEFT(TEXT(DATETIMEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c})), 13), 2)|
    |isNightHourFull|Boolean|AND(<br/>    OR(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) >= 18,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) < 4<br/>    ),<br/>    OR(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) < 4,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) >= 18<br/>    )<br/>)|
    |isNightHourPartial|Boolean|OR(<br/>    OR(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) >= 18,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) < 4<br/>    ),<br/>    OR(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) < 4,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) >= 18<br/>    )<br/>)|
    |NightPauseTimeMinutes|Number|IF(<br/>    AND(<br/>        {!Get_Pause_End_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>        ),<br/>        {!Get_Pause_Start_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>        )<br/>    ),<br/>    (<br/>        (<br/>            IF(<br/>                {!Get_Pause_End_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                ),<br/>                {!Get_Pause_End_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                )<br/>            )<br/>        ) - (<br/>            IF(<br/>                {!Get_Pause_Start_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                ),<br/>                {!Get_Pause_Start_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                )<br/>            )<br/>        )<br/>    ) * 1440,<br/>    0<br/>)|
    |NonNightPauseTimeMinutes|Number|IF(<br/>    AND(<br/>        {!Get_Pause_End_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>        ),<br/>        {!Get_Pause_Start_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>            TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>            TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>        )<br/>    ),<br/>    (<br/>        (<br/>            IF(<br/>                {!Get_Pause_End_Time.Status_Change_Date__c} < DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                ),<br/>                {!Get_Pause_End_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 18:00:00"<br/>                )<br/>            )<br/>        ) - (<br/>            IF(<br/>                {!Get_Pause_Start_Time.Status_Change_Date__c} > DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                ),<br/>                {!Get_Pause_Start_Time.Status_Change_Date__c},<br/>                DATETIMEVALUE(<br/>                    TEXT(YEAR(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(MONTH(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & "-" &<br/>                    TEXT(DAY(DATEVALUE({!Get_Pause_Start_Time.Status_Change_Date__c}))) & " 05:00:00"<br/>                )<br/>            )<br/>        )<br/>    ) * 1440,<br/>    0<br/>)|
    |PartialNightWorkEnd|DateTime|IF(<br/>    OR(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) >= 18,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 13), 2)) < 4<br/>    ),<br/>    {!Get_Completed_End_Time.Status_Change_Date__c},<br/>    DATETIMEVALUE(<br/>        TEXT(YEAR(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(MONTH(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(DAY(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "05:00:00"<br/>    )<br/>)|
    |PartialNightWorkStart|DateTime|IF(<br/>    OR(<br/>        VALUE(MID(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 12, 2)) >= 18,<br/>        VALUE(MID(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 12, 2)) < 4<br/>    ),<br/>    {!Get_Completed_Start_Time.Status_Change_Date__c},<br/>    DATETIMEVALUE(<br/>        TEXT(YEAR(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(MONTH(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(DAY(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & " 19:00:00"<br/>    )<br/>)|
    |PartialNonNightWorkEnd|DateTime|IF(<br/>    AND(<br/>        VALUE(MID(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 12, 2)) >= 4,<br/>        VALUE(MID(TEXT({!Get_Completed_End_Time.Status_Change_Date__c}), 12, 2)) < 18<br/>    ),<br/>    {!Get_Completed_End_Time.Status_Change_Date__c},<br/>    DATETIMEVALUE(<br/>        TEXT(YEAR(DATEVALUE({!Get_Completed_End_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(MONTH(DATEVALUE({!Get_Completed_End_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(DAY(DATEVALUE({!Get_Completed_End_Time.Status_Change_Date__c}))) & " 19:00:00"<br/>    )<br/>)|
    |PartialNonNightWorkStart|DateTime|IF(<br/>    AND(<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) >= 4,<br/>        VALUE(RIGHT(LEFT(TEXT({!Get_Completed_Start_Time.Status_Change_Date__c}), 13), 2)) < 18<br/>    ),<br/>    {!Get_Completed_Start_Time.Status_Change_Date__c},<br/>    DATETIMEVALUE(<br/>        TEXT(YEAR(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(MONTH(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "-" &<br/>        TEXT(DAY(DATEVALUE({!Get_Completed_Start_Time.Status_Change_Date__c}))) & "05:00:00"<br/>    )<br/>)|
    
    
    ## Flow Nodes Details
    
    ### Prepare_Time_Sheet_Entry_Completed
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Prepare Time Sheet Entry Completed|
    |Connector|[Loop_Assigned_Resources_Completed](#loop_assigned_resources_completed)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |CompletedTimesheetCurrent.StartTime| Assign|Get_Completed_Start_Time.Status_Change_Date__c|
    |CompletedTimesheetCurrent.EndTime| Assign|Get_Completed_End_Time.Status_Change_Date__c|
    |CompletedTimesheetCurrent.Type| Assign|Normal Hours|
    |CompletedTimesheetCurrent.TimeSheetId| Assign|Get_Current_User_Time_Sheet_Completed.Id|
    |CompletedTimesheetCurrent.Subject| Assign|Production Time|
    |CompletedTimesheetCurrent.WorkOrderId| Assign|$Record.ParentRecordId|
    |CompletedTimesheetCurrent.Pause_Duration__c| Assign|CalculatedPauseTime|
    |CompletedTimeSheetEntryCollection| Add|CompletedTimesheetCurrent|
    
    
    
    
    ### Prepare_Time_Sheet_Entry_Completed_Full_Night
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Prepare Time Sheet Entry Completed Full Night|
    |Connector|[Loop_Assigned_Resources_Completed](#loop_assigned_resources_completed)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |CompletedTimesheetCurrent.StartTime| Assign|Get_Completed_Start_Time.Status_Change_Date__c|
    |CompletedTimesheetCurrent.EndTime| Assign|Get_Completed_End_Time.Status_Change_Date__c|
    |CompletedTimesheetCurrent.Type| Assign|Night Work|
    |CompletedTimesheetCurrent.TimeSheetId| Assign|Get_Current_User_Time_Sheet_Completed.Id|
    |CompletedTimesheetCurrent.Subject| Assign|Production Time|
    |CompletedTimesheetCurrent.WorkOrderId| Assign|$Record.ParentRecordId|
    |CompletedTimesheetCurrent.Pause_Duration__c| Assign|CalculatedPauseTime|
    |CompletedTimeSheetEntryCollection| Add|CompletedTimesheetCurrent|
    
    
    
    
    ### Prepare_Time_Sheet_Entry_Completed_Partial_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Prepare Time Sheet Entry Completed Partial Day|
    |Connector|[Prepare_Time_Sheet_Entry_Completed_Partial_Night](#prepare_time_sheet_entry_completed_partial_night)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |CompletedTimesheetCurrent.StartTime| Assign|PartialNonNightWorkStart|
    |CompletedTimesheetCurrent.EndTime| Assign|PartialNonNightWorkEnd|
    |CompletedTimesheetCurrent.Type| Assign|Normal Hours|
    |CompletedTimesheetCurrent.TimeSheetId| Assign|Get_Current_User_Time_Sheet_Completed.Id|
    |CompletedTimesheetCurrent.Subject| Assign|Production Time|
    |CompletedTimesheetCurrent.WorkOrderId| Assign|$Record.ParentRecordId|
    |CompletedTimesheetCurrent.Pause_Duration__c| Assign|NonNightPauseTimeMinutes|
    |CompletedTimeSheetEntryCollection| Add|CompletedTimesheetCurrent|
    
    
    
    
    ### Prepare_Time_Sheet_Entry_Completed_Partial_Night
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Prepare Time Sheet Entry Completed Partial Night|
    |Connector|[Loop_Assigned_Resources_Completed](#loop_assigned_resources_completed)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |CompletedTimeSheetCurrentNight.StartTime| Assign|PartialNightWorkStart|
    |CompletedTimeSheetCurrentNight.EndTime| Assign|PartialNightWorkEnd|
    |CompletedTimeSheetCurrentNight.Type| Assign|Night Work|
    |CompletedTimeSheetCurrentNight.TimeSheetId| Assign|Get_Current_User_Time_Sheet_Completed.Id|
    |CompletedTimeSheetCurrentNight.Subject| Assign|Production Time|
    |CompletedTimeSheetCurrentNight.WorkOrderId| Assign|$Record.ParentRecordId|
    |CompletedTimeSheetCurrentNight.Pause_Duration__c| Assign|NightPauseTimeMinutes|
    |CompletedTimeSheetEntryCollection| Add|CompletedTimeSheetCurrentNight|
    
    
    
    
    ### Prepare_Time_Sheet_Entry_Travel
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Prepare Time Sheet Entry Travel|
    |Connector|[Loop_Assigned_Resources](#loop_assigned_resources)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |TravelTimeSheetCurrent.StartTime| Assign|Get_Travel_Start_Time.Status_Change_Date__c|
    |TravelTimeSheetCurrent.EndTime| Assign|Get_Travel_End_Time.Status_Change_Date__c|
    |TravelTimeSheetCurrent.Type| Assign|Travel Time|
    |TravelTimeSheetCurrent.TimeSheetId| Assign|Get_Current_User_Time_Sheet_Travel.Id|
    |TravelTimeSheetCurrent.Subject| Assign|Travel Time|
    |TravelTimeSheetCurrent.WorkOrderId| Assign|$Record.ParentRecordId|
    |TravelTimeSheetEntryCollection| Add|TravelTimeSheetCurrent|
    
    
    
    
    ### Assigned_Resource_Type_Completed
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Assigned Resource Type Completed|
    |Default Connector|[Loop_Assigned_Resources_Completed](#loop_assigned_resources_completed)|
    |Default Connector Label|Default Outcome|
    
    
    #### Rule PersonC (Person)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Get_Current_User_Time_Sheet_Completed](#get_current_user_time_sheet_completed)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|Loop_Assigned_Resources_Completed.ServiceResource.ResourceType| Equal To|T|
    
    
    
    
    #### Rule CrewC (Crew)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Loop_Assigned_Resources_Completed](#loop_assigned_resources_completed)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|Loop_Assigned_Resources_Completed.ServiceResource.ResourceType| Equal To|C|
    
    
    
    
    ### Assigned_Resource_Type_Travel
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Assigned Resource Type Travel|
    |Default Connector|[Loop_Assigned_Resources](#loop_assigned_resources)|
    |Default Connector Label|Default Outcome|
    
    
    #### Rule PersonT (Person)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Get_Current_User_Time_Sheet_Travel](#get_current_user_time_sheet_travel)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|Loop_Assigned_Resources.ServiceResource.ResourceType| Equal To|T|
    
    
    
    
    #### Rule CrewT (Crew)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Loop_Assigned_Resources](#loop_assigned_resources)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|Loop_Assigned_Resources.ServiceResource.ResourceType| Equal To|C|
    
    
    
    
    ### Is_Night_Hour
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Is Night Hour|
    |Default Connector|[Loop_Assigned_Resources_Completed](#loop_assigned_resources_completed)|
    |Default Connector Label|Default Outcome|
    
    
    #### Rule Yes_Full (Yes Full)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Prepare_Time_Sheet_Entry_Completed_Full_Night](#prepare_time_sheet_entry_completed_full_night)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|isNightHourFull| Equal To|✅|
    
    
    
    
    #### Rule Yes_Partial (Yes Partial)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Prepare_Time_Sheet_Entry_Completed_Partial_Day](#prepare_time_sheet_entry_completed_partial_day)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|isNightHourPartial| Equal To|✅|
    |2|isNightHourFull| Equal To|⬜|
    |3|PartialNightWorkStart| Is Null|⬜|
    |4|PartialNightWorkEnd| Is Null|⬜|
    |5|PartialNonNightWorkStart| Is Null|⬜|
    |6|PartialNonNightWorkEnd| Is Null|⬜|
    
    
    
    
    #### Rule No (No)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Prepare_Time_Sheet_Entry_Completed](#prepare_time_sheet_entry_completed)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|isNightHourFull| Equal To|⬜|
    |2|isNightHourPartial| Equal To|⬜|
    
    
    
    
    ### Status_is_changed
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Status is changed|
    |Default Connector Label|Default Outcome|
    
    
    #### Rule Travel (Travel)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.Status| Equal To|Travelling|
    
    
    
    
    #### Rule In_Progress (In Progress)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Get_Travel_Start_Time](#get_travel_start_time)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.Status| Equal To|In Progress|
    |2|$Record.Travel_is_Done__c| Equal To|⬜|
    
    
    
    
    #### Rule Completed (Completed)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Get_Completed_Start_Time](#get_completed_start_time)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.Status| Equal To|Completed|
    
    
    
    
    #### Rule Cancelled (Cancelled)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.Status| Equal To|Canceled|
    
    
    
    
    #### Rule Cannot_Complete (Cannot Complete)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.Status| Equal To|Cannot Complete|
    
    
    
    
    ### Was_there_a_Pause
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Was there a Pause?|
    |Default Connector|[Loop_Assigned_Resources_Completed](#loop_assigned_resources_completed)|
    |Default Connector Label|Default Outcome|
    
    
    #### Rule YesPause (Yes)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Get_Pause_Start_Time](#get_pause_start_time)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|[Get_Pause_Check](#get_pause_check)| Is Null|⬜|
    
    
    
    
    ### Loop_Assigned_Resources
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Loop|
    |Label|Loop Assigned Resources|
    |Collection Reference|[Get_Assigned_Resources_Travel](#get_assigned_resources_travel)|
    |Iteration Order|Asc|
    |Next Value Connector|[Assigned_Resource_Type_Travel](#assigned_resource_type_travel)|
    |No More Values Connector|[Create_Timesheet_Entries_Travel](#create_timesheet_entries_travel)|
    
    
    ### Loop_Assigned_Resources_Completed
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Loop|
    |Label|Loop Assigned Resources Completed|
    |Collection Reference|[Get_Assigned_Resources_Completed](#get_assigned_resources_completed)|
    |Iteration Order|Asc|
    |Next Value Connector|[Assigned_Resource_Type_Completed](#assigned_resource_type_completed)|
    |No More Values Connector|[Create_Timesheet_Entries_Completed](#create_timesheet_entries_completed)|
    
    
    ### Create_Status_Change_Log
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Create|
    |Object|Service_Appointment_Status__c|
    |Label|Create Status Change Log|
    |Store Output Automatically|✅|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |New_Status__c|$Record.Status|
    |Previous_Status__c|$Record__Prior.Status|
    |Service_Appointment__c|$Record.Id|
    |Status_Change_Date__c|$Flow.CurrentDateTime|
    
    
    
    
    ### Create_Timesheet_Entries_Completed
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Create|
    |Label|Create Timesheet Entries Completed|
    |Input Reference|CompletedTimeSheetEntryCollection|
    
    
    ### Create_Timesheet_Entries_Travel
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Create|
    |Label|Create Timesheet Entries Travel|
    |Input Reference|TravelTimeSheetEntryCollection|
    |Connector|[Flag_Travel_is_Done](#flag_travel_is_done)|
    
    
    ### Get_Assigned_Resources_Completed
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|AssignedResource|
    |Label|Get Assigned Resources Completed|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|⬜|
    |Store Output Automatically|✅|
    |Connector|[Get_Pause_Check](#get_pause_check)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|ServiceAppointmentId| Equal To|$Record.Id|
    
    
    
    
    ### Get_Assigned_Resources_Travel
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|AssignedResource|
    |Label|Get Assigned Resources Travel|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|⬜|
    |Store Output Automatically|✅|
    |Connector|[Loop_Assigned_Resources](#loop_assigned_resources)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|ServiceAppointmentId| Equal To|$Record.Id|
    
    
    
    
    ### Get_Completed_End_Time
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|Service_Appointment_Status__c|
    |Label|Get Completed End Time|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Sort Field|Status_Change_Date__c|
    |Sort Order|Asc|
    |Store Output Automatically|✅|
    |Connector|[Get_Assigned_Resources_Completed](#get_assigned_resources_completed)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Service_Appointment__c| Equal To|$Record.Id|
    |2|Previous_Status__c| Equal To|In Progress|
    |3|New_Status__c| Equal To|Completed|
    
    
    
    
    ### Get_Completed_Start_Time
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|Service_Appointment_Status__c|
    |Label|Get Completed Start Time|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Sort Field|Status_Change_Date__c|
    |Sort Order|Asc|
    |Store Output Automatically|✅|
    |Connector|[Get_Completed_End_Time](#get_completed_end_time)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Service_Appointment__c| Equal To|$Record.Id|
    |2|Previous_Status__c| Equal To|Travelling|
    |3|New_Status__c| Equal To|In Progress|
    
    
    
    
    ### Get_Current_User_Time_Sheet_Completed
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|TimeSheet|
    |Label|Get Current User Time Sheet Completed|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Is_Night_Hour](#is_night_hour)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|ServiceResourceId| Equal To|Loop_Assigned_Resources_Completed.ServiceResourceId|
    |2|StartDate| Equal To|$Flow.CurrentDate|
    
    
    
    
    ### Get_Current_User_Time_Sheet_Travel
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|TimeSheet|
    |Label|Get Current User Time Sheet Travel|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Prepare_Time_Sheet_Entry_Travel](#prepare_time_sheet_entry_travel)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|ServiceResourceId| Equal To|Loop_Assigned_Resources.ServiceResourceId|
    |2|StartDate| Equal To|$Flow.CurrentDate|
    
    
    
    
    ### Get_Pause_Check
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|Service_Appointment_Status__c|
    |Label|Get Pause Check|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|⬜|
    |Store Output Automatically|✅|
    |Connector|[Was_there_a_Pause](#was_there_a_pause)|
    
    
    #### Filters (logic: **1 AND (2 OR 3)**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Service_Appointment__c| Equal To|$Record.Id|
    |2|Previous_Status__c| Equal To|Paused|
    |3|New_Status__c| Equal To|Paused|
    
    
    
    
    ### Get_Pause_End_Time
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|Service_Appointment_Status__c|
    |Label|Get Pause End Time|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Sort Field|Status_Change_Date__c|
    |Sort Order|Asc|
    |Store Output Automatically|✅|
    |Connector|[Loop_Assigned_Resources_Completed](#loop_assigned_resources_completed)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Service_Appointment__c| Equal To|$Record.Id|
    |2|Previous_Status__c| Equal To|Paused|
    
    
    
    
    ### Get_Pause_Start_Time
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|Service_Appointment_Status__c|
    |Label|Get Pause Start Time|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Sort Field|Status_Change_Date__c|
    |Sort Order|Asc|
    |Store Output Automatically|✅|
    |Connector|[Get_Pause_End_Time](#get_pause_end_time)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Service_Appointment__c| Equal To|$Record.Id|
    |2|New_Status__c| Equal To|Paused|
    
    
    
    
    ### Get_Travel_End_Time
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|Service_Appointment_Status__c|
    |Label|Get Travel End Time|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Sort Field|Status_Change_Date__c|
    |Sort Order|Asc|
    |Store Output Automatically|✅|
    |Connector|[Get_Assigned_Resources_Travel](#get_assigned_resources_travel)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Service_Appointment__c| Equal To|$Record.Id|
    |2|Previous_Status__c| Equal To|Travelling|
    |3|New_Status__c| Equal To|In Progress|
    
    
    
    
    ### Get_Travel_Start_Time
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|Service_Appointment_Status__c|
    |Label|Get Travel Start Time|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Sort Field|Status_Change_Date__c|
    |Sort Order|Asc|
    |Store Output Automatically|✅|
    |Connector|[Get_Travel_End_Time](#get_travel_end_time)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Service_Appointment__c| Equal To|$Record.Id|
    |2|New_Status__c| Equal To|Travelling|
    
    
    
    
    ### Flag_Travel_is_Done
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Label|Flag Travel is Done|
    |Input Reference|$Record|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Travel_is_Done__c|✅|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

