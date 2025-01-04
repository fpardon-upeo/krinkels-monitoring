# [Location Passport][Mobile Flow][Screen flow] View Location Passport Information

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