# TimeSheetEntryController Class

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
public with sharing class TimeSheetEntryController {
    @AuraEnabled(cacheable=true)
    public static List<TimeSheetEntry> getTimeSheetEntries(String timeSheetId) {
        return [SELECT Id, WorkOrderId, WorkOrder.WorkOrderNumber, StartTime, EndTime, Starting_Allowance_Winter_Service__c, Urgent_Intervention__c, Type
        FROM TimeSheetEntry
        WHERE TimeSheetId = :timeSheetId];
    }

    @AuraEnabled(cacheable=true)
    public static List<String> getPicklistValues(String objectApiName, String fieldApiName) {
        List<String> picklistValues = new List<String>();
        Schema.DescribeFieldResult fieldResult = ((SObject) Type.forName(objectApiName).newInstance()).getSObjectType().getDescribe().fields.getMap().get(fieldApiName).getDescribe();
        for (Schema.PicklistEntry entry : fieldResult.getPicklistValues()) {
            picklistValues.add(entry.getValue());
        }
        return picklistValues;
    }
}
```

## Methods
### `getTimeSheetEntries(timeSheetId)`

`AURAENABLED`

#### Signature
```apex
public static List<TimeSheetEntry> getTimeSheetEntries(String timeSheetId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| timeSheetId | String |  |

#### Return Type
**List&lt;TimeSheetEntry&gt;**

---

### `getPicklistValues(objectApiName, fieldApiName)`

`AURAENABLED`

#### Signature
```apex
public static List<String> getPicklistValues(String objectApiName, String fieldApiName)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| objectApiName | String |  |
| fieldApiName | String |  |

#### Return Type
**List&lt;String&gt;**