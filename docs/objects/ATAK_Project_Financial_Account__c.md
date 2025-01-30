## ATAK_Project_Financial_Account__c

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Account__c | Account | MasterDetail | <!-- --> |
| ATAK_Project__c | ATAK Project | MasterDetail | <!-- --> |
| ATAK_Project_Code__c | ATAK Project Code | Text | <!-- --> |
| External_Id__c | External Id | Text | <!-- --> |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| ContractLineItem | [ContractLineItem_After_Save_Add_Default_Financial_Accounts](../flows/ContractLineItem_After_Save_Add_Default_Financial_Accounts.md) |  Record After Save | <!-- --> |


## Related Apex Classes

| Apex Class | Type |
| :----      | :--: | 
| [ATAKProjectService](../apex/ATAKProjectService.md) | Class |


## Related Lightning Pages

| Lightning Page | Type |
| :----      | :--: | 
| [ATAK_Project_Financial_Account_Record_Page.](../pages/ATAK_Project_Financial_Account_Record_Page..md) |  Record Page |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
