## ProductItem

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| External_Id__c | External Id | Text | <!-- --> |
| Is_Temporary__c | Is Temporary | Checkbox | <!-- --> |
| Van_Crew__c | Van Crew | Lookup | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Service_Crew_and_Van_Creator](../flows/Service_Crew_and_Van_Creator.md) [🕒](../flows/Service_Crew_and_Van_Creator-history.md) |  Screen Flow | <!-- --> |
| ProductConsumed | [Product_Consumed_After_Save_Record_Triggered_Reset_Quantity_on_Hand](../flows/Product_Consumed_After_Save_Record_Triggered_Reset_Quantity_on_Hand.md) [🕒](../flows/Product_Consumed_After_Save_Record_Triggered_Reset_Quantity_on_Hand-history.md) |  Record After Save | <!-- --> |
| ProductItem | [Material_Item_After_Save_Record_Triggered_Populate_Van_Crew_Field](../flows/Material_Item_After_Save_Record_Triggered_Populate_Van_Crew_Field.md) |  Record After Save | This flow populates the 'Van Crew' field on the Material Item object. This way, the van's materials is displayed at the van crew object level. |
| ProductItem | [Material_Item_Before_Save_Record_Triggered_Populate_Van_Crew_Field](../flows/Material_Item_Before_Save_Record_Triggered_Populate_Van_Crew_Field.md) [🕒](../flows/Material_Item_Before_Save_Record_Triggered_Populate_Van_Crew_Field-history.md) |  Record After Save | This flow populates the 'Van Crew' field on the Material Item object. This way, the van's materials is displayed at the van crew object level. |
| ServiceAppointment | [Service_Appointments_After_Save_Record_Triggered_Assign_Van_Inventory_to_Related](../flows/Service_Appointments_After_Save_Record_Triggered_Assign_Van_Inventory_to_Related.md) [🕒](../flows/Service_Appointments_After_Save_Record_Triggered_Assign_Van_Inventory_to_Related-history.md) |  Record After Save | This flow retrieves a van inventory based on the assigned resources of a service appointment. |
| WorkOrder | [Work_Order_After_Save_Record_Triggered_Assign_Products_Consumed](../flows/Work_Order_After_Save_Record_Triggered_Assign_Products_Consumed.md) |  Record After Save | <!-- --> |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [ATAKPerformanceServiceTest](../apex/ATAKPerformanceServiceTest.md) | Test |
| [ATAKVehicleService](../apex/ATAKVehicleService.md) | Class |
| [ATAKWorkLogServiceTest](../apex/ATAKWorkLogServiceTest.md) | Test |
| [MaterialPickupController](../apex/MaterialPickupController.md) | Lightning Controller |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [Product_Item_Record_Page.](../pages/Product_Item_Record_Page..md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
