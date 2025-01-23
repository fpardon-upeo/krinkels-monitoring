# [ContractLineItem] - [After Save] - Add Default Field Values

## Flow Diagram [(_View History_)](ContractLineItem_After_Save_Add_Default_Field_Values-history.md)

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
click START "#general-information" "3376568231"

Set_Default_Values_From_Contract[("🛠️ <em></em><br/>Set Default Values From Contract")]:::recordUpdates
click Set_Default_Values_From_Contract "#set_default_values_from_contract" "3692061721"

Set_Default_Values_From_Contract --> END_Set_Default_Values_From_Contract
START -->  Set_Default_Values_From_Contract
END_Set_Default_Values_From_Contract(( END )):::endClass


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

<!-- Flow description -->

## General Information

|<!-- -->|<!-- -->|
|:---|:---|
|Object|ContractLineItem|
|Process Type| Auto Launched Flow|
|Trigger Type| Record After Save|
|Record Trigger Type| Create|
|Label|[ContractLineItem] - [After Save] - Add Default Field Values|
|Status|⚠️ Draft|
|Environments|Default|
|Interview Label|[ContractLineItem] - [After Save] - Add Default Field Values {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|
|Connector|[Set_Default_Values_From_Contract](#set_default_values_from_contract)|
|Next Node|[Set_Default_Values_From_Contract](#set_default_values_from_contract)|


## Flow Nodes Details

### Set_Default_Values_From_Contract

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Update|
|Label|Set Default Values From Contract|
|Input Reference|$Record|


#### Input Assignments

|Field|Value|
|:-- |:--: |
|Notify_Customer_When_En_Route__c|$Record.ServiceContract.Notify_Customer_When_En_Route__c|
|Signature_Required__c|$Record.ServiceContract.Signature_Required__c|








___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_