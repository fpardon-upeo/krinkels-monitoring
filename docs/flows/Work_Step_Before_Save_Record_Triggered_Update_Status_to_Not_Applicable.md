# [Work Step][Before-Save][Record-Triggered] Update Status to Not Applicable

## Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record Before Save</b>"]):::startClass
click START "#general-information" "219954915"

Update_Satus_to_Not_Applicable[("🛠️ <em></em><br/>Update Satus to Not Applicable")]:::recordUpdates
click Update_Satus_to_Not_Applicable "#update_satus_to_not_applicable" "1648775989"

Update_Satus_to_Not_Applicable --> END_Update_Satus_to_Not_Applicable
START -->  Update_Satus_to_Not_Applicable
END_Update_Satus_to_Not_Applicable(( END )):::endClass


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
|Object|WorkStep|
|Process Type| Auto Launched Flow|
|Trigger Type| Record Before Save|
|Record Trigger Type| Update|
|Label|[Work Step][Before-Save][Record-Triggered] Update Status to Not Applicable|
|Status|Active|
|Description|When the applicable fields are filled in, this flow updates the value of the work step to 'Not Applicable'.|
|Environments|Default|
|Interview Label|[Work Step][Before-Save][Record-Triggered] Update Status to Not Applicable {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|
|Connector|[Update_Satus_to_Not_Applicable](#update_satus_to_not_applicable)|
|Next Node|[Update_Satus_to_Not_Applicable](#update_satus_to_not_applicable)|


#### Filters (logic: **(1 AND 2) OR (3 AND 4)**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Not_Applicable_Comments__c| Is Changed|✅|
|2|Not_Applicable_Comments__c| Is Null|<!-- -->|
|3|Not_Applicable_Reasons__c| Is Changed|✅|
|4|Not_Applicable_Reasons__c| Is Null|<!-- -->|


## Flow Nodes Details

### Update_Satus_to_Not_Applicable

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Update|
|Label|Update Satus to Not Applicable|
|Input Reference|$Record|


#### Input Assignments

|Field|Value|
|:-- |:--: |
|Status|Not Applicable|








___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_