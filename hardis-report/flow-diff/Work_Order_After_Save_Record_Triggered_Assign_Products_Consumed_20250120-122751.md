<span style="background-color: #a6e22e; color: black;"><b>🟩# [Work Order][After-Save][Record-Triggered] Assign Products Consumed</b></span>

## 🟩Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["<b>START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b></b>"]):::startClassAdded
click START "#general-information" "1878252856"

Add_to_Collection[\"<b>🟰 <em></em><br/>Add to Collection</b>"/]:::assignmentsAdded
click Add_to_Collection "#add_to_collection" "349013536"

Set_ProductConsumed[\"<b>🟰 <em></em><br/>Set ProductConsumed</b>"/]:::assignmentsAdded
click Set_ProductConsumed "#set_productconsumed" "2512355329"

Loop_Material_Items{{"<b>🔁 <em></em><br/>Loop Material Items</b>"}}:::loopsAdded
click Loop_Material_Items "#loop_material_items" "2738472502"

Create_Products_Consumed[("<b>➕ <em></em><br/>Create Products Consumed</b>")]:::recordCreatesAdded
click Create_Products_Consumed "#create_products_consumed" "497010901"

Get_Assigned_Crew_Resource[("<b>🔍 <em></em><br/>Get Assigned Crew Resource</b>")]:::recordLookupsAdded
click Get_Assigned_Crew_Resource "#get_assigned_crew_resource" "3905967631"

Get_Material_Items[("<b>🔍 <em></em><br/>Get Material Items</b>")]:::recordLookupsAdded
click Get_Material_Items "#get_material_items" "4243110491"

Get_Service_Appointment[("<b>🔍 <em></em><br/>Get Service Appointment</b>")]:::recordLookupsAdded
click Get_Service_Appointment "#get_service_appointment" "892165293"

Add_to_Collection ==> Loop_Material_Items
Set_ProductConsumed ==> Add_to_Collection
Loop_Material_Items ==> |"🟩<b>For Each</b>"|Set_ProductConsumed
Loop_Material_Items ===> |"🟩<b>After Last</b>"|Create_Products_Consumed
Create_Products_Consumed ==> END_Create_Products_Consumed
Get_Assigned_Crew_Resource ==> Get_Material_Items
Get_Material_Items ==> Loop_Material_Items
Get_Service_Appointment ==> Get_Assigned_Crew_Resource
START ==>  Get_Service_Appointment
END_Create_Products_Consumed(( END )):::endClassAdded


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



classDef actionCallsAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef assignmentsAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef collectionProcessorsAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef customErrorsAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef decisionsAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef loopsAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordCreatesAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordDeletesAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordLookupsAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordUpdatesAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef screensAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef subflowsAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef startClassAdded fill:green,color:white,stroke-width:4px,text-decoration:none,max-height:100px

classDef actionCallsRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef assignmentsRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef collectionProcessorsRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef customErrorsRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef decisionsRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef loopsRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordCreatesRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordDeletesRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordLookupsRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordUpdatesRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef screensRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef subflowsRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef startClassRemoved fill:red,color:white,stroke-width:4px,text-decoration:none,max-height:100px

classDef actionCallsChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef assignmentsChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef collectionProcessorsChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef customErrorsChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef decisionsChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef loopsChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordCreatesChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordDeletesChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordLookupsChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef recordUpdatesChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef screensChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef subflowsChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
classDef startClassChanged fill:orange,color:white,stroke-width:4px,text-decoration:none,max-height:100px
  
linkStyle 0,1,2,3,4,5,6,7,8 stroke:#00ff00,stroke-width:4px,color:green;
```

<span style="background-color: #a6e22e; color: black;"><b>🟩<!-- Flow description --></b></span>

## 🟩General Information

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkOrder</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Process Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Auto Launched Flow</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Trigger Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Record After Save</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Record Trigger Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Update</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Work Order][After-Save][Record-Triggered] Assign Products Consumed</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Active</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Environments</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Default</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Interview Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Work Order][After-Save][Record-Triggered] Assign Products Consumed {!$Flow.CurrentDateTime}</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b> Builder Type (PM)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LightningFlowBuilder</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b> Canvas Mode (PM)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>AUTO_LAYOUT_CANVAS</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b> Origin Builder Type (PM)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LightningFlowBuilder</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Service_Appointment](#get_service_appointment)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Next Node</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Service_Appointment](#get_service_appointment)</b></span>|


#### 🟩Filters (logic: **and**)

|🟩<span style="background-color: #a6e22e; color: black;"><b>Filter Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Changed</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Scheduled</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>3</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Production_Work__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|


## 🟩Variables

|🟩<span style="background-color: #a6e22e; color: black;"><b>Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Is Collection</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Is Input</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Is Output</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Object Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Description</b></span>|
|:-- |:--:|:--:|:--:|:--:|:--:|:--  |
|🟩<span style="background-color: #a6e22e; color: black;"><b>productConsumed</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ProductConsumed</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>productConsumedCollection</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ProductConsumed</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|


## 🟩Flow Nodes Details

### 🟩Add_to_Collection

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Assignment</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Add to Collection</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Loop_Material_Items](#loop_material_items)</b></span>|


#### 🟩Assignments

|🟩<span style="background-color: #a6e22e; color: black;"><b>Assign To Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>productConsumedCollection</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Add</b></span>|<span style="background-color: #a6e22e; color: black;"><b>productConsumed</b></span>|




### 🟩Set_ProductConsumed

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Assignment</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Set ProductConsumed</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Add_to_Collection](#add_to_collection)</b></span>|


#### 🟩Assignments

|🟩<span style="background-color: #a6e22e; color: black;"><b>Assign To Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>productConsumed.WorkOrderId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Id</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>productConsumed.ProductItemId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Loop_Material_Items.Id</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>productConsumed.QuantityConsumed</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|




### 🟩Loop_Material_Items

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Loop</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Loop Material Items</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Collection Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Material_Items](#get_material_items)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Iteration Order</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Asc</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Next Value Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Set_ProductConsumed](#set_productconsumed)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>No More Values Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Create_Products_Consumed](#create_products_consumed)</b></span>|


### 🟩Create_Products_Consumed

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Create</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Create Products Consumed</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Input Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>productConsumedCollection</b></span>|


### 🟩Get_Assigned_Crew_Resource

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>AssignedResource</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Assigned Crew Resource</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Material_Items](#get_material_items)</b></span>|


#### 🟩Filters (logic: **and**)

|🟩<span style="background-color: #a6e22e; color: black;"><b>Filter Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ServiceAppointmentId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Service_Appointment.Id</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Resource_Is_A_Person__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|




### 🟩Get_Material_Items

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ProductItem</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Material Items</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Loop_Material_Items](#loop_material_items)</b></span>|


#### 🟩Filters (logic: **and**)

|🟩<span style="background-color: #a6e22e; color: black;"><b>Filter Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LocationId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Assigned_Crew_Resource.ServiceResource.LocationId</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Is_Temporary__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|




### 🟩Get_Service_Appointment

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ServiceAppointment</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Service Appointment</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Assigned_Crew_Resource](#get_assigned_crew_resource)</b></span>|


#### 🟩Filters (logic: **and**)

|🟩<span style="background-color: #a6e22e; color: black;"><b>Filter Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ParentRecordId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Id</b></span>|








___

<span style="background-color: #a6e22e; color: black;"><b>🟩_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_</b></span>