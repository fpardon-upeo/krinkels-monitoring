## Contract_Line_Financial_Account__c

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Contract_Line_Item__c | Contract Line Item | MasterDetail | <!-- --> |
| Financial_Customer__c | Financial Customer | MasterDetail | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| ContractLineItem | [ContractLineItem_After_Save_Add_Default_Financial_Accounts](../flows/ContractLineItem_After_Save_Add_Default_Financial_Accounts.md) |  Record After Save | <!-- --> |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [MaintenancePlanService](../apex/MaintenancePlanService.md) | Lightning Controller |
| [ServiceBuilderController](../apex/ServiceBuilderController.md) | Lightning Controller |
| [ServiceBuilderControllerTest](../apex/ServiceBuilderControllerTest.md) | Test |




_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
