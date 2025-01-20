## Location

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Account__c | Account | Lookup | <!-- --> |
| Code__c | Code | Text | <!-- --> |
| Contract_Manager__c | Contract Manager | Lookup | <!-- --> |
| Current_User_is_CM__c | Current User is CM | Checkbox | Technical field to use in List view filtering |
| Driver_Code__c | Driver Code | Text | <!-- --> |
| License_Plate__c | License Plate | Text | <!-- --> |
| Van_Crew__c | Van Crew | Lookup | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Service_Crew_and_Van_Creator](../flows/Service_Crew_and_Van_Creator.md) [🕒](../flows/Service_Crew_and_Van_Creator-history.md) |  Screen Flow | <!-- --> |
| 💻 | [Work_Order_Screen_Flow_Create_Internal_Work](../flows/Work_Order_Screen_Flow_Create_Internal_Work.md) [🕒](../flows/Work_Order_Screen_Flow_Create_Internal_Work-history.md) |  Screen Flow | <!-- --> |
| Location | [Van_After_Save_Record_Triggered_Assign_Van_to_Lead_Crew_Member](../flows/Van_After_Save_Record_Triggered_Assign_Van_to_Lead_Crew_Member.md) |  Record After Save | This flow populates the Van field on the service resource record of the lead van crew member, allowing him to log the products consumed. |
| Location | [Van_Before_Save_Record_Triggered_Set_Naming_Convention](../flows/Van_Before_Save_Record_Triggered_Set_Naming_Convention.md) [🕒](../flows/Van_Before_Save_Record_Triggered_Set_Naming_Convention-history.md) |  Record Before Save | This flow sets the naming convention for a Van and flagged the record as an inventory location. We can link material items only to inventory locations. |
| Location_Visit__c | [Location_Visit_After_Save_Record_Triggered_Inform_visitor_when_Opportunity_visit](../flows/Location_Visit_After_Save_Record_Triggered_Inform_visitor_when_Opportunity_visit.md) |  Record After Save | Send a notification to the expected visitor that they are expected to do a visit |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
