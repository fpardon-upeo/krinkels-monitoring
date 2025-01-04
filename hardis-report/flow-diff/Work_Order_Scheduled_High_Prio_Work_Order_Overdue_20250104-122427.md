# [Work Order] [Scheduled] High Prio Work Order Overdue

## Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Scheduled</b>"]):::startClass
click START "#general-information" "4093599864"

Send_Delay_Notification_to_Contract_Manager("⚡ <em></em><br/>Send Delay Notification to Contract Manager"):::actionCalls
click Send_Delay_Notification_to_Contract_Manager "#send_delay_notification_to_contract_manager" "1594758737"

Assign_Recipient_ID[\"🟰 <em></em><br/>Assign Recipient ID"/]:::assignments
click Assign_Recipient_ID "#assign_recipient_id" "2605193809"

Get_Contract_Manager[("🔍 <em></em><br/>Get Contract Manager")]:::recordLookups
click Get_Contract_Manager "#get_contract_manager" "1821092581"

Get_Custom_Notification[("🔍 <em></em><br/>Get Custom Notification")]:::recordLookups
click Get_Custom_Notification "#get_custom_notification" "1337287735"

Send_Delay_Notification_to_Contract_Manager --> END_Send_Delay_Notification_to_Contract_Manager
Assign_Recipient_ID --> Get_Custom_Notification
Get_Contract_Manager --> Assign_Recipient_ID
Get_Custom_Notification --> Send_Delay_Notification_to_Contract_Manager
START -->  Get_Contract_Manager
END_Send_Delay_Notification_to_Contract_Manager(( END )):::endClass


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
|Object|WorkOrder|
|Process Type| Auto Launched Flow|
|Trigger Type| Scheduled|
|Label|[Work Order] [Scheduled] High Prio Work Order Overdue|
|Status|⚠️ Draft|
|Description|sends notification to Contract Manager when a high prio work order is overdue|
|Environments|Default|
|Interview Label|[Work Order] [Scheduled] High Prio Work Order Overdue {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|
|Connector|[Get_Contract_Manager](#get_contract_manager)|
|Next Node|[Get_Contract_Manager](#get_contract_manager)|


#### Schedules

|Frequency|Start Date|Start Time|
|:-- |:--:|:--: |
|Daily|Oct 25, 2024|01:15|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Priority| Equal To|High|


## Variables

|Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
|:-- |:--:|:--:|:--:|:--:|:--: |
|varRecipientIDs|String|✅|⬜|⬜|<!-- -->|


## Text Templates

|Name|Text|
|:-- |:--  |
|NotificationBody|The Work Order "{!$Record.WorkOrderNumber}" for High Priority Customer {!$Record.Account.Name} is overdue!|
|NotificationTitle|Work Order "{!$Record.WorkOrderNumber}" overdue!|


## Flow Nodes Details

### Send_Delay_Notification_to_Contract_Manager

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Action Call|
|Label|Send Delay Notification to Contract Manager|
|Action Type|Custom Notification Action|
|Action Name|customNotificationAction|
|Description|Sends the notification to the CM|
|Flow Transaction Model|CurrentTransaction|
|Name Segment|customNotificationAction|
|Offset|0|
|Version Segment|1|
|Custom Notif Type Id (input)|{!Get_Custom_Notification.Id}|
|Recipient Ids (input)|varRecipientIDs|
|Title (input)|NotificationTitle|
|Body (input)|NotificationBody|
|Target Id (input)|{!$Record.Id}|
|Target Page Ref (input)|{!$Record.Id}|


### Assign_Recipient_ID

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Assignment|
|Label|Assign Recipient ID|
|Connector|[Get_Custom_Notification](#get_custom_notification)|


#### Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|varRecipientIDs| Add|{!Get_Contract_Manager.Id}|




### Get_Contract_Manager

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|User|
|Label|Get Contract Manager|
|Description|Get the correct person to notify|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|✅|
|Store Output Automatically|✅|
|Connector|[Assign_Recipient_ID](#assign_recipient_id)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Id| Equal To|$Record.ServiceContract.OwnerId|




### Get_Custom_Notification

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|CustomNotificationType|
|Label|Get Custom Notification|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|✅|
|Store Output Automatically|✅|
|Connector|[Send_Delay_Notification_to_Contract_Manager](#send_delay_notification_to_contract_manager)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|DeveloperName| Equal To|Standard_Notification|








___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_