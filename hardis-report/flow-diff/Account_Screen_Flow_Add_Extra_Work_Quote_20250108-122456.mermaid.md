# [Account][Screen-Flow] Add Extra Work Quote

## Flow Diagram

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["<b>START<br/><b>Screen Flow</b></b>"]):::startClassChanged


click START "#general-information" "3544876864"


Open_Quote("⚡ <em></em><br/>Open Quote"):::actionCalls
click Open_Quote "#open_quote" "3190499939"

Set_Quote_Values_for_ATAK_Project_Req[\"🟰 <em></em><br/>Set Quote Values for ATAK Project Req"/]:::assignments
click Set_Quote_Values_for_ATAK_Project_Req "#set_quote_values_for_atak_project_req" "140031958"


Set_Quote_Values_for_Pricing_Req[\"<i>🟰 <em></em><br/>Set Quote Values for Pricing Req</i>"/]:::assignmentsRemoved
click Set_Quote_Values_for_Pricing_Req "#set_quote_values_for_pricing_req" "2023165874"


Set_Quote_Values_no_Pricing_Req[\"<b>🟰 <em></em><br/>Set Quote Values no Pricing Req</b>"/]:::assignmentsChanged


click Set_Quote_Values_no_Pricing_Req "#set_quote_values_no_pricing_req" "1716476897"


Stamp_ATAK_Project[\"🟰 <em></em><br/>Stamp ATAK Project"/]:::assignments
click Stamp_ATAK_Project "#stamp_atak_project" "1019008470"

ATAK_Project_Needed{"🔀 <em></em><br/>ATAK Project Needed"}:::decisions
click ATAK_Project_Needed "#atak_project_needed" "144185189"


Pricing{"<i>🔀 <em></em><br/>Pricing</i>"}:::decisionsRemoved
click Pricing "#pricing" "2049559269"

Pricing_Request_Needed{"<i>🔀 <em></em><br/>Pricing Request Needed</i>"}:::decisionsRemoved
click Pricing_Request_Needed "#pricing_request_needed" "4107061553"

Create_Empty_Quote_Product[("<i>➕ <em></em><br/>Create Empty Quote Product</i>")]:::recordCreatesRemoved
click Create_Empty_Quote_Product "#create_empty_quote_product" "2470100923"


Create_Quote[("<b>➕ <em></em><br/>Create Quote</b>")]:::recordCreatesChanged


click Create_Quote "#create_quote" "715331569"


Create_Quote_Products[("➕ <em></em><br/>Create Quote Products")]:::recordCreates
click Create_Quote_Products "#create_quote_products" "975807874"

Get_Account_Details[("🔍 <em></em><br/>Get Account Details")]:::recordLookups
click Get_Account_Details "#get_account_details" "2074714055"

Get_Price_Book[("🔍 <em></em><br/>Get Price Book")]:::recordLookups
click Get_Price_Book "#get_price_book" "2689493689"

Get_Price_Book_Entry[("🔍 <em></em><br/>Get Price Book Entry")]:::recordLookups
click Get_Price_Book_Entry "#get_price_book_entry" "3888028995"

Get_Product[("🔍 <em></em><br/>Get Product")]:::recordLookups
click Get_Product "#get_product" "1550029501"

Get_Record_Type[("🔍 <em></em><br/>Get Record Type")]:::recordLookups
click Get_Record_Type "#get_record_type" "4243362384"

Get_Service_Contracts[("🔍 <em></em><br/>Get Service Contracts")]:::recordLookups
click Get_Service_Contracts "#get_service_contracts" "2318674667"

Add_Extra_Work(["<b>💻 <em></em><br/>Add Extra Work</b>"]):::screensChanged


click Add_Extra_Work "#add_extra_work" "1695766313"


Atak_Project(["<b>💻 <em></em><br/>Atak Project</b>"]):::screensChanged


click Atak_Project "#atak_project" "3760113405"


PricingScreen(["<b>💻 <em></em><br/>Pricing</b>"]):::screensChanged


click PricingScreen "#pricingscreen" "4253704221"



Quote_PDF_Administrion(["<b>💻 <em></em><br/>Quote PDF Administrion</b>"]):::screensAdded
click Quote_PDF_Administrion "#quote_pdf_administrion" "1434990421"


Open_Quote --> END_Open_Quote
Set_Quote_Values_for_ATAK_Project_Req --> Create_Quote

Set_Quote_Values_for_Pricing_Req -.-> ATAK_Project_Needed

Set_Quote_Values_no_Pricing_Req --> ATAK_Project_Needed
Stamp_ATAK_Project --> Create_Quote
ATAK_Project_Needed --> |"Project Selected"| Stamp_ATAK_Project
ATAK_Project_Needed --> |"Project Requested"| Set_Quote_Values_for_ATAK_Project_Req
ATAK_Project_Needed --> |"Default Outcome"| Create_Quote

Pricing -.-> |"🟥<i>Defined</i>"| Create_Quote_Products
Pricing -.-> |"🟥<i>Requested</i>"| Create_Empty_Quote_Product
Pricing -.-> |"🟥<i>Default Outcome</i>"| Open_Quote
Pricing_Request_Needed -.-> |"🟥<i>Yes</i>"| Set_Quote_Values_for_Pricing_Req
Pricing_Request_Needed -.-> |"🟥<i>No</i>"| Set_Quote_Values_no_Pricing_Req
Pricing_Request_Needed -.-> |"🟥<i>Default Outcome</i>"| ATAK_Project_Needed
Create_Empty_Quote_Product -.-> Open_Quote
Create_Quote -.-> Pricing

Create_Quote ==> Create_Quote_Products

Create_Quote_Products --> Open_Quote
Get_Account_Details --> Get_Service_Contracts
Get_Price_Book --> Get_Price_Book_Entry
Get_Price_Book_Entry --> PricingScreen
Get_Product --> Get_Price_Book
Get_Record_Type --> Get_Account_Details
Get_Service_Contracts --> Add_Extra_Work
Add_Extra_Work --> Get_Product

Atak_Project -.-> Pricing_Request_Needed
PricingScreen -.-> Atak_Project

Atak_Project ==> Set_Quote_Values_no_Pricing_Req
PricingScreen ==> Quote_PDF_Administrion
Quote_PDF_Administrion ==> Atak_Project

START -->  Get_Record_Type
END_Open_Quote(( END )):::endClass


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
  
linkStyle 16,27,28,29 stroke:#00ff00,stroke-width:4px,color:green;
linkStyle 2,8,9,10,11,12,13,14,15,25,26 stroke:#ff0000,stroke-width:4px,color:red;
```

## General Information

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Active</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⚠️ Draft</b></span>|

## Formulas

|Name|Data Type|Expression|Description|
|:-- |:--:|:-- |:--  |
|🟥<span style="background-color: #ff7f7f; color: black;"><i><!-- --></i></span>|<span style="background-color: #ff7f7f; color: black;"><i><!-- --></i></span>|<span style="background-color: #ff7f7f; color: black;"><i><!-- --></i></span>|<span style="background-color: #ff7f7f; color: black;"><i><!-- --></i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>OpportunityNameCalculation</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!Get_Account_Details.Name} &' - Extra Work'&' - '&TEXT({!Expected_Work_Date})</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|

## Flow Nodes Details

### 🟥Set_Quote_Values_for_Pricing_Req

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Assignment</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Set Quote Values for Pricing Req</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[ATAK_Project_Needed](#atak_project_needed)</i></span>|

#### 🟥Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|🟥<span style="background-color: #ff7f7f; color: black;"><i>quoteRecord.Name</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>OpportunityNameCalculation</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>quoteRecord.QuoteAccountId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>recordId</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>quoteRecord.AccountId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>recordId</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>quoteRecord.Amount__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Unit_Price</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>quoteRecord.ExpirationDate</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Expected_Work_Date</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>quoteRecord.Description</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Please_provide_a_description_of_the_extra_work</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>quoteRecord.Pricing_Request_Needed__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>quoteRecord.ATAK_Project_Request_Priority__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Pricing_Request_Priority</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>quoteRecord.Price_Request_Status__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Requested</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>quoteRecord.Price_Request_Demand_Comments__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Pricing_Request_Comment</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>quoteRecord.Pricebook2Id</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_Price_Book.Id</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>quoteRecord.Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Pricing](#pricing)</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>quoteRecord.Service_Contract__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>ServiceContractTable.firstSelectedRow.Id</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>quoteRecord.Type__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Extra Work</i></span>|

### Set_Quote_Values_no_Pricing_Req

#### Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|🟥<span style="background-color: #ff7f7f; color: black;"><i>quoteRecord.Description</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Please_provide_a_description_of_the_extra_work</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>quoteRecord.Extra_Work__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Please_provide_a_description_of_the_extra_work</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>quoteRecord.Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Assign</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Pricing](#pricing)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>quoteRecord.Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Pricing</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>quoteRecord.Document_Language__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Document_Language</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>quoteRecord.ContactId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Contact.recordId</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>quoteRecord.Offer_Valid_For__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Offer_Validity_in_months</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>quoteRecord.Our_Reference__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Our_Reference</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>quoteRecord.Customer_Reference__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Customer_Reference</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>quoteRecord.Subject__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Subject</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>quoteRecord.Additional_Remarks__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Additional_Remarks</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>quoteRecord.Adjustable_Price__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Adjustable_Price</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>quoteRecord.Adjustment_Period__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Adjustment_Period</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>quoteRecord.Payment_Term__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Payment_Term</b></span>|

### 🟥Pricing

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Decision</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Pricing](#pricing)</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Open_Quote](#open_quote)</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Default Outcome</i></span>|

#### 🟥Rule Defined (Defined)

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Create_Quote_Products](#create_quote_products)</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Condition Logic</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>and</i></span>|

|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Request_Pricing_to_Business_Support_Choice</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>No</i></span>|

#### 🟥Rule Requested (Requested)

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Create_Empty_Quote_Product](#create_empty_quote_product)</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Condition Logic</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>and</i></span>|

|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Request_Pricing_to_Business_Support_Choice</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Yes</i></span>|

### 🟥Pricing_Request_Needed

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Decision</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Pricing Request Needed</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[ATAK_Project_Needed](#atak_project_needed)</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Default Outcome</i></span>|

#### 🟥Rule yesPricingNeeded (Yes)

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Set_Quote_Values_for_Pricing_Req](#set_quote_values_for_pricing_req)</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Condition Logic</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>and</i></span>|

|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Request_Pricing_to_Business_Support_Choice</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Yes</i></span>|

#### 🟥Rule NoPricingNotNeeded (No)

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Set_Quote_Values_no_Pricing_Req](#set_quote_values_no_pricing_req)</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Condition Logic</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>and</i></span>|

|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Request_Pricing_to_Business_Support_Choice</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>No</i></span>|

### 🟥Create_Empty_Quote_Product

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Record Create</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Object</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>QuoteLineItem</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Create Empty Quote Product</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Store Output Automatically</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Open_Quote](#open_quote)</i></span>|

#### 🟥Input Assignments

|Field|Value|
|:-- |:--: |
|🟥<span style="background-color: #ff7f7f; color: black;"><i>PricebookEntryId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_Price_Book_Entry.Id</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Product2Id</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_Product.Id</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Quantity</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>QuoteId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>quoteRecord.Id</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>UnitPrice</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>numberValue: 0<br/></i></span>|

### Create_Quote

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Pricing](#pricing)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Create_Quote_Products](#create_quote_products)</b></span>|

### Add_Extra_Work

#### ServiceContractTable

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Columns (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[{"apiName":"Name","guid":"column-5617","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":0,"label":"Contract Name","type":"text"},{"apiName":"Type__c","guid":"column-996f","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":1,"label":"Type","type":"text"},{"apiName":"Contract_type__c","guid":"column-efcd","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":2,"label":"Contract type","type":"text"},{"apiName":"Status","guid":"column-d462","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":3,"label":"Status","type":"text"},{"apiName":"EndDate","guid":"column-e2a7","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":4,"label":"End Date","type":"date-local"},{"apiName":"","guid":"column-e54f","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":4}]</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Columns (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[{"apiName":"Name","guid":"column-5617","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":0,"label":"Contract Name","type":"text"},{"apiName":"Type__c","guid":"column-996f","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":1,"label":"Type","type":"text"},{"apiName":"Contract_type__c","guid":"column-efcd","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":2,"label":"Contract type","type":"text"},{"apiName":"Status","guid":"column-d462","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":3,"label":"Status","type":"text"},{"apiName":"Additional_Work_in_scope_contract__c","guid":"column-e54f","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":4,"label":"Additional Work in scope contract","type":"boolean"}]</b></span>|

### Atak_Project

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Pricing_Request_Needed](#pricing_request_needed)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Set_Quote_Values_no_Pricing_Req](#set_quote_values_no_pricing_req)</b></span>|

#### 🟥Existing_ATAK_Project

#### 🟩New_ATAK_Toggle


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Extension Name</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>flowruntime:lookup</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Extension Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>flowruntime:toggle</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Api Name (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>ATAK_Projectx__c</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Label (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Existing ATAK Project</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Object Api Name (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Opportunity</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Disabled (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>New_ATAK_Toggle.value</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Request New Project</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Message Toggle Active (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Yes</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Message Toggle Inactive (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>No</b></span>|

#### 🟥New_ATAK_Toggle

#### 🟩Existing_ATAK_Project


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Extension Name</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>flowruntime:toggle</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Extension Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>flowruntime:lookup</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Label (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Request New Project</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Message Toggle Active (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Yes</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Message Toggle Inactive (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>No</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Api Name (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ATAK_Projectx__c</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Existing ATAK Project</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object Api Name (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Opportunity</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Disabled (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>New_ATAK_Toggle.value</b></span>|

#### 🟩warning

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p>The ATAK Project creation will be requested only </p><p><strong>after the customer accepts the quote.</strong></p></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Visibility Rule</b></span>|<span style="background-color: #a6e22e; color: black;"><b>conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: New_ATAK_Toggle.value<br/>&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;booleanValue: true<br/></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Atak_Project_Section1_Column2](#atak_project_section1_column2)</b></span>|

### PricingScreen

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Pricing](#pricing)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Pricing</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Atak_Project](#atak_project)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Quote_PDF_Administrion](#quote_pdf_administrion)</b></span>|

#### 🟥Request_Pricing_to_Business_Support_Choice

#### 🟩Unit_Price


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Data Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>String</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Choice References</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>- 'Yes'<br/>- 'No'<br/></i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Selected Choice Reference</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>No</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Request Pricing to Business Support</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Dropdown Box</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Currency</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Sales Price</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Input Field</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Scale</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Validation Rule</b></span>|<span style="background-color: #a6e22e; color: black;"><b>errorMessage: <p>You can't make a quick quote with a value superior to 5000€.</p><br/>formulaExpression: '{!Unit_Price}<=5000'<br/></b></span>|

#### 🟥Pricing_Request_Priority

#### 🟩Any_additional_comments


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Choice References</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>PricingRequestPriority</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Value</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Medium</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Pricing Request Priority</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Dropdown Box</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Any additional comments?</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Input Field</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Visibility Rule</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: Request_Pricing_to_Business_Support_Choice<br/>&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;elementReference: 'Yes'<br/></i></span>|

#### 🟥Pricing_Request_Comment

#### 🟩PricingScreen_Section1_Column2


|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Region</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[PricingScreen_Section1](#pricingscreen_section1)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Width (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>6</b></span>|

#### 🟩PricingScreen_Section1

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Region Container</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Region Container Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Section Without Header</b></span>|

### 🟩Quote_PDF_Administrion

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Screen</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Quote PDF Administrion</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Back</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Finish</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Allow Pause</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Show Footer</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Show Header</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Atak_Project](#atak_project)</b></span>|

#### 🟩AdministrativeTitle

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p><strong style="font-size: 18px;">Quote Document Details</strong></p><p><br></p><p>Define the necessary dynamic fields for the creation of the Quote PDF.</p></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|

#### 🟩Document_Language

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Pricing Request Comment</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Input Field</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Choice References</b></span>|<span style="background-color: #a6e22e; color: black;"><b>LanguageChoice</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Default Value</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Dutch</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Document Language</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Dropdown Box</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Quote_PDF_Administrion_Section1_Column1](#quote_pdf_administrion_section1_column1)</b></span>|

#### 🟩Quote_PDF_Administrion_Section1_Column1

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Region</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Visibility Rule</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: Request_Pricing_to_Business_Support_Choice<br/>&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;elementReference: 'Yes'<br/></i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Parent Field</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[PricingScreen_Section1_Column2](#pricingscreen_section1_column2)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Quote_PDF_Administrion_Section1](#quote_pdf_administrion_section1)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Width (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>4</b></span>|

#### 🟥PricingScreen_Section1_Column2

#### 🟩Contact


|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Extension Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>flowruntime:lookup</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Component Instance</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Quote_PDF_Administrion_Section1_Column2](#quote_pdf_administrion_section1_column2)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Api Name (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>ContactId</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Label (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Quote Contact</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Object Api Name (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Quote</b></span>|

#### 🟩Quote_PDF_Administrion_Section1_Column2

|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Parent Field</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[PricingScreen_Section1](#pricingscreen_section1)</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Width (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>6</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Quote_PDF_Administrion_Section1](#quote_pdf_administrion_section1)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Width (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>4</b></span>|

#### 🟥PricingScreen_Section1

#### 🟩Offer_Validity_in_months


|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Number</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Default Value</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Offer Validity (in months)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Input Field</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Scale</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Quote_PDF_Administrion_Section1_Column3](#quote_pdf_administrion_section1_column3)</b></span>|

#### 🟩Quote_PDF_Administrion_Section1_Column3

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Region</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Quote_PDF_Administrion_Section1](#quote_pdf_administrion_section1)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Width (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>4</b></span>|

#### 🟩Quote_PDF_Administrion_Section1

#### 🟥Unit_Price

#### 🟩AdministrativeDetailsTitle


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Data Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Currency</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Sales Price</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p><strong>Administrative Details</strong></p></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|

#### 🟩Our_Reference

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Our Reference</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Scale</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>0</i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Parent Field</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[PricingScreen_Section2_Column1](#pricingscreen_section2_column1)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Quote_PDF_Administrion_Section2_Column1](#quote_pdf_administrion_section2_column1)</b></span>|

#### 🟥PricingScreen_Section2_Column1

#### 🟩Quote_PDF_Administrion_Section2_Column1


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Parent Field</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[PricingScreen_Section2](#pricingscreen_section2)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Quote_PDF_Administrion_Section2](#quote_pdf_administrion_section2)</b></span>|

#### 🟥Any_additional_comments

#### 🟩Customer_Reference


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Field Text</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Any additional comments?</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Customer Reference</b></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Visibility Rule</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: Request_Pricing_to_Business_Support_Choice<br/>&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;elementReference: 'No'<br/></i></span>|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Parent Field</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[PricingScreen_Section2_Column2](#pricingscreen_section2_column2)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Quote_PDF_Administrion_Section2_Column2](#quote_pdf_administrion_section2_column2)</b></span>|

#### 🟥PricingScreen_Section2_Column2

#### 🟩Quote_PDF_Administrion_Section2_Column2


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Parent Field</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[PricingScreen_Section2](#pricingscreen_section2)</i></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Quote_PDF_Administrion_Section2](#quote_pdf_administrion_section2)</b></span>|

#### 🟥PricingScreen_Section2

#### 🟩Quote_PDF_Administrion_Section2


|<!-- -->|<!-- -->|
|:---|:---|
|🟥<span style="background-color: #ff7f7f; color: black;"><i>Visibility Rule</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: Request_Pricing_to_Business_Support_Choice<br/>&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;elementReference: 'No'<br/></i></span>|

#### 🟩Subject



|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Default Value</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OpportunityNameCalculation</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Subject</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Input Field</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|

#### 🟩Additional_Remarks

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Additional Remarks</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Large Text Area</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|

#### 🟩PricingDetails

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b><p><strong>Pricing Details</strong></p></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Display Text</b></span>|

#### 🟩Adjustable_Price

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Boolean</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Adjustable Price</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Input Field</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Quote_PDF_Administrion_Section3_Column1](#quote_pdf_administrion_section3_column1)</b></span>|

#### 🟩Adjustment_Period

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>String</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Choice References</b></span>|<span style="background-color: #a6e22e; color: black;"><b>AdjustmentPeriod</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Adjustment Period</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Dropdown Box</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Visibility Rule</b></span>|<span style="background-color: #a6e22e; color: black;"><b>conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: Adjustable_Price<br/>&nbsp;&nbsp;operator: EqualTo<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;booleanValue: true<br/></b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Quote_PDF_Administrion_Section3_Column1](#quote_pdf_administrion_section3_column1)</b></span>|

#### 🟩Quote_PDF_Administrion_Section3_Column1

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Region</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Quote_PDF_Administrion_Section3](#quote_pdf_administrion_section3)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Width (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>6</b></span>|

#### 🟩Payment_Term

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Data Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Number</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Default Value</b></span>|<span style="background-color: #a6e22e; color: black;"><b>30</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Text</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Payment Term</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Input Field</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Inputs On Next Nav To Assoc Scrn</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Use Stored Values</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Scale</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Quote_PDF_Administrion_Section3_Column2](#quote_pdf_administrion_section3_column2)</b></span>|

#### 🟩Quote_PDF_Administrion_Section3_Column2

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Region</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Parent Field</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Quote_PDF_Administrion_Section3](#quote_pdf_administrion_section3)</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Width (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>6</b></span>|

#### 🟩Quote_PDF_Administrion_Section3

|<!-- -->|<!-- -->|
|:---|:---|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Field Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Region Container</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Is Required</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
|🟩<span style="background-color: #a6e22e; color: black;"><b>Region Container Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Section Without Header</b></span>|

___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_