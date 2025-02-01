## WorkStep

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Added_from_WOL__c | Added from WOL | Checkbox | <!-- --> |
| Not_Applicable_Comments__c | Not Applicable Comments | TextArea | <!-- --> |
| Not_Applicable_Reasons__c | Not Applicable Reasons | MultiselectPicklist | <!-- --> |
| Reason__c | Reason | Text | <!-- --> |
| Work_Order_Line_Item__c | Work Order Line Item | Lookup | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Work_Order_Mobile_Flow_Check_In](../flows/Work_Order_Mobile_Flow_Check_In.md) [🕒](../flows/Work_Order_Mobile_Flow_Check_In-history.md) |  Field Service Mobile | This flow updates the status of the work order and the related service appointment to ‘In Progress’. |
| 💻 | [Work_Order_Mobile_Flow_Check_Out](../flows/Work_Order_Mobile_Flow_Check_Out.md) [🕒](../flows/Work_Order_Mobile_Flow_Check_Out-history.md) |  Field Service Mobile | This flow updates the status of the work order and the related service appointment to ‘In Progress’. |
| 💻 | [Work_Order_Mobile_Flow_Log_Waste_Depot_Visit](../flows/Work_Order_Mobile_Flow_Log_Waste_Depot_Visit.md) |  Field Service Mobile | This flow allows the operator to log a waste depot visit |
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Depot_Visit](../flows/Work_Order_Mobile_Flow_Screen_Flow_Depot_Visit.md) |  Field Service Mobile | This flow allows an operator to execute a depot visit. |
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Enter_Waste_Visit_Information](../flows/Work_Order_Mobile_Flow_Screen_Flow_Enter_Waste_Visit_Information.md) [🕒](../flows/Work_Order_Mobile_Flow_Screen_Flow_Enter_Waste_Visit_Information-history.md) |  Field Service Mobile | <!-- --> |
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Log_LMRA_Information](../flows/Work_Order_Mobile_Flow_Screen_Flow_Log_LMRA_Information.md) [🕒](../flows/Work_Order_Mobile_Flow_Screen_Flow_Log_LMRA_Information-history.md) |  Field Service Mobile | <!-- --> |
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Log_Mileage](../flows/Work_Order_Mobile_Flow_Screen_Flow_Log_Mileage.md) [🕒](../flows/Work_Order_Mobile_Flow_Screen_Flow_Log_Mileage-history.md) |  Field Service Mobile | <!-- --> |
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Take_After_Work_Photos](../flows/Work_Order_Mobile_Flow_Screen_Flow_Take_After_Work_Photos.md) [🕒](../flows/Work_Order_Mobile_Flow_Screen_Flow_Take_After_Work_Photos-history.md) |  Field Service Mobile | This screen flow allows the operator to attach photos taken after the execution of a work order. |
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Take_Before_Work_Photos](../flows/Work_Order_Mobile_Flow_Screen_Flow_Take_Before_Work_Photos.md) [🕒](../flows/Work_Order_Mobile_Flow_Screen_Flow_Take_Before_Work_Photos-history.md) |  Field Service Mobile | This screen flow allows the operator to attach photos taken before the execution of a work order. |
| Reorder_Work_Step__e | [Platform_Event_Reorder_Work_Steps](../flows/Platform_Event_Reorder_Work_Steps.md) [🕒](../flows/Platform_Event_Reorder_Work_Steps-history.md) |  Platform Event | <!-- --> |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Add_WOL_As_Work_Steps](../flows/Work_Order_After_Save_Record_Triggered_Add_WOL_As_Work_Steps.md) [🕒](../flows/Work_Order_After_Save_Record_Triggered_Add_WOL_As_Work_Steps-history.md) |  Record After Save | <!-- --> |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Delete_Work_Steps](../flows/Work_Order_After_Save_Record_Triggered_Delete_Work_Steps.md) [🕒](../flows/Work_Order_After_Save_Record_Triggered_Delete_Work_Steps-history.md) |  Record After Save | This flow deletes the work steps when the work order status changes from 'Dispatched' to either 'Unscheduled' or 'Scheduled'. |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Extra_Work_Add_WOL_As_Work_Steps](../flows/Work_Order_After_Save_Record_Triggered_Extra_Work_Add_WOL_As_Work_Steps.md) [🕒](../flows/Work_Order_After_Save_Record_Triggered_Extra_Work_Add_WOL_As_Work_Steps-history.md) |  Record After Save | <!-- --> |
| WorkOrder | [Work_Order_After_Update_Add_Log_KM](../flows/Work_Order_After_Update_Add_Log_KM.md) |  Record After Save | <!-- --> |
| WorkOrder | [Work_Order_After_Update_Create_Signature_Work_Step](../flows/Work_Order_After_Update_Create_Signature_Work_Step.md) [🕒](../flows/Work_Order_After_Update_Create_Signature_Work_Step-history.md) |  Record After Save | <!-- --> |
| WorkPlan | [Work_Plan_Extra_Work_Steps](../flows/Work_Plan_Extra_Work_Steps.md) [🕒](../flows/Work_Plan_Extra_Work_Steps-history.md) |  Record After Save | <!-- --> |
| WorkStep | [Work_Step_After_Save_Record_Triggered_Relink_After_Work_Photos_to_WO](../flows/Work_Step_After_Save_Record_Triggered_Relink_After_Work_Photos_to_WO.md) [🕒](../flows/Work_Step_After_Save_Record_Triggered_Relink_After_Work_Photos_to_WO-history.md) |  Record After Save | <!-- --> |
| WorkStep | [Work_Step_After_Save_Record_Triggered_Relink_Before_Work_Photos_to_WO](../flows/Work_Step_After_Save_Record_Triggered_Relink_Before_Work_Photos_to_WO.md) [🕒](../flows/Work_Step_After_Save_Record_Triggered_Relink_Before_Work_Photos_to_WO-history.md) |  Record After Save | <!-- --> |
| WorkStep | [Work_Step_After_Save_Record_Triggered_Relink_Photo_to_LMRA_record](../flows/Work_Step_After_Save_Record_Triggered_Relink_Photo_to_LMRA_record.md) [🕒](../flows/Work_Step_After_Save_Record_Triggered_Relink_Photo_to_LMRA_record-history.md) |  Record After Save | <!-- --> |
| WorkStep | [Work_Step_After_Save_Record_Triggered_Update_Related_WOL_Status](../flows/Work_Step_After_Save_Record_Triggered_Update_Related_WOL_Status.md) |  Record After Save | <!-- --> |
| WorkStep | [Work_Step_Before_Save_Record_Triggered_Update_Status_to_Not_Applicable](../flows/Work_Step_Before_Save_Record_Triggered_Update_Status_to_Not_Applicable.md) |  Record Before Save | When the applicable fields are filled in, this flow updates the value of the work step to 'Not Applicable'. |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [CheckInService](../apex/CheckInService.md) | Lightning Controller |
| [ImageCaptureService](../apex/ImageCaptureService.md) | Lightning Controller |
| [OverrideNotApplicableController](../apex/OverrideNotApplicableController.md) | Visualforce Controller |
| [WorkStepSignatureController](../apex/WorkStepSignatureController.md) | Lightning Controller |
| [WorkStepSignatureControllerTest](../apex/WorkStepSignatureControllerTest.md) | Test |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [Work_Order_Record_Page](../pages/Work_Order_Record_Page.md) |  Record Page |
| [Work_Step_Record_Page](../pages/Work_Step_Record_Page.md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
