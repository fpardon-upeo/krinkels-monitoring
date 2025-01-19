<span style="background-color: #a6e22e; color: black;"><b>🟩# [Work Step][After-Save][Record-Triggered] Relink Photo to LMRA record</b></span>

## 🟩Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["<b>START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b></b>"]):::startClassAdded
click START "#general-information" "1048398234"

Collect_Content_Document_Ids[\"<b>🟰 <em></em><br/>Collect Content Document Ids</b>"/]:::assignmentsAdded
click Collect_Content_Document_Ids "#collect_content_document_ids" "1070634303"

Increment_FileCounter[\"<b>🟰 <em></em><br/>Increment FileCounter</b>"/]:::assignmentsAdded
click Increment_FileCounter "#increment_filecounter" "2234302930"

Link_Files_To_WO[\"<b>🟰 <em></em><br/>Link Files To WO</b>"/]:::assignmentsAdded
click Link_Files_To_WO "#link_files_to_wo" "3416229011"

Set_Content_Document_Collection[\"<b>🟰 <em></em><br/>Set Content Document Collection</b>"/]:::assignmentsAdded
click Set_Content_Document_Collection "#set_content_document_collection" "910719466"

Set_Title[\"<b>🟰 <em></em><br/>Set Title</b>"/]:::assignmentsAdded
click Set_Title "#set_title" "2743319961"

Files_Retrieved{"<b>🔀 <em></em><br/>Files Retrieved ?</b>"}:::decisionsAdded
click Files_Retrieved "#files_retrieved" "3734517596"

Loop_Through_Content_Document{{"<b>🔁 <em></em><br/>Loop Through Content Document</b>"}}:::loopsAdded
click Loop_Through_Content_Document "#loop_through_content_document" "4207084913"

Loop_Through_Content_Document_Links{{"<b>🔁 <em></em><br/>Loop Through Content Document Links</b>"}}:::loopsAdded
click Loop_Through_Content_Document_Links "#loop_through_content_document_links" "2183036775"

Loop_Through_Files{{"<b>🔁 <em></em><br/>Loop Through Files</b>"}}:::loopsAdded
click Loop_Through_Files "#loop_through_files" "646313633"

Create_Files_on_Related_WO[("<b>➕ <em></em><br/>Create Files on Related WO</b>")]:::recordCreatesAdded
click Create_Files_on_Related_WO "#create_files_on_related_wo" "510525524"

Get_Content_Document_Information[("<b>🔍 <em></em><br/>Get Content Document Information</b>")]:::recordLookupsAdded
click Get_Content_Document_Information "#get_content_document_information" "708484929"

Get_Content_Document_Link[("<b>🔍 <em></em><br/>Get Content Document Link</b>")]:::recordLookupsAdded
click Get_Content_Document_Link "#get_content_document_link" "2592306955"

Get_LMRA[("<b>🔍 <em></em><br/>Get LMRA</b>")]:::recordLookupsAdded
click Get_LMRA "#get_lmra" "4120573446"

Update_Files_Title_Related_to_WO_Step[("<b>🛠️ <em></em><br/>Update Files Title Related to WO Step</b>")]:::recordUpdatesAdded
click Update_Files_Title_Related_to_WO_Step "#update_files_title_related_to_wo_step" "611386255"

Collect_Content_Document_Ids ==> Loop_Through_Content_Document_Links
Increment_FileCounter ==> Set_Content_Document_Collection
Link_Files_To_WO ==> Loop_Through_Files
Set_Content_Document_Collection ==> Loop_Through_Content_Document
Set_Title ==> Increment_FileCounter
Files_Retrieved ==> |"🟩<b>Yes</b>"| Loop_Through_Content_Document_Links
Files_Retrieved ==> |"🟩<b>No</b>"| END_Files_Retrieved
Loop_Through_Content_Document ==> |"🟩<b>For Each</b>"|Set_Title
Loop_Through_Content_Document ===> |"🟩<b>After Last</b>"|Update_Files_Title_Related_to_WO_Step
Loop_Through_Content_Document_Links ==> |"🟩<b>For Each</b>"|Collect_Content_Document_Ids
Loop_Through_Content_Document_Links ===> |"🟩<b>After Last</b>"|Get_Content_Document_Information
Loop_Through_Files ==> |"🟩<b>For Each</b>"|Link_Files_To_WO
Loop_Through_Files ===> |"🟩<b>After Last</b>"|Create_Files_on_Related_WO
Create_Files_on_Related_WO ==> END_Create_Files_on_Related_WO
Get_Content_Document_Information ==> Loop_Through_Content_Document
Get_Content_Document_Link ==> Files_Retrieved
Get_LMRA ==> Loop_Through_Files
Update_Files_Title_Related_to_WO_Step ==> Get_LMRA
START ==>  Get_Content_Document_Link
END_Files_Retrieved(( END )):::endClassAdded
END_Create_Files_on_Related_WO(( END )):::endClassAdded


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
  
linkStyle 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18 stroke:#00ff00,stroke-width:4px,color:green;
```

<span style="background-color: #a6e22e; color: black;"><b>🟩<!-- Flow description --></b></span>

## 🟩General Information

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>WorkStep</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Process Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Auto Launched Flow</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Trigger Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Record After Save</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Record Trigger Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Create And Update</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Work Step][After-Save][Record-Triggered] Relink Photo to LMRA record</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Active</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Environments</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Default</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Interview Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Work Step][After-Save][Record-Triggered] Relink Photo to LMRA record {!$Flow.CurrentDateTime}</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b> Builder Type (PM)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LightningFlowBuilder</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b> Canvas Mode (PM)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>AUTO_LAYOUT_CANVAS</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b> Origin Builder Type (PM)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LightningFlowBuilder</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Content_Document_Link](#get_content_document_link)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Next Node</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Content_Document_Link](#get_content_document_link)</b></span>|


#### 🟩Filters (logic: **and**)

|🟩<span style="background-color: #a6e22e; color: black;"><b>Filter Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Changed</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Completed</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>3</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LMRA</b></span>|


## 🟩Variables

|🟩<span style="background-color: #a6e22e; color: black;"><b>Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Is Collection</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Is Input</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Is Output</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Object Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Description</b></span>|
|:-- |:--:|:--:|:--:|:--:|:--:|:--  |
|🟩<span style="background-color: #a6e22e; color: black;"><b>ContentDocumentCollection</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ContentDocument</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>ContentDocumentIdCollection</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>ContentDocumentRecord</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ContentDocument</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>FileCounter</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Number</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>RelinkCollection</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ContentDocumentLink</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>RelinkRecord</b></span>|<span style="background-color: #a6e22e; color: black;"><b>SObject</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ContentDocumentLink</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|


## 🟩Formulas

|🟩<span style="background-color: #a6e22e; color: black;"><b>Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Expression</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Description</b></span>|
|:-- |:--:|:-- |:--  |
|🟩<span style="background-color: #a6e22e; color: black;"><b>TitleFormat</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|<span style="background-color: #a6e22e; color: black;"><b>"LMRA - " + {!Loop_Through_Content_Document.Title} +"_"+TEXT({!FileCounter})</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|


## 🟩Flow Nodes Details

### 🟩Collect_Content_Document_Ids

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Assignment</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Collect Content Document Ids</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Loop_Through_Content_Document_Links](#loop_through_content_document_links)</b></span>|


#### 🟩Assignments

|🟩<span style="background-color: #a6e22e; color: black;"><b>Assign To Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>ContentDocumentIdCollection</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Add</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Loop_Through_Content_Document_Links.ContentDocumentId</b></span>|




### 🟩Increment_FileCounter

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Assignment</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Increment FileCounter</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Set_Content_Document_Collection](#set_content_document_collection)</b></span>|


#### 🟩Assignments

|🟩<span style="background-color: #a6e22e; color: black;"><b>Assign To Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>FileCounter</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Add</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|




### 🟩Link_Files_To_WO

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Assignment</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Link Files To WO</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Loop_Through_Files](#loop_through_files)</b></span>|


#### 🟩Assignments

|🟩<span style="background-color: #a6e22e; color: black;"><b>Assign To Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>RelinkRecord.ContentDocumentId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Loop_Through_Files.ContentDocumentId</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>RelinkRecord.LinkedEntityId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_LMRA.Id</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>RelinkCollection</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Add</b></span>|<span style="background-color: #a6e22e; color: black;"><b>RelinkRecord</b></span>|




### 🟩Set_Content_Document_Collection

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Assignment</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Set Content Document Collection</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Loop_Through_Content_Document](#loop_through_content_document)</b></span>|


#### 🟩Assignments

|🟩<span style="background-color: #a6e22e; color: black;"><b>Assign To Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>ContentDocumentCollection</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Add</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ContentDocumentRecord</b></span>|




### 🟩Set_Title

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Assignment</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Set Title</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Increment_FileCounter](#increment_filecounter)</b></span>|


#### 🟩Assignments

|🟩<span style="background-color: #a6e22e; color: black;"><b>Assign To Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>ContentDocumentRecord.Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Loop_Through_Content_Document.Id</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>ContentDocumentRecord.Title</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>TitleFormat</b></span>|




### 🟩Files_Retrieved

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Files Retrieved ?</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>No</b></span>|


#### 🟩Rule Yes (Yes)

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Loop_Through_Content_Document_Links](#loop_through_content_document_links)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|




|🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Left Value Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Right Value</b></span>|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Content_Document_Link](#get_content_document_link)</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Empty</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|




### 🟩Loop_Through_Content_Document

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Loop</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Loop Through Content Document</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Collection Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Content_Document_Information](#get_content_document_information)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Iteration Order</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Asc</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Next Value Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Set_Title](#set_title)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>No More Values Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_Files_Title_Related_to_WO_Step](#update_files_title_related_to_wo_step)</b></span>|


### 🟩Loop_Through_Content_Document_Links

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Loop</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Loop Through Content Document Links</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Collection Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Content_Document_Link](#get_content_document_link)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Iteration Order</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Asc</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Next Value Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Collect_Content_Document_Ids](#collect_content_document_ids)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>No More Values Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Content_Document_Information](#get_content_document_information)</b></span>|


### 🟩Loop_Through_Files

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Loop</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Loop Through Files</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Collection Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Content_Document_Link](#get_content_document_link)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Iteration Order</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Asc</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Next Value Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Link_Files_To_WO](#link_files_to_wo)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>No More Values Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Create_Files_on_Related_WO](#create_files_on_related_wo)</b></span>|


### 🟩Create_Files_on_Related_WO

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Create</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Create Files on Related WO</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Input Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>RelinkCollection</b></span>|


### 🟩Get_Content_Document_Information

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ContentDocument</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Content Document Information</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Loop_Through_Content_Document](#loop_through_content_document)</b></span>|


#### 🟩Filters (logic: **and**)

|🟩<span style="background-color: #a6e22e; color: black;"><b>Filter Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> In</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ContentDocumentIdCollection</b></span>|




### 🟩Get_Content_Document_Link

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ContentDocumentLink</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Content Document Link</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Files_Retrieved](#files_retrieved)</b></span>|


#### 🟩Filters (logic: **and**)

|🟩<span style="background-color: #a6e22e; color: black;"><b>Filter Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LinkedEntityId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Id</b></span>|




### 🟩Get_LMRA

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LMRA__c</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get LMRA</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Loop_Through_Files](#loop_through_files)</b></span>|


#### 🟩Filters (logic: **and**)

|🟩<span style="background-color: #a6e22e; color: black;"><b>Filter Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operator</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Value</b></span>|
|:-- |:-- |:--:|:--: |
|🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Work_Order__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.WorkOrderId</b></span>|




### 🟩Update_Files_Title_Related_to_WO_Step

|🟩<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Update</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Update Files Title Related to WO Step</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Input Reference</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ContentDocumentCollection</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_LMRA](#get_lmra)</b></span>|






___

<span style="background-color: #a6e22e; color: black;"><b>🟩_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_</b></span>