## Mileage_Entry__c

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| Allowance_Type__c | Allowance Type | Picklist | <!-- --> |
| Calculated_Mileage__c | Calculated Mileage | Number | <!-- --> |
| Codes_ATAK_Limbus__c | Codes ATAK/Limbus | Picklist | <!-- --> |
| Ending_Location_Type__c | Ending Location Type | Picklist | <!-- --> |
| Ending_Mileage__c | Ending Mileage | Number | <!-- --> |
| Service_Resource__c | Service Resource | Lookup | <!-- --> |
| Soccode__c | Soccode | Text | <!-- --> |
| Starting_Location_Type__c | Starting Location Type | Picklist | <!-- --> |
| Starting_Mileage__c | Starting Mileage | Number | <!-- --> |
| Time_Sheet__c | Time Sheet | MasterDetail | <!-- --> |
| Timesheet_Date__c | Timesheet Date | Date | <!-- --> |
| Type__c | Type | Picklist | <!-- --> |
| Work_Order__c | Work Order | Lookup | <!-- --> |

## Validation Rules

| Rule      | Active | Description | Formula |
| :-------- | :---- | :---------- | :------ |
| End_Mileage_cannot_be_lower_than_start | Yes |  | `Starting_Mileage__c > Ending_Mileage__c` |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Work_Order_Mobile_Flow_Screen_Flow_Log_Mileage](../flows/Work_Order_Mobile_Flow_Screen_Flow_Log_Mileage.md) [🕒](../flows/Work_Order_Mobile_Flow_Screen_Flow_Log_Mileage-history.md) |  Field Service Mobile | <!-- --> |
| Mileage_Entry__c | [Mileage_Entry_After_Save_Record_Triggered](../flows/Mileage_Entry_After_Save_Record_Triggered.md) |  Record Before Save | <!-- --> |
| Mileage_Entry__c | [Mileage_Entry_After_Save_Record_Triggered_Set_Work_As_Travel_Time_Work_Order](../flows/Mileage_Entry_After_Save_Record_Triggered_Set_Work_As_Travel_Time_Work_Order.md) [🕒](../flows/Mileage_Entry_After_Save_Record_Triggered_Set_Work_As_Travel_Time_Work_Order-history.md) |  Record After Save | <!-- --> |
| Mileage_Entry__c | [Mileage_Entry_Before_Save](../flows/Mileage_Entry_Before_Save.md) [🕒](../flows/Mileage_Entry_Before_Save-history.md) |  Record Before Save | This flow is to update and automatically fill in specific fields |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
