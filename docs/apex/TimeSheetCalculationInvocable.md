# TimeSheetCalculationInvocable Class

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
public without sharing class TimeSheetCalculationInvocable {

    public class TimeSheetCalculationRequest {
        @InvocableVariable(required=true)
        public String recordId;

        @InvocableVariable(required=true)
        public String recordType;  // 'ResourceAbsence' or 'TimeSheetEntry'
    }

    @InvocableMethod(label='Calculate TimeSheet Values' description='Updates TimeSheet entries based on ResourceAbsences or recalculates a specific TimeSheetEntry')
    public static void calculateTimeSheetValues(List<TimeSheetCalculationRequest> requests) {
        for(TimeSheetCalculationRequest request : requests) {
            if(request.recordType == 'ResourceAbsence') {
                // Step 1: Get the triggering ResourceAbsence
                ResourceAbsence triggerRA = [SELECT Id, Start, End, ResourceId FROM ResourceAbsence
                WHERE Id = :request.recordId];

                // Step 2: Find TimeSheetEntries that overlap with this specific RA
                List<TimeSheetEntry> affectedEntries = [
                        SELECT Id, StartTime, EndTime, TimeSheet.ServiceResourceId, TimeSheet.Id
                        FROM TimeSheetEntry
                        WHERE TimeSheet.ServiceResourceId = :triggerRA.ResourceId
                        AND (
                                (StartTime < :triggerRA.Start AND EndTime > :triggerRA.End) OR  // TSE contains RA
                                (StartTime >= :triggerRA.Start AND StartTime < :triggerRA.End) OR  // TSE starts during RA
                                (EndTime > :triggerRA.Start AND EndTime <= :triggerRA.End)  // TSE ends during RA
                        )
                ];

                System.debug('Step 2 - Affected TimeSheetEntries: ' + affectedEntries);

                // Step 3: For each affected TSE, find overlapping RAs
                for(TimeSheetEntry tse : affectedEntries) {
                    // Find RAs that overlap with this specific TSE
                    List<ResourceAbsence> overlappingRAs = [
                            SELECT Id, Start, End, ResourceId
                            FROM ResourceAbsence
                            WHERE ResourceId = :triggerRA.ResourceId
                            AND (
                                    (Start < :tse.EndTime AND End > :tse.StartTime)  // RA overlaps TSE
                            )
                    ];

                    System.debug('Step 3 - For TSE ' + tse.StartTime + ' to ' + tse.EndTime);
                    System.debug('Overlapping RAs: ' + overlappingRAs);

                    // Process this TSE with its overlapping RAs
                    TimeSheetCalculationService.processTimeSheetEntryChanges(
                            new List<TimeSheetEntry>{tse}
                    );
                }
            } else if(request.recordType == 'TimeSheetEntry') {
                TimeSheetEntry tse = [SELECT Id, StartTime, EndTime, TimeSheet.ServiceResourceId, TimeSheet.Id
                FROM TimeSheetEntry WHERE Id = :request.recordId];
                TimeSheetCalculationService.processTimeSheetEntryChanges(new List<TimeSheetEntry>{tse});
            }
        }
    }
}
```

## Methods
### `calculateTimeSheetValues(requests)`

`INVOCABLEMETHOD`

#### Signature
```apex
public static void calculateTimeSheetValues(List<TimeSheetCalculationRequest> requests)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| requests | List&lt;TimeSheetCalculationRequest&gt; |  |

#### Return Type
**void**

## Classes
### TimeSheetCalculationRequest Class

#### Fields
##### `recordId`

`INVOCABLEVARIABLE`

###### Signature
```apex
public recordId
```

###### Type
String

---

##### `recordType`

`INVOCABLEVARIABLE`

###### Signature
```apex
public recordType
```

###### Type
String