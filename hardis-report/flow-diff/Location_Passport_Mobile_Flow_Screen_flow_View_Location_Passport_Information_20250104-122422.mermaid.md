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