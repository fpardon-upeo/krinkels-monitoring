# [Service Appointment] [Scheduled] Customer Notification

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