# Work_Order_Screen_Flow_Service_Report_Review_Flag history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Jan 8, 2025 (Initial)"

    _Jan 8, 2025, by fpardon-upeo in commit Org state on 2025-01-08 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>Screen Flow</b>"]):::startClass
    click START "#general-information" "1434035950"
    
    Get_Work_Order[("🔍 <em></em><br/>Get Work Order")]:::recordLookups
    click Get_Work_Order "#get_work_order" "2854656048"
    
    Update_Work_Order_PDF_Status[("🛠️ <em></em><br/>Update Work Order PDF Status")]:::recordUpdates
    click Update_Work_Order_PDF_Status "#update_work_order_pdf_status" "1818650085"
    
    Service_Report_Check(["💻 <em></em><br/>Service Report Check"]):::screens
    click Service_Report_Check "#service_report_check" "3639929934"
    
    Get_Work_Order --> Service_Report_Check
    Update_Work_Order_PDF_Status --> END_Update_Work_Order_PDF_Status
    Service_Report_Check --> Update_Work_Order_PDF_Status
    START -->  Get_Work_Order
    END_Update_Work_Order_PDF_Status(( END )):::endClass
    
    
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
    |Process Type| Flow|
    |Label|[Work Order][Screen-Flow] Service Report Review Flag|
    |Status|Active|
    |Description|This is used to show that a Service Report needs to be flagged as Ready for the Service Report to be sent for Extra Work and Small Works Work Orders.|
    |Environments|Default|
    |Interview Label|[Work Order][Screen-Flow] Service Report Flag {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Get_Work_Order](#get_work_order)|
    |Next Node|[Get_Work_Order](#get_work_order)|
    
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|Description|
    |:-- |:--:|:--:|:--:|:--:|:--:|:--  |
    |recordId|String|⬜|✅|⬜|<!-- -->|<!-- -->|
    
    
    ## Flow Nodes Details
    
    ### Get_Work_Order
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkOrder|
    |Label|Get Work Order|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Service_Report_Check](#service_report_check)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|recordId|
    
    
    
    
    ### Update_Work_Order_PDF_Status
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Object|WorkOrder|
    |Label|Update Work Order PDF Status|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|recordId|
    
    
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |PDF_Status__c|Ready to be Generated|
    |Reviewed_for_Service_Report__c|✅|
    
    
    
    
    ### Service_Report_Check
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Screen|
    |Label|Service Report Check|
    |Allow Back|⬜|
    |Allow Finish|✅|
    |Allow Pause|⬜|
    |Next Or Finish Button Label|Ready to be Generated|
    |Show Footer|✅|
    |Show Header|⬜|
    |Connector|[Update_Work_Order_PDF_Status](#update_work_order_pdf_status)|
    
    
    #### screenFlowText
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Field Text|<p style="text-align: center;"><strong style="font-size: 18px;">Review Needed</strong></p><p><br></p><p>This Work Order is of type <strong style="color: rgb(68, 68, 68); background-color: rgb(255, 255, 255);">{!Get_Work_Order.WorkType.Name}</strong><span style="color: rgb(68, 68, 68); background-color: rgb(255, 255, 255);"> and </span><u style="color: rgb(68, 68, 68); background-color: rgb(255, 255, 255);">needs to be reviewed</u><span style="color: rgb(68, 68, 68); background-color: rgb(255, 255, 255);"> before the Service Report can be automatically sent to the customer.</span></p><p><br></p><p><span style="color: rgb(68, 68, 68); background-color: rgb(255, 255, 255);">Please make the necessary reviews and click on the </span><em style="color: rgb(68, 68, 68); background-color: rgb(255, 255, 255);">"Ready to be Generated"</em><span style="color: rgb(68, 68, 68); background-color: rgb(255, 255, 255);"> button to add this Work Order to the outgoing Service Report queue.</span></p>|
    |Field Type| Display Text|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

