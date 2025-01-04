# Location_Passport_Mobile_Flow_Screen_flow_View_Location_Passport_Information history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Nov 22, 2024"

    _Nov 22, 2024, by fpardon-upeo in commit Org state on 2024-11-22 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["<b>START</b>"]):::startClassChanged
    
    
    click START "#general-information" "3039137934"
    
    
    Post_Changes_to_chatter("⚡ <em></em><br/>Post Changes to chatter"):::actionCalls
    click Post_Changes_to_chatter "#post_changes_to_chatter" "1944103437"
    
    Add_to_Details_list[\"🟰 <em></em><br/>Add to Details list"/]:::assignments
    click Add_to_Details_list "#add_to_details_list" "3781968440"
    
    Loop_Through_Operating_Hours{{"🔁 <em></em><br/>Loop Through Operating Hours"}}:::loops
    click Loop_Through_Operating_Hours "#loop_through_operating_hours" "2939973918"
    
    Get_Account_Information[("🔍 <em></em><br/>Get Account Information")]:::recordLookups
    click Get_Account_Information "#get_account_information" "2375899122"
    
    Get_Contract_Manager[("🔍 <em></em><br/>Get Contract Manager")]:::recordLookups
    click Get_Contract_Manager "#get_contract_manager" "1067364005"
    
    Get_Operating_Hours[("🔍 <em></em><br/>Get Operating Hours")]:::recordLookups
    click Get_Operating_Hours "#get_operating_hours" "2178021119"
    
    Get_Service_Territory[("🔍 <em></em><br/>Get Service Territory")]:::recordLookups
    click Get_Service_Territory "#get_service_territory" "3197260144"
    
    Get_Work_Order_Info[("🔍 <em></em><br/>Get Work Order Info")]:::recordLookups
    click Get_Work_Order_Info "#get_work_order_info" "308662686"
    
    Display_Location_Passport_Information(["💻 <em></em><br/>Display Location Passport Information"]):::screens
    click Display_Location_Passport_Information "#display_location_passport_information" "1554028954"
    
    Post_Changes_to_chatter --> END_Post_Changes_to_chatter
    Add_to_Details_list --> Loop_Through_Operating_Hours
    Loop_Through_Operating_Hours --> |"For Each"|Add_to_Details_list
    Loop_Through_Operating_Hours ---> |"After Last"|Display_Location_Passport_Information
    Get_Account_Information --> Get_Operating_Hours
    Get_Contract_Manager --> Post_Changes_to_chatter
    Get_Operating_Hours --> Loop_Through_Operating_Hours
    Get_Service_Territory --> Get_Contract_Manager
    Get_Work_Order_Info --> Get_Account_Information
    Display_Location_Passport_Information --> Get_Service_Territory
    START -->  Get_Work_Order_Info
    END_Post_Changes_to_chatter(( END )):::endClass
    
    
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
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Active</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⚠️ Draft</b></span>|
    
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
    click START "#general-information" "743928599"
    
    Post_Changes_to_chatter("⚡ <em></em><br/>Post Changes to chatter"):::actionCalls
    click Post_Changes_to_chatter "#post_changes_to_chatter" "1944103437"
    
    Add_to_Details_list[\"🟰 <em></em><br/>Add to Details list"/]:::assignments
    click Add_to_Details_list "#add_to_details_list" "3781968440"
    
    
    Information_on_Location_Passport_Present{"<i>🔀 <em></em><br/>Information on Location Passport Present ?</i>"}:::decisionsRemoved
    click Information_on_Location_Passport_Present "#information_on_location_passport_present" "3491349704"
    
    
    Loop_Through_Operating_Hours{{"<b>🔁 <em></em><br/>Loop Through Operating Hours</b>"}}:::loopsChanged
    
    
    click Loop_Through_Operating_Hours "#loop_through_operating_hours" "2939973918"
    
    
    Get_Account_Information[("🔍 <em></em><br/>Get Account Information")]:::recordLookups
    click Get_Account_Information "#get_account_information" "2375899122"
    
    Get_Contract_Manager[("🔍 <em></em><br/>Get Contract Manager")]:::recordLookups
    click Get_Contract_Manager "#get_contract_manager" "1067364005"
    
    Get_Operating_Hours[("🔍 <em></em><br/>Get Operating Hours")]:::recordLookups
    click Get_Operating_Hours "#get_operating_hours" "2178021119"
    
    Get_Service_Territory[("🔍 <em></em><br/>Get Service Territory")]:::recordLookups
    click Get_Service_Territory "#get_service_territory" "3197260144"
    
    Get_Work_Order_Info[("🔍 <em></em><br/>Get Work Order Info")]:::recordLookups
    click Get_Work_Order_Info "#get_work_order_info" "308662686"
    
    Display_Location_Passport_Information(["💻 <em></em><br/>Display Location Passport Information"]):::screens
    click Display_Location_Passport_Information "#display_location_passport_information" "1554028954"
    
    
    No_Location_Passport_Information(["<i>💻 <em></em><br/>No Location Passport Information</i>"]):::screensRemoved
    click No_Location_Passport_Information "#no_location_passport_information" "2172723602"
    
    
    Post_Changes_to_chatter --> END_Post_Changes_to_chatter
    Add_to_Details_list --> Loop_Through_Operating_Hours
    
    Information_on_Location_Passport_Present -.-> |"🟥<i>No</i>"| No_Location_Passport_Information
    Information_on_Location_Passport_Present -.-> |"🟥<i>Yes</i>"| Display_Location_Passport_Information
    
    Loop_Through_Operating_Hours --> |"For Each"|Add_to_Details_list
    
    Loop_Through_Operating_Hours --.-> |"🟥<i>After Last</i>"|Information_on_Location_Passport_Present
    
    Loop_Through_Operating_Hours ===> |"🟩<b>After Last</b>"|Display_Location_Passport_Information
    
    Get_Account_Information --> Get_Operating_Hours
    Get_Contract_Manager --> Post_Changes_to_chatter
    Get_Operating_Hours --> Loop_Through_Operating_Hours
    Get_Service_Territory --> Get_Contract_Manager
    Get_Work_Order_Info --> Get_Account_Information
    Display_Location_Passport_Information --> Get_Service_Territory
    
    No_Location_Passport_Information -.-> END_No_Location_Passport_Information
    
    START -->  Get_Work_Order_Info
    END_Post_Changes_to_chatter(( END )):::endClass
    
    END_No_Location_Passport_Information(( END )):::endClassRemoved
    
    
    
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
    linkStyle 2,3,5,13 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    ## Flow Nodes Details
    
    ### 🟥Information_on_Location_Passport_Present
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Decision</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Information on Location Passport Present ?</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Display_Location_Passport_Information](#display_location_passport_information)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Yes</i></span>|
    
    #### 🟥Rule No (No)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[No_Location_Passport_Information](#no_location_passport_information)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Condition Logic</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>and</i></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>AccountRecord.Access_Information__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Is Null</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>2</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>AccountRecord.Attention_points_for_execution__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Is Null</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>3</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>AccountRecord.OperatingHoursId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Is Null</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>4</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Closing_Days</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Is Null</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    
    ### Loop_Through_Operating_Hours
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>No More Values Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Information_on_Location_Passport_Present](#information_on_location_passport_present)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>No More Values Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Display_Location_Passport_Information](#display_location_passport_information)</b></span>|
    
    ### 🟥No_Location_Passport_Information
    
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Screen</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>No Location Passport Information</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Back</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Finish</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Allow Pause</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Show Footer</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Show Header</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    
    #### 🟥Message_No_Location_Passport_Information
    
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i><p>No location passport information exists for this account.</p></i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Display Text</i></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 19, 2024"

    _Nov 19, 2024, by fpardon-upeo in commit Org state on 2024-11-19 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START"]):::startClass
    click START "#general-information" "743928599"
    
    Post_Changes_to_chatter("⚡ <em></em><br/>Post Changes to chatter"):::actionCalls
    click Post_Changes_to_chatter "#post_changes_to_chatter" "1944103437"
    
    
    Add_to_Details_list[\"<b>🟰 <em></em><br/>Add to Details list</b>"/]:::assignmentsAdded
    click Add_to_Details_list "#add_to_details_list" "3781968440"
    
    
    Information_on_Location_Passport_Present{"<b>🔀 <em></em><br/>Information on Location Passport Present ?</b>"}:::decisionsChanged
    
    
    click Information_on_Location_Passport_Present "#information_on_location_passport_present" "3491349704"
    
    
    
    Loop_Through_Operating_Hours{{"<b>🔁 <em></em><br/>Loop Through Operating Hours</b>"}}:::loopsAdded
    click Loop_Through_Operating_Hours "#loop_through_operating_hours" "2425986851"
    
    
    Get_Account_Information[("<b>🔍 <em></em><br/>Get Account Information</b>")]:::recordLookupsChanged
    
    
    click Get_Account_Information "#get_account_information" "2375899122"
    
    
    Get_Contract_Manager[("🔍 <em></em><br/>Get Contract Manager")]:::recordLookups
    click Get_Contract_Manager "#get_contract_manager" "1067364005"
    
    
    Get_Operating_Hours[("<b>🔍 <em></em><br/>Get Operating Hours</b>")]:::recordLookupsAdded
    click Get_Operating_Hours "#get_operating_hours" "2178021119"
    
    
    Get_Service_Territory[("🔍 <em></em><br/>Get Service Territory")]:::recordLookups
    click Get_Service_Territory "#get_service_territory" "3197260144"
    
    Get_Work_Order_Info[("🔍 <em></em><br/>Get Work Order Info")]:::recordLookups
    click Get_Work_Order_Info "#get_work_order_info" "308662686"
    
    Display_Location_Passport_Information(["<b>💻 <em></em><br/>Display Location Passport Information</b>"]):::screensChanged
    
    
    click Display_Location_Passport_Information "#display_location_passport_information" "1554028954"
    
    
    No_Location_Passport_Information(["💻 <em></em><br/>No Location Passport Information"]):::screens
    click No_Location_Passport_Information "#no_location_passport_information" "2172723602"
    
    Post_Changes_to_chatter --> END_Post_Changes_to_chatter
    
    Add_to_Details_list ==> Loop_Through_Operating_Hours
    
    Information_on_Location_Passport_Present --> |"No"| No_Location_Passport_Information
    Information_on_Location_Passport_Present --> |"Yes"| Display_Location_Passport_Information
    
    Get_Account_Information -.-> Information_on_Location_Passport_Present
    
    Loop_Through_Operating_Hours ==> |"🟩<b>For Each</b>"|Add_to_Details_list
    Loop_Through_Operating_Hours ===> |"🟩<b>After Last</b>"|Information_on_Location_Passport_Present
    Get_Account_Information ==> Get_Operating_Hours
    
    Get_Contract_Manager --> Post_Changes_to_chatter
    
    Get_Operating_Hours ==> Loop_Through_Operating_Hours
    
    Get_Service_Territory --> Get_Contract_Manager
    Get_Work_Order_Info --> Get_Account_Information
    Display_Location_Passport_Information --> Get_Service_Territory
    No_Location_Passport_Information --> END_No_Location_Passport_Information
    START -->  Get_Work_Order_Info
    END_Post_Changes_to_chatter(( END )):::endClass
    END_No_Location_Passport_Information(( END )):::endClass
    
    
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
      
    linkStyle 1,5,6,7,9 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 4 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
    |:-- |:--:|:--:|:--:|:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>OperatingHours_TimeSlots</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>TimeSlot</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>OperatingHoursDetails</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>TimeSlots</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>TimeSlot</b></span>|
    
    ## Flow Nodes Details
    
    ### 🟩Add_to_Details_list
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Assignment</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Add to Details list</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Loop_Through_Operating_Hours](#loop_through_operating_hours)</b></span>|
    
    #### 🟩Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>OperatingHoursDetails</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Add</b></span>|<span style="background-color: #a6e22e; color: black;"><b>formTimeSlotDetail</b></span>|
    
    ### Information_on_Location_Passport_Present
    
    #### Rule No (No)
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>3</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>AccountRecord.Opening_hours__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Is Null</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>3</b></span>|<span style="background-color: #a6e22e; color: black;"><b>AccountRecord.OperatingHoursId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    ### 🟩Loop_Through_Operating_Hours
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Loop</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Loop Through Operating Hours</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Next Value To Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>TimeSlots</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Collection Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OperatingHours_TimeSlots</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Iteration Order</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Asc</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Next Value Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Add_to_Details_list](#add_to_details_list)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>No More Values Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Information_on_Location_Passport_Present](#information_on_location_passport_present)</b></span>|
    
    ### Get_Account_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Queried Fields</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>- Id<br/>- Name<br/>- Access_Information__c<br/>- Attention_points_for_execution__c<br/>- Opening_hours__c<br/>- Closing_Days__c<br/></i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Information_on_Location_Passport_Present](#information_on_location_passport_present)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Id<br/>- Name<br/>- Access_Information__c<br/>- Attention_points_for_execution__c<br/>- Closing_Days__c<br/>- OperatingHoursId<br/></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Operating_Hours](#get_operating_hours)</b></span>|
    
    ### 🟩Get_Operating_Hours
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>TimeSlot</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Operating Hours</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Output Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OperatingHours_TimeSlots</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Id<br/>- StartTime<br/>- EndTime<br/>- DayOfWeek<br/>- Timeslot_Details__c<br/></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Loop_Through_Operating_Hours](#loop_through_operating_hours)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OperatingHoursId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>AccountRecord.OperatingHoursId</b></span>|
    
    ### Display_Location_Passport_Information
    
    #### Opening_Hours
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Value</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!AccountRecord.Opening_hours__c}</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Value</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!OperatingHoursDetails}</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 13, 2024"

    _Nov 13, 2024, by fpardon-upeo in commit Org state on 2024-11-13 00:23 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START"]):::startClass
    click START "#general-information" "743928599"
    
    Post_Changes_to_chatter("⚡ <em></em><br/>Post Changes to chatter"):::actionCalls
    click Post_Changes_to_chatter "#post_changes_to_chatter" "1944103437"
    
    Information_on_Location_Passport_Present{"🔀 <em></em><br/>Information on Location Passport Present ?"}:::decisions
    click Information_on_Location_Passport_Present "#information_on_location_passport_present" "1654036617"
    
    Get_Account_Information[("🔍 <em></em><br/>Get Account Information")]:::recordLookups
    click Get_Account_Information "#get_account_information" "254871352"
    
    Get_Contract_Manager[("🔍 <em></em><br/>Get Contract Manager")]:::recordLookups
    click Get_Contract_Manager "#get_contract_manager" "1067364005"
    
    Get_Service_Territory[("🔍 <em></em><br/>Get Service Territory")]:::recordLookups
    click Get_Service_Territory "#get_service_territory" "3197260144"
    
    Get_Work_Order_Info[("🔍 <em></em><br/>Get Work Order Info")]:::recordLookups
    click Get_Work_Order_Info "#get_work_order_info" "308662686"
    
    Display_Location_Passport_Information(["💻 <em></em><br/>Display Location Passport Information"]):::screens
    click Display_Location_Passport_Information "#display_location_passport_information" "1578684319"
    
    No_Location_Passport_Information(["💻 <em></em><br/>No Location Passport Information"]):::screens
    click No_Location_Passport_Information "#no_location_passport_information" "2172723602"
    
    Post_Changes_to_chatter --> END_Post_Changes_to_chatter
    Information_on_Location_Passport_Present --> |"No"| No_Location_Passport_Information
    Information_on_Location_Passport_Present --> |"Yes"| Display_Location_Passport_Information
    Get_Account_Information --> Information_on_Location_Passport_Present
    Get_Contract_Manager --> Post_Changes_to_chatter
    Get_Service_Territory --> Get_Contract_Manager
    Get_Work_Order_Info --> Get_Account_Information
    Display_Location_Passport_Information --> Get_Service_Territory
    No_Location_Passport_Information --> END_No_Location_Passport_Information
    START -->  Get_Work_Order_Info
    END_Post_Changes_to_chatter(( END )):::endClass
    END_No_Location_Passport_Information(( END )):::endClass
    
    
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
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
    |:-- |:--:|:--:|:--:|:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>LocationPassportRecord</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>SObject</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Location_Passport__c</i></span>|
    
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
    click START "#general-information" "743928599"
    
    Post_Changes_to_chatter("⚡ <em></em><br/>Post Changes to chatter"):::actionCalls
    click Post_Changes_to_chatter "#post_changes_to_chatter" "1944103437"
    
    
    Information_on_Location_Passport_Present{"<b>🔀 <em></em><br/>Information on Location Passport Present ?</b>"}:::decisionsAdded
    click Information_on_Location_Passport_Present "#information_on_location_passport_present" "1654036617"
    
    
    Get_Account_Information[("<b>🔍 <em></em><br/>Get Account Information</b>")]:::recordLookupsChanged
    
    
    click Get_Account_Information "#get_account_information" "254871352"
    
    
    Get_Contract_Manager[("🔍 <em></em><br/>Get Contract Manager")]:::recordLookups
    click Get_Contract_Manager "#get_contract_manager" "1067364005"
    
    Get_Service_Territory[("🔍 <em></em><br/>Get Service Territory")]:::recordLookups
    click Get_Service_Territory "#get_service_territory" "3197260144"
    
    Get_Work_Order_Info[("🔍 <em></em><br/>Get Work Order Info")]:::recordLookups
    click Get_Work_Order_Info "#get_work_order_info" "308662686"
    
    Display_Location_Passport_Information(["💻 <em></em><br/>Display Location Passport Information"]):::screens
    click Display_Location_Passport_Information "#display_location_passport_information" "1578684319"
    
    
    No_Location_Passport_Information(["<b>💻 <em></em><br/>No Location Passport Information</b>"]):::screensAdded
    click No_Location_Passport_Information "#no_location_passport_information" "2172723602"
    
    
    Post_Changes_to_chatter --> END_Post_Changes_to_chatter
    
    Get_Account_Information -.-> Display_Location_Passport_Information
    
    Information_on_Location_Passport_Present ==> |"🟩<b>No</b>"| No_Location_Passport_Information
    Information_on_Location_Passport_Present ==> |"🟩<b>Yes</b>"| Display_Location_Passport_Information
    Get_Account_Information ==> Information_on_Location_Passport_Present
    
    Get_Contract_Manager --> Post_Changes_to_chatter
    Get_Service_Territory --> Get_Contract_Manager
    Get_Work_Order_Info --> Get_Account_Information
    Display_Location_Passport_Information --> Get_Service_Territory
    
    No_Location_Passport_Information ==> END_No_Location_Passport_Information
    
    START -->  Get_Work_Order_Info
    END_Post_Changes_to_chatter(( END )):::endClass
    
    END_No_Location_Passport_Information(( END )):::endClassAdded
    
    
    
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
      
    linkStyle 2,3,4,9 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 1 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    ## Flow Nodes Details
    
    ### 🟩Information_on_Location_Passport_Present
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Information on Location Passport Present ?</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Display_Location_Passport_Information](#display_location_passport_information)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Yes</b></span>|
    
    #### 🟩Rule No (No)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[No_Location_Passport_Information](#no_location_passport_information)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>AccountRecord.Access_Information__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>AccountRecord.Attention_points_for_execution__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>3</b></span>|<span style="background-color: #a6e22e; color: black;"><b>AccountRecord.Opening_hours__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>4</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Closing_Days</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    ### Get_Account_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Display_Location_Passport_Information](#display_location_passport_information)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Information_on_Location_Passport_Present](#information_on_location_passport_present)</b></span>|
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Id</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>LocationPassportRecord.Account__c</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderRecord.AccountId</b></span>|
    
    ### 🟩No_Location_Passport_Information
    
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Screen</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>No Location Passport Information</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Back</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Finish</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Pause</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Show Footer</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Show Header</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    #### 🟩Message_No_Location_Passport_Information
    
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p>No location passport information exists for this account.</p></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 5, 2024"

    _Nov 5, 2024, by fpardon-upeo in commit Org state on 2024-11-05 00:23 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START"]):::startClass
    click START "#general-information" "743928599"
    
    
    Post_Changes_to_chatter("<b>⚡ <em></em><br/>Post Changes to chatter</b>"):::actionCallsAdded
    click Post_Changes_to_chatter "#post_changes_to_chatter" "1944103437"
    
    
    Get_Account_Information[("<b>🔍 <em></em><br/>Get Account Information</b>")]:::recordLookupsChanged
    
    
    click Get_Account_Information "#get_account_information" "920832389"
    
    
    
    Get_Location_Passport_Info[("<i>🔍 <em></em><br/>Get Location Passport Info</i>")]:::recordLookupsRemoved
    click Get_Location_Passport_Info "#get_location_passport_info" "874722932"
    
    Get_Contract_Manager[("<b>🔍 <em></em><br/>Get Contract Manager</b>")]:::recordLookupsAdded
    click Get_Contract_Manager "#get_contract_manager" "1067364005"
    
    
    
    Get_Service_Territory[("<b>🔍 <em></em><br/>Get Service Territory</b>")]:::recordLookupsAdded
    click Get_Service_Territory "#get_service_territory" "3197260144"
    
    
    Get_Work_Order_Info[("<b>🔍 <em></em><br/>Get Work Order Info</b>")]:::recordLookupsChanged
    
    
    click Get_Work_Order_Info "#get_work_order_info" "308662686"
    
    
    Display_Location_Passport_Information(["<b>💻 <em></em><br/>Display Location Passport Information</b>"]):::screensChanged
    
    
    click Display_Location_Passport_Information "#display_location_passport_information" "1578684319"
    
    
    
    Post_Changes_to_chatter ==> END_Post_Changes_to_chatter
    
    Get_Account_Information --> Display_Location_Passport_Information
    
    Get_Location_Passport_Info -.-> Get_Account_Information
    Get_Work_Order_Info -.-> Get_Location_Passport_Info
    Display_Location_Passport_Information -.-> END_Display_Location_Passport_Information
    
    Get_Contract_Manager ==> Post_Changes_to_chatter
    Get_Service_Territory ==> Get_Contract_Manager
    Get_Work_Order_Info ==> Get_Account_Information
    Display_Location_Passport_Information ==> Get_Service_Territory
    
    START -->  Get_Work_Order_Info
    
    END_Display_Location_Passport_Information(( END )):::endClassRemoved
    
    END_Post_Changes_to_chatter(( END )):::endClassAdded
    
    
    
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
      
    linkStyle 0,5,6,7,8 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 2,3,4 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
    |:-- |:--:|:--:|:--:|:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>ContentDocumentlinks</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ContentDocumentLink</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>ServiceTerritoryRecord</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ServiceTerritory</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>UserRecord</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>User</b></span>|
    
    ## Flow Nodes Details
    
    
    ### 🟩Post_Changes_to_chatter
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Action Call</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Post Changes to chatter</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Chatter Post</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>chatterPost</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Flow Transaction Model</b></span>|<span style="background-color: #a6e22e; color: black;"><b>CurrentTransaction</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Name Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>chatterPost</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Offset</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Version Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Text (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>templateChatterText</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Subject Name Or Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderRecord.Id</b></span>|
    
    ### Get_Account_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Queried Fields</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>- Id<br/>- Name<br/></i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Id<br/>- Name<br/>- Access_Information__c<br/>- Attention_points_for_execution__c<br/>- Opening_hours__c<br/>- Closing_Days__c<br/></b></span>|
    
    ### 🟥Get_Location_Passport_Info
    
    ### 🟩Get_Contract_Manager
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Object</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Location_Passport__c</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get Location Passport Info</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>User</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Contract Manager</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Output Reference</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>LocationPassportRecord</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Queried Fields</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>- Id<br/>- Access_Information__c<br/>- Attention_points_for_execution__c<br/>- Account__c<br/>- Opening_hours__c<br/>- Closing_Days__c<br/>- Contact__c<br/>- Name<br/></i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Account_Information](#get_account_information)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Output Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>UserRecord</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Post_Changes_to_chatter](#post_changes_to_chatter)</b></span>|
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Account__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>WorkOrderRecord.AccountId</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ServiceTerritoryRecord.OwnerId</b></span>|
    
    ### 🟩Get_Service_Territory
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ServiceTerritory</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Service Territory</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Output Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ServiceTerritoryRecord</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Id<br/>- OwnerId<br/></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Contract_Manager](#get_contract_manager)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrderRecord.ServiceTerritoryId</b></span>|
    
    ### Get_Work_Order_Info
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Queried Fields</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>- Id<br/>- AccountId<br/></i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Location_Passport_Info](#get_location_passport_info)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Queried Fields</b></span>|<span style="background-color: #a6e22e; color: black;"><b>- Id<br/>- AccountId<br/>- ServiceTerritoryId<br/></b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Account_Information](#get_account_information)</b></span>|
    
    ### Display_Location_Passport_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Service_Territory](#get_service_territory)</b></span>|
    
    #### Access_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Value</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!LocationPassportRecord.Access_Information__c}</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Value</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!AccountRecord.Access_Information__c}</b></span>|
    
    #### Attention_Points_of_Execution
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Value</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!LocationPassportRecord.Attention_points_for_execution__c}</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Value</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!AccountRecord.Attention_points_for_execution__c}</b></span>|
    
    #### Opening_Hours
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Value</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!LocationPassportRecord.Opening_hours__c}</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Value</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!AccountRecord.Opening_hours__c}</b></span>|
    
    #### Closing_Days
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Value</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!LocationPassportRecord.Closing_Days__c}</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Value</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!AccountRecord.Closing_Days__c}</b></span>|
    
    #### 🟩Changes_Needed
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>If any, please indicate here what changes are needed for this Location Passport?</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Large Text Area</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    #### LocationPassportAttachmentsInfo
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i><p><em>To view attachments, go to the location passport record linked to the operational account.</em></p></i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p><em>To view attachments, go to the related files linked to the operational account.</em></p></b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 1, 2024 (Initial)"

    _Nov 1, 2024, by fpardon-upeo in commit Org state on 2024-11-01 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START"]):::startClass
    click START "#general-information" "743928599"
    
    Get_Account_Information[("🔍 <em></em><br/>Get Account Information")]:::recordLookups
    click Get_Account_Information "#get_account_information" "4072692767"
    
    Get_Location_Passport_Info[("🔍 <em></em><br/>Get Location Passport Info")]:::recordLookups
    click Get_Location_Passport_Info "#get_location_passport_info" "874722932"
    
    Get_Work_Order_Info[("🔍 <em></em><br/>Get Work Order Info")]:::recordLookups
    click Get_Work_Order_Info "#get_work_order_info" "3048679562"
    
    Display_Location_Passport_Information(["💻 <em></em><br/>Display Location Passport Information"]):::screens
    click Display_Location_Passport_Information "#display_location_passport_information" "407387293"
    
    Get_Account_Information --> Display_Location_Passport_Information
    Get_Location_Passport_Info --> Get_Account_Information
    Get_Work_Order_Info --> Get_Location_Passport_Info
    Display_Location_Passport_Information --> END_Display_Location_Passport_Information
    START -->  Get_Work_Order_Info
    END_Display_Location_Passport_Information(( END )):::endClass
    
    
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
    |Label|[Location Passport][Mobile Flow][Screen flow] View Location Passport Information|
    |Status|Active|
    |Environments|Default|
    |Interview Label|[Location Passport][Mobile Flow][Screen flow] Get Location Passport Information {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Get_Work_Order_Info](#get_work_order_info)|
    |Next Node|[Get_Work_Order_Info](#get_work_order_info)|
    
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
    |:-- |:--:|:--:|:--:|:--:|:--: |
    |AccountRecord|SObject|⬜|✅|⬜|Account|
    |ContentDocumentLinkRecord|SObject|⬜|✅|⬜|ContentDocumentLink|
    |ContentDocumentRecord|SObject|⬜|✅|⬜|ContentDocument|
    |Id|String|⬜|✅|⬜|<!-- -->|
    |LocationPassportRecord|SObject|⬜|✅|⬜|Location_Passport__c|
    |WorkOrderRecord|SObject|⬜|✅|⬜|WorkOrder|
    
    
    ## Flow Nodes Details
    
    ### Get_Account_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|Account|
    |Label|Get Account Information|
    |Assign Null Values If No Records Found|⬜|
    |Output Reference|AccountRecord|
    |Queried Fields|- Id<br/>- Name<br/>|
    |Connector|[Display_Location_Passport_Information](#display_location_passport_information)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|LocationPassportRecord.Account__c|
    
    
    
    
    ### Get_Location_Passport_Info
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|Location_Passport__c|
    |Label|Get Location Passport Info|
    |Assign Null Values If No Records Found|⬜|
    |Output Reference|LocationPassportRecord|
    |Queried Fields|- Id<br/>- Access_Information__c<br/>- Attention_points_for_execution__c<br/>- Account__c<br/>- Opening_hours__c<br/>- Closing_Days__c<br/>- Contact__c<br/>- Name<br/>|
    |Connector|[Get_Account_Information](#get_account_information)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Account__c| Equal To|WorkOrderRecord.AccountId|
    
    
    
    
    ### Get_Work_Order_Info
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkOrder|
    |Label|Get Work Order Info|
    |Assign Null Values If No Records Found|⬜|
    |Output Reference|WorkOrderRecord|
    |Queried Fields|- Id<br/>- AccountId<br/>|
    |Connector|[Get_Location_Passport_Info](#get_location_passport_info)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|Id|
    
    
    
    
    ### Display_Location_Passport_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Screen|
    |Label|Display Location Passport Information|
    |Allow Back|⬜|
    |Allow Finish|✅|
    |Allow Pause|⬜|
    |Next Or Finish Button Label|Close|
    |Show Footer|✅|
    |Show Header|⬜|
    
    
    #### Account
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Data Type|String|
    |Default Value|AccountRecord.Name|
    |Field Text|Account|
    |Field Type| Input Field|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Disabled|true|
    |Is Read Only|true|
    |Is Required|⬜|
    
    
    
    
    #### Access_Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Default Value|{!LocationPassportRecord.Access_Information__c}|
    |Field Text|Access Information|
    |Field Type| Large Text Area|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Disabled|true|
    |Is Read Only|true|
    |Is Required|⬜|
    
    
    
    
    #### Attention_Points_of_Execution
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Default Value|{!LocationPassportRecord.Attention_points_for_execution__c}|
    |Field Text|Attention Points of Execution|
    |Field Type| Large Text Area|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Disabled|true|
    |Is Read Only|true|
    |Is Required|⬜|
    
    
    
    
    #### Opening_Hours
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Default Value|{!LocationPassportRecord.Opening_hours__c}|
    |Field Text|Opening Hours|
    |Field Type| Large Text Area|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Disabled|true|
    |Is Read Only|true|
    |Is Required|⬜|
    
    
    
    
    #### Closing_Days
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Default Value|{!LocationPassportRecord.Closing_Days__c}|
    |Field Text|Closing Days|
    |Field Type| Large Text Area|
    |Inputs On Next Nav To Assoc Scrn| Use Stored Values|
    |Is Disabled|true|
    |Is Read Only|true|
    |Is Required|⬜|
    
    
    
    
    #### LocationPassportAttachmentsInfo
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Text|<p><em>To view attachments, go to the location passport record linked to the operational account.</em></p>|
    |Field Type| Display Text|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

