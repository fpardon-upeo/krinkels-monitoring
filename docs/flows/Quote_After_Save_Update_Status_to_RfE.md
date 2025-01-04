# [Quote] - After Save - Update Status to RfE

## Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
click START "#general-information" "2097260325"

Set_Status_to_Ready_for_Execution[("🛠️ <em></em><br/>Set Status to Ready for Execution")]:::recordUpdates
click Set_Status_to_Ready_for_Execution "#set_status_to_ready_for_execution" "3879758838"

Set_Status_to_Ready_for_Execution --> END_Set_Status_to_Ready_for_Execution
START -->  Set_Status_to_Ready_for_Execution
END_Set_Status_to_Ready_for_Execution(( END )):::endClass


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
|Object|Quote|
|Process Type| Auto Launched Flow|
|Trigger Type| Record After Save|
|Record Trigger Type| Update|
|Label|[Quote] - After Save - Update Status to RfE|
|Status|Active|
|Environments|Default|
|Interview Label|[Quote] - After Save - Update Status to RfE {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|
|Connector|[Set_Status_to_Ready_for_Execution](#set_status_to_ready_for_execution)|
|Next Node|[Set_Status_to_Ready_for_Execution](#set_status_to_ready_for_execution)|


#### Filters (logic: **(1 AND 2 AND 3) OR (1 AND 3 AND 4)**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Status| Equal To|Accepted|
|2|Status| Is Changed|✅|
|3|ATAK_Project__c| Not Equal To|stringValue: ''<br/>|
|4|ATAK_Project__c| Is Changed|✅|


## Flow Nodes Details

### Set_Status_to_Ready_for_Execution

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Update|
|Label|Set Status to Ready for Execution|
|Input Reference|$Record|


#### Input Assignments

|Field|Value|
|:-- |:--: |
|Status|Ready for Execution|








___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_