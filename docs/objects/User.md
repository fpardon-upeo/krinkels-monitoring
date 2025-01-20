## User

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| ATAK_Code__c | ATAK Code | Text | <!-- --> |
| ATAK_Id__c | ATAK Id | Text | <!-- --> |
| Create_Field_Service_Resource__c | Create Field Service Resource | Checkbox | <!-- --> |
| End_Date__c | End Date | Date | <!-- --> |
| Interim_Office__c | Interim Office | Picklist | <!-- --> |
| Restrict_Desktop_Access__c | Restrict Desktop Access | Checkbox | <!-- --> |
| Start_Date__c | Start Date | Date | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Datatable_Configuration_Wizard5](../flows/Datatable_Configuration_Wizard5.md) [🕒](../flows/Datatable_Configuration_Wizard5-history.md) |  Screen Flow | Flow designed to run inside of the datatable CPE to select and set component attributes by interacting with a sample datatable. |
| 💻 | [Location_Passport_Mobile_Flow_Screen_flow_View_Location_Passport_Information](../flows/Location_Passport_Mobile_Flow_Screen_flow_View_Location_Passport_Information.md) [🕒](../flows/Location_Passport_Mobile_Flow_Screen_flow_View_Location_Passport_Information-history.md) |  Field Service Mobile | <!-- --> |
| 💻 | [Send_Better_Email_Testflow](../flows/Send_Better_Email_Testflow.md) [🕒](../flows/Send_Better_Email_Testflow-history.md) |  Screen Flow | A series of 5 examples for testing and demonstrating Send Better Email Action Component |
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Depot_Visit](../flows/Work_Order_Mobile_Flow_Screen_Flow_Depot_Visit.md) |  Field Service Mobile | This flow allows an operator to execute a depot visit. |
| 💻 | [test](../flows/test.md) [🕒](../flows/test-history.md) |  Screen Flow | <!-- --> |
| ATAK_Project__c | [ATAK_Project_After_Save_Record_Triggered_Set_Territory_And_Owner](../flows/ATAK_Project_After_Save_Record_Triggered_Set_Territory_And_Owner.md) [🕒](../flows/ATAK_Project_After_Save_Record_Triggered_Set_Territory_And_Owner-history.md) |  Record Before Save | <!-- --> |
| Asset | [Asset_Notify_Business_Support_for_ATAK_Project](../flows/Asset_Notify_Business_Support_for_ATAK_Project.md) [🕒](../flows/Asset_Notify_Business_Support_for_ATAK_Project-history.md) |  Record After Save | <!-- --> |
| AssignedResource | [Assigned_Resource_Before_Save_Record_Triggered_Identify_Assigned_Resource_Type](../flows/Assigned_Resource_Before_Save_Record_Triggered_Identify_Assigned_Resource_Type.md) |  Record Before Save | For reporting purposes, this flow will allow identifying the type of resource assigned to a service appointment. <br/>This flow will also allow the identification of whether the assigned resource is linked to a system admin user for the purpose of timesheet entry creation. |
| Operator_Created_Event__e | [Operator_Created_Event_e_Create_Service_Resource](../flows/Operator_Created_Event_e_Create_Service_Resource.md) [🕒](../flows/Operator_Created_Event_e_Create_Service_Resource-history.md) |  Platform Event | <!-- --> |
| ServiceAppointment | [Service_Appointment_Scheduled_High_Prio_Work_Order_Overdue](../flows/Service_Appointment_Scheduled_High_Prio_Work_Order_Overdue.md) |  Scheduled | sends notification to Contract Manager when a high prio work order is overdue |
| ServiceContract | [Service_contract_Scheduled_Contract_Renewal_Reminder](../flows/Service_contract_Scheduled_Contract_Renewal_Reminder.md) [🕒](../flows/Service_contract_Scheduled_Contract_Renewal_Reminder-history.md) |  Scheduled | sends reminder mail to the contract manager 3 months before the end of a contract |
| User | [User_After_Create_RecordTrigered_Create_Service_Resource](../flows/User_After_Create_RecordTrigered_Create_Service_Resource.md) [🕒](../flows/User_After_Create_RecordTrigered_Create_Service_Resource-history.md) |  Record After Save | <!-- --> |
| User | [User_After_Update_RecordTrigered_Create_Service_Resource](../flows/User_After_Update_RecordTrigered_Create_Service_Resource.md) [🕒](../flows/User_After_Update_RecordTrigered_Create_Service_Resource-history.md) |  Record After Save | <!-- --> |
| WorkOrder | [Work_Order_Scheduled_High_Prio_Work_Order_Overdue](../flows/Work_Order_Scheduled_High_Prio_Work_Order_Overdue.md) [🕒](../flows/Work_Order_Scheduled_High_Prio_Work_Order_Overdue-history.md) |  Scheduled | sends notification to Contract Manager when a high prio work order is overdue |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
