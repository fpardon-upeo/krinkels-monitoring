## WorkOrderLineItem

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| FSL__IsFillInCandidate__c | Is Fill In Candidate | Checkbox | <!-- --> |
| FSL__VisitingHours__c | Visiting Hours | Lookup | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Log_LMRA_Information](../flows/Work_Order_Mobile_Flow_Screen_Flow_Log_LMRA_Information.md) [🕒](../flows/Work_Order_Mobile_Flow_Screen_Flow_Log_LMRA_Information-history.md) |  Field Service Mobile | <!-- --> |
| 💻 | [Work_Order_Screen_Flow_Create_Rework_WO](../flows/Work_Order_Screen_Flow_Create_Rework_WO.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Rework_WO-history.md) |  Screen Flow | This flow allows the contract manager to create a rework work order. |
| Quote | [Quote_After_Save_Create_Work_Order_on_Acceptance](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance.md) [🕒](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance-history.md) |  Record After Save | <!-- --> |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Add_WOL_As_Work_Steps](../flows/Work_Order_After_Save_Record_Triggered_Add_WOL_As_Work_Steps.md) [🕒](../flows/Work_Order_After_Save_Record_Triggered_Add_WOL_As_Work_Steps-history.md) |  Record After Save | <!-- --> |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Assign_Work_Order_Lines](../flows/Work_Order_After_Save_Record_Triggered_Assign_Work_Order_Lines.md) [🕒](../flows/Work_Order_After_Save_Record_Triggered_Assign_Work_Order_Lines-history.md) |  Record After Save | <!-- --> |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Extra_Work_Add_WOL_As_Work_Steps](../flows/Work_Order_After_Save_Record_Triggered_Extra_Work_Add_WOL_As_Work_Steps.md) [🕒](../flows/Work_Order_After_Save_Record_Triggered_Extra_Work_Add_WOL_As_Work_Steps-history.md) |  Record After Save | <!-- --> |
| WorkPlan | [Work_Plan_Extra_Work_Steps](../flows/Work_Plan_Extra_Work_Steps.md) [🕒](../flows/Work_Plan_Extra_Work_Steps-history.md) |  Record After Save | <!-- --> |
| WorkStep | [Work_Step_After_Save_Record_Triggered_Update_Related_WOL_Status](../flows/Work_Step_After_Save_Record_Triggered_Update_Related_WOL_Status.md) |  Record After Save | <!-- --> |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [ExtraWorkOrderController](../apex/ExtraWorkOrderController.md) | Lightning Controller |
| [SFS_WorkOrderCreatorController](../apex/SFS_WorkOrderCreatorController.md) | Lightning Controller |
| [SFS_WorkOrderCreatorControllerTest](../apex/SFS_WorkOrderCreatorControllerTest.md) | Test |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [Service_Appointment.](../pages/Service_Appointment..md) |  Service Document |
| [Service_Appointment_Service_Report_NL.](../pages/Service_Appointment_Service_Report_NL..md) |  Service Document |
| [Service_Appointment_Service_Report_Without_Signature_NL.](../pages/Service_Appointment_Service_Report_Without_Signature_NL..md) |  Service Document |
| [Work_Order_Line_Item_Record_Page.](../pages/Work_Order_Line_Item_Record_Page..md) |  Record Page |
| [Work_Order_Record_Page.](../pages/Work_Order_Record_Page..md) |  Record Page |
| [Work_Order_Service_Report.](../pages/Work_Order_Service_Report..md) |  Service Document |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
