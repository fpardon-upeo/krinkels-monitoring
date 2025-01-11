# Mileage Entry - Before Save

## Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record Before Save</b>"]):::startClass
click START "#general-information" "792803680"

Code_ATAK{"🔀 <em></em><br/>Code ATAK"}:::decisions
click Code_ATAK "#code_atak" "2804201118"

Update_ATAK_Codes[("🛠️ <em></em><br/>Update ATAK Codes")]:::recordUpdates
click Update_ATAK_Codes "#update_atak_codes" "2292234468"

Code_ATAK --> |"Needs Update"| Update_ATAK_Codes
Code_ATAK --> |"Default Outcome"| END_Code_ATAK
Update_ATAK_Codes --> END_Update_ATAK_Codes
START -->  Code_ATAK
END_Code_ATAK(( END )):::endClass
END_Update_ATAK_Codes(( END )):::endClass


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
|Object|Mileage_Entry__c|
|Process Type| Auto Launched Flow|
|Trigger Type| Record Before Save|
|Record Trigger Type| Create And Update|
|Label|Mileage Entry - Before Save|
|Status|⚠️ Draft|
|Description|This flow is to update and automatically fill in specific fields|
|Environments|Default|
|Interview Label|Mileage Entry - Before Save {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|
|Connector|[Code_ATAK](#code_atak)|
|Next Node|[Code_ATAK](#code_atak)|


## Formulas

|Name|Data Type|Expression|Description|
|:-- |:--:|:-- |:--  |
|CalculatedATAKCode|String|IF(TEXT($Record.Allowance_Type__c) = "Own Vehicle", "KMEV",<br/>  IF(AND(TEXT($Record.Starting_Location_Type__c) = "Home", <br/>          TEXT($Record.Ending_Location_Type__c) = "Customer", <br/>          TEXT($Record.Allowance_Type__c) = "Driver (with passenger)"), "KMAD",<br/>    IF(AND(TEXT($Record.Starting_Location_Type__c) = "Customer", <br/>            TEXT($Record.Ending_Location_Type__c) = "Home", <br/>            TEXT($Record.Allowance_Type__c) = "Driver (with passenger)"), "KMBD",<br/>      IF(AND(TEXT($Record.Starting_Location_Type__c) = "Home", <br/>              TEXT($Record.Ending_Location_Type__c) = "Customer", <br/>              TEXT($Record.Allowance_Type__c) = "Driver (no passenger)"), "KMAD",<br/>        IF(AND(TEXT($Record.Starting_Location_Type__c) = "Customer", <br/>                TEXT($Record.Ending_Location_Type__c) = "Home", <br/>                TEXT($Record.Allowance_Type__c) = "Driver (no passenger)"), "KMBD",<br/>          IF(AND(TEXT($Record.Starting_Location_Type__c) = "Home", <br/>                  TEXT($Record.Ending_Location_Type__c) = "Customer", <br/>                  TEXT($Record.Allowance_Type__c) = "Passenger"), "KMAP",<br/>            IF(AND(TEXT($Record.Starting_Location_Type__c) = "Customer", <br/>                    TEXT($Record.Ending_Location_Type__c) = "Home", <br/>                    TEXT($Record.Allowance_Type__c) = "Passenger"), "KMBP",<br/>              ""<br/>            )<br/>          )<br/>        )<br/>      )<br/>    )<br/>  )<br/>)|<!-- -->|
|CalculatedSoccode|String|IF(TEXT($Record.Allowance_Type__c) = "Own Vehicle", "3301",<br/>  IF(AND(TEXT($Record.Starting_Location_Type__c) = "Home", <br/>          TEXT($Record.Ending_Location_Type__c) = "Customer", <br/>          TEXT($Record.Allowance_Type__c) = "Driver (with passenger)"), "3210",<br/>    IF(AND(TEXT($Record.Starting_Location_Type__c) = "Customer", <br/>            TEXT($Record.Ending_Location_Type__c) = "Home", <br/>            TEXT($Record.Allowance_Type__c) = "Driver (with passenger)"), "3210",<br/>      IF(AND(TEXT($Record.Starting_Location_Type__c) = "Home", <br/>              TEXT($Record.Ending_Location_Type__c) = "Customer", <br/>              TEXT($Record.Allowance_Type__c) = "Driver (no passenger)"), "3210",<br/>        IF(AND(TEXT($Record.Starting_Location_Type__c) = "Customer", <br/>                TEXT($Record.Ending_Location_Type__c) = "Home", <br/>                TEXT($Record.Allowance_Type__c) = "Driver (no passenger)"), "3210",<br/>          IF(AND(TEXT($Record.Starting_Location_Type__c) = "Home", <br/>                  TEXT($Record.Ending_Location_Type__c) = "Customer", <br/>                  TEXT($Record.Allowance_Type__c) = "Passenger"), "3210",<br/>            IF(AND(TEXT($Record.Starting_Location_Type__c) = "Customer", <br/>                    TEXT($Record.Ending_Location_Type__c) = "Home", <br/>                    TEXT($Record.Allowance_Type__c) = "Passenger"), "3210",<br/>              ""<br/>            )<br/>          )<br/>        )<br/>      )<br/>    )<br/>  )<br/>)|<!-- -->|


## Flow Nodes Details

### Code_ATAK

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Decision|
|Label|Code ATAK|
|Default Connector Label|Default Outcome|


#### Rule Needs_Update (Needs Update)

|<!-- -->|<!-- -->|
|:---|:---|
|Connector|[Update_ATAK_Codes](#update_atak_codes)|
|Condition Logic|or|




|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|1|$Record.Codes_ATAK_Limbus__c| Is Null|✅|
|2|$Record.Starting_Mileage__c| Is Changed|✅|
|3|$Record.Ending_Mileage__c| Is Changed|✅|
|4|$Record.Starting_Location_Type__c| Is Changed|✅|
|5|$Record.Ending_Location_Type__c| Is Changed|✅|




### Update_ATAK_Codes

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Update|
|Label|Update ATAK Codes|
|Input Reference|$Record|


#### Input Assignments

|Field|Value|
|:-- |:--: |
|Codes_ATAK_Limbus__c|CalculatedATAKCode|
|Soccode__c|CalculatedSoccode|








___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_