# Mileage_Entry_Before_Save history

<!-- This page has been generated to be viewed with mkdocs-material, you can not view it just as markdown . Activate tab plugin following the doc at https://squidfunk.github.io/mkdocs-material/reference/content-tabs/ -->

=== "Nov 22, 2024"

    _Nov 22, 2024, by fpardon-upeo in commit Org state on 2024-11-22 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record Before Save</b>"]):::startClass
    click START "#general-information" "1335660805"
    
    
    Code_ATAK{"<i>🔀 <em></em><br/>Code ATAK</i>"}:::decisionsRemoved
    click Code_ATAK "#code_atak" "2804201118"
    
    KMAD[\"<b>🟰 <em></em><br/>KMAD</b>"/]:::assignmentsAdded
    click KMAD "#kmad" "749646201"
    
    
    
    Update_ATAK_Codes[("<i>🛠️ <em></em><br/>Update ATAK Codes</i>")]:::recordUpdatesRemoved
    click Update_ATAK_Codes "#update_atak_codes" "2292234468"
    
    KMAP[\"<b>🟰 <em></em><br/>KMAP</b>"/]:::assignmentsAdded
    click KMAP "#kmap" "3869247581"
    
    
    
    Code_ATAK -.-> |"🟥<i>Needs Update</i>"| Update_ATAK_Codes
    
    KMBD[\"<b>🟰 <em></em><br/>KMBD</b>"/]:::assignmentsAdded
    click KMBD "#kmbd" "359415321"
    
    KMBP[\"<b>🟰 <em></em><br/>KMBP</b>"/]:::assignmentsAdded
    click KMBP "#kmbp" "1986592776"
    
    KMEV[\"<b>🟰 <em></em><br/>KMEV</b>"/]:::assignmentsAdded
    click KMEV "#kmev" "1067145581"
    
    Check_Code{"<b>🔀 <em></em><br/>Check Code</b>"}:::decisionsAdded
    click Check_Code "#check_code" "3784808800"
    
    Code_ATAK{"<b>🔀 <em></em><br/>Code ATAK</b>"}:::decisionsAdded
    click Code_ATAK "#code_atak" "1397372539"
    
    KMAD ==> END_KMAD
    KMAP ==> END_KMAP
    KMBD ==> END_KMBD
    KMBP ==> END_KMBP
    KMEV ==> END_KMEV
    Check_Code ==> |"🟩<b>Driver - Start of Day</b>"| KMAD
    Check_Code ==> |"🟩<b>Driver - End of Day</b>"| KMBP
    Check_Code ==> |"🟩<b>Passenger - Start of Day</b>"| KMAP
    Check_Code ==> |"🟩<b>Passenger - End of Day</b>"| KMBD
    Check_Code ==> |"🟩<b>Own Vehicle</b>"| KMEV
    Check_Code ==> |"🟩<b>Default Outcome</b>"| END_Check_Code
    Code_ATAK ==> |"🟩<b>Needs Update</b>"| Check_Code
    
    Code_ATAK --> |"Default Outcome"| END_Code_ATAK
    
    Update_ATAK_Codes -.-> END_Update_ATAK_Codes
    
    START -->  Code_ATAK
    
    END_KMAD(( END )):::endClassAdded
    END_KMAP(( END )):::endClassAdded
    END_KMBD(( END )):::endClassAdded
    END_KMBP(( END )):::endClassAdded
    END_KMEV(( END )):::endClassAdded
    END_Check_Code(( END )):::endClassAdded
    
    END_Code_ATAK(( END )):::endClass
    
    END_Update_ATAK_Codes(( END )):::endClassRemoved
    
    
    
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
      
    linkStyle 1,2,3,4,5,6,7,8,9,10,11,12 stroke:#00ff00,stroke-width:4px,color:green;
    linkStyle 0,14 stroke:#ff0000,stroke-width:4px,color:red;
    ```
    
    ## Flow Nodes Details
    
    
    ### 🟥Code_ATAK
    
    ### 🟩KMAD
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Assignment</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[KMAD](#kmad)</b></span>|
    
    #### 🟩Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>$Record.Codes_ATAK_Limbus__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[KMAD](#kmad)</b></span>|
    
    ### 🟩KMAP
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Assignment</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[KMAP](#kmap)</b></span>|
    
    #### 🟩Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>$Record.Codes_ATAK_Limbus__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[KMAP](#kmap)</b></span>|
    
    ### 🟩KMBD
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Assignment</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[KMBD](#kmbd)</b></span>|
    
    #### 🟩Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>$Record.Codes_ATAK_Limbus__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[KMBD](#kmbd)</b></span>|
    
    ### 🟩KMBP
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Assignment</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[KMBP](#kmbp)</b></span>|
    
    #### 🟩Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>$Record.Codes_ATAK_Limbus__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[KMBP](#kmbp)</b></span>|
    
    ### 🟩KMEV
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Assignment</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[KMEV](#kmev)</b></span>|
    
    #### 🟩Assignments
    
    |Assign To Reference|Operator|Value|
    |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>$Record.Codes_ATAK_Limbus__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Assign</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[KMEV](#kmev)</b></span>|
    
    ### 🟩Check_Code
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Code ATAK</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Check Code</b></span>|
    
    #### 🟥Rule Needs_Update (Needs Update)
    
    #### 🟩Rule Driver_Start_of_Day (Driver - Start of Day)
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Connector</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>[Update_ATAK_Codes](#update_atak_codes)</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Condition Logic</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>or</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[KMAD](#kmad)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>1</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Codes_ATAK_Limbus__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Is Null</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>2</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Starting_Mileage__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Is Changed</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>3</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Ending_Mileage__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Is Changed</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>4</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Starting_Location_Type__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Is Changed</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>5</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record.Ending_Location_Type__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i> Is Changed</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>✅</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Starting</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Allowance_Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Starts With</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Driver</b></span>|
    
    ### 🟥Update_ATAK_Codes
    
    #### 🟩Rule Driver_End_of_Day (Driver - End of Day)
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Type</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Record Update</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Update ATAK Codes</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Input Reference</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>$Record</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[KMBP](#kmbp)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    #### 🟥Input Assignments
    
    
    
    |Field|Value|
    |:-- |:--: |
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Codes_ATAK_Limbus__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>CalculatedATAKCode</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Soccode__c</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>CalculatedSoccode</i></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Ending</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Allowance_Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Starts With</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Driver</b></span>|
    
    #### 🟩Rule Passenger_Start_of_Day (Passenger - Start of Day)
    
    
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[KMAP](#kmap)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Starting</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Allowance_Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Passenger</b></span>|
    
    #### 🟩Rule Passenger_End_of_Day (Passenger - End of Day)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[KMBD](#kmbd)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Ending</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Allowance_Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Passenger</b></span>|
    
    #### 🟩Rule Own_Vehicle (Own Vehicle)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[KMEV](#kmev)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>and</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Allowance_Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Own Vehicle</b></span>|
    
    ### 🟩Code_ATAK
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Type</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Decision</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Code ATAK</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Default Connector Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Default Outcome</b></span>|
    
    #### 🟩Rule Needs_Update (Needs Update)
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Connector</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Check_Code](#check_code)</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Condition Logic</b></span>|<span style="background-color: #a6e22e; color: black;"><b>or</b></span>|
    
    |Condition Id|Left Value Reference|Operator|Right Value|
    |:-- |:-- |:--:|:--: |
    |🟩<span style="background-color: #a6e22e; color: black;"><b>1</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Codes_ATAK_Limbus__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Null</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>2</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Starting_Mileage__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Changed</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>3</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Ending_Mileage__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Changed</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>4</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Starting_Location_Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Changed</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>5</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Ending_Location_Type__c</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Is Changed</b></span>|<span style="background-color: #a6e22e; color: black;"><b>✅</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>6</b></span>|<span style="background-color: #a6e22e; color: black;"><b>$Record.Id</b></span>|<span style="background-color: #a6e22e; color: black;"><b> Equal To</b></span>|<span style="background-color: #a6e22e; color: black;"><b><!-- --></b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 19, 2024"

    _Nov 19, 2024, by fpardon-upeo in commit Org state on 2024-11-19 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    <span style="background-color: #ff7f7f; color: black;"><i>🟥# Mileage Entry - Before Save</i></span>
    
    <span style="background-color: #a6e22e; color: black;"><b>🟩# [Mileage Entry] - [Before-Save] - [Record-Triggered]</b></span>
    
    
    ## Flow Diagram
    
    ```mermaid
    %% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
    %% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
    %% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
    %% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
    %% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram
    
    flowchart TB
    START(["<b>START<br/><b>AutoLaunched Flow</b></br>Type: <b> Record Before Save</b></b>"]):::startClassChanged
    
    
    click START "#general-information" "1335660805"
    
    
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
      
    ```
    
    ## General Information
    
    |<!-- -->|<!-- -->|
    |:---|:---|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Label</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>Mileage Entry - Before Save</i></span>|
    |🟥<span style="background-color: #ff7f7f; color: black;"><i>Status</i></span>|<span style="background-color: #ff7f7f; color: black;"><i>⚠️ Draft</i></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Label</b></span>|<span style="background-color: #a6e22e; color: black;"><b>[Mileage Entry] - [Before-Save] - [Record-Triggered]</b></span>|
    |🟩<span style="background-color: #a6e22e; color: black;"><b>Status</b></span>|<span style="background-color: #a6e22e; color: black;"><b>Active</b></span>|
    
    ___
    
    _Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_

=== "Nov 15, 2024 (Initial)"

    _Nov 15, 2024, by fpardon-upeo in commit Org state on 2024-11-15 00:25 for monitoring_krinkelsgreencare__upeodev_sandbox [skip ci]_

    
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

