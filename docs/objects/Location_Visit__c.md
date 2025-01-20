## Location_Visit__c

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Access_Information__c | Access Information | LongTextArea | <!-- --> |
| Asset_Evaluation__c | Asset Evaluation | Picklist | <!-- --> |
| Assets__c | Assets | Picklist | <!-- --> |
| Assets_Additional__c | Assets (Additional) | TextArea | <!-- --> |
| Commercial_Account__c | Commercial Account | Lookup | Lookup to the Commmercial account that requested this site visit for a potential customer |
| Contact_Visit__c | Contact Visit | Lookup | <!-- --> |
| Demand_type__c | Demand Type | Picklist | <!-- --> |
| Email_Contact_Visit__c | Email Contact Visit | Text | <!-- --> |
| Estimation_Intervention_Time__c | Estimation Intervention Time | Number | <!-- --> |
| Execution_Deadline_Request__c | Execution Deadline Request | Date | <!-- --> |
| Extra_Opportunity_Information__c | Extra Opportunity Information | LongTextArea | <!-- --> |
| Fixed_date_Already_planned__c | Fixed date / Already planned | Checkbox | <!-- --> |
| Frequency__c | Frequency | Number | <!-- --> |
| Frequency_Type__c | Frequency Type | Picklist | <!-- --> |
| Geolocation__c | Geolocation | Location | <!-- --> |
| Location_Name__c | Location Name | Text | <!-- --> |
| Location_Passport__c | Location Passport | Picklist | <!-- --> |
| Location_Passport_Status__c | Location Passport Status | Picklist | <!-- --> |
| Location_Visit_Type__c | Location Visit Type | Picklist | <!-- --> |
| Machines_Required__c | Machines Required | LongTextArea | <!-- --> |
| Operational_Account__c | Operational Account | Lookup | Lookup to the operational account that was visited |
| Opportunity__c | Opportunity | Lookup | Opportunity for which this site visit was done |
| Overall_Evaluation__c | Overall Evaluation | Picklist | <!-- --> |
| Phone_Contact_Visit__c | Phone Contact Visit | Text | <!-- --> |
| Priority_Request__c | Priority Request | Picklist | <!-- --> |
| Quantity__c | Quantity | Number | <!-- --> |
| Remarks__c | Remarks | LongTextArea | <!-- --> |
| Remarks_Demand_type__c | Remarks Demand Type | LongTextArea | <!-- --> |
| Safety_Information__c | Safety Information | LongTextArea | <!-- --> |
| Safety_Instruction_Status__c | Safety Instruction Status | Picklist | <!-- --> |
| Scoring__c | Scoring | Number | <!-- --> |
| Service_Appointment__c | Service Appointment | Lookup | The service appointment the inspection is linked to |
| Service_Contract__c | Service Contract | Lookup | <!-- --> |
| Service_Contract_Status__c | Service Contract Status | Picklist | <!-- --> |
| Service_Package__c | Service Package | Lookup | <!-- --> |
| Service_Package_Name__c | Service Package Name | Picklist | <!-- --> |
| Site_Boundaries_Info__c | Site Boundaries Info | LongTextArea | <!-- --> |
| Status__c | Status | Picklist | <!-- --> |
| Type__c | Type | Picklist | Inspection = with an existing customer<br/>Site visit = visit for new oppty |
| Unit__c | Unit | Picklist | <!-- --> |
| Visit_Address__c | Visit Address | Address | <!-- --> |
| Visit_Date__c | Visit Date | DateTime | <!-- --> |
| Visit_Notes__c | Visit Notes | Html | <!-- --> |
| Visitor_Internal__c | Visitor (Internal) | Lookup | <!-- --> |
| Work_Order__c | Work Order | Lookup | <!-- --> |

## Validation Rules

| Rule      | Active | Description | Formula |
| :-------- | :---- | :---------- | :------ |
| Internal_Visitor_Mandatory | No ⚠️ |  | `AND(
    OR(ISPICKVAL(Location_Visit_Type__c, "Contract opportunity"),
       ISPICKVAL(Location_Visit_Type__c, "Additional work opportunity")
       ),
    ISBLANK(Visitor_Internal__c)
    )` |
| Planned_Date | Yes |  | `AND(
    Fixed_date_Already_planned__c = TRUE,
    ISBLANK(Visit_Date__c)
)` |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| Location_Visit__c | [Location_Visit_After_Save_Record_Triggered_Inform_visitor_when_Opportunity_visit](../flows/Location_Visit_After_Save_Record_Triggered_Inform_visitor_when_Opportunity_visit.md) |  Record After Save | Send a notification to the expected visitor that they are expected to do a visit |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
