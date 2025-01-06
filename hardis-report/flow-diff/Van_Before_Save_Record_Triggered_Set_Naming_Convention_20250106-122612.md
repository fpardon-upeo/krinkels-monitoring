# [Van][Before-Save][Record-Triggered] Set Naming Convention & Inventory Location

## Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record Before Save</b>"]):::startClass
click START "#general-information" "954137355"

Set_Van_Naming_Convention[\"🟰 <em></em><br/>Set Van Naming Convention"/]:::assignments
click Set_Van_Naming_Convention "#set_van_naming_convention" "1884521565"

Set_Van_Naming_Convention --> END_Set_Van_Naming_Convention
START -->  Set_Van_Naming_Convention
END_Set_Van_Naming_Convention(( END )):::endClass


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
|Object|Location|
|Process Type| Auto Launched Flow|
|Trigger Type| Record Before Save|
|Record Trigger Type| Create And Update|
|Label|[Van][Before-Save][Record-Triggered] Set Naming Convention & Inventory Location|
|Status|Active|
|Description|This flow sets the naming convention for a Van and flagged the record as an inventory location. We can link material items only to inventory locations.|
|Environments|Default|
|Interview Label|[Van][Before-Save][Record-Triggered] Set Naming Convention {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|
|Connector|[Set_Van_Naming_Convention](#set_van_naming_convention)|
|Next Node|[Set_Van_Naming_Convention](#set_van_naming_convention)|


## Flow Nodes Details

### Set_Van_Naming_Convention

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Assignment|
|Label|Set Van Naming Convention|


#### Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|$Record.Name| Assign|VanNaming|
|$Record.IsInventoryLocation| Assign|✅|








___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_