## ServiceAppointment

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Asset__c | Asset | Lookup | <!-- --> |
| ATAK_Code__c | ATAK Code | Text | <!-- --> |
| ATAK_Project_Name__c | ATAK Project Name | Text | <!-- --> |
| Billing_Type__c | Billing Type | Picklist | <!-- --> |
| Cost_Center__c | Cost Center | Text | <!-- --> |
| Current_User_is_Manager__c | Current User is Manager | Checkbox | <!-- --> |
| Day_Pause_Duration__c | Day Pause Duration | Number | <!-- --> |
| Due_Date_in_the_Past__c | Due Date in the past | Checkbox | Field to indicate if the Due  date is in the past |
| Financial_Accounts_Billing__c | Financial Accounts Billing | Text | <!-- --> |
| FSL__Appointment_Grade__c | Appointment Grade | Number | <!-- --> |
| FSL__Auto_Schedule__c | Auto Schedule | Checkbox | <!-- --> |
| FSL__Duration_In_Minutes__c | Scheduled Duration | Number | <!-- --> |
| FSL__Emergency__c | Emergency | Checkbox | <!-- --> |
| FSL__Gantt_Display_Date__c | Gantt Display Date | DateTime | <!-- --> |
| FSL__GanttColor__c | Gantt Color | Text | <!-- --> |
| FSL__GanttIcon__c | Gantt Icon | LongTextArea | <!-- --> |
| FSL__GanttLabel__c | Gantt Label | Text | <!-- --> |
| FSL__InJeopardy__c | In Jeopardy | Checkbox | <!-- --> |
| FSL__InJeopardyReason__c | In Jeopardy Reason | Picklist | <!-- --> |
| FSL__InternalSLRGeolocation__c | Internal SLR Geolocation | Location | <!-- --> |
| FSL__IsFillInCandidate__c | Is Fill In Candidate | Checkbox | <!-- --> |
| FSL__IsMultiDay__c | Is MultiDay | Checkbox | <!-- --> |
| FSL__Last_Updated_Epoch__c | Last Updated Epoch | Number | <!-- --> |
| FSL__MDS_Calculated_length__c | Multiday Work Calculated length | Number | <!-- --> |
| FSL__MDT_Operational_Time__c | Multiday Work Operational Time | LongTextArea | <!-- --> |
| FSL__Pinned__c | Pinned | Checkbox | <!-- --> |
| FSL__Prevent_Geocoding_For_Chatter_Actions__c | Prevent Geocoding For Chatter Actions | Checkbox | <!-- --> |
| FSL__Related_Service__c | Related Service | Lookup | <!-- --> |
| FSL__Same_Day__c | Same Day | Checkbox | <!-- --> |
| FSL__Same_Resource__c | Same Resource | Checkbox | <!-- --> |
| FSL__Schedule_Mode__c | Schedule Mode | Picklist | <!-- --> |
| FSL__Schedule_over_lower_priority_appointment__c | Schedule Over Lower Priority Appointment | Checkbox | <!-- --> |
| FSL__Scheduling_Policy_Used__c | Scheduling Policy Used | Lookup | <!-- --> |
| FSL__Time_Dependency__c | Time Dependency | Picklist | <!-- --> |
| FSL__UpdatedByOptimization__c | UpdatedByOptimization | Checkbox | <!-- --> |
| FSL__Use_Async_Logic__c | Use Async Logic | Checkbox | <!-- --> |
| FSL__Virtual_Service_For_Chatter_Action__c | Virtual Service For Chatter Action (SLR) | Checkbox | <!-- --> |
| Intervention_Registration__c | Intervention Registration | Text | <!-- --> |
| Night_Pause_Duration__c | Night Pause Duration | Number | <!-- --> |
| Notification_Day__c | Notification Day | Checkbox | <!-- --> |
| Number_of_Assigned_Resources__c | Number of Assigned Resources | Summary | <!-- --> |
| Optimize__c | Optimize | Checkbox | <!-- --> |
| Original_Due_Date__c | Original Due Date | DateTime | <!-- --> |
| Original_Earliest_Start_Permitted__c | Original Earliest Start Permitted | DateTime | <!-- --> |
| Overdue_Reminder_Send__c | Overdue Reminder Send | Checkbox | Checkbox to make sure there is only 1 reminder send when an SA is overdue |
| Previous_Status__c | Previous Status | Text | <!-- --> |
| Priority__c | Priority | Text | <!-- --> |
| Recurrence__c | Recurrence | Text | <!-- --> |
| Scheduling_Notification_Send__c | Scheduling Notification Send | Picklist | Technical field. use din the flow to send out the notification to the customer that a WO was (re)scheduled |
| Travel_is_Done__c | Travel is Done | Checkbox | <!-- --> |
| Trigger_Notification_to_Customer__c | Trigger Notification to Customer | Checkbox | <!-- --> |
| Work_Type_Name__c | Work Type Name | Text | <!-- --> |

## Validation Rules

| Rule      | Active | Description | Formula |
| :-------- | :---- | :---------- | :------ |
| FSL__Dont_allow_scheduled_or_dispatched | Yes | Don't allow creation of service with status scheduled or  dispatched | `AND($Setup.FSL__Service_Creation_Validation_Rules__c.FSL__Service_Creation_Status_Validation__c,AND(ISNEW(),(OR(ISPICKVAL(StatusCategory, "Scheduled"),ISPICKVAL(StatusCategory, "Dispatched")))))` |
| FSL__isDueDateExist | No ⚠️ | Check if DueDate field exist on service appointment. | `ISNULL(  DueDate )` |
| FSL__isDurationExist | Yes | Check if Duration field exist on service appointment. | `ISNULL(Duration)` |
| FSL__isEarliestStartTimeExist | No ⚠️ | Check if EarliestStartTime field exist on service appointment. | `ISNULL( EarliestStartTime )` |
| FSL__Related_Service_with_time_dependency | Yes | If related service is not empty then time dependency is not empty | `( !ISBLANK(FSL__Related_Service__c) && ( ISBLANK(TEXT(FSL__Time_Dependency__c)) && !FSL__Same_Day__c && !FSL__Same_Resource__c ) )` |
| FSL__Same_Resource_Same_Start | Yes | Can't be same start and same reosurce | `TEXT(FSL__Time_Dependency__c) = "Same Start" && FSL__Same_Resource__c` |
| FSL__Schedule_End_Required | Yes |  | `ISNULL(SchedEndTime) && NOT(ISNULL(SchedStartTime))` |
| FSL__Schedule_Start_Required | Yes |  | `ISNULL(SchedStartTime) && NOT(ISNULL(SchedEndTime))` |
| FSL__Service_Color_HEX_Format | Yes |  | `(!ISBLANK(FSL__GanttColor__c)) && (NOT(REGEX(FSL__GanttColor__c, "#[a-fA-F0-9]{6}")))` |
| FSL__startTimeShouldPrecedeEndTime | No ⚠️ |  | `SchedEndTime <=  SchedStartTime` |
| FSL__Time_dependency_with_related_service | Yes |  | `( ISBLANK(FSL__Related_Service__c) && ( !ISBLANK(TEXT(FSL__Time_Dependency__c)) ||  FSL__Same_Day__c || FSL__Same_Resource__c ) )` |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Quote_Gantt_Action_Clone](../flows/Quote_Gantt_Action_Clone.md) [🕒](../flows/Quote_Gantt_Action_Clone-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Service_Appointment_Mobile_flow_Screen_flow_Send_Service_Report_to_Customer](../flows/Service_Appointment_Mobile_flow_Screen_flow_Send_Service_Report_to_Customer.md) [🕒](../flows/Service_Appointment_Mobile_flow_Screen_flow_Send_Service_Report_to_Customer-history.md) |  Field Service Mobile | This flow allows the operator to send the service report to the customer. |
| 💻 | [Work_Order_Mobile_Flow_Check_In](../flows/Work_Order_Mobile_Flow_Check_In.md) [🕒](../flows/Work_Order_Mobile_Flow_Check_In-history.md) |  Field Service Mobile | This flow updates the status of the work order and the related service appointment to ‘In Progress’. |
| 💻 | [Work_Order_Mobile_Flow_Check_Out](../flows/Work_Order_Mobile_Flow_Check_Out.md) [🕒](../flows/Work_Order_Mobile_Flow_Check_Out-history.md) |  Field Service Mobile | This flow updates the status of the work order and the related service appointment to ‘In Progress’. |
| 💻 | [Work_Order_Screen_Flow_Create_Internal_Work](../flows/Work_Order_Screen_Flow_Create_Internal_Work.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Internal_Work-history.md) |  Screen Flow | <!-- --> |
| ServiceAppointment | [Service_Appointment_After_Save_Record_Triggered_Add_Customer_Notification_Data](../flows/Service_Appointment_After_Save_Record_Triggered_Add_Customer_Notification_Data.md) |  Record After Save | Flow that sents field to retrigger the notification to the customer if a SA is rescheduled |
| ServiceAppointment | [Service_Appointment_After_Save_Record_Triggered_Add_Start_Date_and_Retrigger_Not](../flows/Service_Appointment_After_Save_Record_Triggered_Add_Start_Date_and_Retrigger_Not.md) |  Record After Save | Flow that sents field to retrigger the notification to the customer if a SA is rescheduled |
| ServiceAppointment | [Service_Appointment_After_Save_Record_Triggered_Populate_Start_End_Date_on_WO](../flows/Service_Appointment_After_Save_Record_Triggered_Populate_Start_End_Date_on_WO.md) |  Record After Save | This flow updates the start date and end date fields on WO, based on the values of scheduled start and scheduled end fields on the related SA. |
| ServiceAppointment | [Service_Appointment_After_Save_Record_Triggered_Set_Service_Territory](../flows/Service_Appointment_After_Save_Record_Triggered_Set_Service_Territory.md) [🕒](../flows/Service_Appointment_After_Save_Record_Triggered_Set_Service_Territory-history.md) |  Record After Save | <!-- --> |
| ServiceAppointment | [Service_Appointment_After_Save_Record_Triggered_Stamp_Original_Planning_Window](../flows/Service_Appointment_After_Save_Record_Triggered_Stamp_Original_Planning_Window.md) |  Record After Save | This flow stamps the original earliest start permitted and due date. In order for an unscheduled appointment to recover its original values. |
| ServiceAppointment | [Service_Appointment_After_Save_Record_Triggered_Update_Related_WO_Status](../flows/Service_Appointment_After_Save_Record_Triggered_Update_Related_WO_Status.md) |  Record After Save | This flow updates the status of the related work order so that it is aligned and has the same status. |
| ServiceAppointment | [Service_Appointment_Before_Save_Record_Triggered_Add_Service_Document_Template](../flows/Service_Appointment_Before_Save_Record_Triggered_Add_Service_Document_Template.md) |  Record Before Save | <!-- --> |
| ServiceAppointment | [Service_Appointment_Before_Save_Record_Triggered_Recover_Original_Planning_Windo](../flows/Service_Appointment_Before_Save_Record_Triggered_Recover_Original_Planning_Windo.md) |  Record Before Save | When a service appointment is updated to unscheduled, this flow recovers the original earliest start permitted and due date values. |
| ServiceAppointment | [Service_Appointment_Before_Save_Stamp_Actual_End_on_Completed](../flows/Service_Appointment_Before_Save_Stamp_Actual_End_on_Completed.md) |  Record Before Save | <!-- --> |
| ServiceAppointment | [Service_Appointment_Before_Save_Stamp_Actual_Start_on_In_Progress](../flows/Service_Appointment_Before_Save_Stamp_Actual_Start_on_In_Progress.md) |  Record Before Save | <!-- --> |
| ServiceAppointment | [Service_Appointment_Scheduled_Customer_Notification](../flows/Service_Appointment_Scheduled_Customer_Notification.md) [🕒](../flows/Service_Appointment_Scheduled_Customer_Notification-history.md) |  Scheduled | Flow that sends notification to customer when a service appointment is (re)scheduled |
| ServiceAppointment | [Service_Appointment_Scheduled_High_Prio_Work_Order_Overdue](../flows/Service_Appointment_Scheduled_High_Prio_Work_Order_Overdue.md) |  Scheduled | sends notification to Contract Manager when a high prio work order is overdue |
| ServiceAppointment | [Service_Appointment_Time_Sheet_Automations](../flows/Service_Appointment_Time_Sheet_Automations.md) [🕒](../flows/Service_Appointment_Time_Sheet_Automations-history.md) |  Record After Save | This flows creates the automatic time sheet entries based on the evolving status of the service appointment |
| ServiceAppointment | [Service_Appointments_After_Save_Record_Triggered_Assign_Van_Inventory_to_Related](../flows/Service_Appointments_After_Save_Record_Triggered_Assign_Van_Inventory_to_Related.md) [🕒](../flows/Service_Appointments_After_Save_Record_Triggered_Assign_Van_Inventory_to_Related-history.md) |  Record After Save | This flow retrieves a van inventory based on the assigned resources of a service appointment. |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Assign_Products_Consumed](../flows/Work_Order_After_Save_Record_Triggered_Assign_Products_Consumed.md) |  Record After Save | <!-- --> |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Populate_Contact_on_WO_and_SA](../flows/Work_Order_After_Save_Record_Triggered_Populate_Contact_on_WO_and_SA.md) [🕒](../flows/Work_Order_After_Save_Record_Triggered_Populate_Contact_on_WO_and_SA-history.md) |  Record After Save | This flow populates the contact field on a work order and its related service appointment on creation. It takes an operational contact of the related operational account. |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Update_Related_SA_Status](../flows/Work_Order_After_Save_Record_Triggered_Update_Related_SA_Status.md) |  Record After Save | This flow updates the status of the related service appointment so that it is aligned and has the same status. |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [CheckInService](../apex/CheckInService.md) | Lightning Controller |
| [CreateChildWorkOrderController](../apex/CreateChildWorkOrderController.md) | Visualforce Controller |
| [FirstWorkOrderChecker](../apex/FirstWorkOrderChecker.md) | Lightning Controller |
| [FirstWorkOrderCheckerTest](../apex/FirstWorkOrderCheckerTest.md) | Test |
| [GanttRoundPinAction](../apex/GanttRoundPinAction.md) | Class |
| [GanttRoundPinActionTest](../apex/GanttRoundPinActionTest.md) | Test |
| [InternalWorkOrderController](../apex/InternalWorkOrderController.md) | Lightning Controller |
| [SFS_WorkOrderCreatorController](../apex/SFS_WorkOrderCreatorController.md) | Lightning Controller |
| [SFS_WorkOrderCreatorControllerTest](../apex/SFS_WorkOrderCreatorControllerTest.md) | Test |
| [SchedulingController](../apex/SchedulingController.md) | Lightning Controller |
| [ServiceAppointmentRescheduler](../apex/ServiceAppointmentRescheduler.md) | Class |
| [ServiceAppointmentTriggerHandler](../apex/ServiceAppointmentTriggerHandler.md) | Trigger Handler |
| [ServiceAppointmentTriggerHandlerTest](../apex/ServiceAppointmentTriggerHandlerTest.md) | Test |
| [WorkOrderLocationBatch](../apex/WorkOrderLocationBatch.md) | Batch |
| [WorkOrderLocationQueueable](../apex/WorkOrderLocationQueueable.md) | Class |
| [WorkOrderReviewController](../apex/WorkOrderReviewController.md) | Lightning Controller |
| [WorkOrderTriggerHandler](../apex/WorkOrderTriggerHandler.md) | Trigger Handler |
| [fsl_Console_AccountController](../apex/fsl_Console_AccountController.md) | Lightning Controller |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [Service_Appointment](../pages/Service_Appointment.md) |  Service Document |
| [Service_Appointment_Record_Page](../pages/Service_Appointment_Record_Page.md) |  Record Page |
| [Service_Appointment_Service_Report_NL](../pages/Service_Appointment_Service_Report_NL.md) |  Service Document |
| [Service_Appointment_Service_Report_Without_Signature_NL](../pages/Service_Appointment_Service_Report_Without_Signature_NL.md) |  Service Document |
| [Work_Order_Record_Page](../pages/Work_Order_Record_Page.md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
