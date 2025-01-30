# ValidationService Class

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
public class ValidationService {

    public class ValidationException extends Exception {}

    public static void validateTimesheet(TimeSheet ts) {
        if(ts.ServiceResourceId == null)
            throw new ValidationException('ServiceResource required');

        if(hasOverlappingEntries(ts))
            throw new ValidationException('Overlapping entries found');

        List<TimeSheetEntry> tseList = [
                SELECT Id, WorkOrderId, StartTime, EndTime,
                        Timesheet.ServiceResource.RelatedRecord.ATAK_Code__c,
                        WorkOrder.Asset.ATAK_Project__r.SubProject_ATAK__c
                FROM TimeSheetEntry
                WHERE TimesheetId = :ts.Id
        ];
        for(TimeSheetEntry entry : tseList){
            if(entry.WorkOrderId == null)
                throw new ValidationException('TSE missing WorkOrderId');
            if(entry.Timesheet.ServiceResource.RelatedRecord.ATAK_Code__c == null)
                throw new ValidationException('TSE missing ATAK Code');
            if(entry.WorkOrder.Asset.ATAK_Project__r.SubProject_ATAK__c == null)
                throw new ValidationException('TSE missing ATAK Project');
            if(entry.StartTime == null || entry.EndTime == null)
                throw new ValidationException('TSE missing Start/End Time');
        }

        List<Mileage_Entry__c> mileageList = [
                SELECT Id, Work_Order__c, Service_Resource__c,
                        Service_Resource__r.RelatedRecord.ATAK_Code__c,
                        Work_Order__r.Asset.ATAK_Project__r.SubProject_ATAK__c,
                        Calculated_Mileage__c, Codes_ATAK_Limbus__c
                FROM Mileage_Entry__c
                WHERE Time_Sheet__c = :ts.Id
        ];
        for(Mileage_Entry__c me : mileageList){
            System.debug('🔍 Checking Mileage Entry: ' + me.Id);
            if(me.Work_Order__c == null)
                throw new ValidationException('Mileage Entry missing WorkOrderId');
            if(me.Service_Resource__c == null)
                throw new ValidationException('Mileage Entry missing Service Resource');
            if(me.Service_Resource__r.RelatedRecord.ATAK_Code__c == null)
                throw new ValidationException('Mileage Entry missing ATAK Code');
            if(me.Work_Order__r.Asset.ATAK_Project__r.SubProject_ATAK__c == null)
                throw new ValidationException('Mileage Entry missing ATAK Project');
            if(me.Calculated_Mileage__c == null)
                throw new ValidationException('Mileage Entry missing Calculated Mileage');
            if(me.Codes_ATAK_Limbus__c == null)
                throw new ValidationException('Mileage Entry missing ATAK Limbus Code');
        }
    }

    private static Boolean hasOverlappingEntries(TimeSheet ts) {
        // Implement logic if needed
        return false;
    }
}
```

## Methods
### `validateTimesheet(ts)`

#### Signature
```apex
public static void validateTimesheet(TimeSheet ts)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| ts | [TimeSheet](../objects/TimeSheet.md) |  |

#### Return Type
**void**

---

### `hasOverlappingEntries(ts)`

#### Signature
```apex
private static Boolean hasOverlappingEntries(TimeSheet ts)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| ts | [TimeSheet](../objects/TimeSheet.md) |  |

#### Return Type
**Boolean**

## Classes
### ValidationException Class