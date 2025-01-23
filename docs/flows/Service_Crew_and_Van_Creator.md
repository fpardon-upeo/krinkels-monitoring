# Service Crew and Van Creator

## Flow Diagram [(_View History_)](Service_Crew_and_Van_Creator-history.md)

```mermaid
%% If you read this, your Markdown visualizer does not handle MermaidJS syntax.
%% - If you are in VsCode, install extension `Markdown Preview Mermaid Support` at https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
%% - If you are using sfdx-hardis, try to define env variable `MERMAID_MODES=cli,docker` ,then run again the command to regenerate markdown with SVG images.
%% - If you are within mkdocs-material, define mermaid plugin in `mkdocs.yml` as described in https://squidfunk.github.io/mkdocs-material/extensions/mermaid/
%% - At last resort, you can copy-paste this MermaidJS code in https://mermaid.live/ to see the Flow Diagram

flowchart TB
START(["START<br/><b>Screen Flow</b>"]):::startClass
click START "#general-information" "1919138572"

Add_to_Collection[\"🟰 <em></em><br/>Add to Collection"/]:::assignments
click Add_to_Collection "#add_to_collection" "3225575366"

Set_Leader_Boolean_FALSE[\"🟰 <em></em><br/>Set Leader Boolean FALSE"/]:::assignments
click Set_Leader_Boolean_FALSE "#set_leader_boolean_false" "2883449932"

Set_Leader_Boolean_TRUE[\"🟰 <em></em><br/>Set Leader Boolean TRUE"/]:::assignments
click Set_Leader_Boolean_TRUE "#set_leader_boolean_true" "906910096"

Set_Material_Item_Values[\"🟰 <em></em><br/>Set Material Item Values"/]:::assignments
click Set_Material_Item_Values "#set_material_item_values" "1572834968"

Assignment_Check{"🔀 <em></em><br/>Assignment Check"}:::decisions
click Assignment_Check "#assignment_check" "3117658656"

Check_Has_Leader{"🔀 <em></em><br/>Check Has Leader"}:::decisions
click Check_Has_Leader "#check_has_leader" "1299673393"

Crew_Leader_Check{"🔀 <em></em><br/>Crew Leader Check"}:::decisions
click Crew_Leader_Check "#crew_leader_check" "719244804"

Loop_Selected_Materials{{"🔁 <em></em><br/>Loop Selected Materials"}}:::loops
click Loop_Selected_Materials "#loop_selected_materials" "3776720875"

Create_Material_Items[("➕ <em></em><br/>Create Material Items")]:::recordCreates
click Create_Material_Items "#create_material_items" "1748562060"

Create_Operator_Service_Crew_Member[("➕ <em></em><br/>Create Operator Service Crew Member")]:::recordCreates
click Create_Operator_Service_Crew_Member "#create_operator_service_crew_member" "2888426388"

Create_Service_Territory_Member_Crew[("➕ <em></em><br/>Create Service Territory Member - Crew")]:::recordCreates
click Create_Service_Territory_Member_Crew "#create_service_territory_member_crew" "894228951"

Create_Van_Service_Resource[("➕ <em></em><br/>Create Van Service Resource")]:::recordCreates
click Create_Van_Service_Resource "#create_van_service_resource" "3411393155"

Get_Crew_Leader[("🔍 <em></em><br/>Get Crew Leader")]:::recordLookups
click Get_Crew_Leader "#get_crew_leader" "2507821244"

Get_Location_Details[("🔍 <em></em><br/>Get Location Details")]:::recordLookups
click Get_Location_Details "#get_location_details" "2689841567"

Get_Materials[("🔍 <em></em><br/>Get Materials")]:::recordLookups
click Get_Materials "#get_materials" "2016564228"

Get_Other_Operator_Crew_Assignments[("🔍 <em></em><br/>Get Other Operator Crew Assignments")]:::recordLookups
click Get_Other_Operator_Crew_Assignments "#get_other_operator_crew_assignments" "2959076420"

Get_Resources_with_Selected_Van[("🔍 <em></em><br/>Get Resources with Selected Van")]:::recordLookups
click Get_Resources_with_Selected_Van "#get_resources_with_selected_van" "1334986424"

Get_Resources_without_Vans[("🔍 <em></em><br/>Get Resources without Vans")]:::recordLookups
click Get_Resources_without_Vans "#get_resources_without_vans" "3550989278"

Get_Service_Crew[("🔍 <em></em><br/>Get Service Crew")]:::recordLookups
click Get_Service_Crew "#get_service_crew" "1903918792"

Get_Territories_with_Responsibles[("🔍 <em></em><br/>Get Territories with Responsibles")]:::recordLookups
click Get_Territories_with_Responsibles "#get_territories_with_responsibles" "2680619349"

Get_Vans_without_Service_Crews[("🔍 <em></em><br/>Get Vans without Service Crews")]:::recordLookups
click Get_Vans_without_Service_Crews "#get_vans_without_service_crews" "1141818508"

Update_Van_With_Service_Crew[("🛠️ <em></em><br/>Update Van With Service Crew")]:::recordUpdates
click Update_Van_With_Service_Crew "#update_van_with_service_crew" "4169054419"

Already_Has_Leader(["💻 <em></em><br/>Already Has Leader"]):::screens
click Already_Has_Leader "#already_has_leader" "1724040800"

Assignment_Check_Screen(["💻 <em></em><br/>Assignment Check Screen"]):::screens
click Assignment_Check_Screen "#assignment_check_screen" "1464280964"

Fault(["💻 <em></em><br/>Fault"]):::screens
click Fault "#fault" "1056579750"

Finished(["💻 <em></em><br/>Finished"]):::screens
click Finished "#finished" "2499694865"

No_Leader_Selected(["💻 <em></em><br/>No Leader Selected"]):::screens
click No_Leader_Selected "#no_leader_selected" "4102343959"

Set_Up_Crew_and_Van_Initial(["💻 <em></em><br/>Set Up Crew and Van Initial"]):::screens
click Set_Up_Crew_and_Van_Initial "#set_up_crew_and_van_initial" "1977539098"

Set_Up_Crew_and_Van_Van(["💻 <em></em><br/>Set Up Crew and Van - Van"]):::screens
click Set_Up_Crew_and_Van_Van "#set_up_crew_and_van_van" "4092614594"

Add_to_Collection --> Loop_Selected_Materials
Set_Leader_Boolean_FALSE --> Set_Up_Crew_and_Van_Initial
Set_Leader_Boolean_TRUE --> Set_Up_Crew_and_Van_Initial
Set_Material_Item_Values --> Add_to_Collection
Assignment_Check --> |"Already Assigned"| Assignment_Check_Screen
Assignment_Check --> |"Default Outcome"| Get_Materials
Check_Has_Leader --> |"Has Leader"| Set_Leader_Boolean_FALSE
Check_Has_Leader --> |"Default Outcome"| Set_Leader_Boolean_TRUE
Crew_Leader_Check --> |"Already Has Crew Leader And Selected Leader was True"| Already_Has_Leader
Crew_Leader_Check --> |"Has No Crew Leader And Selected Leader was False"| No_Leader_Selected
Crew_Leader_Check --> |"Default Outcome"| Assignment_Check
Loop_Selected_Materials --> |"For Each"|Set_Material_Item_Values
Loop_Selected_Materials ---> |"After Last"|Create_Material_Items
Create_Material_Items --> Update_Van_With_Service_Crew
Create_Material_Items -. Fault .->Fault
Create_Operator_Service_Crew_Member --> Get_Location_Details
Create_Operator_Service_Crew_Member -. Fault .->Fault
Create_Service_Territory_Member_Crew --> Finished
Create_Service_Territory_Member_Crew -. Fault .->Fault
Create_Van_Service_Resource --> Create_Service_Territory_Member_Crew
Create_Van_Service_Resource -. Fault .->Fault
Get_Crew_Leader --> Get_Territories_with_Responsibles
Get_Location_Details --> Loop_Selected_Materials
Get_Location_Details -. Fault .->Fault
Get_Materials --> Set_Up_Crew_and_Van_Van
Get_Other_Operator_Crew_Assignments --> Crew_Leader_Check
Get_Resources_with_Selected_Van --> Get_Service_Crew
Get_Resources_without_Vans --> Get_Vans_without_Service_Crews
Get_Service_Crew --> Get_Other_Operator_Crew_Assignments
Get_Territories_with_Responsibles --> Get_Resources_without_Vans
Get_Vans_without_Service_Crews --> Check_Has_Leader
Update_Van_With_Service_Crew --> Create_Van_Service_Resource
Update_Van_With_Service_Crew -. Fault .->Fault
Already_Has_Leader --> Assignment_Check
Assignment_Check_Screen --> END_Assignment_Check_Screen
Fault --> END_Fault
Finished --> END_Finished
No_Leader_Selected --> Assignment_Check
Set_Up_Crew_and_Van_Initial --> Get_Resources_with_Selected_Van
Set_Up_Crew_and_Van_Van --> Create_Operator_Service_Crew_Member
START -->  Get_Crew_Leader
END_Assignment_Check_Screen(( END )):::endClass
END_Fault(( END )):::endClass
END_Finished(( END )):::endClass


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
|Label|Service Crew and Van Creator|
|Status|⚠️ Draft|
|Environments|Default|
|Interview Label|Service Crew and Van Creator {!$Flow.CurrentDateTime}|
| Builder Type (PM)|LightningFlowBuilder|
| Canvas Mode (PM)|AUTO_LAYOUT_CANVAS|
| Origin Builder Type (PM)|LightningFlowBuilder|
|Connector|[Get_Crew_Leader](#get_crew_leader)|
|Next Node|[Get_Crew_Leader](#get_crew_leader)|


## Variables

|Name|Data Type|Is Collection|Is Input|Is Output|Object Type|Description|
|:-- |:--:|:--:|:--:|:--:|:--:|:--  |
|hasLeader|Boolean|⬜|⬜|⬜|<!-- -->|<!-- -->|
|materialItem|SObject|⬜|⬜|⬜|ProductItem|<!-- -->|
|materialItems|SObject|✅|⬜|⬜|ProductItem|<!-- -->|
|productsData|SObject|✅|⬜|⬜|Product2|<!-- -->|
|recordId|String|⬜|✅|⬜|<!-- -->|<!-- -->|


## Flow Nodes Details

### Add_to_Collection

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Assignment|
|Label|Add to Collection|
|Connector|[Loop_Selected_Materials](#loop_selected_materials)|


#### Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|materialItems| Add|materialItem|




### Set_Leader_Boolean_FALSE

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Assignment|
|Label|Set Leader Boolean FALSE|
|Connector|[Set_Up_Crew_and_Van_Initial](#set_up_crew_and_van_initial)|


#### Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|hasLeader| Assign|⬜|




### Set_Leader_Boolean_TRUE

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Assignment|
|Label|Set Leader Boolean TRUE|
|Connector|[Set_Up_Crew_and_Van_Initial](#set_up_crew_and_van_initial)|


#### Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|hasLeader| Assign|✅|




### Set_Material_Item_Values

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Assignment|
|Label|Set Material Item Values|
|Connector|[Add_to_Collection](#add_to_collection)|


#### Assignments

|Assign To Reference|Operator|Value|
|:-- |:--:|:--: |
|materialItem.Product2Id| Assign|Loop_Selected_Materials.Id|
|materialItem.LocationId| Assign|InventoryVan.selectedChoiceValues|
|materialItem.QuantityOnHand| Assign|1000|




### Assignment_Check

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Decision|
|Label|Assignment Check|
|Default Connector|[Get_Materials](#get_materials)|
|Default Connector Label|Default Outcome|


#### Rule Already_Assigned (Already Assigned)

|<!-- -->|<!-- -->|
|:---|:---|
|Connector|[Assignment_Check_Screen](#assignment_check_screen)|
|Condition Logic|or|




|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|1|[Get_Resources_with_Selected_Van](#get_resources_with_selected_van)| Is Null|⬜|
|2|[Get_Other_Operator_Crew_Assignments](#get_other_operator_crew_assignments)| Is Null|⬜|




### Check_Has_Leader

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Decision|
|Label|Check Has Leader|
|Default Connector|[Set_Leader_Boolean_TRUE](#set_leader_boolean_true)|
|Default Connector Label|Default Outcome|


#### Rule Has_Leader (Has Leader)

|<!-- -->|<!-- -->|
|:---|:---|
|Connector|[Set_Leader_Boolean_FALSE](#set_leader_boolean_false)|
|Condition Logic|and|




|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|1|[Get_Crew_Leader](#get_crew_leader)| Is Null|⬜|




### Crew_Leader_Check

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Decision|
|Label|Crew Leader Check|
|Default Connector|[Assignment_Check](#assignment_check)|
|Default Connector Label|Default Outcome|


#### Rule Already_Has_Crew_Leader_And_Selected_Leader_was_True (Already Has Crew Leader And Selected Leader was True)

|<!-- -->|<!-- -->|
|:---|:---|
|Connector|[Already_Has_Leader](#already_has_leader)|
|Condition Logic|and|




|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|1|[Get_Crew_Leader](#get_crew_leader)| Is Null|⬜|
|2|Crew_Leader| Equal To|✅|




#### Rule Has_No_Crew_Leader_And_Selected_Leader_was_False (Has No Crew Leader And Selected Leader was False)

|<!-- -->|<!-- -->|
|:---|:---|
|Connector|[No_Leader_Selected](#no_leader_selected)|
|Condition Logic|and|




|Condition Id|Left Value Reference|Operator|Right Value|
|:-- |:-- |:--:|:--: |
|1|[Get_Crew_Leader](#get_crew_leader)| Is Null|✅|
|2|Crew_Leader| Equal To|⬜|




### Loop_Selected_Materials

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Loop|
|Label|Loop Selected Materials|
|Collection Reference|productTable.selectedRows|
|Iteration Order|Asc|
|Next Value Connector|[Set_Material_Item_Values](#set_material_item_values)|
|No More Values Connector|[Create_Material_Items](#create_material_items)|


### Create_Material_Items

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Create|
|Label|Create Material Items|
|Fault Connector|isGoTo: true<br/>targetReference: Fault<br/>|
|Input Reference|materialItems|
|Connector|[Update_Van_With_Service_Crew](#update_van_with_service_crew)|


### Create_Operator_Service_Crew_Member

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Create|
|Object|ServiceCrewMember|
|Label|Create Operator Service Crew Member|
|Fault Connector|[Fault](#fault)|
|Store Output Automatically|✅|
|Connector|[Get_Location_Details](#get_location_details)|


#### Input Assignments

|Field|Value|
|:-- |:--: |
|IsLeader|Crew_Leader|
|ServiceCrewId|serviceCrewId.recordId|
|ServiceResourceId|operatorId.selectedChoiceValues|
|StartDate|$Flow.CurrentDateTime|




### Create_Service_Territory_Member_Crew

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Create|
|Object|ServiceTerritoryMember|
|Label|Create Service Territory Member - Crew|
|Fault Connector|isGoTo: true<br/>targetReference: Fault<br/>|
|Store Output Automatically|✅|
|Connector|[Finished](#finished)|


#### Input Assignments

|Field|Value|
|:-- |:--: |
|EffectiveStartDate|$Flow.CurrentDateTime|
|ServiceResourceId|[Create_Van_Service_Resource](#create_van_service_resource)|
|ServiceTerritoryId|Contract_Manager.selectedChoiceValues|




### Create_Van_Service_Resource

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Create|
|Object|ServiceResource|
|Label|Create Van Service Resource|
|Fault Connector|isGoTo: true<br/>targetReference: Fault<br/>|
|Store Output Automatically|✅|
|Connector|[Create_Service_Territory_Member_Crew](#create_service_territory_member_crew)|


#### Input Assignments

|Field|Value|
|:-- |:--: |
|IsActive|✅|
|Name|Get_Service_Crew.Name|
|ResourceType|C|
|ServiceCrewId|serviceCrewId.recordId|




### Get_Crew_Leader

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|ServiceCrewMember|
|Label|Get Crew Leader|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|✅|
|Store Output Automatically|✅|
|Connector|[Get_Territories_with_Responsibles](#get_territories_with_responsibles)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|ServiceCrewId| Equal To|recordId|
|2|IsLeader| Equal To|✅|




### Get_Location_Details

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|Location|
|Label|Get Location Details|
|Assign Null Values If No Records Found|⬜|
|Fault Connector|isGoTo: true<br/>targetReference: Fault<br/>|
|Get First Record Only|✅|
|Store Output Automatically|✅|
|Connector|[Loop_Selected_Materials](#loop_selected_materials)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Id| Equal To|InventoryVan.selectedChoiceValues|




### Get_Materials

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|Product2|
|Label|Get Materials|
|Assign Null Values If No Records Found|⬜|
|Output Reference|productsData|
|Queried Fields|- Id<br/>- Name<br/>- ATAK_Code__c<br/>- Group_Description__c<br/>|
|Sort Field|Name|
|Sort Order|Asc|
|Connector|[Set_Up_Crew_and_Van_Van](#set_up_crew_and_van_van)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|ATAK_Code__c| Is Null|<!-- -->|




### Get_Other_Operator_Crew_Assignments

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|ServiceCrewMember|
|Label|Get Other Operator Crew Assignments|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|✅|
|Store Output Automatically|✅|
|Connector|[Crew_Leader_Check](#crew_leader_check)|


#### Filters (logic: **1 AND (2 OR 3)**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|ServiceResourceId| Equal To|operatorId.selectedChoiceValues|
|2|StartDate| Less Than Or Equal To|$Flow.CurrentDateTime|
|3|EndDate| Is Null|<!-- -->|




### Get_Resources_with_Selected_Van

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|ServiceResource|
|Label|Get Resources with Selected Van|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|✅|
|Store Output Automatically|✅|
|Connector|[Get_Service_Crew](#get_service_crew)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|LocationId| Equal To|InventoryVan.selectedChoiceValues|




### Get_Resources_without_Vans

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|ServiceResource|
|Label|Get Resources without Vans|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|⬜|
|Store Output Automatically|✅|
|Connector|[Get_Vans_without_Service_Crews](#get_vans_without_service_crews)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|ResourceType| Equal To|T|
|2|LocationId| Is Null|<!-- -->|




### Get_Service_Crew

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|ServiceCrew|
|Label|Get Service Crew|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|✅|
|Store Output Automatically|✅|
|Connector|[Get_Other_Operator_Crew_Assignments](#get_other_operator_crew_assignments)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Id| Equal To|serviceCrewId.recordId|




### Get_Territories_with_Responsibles

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|ServiceTerritory|
|Label|Get Territories with Responsibles|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|⬜|
|Store Output Automatically|✅|
|Connector|[Get_Resources_without_Vans](#get_resources_without_vans)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|ParentTerritoryId| Is Null|<!-- -->|
|2|Main_Responsible__c| Is Null|<!-- -->|




### Get_Vans_without_Service_Crews

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Lookup|
|Object|Location|
|Label|Get Vans without Service Crews|
|Assign Null Values If No Records Found|⬜|
|Get First Record Only|⬜|
|Store Output Automatically|✅|
|Connector|[Check_Has_Leader](#check_has_leader)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Van_Crew__c| Is Null|<!-- -->|




### Update_Van_With_Service_Crew

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Record Update|
|Object|Location|
|Label|Update Van With Service Crew|
|Fault Connector|isGoTo: true<br/>targetReference: Fault<br/>|
|Connector|[Create_Van_Service_Resource](#create_van_service_resource)|


#### Filters (logic: **and**)

|Filter Id|Field|Operator|Value|
|:-- |:-- |:--:|:--: |
|1|Id| Equal To|InventoryVan.selectedChoiceValues|




#### Input Assignments

|Field|Value|
|:-- |:--: |
|Van_Crew__c|serviceCrewId.recordId|




### Already_Has_Leader

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Screen|
|Label|Already Has Leader|
|Allow Back|✅|
|Allow Finish|✅|
|Allow Pause|✅|
|Show Footer|✅|
|Show Header|✅|
|Connector|[Assignment_Check](#assignment_check)|


#### Copy_1_of_noLeader

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|<p>The selected crew already has a leader and you set the selected operator as the leader! Please go back and review.</p>|
|Field Type| Display Text|




### Assignment_Check_Screen

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Screen|
|Label|Assignment Check Screen|
|Allow Back|✅|
|Allow Finish|✅|
|Allow Pause|✅|
|Show Footer|✅|
|Show Header|✅|


#### checkMessage

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|<p>The selected operator is already assigned to a crew! The crew name is {!Get_Other_Operator_Crew_Assignments.ServiceCrew.Name}</p>|
|Field Type| Display Text|
|Visibility Rule|conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: Get_Other_Operator_Crew_Assignments.Id<br/>&nbsp;&nbsp;operator: IsNull<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;booleanValue: false<br/>|




#### checkMessageVanAssignment

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|<p><span style="background-color: rgb(255, 255, 255); color: rgb(68, 68, 68);">The selected van is already assigned! Please select another one or review its setup.</span></p>|
|Field Type| Display Text|
|Visibility Rule|conditionLogic: and<br/>conditions:<br/>&nbsp;&nbsp;leftValueReference: Get_Resources_with_Selected_Van.Id<br/>&nbsp;&nbsp;operator: IsNull<br/>&nbsp;&nbsp;rightValue:<br/>&nbsp;&nbsp;&nbsp;&nbsp;booleanValue: false<br/>|




### Fault

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Screen|
|Label|[Fault](#fault)|
|Allow Back|✅|
|Allow Finish|✅|
|Allow Pause|✅|
|Show Footer|✅|
|Show Header|✅|


#### faultScreen

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|<p>{!$Flow.FaultMessage}</p>|
|Field Type| Display Text|




### Finished

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Screen|
|Label|[Finished](#finished)|
|Allow Back|✅|
|Allow Finish|✅|
|Allow Pause|✅|
|Show Footer|✅|
|Show Header|✅|


#### finishMessage

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|<p style="text-align: center;"><strong style="font-size: 16px;">All done, you can close this popup!</strong></p>|
|Field Type| Display Text|




### No_Leader_Selected

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Screen|
|Label|No Leader Selected|
|Allow Back|✅|
|Allow Finish|✅|
|Allow Pause|✅|
|Show Footer|✅|
|Show Header|✅|
|Connector|[Assignment_Check](#assignment_check)|


#### noLeader

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|<p>The selected crew does not have a leader yet and you didn't set the selected operator as the leader! Please go back and review.</p>|
|Field Type| Display Text|




### Set_Up_Crew_and_Van_Initial

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Screen|
|Label|Set Up Crew and Van Initial|
|Allow Back|✅|
|Allow Finish|✅|
|Allow Pause|✅|
|Show Footer|✅|
|Show Header|✅|
|Connector|[Get_Resources_with_Selected_Van](#get_resources_with_selected_van)|


#### Initial_Info

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|<p style="text-align: center;"><strong style="font-size: 16px;">Select the Operator and Crew to start from.</strong></p>|
|Field Type| Display Text|




#### operatorId

|<!-- -->|<!-- -->|
|:---|:---|
|Choice References|serviceResources|
|Extension Name|flowruntime:choiceLookup|
|Field Text|Main Operator|
|Field Type| Component Choice|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|✅|
|Store Output Automatically|✅|
|Parent Field|[Set_Up_Crew_and_Van_Initial_Section1_Column1](#set_up_crew_and_van_initial_section1_column1)|




#### Contract_Manager

|<!-- -->|<!-- -->|
|:---|:---|
|Choice References|contractManagers|
|Extension Name|flowruntime:choiceLookup|
|Field Text|Contract Manager|
|Field Type| Component Choice|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|✅|
|Store Output Automatically|✅|
|Parent Field|[Set_Up_Crew_and_Van_Initial_Section1_Column1](#set_up_crew_and_van_initial_section1_column1)|




#### Set_Up_Crew_and_Van_Initial_Section1_Column1

|<!-- -->|<!-- -->|
|:---|:---|
|Field Type| Region|
|Is Required|⬜|
|Parent Field|[Set_Up_Crew_and_Van_Initial_Section1](#set_up_crew_and_van_initial_section1)|
|Width (input)|6|




#### serviceCrewId

|<!-- -->|<!-- -->|
|:---|:---|
|Extension Name|flowruntime:lookup|
|Field Type| Component Instance|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|✅|
|Store Output Automatically|✅|
|Parent Field|[Set_Up_Crew_and_Van_Initial_Section1_Column2](#set_up_crew_and_van_initial_section1_column2)|
|Field Api Name (input)|ServiceCrewId|
|Label (input)|Crew|
|Object Api Name (input)|ServiceCrewMember|
|Record Id (input)|recordId|
|Required (input)|✅|




#### InventoryVan

|<!-- -->|<!-- -->|
|:---|:---|
|Choice References|inventoryLocations|
|Extension Name|flowruntime:choiceLookup|
|Field Text|Van|
|Field Type| Component Choice|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|✅|
|Store Output Automatically|✅|
|Parent Field|[Set_Up_Crew_and_Van_Initial_Section1_Column2](#set_up_crew_and_van_initial_section1_column2)|




#### Set_Up_Crew_and_Van_Initial_Section1_Column2

|<!-- -->|<!-- -->|
|:---|:---|
|Field Type| Region|
|Is Required|⬜|
|Parent Field|[Set_Up_Crew_and_Van_Initial_Section1](#set_up_crew_and_van_initial_section1)|
|Width (input)|6|




#### Set_Up_Crew_and_Van_Initial_Section1

|<!-- -->|<!-- -->|
|:---|:---|
|Field Type| Region Container|
|Is Required|⬜|
|Region Container Type| Section Without Header|




#### Crew_Leader

|<!-- -->|<!-- -->|
|:---|:---|
|Data Type|Boolean|
|Default Value|hasLeader|
|Field Text|Crew Leader|
|Field Type| Input Field|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|✅|
|Parent Field|[Set_Up_Crew_and_Van_Initial_Section2_Column1](#set_up_crew_and_van_initial_section2_column1)|




#### Set_Up_Crew_and_Van_Initial_Section2_Column1

|<!-- -->|<!-- -->|
|:---|:---|
|Field Type| Region|
|Is Required|⬜|
|Parent Field|[Set_Up_Crew_and_Van_Initial_Section2](#set_up_crew_and_van_initial_section2)|
|Width (input)|6|




#### Set_Up_Crew_and_Van_Initial_Section2_Column2

|<!-- -->|<!-- -->|
|:---|:---|
|Field Type| Region|
|Is Required|⬜|
|Parent Field|[Set_Up_Crew_and_Van_Initial_Section2](#set_up_crew_and_van_initial_section2)|
|Width (input)|6|




#### Set_Up_Crew_and_Van_Initial_Section2

|<!-- -->|<!-- -->|
|:---|:---|
|Field Type| Region Container|
|Is Required|⬜|
|Region Container Type| Section Without Header|




### Set_Up_Crew_and_Van_Van

|<!-- -->|<!-- -->|
|:---|:---|
|Type|Screen|
|Label|Set Up Crew and Van - Van|
|Allow Back|✅|
|Allow Finish|✅|
|Allow Pause|✅|
|Show Footer|✅|
|Show Header|✅|
|Connector|[Create_Operator_Service_Crew_Member](#create_operator_service_crew_member)|


#### Van_Info

|<!-- -->|<!-- -->|
|:---|:---|
|Field Text|<p style="text-align: center;"><strong style="font-size: 16px;">Select the Inventory to use for the Van</strong></p>|
|Field Type| Display Text|




#### productTable

|<!-- -->|<!-- -->|
|:---|:---|
|Data Type Mappings|typeName: T<br/>typeValue: Product2<br/>|
|Extension Name|flowruntime:datatable|
|Field Type| Component Instance|
|Inputs On Next Nav To Assoc Scrn| Use Stored Values|
|Is Required|✅|
|Store Output Automatically|✅|
|Label (input)|Materials|
|Selection Mode (input)|MULTI_SELECT|
|Min Row Selection (input)|numberValue: 0<br/>|
|Is Show Search Bar (input)|✅|
|Table Data (input)|productsData|
|Columns (input)|[{"apiName":"Name","guid":"column-979b","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":0,"label":"Product Name","type":"text"},{"apiName":"Code__c","guid":"column-ed82","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":1,"label":"Code","type":"text"},{"apiName":"Group_Description__c","guid":"column-4d6a","editable":false,"hasCustomHeaderLabel":false,"customHeaderLabel":"","wrapText":true,"order":2,"label":"Group Description","type":"text"}]|








___

_Documentation generated from branch monitoring_krinkelsgreencare__upeodev_sandbox by [sfdx-hardis](https://sfdx-hardis.cloudity.com), featuring [salesforce-flow-visualiser](https://github.com/toddhalfpenny/salesforce-flow-visualiser)_