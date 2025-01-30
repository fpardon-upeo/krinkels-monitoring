# WorkOrderScheduler Class

Created by Frederik on 11/5/2024. 
Description: 
Change Log: 
Dependencies:

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
* Created by Frederik on 11/5/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class WorkOrderScheduler {

    public static void scheduleWorkOrdersFromMaintenancePlan(String maintenancePlanId) {

        MaintenancePlan mp = [SELECT Id, AccountId, Account.Name, GenerationTimeframe, ServiceContractId, ServiceContract.Priority__c, MaintenanceWindowStartDays FROM MaintenancePlan WHERE Id = :maintenancePlanId];
        List<MaintenanceAsset> maintenanceAssets = [SELECT Id, AssetId, WorkTypeId, Asset.LMRA__c, Asset.AccountId, Asset.Name, Asset.Street, Asset.City, Asset.PostalCode, Asset.Country, NextSuggestedMaintenanceDate, LastSuggestedMaintenanceDate__c, Default_Duration_in_Minutes__c, MaintenancePlanId, (SELECT Id, NextSuggestedMaintenanceDate, RecurrencePattern FROM MaintenanceWorkRules )  FROM MaintenanceAsset WHERE MaintenancePlanId = :maintenancePlanId];
        List<WorkOrder> workOrders = new List<WorkOrder>();

        for(MaintenanceAsset mA : maintenanceAssets){
            DateTime maFirstDate = mA.NextSuggestedMaintenanceDate;
            DateTime maLastDate = mA.LastSuggestedMaintenanceDate__c;
            MaintenanceWorkRule mwr = mA.MaintenanceWorkRules[0];
            String recurrencePattern = mwr.RecurrencePattern;

            RRuleAdjuster adjuster = new RRuleAdjuster(
                    recurrencePattern,
                    maFirstDate  // Use timezone-adjusted time
            );

            System.debug('Recurrence pattern: ' + recurrencePattern);
            System.debug('First date: ' + maFirstDate);
            System.debug('Adjusted first date: ' + adjuster);
            System.debug('Last date: ' + maLastDate);

            //Repurposed the RRuleAdjuster class to calculate the next maintenance date,
            //feeding it the same date as the start date because there is no recalculation of the next maintenance date.
            //We just need the resulting dates
            RRuleAdjuster.RRuleResult result = adjuster.calculateAdjustment(
                    maFirstDate,
                    maFirstDate
            );

            System.debug('Result: ' + result);

            //Get the number of maintenance work orders that need to be created
            Integer instanceCount = adjuster.calculateInstanceCount(mA.NextSuggestedMaintenanceDate, mA.LastSuggestedMaintenanceDate__c, recurrencePattern);
            System.debug('Instance count: ' + instanceCount);

            //Create the work orders, the RRuleResult returns a list of dateTimes that are the next maintenance dates
            //We need to loop that as many times as the instance count
            for(Integer i = 0; i < instanceCount; i++){
                WorkOrder wo = new WorkOrder();
                wo.AccountId = mA.Asset.AccountId;
                wo.AssetId = mA.AssetId;
                wo.Subject = 'Maintenance for ' + mA.Asset.Name + ' on ' + result.newDates[i];
                wo.Description = 'Maintenance for ' + mA.Asset.Name;
                wo.Duration = mA.Default_Duration_in_Minutes__c;
                wo.DurationType = 'Minutes';
                wo.MaintenancePlanId = mp.Id;
                wo.SuggestedMaintenanceDate = Date.valueOf(result.newDates[i]);
                wo.WorkTypeId = mA.WorkTypeId;
                wo.ServiceContractId = mp.ServiceContractId;
                wo.Status = 'Unscheduled';
                wo.Street = mA.Asset.Street;
                wo.City = mA.Asset.City;
                wo.PostalCode = mA.Asset.PostalCode;
                wo.Country = mA.Asset.Country;
                wo.LMRA__c = mA.Asset.LMRA__c;
                wo.Priority = mp.ServiceContract.Priority__c;
                workOrders.add(wo);
            }
        }

        insert workOrders;

    }


}
```

## Methods
### `scheduleWorkOrdersFromMaintenancePlan(maintenancePlanId)`

#### Signature
```apex
public static void scheduleWorkOrdersFromMaintenancePlan(String maintenancePlanId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| maintenancePlanId | String |  |

#### Return Type
**void**