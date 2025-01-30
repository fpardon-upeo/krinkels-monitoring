## ContractLineItem

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Additional_Scheduling_Information__c | Additional Scheduling Information | Text | <!-- --> |
| Calculated_Duration__c | Calculated Duration | Number | Calculated Duration in minutes |
| Cost_Center_Code__c | Cost Center Code | Text | <!-- --> |
| Desired_Visual_Quality__c | Desired Visual Quality | Picklist | <!-- --> |
| Estimated_Duration__c | Estimated Duration | Number | Estimated Duration in minutes |
| Geolocation__c | Geolocation | Location | <!-- --> |
| LMRA__c | LMRA | Picklist | <!-- --> |
| Location__c | Location | Address | <!-- --> |
| Notify_Customer_When_En_Route__c | Notify Customer When En Route | Checkbox | <!-- --> |
| Parent_Customer__c | Parent Customer | Lookup | <!-- --> |
| Planning_Type__c | Planning Type | Picklist | <!-- --> |
| Project_Code__c | Project Code | Text | <!-- --> |
| Recurrence_Pattern__c | Recurrence Pattern | Text | <!-- --> |
| Scheduling_Interval__c | Scheduling Interval | Number | <!-- --> |
| Signature_Required__c | Signature Required? | Checkbox | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| ContractLineItem | [ContractLineItem_After_Save_Add_Default_Field_Values](../flows/ContractLineItem_After_Save_Add_Default_Field_Values.md) [🕒](../flows/ContractLineItem_After_Save_Add_Default_Field_Values-history.md) |  Record After Save | <!-- --> |
| ContractLineItem | [ContractLineItem_After_Save_Add_Default_Financial_Accounts](../flows/ContractLineItem_After_Save_Add_Default_Financial_Accounts.md) |  Record After Save | <!-- --> |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [ContractLineItemTriggerHandler](../apex/ContractLineItemTriggerHandler.md) | Trigger Handler |
| [ImportRecordsController](../apex/ImportRecordsController.md) | Lightning Controller |
| [MaintenancePlanService](../apex/MaintenancePlanService.md) | Lightning Controller |
| [MaintenancePlanServiceTest](../apex/MaintenancePlanServiceTest.md) | Test |
| [ReadyForValidation](../apex/ReadyForValidation.md) | Lightning Controller |
| [ReadyForValidationTest](../apex/ReadyForValidationTest.md) | Test |
| [ServiceBuilderController](../apex/ServiceBuilderController.md) | Lightning Controller |
| [ServiceBuilderControllerTest](../apex/ServiceBuilderControllerTest.md) | Test |
| [ServiceBuilderWrapper](../apex/ServiceBuilderWrapper.md) | Class |
| [ServiceContractHandler](../apex/ServiceContractHandler.md) | Class |
| [ServiceContractTriggerHandler](../apex/ServiceContractTriggerHandler.md) | Trigger Handler |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [Contract_Line_Item_Record_Page.](../pages/Contract_Line_Item_Record_Page..md) |  Record Page |
| [Service_Contract_Record_Page.](../pages/Service_Contract_Record_Page..md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
