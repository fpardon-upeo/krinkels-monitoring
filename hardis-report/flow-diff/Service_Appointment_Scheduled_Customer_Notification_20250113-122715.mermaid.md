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