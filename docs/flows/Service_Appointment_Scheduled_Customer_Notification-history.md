# Service_Appointment_Scheduled_Customer_Notification history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Jan 10, 2025"

    _Jan 10, 2025, by fpardon-upeo in commit Org state on 2025-01-10 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["<b>START<br/><b>AutoLaunched Flow</b></br>Type: <b> Scheduled</b></b>"]):::startClassChanged
    
    
    click START "#general-information" "1355914100"
    
    
    
    REScheduled_WO_Send_ENG_mail("<i>📧 <em></em><br/>REScheduled WO - Send ENG mail</i>"):::actionCallsRemoved
    click REScheduled_WO_Send_ENG_mail "#rescheduled_wo_send_eng_mail" "1563395032"
    
    REScheduled_WO_Send_ENG_mail_Day("<i>📧 <em></em><br/>REScheduled WO - Send ENG mail Day</i>"):::actionCallsRemoved
    click REScheduled_WO_Send_ENG_mail_Day "#rescheduled_wo_send_eng_mail_day" "808690215"
    
    
    REScheduled_WO_Send_FR_mail("<b>📧 <em></em><br/>REScheduled WO - Send FR mail</b>"):::actionCallsChanged
    
    
    click REScheduled_WO_Send_FR_mail "#rescheduled_wo_send_fr_mail" "1298286610"
    
    
    
    REScheduled_WO_Send_FR_mail_Day("<i>📧 <em></em><br/>REScheduled WO - Send FR mail Day</i>"):::actionCallsRemoved
    click REScheduled_WO_Send_FR_mail_Day "#rescheduled_wo_send_fr_mail_day" "255685198"
    
    
    REScheduled_WO_Send_NL_mail("<b>📧 <em></em><br/>REScheduled WO - Send NL mail</b>"):::actionCallsChanged
    
    
    click REScheduled_WO_Send_NL_mail "#rescheduled_wo_send_nl_mail" "3265677256"
    
    
    
    REScheduled_WO_Send_NL_mail_Day("<i>📧 <em></em><br/>REScheduled WO - Send NL mail Day</i>"):::actionCallsRemoved
    click REScheduled_WO_Send_NL_mail_Day "#rescheduled_wo_send_nl_mail_day" "272357784"
    
    Scheduled_WO_Send_ENG_mail("<i>📧 <em></em><br/>Scheduled WO - Send ENG mail</i>"):::actionCallsRemoved
    click Scheduled_WO_Send_ENG_mail "#scheduled_wo_send_eng_mail" "3536185047"
    
    Scheduled_WO_Send_ENG_mail_Day("<i>📧 <em></em><br/>Scheduled WO - Send ENG mail Day</i>"):::actionCallsRemoved
    click Scheduled_WO_Send_ENG_mail_Day "#scheduled_wo_send_eng_mail_day" "3169031084"
    
    
    Scheduled_WO_Send_FR_mail("<b>📧 <em></em><br/>Scheduled WO - Send FR mail</b>"):::actionCallsChanged
    
    
    click Scheduled_WO_Send_FR_mail "#scheduled_wo_send_fr_mail" "3198771491"
    
    
    
    Scheduled_WO_Send_FR_mail_Day("<i>📧 <em></em><br/>Scheduled WO - Send FR mail Day</i>"):::actionCallsRemoved
    click Scheduled_WO_Send_FR_mail_Day "#scheduled_wo_send_fr_mail_day" "1542042991"
    
    
    Scheduled_WO_Send_NL_mail("<b>📧 <em></em><br/>Scheduled WO - Send NL mail</b>"):::actionCallsChanged
    
    
    click Scheduled_WO_Send_NL_mail "#scheduled_wo_send_nl_mail" "4240238333"
    
    
    
    Scheduled_WO_Send_NL_mail_Day("<i>📧 <em></em><br/>Scheduled WO - Send NL mail Day</i>"):::actionCallsRemoved
    click Scheduled_WO_Send_NL_mail_Day "#scheduled_wo_send_nl_mail_day" "4068910866"
    
    
    Assign_email_Recipients[\"<b>🟰 <em></em><br/>Assign email Recipients</b>"/]:::assignmentsChanged
    
    
    click Assign_email_Recipients "#assign_email_recipients" "1045214625"
    
    
    Contact_Language{"<b>🔀 <em></em><br/>Contact Language</b>"}:::decisionsChanged
    
    
    click Contact_Language "#contact_language" "2899482565"
    
    
    First_send_or_Resend{"<b>🔀 <em></em><br/>First send or Resend</b>"}:::decisionsChanged
    
    
    click First_send_or_Resend "#first_send_or_resend" "3045810356"
    
    
    
    First_send_or_Resend_ENG{"<i>🔀 <em></em><br/>First send or Resend ENG</i>"}:::decisionsRemoved
    click First_send_or_Resend_ENG "#first_send_or_resend_eng" "1733880066"
    
    
    First_send_or_Resend_FR{"<b>🔀 <em></em><br/>First send or Resend FR</b>"}:::decisionsChanged
    
    
    click First_send_or_Resend_FR "#first_send_or_resend_fr" "3510732964"
    
    
    
    Week_OR_Exact_Day{"<i>🔀 <em></em><br/>Week OR Exact Day</i>"}:::decisionsRemoved
    click Week_OR_Exact_Day "#week_or_exact_day" "3717360262"
    
    Has_Intervention_Contact{"<b>🔀 <em></em><br/>Has Intervention Contact</b>"}:::decisionsAdded
    click Has_Intervention_Contact "#has_intervention_contact" "1771061234"
    
    
    
    Week_OR_Exact_Day2{"<i>🔀 <em></em><br/>Week OR Exact Day</i>"}:::decisionsRemoved
    click Week_OR_Exact_Day2 "#week_or_exact_day2" "3895424016"
    
    Week_OR_Exact_Day3{"<i>🔀 <em></em><br/>Week OR Exact Day</i>"}:::decisionsRemoved
    click Week_OR_Exact_Day3 "#week_or_exact_day3" "1502737021"
    
    Week_OR_Exact_Day4{"<i>🔀 <em></em><br/>Week OR Exact Day</i>"}:::decisionsRemoved
    click Week_OR_Exact_Day4 "#week_or_exact_day4" "3599736634"
    
    Week_OR_Exact_Day5{"<i>🔀 <em></em><br/>Week OR Exact Day</i>"}:::decisionsRemoved
    click Week_OR_Exact_Day5 "#week_or_exact_day5" "767506239"
    
    Week_OR_Exact_Day6{"<i>🔀 <em></em><br/>Week OR Exact Day</i>"}:::decisionsRemoved
    click Week_OR_Exact_Day6 "#week_or_exact_day6" "3028823591"
    
    
    Work_Order_Contact_with_Email_Found{"<b>🔀 <em></em><br/>Work Order & Contact with Email Found?</b>"}:::decisionsChanged
    
    
    click Work_Order_Contact_with_Email_Found "#work_order_contact_with_email_found" "2100079716"
    
    
    
    Get_Email_Template_ENG_Planned_WO[("<i>🔍 <em></em><br/>Get Email Template ENG Planned WO</i>")]:::recordLookupsRemoved
    click Get_Email_Template_ENG_Planned_WO "#get_email_template_eng_planned_wo" "2513349678"
    
    Get_Account[("<b>🔍 <em></em><br/>Get Account</b>")]:::recordLookupsAdded
    click Get_Account "#get_account" "394167497"
    
    
    
    Get_Email_Template_ENG_Planned_WO_Day[("<i>🔍 <em></em><br/>Get Email Template ENG Planned WO Day</i>")]:::recordLookupsRemoved
    click Get_Email_Template_ENG_Planned_WO_Day "#get_email_template_eng_planned_wo_day" "758035772"
    
    Get_Contact_Relation[("<b>🔍 <em></em><br/>Get Contact Relation</b>")]:::recordLookupsAdded
    click Get_Contact_Relation "#get_contact_relation" "2428644280"
    
    
    
    Get_Email_Template_ENG_REPlanned_WO[("<i>🔍 <em></em><br/>Get Email Template ENG REPlanned WO</i>")]:::recordLookupsRemoved
    click Get_Email_Template_ENG_REPlanned_WO "#get_email_template_eng_replanned_wo" "3189420705"
    
    Get_Contacts[("<b>🔍 <em></em><br/>Get Contacts</b>")]:::recordLookupsAdded
    click Get_Contacts "#get_contacts" "1157115469"
    
    
    
    Get_Email_Template_ENG_REPlanned_WO_Day[("<i>🔍 <em></em><br/>Get Email Template ENG REPlanned WO Day</i>")]:::recordLookupsRemoved
    click Get_Email_Template_ENG_REPlanned_WO_Day "#get_email_template_eng_replanned_wo_day" "3255117414"
    
    
    Get_Email_Template_FR_Planned_WO[("<b>🔍 <em></em><br/>Get Email Template FR Planned WO</b>")]:::recordLookupsChanged
    click Get_Email_Template_FR_Planned_WO "#get_email_template_fr_planned_wo" "2811645755"
    
    
    Get_Email_Template_FR_Planned_WO_Day[("<i>🔍 <em></em><br/>Get Email Template FR Planned WO Day</i>")]:::recordLookupsRemoved
    
    
    Get_Email_Template_FR_REPlanned_WO[("<b>🔍 <em></em><br/>Get Email Template FR REPlanned WO</b>")]:::recordLookupsChanged
    click Get_Email_Template_FR_REPlanned_WO "#get_email_template_fr_replanned_wo" "1431363291"
    
    
    Get_Email_Template_FR_REPlanned_WO_Day[("<i>🔍 <em></em><br/>Get Email Template FR REPlanned WO Day</i>")]:::recordLookupsRemoved
    
    
    Get_Email_Template_NL_Planned_WO[("<b>🔍 <em></em><br/>Get Email Template NL Planned WO</b>")]:::recordLookupsChanged
    click Get_Email_Template_NL_Planned_WO "#get_email_template_nl_planned_wo" "1854158430"
    
    
    Get_Email_Template_NL_Planned_WO_Day[("<i>🔍 <em></em><br/>Get Email Template NL Planned WO Day</i>")]:::recordLookupsRemoved
    
    
    Get_Email_Template_NL_REPlanned_WO[("<b>🔍 <em></em><br/>Get Email Template NL REPlanned WO</b>")]:::recordLookupsChanged
    click Get_Email_Template_NL_REPlanned_WO "#get_email_template_nl_replanned_wo" "992326223"
    
    
    Get_Email_Template_NL_REPlanned_WO_Day[("<i>🔍 <em></em><br/>Get Email Template NL REPlanned WO Day</i>")]:::recordLookupsRemoved
    
    Get_WO_Contact[("<i>🔍 <em></em><br/>Get WO Contact</i>")]:::recordLookupsRemoved
    click Get_WO_Contact "#get_wo_contact" "3176914413"
    
    
    Get_work_Order[("<b>🔍 <em></em><br/>Get Work Order</b>")]:::recordLookupsChanged
    
    
    click Get_work_Order "#get_work_order" "4186512945"
    
    
    Update_SA[("🛠️ <em></em><br/>Update SA")]:::recordUpdates
    click Update_SA "#update_sa" "310899656"
    
    
    REScheduled_WO_Send_ENG_mail -.-> Update_SA
    REScheduled_WO_Send_ENG_mail_Day -.-> Update_SA
    
    REScheduled_WO_Send_FR_mail --> Update_SA
    
    REScheduled_WO_Send_FR_mail_Day -.-> Update_SA
    
    REScheduled_WO_Send_NL_mail --> Update_SA
    
    REScheduled_WO_Send_NL_mail_Day -.-> Update_SA
    Scheduled_WO_Send_ENG_mail -.-> Update_SA
    Scheduled_WO_Send_ENG_mail_Day -.-> Update_SA
    
    Scheduled_WO_Send_FR_mail --> Update_SA
    
    Scheduled_WO_Send_FR_mail_Day -.-> Update_SA
    
    Scheduled_WO_Send_NL_mail --> Update_SA
    
    Scheduled_WO_Send_NL_mail_Day -.-> Update_SA
    
    Assign_email_Recipients --> Work_Order_Contact_with_Email_Found
    Contact_Language --> |"FR"| First_send_or_Resend_FR
    
    Contact_Language -.-> |"🟥<i>ENG</i>"| First_send_or_Resend_ENG
    
    Contact_Language --> |"NL"| First_send_or_Resend
    
    First_send_or_Resend -.-> |"🟥<i>First Send</i>"| Week_OR_Exact_Day5
    First_send_or_Resend -.-> |"🟥<i>Resend</i>"| Week_OR_Exact_Day6
    First_send_or_Resend_ENG -.-> |"🟥<i>First Send</i>"| Week_OR_Exact_Day3
    First_send_or_Resend_ENG -.-> |"🟥<i>Resend</i>"| Week_OR_Exact_Day4
    First_send_or_Resend_FR -.-> |"🟥<i>First Send</i>"| Week_OR_Exact_Day
    First_send_or_Resend_FR -.-> |"🟥<i>Resend</i>"| Week_OR_Exact_Day2
    Week_OR_Exact_Day -.-> |"🟥<i>Week</i>"| Get_Email_Template_FR_Planned_WO
    Week_OR_Exact_Day -.-> |"🟥<i>Day</i>"| Get_Email_Template_FR_Planned_WO_Day
    Week_OR_Exact_Day2 -.-> |"🟥<i>Week</i>"| Get_Email_Template_FR_REPlanned_WO
    Week_OR_Exact_Day2 -.-> |"🟥<i>Day</i>"| Get_Email_Template_FR_REPlanned_WO_Day
    Week_OR_Exact_Day3 -.-> |"🟥<i>Week</i>"| Get_Email_Template_ENG_Planned_WO
    Week_OR_Exact_Day3 -.-> |"🟥<i>Day</i>"| Get_Email_Template_ENG_Planned_WO_Day
    Week_OR_Exact_Day4 -.-> |"🟥<i>Week</i>"| Get_Email_Template_ENG_REPlanned_WO
    Week_OR_Exact_Day4 -.-> |"🟥<i>Day</i>"| Get_Email_Template_ENG_REPlanned_WO_Day
    Week_OR_Exact_Day5 -.-> |"🟥<i>Week</i>"| Get_Email_Template_NL_Planned_WO
    Week_OR_Exact_Day5 -.-> |"🟥<i>Day</i>"| Get_Email_Template_NL_Planned_WO_Day
    Week_OR_Exact_Day6 -.-> |"🟥<i>Week</i>"| Get_Email_Template_NL_REPlanned_WO
    Week_OR_Exact_Day6 -.-> |"🟥<i>Day</i>"| Get_Email_Template_NL_REPlanned_WO_Day
    
    First_send_or_Resend ==> |"🟩<b>First Send</b>"| Get_Email_Template_NL_Planned_WO
    First_send_or_Resend ==> |"🟩<b>Resend</b>"| Get_Email_Template_NL_REPlanned_WO
    First_send_or_Resend_FR ==> |"🟩<b>First Send</b>"| Get_Email_Template_FR_Planned_WO
    First_send_or_Resend_FR ==> |"🟩<b>Resend</b>"| Get_Email_Template_FR_REPlanned_WO
    Has_Intervention_Contact ==> |"🟩<b>Default Outcome</b>"| Get_Contacts
    
    Work_Order_Contact_with_Email_Found --> |"Yes"| Contact_Language
    Work_Order_Contact_with_Email_Found --> |"No"| END_Work_Order_Contact_with_Email_Found
    
    Get_Email_Template_ENG_Planned_WO -.-> Scheduled_WO_Send_ENG_mail
    Get_Email_Template_ENG_Planned_WO_Day -.-> Scheduled_WO_Send_ENG_mail_Day
    Get_Email_Template_ENG_REPlanned_WO -.-> REScheduled_WO_Send_ENG_mail
    Get_Email_Template_ENG_REPlanned_WO_Day -.-> REScheduled_WO_Send_ENG_mail_Day
    
    Get_Account ==> Has_Intervention_Contact
    Get_Contact_Relation ==> Get_Account
    Get_Contacts ==> Assign_email_Recipients
    
    Get_Email_Template_FR_Planned_WO --> Scheduled_WO_Send_FR_mail
    
    Get_Email_Template_FR_Planned_WO_Day -.-> Scheduled_WO_Send_FR_mail_Day
    
    Get_Email_Template_FR_REPlanned_WO --> REScheduled_WO_Send_FR_mail
    
    Get_Email_Template_FR_REPlanned_WO_Day -.-> REScheduled_WO_Send_FR_mail_Day
    
    Get_Email_Template_NL_Planned_WO --> Scheduled_WO_Send_NL_mail
    
    Get_Email_Template_NL_Planned_WO_Day -.-> Scheduled_WO_Send_NL_mail_Day
    
    Get_Email_Template_NL_REPlanned_WO --> REScheduled_WO_Send_NL_mail
    
    Get_Email_Template_NL_REPlanned_WO_Day -.-> REScheduled_WO_Send_NL_mail_Day
    Get_WO_Contact -.-> Assign_email_Recipients
    Get_work_Order -.-> Get_WO_Contact
    
    Get_work_Order ==> Get_Contact_Relation
    
    Update_SA --> END_Update_SA
    START -->  Get_work_Order
    END_Work_Order_Contact_with_Email_Found(( END )):::endClass
    END_Update_SA(( END )):::endClass
    
    
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
      
    linkStyle 34,35,36,37,38,45,46,47,58 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 0,1,3,5,6,7,9,11,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,41,42,43,44,49,51,53,55,56,57 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    <!-- Flow description -->
    
    ## General Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Active</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⚠️ Draft</b></span>|
    
    #### Schedules
    
    |Frequency|Start Date|Start Time|
    |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Daily</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Nov 20, 2024</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>06:00</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Daily</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Nov 19, 2024</b></span>|<span style="background-color: #a6e22e; color: black;"><b>11:25</b></span>|
    
    #### Filters (logic: **(1 AND 2 AND 3 AND 4) OR (1 AND 3 AND 5)**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>3</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Intervention_Registration__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Yes Mail</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>3</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Intervention_Registration__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Yes</b></span>|
    
    ## Flow Nodes Details
    
    
    ### 🟥REScheduled_WO_Send_ENG_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Action Call</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>REScheduled WO - Send ENG mail</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Action Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Email Simple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Action Name</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>emailSimple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Flow Transaction Model</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>CurrentTransaction</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Name Segment</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>emailSimple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Offset</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>0</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Version Segment</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Email Addresses Array (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Recipients</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Type (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>OrgWideEmailAddress</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Address (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>info@upeoconsulting.com</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Related Record Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_work_Order.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_WO_Contact.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Log Email On Send (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Email Template Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_Email_Template_ENG_REPlanned_WO.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Update_SA](#update_sa)</i></span>|
    
    ### 🟥REScheduled_WO_Send_ENG_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Action Call</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>REScheduled WO - Send ENG mail Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Action Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Email Simple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Action Name</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>emailSimple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Flow Transaction Model</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>CurrentTransaction</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Name Segment</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>emailSimple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Offset</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>0</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Version Segment</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Email Addresses Array (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Recipients</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Type (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>OrgWideEmailAddress</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Address (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>info@upeoconsulting.com</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Related Record Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_work_Order.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_WO_Contact.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Log Email On Send (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Email Template Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_Email_Template_ENG_REPlanned_WO_Day.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Update_SA](#update_sa)</i></span>|
    
    ### REScheduled_WO_Send_FR_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_WO_Contact.Id</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!Get_Contacts.Id}</b></span>|
    
    ### 🟥REScheduled_WO_Send_FR_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Action Call</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>REScheduled WO - Send FR mail Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Action Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Email Simple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Action Name</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>emailSimple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Flow Transaction Model</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>CurrentTransaction</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Name Segment</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>emailSimple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Offset</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>0</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Version Segment</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Email Addresses Array (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Recipients</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Type (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>OrgWideEmailAddress</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Address (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>info@upeoconsulting.com</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Related Record Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_work_Order.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_WO_Contact.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Log Email On Send (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Email Template Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_Email_Template_FR_REPlanned_WO_Day.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Update_SA](#update_sa)</i></span>|
    
    ### REScheduled_WO_Send_NL_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_WO_Contact.Id</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!Get_Contacts.Id}</b></span>|
    
    ### 🟥REScheduled_WO_Send_NL_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Action Call</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>REScheduled WO - Send NL mail Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Action Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Email Simple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Action Name</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>emailSimple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Flow Transaction Model</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>CurrentTransaction</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Name Segment</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>emailSimple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Offset</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>0</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Version Segment</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Email Addresses Array (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Recipients</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Type (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>OrgWideEmailAddress</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Address (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>info@upeoconsulting.com</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Related Record Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_work_Order.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_WO_Contact.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Log Email On Send (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Email Template Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_Email_Template_NL_REPlanned_WO_Day.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Update_SA](#update_sa)</i></span>|
    
    ### 🟥Scheduled_WO_Send_ENG_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Action Call</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Scheduled WO - Send ENG mail</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Action Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Email Simple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Action Name</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>emailSimple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Flow Transaction Model</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>CurrentTransaction</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Name Segment</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>emailSimple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Offset</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>0</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Version Segment</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Email Addresses Array (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Recipients</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Type (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>OrgWideEmailAddress</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Address (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>info@upeoconsulting.com</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Related Record Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_work_Order.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_WO_Contact.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Log Email On Send (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Email Template Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_Email_Template_ENG_Planned_WO.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Update_SA](#update_sa)</i></span>|
    
    ### 🟥Scheduled_WO_Send_ENG_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Action Call</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Scheduled WO - Send ENG mail Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Action Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Email Simple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Action Name</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>emailSimple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Flow Transaction Model</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>CurrentTransaction</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Name Segment</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>emailSimple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Offset</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>0</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Version Segment</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Email Addresses Array (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Recipients</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Type (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>OrgWideEmailAddress</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Address (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>info@upeoconsulting.com</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Related Record Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_work_Order.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_WO_Contact.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Log Email On Send (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Email Template Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_Email_Template_ENG_Planned_WO_Day.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Update_SA](#update_sa)</i></span>|
    
    ### Scheduled_WO_Send_FR_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_WO_Contact.Id</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!Get_Contacts.Id}</b></span>|
    
    ### 🟥Scheduled_WO_Send_FR_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Action Call</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Scheduled WO - Send FR mail Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Action Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Email Simple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Action Name</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>emailSimple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Flow Transaction Model</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>CurrentTransaction</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Name Segment</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>emailSimple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Offset</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>0</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Version Segment</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Email Addresses Array (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Recipients</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Type (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>OrgWideEmailAddress</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Address (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>info@upeoconsulting.com</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Related Record Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_work_Order.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_WO_Contact.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Log Email On Send (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Email Template Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_Email_Template_FR_Planned_WO_Day.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Update_SA](#update_sa)</i></span>|
    
    ### Scheduled_WO_Send_NL_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_WO_Contact.Id</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!Get_Contacts.Id}</b></span>|
    
    ### 🟥Scheduled_WO_Send_NL_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Action Call</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Scheduled WO - Send NL mail Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Action Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Email Simple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Action Name</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>emailSimple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Flow Transaction Model</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>CurrentTransaction</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Name Segment</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>emailSimple</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Offset</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>0</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Version Segment</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Email Addresses Array (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Recipients</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Type (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>OrgWideEmailAddress</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Address (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>info@upeoconsulting.com</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Related Record Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_work_Order.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_WO_Contact.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Log Email On Send (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Email Template Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_Email_Template_NL_Planned_WO_Day.Id</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Update_SA](#update_sa)</i></span>|
    
    ### Assign_email_Recipients
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipients</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Add</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_WO_Contact.Email</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipients</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Add</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Account.Intervention_Registration_Contact__c</b></span>|
    
    ### Contact_Language
    
    #### Rule FR (FR)
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_WO_Contact.Language__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>French</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Contacts.Language__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>French</b></span>|
    
    #### 🟥Rule ENG (ENG)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[First_send_or_Resend_ENG](#first_send_or_resend_eng)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Condition Logic</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>and</i></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_WO_Contact.Language__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>English</i></span>|
    
    ### First_send_or_Resend
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Week_OR_Exact_Day6](#week_or_exact_day6)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_NL_REPlanned_WO](#get_email_template_nl_replanned_wo)</b></span>|
    
    #### Rule First_Send (First Send)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Week_OR_Exact_Day5](#week_or_exact_day5)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_NL_Planned_WO](#get_email_template_nl_planned_wo)</b></span>|
    
    ### 🟥First_send_or_Resend_ENG
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Decision</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>First send or Resend ENG</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Week_OR_Exact_Day4](#week_or_exact_day4)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Resend</i></span>|
    
    #### 🟥Rule First_SendENG (First Send)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Week_OR_Exact_Day3](#week_or_exact_day3)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Condition Logic</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>and</i></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Scheduling_Notification_Send__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Not Send</i></span>|
    
    ### First_send_or_Resend_FR
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Week_OR_Exact_Day2](#week_or_exact_day2)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_FR_REPlanned_WO](#get_email_template_fr_replanned_wo)</b></span>|
    
    #### Rule First_SendFR (First Send)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Week_OR_Exact_Day](#week_or_exact_day)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_FR_Planned_WO](#get_email_template_fr_planned_wo)</b></span>|
    
    ### 🟥Week_OR_Exact_Day
    
    ### 🟩Has_Intervention_Contact
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Week OR Exact Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_FR_Planned_WO_Day](#get_email_template_fr_planned_wo_day)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Day</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Has Intervention Contact</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Contacts](#get_contacts)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Default Outcome</b></span>|
    
    #### 🟥Rule Week (Week)
    
    #### 🟩Rule No (No)
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_FR_Planned_WO](#get_email_template_fr_planned_wo)</i></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Account.Intervention_registration_type__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Week of Excecution</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Account.Intervention_Registration_Contact__r.Email</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    ### 🟥Week_OR_Exact_Day2
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Decision</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Week OR Exact Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_FR_REPlanned_WO_Day](#get_email_template_fr_replanned_wo_day)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Day</i></span>|
    
    #### 🟥Rule Week2 (Week)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_FR_REPlanned_WO](#get_email_template_fr_replanned_wo)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Condition Logic</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>and</i></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Account.Intervention_registration_type__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Week of Excecution</i></span>|
    
    ### 🟥Week_OR_Exact_Day3
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Decision</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Week OR Exact Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_ENG_Planned_WO_Day](#get_email_template_eng_planned_wo_day)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Day</i></span>|
    
    #### 🟥Rule Week3 (Week)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_ENG_Planned_WO](#get_email_template_eng_planned_wo)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Condition Logic</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>and</i></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Account.Intervention_registration_type__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Week of Excecution</i></span>|
    
    ### 🟥Week_OR_Exact_Day4
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Decision</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Week OR Exact Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_ENG_REPlanned_WO_Day](#get_email_template_eng_replanned_wo_day)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Day</i></span>|
    
    #### 🟥Rule Week4 (Week)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_ENG_REPlanned_WO](#get_email_template_eng_replanned_wo)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Condition Logic</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>and</i></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Account.Intervention_registration_type__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Week of Excecution</i></span>|
    
    ### 🟥Week_OR_Exact_Day5
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Decision</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Week OR Exact Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_NL_Planned_WO_Day](#get_email_template_nl_planned_wo_day)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Day</i></span>|
    
    #### 🟥Rule Week5 (Week)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_NL_Planned_WO](#get_email_template_nl_planned_wo)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Condition Logic</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>and</i></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Account.Intervention_registration_type__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Week of Excecution</i></span>|
    
    ### 🟥Week_OR_Exact_Day6
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Decision</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Week OR Exact Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_NL_REPlanned_WO_Day](#get_email_template_nl_replanned_wo_day)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Day</i></span>|
    
    #### 🟥Rule Week6 (Week)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_NL_REPlanned_WO](#get_email_template_nl_replanned_wo)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Condition Logic</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>and</i></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Account.Intervention_registration_type__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Week of Excecution</i></span>|
    
    ### Work_Order_Contact_with_Email_Found
    
    #### Rule Yes (Yes)
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>2</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_WO_Contact](#get_wo_contact)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Is Null</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Account.Intervention_Registration_Contact__r.Email</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    ### 🟥Get_Email_Template_ENG_Planned_WO
    
    ### 🟩Get_Account
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Object</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>EmailTemplate</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get Email Template ENG Planned WO</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Account</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Account</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Scheduled_WO_Send_ENG_mail](#scheduled_wo_send_eng_mail)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Has_Intervention_Contact](#has_intervention_contact)</b></span>|
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>DeveloperName</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Notification_Scheduled_WO_ENG_1732012994513</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.AccountId</b></span>|
    
    ### 🟥Get_Email_Template_ENG_Planned_WO_Day
    
    ### 🟩Get_Contact_Relation
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Object</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>EmailTemplate</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get Email Template ENG Planned WO Day</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>AccountContactRelation</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Contact Relation</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Scheduled_WO_Send_ENG_mail_Day](#scheduled_wo_send_eng_mail_day)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Account](#get_account)</b></span>|
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>DeveloperName</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Notification_Scheduled_WO_Day_ENG_1736149425060</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operational_SPOC__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>AccountId</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_work_Order.AccountId</b></span>|
    
    ### 🟥Get_Email_Template_ENG_REPlanned_WO
    
    ### 🟩Get_Contacts
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Object</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>EmailTemplate</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get Email Template ENG REPlanned WO</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Contact</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Contacts</b></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[REScheduled_WO_Send_ENG_mail](#rescheduled_wo_send_eng_mail)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Assign_email_Recipients](#assign_email_recipients)</b></span>|
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>DeveloperName</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Notification_REScheduled_WO_ENG_1732012846597</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Contact_Relation.ContactId</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Email</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    
    ### 🟥Get_Email_Template_ENG_REPlanned_WO_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Record Lookup</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Object</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>EmailTemplate</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get Email Template ENG REPlanned WO Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Assign Null Values If No Records Found</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Get First Record Only</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Store Output Automatically</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[REScheduled_WO_Send_ENG_mail_Day](#rescheduled_wo_send_eng_mail_day)</i></span>|
    
    #### 🟥Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>DeveloperName</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Notification_REScheduled_WO_Day_ENG_1736149508891</i></span>|
    
    ### 🟥Get_Email_Template_FR_Planned_WO_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Record Lookup</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Object</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>EmailTemplate</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get Email Template FR Planned WO Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Assign Null Values If No Records Found</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Get First Record Only</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Store Output Automatically</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Scheduled_WO_Send_FR_mail_Day](#scheduled_wo_send_fr_mail_day)</i></span>|
    
    #### 🟥Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>DeveloperName</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Notification_Scheduled_WO_Day_FR_1736149406556</i></span>|
    
    ### 🟥Get_Email_Template_FR_REPlanned_WO_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Record Lookup</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Object</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>EmailTemplate</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get Email Template FR REPlanned WO Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Assign Null Values If No Records Found</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Get First Record Only</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Store Output Automatically</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[REScheduled_WO_Send_FR_mail_Day](#rescheduled_wo_send_fr_mail_day)</i></span>|
    
    #### 🟥Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>DeveloperName</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Notification_REScheduled_WO_Day_FR_1736149468755</i></span>|
    
    ### 🟥Get_Email_Template_NL_Planned_WO_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Record Lookup</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Object</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>EmailTemplate</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get Email Template NL Planned WO Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Assign Null Values If No Records Found</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Get First Record Only</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Store Output Automatically</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Scheduled_WO_Send_NL_mail_Day](#scheduled_wo_send_nl_mail_day)</i></span>|
    
    #### 🟥Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>DeveloperName</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Notification_Scheduled_WO_Day_NL_1736149375605</i></span>|
    
    ### 🟥Get_Email_Template_NL_REPlanned_WO_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Record Lookup</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Object</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>EmailTemplate</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get Email Template NL REPlanned WO Day</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Assign Null Values If No Records Found</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Get First Record Only</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Store Output Automatically</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[REScheduled_WO_Send_NL_mail_Day](#rescheduled_wo_send_nl_mail_day)</i></span>|
    
    #### 🟥Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>DeveloperName</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Notification_REScheduled_WO_Day_NL_1736149449990</i></span>|
    
    ### 🟥Get_WO_Contact
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Record Lookup</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Object</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Contact</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get WO Contact</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Assign Null Values If No Records Found</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Get First Record Only</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Store Output Automatically</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Assign_email_Recipients](#assign_email_recipients)</i></span>|
    
    #### 🟥Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Id</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_work_Order.ContactId</i></span>|
    
    ### Get_work_Order
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_WO_Contact](#get_wo_contact)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Contact_Relation](#get_contact_relation)</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Jan 9, 2025"

    _Jan 9, 2025, by fpardon-upeo in commit Org state on 2025-01-09 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["<b>START<br/><b>AutoLaunched Flow</b></br>Type: <b> Scheduled</b></b>"]):::startClassChanged
    
    
    click START "#general-information" "1013521487"
    
    
    REScheduled_WO_Send_ENG_mail("<b>📧 <em></em><br/>REScheduled WO - Send ENG mail</b>"):::actionCallsChanged
    
    
    click REScheduled_WO_Send_ENG_mail "#rescheduled_wo_send_eng_mail" "1563395032"
    
    
    REScheduled_WO_Send_ENG_mail_Day("<b>📧 <em></em><br/>REScheduled WO - Send ENG mail Day</b>"):::actionCallsChanged
    
    
    click REScheduled_WO_Send_ENG_mail_Day "#rescheduled_wo_send_eng_mail_day" "808690215"
    
    
    REScheduled_WO_Send_FR_mail("<b>📧 <em></em><br/>REScheduled WO - Send FR mail</b>"):::actionCallsChanged
    
    
    click REScheduled_WO_Send_FR_mail "#rescheduled_wo_send_fr_mail" "4287079472"
    
    
    REScheduled_WO_Send_FR_mail_Day("<b>📧 <em></em><br/>REScheduled WO - Send FR mail Day</b>"):::actionCallsChanged
    
    
    click REScheduled_WO_Send_FR_mail_Day "#rescheduled_wo_send_fr_mail_day" "255685198"
    
    
    REScheduled_WO_Send_NL_mail("<b>📧 <em></em><br/>REScheduled WO - Send NL mail</b>"):::actionCallsChanged
    
    
    click REScheduled_WO_Send_NL_mail "#rescheduled_wo_send_nl_mail" "1573337660"
    
    
    REScheduled_WO_Send_NL_mail_Day("<b>📧 <em></em><br/>REScheduled WO - Send NL mail Day</b>"):::actionCallsChanged
    
    
    click REScheduled_WO_Send_NL_mail_Day "#rescheduled_wo_send_nl_mail_day" "272357784"
    
    
    Scheduled_WO_Send_ENG_mail("<b>📧 <em></em><br/>Scheduled WO - Send ENG mail</b>"):::actionCallsChanged
    
    
    click Scheduled_WO_Send_ENG_mail "#scheduled_wo_send_eng_mail" "3536185047"
    
    
    Scheduled_WO_Send_ENG_mail_Day("<b>📧 <em></em><br/>Scheduled WO - Send ENG mail Day</b>"):::actionCallsChanged
    
    
    click Scheduled_WO_Send_ENG_mail_Day "#scheduled_wo_send_eng_mail_day" "3169031084"
    
    
    Scheduled_WO_Send_FR_mail("<b>📧 <em></em><br/>Scheduled WO - Send FR mail</b>"):::actionCallsChanged
    
    
    click Scheduled_WO_Send_FR_mail "#scheduled_wo_send_fr_mail" "3873809746"
    
    
    Scheduled_WO_Send_FR_mail_Day("<b>📧 <em></em><br/>Scheduled WO - Send FR mail Day</b>"):::actionCallsChanged
    
    
    click Scheduled_WO_Send_FR_mail_Day "#scheduled_wo_send_fr_mail_day" "1542042991"
    
    
    Scheduled_WO_Send_NL_mail("<b>📧 <em></em><br/>Scheduled WO - Send NL mail</b>"):::actionCallsChanged
    
    
    click Scheduled_WO_Send_NL_mail "#scheduled_wo_send_nl_mail" "1697756540"
    
    
    Scheduled_WO_Send_NL_mail_Day("<b>📧 <em></em><br/>Scheduled WO - Send NL mail Day</b>"):::actionCallsChanged
    
    
    click Scheduled_WO_Send_NL_mail_Day "#scheduled_wo_send_nl_mail_day" "4068910866"
    
    
    Assign_email_Recipients[\"<b>🟰 <em></em><br/>Assign email Recipients</b>"/]:::assignmentsChanged
    
    
    click Assign_email_Recipients "#assign_email_recipients" "2562774588"
    
    
    Contact_Language{"<b>🔀 <em></em><br/>Contact Language</b>"}:::decisionsChanged
    
    
    click Contact_Language "#contact_language" "2831191991"
    
    
    First_send_or_Resend{"🔀 <em></em><br/>First send or Resend"}:::decisions
    click First_send_or_Resend "#first_send_or_resend" "99629469"
    
    First_send_or_Resend_ENG{"🔀 <em></em><br/>First send or Resend ENG"}:::decisions
    click First_send_or_Resend_ENG "#first_send_or_resend_eng" "1733880066"
    
    First_send_or_Resend_FR{"🔀 <em></em><br/>First send or Resend FR"}:::decisions
    click First_send_or_Resend_FR "#first_send_or_resend_fr" "3516670661"
    
    Week_OR_Exact_Day{"🔀 <em></em><br/>Week OR Exact Day"}:::decisions
    click Week_OR_Exact_Day "#week_or_exact_day" "3717360262"
    
    Week_OR_Exact_Day2{"🔀 <em></em><br/>Week OR Exact Day"}:::decisions
    click Week_OR_Exact_Day2 "#week_or_exact_day2" "3895424016"
    
    Week_OR_Exact_Day3{"🔀 <em></em><br/>Week OR Exact Day"}:::decisions
    click Week_OR_Exact_Day3 "#week_or_exact_day3" "1502737021"
    
    Week_OR_Exact_Day4{"🔀 <em></em><br/>Week OR Exact Day"}:::decisions
    click Week_OR_Exact_Day4 "#week_or_exact_day4" "3599736634"
    
    Week_OR_Exact_Day5{"🔀 <em></em><br/>Week OR Exact Day"}:::decisions
    click Week_OR_Exact_Day5 "#week_or_exact_day5" "767506239"
    
    Week_OR_Exact_Day6{"🔀 <em></em><br/>Week OR Exact Day"}:::decisions
    click Week_OR_Exact_Day6 "#week_or_exact_day6" "3028823591"
    
    Work_Order_Contact_with_Email_Found{"<b>🔀 <em></em><br/>Work Order & Contact with Email Found?</b>"}:::decisionsChanged
    
    
    click Work_Order_Contact_with_Email_Found "#work_order_contact_with_email_found" "3937827058"
    
    
    
    Get_Contact_Relation[("<i>🔍 <em></em><br/>Get Contact Relation</i>")]:::recordLookupsRemoved
    click Get_Contact_Relation "#get_contact_relation" "1669882529"
    
    Get_Contacts[("<i>🔍 <em></em><br/>Get Contacts</i>")]:::recordLookupsRemoved
    click Get_Contacts "#get_contacts" "1157115469"
    
    
    Get_Email_Template_ENG_Planned_WO[("🔍 <em></em><br/>Get Email Template ENG Planned WO")]:::recordLookups
    click Get_Email_Template_ENG_Planned_WO "#get_email_template_eng_planned_wo" "2513349678"
    
    Get_Email_Template_ENG_Planned_WO_Day[("🔍 <em></em><br/>Get Email Template ENG Planned WO Day")]:::recordLookups
    click Get_Email_Template_ENG_Planned_WO_Day "#get_email_template_eng_planned_wo_day" "758035772"
    
    Get_Email_Template_ENG_REPlanned_WO[("🔍 <em></em><br/>Get Email Template ENG REPlanned WO")]:::recordLookups
    click Get_Email_Template_ENG_REPlanned_WO "#get_email_template_eng_replanned_wo" "3189420705"
    
    Get_Email_Template_ENG_REPlanned_WO_Day[("🔍 <em></em><br/>Get Email Template ENG REPlanned WO Day")]:::recordLookups
    click Get_Email_Template_ENG_REPlanned_WO_Day "#get_email_template_eng_replanned_wo_day" "3255117414"
    
    Get_Email_Template_FR_Planned_WO[("🔍 <em></em><br/>Get Email Template FR Planned WO")]:::recordLookups
    click Get_Email_Template_FR_Planned_WO "#get_email_template_fr_planned_wo" "2811645755"
    
    Get_Email_Template_FR_Planned_WO_Day[("🔍 <em></em><br/>Get Email Template FR Planned WO Day")]:::recordLookups
    click Get_Email_Template_FR_Planned_WO_Day "#get_email_template_fr_planned_wo_day" "572459346"
    
    Get_Email_Template_FR_REPlanned_WO[("🔍 <em></em><br/>Get Email Template FR REPlanned WO")]:::recordLookups
    click Get_Email_Template_FR_REPlanned_WO "#get_email_template_fr_replanned_wo" "1431363291"
    
    Get_Email_Template_FR_REPlanned_WO_Day[("🔍 <em></em><br/>Get Email Template FR REPlanned WO Day")]:::recordLookups
    click Get_Email_Template_FR_REPlanned_WO_Day "#get_email_template_fr_replanned_wo_day" "1099289124"
    
    Get_Email_Template_NL_Planned_WO[("🔍 <em></em><br/>Get Email Template NL Planned WO")]:::recordLookups
    click Get_Email_Template_NL_Planned_WO "#get_email_template_nl_planned_wo" "1854158430"
    
    Get_Email_Template_NL_Planned_WO_Day[("🔍 <em></em><br/>Get Email Template NL Planned WO Day")]:::recordLookups
    click Get_Email_Template_NL_Planned_WO_Day "#get_email_template_nl_planned_wo_day" "2012126435"
    
    Get_Email_Template_NL_REPlanned_WO[("🔍 <em></em><br/>Get Email Template NL REPlanned WO")]:::recordLookups
    click Get_Email_Template_NL_REPlanned_WO "#get_email_template_nl_replanned_wo" "992326223"
    
    Get_Email_Template_NL_REPlanned_WO_Day[("🔍 <em></em><br/>Get Email Template NL REPlanned WO Day")]:::recordLookups
    click Get_Email_Template_NL_REPlanned_WO_Day "#get_email_template_nl_replanned_wo_day" "4076393078"
    
    
    Get_WO_Contact[("<b>🔍 <em></em><br/>Get WO Contact</b>")]:::recordLookupsAdded
    click Get_WO_Contact "#get_wo_contact" "3176914413"
    
    
    Get_work_Order[("<b>🔍 <em></em><br/>Get Work Order</b>")]:::recordLookupsChanged
    
    
    click Get_work_Order "#get_work_order" "1055462644"
    
    
    Update_SA[("🛠️ <em></em><br/>Update SA")]:::recordUpdates
    click Update_SA "#update_sa" "310899656"
    
    REScheduled_WO_Send_ENG_mail --> Update_SA
    REScheduled_WO_Send_ENG_mail_Day --> Update_SA
    REScheduled_WO_Send_FR_mail --> Update_SA
    REScheduled_WO_Send_FR_mail_Day --> Update_SA
    REScheduled_WO_Send_NL_mail --> Update_SA
    REScheduled_WO_Send_NL_mail_Day --> Update_SA
    Scheduled_WO_Send_ENG_mail --> Update_SA
    Scheduled_WO_Send_ENG_mail_Day --> Update_SA
    Scheduled_WO_Send_FR_mail --> Update_SA
    Scheduled_WO_Send_FR_mail_Day --> Update_SA
    Scheduled_WO_Send_NL_mail --> Update_SA
    Scheduled_WO_Send_NL_mail_Day --> Update_SA
    Assign_email_Recipients --> Work_Order_Contact_with_Email_Found
    Contact_Language --> |"FR"| First_send_or_Resend_FR
    Contact_Language --> |"ENG"| First_send_or_Resend_ENG
    Contact_Language --> |"NL"| First_send_or_Resend
    First_send_or_Resend --> |"First Send"| Week_OR_Exact_Day5
    First_send_or_Resend --> |"Resend"| Week_OR_Exact_Day6
    First_send_or_Resend_ENG --> |"First Send"| Week_OR_Exact_Day3
    First_send_or_Resend_ENG --> |"Resend"| Week_OR_Exact_Day4
    First_send_or_Resend_FR --> |"First Send"| Week_OR_Exact_Day
    First_send_or_Resend_FR --> |"Resend"| Week_OR_Exact_Day2
    Week_OR_Exact_Day --> |"Week"| Get_Email_Template_FR_Planned_WO
    Week_OR_Exact_Day --> |"Day"| Get_Email_Template_FR_Planned_WO_Day
    Week_OR_Exact_Day2 --> |"Week"| Get_Email_Template_FR_REPlanned_WO
    Week_OR_Exact_Day2 --> |"Day"| Get_Email_Template_FR_REPlanned_WO_Day
    Week_OR_Exact_Day3 --> |"Week"| Get_Email_Template_ENG_Planned_WO
    Week_OR_Exact_Day3 --> |"Day"| Get_Email_Template_ENG_Planned_WO_Day
    Week_OR_Exact_Day4 --> |"Week"| Get_Email_Template_ENG_REPlanned_WO
    Week_OR_Exact_Day4 --> |"Day"| Get_Email_Template_ENG_REPlanned_WO_Day
    Week_OR_Exact_Day5 --> |"Week"| Get_Email_Template_NL_Planned_WO
    Week_OR_Exact_Day5 --> |"Day"| Get_Email_Template_NL_Planned_WO_Day
    Week_OR_Exact_Day6 --> |"Week"| Get_Email_Template_NL_REPlanned_WO
    Week_OR_Exact_Day6 --> |"Day"| Get_Email_Template_NL_REPlanned_WO_Day
    Work_Order_Contact_with_Email_Found --> |"Yes"| Contact_Language
    Work_Order_Contact_with_Email_Found --> |"No"| END_Work_Order_Contact_with_Email_Found
    
    Get_Contact_Relation -.-> Get_Contacts
    Get_Contacts -.-> Assign_email_Recipients
    
    Get_Email_Template_ENG_Planned_WO --> Scheduled_WO_Send_ENG_mail
    Get_Email_Template_ENG_Planned_WO_Day --> Scheduled_WO_Send_ENG_mail_Day
    Get_Email_Template_ENG_REPlanned_WO --> REScheduled_WO_Send_ENG_mail
    Get_Email_Template_ENG_REPlanned_WO_Day --> REScheduled_WO_Send_ENG_mail_Day
    Get_Email_Template_FR_Planned_WO --> Scheduled_WO_Send_FR_mail
    Get_Email_Template_FR_Planned_WO_Day --> Scheduled_WO_Send_FR_mail_Day
    Get_Email_Template_FR_REPlanned_WO --> REScheduled_WO_Send_FR_mail
    Get_Email_Template_FR_REPlanned_WO_Day --> REScheduled_WO_Send_FR_mail_Day
    Get_Email_Template_NL_Planned_WO --> Scheduled_WO_Send_NL_mail
    Get_Email_Template_NL_Planned_WO_Day --> Scheduled_WO_Send_NL_mail_Day
    Get_Email_Template_NL_REPlanned_WO --> REScheduled_WO_Send_NL_mail
    Get_Email_Template_NL_REPlanned_WO_Day --> REScheduled_WO_Send_NL_mail_Day
    
    Get_work_Order -.-> Get_Contact_Relation
    
    Get_WO_Contact ==> Assign_email_Recipients
    Get_work_Order ==> Get_WO_Contact
    
    Update_SA --> END_Update_SA
    START -->  Get_work_Order
    END_Work_Order_Contact_with_Email_Found(( END )):::endClass
    END_Update_SA(( END )):::endClass
    
    
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
      
    linkStyle 51,52 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 36,37,50 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    <!-- Flow description -->
    
    ## General Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⚠️ Draft</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Active</b></span>|
    
    #### Filters (logic: **(1 AND 2 AND 3 AND 4) OR (1 AND 3 AND 5)**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>3</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Intervention_Registration__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Yes</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>3</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Intervention_Registration__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Yes Mail</b></span>|
    
    ## Flow Nodes Details
    
    ### REScheduled_WO_Send_ENG_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!Get_Contacts.Id}</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_WO_Contact.Id</b></span>|
    
    ### REScheduled_WO_Send_ENG_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!Get_Contacts.Id}</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_WO_Contact.Id</b></span>|
    
    ### REScheduled_WO_Send_FR_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!Get_Contacts.Id}</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_WO_Contact.Id</b></span>|
    
    ### REScheduled_WO_Send_FR_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!Get_Contacts.Id}</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_WO_Contact.Id</b></span>|
    
    ### REScheduled_WO_Send_NL_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!Get_Contacts.Id}</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_WO_Contact.Id</b></span>|
    
    ### REScheduled_WO_Send_NL_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!Get_Contacts.Id}</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_WO_Contact.Id</b></span>|
    
    ### Scheduled_WO_Send_ENG_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!Get_Contacts.Id}</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_WO_Contact.Id</b></span>|
    
    ### Scheduled_WO_Send_ENG_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!Get_Contacts.Id}</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_WO_Contact.Id</b></span>|
    
    ### Scheduled_WO_Send_FR_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!Get_Contacts.Id}</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_WO_Contact.Id</b></span>|
    
    ### Scheduled_WO_Send_FR_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!Get_Contacts.Id}</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_WO_Contact.Id</b></span>|
    
    ### Scheduled_WO_Send_NL_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!Get_Contacts.Id}</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_WO_Contact.Id</b></span>|
    
    ### Scheduled_WO_Send_NL_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipient Id (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>{!Get_Contacts.Id}</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_WO_Contact.Id</b></span>|
    
    ### Assign_email_Recipients
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Recipients</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Add</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_Contacts.Email</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipients</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Add</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_WO_Contact.Email</b></span>|
    
    ### Contact_Language
    
    #### Rule FR (FR)
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_Contacts.Language__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>French</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_WO_Contact.Language__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>French</b></span>|
    
    #### Rule ENG (ENG)
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_Contacts.Language__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>English</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_WO_Contact.Language__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>English</b></span>|
    
    ### Work_Order_Contact_with_Email_Found
    
    #### Rule Yes (Yes)
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>2</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Contacts](#get_contacts)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Is Null</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_WO_Contact](#get_wo_contact)</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    
    ### 🟥Get_Contact_Relation
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Record Lookup</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Object</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>AccountContactRelation</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get Contact Relation</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Assign Null Values If No Records Found</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Get First Record Only</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Store Output Automatically</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Contacts](#get_contacts)</i></span>|
    
    #### 🟥Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Operational_SPOC__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>2</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>AccountId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_work_Order.AccountId</i></span>|
    
    ### 🟥Get_Contacts
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Record Lookup</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Object</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Contact</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get Contacts</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Assign Null Values If No Records Found</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⬜</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Get First Record Only</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Store Output Automatically</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Assign_email_Recipients](#assign_email_recipients)</i></span>|
    
    #### 🟥Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Id</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Get_Contact_Relation.ContactId</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>2</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Email</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Is Null</i></span>|<span style="background-color: #ff7f7f; color: black;"><i><!-- --></i></span>|
    
    ### 🟩Get_WO_Contact
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Contact</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get WO Contact</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Assign_email_Recipients](#assign_email_recipients)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_work_Order.ContactId</b></span>|
    
    ### Get_work_Order
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Contact_Relation](#get_contact_relation)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_WO_Contact](#get_wo_contact)</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Jan 7, 2025"

    _Jan 7, 2025, by fpardon-upeo in commit Org state on 2025-01-07 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["<b>START<br/><b>AutoLaunched Flow</b></br>Type: <b> Scheduled</b></b>"]):::startClassChanged
    
    
    click START "#general-information" "1355914100"
    
    
    REScheduled_WO_Send_ENG_mail("<b>📧 <em></em><br/>REScheduled WO - Send ENG mail</b>"):::actionCallsChanged
    click REScheduled_WO_Send_ENG_mail "#rescheduled_wo_send_eng_mail" "2135964102"
    
    
    REScheduled_WO_Send_ENG_mail_Day("<b>📧 <em></em><br/>REScheduled WO - Send ENG mail Day</b>"):::actionCallsAdded
    click REScheduled_WO_Send_ENG_mail_Day "#rescheduled_wo_send_eng_mail_day" "1848631256"
    
    
    REScheduled_WO_Send_FR_mail("<b>📧 <em></em><br/>REScheduled WO - Send FR mail</b>"):::actionCallsChanged
    click REScheduled_WO_Send_FR_mail "#rescheduled_wo_send_fr_mail" "1298286610"
    
    
    REScheduled_WO_Send_FR_mail_Day("<b>📧 <em></em><br/>REScheduled WO - Send FR mail Day</b>"):::actionCallsAdded
    click REScheduled_WO_Send_FR_mail_Day "#rescheduled_wo_send_fr_mail_day" "3255687445"
    
    
    REScheduled_WO_Send_NL_mail("<b>📧 <em></em><br/>REScheduled WO - Send NL mail</b>"):::actionCallsChanged
    click REScheduled_WO_Send_NL_mail "#rescheduled_wo_send_nl_mail" "3265677256"
    
    
    REScheduled_WO_Send_NL_mail_Day("<b>📧 <em></em><br/>REScheduled WO - Send NL mail Day</b>"):::actionCallsAdded
    click REScheduled_WO_Send_NL_mail_Day "#rescheduled_wo_send_nl_mail_day" "3561876225"
    
    
    Scheduled_WO_Send_ENG_mail("<b>📧 <em></em><br/>Scheduled WO - Send ENG mail</b>"):::actionCallsChanged
    click Scheduled_WO_Send_ENG_mail "#scheduled_wo_send_eng_mail" "3544746943"
    
    
    Scheduled_WO_Send_ENG_mail_Day("<b>📧 <em></em><br/>Scheduled WO - Send ENG mail Day</b>"):::actionCallsAdded
    click Scheduled_WO_Send_ENG_mail_Day "#scheduled_wo_send_eng_mail_day" "4089875781"
    
    
    Scheduled_WO_Send_FR_mail("<b>📧 <em></em><br/>Scheduled WO - Send FR mail</b>"):::actionCallsChanged
    click Scheduled_WO_Send_FR_mail "#scheduled_wo_send_fr_mail" "3198771491"
    
    
    Scheduled_WO_Send_FR_mail_Day("<b>📧 <em></em><br/>Scheduled WO - Send FR mail Day</b>"):::actionCallsAdded
    click Scheduled_WO_Send_FR_mail_Day "#scheduled_wo_send_fr_mail_day" "1764086241"
    
    
    Scheduled_WO_Send_NL_mail("<b>📧 <em></em><br/>Scheduled WO - Send NL mail</b>"):::actionCallsChanged
    click Scheduled_WO_Send_NL_mail "#scheduled_wo_send_nl_mail" "4240238333"
    
    
    Scheduled_WO_Send_NL_mail_Day("<b>📧 <em></em><br/>Scheduled WO - Send NL mail Day</b>"):::actionCallsAdded
    click Scheduled_WO_Send_NL_mail_Day "#scheduled_wo_send_nl_mail_day" "1430351579"
    
    
    Assign_email_Recipients[\"🟰 <em></em><br/>Assign email Recipients"/]:::assignments
    click Assign_email_Recipients "#assign_email_recipients" "1274736035"
    
    Contact_Language{"🔀 <em></em><br/>Contact Language"}:::decisions
    click Contact_Language "#contact_language" "3593304308"
    
    First_send_or_Resend{"<b>🔀 <em></em><br/>First send or Resend</b>"}:::decisionsChanged
    
    
    click First_send_or_Resend "#first_send_or_resend" "99629469"
    
    
    First_send_or_Resend_ENG{"<b>🔀 <em></em><br/>First send or Resend ENG</b>"}:::decisionsChanged
    
    
    click First_send_or_Resend_ENG "#first_send_or_resend_eng" "1733880066"
    
    
    First_send_or_Resend_FR{"<b>🔀 <em></em><br/>First send or Resend FR</b>"}:::decisionsChanged
    
    
    click First_send_or_Resend_FR "#first_send_or_resend_fr" "3516670661"
    
    
    
    Week_OR_Exact_Day{"<b>🔀 <em></em><br/>Week OR Exact Day</b>"}:::decisionsAdded
    click Week_OR_Exact_Day "#week_or_exact_day" "3717360262"
    
    Week_OR_Exact_Day2{"<b>🔀 <em></em><br/>Week OR Exact Day</b>"}:::decisionsAdded
    click Week_OR_Exact_Day2 "#week_or_exact_day2" "3895424016"
    
    Week_OR_Exact_Day3{"<b>🔀 <em></em><br/>Week OR Exact Day</b>"}:::decisionsAdded
    click Week_OR_Exact_Day3 "#week_or_exact_day3" "1502737021"
    
    Week_OR_Exact_Day4{"<b>🔀 <em></em><br/>Week OR Exact Day</b>"}:::decisionsAdded
    click Week_OR_Exact_Day4 "#week_or_exact_day4" "3599736634"
    
    Week_OR_Exact_Day5{"<b>🔀 <em></em><br/>Week OR Exact Day</b>"}:::decisionsAdded
    click Week_OR_Exact_Day5 "#week_or_exact_day5" "767506239"
    
    Week_OR_Exact_Day6{"<b>🔀 <em></em><br/>Week OR Exact Day</b>"}:::decisionsAdded
    click Week_OR_Exact_Day6 "#week_or_exact_day6" "3028823591"
    
    
    Work_Order_Contact_with_Email_Found{"🔀 <em></em><br/>Work Order & Contact with Email Found?"}:::decisions
    click Work_Order_Contact_with_Email_Found "#work_order_contact_with_email_found" "531392331"
    
    Get_Contact_Relation[("🔍 <em></em><br/>Get Contact Relation")]:::recordLookups
    click Get_Contact_Relation "#get_contact_relation" "1669882529"
    
    Get_Contacts[("🔍 <em></em><br/>Get Contacts")]:::recordLookups
    click Get_Contacts "#get_contacts" "1157115469"
    
    Get_Email_Template_ENG_Planned_WO[("<b>🔍 <em></em><br/>Get Email Template ENG Planned WO</b>")]:::recordLookupsChanged
    click Get_Email_Template_ENG_Planned_WO "#get_email_template_eng_planned_wo" "2513349678"
    
    
    Get_Email_Template_ENG_Planned_WO_Day[("<b>🔍 <em></em><br/>Get Email Template ENG Planned WO Day</b>")]:::recordLookupsAdded
    click Get_Email_Template_ENG_Planned_WO_Day "#get_email_template_eng_planned_wo_day" "758035772"
    
    
    Get_Email_Template_ENG_REPlanned_WO[("<b>🔍 <em></em><br/>Get Email Template ENG REPlanned WO</b>")]:::recordLookupsChanged
    click Get_Email_Template_ENG_REPlanned_WO "#get_email_template_eng_replanned_wo" "3189420705"
    
    
    Get_Email_Template_ENG_REPlanned_WO_Day[("<b>🔍 <em></em><br/>Get Email Template ENG REPlanned WO Day</b>")]:::recordLookupsAdded
    click Get_Email_Template_ENG_REPlanned_WO_Day "#get_email_template_eng_replanned_wo_day" "3255117414"
    
    
    Get_Email_Template_FR_Planned_WO[("<b>🔍 <em></em><br/>Get Email Template FR Planned WO</b>")]:::recordLookupsChanged
    click Get_Email_Template_FR_Planned_WO "#get_email_template_fr_planned_wo" "2811645755"
    
    
    Get_Email_Template_FR_Planned_WO_Day[("<b>🔍 <em></em><br/>Get Email Template FR Planned WO Day</b>")]:::recordLookupsAdded
    click Get_Email_Template_FR_Planned_WO_Day "#get_email_template_fr_planned_wo_day" "572459346"
    
    
    Get_Email_Template_FR_REPlanned_WO[("<b>🔍 <em></em><br/>Get Email Template FR REPlanned WO</b>")]:::recordLookupsChanged
    click Get_Email_Template_FR_REPlanned_WO "#get_email_template_fr_replanned_wo" "1431363291"
    
    
    Get_Email_Template_FR_REPlanned_WO_Day[("<b>🔍 <em></em><br/>Get Email Template FR REPlanned WO Day</b>")]:::recordLookupsAdded
    click Get_Email_Template_FR_REPlanned_WO_Day "#get_email_template_fr_replanned_wo_day" "1099289124"
    
    
    Get_Email_Template_NL_Planned_WO[("<b>🔍 <em></em><br/>Get Email Template NL Planned WO</b>")]:::recordLookupsChanged
    click Get_Email_Template_NL_Planned_WO "#get_email_template_nl_planned_wo" "1854158430"
    
    
    Get_Email_Template_NL_Planned_WO_Day[("<b>🔍 <em></em><br/>Get Email Template NL Planned WO Day</b>")]:::recordLookupsAdded
    click Get_Email_Template_NL_Planned_WO_Day "#get_email_template_nl_planned_wo_day" "2012126435"
    
    
    Get_Email_Template_NL_REPlanned_WO[("<b>🔍 <em></em><br/>Get Email Template NL REPlanned WO</b>")]:::recordLookupsChanged
    click Get_Email_Template_NL_REPlanned_WO "#get_email_template_nl_replanned_wo" "992326223"
    
    
    Get_Email_Template_NL_REPlanned_WO_Day[("<b>🔍 <em></em><br/>Get Email Template NL REPlanned WO Day</b>")]:::recordLookupsAdded
    click Get_Email_Template_NL_REPlanned_WO_Day "#get_email_template_nl_replanned_wo_day" "4076393078"
    
    
    Get_work_Order[("🔍 <em></em><br/>Get Work Order")]:::recordLookups
    click Get_work_Order "#get_work_order" "4186512945"
    
    Update_SA[("🛠️ <em></em><br/>Update SA")]:::recordUpdates
    click Update_SA "#update_sa" "310899656"
    
    REScheduled_WO_Send_ENG_mail --> Update_SA
    
    REScheduled_WO_Send_ENG_mail_Day ==> Update_SA
    
    REScheduled_WO_Send_FR_mail --> Update_SA
    
    REScheduled_WO_Send_FR_mail_Day ==> Update_SA
    
    REScheduled_WO_Send_NL_mail --> Update_SA
    
    REScheduled_WO_Send_NL_mail_Day ==> Update_SA
    
    Scheduled_WO_Send_ENG_mail --> Update_SA
    
    Scheduled_WO_Send_ENG_mail_Day ==> Update_SA
    
    Scheduled_WO_Send_FR_mail --> Update_SA
    
    Scheduled_WO_Send_FR_mail_Day ==> Update_SA
    
    Scheduled_WO_Send_NL_mail --> Update_SA
    
    Scheduled_WO_Send_NL_mail_Day ==> Update_SA
    
    Assign_email_Recipients --> Work_Order_Contact_with_Email_Found
    Contact_Language --> |"FR"| First_send_or_Resend_FR
    Contact_Language --> |"ENG"| First_send_or_Resend_ENG
    Contact_Language --> |"NL"| First_send_or_Resend
    
    First_send_or_Resend -.-> |"🟥<i>First Send</i>"| Get_Email_Template_NL_Planned_WO
    First_send_or_Resend -.-> |"🟥<i>Resend</i>"| Get_Email_Template_NL_REPlanned_WO
    First_send_or_Resend_ENG -.-> |"🟥<i>First Send</i>"| Get_Email_Template_ENG_Planned_WO
    First_send_or_Resend_ENG -.-> |"🟥<i>Resend</i>"| Get_Email_Template_ENG_REPlanned_WO
    First_send_or_Resend_FR -.-> |"🟥<i>First Send</i>"| Get_Email_Template_FR_Planned_WO
    First_send_or_Resend_FR -.-> |"🟥<i>Resend</i>"| Get_Email_Template_FR_REPlanned_WO
    
    First_send_or_Resend ==> |"🟩<b>First Send</b>"| Week_OR_Exact_Day5
    First_send_or_Resend ==> |"🟩<b>Resend</b>"| Week_OR_Exact_Day6
    First_send_or_Resend_ENG ==> |"🟩<b>First Send</b>"| Week_OR_Exact_Day3
    First_send_or_Resend_ENG ==> |"🟩<b>Resend</b>"| Week_OR_Exact_Day4
    First_send_or_Resend_FR ==> |"🟩<b>First Send</b>"| Week_OR_Exact_Day
    First_send_or_Resend_FR ==> |"🟩<b>Resend</b>"| Week_OR_Exact_Day2
    Week_OR_Exact_Day ==> |"🟩<b>Week</b>"| Get_Email_Template_FR_Planned_WO
    Week_OR_Exact_Day ==> |"🟩<b>Day</b>"| Get_Email_Template_FR_Planned_WO_Day
    Week_OR_Exact_Day2 ==> |"🟩<b>Week</b>"| Get_Email_Template_FR_REPlanned_WO
    Week_OR_Exact_Day2 ==> |"🟩<b>Day</b>"| Get_Email_Template_FR_REPlanned_WO_Day
    Week_OR_Exact_Day3 ==> |"🟩<b>Week</b>"| Get_Email_Template_ENG_Planned_WO
    Week_OR_Exact_Day3 ==> |"🟩<b>Day</b>"| Get_Email_Template_ENG_Planned_WO_Day
    Week_OR_Exact_Day4 ==> |"🟩<b>Week</b>"| Get_Email_Template_ENG_REPlanned_WO
    Week_OR_Exact_Day4 ==> |"🟩<b>Day</b>"| Get_Email_Template_ENG_REPlanned_WO_Day
    Week_OR_Exact_Day5 ==> |"🟩<b>Week</b>"| Get_Email_Template_NL_Planned_WO
    Week_OR_Exact_Day5 ==> |"🟩<b>Day</b>"| Get_Email_Template_NL_Planned_WO_Day
    Week_OR_Exact_Day6 ==> |"🟩<b>Week</b>"| Get_Email_Template_NL_REPlanned_WO
    Week_OR_Exact_Day6 ==> |"🟩<b>Day</b>"| Get_Email_Template_NL_REPlanned_WO_Day
    
    Work_Order_Contact_with_Email_Found --> |"Yes"| Contact_Language
    Work_Order_Contact_with_Email_Found --> |"No"| END_Work_Order_Contact_with_Email_Found
    Get_Contact_Relation --> Get_Contacts
    Get_Contacts --> Assign_email_Recipients
    Get_Email_Template_ENG_Planned_WO --> Scheduled_WO_Send_ENG_mail
    
    Get_Email_Template_ENG_Planned_WO_Day ==> Scheduled_WO_Send_ENG_mail_Day
    
    Get_Email_Template_ENG_REPlanned_WO --> REScheduled_WO_Send_ENG_mail
    
    Get_Email_Template_ENG_REPlanned_WO_Day ==> REScheduled_WO_Send_ENG_mail_Day
    
    Get_Email_Template_FR_Planned_WO --> Scheduled_WO_Send_FR_mail
    
    Get_Email_Template_FR_Planned_WO_Day ==> Scheduled_WO_Send_FR_mail_Day
    
    Get_Email_Template_FR_REPlanned_WO --> REScheduled_WO_Send_FR_mail
    
    Get_Email_Template_FR_REPlanned_WO_Day ==> REScheduled_WO_Send_FR_mail_Day
    
    Get_Email_Template_NL_Planned_WO --> Scheduled_WO_Send_NL_mail
    
    Get_Email_Template_NL_Planned_WO_Day ==> Scheduled_WO_Send_NL_mail_Day
    
    Get_Email_Template_NL_REPlanned_WO --> REScheduled_WO_Send_NL_mail
    
    Get_Email_Template_NL_REPlanned_WO_Day ==> REScheduled_WO_Send_NL_mail_Day
    
    Get_work_Order --> Get_Contact_Relation
    Update_SA --> END_Update_SA
    START -->  Get_work_Order
    END_Work_Order_Contact_with_Email_Found(( END )):::endClass
    END_Update_SA(( END )):::endClass
    
    
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
      
    linkStyle 1,3,5,7,9,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,45,47,49,51,53,55 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 16,17,18,19,20,21 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    <!-- Flow description -->
    
    ## General Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Active</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⚠️ Draft</b></span>|
    
    ## Flow Nodes Details
    
    ### 🟩REScheduled_WO_Send_ENG_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Action Call</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>REScheduled WO - Send ENG mail Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Email Simple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Flow Transaction Model</b></span>|<span style="background-color: #a6e22e; color: black;"><b>CurrentTransaction</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Name Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Offset</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Version Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Addresses Array (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Recipients</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Type (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OrgWideEmailAddress</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Address (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>info@upeoconsulting.com</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Related Record Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_work_Order.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!Get_Contacts.Id}</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Log Email On Send (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Template Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Email_Template_ENG_REPlanned_WO_Day.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_SA](#update_sa)</b></span>|
    
    ### 🟩REScheduled_WO_Send_FR_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Action Call</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>REScheduled WO - Send FR mail Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Email Simple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Flow Transaction Model</b></span>|<span style="background-color: #a6e22e; color: black;"><b>CurrentTransaction</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Name Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Offset</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Version Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Addresses Array (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Recipients</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Type (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OrgWideEmailAddress</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Address (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>info@upeoconsulting.com</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Related Record Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_work_Order.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!Get_Contacts.Id}</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Log Email On Send (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Template Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Email_Template_FR_REPlanned_WO_Day.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_SA](#update_sa)</b></span>|
    
    ### 🟩REScheduled_WO_Send_NL_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Action Call</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>REScheduled WO - Send NL mail Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Email Simple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Flow Transaction Model</b></span>|<span style="background-color: #a6e22e; color: black;"><b>CurrentTransaction</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Name Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Offset</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Version Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Addresses Array (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Recipients</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Type (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OrgWideEmailAddress</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Address (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>info@upeoconsulting.com</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Related Record Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_work_Order.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!Get_Contacts.Id}</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Log Email On Send (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Template Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Email_Template_NL_REPlanned_WO_Day.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_SA](#update_sa)</b></span>|
    
    ### 🟩Scheduled_WO_Send_ENG_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Action Call</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Scheduled WO - Send ENG mail Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Email Simple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Flow Transaction Model</b></span>|<span style="background-color: #a6e22e; color: black;"><b>CurrentTransaction</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Name Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Offset</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Version Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Addresses Array (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Recipients</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Type (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OrgWideEmailAddress</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Address (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>info@upeoconsulting.com</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Related Record Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_work_Order.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!Get_Contacts.Id}</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Log Email On Send (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Template Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Email_Template_ENG_Planned_WO_Day.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_SA](#update_sa)</b></span>|
    
    ### 🟩Scheduled_WO_Send_FR_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Action Call</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Scheduled WO - Send FR mail Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Email Simple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Flow Transaction Model</b></span>|<span style="background-color: #a6e22e; color: black;"><b>CurrentTransaction</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Name Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Offset</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Version Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Addresses Array (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Recipients</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Type (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OrgWideEmailAddress</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Address (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>info@upeoconsulting.com</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Related Record Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_work_Order.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!Get_Contacts.Id}</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Log Email On Send (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Template Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Email_Template_FR_Planned_WO_Day.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_SA](#update_sa)</b></span>|
    
    ### 🟩Scheduled_WO_Send_NL_mail_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Action Call</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Scheduled WO - Send NL mail Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Email Simple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Flow Transaction Model</b></span>|<span style="background-color: #a6e22e; color: black;"><b>CurrentTransaction</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Name Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Offset</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Version Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Addresses Array (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Recipients</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Type (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OrgWideEmailAddress</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Address (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>info@upeoconsulting.com</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Related Record Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_work_Order.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!Get_Contacts.Id}</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Log Email On Send (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Template Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Email_Template_NL_Planned_WO_Day.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_SA](#update_sa)</b></span>|
    
    ### First_send_or_Resend
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_NL_REPlanned_WO](#get_email_template_nl_replanned_wo)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Week_OR_Exact_Day6](#week_or_exact_day6)</b></span>|
    
    #### Rule First_Send (First Send)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_NL_Planned_WO](#get_email_template_nl_planned_wo)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Week_OR_Exact_Day5](#week_or_exact_day5)</b></span>|
    
    ### First_send_or_Resend_ENG
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_ENG_REPlanned_WO](#get_email_template_eng_replanned_wo)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Week_OR_Exact_Day4](#week_or_exact_day4)</b></span>|
    
    #### Rule First_SendENG (First Send)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_ENG_Planned_WO](#get_email_template_eng_planned_wo)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Week_OR_Exact_Day3](#week_or_exact_day3)</b></span>|
    
    ### First_send_or_Resend_FR
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_FR_REPlanned_WO](#get_email_template_fr_replanned_wo)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Week_OR_Exact_Day2](#week_or_exact_day2)</b></span>|
    
    #### Rule First_SendFR (First Send)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Get_Email_Template_FR_Planned_WO](#get_email_template_fr_planned_wo)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Week_OR_Exact_Day](#week_or_exact_day)</b></span>|
    
    ### 🟩Week_OR_Exact_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Week OR Exact Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_FR_Planned_WO_Day](#get_email_template_fr_planned_wo_day)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Day</b></span>|
    
    #### 🟩Rule Week (Week)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_FR_Planned_WO](#get_email_template_fr_planned_wo)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Account.Intervention_registration_type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Week of Excecution</b></span>|
    
    ### 🟩Week_OR_Exact_Day2
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Week OR Exact Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_FR_REPlanned_WO_Day](#get_email_template_fr_replanned_wo_day)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Day</b></span>|
    
    #### 🟩Rule Week2 (Week)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_FR_REPlanned_WO](#get_email_template_fr_replanned_wo)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Account.Intervention_registration_type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Week of Excecution</b></span>|
    
    ### 🟩Week_OR_Exact_Day3
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Week OR Exact Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_ENG_Planned_WO_Day](#get_email_template_eng_planned_wo_day)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Day</b></span>|
    
    #### 🟩Rule Week3 (Week)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_ENG_Planned_WO](#get_email_template_eng_planned_wo)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Account.Intervention_registration_type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Week of Excecution</b></span>|
    
    ### 🟩Week_OR_Exact_Day4
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Week OR Exact Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_ENG_REPlanned_WO_Day](#get_email_template_eng_replanned_wo_day)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Day</b></span>|
    
    #### 🟩Rule Week4 (Week)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_ENG_REPlanned_WO](#get_email_template_eng_replanned_wo)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Account.Intervention_registration_type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Week of Excecution</b></span>|
    
    ### 🟩Week_OR_Exact_Day5
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Week OR Exact Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_NL_Planned_WO_Day](#get_email_template_nl_planned_wo_day)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Day</b></span>|
    
    #### 🟩Rule Week5 (Week)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_NL_Planned_WO](#get_email_template_nl_planned_wo)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Account.Intervention_registration_type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Week of Excecution</b></span>|
    
    ### 🟩Week_OR_Exact_Day6
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Week OR Exact Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_NL_REPlanned_WO_Day](#get_email_template_nl_replanned_wo_day)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Day</b></span>|
    
    #### 🟩Rule Week6 (Week)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_NL_REPlanned_WO](#get_email_template_nl_replanned_wo)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Account.Intervention_registration_type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Week of Excecution</b></span>|
    
    ### 🟩Get_Email_Template_ENG_Planned_WO_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EmailTemplate</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Email Template ENG Planned WO Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Scheduled_WO_Send_ENG_mail_Day](#scheduled_wo_send_eng_mail_day)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>DeveloperName</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Notification_Scheduled_WO_Day_ENG_1736149425060</b></span>|
    
    ### 🟩Get_Email_Template_ENG_REPlanned_WO_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EmailTemplate</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Email Template ENG REPlanned WO Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[REScheduled_WO_Send_ENG_mail_Day](#rescheduled_wo_send_eng_mail_day)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>DeveloperName</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Notification_REScheduled_WO_Day_ENG_1736149508891</b></span>|
    
    ### 🟩Get_Email_Template_FR_Planned_WO_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EmailTemplate</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Email Template FR Planned WO Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Scheduled_WO_Send_FR_mail_Day](#scheduled_wo_send_fr_mail_day)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>DeveloperName</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Notification_Scheduled_WO_Day_FR_1736149406556</b></span>|
    
    ### 🟩Get_Email_Template_FR_REPlanned_WO_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EmailTemplate</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Email Template FR REPlanned WO Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[REScheduled_WO_Send_FR_mail_Day](#rescheduled_wo_send_fr_mail_day)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>DeveloperName</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Notification_REScheduled_WO_Day_FR_1736149468755</b></span>|
    
    ### 🟩Get_Email_Template_NL_Planned_WO_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EmailTemplate</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Email Template NL Planned WO Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Scheduled_WO_Send_NL_mail_Day](#scheduled_wo_send_nl_mail_day)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>DeveloperName</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Notification_Scheduled_WO_Day_NL_1736149375605</b></span>|
    
    ### 🟩Get_Email_Template_NL_REPlanned_WO_Day
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EmailTemplate</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Email Template NL REPlanned WO Day</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[REScheduled_WO_Send_NL_mail_Day](#rescheduled_wo_send_nl_mail_day)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>DeveloperName</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Notification_REScheduled_WO_Day_NL_1736149449990</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 20, 2024"

    _Nov 20, 2024, by fpardon-upeo in commit Org state on 2024-11-20 00:24 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["<b>START<br/><b>AutoLaunched Flow</b></br>Type: <b> Scheduled</b></b>"]):::startClassChanged
    
    
    click START "#general-information" "1013521487"
    
    
    
    REScheduled_WO_Send_ENG_mail("<b>📧 <em></em><br/>REScheduled WO - Send ENG mail</b>"):::actionCallsAdded
    click REScheduled_WO_Send_ENG_mail "#rescheduled_wo_send_eng_mail" "2135964102"
    
    REScheduled_WO_Send_FR_mail("<b>📧 <em></em><br/>REScheduled WO - Send FR mail</b>"):::actionCallsAdded
    click REScheduled_WO_Send_FR_mail "#rescheduled_wo_send_fr_mail" "1298286610"
    
    REScheduled_WO_Send_NL_mail("<b>📧 <em></em><br/>REScheduled WO - Send NL mail</b>"):::actionCallsAdded
    click REScheduled_WO_Send_NL_mail "#rescheduled_wo_send_nl_mail" "3265677256"
    
    Scheduled_WO_Send_ENG_mail("<b>📧 <em></em><br/>Scheduled WO - Send ENG mail</b>"):::actionCallsAdded
    click Scheduled_WO_Send_ENG_mail "#scheduled_wo_send_eng_mail" "3544746943"
    
    Scheduled_WO_Send_FR_mail("<b>📧 <em></em><br/>Scheduled WO - Send FR mail</b>"):::actionCallsAdded
    click Scheduled_WO_Send_FR_mail "#scheduled_wo_send_fr_mail" "3198771491"
    
    
    Scheduled_WO_Send_NL_mail("<b>📧 <em></em><br/>Scheduled WO - Send NL mail</b>"):::actionCallsChanged
    
    
    click Scheduled_WO_Send_NL_mail "#scheduled_wo_send_nl_mail" "4240238333"
    
    
    Assign_email_Recipients[\"🟰 <em></em><br/>Assign email Recipients"/]:::assignments
    click Assign_email_Recipients "#assign_email_recipients" "1274736035"
    
    Contact_Language{"<b>🔀 <em></em><br/>Contact Language</b>"}:::decisionsChanged
    
    
    click Contact_Language "#contact_language" "3593304308"
    
    
    First_send_or_Resend{"<b>🔀 <em></em><br/>First send or Resend</b>"}:::decisionsChanged
    
    
    click First_send_or_Resend "#first_send_or_resend" "3045810356"
    
    
    
    First_send_or_Resend_ENG{"<b>🔀 <em></em><br/>First send or Resend ENG</b>"}:::decisionsAdded
    click First_send_or_Resend_ENG "#first_send_or_resend_eng" "1805869661"
    
    
    First_send_or_Resend_FR{"<b>🔀 <em></em><br/>First send or Resend FR</b>"}:::decisionsChanged
    
    
    click First_send_or_Resend_FR "#first_send_or_resend_fr" "3510732964"
    
    
    Work_Order_Contact_with_Email_Found{"🔀 <em></em><br/>Work Order & Contact with Email Found?"}:::decisions
    click Work_Order_Contact_with_Email_Found "#work_order_contact_with_email_found" "531392331"
    
    Get_Contact_Relation[("<b>🔍 <em></em><br/>Get Contact Relation</b>")]:::recordLookupsChanged
    
    
    click Get_Contact_Relation "#get_contact_relation" "1669882529"
    
    
    Get_Contacts[("<b>🔍 <em></em><br/>Get Contacts</b>")]:::recordLookupsChanged
    
    
    click Get_Contacts "#get_contacts" "1157115469"
    
    
    
    Get_Email_Template_ENG_Planned_WO[("<b>🔍 <em></em><br/>Get Email Template ENG Planned WO</b>")]:::recordLookupsAdded
    click Get_Email_Template_ENG_Planned_WO "#get_email_template_eng_planned_wo" "2513349678"
    
    Get_Email_Template_ENG_REPlanned_WO[("<b>🔍 <em></em><br/>Get Email Template ENG REPlanned WO</b>")]:::recordLookupsAdded
    click Get_Email_Template_ENG_REPlanned_WO "#get_email_template_eng_replanned_wo" "3189420705"
    
    Get_Email_Template_FR_Planned_WO[("<b>🔍 <em></em><br/>Get Email Template FR Planned WO</b>")]:::recordLookupsAdded
    click Get_Email_Template_FR_Planned_WO "#get_email_template_fr_planned_wo" "2811645755"
    
    Get_Email_Template_FR_REPlanned_WO[("<b>🔍 <em></em><br/>Get Email Template FR REPlanned WO</b>")]:::recordLookupsAdded
    click Get_Email_Template_FR_REPlanned_WO "#get_email_template_fr_replanned_wo" "1431363291"
    
    
    Get_Email_Template_NL_Planned_WO[("🔍 <em></em><br/>Get Email Template NL Planned WO")]:::recordLookups
    click Get_Email_Template_NL_Planned_WO "#get_email_template_nl_planned_wo" "1854158430"
    
    
    Get_Email_Template_NL_REPlanned_WO[("<b>🔍 <em></em><br/>Get Email Template NL REPlanned WO</b>")]:::recordLookupsAdded
    click Get_Email_Template_NL_REPlanned_WO "#get_email_template_nl_replanned_wo" "992326223"
    
    
    Get_work_Order[("<b>🔍 <em></em><br/>Get Work Order</b>")]:::recordLookupsChanged
    
    
    click Get_work_Order "#get_work_order" "4186512945"
    
    
    Update_SA[("🛠️ <em></em><br/>Update SA")]:::recordUpdates
    click Update_SA "#update_sa" "310899656"
    
    
    REScheduled_WO_Send_ENG_mail ==> Update_SA
    REScheduled_WO_Send_FR_mail ==> Update_SA
    REScheduled_WO_Send_NL_mail ==> Update_SA
    Scheduled_WO_Send_ENG_mail ==> Update_SA
    Scheduled_WO_Send_FR_mail ==> Update_SA
    
    Scheduled_WO_Send_NL_mail --> Update_SA
    Assign_email_Recipients --> Work_Order_Contact_with_Email_Found
    Contact_Language --> |"FR"| First_send_or_Resend_FR
    
    Contact_Language ==> |"🟩<b>ENG</b>"| First_send_or_Resend_ENG
    
    Contact_Language --> |"NL"| First_send_or_Resend
    First_send_or_Resend --> |"First Send"| Get_Email_Template_NL_Planned_WO
    
    First_send_or_Resend -.-> |"🟥<i>Resend</i>"| Update_SA
    First_send_or_Resend_FR -.-> |"🟥<i>Copy 1 of First Send</i>"| Update_SA
    First_send_or_Resend_FR -.-> |"🟥<i>Resend</i>"| Update_SA
    
    First_send_or_Resend ==> |"🟩<b>Resend</b>"| Get_Email_Template_NL_REPlanned_WO
    First_send_or_Resend_ENG ==> |"🟩<b>First Send</b>"| Get_Email_Template_ENG_Planned_WO
    First_send_or_Resend_ENG ==> |"🟩<b>Resend</b>"| Get_Email_Template_ENG_REPlanned_WO
    First_send_or_Resend_FR ==> |"🟩<b>First Send</b>"| Get_Email_Template_FR_Planned_WO
    First_send_or_Resend_FR ==> |"🟩<b>Resend</b>"| Get_Email_Template_FR_REPlanned_WO
    
    Work_Order_Contact_with_Email_Found --> |"Yes"| Contact_Language
    Work_Order_Contact_with_Email_Found --> |"No"| END_Work_Order_Contact_with_Email_Found
    Get_Contact_Relation --> Get_Contacts
    Get_Contacts --> Assign_email_Recipients
    
    Get_Email_Template_ENG_Planned_WO ==> Scheduled_WO_Send_ENG_mail
    Get_Email_Template_ENG_REPlanned_WO ==> REScheduled_WO_Send_ENG_mail
    Get_Email_Template_FR_Planned_WO ==> Scheduled_WO_Send_FR_mail
    Get_Email_Template_FR_REPlanned_WO ==> REScheduled_WO_Send_FR_mail
    
    Get_Email_Template_NL_Planned_WO --> Scheduled_WO_Send_NL_mail
    
    Get_Email_Template_NL_REPlanned_WO ==> REScheduled_WO_Send_NL_mail
    
    Get_work_Order --> Get_Contact_Relation
    Update_SA --> END_Update_SA
    START -->  Get_work_Order
    END_Work_Order_Contact_with_Email_Found(( END )):::endClass
    END_Update_SA(( END )):::endClass
    
    
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
      
    linkStyle 0,1,2,3,4,8,14,15,16,17,18,23,24,25,26,28 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 11,12,13 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    <!-- Flow description -->
    
    ## General Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⚠️ Draft</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Active</b></span>|
    
    #### Schedules
    
    |Frequency|Start Date|Start Time|
    |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Daily</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Nov 18, 2024</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>01:00</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Daily</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Nov 20, 2024</b></span>|<span style="background-color: #a6e22e; color: black;"><b>06:00</b></span>|
    
    ## Flow Nodes Details
    
    
    ### 🟩REScheduled_WO_Send_ENG_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Action Call</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>REScheduled WO - Send ENG mail</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Email Simple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Flow Transaction Model</b></span>|<span style="background-color: #a6e22e; color: black;"><b>CurrentTransaction</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Name Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Offset</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Version Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Addresses Array (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Recipients</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Type (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OrgWideEmailAddress</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Address (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>info@upeoconsulting.com</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Related Record Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_work_Order.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!Get_Contacts.Id}</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Log Email On Send (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Template Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Email_Template_ENG_REPlanned_WO.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_SA](#update_sa)</b></span>|
    
    ### 🟩REScheduled_WO_Send_FR_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Action Call</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>REScheduled WO - Send FR mail</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Email Simple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Flow Transaction Model</b></span>|<span style="background-color: #a6e22e; color: black;"><b>CurrentTransaction</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Name Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Offset</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Version Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Addresses Array (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Recipients</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Type (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OrgWideEmailAddress</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Address (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>info@upeoconsulting.com</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Related Record Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_work_Order.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!Get_Contacts.Id}</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Log Email On Send (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Template Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Email_Template_FR_REPlanned_WO.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_SA](#update_sa)</b></span>|
    
    ### 🟩REScheduled_WO_Send_NL_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Action Call</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>REScheduled WO - Send NL mail</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Email Simple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Flow Transaction Model</b></span>|<span style="background-color: #a6e22e; color: black;"><b>CurrentTransaction</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Name Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Offset</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Version Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Addresses Array (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Recipients</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Type (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OrgWideEmailAddress</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Address (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>info@upeoconsulting.com</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Related Record Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_work_Order.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!Get_Contacts.Id}</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Log Email On Send (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Template Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Email_Template_NL_REPlanned_WO.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_SA](#update_sa)</b></span>|
    
    ### 🟩Scheduled_WO_Send_ENG_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Action Call</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Scheduled WO - Send ENG mail</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Email Simple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Flow Transaction Model</b></span>|<span style="background-color: #a6e22e; color: black;"><b>CurrentTransaction</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Name Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Offset</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Version Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Addresses Array (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Recipients</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Type (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OrgWideEmailAddress</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Address (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>info@upeoconsulting.com</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Related Record Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_work_Order.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!Get_Contacts.Id}</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Log Email On Send (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Template Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Email_Template_ENG_Planned_WO.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_SA](#update_sa)</b></span>|
    
    ### 🟩Scheduled_WO_Send_FR_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Action Call</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Scheduled WO - Send FR mail</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Email Simple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Action Name</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Flow Transaction Model</b></span>|<span style="background-color: #a6e22e; color: black;"><b>CurrentTransaction</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Name Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>emailSimple</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Offset</b></span>|<span style="background-color: #a6e22e; color: black;"><b>0</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Version Segment</b></span>|<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Addresses Array (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Recipients</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Type (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OrgWideEmailAddress</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Address (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>info@upeoconsulting.com</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Related Record Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_work_Order.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Recipient Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>{!Get_Contacts.Id}</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Log Email On Send (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Email Template Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Email_Template_FR_Planned_WO.Id</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Update_SA](#update_sa)</b></span>|
    
    ### Scheduled_WO_Send_NL_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Type (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i><!-- --></i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Sender Address (input)</i></span>|<span style="background-color: #ff7f7f; color: black;"><i><!-- --></i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Type (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>OrgWideEmailAddress</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Sender Address (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>info@upeoconsulting.com</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Related Record Id (input)</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_work_Order.Id</b></span>|
    
    ### Contact_Language
    
    #### 🟩Rule ENG (ENG)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[First_send_or_Resend_ENG](#first_send_or_resend_eng)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get_Contacts.Language__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>English</b></span>|
    
    ### First_send_or_Resend
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Update_SA](#update_sa)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_NL_REPlanned_WO](#get_email_template_nl_replanned_wo)</b></span>|
    
    ### 🟩First_send_or_Resend_ENG
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>First send or Resend ENG</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_ENG_REPlanned_WO](#get_email_template_eng_replanned_wo)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Resend</b></span>|
    
    #### 🟩Rule First_SendENG (First Send)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_ENG_Planned_WO](#get_email_template_eng_planned_wo)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Scheduling_Notification_Send__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Not Send</b></span>|
    
    ### First_send_or_Resend_FR
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Default Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Update_SA](#update_sa)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_FR_REPlanned_WO](#get_email_template_fr_replanned_wo)</b></span>|
    
    #### 🟥Rule Copy_1_of_First_Send (Copy 1 of First Send)
    
    #### 🟩Rule First_SendFR (First Send)
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Update_SA](#update_sa)</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Get_Email_Template_FR_Planned_WO](#get_email_template_fr_planned_wo)</b></span>|
    
    ### Get_Contact_Relation
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Intervention_Registration_Contact__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Operational_SPOC__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    
    ### Get_Contacts
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Email</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    
    ### 🟩Get_Email_Template_ENG_Planned_WO
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EmailTemplate</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Email Template ENG Planned WO</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Scheduled_WO_Send_ENG_mail](#scheduled_wo_send_eng_mail)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>DeveloperName</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Notification_Scheduled_WO_ENG_1732012994513</b></span>|
    
    ### 🟩Get_Email_Template_ENG_REPlanned_WO
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EmailTemplate</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Email Template ENG REPlanned WO</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[REScheduled_WO_Send_ENG_mail](#rescheduled_wo_send_eng_mail)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>DeveloperName</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Notification_REScheduled_WO_ENG_1732012846597</b></span>|
    
    ### 🟩Get_Email_Template_FR_Planned_WO
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EmailTemplate</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Email Template FR Planned WO</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Scheduled_WO_Send_FR_mail](#scheduled_wo_send_fr_mail)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>DeveloperName</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Notification_Scheduled_WO_FR_1732000418709</b></span>|
    
    ### 🟩Get_Email_Template_FR_REPlanned_WO
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EmailTemplate</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Email Template FR REPlanned WO</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[REScheduled_WO_Send_FR_mail](#rescheduled_wo_send_fr_mail)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>DeveloperName</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Notification_REScheduled_WO_FR_1732001152863</b></span>|
    
    ### 🟩Get_Email_Template_NL_REPlanned_WO
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Record Lookup</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Object</b></span>|<span style="background-color: #a6e22e; color: black;"><b>EmailTemplate</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Get Email Template NL REPlanned WO</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Assign Null Values If No Records Found</b></span>|<span style="background-color: #a6e22e; color: black;"><b>⬜</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Get First Record Only</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Store Output Automatically</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[REScheduled_WO_Send_NL_mail](#rescheduled_wo_send_nl_mail)</b></span>|
    
    #### 🟩Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>DeveloperName</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Notification_REScheduled_WO_NL_1732001423106</b></span>|
    
    ### Get_work_Order
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>WorkTypeId</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Equal To</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.ParentRecordId</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.ParentRecordId</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 19, 2024 (Initial)"

    _Nov 19, 2024, by fpardon-upeo in commit Org state on 2024-11-19 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Scheduled</b>"]):::startClass
    click START "#general-information" "1355914100"
    
    Scheduled_WO_Send_NL_mail("📧 <em></em><br/>Scheduled WO - Send NL mail"):::actionCalls
    click Scheduled_WO_Send_NL_mail "#scheduled_wo_send_nl_mail" "2046197523"
    
    Assign_email_Recipients[\"🟰 <em></em><br/>Assign email Recipients"/]:::assignments
    click Assign_email_Recipients "#assign_email_recipients" "1274736035"
    
    Contact_Language{"🔀 <em></em><br/>Contact Language"}:::decisions
    click Contact_Language "#contact_language" "2899482565"
    
    First_send_or_Resend{"🔀 <em></em><br/>First send or Resend"}:::decisions
    click First_send_or_Resend "#first_send_or_resend" "569918384"
    
    First_send_or_Resend_FR{"🔀 <em></em><br/>First send or Resend FR"}:::decisions
    click First_send_or_Resend_FR "#first_send_or_resend_fr" "4260263493"
    
    Work_Order_Contact_with_Email_Found{"🔀 <em></em><br/>Work Order & Contact with Email Found?"}:::decisions
    click Work_Order_Contact_with_Email_Found "#work_order_contact_with_email_found" "531392331"
    
    Get_Contact_Relation[("🔍 <em></em><br/>Get Contact Relation")]:::recordLookups
    click Get_Contact_Relation "#get_contact_relation" "1391895149"
    
    Get_Contacts[("🔍 <em></em><br/>Get Contacts")]:::recordLookups
    click Get_Contacts "#get_contacts" "1203573232"
    
    Get_Email_Template_NL_Planned_WO[("🔍 <em></em><br/>Get Email Template NL Planned WO")]:::recordLookups
    click Get_Email_Template_NL_Planned_WO "#get_email_template_nl_planned_wo" "1854158430"
    
    Get_work_Order[("🔍 <em></em><br/>Get Work Order")]:::recordLookups
    click Get_work_Order "#get_work_order" "2731704253"
    
    Update_SA[("🛠️ <em></em><br/>Update SA")]:::recordUpdates
    click Update_SA "#update_sa" "310899656"
    
    Scheduled_WO_Send_NL_mail --> Update_SA
    Assign_email_Recipients --> Work_Order_Contact_with_Email_Found
    Contact_Language --> |"FR"| First_send_or_Resend_FR
    Contact_Language --> |"NL"| First_send_or_Resend
    First_send_or_Resend --> |"First Send"| Get_Email_Template_NL_Planned_WO
    First_send_or_Resend --> |"Resend"| Update_SA
    First_send_or_Resend_FR --> |"Copy 1 of First Send"| Update_SA
    First_send_or_Resend_FR --> |"Resend"| Update_SA
    Work_Order_Contact_with_Email_Found --> |"Yes"| Contact_Language
    Work_Order_Contact_with_Email_Found --> |"No"| END_Work_Order_Contact_with_Email_Found
    Get_Contact_Relation --> Get_Contacts
    Get_Contacts --> Assign_email_Recipients
    Get_Email_Template_NL_Planned_WO --> Scheduled_WO_Send_NL_mail
    Get_work_Order --> Get_Contact_Relation
    Update_SA --> END_Update_SA
    START -->  Get_work_Order
    END_Work_Order_Contact_with_Email_Found(( END )):::endClass
    END_Update_SA(( END )):::endClass
    
    
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
    |Object|ServiceAppointment|
    |Process Type| Auto Launched Flow|
    |Trigger Type| Scheduled|
    |Label|[Service Appointment] [Scheduled] Customer Notification|
    |Status|⚠️ Draft|
    |Description|Flow that sends notification to customer when a service appointment is (re)scheduled|
    |Environments|Default|
    |Interview Label|[Service Appointment] [Scheduled] Customer Notification {!$Flow.CurrentDateTime}|
    | Builder Type (PM)|LightningFlowBuilder|
    | Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
    | Origin Builder Type (PM)|LightningFlowBuilder|
    |Connector|[Get_work_Order](#get_work_order)|
    |Next Node|[Get_work_Order](#get_work_order)|
    
    
    #### Schedules
    
    |Frequency|Start Date|Start Time|
    |:-- |:--:|:--: |
    |Daily|Nov 18, 2024|01:00|
    
    
    #### Filters (logic: **(1 AND 2 AND 3 AND 4) OR (1 AND 3 AND 5)**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Status| Equal To|Scheduled|
    |2|Notification_Day__c| Equal To|✅|
    |3|Intervention_Registration__c| Equal To|Yes|
    |4|Scheduling_Notification_Send__c| Equal To|Not Send|
    |5|Scheduling_Notification_Send__c| Equal To|Resend Needed|
    
    
    ## Variables
    
    |Name|Data Type|Is Collection|Is Input|Is Output|Object Type|Description|
    |:-- |:--:|:--:|:--:|:--:|:--:|:--  |
    |Recipients|String|✅|⬜|⬜|<!-- -->|<!-- -->|
    
    
    ## Flow Nodes Details
    
    ### Scheduled_WO_Send_NL_mail
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Action Call|
    |Label|Scheduled WO - Send NL mail|
    |Action Type|Email Simple|
    |Action Name|emailSimple|
    |Flow Transaction Model|CurrentTransaction|
    |Name Segment|emailSimple|
    |Offset|0|
    |Version Segment|1|
    |Email Addresses Array (input)|Recipients|
    |Sender Type (input)|<!-- -->|
    |Sender Address (input)|<!-- -->|
    |Recipient Id (input)|{!Get_Contacts.Id}|
    |Log Email On Send (input)|✅|
    |Email Template Id (input)|Get_Email_Template_NL_Planned_WO.Id|
    |Connector|[Update_SA](#update_sa)|
    
    
    ### Assign_email_Recipients
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Assignment|
    |Label|Assign email Recipients|
    |Connector|[Work_Order_Contact_with_Email_Found](#work_order_contact_with_email_found)|
    
    
    #### Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |Recipients| Add|Get_Contacts.Email|
    
    
    
    
    ### Contact_Language
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Contact Language|
    |Default Connector|[First_send_or_Resend](#first_send_or_resend)|
    |Default Connector Label|NL|
    
    
    #### Rule FR (FR)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[First_send_or_Resend_FR](#first_send_or_resend_fr)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|Get_Contacts.Language__c| Equal To|French|
    
    
    
    
    ### First_send_or_Resend
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|First send or Resend|
    |Default Connector|[Update_SA](#update_sa)|
    |Default Connector Label|Resend|
    
    
    #### Rule First_Send (First Send)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Get_Email_Template_NL_Planned_WO](#get_email_template_nl_planned_wo)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.Scheduling_Notification_Send__c| Equal To|Not Send|
    
    
    
    
    ### First_send_or_Resend_FR
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|First send or Resend FR|
    |Default Connector|[Update_SA](#update_sa)|
    |Default Connector Label|Resend|
    
    
    #### Rule Copy_1_of_First_Send (Copy 1 of First Send)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Update_SA](#update_sa)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|$Record.Scheduling_Notification_Send__c| Equal To|Not Send|
    
    
    
    
    ### Work_Order_Contact_with_Email_Found
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Decision|
    |Label|Work Order & Contact with Email Found?|
    |Default Connector Label|No|
    
    
    #### Rule Yes (Yes)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Connector|[Contact_Language](#contact_language)|
    |Condition Logic|and|
    
    
    
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |1|[Get_work_Order](#get_work_order)| Is Null|⬜|
    |2|[Get_Contacts](#get_contacts)| Is Null|⬜|
    
    
    
    
    ### Get_Contact_Relation
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|AccountContactRelation|
    |Label|Get Contact Relation|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Get_Contacts](#get_contacts)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Intervention_Registration_Contact__c| Equal To|✅|
    |2|AccountId| Equal To|Get_work_Order.AccountId|
    
    
    
    
    ### Get_Contacts
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|Contact|
    |Label|Get Contacts|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Assign_email_Recipients](#assign_email_recipients)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|Id| Equal To|Get_Contact_Relation.ContactId|
    
    
    
    
    ### Get_Email_Template_NL_Planned_WO
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|EmailTemplate|
    |Label|Get Email Template NL Planned WO|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Scheduled_WO_Send_NL_mail](#scheduled_wo_send_nl_mail)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|DeveloperName| Equal To|Notification_Planned_WO_NL_1731941363446|
    
    
    
    
    ### Get_work_Order
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Lookup|
    |Object|WorkOrder|
    |Label|Get Work Order|
    |Assign Null Values If No Records Found|⬜|
    |Get First Record Only|✅|
    |Store Output Automatically|✅|
    |Connector|[Get_Contact_Relation](#get_contact_relation)|
    
    
    #### Filters (logic: **and**)
    
    |Filter Id|Field|Operator|Value|
    |:-- |:-- |:--:|:--: |
    |1|WorkTypeId| Equal To|$Record.ParentRecordId|
    
    
    
    
    ### Update_SA
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |Type|Record Update|
    |Label|Update SA|
    |Input Reference|$Record|
    
    
    #### Input Assignments
    
    |Field|Value|
    |:-- |:--: |
    |Scheduling_Notification_Send__c|Send|
    
    
    
    
    
    
    
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

