# [User] [After Update] [RecordTrigered] Create Service Resource

## Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
click START "#general-information" "3204006177"

Add_to_Permission_Set_Assignment_Collection[\"🟰 <em></em><br/>Add to Permission Set Assignment Collection"/]:::assignments
click Add_to_Permission_Set_Assignment_Collection "#add_to_permission_set_assignment_collection" "1979944865"

Add_to_Permission_Set_License_Assignment_Collection[\"🟰 <em></em><br/>Add to Permission Set License Assignment Collection"/]:::assignments
click Add_to_Permission_Set_License_Assignment_Collection "#add_to_permission_set_license_assignment_collection" "30933696"

Create_Permission_Set_Assignment[\"🟰 <em></em><br/>Create Permission Set Assignment"/]:::assignments
click Create_Permission_Set_Assignment "#create_permission_set_assignment" "2837581743"

Create_Permission_Set_License[\"🟰 <em></em><br/>Create Permission Set License"/]:::assignments
click Create_Permission_Set_License "#create_permission_set_license" "1328069964"

Loop_Permission_Set_Licenses{{"🔁 <em></em><br/>Loop Permission Set Licenses"}}:::loops
click Loop_Permission_Set_Licenses "#loop_permission_set_licenses" "4008585794"

Loop_Permission_Sets{{"🔁 <em></em><br/>Loop Permission Sets"}}:::loops
click Loop_Permission_Sets "#loop_permission_sets" "491396196"

Create_Permission_Set_Assignments[("➕ <em></em><br/>Create Permission Set Assignments")]:::recordCreates
click Create_Permission_Set_Assignments "#create_permission_set_assignments" "3166075096"

Create_Platform_Events[("➕ <em></em><br/>Create Platform Events")]:::recordCreates
click Create_Platform_Events "#create_platform_events" "2950796389"

Get_Field_Service_Permission_Sets[("🔍 <em></em><br/>Get Field Service Permission Sets")]:::recordLookups
click Get_Field_Service_Permission_Sets "#get_field_service_permission_sets" "1578232173"

Get_Permission_Set_Licences[("🔍 <em></em><br/>Get Permission Set Licences")]:::recordLookups
click Get_Permission_Set_Licences "#get_permission_set_licences" "2893640959"

Add_to_Permission_Set_Assignment_Collection --> Loop_Permission_Sets
Add_to_Permission_Set_License_Assignment_Collection --> Loop_Permission_Set_Licenses
Create_Permission_Set_Assignment --> Add_to_Permission_Set_Assignment_Collection
Create_Permission_Set_License --> Add_to_Permission_Set_License_Assignment_Collection
Loop_Permission_Set_Licenses --> |"For Each"|Create_Permission_Set_License
Loop_Permission_Set_Licenses ---> |"After Last"|Create_Platform_Events
Loop_Permission_Sets --> |"For Each"|Create_Permission_Set_Assignment
Loop_Permission_Sets ---> |"After Last"|Create_Permission_Set_Assignments
Create_Permission_Set_Assignments --> Get_Permission_Set_Licences
Create_Platform_Events --> END_Create_Platform_Events
Get_Field_Service_Permission_Sets --> Loop_Permission_Sets
Get_Permission_Set_Licences --> Loop_Permission_Set_Licenses
START -->  Get_Field_Service_Permission_Sets
END_Create_Platform_Events(( END )):::endClass


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
|Object|User|
|Process Type| Auto Launched Flow|
|Trigger Type| Record After Save|
|Record Trigger Type| Update|
|Label|[User] [After Update] [RecordTrigered] Create Service Resource|
|Status|Obsolete|
|Environments|Default|
|Interview Label|[User] [After Update] [RecordTrigered] Create Service Resource {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|
|Connector|[Get_Field_Service_Permission_Sets](#get_field_service_permission_sets)|
|Next Node|[Get_Field_Service_Permission_Sets](#get_field_service_permission_sets)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Create_Field_Service_Resource__c| Equal To|✅|
|2|Create_Field_Service_Resource__c| Is Changed|✅|


## Variables

|Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
|:-- |:--:|:--:|:--:|:--:|:--: |
|PermissionSetAssignment|SObject|⬜|⬜|⬜|PermissionSetAssignment|
|PermissionSetAssignmentCollection|SObject|✅|⬜|⬜|PermissionSetAssignment|
|PermissionSetLicense|SObject|⬜|⬜|⬜|PermissionSetLicenseAssign|
|PermissionSetLicenseAssignmentCollection|SObject|✅|⬜|⬜|PermissionSetLicenseAssign|


## Flow Nodes Details

### Add_to_Permission_Set_Assignment_Collection

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Assignment|
|Label|Add to Permission Set Assignment Collection|
|Connector|[Loop_Permission_Sets](#loop_permission_sets)|


#### Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|PermissionSetAssignmentCollection| Add|PermissionSetAssignment|




### Add_to_Permission_Set_License_Assignment_Collection

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Assignment|
|Label|Add to Permission Set License Assignment Collection|
|Connector|[Loop_Permission_Set_Licenses](#loop_permission_set_licenses)|


#### Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|PermissionSetLicenseAssignmentCollection| Add|PermissionSetLicense|




### Create_Permission_Set_Assignment

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Assignment|
|Label|Create Permission Set Assignment|
|Connector|[Add_to_Permission_Set_Assignment_Collection](#add_to_permission_set_assignment_collection)|


#### Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|PermissionSetAssignment.IsActive| Assign|✅|
|PermissionSetAssignment.AssigneeId| Assign|$Record.Id|
|PermissionSetAssignment.PermissionSetId| Assign|Loop_Permission_Sets.Id|




### Create_Permission_Set_License

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Assignment|
|Label|Create Permission Set License|
|Connector|[Add_to_Permission_Set_License_Assignment_Collection](#add_to_permission_set_license_assignment_collection)|


#### Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|PermissionSetLicense.AssigneeId| Assign|$Record.Id|
|PermissionSetLicense.PermissionSetLicenseId| Assign|Loop_Permission_Set_Licenses.Id|




### Loop_Permission_Set_Licenses

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Loop|
|Label|Loop Permission Set Licenses|
|Collection Reference|[Get_Permission_Set_Licences](#get_permission_set_licences)|
|Iteration Order|Asc|
|Next Value Connector|[Create_Permission_Set_License](#create_permission_set_license)|
|No More Values Connector|[Create_Platform_Events](#create_platform_events)|


### Loop_Permission_Sets

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Loop|
|Label|Loop Permission Sets|
|Collection Reference|[Get_Field_Service_Permission_Sets](#get_field_service_permission_sets)|
|Iteration Order|Asc|
|Next Value Connector|[Create_Permission_Set_Assignment](#create_permission_set_assignment)|
|No More Values Connector|[Create_Permission_Set_Assignments](#create_permission_set_assignments)|


### Create_Permission_Set_Assignments

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Create|
|Label|Create Permission Set Assignments|
|Input Reference|PermissionSetAssignmentCollection|
|Connector|[Get_Permission_Set_Licences](#get_permission_set_licences)|


### Create_Platform_Events

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Create|
|Object|Operator_Created_Event__e|
|Label|Create Platform Events|
|Store Output Automatically|✅|


#### Input Assignments

|Field|Value|
|:-- |:--: |
|User_Id__c|$Record.Id|




### Get_Field_Service_Permission_Sets

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|PermissionSet|
|Label|Get Field Service Permission Sets|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|⬜|
|Store Output Automatically|✅|
|Connector|[Loop_Permission_Sets](#loop_permission_sets)|


#### Filters (logic: **or**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Label| Equal To|Field Service Mobile License|
|2|Label| Equal To|Field Service Resource License|
|3|Label| Equal To|Field Service Resource Permissions|




### Get_Permission_Set_Licences

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|PermissionSetLicense|
|Label|Get Permission Set Licences|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|⬜|
|Store Output Automatically|✅|
|Connector|[Loop_Permission_Set_Licenses](#loop_permission_set_licenses)|


#### Filters (logic: **or**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|MasterLabel| Equal To|Field Service Mobile|
|2|MasterLabel| Equal To|Field Service Scheduling|








___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_