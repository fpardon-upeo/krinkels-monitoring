## AssignedResource

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| External_Id__c | External Id | Text | <!-- --> |
| FSL__calculated_duration__c | calculated duration (Minutes) | Number | <!-- --> |
| FSL__Estimated_Travel_Time_From_Source__c | Estimated Travel Time From Source | Picklist | <!-- --> |
| FSL__Estimated_Travel_Time_To_Source__c | Estimated Travel Time To Source | Picklist | <!-- --> |
| FSL__EstimatedTravelDistanceFrom__c | Approximate Travel Distance From | Number | <!-- --> |
| FSL__EstimatedTravelDistanceTo__c | Approximate Travel Distance To | Number | <!-- --> |
| FSL__EstimatedTravelTimeFrom__c | Approximate Travel Time From (Minutes) | Number | <!-- --> |
| FSL__Last_Updated_Epoch__c | Last Updated Epoch | Number | <!-- --> |
| FSL__UpdatedByOptimization__c | UpdatedByOptimization | Checkbox | <!-- --> |
| Resource_Is_A_Person__c | Resource Is A Person | Checkbox | <!-- --> |
| Service_Territory__c | Service Territory | Lookup | <!-- --> |
| User_Is_System_Admin__c | User Is System Admin | Checkbox | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Quote_Gantt_Action_Clone](../flows/Quote_Gantt_Action_Clone.md) [🕒](../flows/Quote_Gantt_Action_Clone-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Work_Order_Screen_Flow_Create_Internal_Work](../flows/Work_Order_Screen_Flow_Create_Internal_Work.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Internal_Work-history.md) |  Screen Flow | <!-- --> |
| AssignedResource | [Assigned_Resource_Before_Save_Record_Triggered_Identify_Assigned_Resource_Type](../flows/Assigned_Resource_Before_Save_Record_Triggered_Identify_Assigned_Resource_Type.md) |  Record Before Save | For reporting purposes, this flow will allow identifying the type of resource assigned to a service appointment. <br/>This flow will also allow the identification of whether the assigned resource is linked to a system admin user for the purpose of timesheet entry creation. |
| ServiceAppointment | [Service_Appointment_Time_Sheet_Automations](../flows/Service_Appointment_Time_Sheet_Automations.md) [🕒](../flows/Service_Appointment_Time_Sheet_Automations-history.md) |  Record After Save | This flows creates the automatic time sheet entries based on the evolving status of the service appointment |
| ServiceAppointment | [Service_Appointments_After_Save_Record_Triggered_Assign_Van_Inventory_to_Related](../flows/Service_Appointments_After_Save_Record_Triggered_Assign_Van_Inventory_to_Related.md) [🕒](../flows/Service_Appointments_After_Save_Record_Triggered_Assign_Van_Inventory_to_Related-history.md) |  Record After Save | This flow retrieves a van inventory based on the assigned resources of a service appointment. |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Assign_Products_Consumed](../flows/Work_Order_After_Save_Record_Triggered_Assign_Products_Consumed.md) |  Record After Save | <!-- --> |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [CreateChildWorkOrderController](../apex/CreateChildWorkOrderController.md) | Visualforce Controller |
| [FirstWorkOrderChecker](../apex/FirstWorkOrderChecker.md) | Lightning Controller |
| [FirstWorkOrderCheckerTest](../apex/FirstWorkOrderCheckerTest.md) | Test |
| [GanttRoundPinAction](../apex/GanttRoundPinAction.md) | Class |
| [GanttRoundPinActionTest](../apex/GanttRoundPinActionTest.md) | Test |
| [InternalWorkOrderController](../apex/InternalWorkOrderController.md) | Lightning Controller |
| [SchedulingController](../apex/SchedulingController.md) | Lightning Controller |
| [ServiceAppointmentTriggerHandler](../apex/ServiceAppointmentTriggerHandler.md) | Trigger Handler |
| [ServiceAppointmentTriggerHandlerTest](../apex/ServiceAppointmentTriggerHandlerTest.md) | Test |




_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
