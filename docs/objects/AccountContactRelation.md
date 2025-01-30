## AccountContactRelation

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Commercial_SPOC__c | Commercial SPOC | Checkbox | <!-- --> |
| Intervention_Registration_Contact__c | Intervention Registration Contact | Checkbox | used in the send out of the announcement of a scheduled visit to the correct contact |
| OLDIntervention_Registration_Contact__c | OLDIntervention Registration Contact | Checkbox | used in the send out of the announcement of a scheduled visit to the correct contact |
| Operational_SPOC__c | Operational SPOC | Checkbox | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Populate_Contact_on_WO_and_SA](../flows/Work_Order_After_Save_Record_Triggered_Populate_Contact_on_WO_and_SA.md) [🕒](../flows/Work_Order_After_Save_Record_Triggered_Populate_Contact_on_WO_and_SA-history.md) |  Record After Save | This flow populates the contact field on a work order and its related service appointment on creation. It takes an operational contact of the related operational account. |




## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [Commercial_Account_Record_Page.](../pages/Commercial_Account_Record_Page..md) |  Record Page |
| [Contact_Record_Page.](../pages/Contact_Record_Page..md) |  Record Page |
| [Financial_Account_Record_Page.](../pages/Financial_Account_Record_Page..md) |  Record Page |
| [Group_Account_Record_Page.](../pages/Group_Account_Record_Page..md) |  Record Page |
| [Operational_Account_Record_Page.](../pages/Operational_Account_Record_Page..md) |  Record Page |
| [Other_Record_Page.](../pages/Other_Record_Page..md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
