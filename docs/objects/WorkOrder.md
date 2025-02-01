## WorkOrder

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| After_Work_Comments__c | After Work Comments | LongTextArea | <!-- --> |
| ATAK_Project_Code__c | ATAK Project Code | Text | <!-- --> |
| Before_Work_Comments__c | Before Work Comments | LongTextArea | <!-- --> |
| Billed__c | Billed | Checkbox | manual checkbox set by BS when an work order has been invoiced |
| Check_In_At_Work_Reference__c | Check-In-At-Work Reference | Text | <!-- --> |
| Check_In_At_Work_Required__c | Check-In-At-Work Required | Checkbox | <!-- --> |
| Check_In_Work__c | Check-In @Work | Checkbox | <!-- --> |
| Checkin_Deviation_KM__c | Checkin Deviation (KM) | Number | <!-- --> |
| Checkin_Location__c | Checkin Location | Location | <!-- --> |
| Collected_Items__c | Collected Items | LongTextArea | <!-- --> |
| Contract_Manager__c | Contract Manager | Lookup | <!-- --> |
| Current_User_is_CM__c | Current User is CM | Checkbox | <!-- --> |
| Customer_Reference__c | Customer Reference | Text | <!-- --> |
| Depot_Visit_Comments__c | Depot Visit Comments | LongTextArea | <!-- --> |
| Depot_Visit_Planned__c | Depot Visit Planned | Checkbox | <!-- --> |
| Drop_Off_Items__c | Drop Off Items | LongTextArea | <!-- --> |
| Excecution_Week__c | Excecution Week | Number | <!-- --> |
| FSL__IsFillInCandidate__c | Is Fill In Candidate | Checkbox | <!-- --> |
| FSL__Prevent_Geocoding_For_Chatter_Actions__c | Prevent Geocoding For Chatter Actions | Checkbox | <!-- --> |
| FSL__Scheduling_Priority__c | Scheduling Priority | Number | <!-- --> |
| FSL__VisitingHours__c | Visiting Hours | Lookup | <!-- --> |
| Goodwill_Tasks__c | Goodwill Tasks | LongTextArea | <!-- --> |
| Has_Kilometers_Booked__c | Has Kilometers Booked | Checkbox | <!-- --> |
| Invoice_Type__c | Invoice Type | Text | <!-- --> |
| Invoicing_Remarks__c | Invoicing Remarks | Text | <!-- --> |
| Is_First_of_Day__c | Is First of Day | Checkbox | <!-- --> |
| LMRA__c | LMRA Type OLD | Picklist | <!-- --> |
| LMRA_Done__c | LMRA Done | Checkbox | <!-- --> |
| LMRA_Type_formula__c | LMRA Type | Text | <!-- --> |
| Location__c | Location | Text | <!-- --> |
| Mobile_Contract_Manager__c | Mobile Contract Manager | Text | ServiceTerritory.Owner:User.FirstName |
| Name_Commercial_Contract__c | Name Commercial Contract | Text | Technical field used as merge field in emailtemplates |
| Name_Contract_Manager__c | Name Contract Manager | Text | Technical field used as merge field in emailtemplates |
| Operating_Hours__c | Operating Hours | Lookup | comes from the Location |
| Opportunity__c | Opportunity OLD | Lookup | <!-- --> |
| PDF_Status__c | PDF Status | Picklist | <!-- --> |
| Pick_Up_Items__c | Pick Up Items | LongTextArea | <!-- --> |
| Product__c | Product | Text | Technical field used as merge field in emailtemplates |
| Production_Work__c | Production Work ? | Checkbox | <!-- --> |
| Quote__c | Quote | Lookup | <!-- --> |
| Reviewed_for_Service_Report__c | Reviewed for Service Report | Checkbox | <!-- --> |
| Rework_for_Work_Order__c | Rework for Work Order | Lookup | <!-- --> |
| Rework_Planned__c | Rework Planned | Checkbox | <!-- --> |
| Rework_reasons__c | Rework reasons | Picklist | <!-- --> |
| Scheduled_Date__c | Scheduled Date | Date | Technical field used as merge field in emailtemplates |
| Shop_Name__c | Shop Name | Text | <!-- --> |
| Shop_Visit_Amount__c | Shop Visit Amount | Currency | <!-- --> |
| Shop_Visit_Date__c | Shop Visit Date | Date | <!-- --> |
| Shop_Visit_Done__c | Shop Visit Done | Checkbox | <!-- --> |
| Shop_Visit_Duration__c | Shop Visit Duration (In Minutes) | Number | <!-- --> |
| Shop_Visit_End_Time__c | Shop Visit End Time | DateTime | <!-- --> |
| Shop_Visit_Reviewed_Approved__c | Shop Visit Reviewed/Approved | Checkbox | <!-- --> |
| Shop_Visit_Start_Time__c | Shop Visit Start Time | DateTime | <!-- --> |
| Signature_Required__c | Signature Required | Checkbox | <!-- --> |
| Special_Equipment__c | Special Equipment | LongTextArea | <!-- --> |
| Trigger_Notification_to_Customer__c | Trigger Notification to Customer | Checkbox | <!-- --> |
| Type__c | Type | Text | sed to avoid adding WOL as a Work Step in certain use cases. |
| Waste_Quantity__c | Waste Quantity | Number | <!-- --> |
| Waste_to_Drop_Off__c | Waste to Drop Off | MultiselectPicklist | <!-- --> |
| Waste_Unit_of_Measure__c | Waste Unit of Measure | Picklist | <!-- --> |
| Waste_Visit_Done__c | Waste Visit Done | Checkbox | <!-- --> |
| Waste_Visit_Planned__c | Waste Visit Planned | Checkbox | <!-- --> |
| WO_with_Goodwill_Tasks__c | WO with Goodwill Tasks | Checkbox | <!-- --> |
| WOL_Already_Added__c | WOL Already Added | Checkbox | <!-- --> |
| Work_Order_Type__c | Work Order Type | Picklist | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Location_Passport_Mobile_Flow_Screen_flow_View_Location_Passport_Information](../flows/Location_Passport_Mobile_Flow_Screen_flow_View_Location_Passport_Information.md) [🕒](../flows/Location_Passport_Mobile_Flow_Screen_flow_View_Location_Passport_Information-history.md) |  Field Service Mobile | <!-- --> |
| 💻 | [Quote_Gantt_Action_Clone](../flows/Quote_Gantt_Action_Clone.md) [🕒](../flows/Quote_Gantt_Action_Clone-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Work_Order_Autolaunched_Flow_Update_PDF_Status](../flows/Work_Order_Autolaunched_Flow_Update_PDF_Status.md) [🕒](../flows/Work_Order_Autolaunched_Flow_Update_PDF_Status-history.md) |  Auto Launched Flow | <!-- --> |
| 💻 | [Work_Order_Mobile_Flow_Check_In](../flows/Work_Order_Mobile_Flow_Check_In.md) [🕒](../flows/Work_Order_Mobile_Flow_Check_In-history.md) |  Field Service Mobile | This flow updates the status of the work order and the related service appointment to ‘In Progress’. |
| 💻 | [Work_Order_Mobile_Flow_Check_Out](../flows/Work_Order_Mobile_Flow_Check_Out.md) [🕒](../flows/Work_Order_Mobile_Flow_Check_Out-history.md) |  Field Service Mobile | This flow updates the status of the work order and the related service appointment to ‘In Progress’. |
| 💻 | [Work_Order_Mobile_Flow_Log_Waste_Depot_Visit](../flows/Work_Order_Mobile_Flow_Log_Waste_Depot_Visit.md) |  Field Service Mobile | This flow allows the operator to log a waste depot visit |
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Depot_Visit](../flows/Work_Order_Mobile_Flow_Screen_Flow_Depot_Visit.md) |  Field Service Mobile | This flow allows an operator to execute a depot visit. |
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Enter_Shop_Visit_Information](../flows/Work_Order_Mobile_Flow_Screen_Flow_Enter_Shop_Visit_Information.md) [🕒](../flows/Work_Order_Mobile_Flow_Screen_Flow_Enter_Shop_Visit_Information-history.md) |  Field Service Mobile | This flow allows an operator to enter the necessary information when collecting items from a shop. |
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Enter_Waste_Visit_Information](../flows/Work_Order_Mobile_Flow_Screen_Flow_Enter_Waste_Visit_Information.md) [🕒](../flows/Work_Order_Mobile_Flow_Screen_Flow_Enter_Waste_Visit_Information-history.md) |  Field Service Mobile | <!-- --> |
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Log_LMRA_Information](../flows/Work_Order_Mobile_Flow_Screen_Flow_Log_LMRA_Information.md) [🕒](../flows/Work_Order_Mobile_Flow_Screen_Flow_Log_LMRA_Information-history.md) |  Field Service Mobile | <!-- --> |
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Take_After_Work_Photos](../flows/Work_Order_Mobile_Flow_Screen_Flow_Take_After_Work_Photos.md) [🕒](../flows/Work_Order_Mobile_Flow_Screen_Flow_Take_After_Work_Photos-history.md) |  Field Service Mobile | This screen flow allows the operator to attach photos taken after the execution of a work order. |
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Take_Before_Work_Photos](../flows/Work_Order_Mobile_Flow_Screen_Flow_Take_Before_Work_Photos.md) [🕒](../flows/Work_Order_Mobile_Flow_Screen_Flow_Take_Before_Work_Photos-history.md) |  Field Service Mobile | This screen flow allows the operator to attach photos taken before the execution of a work order. |
| 💻 | [Work_Order_Screen_Flow_Create_Depot_Visit](../flows/Work_Order_Screen_Flow_Create_Depot_Visit.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Depot_Visit-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Work_Order_Screen_Flow_Create_Depot_Visit_Console](../flows/Work_Order_Screen_Flow_Create_Depot_Visit_Console.md) |  Screen Flow | <!-- --> |
| 💻 | [Work_Order_Screen_Flow_Create_Internal_Work](../flows/Work_Order_Screen_Flow_Create_Internal_Work.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Internal_Work-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Work_Order_Screen_Flow_Create_Rework_WO](../flows/Work_Order_Screen_Flow_Create_Rework_WO.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Rework_WO-history.md) |  Screen Flow | This flow allows the contract manager to create a rework work order. |
| 💻 | [Work_Order_Screen_Flow_Create_Waste_Depot_Visit](../flows/Work_Order_Screen_Flow_Create_Waste_Depot_Visit.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Waste_Depot_Visit-history.md) |  Screen Flow | This flow allows a contract manager to create a waste depot visit. |
| 💻 | [Work_Order_Screen_Flow_Service_Report_Review_Flag](../flows/Work_Order_Screen_Flow_Service_Report_Review_Flag.md) [🕒](../flows/Work_Order_Screen_Flow_Service_Report_Review_Flag-history.md) |  Screen Flow | This is used to show that a Service Report needs to be flagged as Ready for the Service Report to be sent for Extra Work and Small Works Work Orders. |
| Mileage_Entry__c | [Mileage_Entry_After_Save_Record_Triggered_Set_Work_As_Travel_Time_Work_Order](../flows/Mileage_Entry_After_Save_Record_Triggered_Set_Work_As_Travel_Time_Work_Order.md) [🕒](../flows/Mileage_Entry_After_Save_Record_Triggered_Set_Work_As_Travel_Time_Work_Order-history.md) |  Record After Save | <!-- --> |
| Quote | [Quote_After_Save_Create_Work_Order_on_Acceptance](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance.md) [🕒](../flows/Quote_After_Save_Create_Work_Order_on_Acceptance-history.md) |  Record After Save | <!-- --> |
| ServiceAppointment | [Service_Appointment_After_Save_Record_Triggered_Add_Customer_Notification_Data](../flows/Service_Appointment_After_Save_Record_Triggered_Add_Customer_Notification_Data.md) |  Record After Save | Flow that sents field to retrigger the notification to the customer if a SA is rescheduled |
| ServiceAppointment | [Service_Appointment_After_Save_Record_Triggered_Add_Start_Date_and_Retrigger_Not](../flows/Service_Appointment_After_Save_Record_Triggered_Add_Start_Date_and_Retrigger_Not.md) |  Record After Save | Flow that sents field to retrigger the notification to the customer if a SA is rescheduled |
| ServiceAppointment | [Service_Appointment_After_Save_Record_Triggered_Populate_Start_End_Date_on_WO](../flows/Service_Appointment_After_Save_Record_Triggered_Populate_Start_End_Date_on_WO.md) |  Record After Save | This flow updates the start date and end date fields on WO, based on the values of scheduled start and scheduled end fields on the related SA. |
| ServiceAppointment | [Service_Appointment_After_Save_Record_Triggered_Set_Service_Territory](../flows/Service_Appointment_After_Save_Record_Triggered_Set_Service_Territory.md) [🕒](../flows/Service_Appointment_After_Save_Record_Triggered_Set_Service_Territory-history.md) |  Record After Save | <!-- --> |
| ServiceAppointment | [Service_Appointment_After_Save_Record_Triggered_Update_Related_WO_Status](../flows/Service_Appointment_After_Save_Record_Triggered_Update_Related_WO_Status.md) |  Record After Save | This flow updates the status of the related work order so that it is aligned and has the same status. |
| ServiceAppointment | [Service_Appointment_Before_Save_Record_Triggered_Add_Service_Document_Template](../flows/Service_Appointment_Before_Save_Record_Triggered_Add_Service_Document_Template.md) |  Record Before Save | <!-- --> |
| ServiceAppointment | [Service_Appointment_Scheduled_Customer_Notification](../flows/Service_Appointment_Scheduled_Customer_Notification.md) [🕒](../flows/Service_Appointment_Scheduled_Customer_Notification-history.md) |  Scheduled | Flow that sends notification to customer when a service appointment is (re)scheduled |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Add_WOL_As_Work_Steps](../flows/Work_Order_After_Save_Record_Triggered_Add_WOL_As_Work_Steps.md) [🕒](../flows/Work_Order_After_Save_Record_Triggered_Add_WOL_As_Work_Steps-history.md) |  Record After Save | <!-- --> |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Assign_Products_Consumed](../flows/Work_Order_After_Save_Record_Triggered_Assign_Products_Consumed.md) |  Record After Save | <!-- --> |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Assign_Work_Order_Lines](../flows/Work_Order_After_Save_Record_Triggered_Assign_Work_Order_Lines.md) [🕒](../flows/Work_Order_After_Save_Record_Triggered_Assign_Work_Order_Lines-history.md) |  Record After Save | <!-- --> |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Delete_Work_Steps](../flows/Work_Order_After_Save_Record_Triggered_Delete_Work_Steps.md) [🕒](../flows/Work_Order_After_Save_Record_Triggered_Delete_Work_Steps-history.md) |  Record After Save | This flow deletes the work steps when the work order status changes from 'Dispatched' to either 'Unscheduled' or 'Scheduled'. |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Extra_Work_Add_WOL_As_Work_Steps](../flows/Work_Order_After_Save_Record_Triggered_Extra_Work_Add_WOL_As_Work_Steps.md) [🕒](../flows/Work_Order_After_Save_Record_Triggered_Extra_Work_Add_WOL_As_Work_Steps-history.md) |  Record After Save | <!-- --> |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Populate_Contact_on_WO_and_SA](../flows/Work_Order_After_Save_Record_Triggered_Populate_Contact_on_WO_and_SA.md) [🕒](../flows/Work_Order_After_Save_Record_Triggered_Populate_Contact_on_WO_and_SA-history.md) |  Record After Save | This flow populates the contact field on a work order and its related service appointment on creation. It takes an operational contact of the related operational account. |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Unassign_Products_Consumed](../flows/Work_Order_After_Save_Record_Triggered_Unassign_Products_Consumed.md) [🕒](../flows/Work_Order_After_Save_Record_Triggered_Unassign_Products_Consumed-history.md) |  Record After Save | <!-- --> |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Update_Related_SA_Status](../flows/Work_Order_After_Save_Record_Triggered_Update_Related_SA_Status.md) |  Record After Save | This flow updates the status of the related service appointment so that it is aligned and has the same status. |
| WorkOrder | [Work_Order_After_Update_Add_Log_KM](../flows/Work_Order_After_Update_Add_Log_KM.md) |  Record After Save | <!-- --> |
| WorkOrder | [Work_Order_After_Update_Create_Signature_Work_Step](../flows/Work_Order_After_Update_Create_Signature_Work_Step.md) [🕒](../flows/Work_Order_After_Update_Create_Signature_Work_Step-history.md) |  Record After Save | <!-- --> |
| WorkOrder | [Work_Order_Before_Save_Record_Triggered_Goodwill_Task_Check](../flows/Work_Order_Before_Save_Record_Triggered_Goodwill_Task_Check.md) |  Record Before Save | For reporting purposes, this flow will tick the 'WO with Goodwill Tasks' checkbox to identify work orders where goodwill tasks have been performed. |
| WorkOrder | [Work_Order_Before_Save_Record_Triggered_Set_Contract_Manager_Value](../flows/Work_Order_Before_Save_Record_Triggered_Set_Contract_Manager_Value.md) |  Record Before Save | <!-- --> |
| WorkOrder | [Work_Order_Goodwill_Task_Check](../flows/Work_Order_Goodwill_Task_Check.md) |  Record Before Save | For reporting purposes, this flow will tick the 'WO with Goodwill Tasks' checkbox to identify work orders where goodwill tasks have been performed. |
| WorkOrder | [Work_Order_Record_Triggered_Flow_Set_PDF_Status_for_Extra_Work](../flows/Work_Order_Record_Triggered_Flow_Set_PDF_Status_for_Extra_Work.md) [🕒](../flows/Work_Order_Record_Triggered_Flow_Set_PDF_Status_for_Extra_Work-history.md) |  Record After Save | Sets the PDF Status for Extra Work and Small Works |
| WorkOrder | [Work_Order_Scheduled_High_Prio_Work_Order_Overdue](../flows/Work_Order_Scheduled_High_Prio_Work_Order_Overdue.md) [🕒](../flows/Work_Order_Scheduled_High_Prio_Work_Order_Overdue-history.md) |  Scheduled | sends notification to Contract Manager when a high prio work order is overdue |
| WorkOrder | [Work_Order_Send_Customer_Notification_Crew_Inbound](../flows/Work_Order_Send_Customer_Notification_Crew_Inbound.md) [🕒](../flows/Work_Order_Send_Customer_Notification_Crew_Inbound-history.md) |  Record After Save | <!-- --> |
| WorkOrder | [Work_Order_Set_Customer_Notification_Flag](../flows/Work_Order_Set_Customer_Notification_Flag.md) [🕒](../flows/Work_Order_Set_Customer_Notification_Flag-history.md) |  Record After Save | <!-- --> |
| WorkPlan | [Work_Plan_Extra_Work_Steps](../flows/Work_Plan_Extra_Work_Steps.md) [🕒](../flows/Work_Plan_Extra_Work_Steps-history.md) |  Record After Save | <!-- --> |
| WorkStep | [Work_Step_After_Save_Record_Triggered_Update_Related_WOL_Status](../flows/Work_Step_After_Save_Record_Triggered_Update_Related_WOL_Status.md) |  Record After Save | <!-- --> |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [ATAKPerformanceService](../apex/ATAKPerformanceService.md) | Callout |
| [ATAKPerformanceServiceTest](../apex/ATAKPerformanceServiceTest.md) | Test |
| [ATAKWorkLogService](../apex/ATAKWorkLogService.md) | Class |
| [ATAKWorkLogServiceTest](../apex/ATAKWorkLogServiceTest.md) | Test |
| [AccountDetailsController](../apex/AccountDetailsController.md) | Lightning Controller |
| [AccountDetailsControllerTest](../apex/AccountDetailsControllerTest.md) | Test |
| [CheckInService](../apex/CheckInService.md) | Lightning Controller |
| [CloneWorkOrderController](../apex/CloneWorkOrderController.md) | Class |
| [CreateChildWorkOrderController](../apex/CreateChildWorkOrderController.md) | Visualforce Controller |
| [CreateInternalWorkOrderController](../apex/CreateInternalWorkOrderController.md) | Lightning Controller |
| [ExtraWorkOrderController](../apex/ExtraWorkOrderController.md) | Lightning Controller |
| [FirstWorkOrderChecker](../apex/FirstWorkOrderChecker.md) | Lightning Controller |
| [FirstWorkOrderCheckerTest](../apex/FirstWorkOrderCheckerTest.md) | Test |
| [GanttRoundPinAction](../apex/GanttRoundPinAction.md) | Class |
| [GanttRoundPinActionTest](../apex/GanttRoundPinActionTest.md) | Test |
| [ImageCaptureService](../apex/ImageCaptureService.md) | Lightning Controller |
| [InternalWorkOrderController](../apex/InternalWorkOrderController.md) | Lightning Controller |
| [LocationMonitorController](../apex/LocationMonitorController.md) | Lightning Controller |
| [MaintenancePlanService](../apex/MaintenancePlanService.md) | Lightning Controller |
| [MaintenancePlanServiceTest](../apex/MaintenancePlanServiceTest.md) | Test |
| [MileageEntryProjectLinkService](../apex/MileageEntryProjectLinkService.md) | Class |
| [MileageEntryProjectLinkServiceTest](../apex/MileageEntryProjectLinkServiceTest.md) | Test |
| [PDFButler_ConvertService](../apex/PDFButler_ConvertService.md) | Class |
| [SFS_WorkOrderCreatorController](../apex/SFS_WorkOrderCreatorController.md) | Lightning Controller |
| [SFS_WorkOrderCreatorControllerTest](../apex/SFS_WorkOrderCreatorControllerTest.md) | Test |
| [ServiceAppointmentRescheduler](../apex/ServiceAppointmentRescheduler.md) | Class |
| [ServiceAppointmentTriggerHandler](../apex/ServiceAppointmentTriggerHandler.md) | Trigger Handler |
| [ServiceAppointmentTriggerHandlerTest](../apex/ServiceAppointmentTriggerHandlerTest.md) | Test |
| [ServiceReportGenerationBatch](../apex/ServiceReportGenerationBatch.md) | Batch |
| [TimeSheetController](../apex/TimeSheetController.md) | Lightning Controller |
| [TimeSheetEntryController](../apex/TimeSheetEntryController.md) | Lightning Controller |
| [TimeSheetProjectLinkService](../apex/TimeSheetProjectLinkService.md) | Class |
| [TimeSheetProjectLinkServiceTest](../apex/TimeSheetProjectLinkServiceTest.md) | Test |
| [ValidationService](../apex/ValidationService.md) | Class |
| [WorkOrderLocationBatch](../apex/WorkOrderLocationBatch.md) | Batch |
| [WorkOrderLocationQueueable](../apex/WorkOrderLocationQueueable.md) | Class |
| [WorkOrderReviewController](../apex/WorkOrderReviewController.md) | Lightning Controller |
| [WorkOrderScheduler](../apex/WorkOrderScheduler.md) | Class |
| [WorkOrderSchedulerBatch](../apex/WorkOrderSchedulerBatch.md) | Batch |
| [WorkOrderSchedulerController](../apex/WorkOrderSchedulerController.md) | Lightning Controller |
| [WorkOrderSequence](../apex/WorkOrderSequence.md) | Class |
| [WorkOrderTriggerHandler](../apex/WorkOrderTriggerHandler.md) | Trigger Handler |
| [WorkStepSignatureController](../apex/WorkStepSignatureController.md) | Lightning Controller |
| [WorkStepSignatureControllerTest](../apex/WorkStepSignatureControllerTest.md) | Test |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [Home_Page_Business_Support](../pages/Home_Page_Business_Support.md) |  Home Page |
| [Home_Page_Contract_Manager](../pages/Home_Page_Contract_Manager.md) |  Home Page |
| [Notification_Crew_on_its_way_ENG](../pages/Notification_Crew_on_its_way_ENG.md) |  Email Template Page |
| [Notification_Crew_on_its_way_FR](../pages/Notification_Crew_on_its_way_FR.md) |  Email Template Page |
| [Notification_Crew_on_its_way_NL](../pages/Notification_Crew_on_its_way_NL.md) |  Email Template Page |
| [Notification_Planned_WO_NL](../pages/Notification_Planned_WO_NL.md) |  Email Template Page |
| [Notification_REScheduled_WO_Day_ENG](../pages/Notification_REScheduled_WO_Day_ENG.md) |  Email Template Page |
| [Notification_REScheduled_WO_Day_FR](../pages/Notification_REScheduled_WO_Day_FR.md) |  Email Template Page |
| [Notification_REScheduled_WO_Day_NL](../pages/Notification_REScheduled_WO_Day_NL.md) |  Email Template Page |
| [Notification_REScheduled_WO_ENG](../pages/Notification_REScheduled_WO_ENG.md) |  Email Template Page |
| [Notification_REScheduled_WO_FR](../pages/Notification_REScheduled_WO_FR.md) |  Email Template Page |
| [Notification_REScheduled_WO_NL](../pages/Notification_REScheduled_WO_NL.md) |  Email Template Page |
| [Notification_Scheduled_WO_Day_ENG](../pages/Notification_Scheduled_WO_Day_ENG.md) |  Email Template Page |
| [Notification_Scheduled_WO_Day_FR](../pages/Notification_Scheduled_WO_Day_FR.md) |  Email Template Page |
| [Notification_Scheduled_WO_Day_NL](../pages/Notification_Scheduled_WO_Day_NL.md) |  Email Template Page |
| [Notification_Scheduled_WO_ENG](../pages/Notification_Scheduled_WO_ENG.md) |  Email Template Page |
| [Notification_Scheduled_WO_FR](../pages/Notification_Scheduled_WO_FR.md) |  Email Template Page |
| [Service_Appointment](../pages/Service_Appointment.md) |  Service Document |
| [Service_Appointment_Service_Report_NL](../pages/Service_Appointment_Service_Report_NL.md) |  Service Document |
| [Service_Appointment_Service_Report_Without_Signature_NL](../pages/Service_Appointment_Service_Report_Without_Signature_NL.md) |  Service Document |
| [Service_Report_Notification](../pages/Service_Report_Notification.md) |  Email Template Page |
| [Service_Report_Notification_fr](../pages/Service_Report_Notification_fr.md) |  Email Template Page |
| [Service_Report_Notification_nl](../pages/Service_Report_Notification_nl.md) |  Email Template Page |
| [Time_Sheet_Record_Page](../pages/Time_Sheet_Record_Page.md) |  Record Page |
| [Work_Order_Line_Item_Record_Page](../pages/Work_Order_Line_Item_Record_Page.md) |  Record Page |
| [Work_Order_Record_Page](../pages/Work_Order_Record_Page.md) |  Record Page |
| [Work_Order_Service_Report](../pages/Work_Order_Service_Report.md) |  Service Document |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
