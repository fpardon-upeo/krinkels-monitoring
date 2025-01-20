## ServiceTerritoryMember

<!-- Object description -->

## Fields

| Name      | Label | Type | Description |
| :-------- | :---- | :--: | :---------- | 
| FSL__Internal_SLR_HomeAddress_Geolocation__c | Internal SLR HomeAddress Geolocation | Location | <!-- --> |

## Validation Rules

| Rule      | Active | Description | Formula |
| :-------- | :---- | :---------- | :------ |
| FSL__Limit_STM_End_Date | Yes |  | `AND( NOT(ISBLANK(EffectiveEndDate)),
                                EffectiveEndDate > ADDMONTHS(NOW(),36) )` |
| FSL__Secondary_STM | Yes |  | `(ISPICKVAL(TerritoryType, "Secondary") && 
    ( ( ( ISCHANGED(Longitude) || ISCHANGED(Latitude) ) && ( (NOT(ISBLANK(Longitude))) || (NOT(ISBLANK(Latitude))) )) || 
      (NOT(ISBLANK(FSL__Internal_SLR_HomeAddress_Geolocation__Latitude__s))) || 
      (NOT(ISBLANK(FSL__Internal_SLR_HomeAddress_Geolocation__Longitude__s))) || 
      (NOT(ISBLANK( Street ))) || 
      (NOT(ISBLANK( City ))) ||
      (NOT(ISBLANK( Country ))) ||
      (NOT(ISBLANK( State ))) || 
      (NOT(ISBLANK(  PostalCode  )))
    )
 )` |


## Related Flows

| Object | Name      | Type | Description |
| :----  | :-------- | :--: | :---------- | 
| 💻 | [Service_Crew_and_Van_Creator](../flows/Service_Crew_and_Van_Creator.md) [🕒](../flows/Service_Crew_and_Van_Creator-history.md) |  Screen Flow | <!-- --> |
| Operator_Created_Event__e | [Operator_Created_Event_e_Create_Service_Resource](../flows/Operator_Created_Event_e_Create_Service_Resource.md) [🕒](../flows/Operator_Created_Event_e_Create_Service_Resource-history.md) |  Platform Event | <!-- --> |


_Documentation generated with [sfdx-hardis](https://sfdx-hardis.cloudity.com)_
