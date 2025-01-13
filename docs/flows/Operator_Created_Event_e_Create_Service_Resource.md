# [Operator_Created_Event__e] - Create Service Resource

## Flow Diagram [(_View History_)](Operator_Created_Event_e_Create_Service_Resource-history.md)

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Platform Event</b>"]):::startClass
click START "#general-information" "4124260791"

Check_Manager_Territory{"🔀 <em></em><br/>Check Manager Territory"}:::decisions
click Check_Manager_Territory "#check_manager_territory" "1813888115"

Create_Service_Resource[("➕ <em></em><br/>Create Service Resource")]:::recordCreates
click Create_Service_Resource "#create_service_resource" "1054185431"

Create_Service_Territory_Member[("➕ <em></em><br/>Create Service Territory Member")]:::recordCreates
click Create_Service_Territory_Member "#create_service_territory_member" "810640793"

Get_Manager_Territory[("🔍 <em></em><br/>Get Manager Territory")]:::recordLookups
click Get_Manager_Territory "#get_manager_territory" "3963422043"

Get_User_Details[("🔍 <em></em><br/>Get User Details")]:::recordLookups
click Get_User_Details "#get_user_details" "3914770464"

Check_Manager_Territory --> |"Found"| Create_Service_Territory_Member
Check_Manager_Territory --> |"Default Outcome"| END_Check_Manager_Territory
Create_Service_Resource --> Check_Manager_Territory
Create_Service_Territory_Member --> END_Create_Service_Territory_Member
Get_Manager_Territory --> Create_Service_Resource
Get_User_Details --> Get_Manager_Territory
START -->  Get_User_Details
END_Check_Manager_Territory(( END )):::endClass
END_Create_Service_Territory_Member(( END )):::endClass


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
|Object|Operator_Created_Event__e|
|Process Type| Auto Launched Flow|
|Trigger Type| Platform Event|
|Label|[Operator_Created_Event__e] - Create Service Resource|
|Status|Obsolete|
|Flow Run As User|TriggeringUser|
|Environments|Default|
|Interview Label|[] {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|
|Connector|[Get_User_Details](#get_user_details)|
|Next Node|[Get_User_Details](#get_user_details)|


## Flow Nodes Details

### Check_Manager_Territory

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Decision|
|Label|Check Manager Territory|
|Default Connector Label|Default Outcome|


#### Rule Found (Found)

|<!-- -->|<!-- -->|
|:---|:---|
|Connector|[Create_Service_Territory_Member](#create_service_territory_member)|
|Condition Logic|and|




|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|1|[Get_Manager_Territory](#get_manager_territory)| Is Null|⬜|




### Create_Service_Resource

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Create|
|Object|ServiceResource|
|Label|Create Service Resource|
|Store Output Automatically|✅|
|Connector|[Check_Manager_Territory](#check_manager_territory)|


#### Input Assignments

|Field|Value|
|:-- |:--: |
|IsActive|✅|
|IsOptimizationCapable|✅|
|Name|NameOfUser|
|RelatedRecordId|$Record.User_Id__c|
|ResourceType|T|




### Create_Service_Territory_Member

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Create|
|Object|ServiceTerritoryMember|
|Label|Create Service Territory Member|
|Store Output Automatically|✅|


#### Input Assignments

|Field|Value|
|:-- |:--: |
|EffectiveStartDate|$Flow.CurrentDate|
|ServiceResourceId|$Record.User_Id__c|
|ServiceTerritoryId|Get_Manager_Territory.Id|




### Get_Manager_Territory

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|ServiceTerritory|
|Label|Get Manager Territory|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|✅|
|Store Output Automatically|✅|
|Connector|[Create_Service_Resource](#create_service_resource)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Main_Responsible_Atak_Code__c| Equal To|Get_User_Details.Manager.ATAK_Code__c|




### Get_User_Details

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|User|
|Label|Get User Details|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|✅|
|Store Output Automatically|✅|
|Connector|[Get_Manager_Territory](#get_manager_territory)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Id| Equal To|$Record.User_Id__c|








___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_