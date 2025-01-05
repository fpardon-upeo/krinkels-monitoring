# Work_Order_Send_Customer_Notification_Crew_Inbound history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Dec 10, 2024 (Initial)"

    _Dec 10, 2024, by fpardon-upeo in commit Org state on 2024-12-10 00:26 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record After Save</b>"]):::startClass
    click START "#general-information" "1150235607"
    
    Send_Email_Action_1("📧 <em></em><br/>Send Email Action 1"):::actionCalls
    click Send_Email_Action_1 "#send_email_action_1" "2359481669"
    
    Set_Dutch_Email_Template_Id[\"🟰 <em></em><br/>Set Dutch Email Template Id"/]:::assignments
    click Set_Dutch_Email_Template_Id "#set_dutch_email_template_id" "1640755695"
    
    Set_English_Email_Template_Id[\"🟰 <em></em><br/>Set English Email Template Id"/]:::assignments
    click Set_English_Email_Template_Id "#set_english_email_template_id" "840625972"
    
    Set_French_Email_Template_Id[\"🟰 <em></em><br/>Set French Email Template Id"/]:::assignments
    click Set_French_Email_Template_Id "#set_french_email_template_id" "3388519391"
    
    Check_Language{"🔀 <em></em><br/>Check Language"}:::decisions
    click Check_Language "#check_language" "3834180509"
    
    Check_Work_Order_Contact{"🔀 <em></em><br/>Check Work Order Contact"}:::decisions
    click Check_Work_Order_Contact "#check_work_order_contact" "2409972130"
    
    Get_Dutch_Template[("🔍 <em></em><br/>Get Dutch Template")]:::recordLookups
    click Get_Dutch_Template "#get_dutch_template" "3088569929"
    
    Get_English_Template[("🔍 <em></em><br/>Get English Template")]:::recordLookups
    click Get_English_Template "#get_english_template" "255237970"
    
    Get_French_Template[("🔍 <em></em><br/>Get French Template")]:::recordLookups
    click Get_French_Template "#get_french_template" "3819926075"
    
    Send_Email_Action_1 --> END_Send_Email_Action_1
    Set_Dutch_Email_Template_Id --> Send_Email_Action_1
    Set_English_Email_Template_Id --> Send_Email_Action_1
    Set_French_Email_Template_Id --> Send_Email_Action_1
    Check_Language --> |"Dutch"| Get_Dutch_Template
    Check_Language --> |"French"| Get_French_Template
    Check_Language --> |"English"| Get_English_Template
    Check_Language --> |"Default Outcome"| Send_Email_Action_1
    Check_Work_Order_Contact --> |"Has Contact"| Check_Language
    Check_Work_Order_Contact --> |"Default Outcome"| END_Check_Work_Order_Contact
    Get_Dutch_Template --> Set_Dutch_Email_Template_Id
    Get_English_Template --> Set_English_Email_Template_Id
    Get_French_Template --> Set_French_Email_Template_Id
    START -->  Check_Work_Order_Contact
    END_Send_Email_Action_1(( END )):::endClass
    END_Check_Work_Order_Contact(( END )):::endClass
    
    
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
    |Object|WorkOrder|
    |Process Type| Auto Launched Flow|
    |Trigger Type| Record After Save|
    |Record Trigger Type| Create And Update|
    |Label|[Work Order] - Send Customer Notification Crew Inbound|
    |Status|Active|
    |Does Require Record Changed To Meet Criteria|✅|
    |Environments|Default|
    |Interview Label|[Work Order] - Send Customer Notification Crew Inbound {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Check_Work_Order_Contact](#check_work_order_contact)|
    |Next Node|[Check_Work_Order_Contact](#check_work_order_contact)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Trigger_Notification_to_Customer__c| Equal To|✅|
    
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|
    |:-- |:--:|:--:|:--:|:--:|:--: |
    |templateId|String|⬜|⬜|⬜|<!-- -->|
    
    
    ## Flow Nodes Details
    
    ### Send_Email_Action_1
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Action Call|
    |Label|Send Email Action 1|
    |Action Type|Email Simple|
    |Action Name|emailSimple|
    |Flow Transaction Model|CurrentTransaction|
    |Name Segment|emailSimple|
    |Offset|0|
    |Version Segment|1|
    |Sender Type (input)|OrgWideEmailAddress|
    |Sender Address (input)|info@upeoconsulting.com|
    |Related Record Id (input)|$Record.Id|
    |Recipient Id (input)|$Record.ContactId|
    |Email Template Id (input)|templateId|
    
    
    ### Set_Dutch_Email_Template_Id
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Set Dutch Email Template Id|
    |Connector|[Send_Email_Action_1](#send_email_action_1)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |templateId| Assign|Get_Dutch_Template.Id|
    
    
    
    
    ### Set_English_Email_Template_Id
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Set English Email Template Id|
    |Connector|[Send_Email_Action_1](#send_email_action_1)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |templateId| Assign|{!Get_English_Template.Id}|
    
    
    
    
    ### Set_French_Email_Template_Id
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Set French Email Template Id|
    |Connector|[Send_Email_Action_1](#send_email_action_1)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |templateId| Assign|Get_French_Template.Id|
    
    
    
    
    ### Check_Language
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Check Language|
    |Default Connector|[Send_Email_Action_1](#send_email_action_1)|
    |Default Connector Label|Default Outcome|
    
    
    #### Rule Dutch (Dutch)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Get_Dutch_Template](#get_dutch_template)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.Contact.Language__c| Equal To|Dutch|
    
    
    
    
    #### Rule French (French)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Get_French_Template](#get_french_template)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.Contact.Language__c| Equal To|French|
    
    
    
    
    #### Rule English (English)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Get_English_Template](#get_english_template)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.Contact.Language__c| Equal To|English|
    
    
    
    
    ### Check_Work_Order_Contact
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Check Work Order Contact|
    |Default Connector Label|Default Outcome|
    
    
    #### Rule Has_Contact (Has Contact)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Check_Language](#check_language)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.ContactId| Is Null|⬜|
    
    
    
    
    ### Get_Dutch_Template
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|EmailTemplate|
    |Label|Get Dutch Template|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Set_Dutch_Email_Template_Id](#set_dutch_email_template_id)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Name| Equal To|Notification - Crew on its way (NL)|
    
    
    
    
    ### Get_English_Template
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|EmailTemplate|
    |Label|Get English Template|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Set_English_Email_Template_Id](#set_english_email_template_id)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Name| Equal To|Notification - Crew on its way (ENG)|
    
    
    
    
    ### Get_French_Template
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|EmailTemplate|
    |Label|Get French Template|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Set_French_Email_Template_Id](#set_french_email_template_id)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Name| Equal To|Notification - Crew on its way (FR)|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

