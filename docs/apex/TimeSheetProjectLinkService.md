# TimeSheetProjectLinkService Class

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
public without sharing class TimeSheetProjectLinkService {

    public static void handler(List<TimeSheetEntry> tsEntries) {
        System.debug('🔍 Handler started with ' + tsEntries.size() + ' entries');

        // Collect TimeSheet IDs and TimeSheetEntry IDs
        Set<Id> tsIds = new Set<Id>();
        Set<Id> tseIds = new Set<Id>();
        for(TimeSheetEntry tsEntry : tsEntries) {
            tsIds.add(tsEntry.TimeSheetId);
            tseIds.add(tsEntry.Id);
        }

        // First, query the trigger entries with their parent information
        Map<Id, TimeSheetEntry> triggerEntriesWithParents = new Map<Id, TimeSheetEntry>([
                SELECT Id, TimeSheetId, WorkOrderId, StartTime,
                        WorkOrder.WorkType.Name,
                        WorkOrder.ParentWorkOrder.Id,
                        WorkOrder.ParentWorkOrder.WorkOrderNumber
                FROM TimeSheetEntry
                WHERE Id IN :tseIds
        ]);
        System.debug('📊 Found ' + triggerEntriesWithParents.size() + ' trigger entries with parent info');
        System.debug('📊 Found ' + triggerEntriesWithParents.size() + ' trigger entries with parent info' + triggerEntriesWithParents);

        // Query all other relevant TimeSheetEntries for the affected TimeSheets
        List<TimeSheetEntry> otherTimeSheetEntries = [
                SELECT Id, TimeSheetId, WorkOrderId, StartTime,
                        WorkOrder.WorkType.Name
                FROM TimeSheetEntry
                WHERE TimeSheetId IN :tsIds
                AND Id NOT IN :tseIds
                ORDER BY StartTime DESC
        ];
        System.debug('📊 Found ' + otherTimeSheetEntries.size() + ' other TimeSheetEntries');

        // Group other entries by TimeSheet
        Map<Id, List<TimeSheetEntry>> entriesByTimeSheet = new Map<Id, List<TimeSheetEntry>>();
        for(TimeSheetEntry tse : otherTimeSheetEntries) {
            if(!entriesByTimeSheet.containsKey(tse.TimeSheetId)) {
                entriesByTimeSheet.put(tse.TimeSheetId, new List<TimeSheetEntry>());
            }
            entriesByTimeSheet.get(tse.TimeSheetId).add(tse);
            System.debug('📎 Adding entry ' + tse.Id + ' to TimeSheet ' + tse.TimeSheetId +
                    ' | WorkType: ' + tse.WorkOrder?.WorkType?.Name +
                    ' | StartTime: ' + tse.StartTime);
        }

        // Process entries that need updating
        List<TimeSheetEntry> entriesToUpdate = new List<TimeSheetEntry>();

        for(TimeSheetEntry triggerEntry : triggerEntriesWithParents.values()) {
            System.debug('⚡ Processing trigger entry: ' + triggerEntry.Id +
                    ' | Current WorkOrder: ' + triggerEntry.WorkOrderId +
                    ' | WorkType: ' + triggerEntry.WorkOrder?.WorkType?.Name +
                    ' | TimeSheetId: ' + triggerEntry.TimeSheetId +
                    ' | ParentWorkOrderId: ' + triggerEntry.WorkOrder?.ParentWorkOrder?.Id);

            System.debug('triggerEntry: ' + triggerEntry);

            if(entriesByTimeSheet.containsKey(triggerEntry.TimeSheetId) &&
                    (triggerEntry.WorkOrder == null ||
                            triggerEntry.WorkOrder.ParentWorkOrder == null ||
                            String.isEmpty(triggerEntry.WorkOrder.ParentWorkOrder.Id))){
                System.debug('📎 Found other entries for TimeSheet that has an empty parent ');
                List<TimeSheetEntry> dayEntries = entriesByTimeSheet.get(triggerEntry.TimeSheetId);
                System.debug('📋 Found ' + dayEntries.size() + ' other entries for TimeSheet ' + triggerEntry.TimeSheetId);

                if(triggerEntry.WorkOrder?.WorkType?.Name == 'Waste Management') {
                    System.debug('♻️ Found Waste Management entry');
                    Id lastWorkOrderId = findLastNonWasteManagementWorkOrder(dayEntries);
                    System.debug('🔍 Last non-Waste Management WorkOrderId found: ' + lastWorkOrderId);

                    if(lastWorkOrderId != null && lastWorkOrderId != triggerEntry.WorkOrderId) {
                        System.debug('✏️ Updating WorkOrderId from ' + triggerEntry.WorkOrderId + ' to ' + lastWorkOrderId);
                        triggerEntry.WorkOrderId = lastWorkOrderId;
                        triggerEntry.Subject = 'Waste Management linked to Work Order';
                        entriesToUpdate.add(triggerEntry);
                    } else {
                        System.debug('⚠️ No update needed: lastWorkOrderId is null or same as current');
                    }
                } else if(triggerEntry.WorkOrder?.WorkType?.Name == 'Internal Depot' ||
                        triggerEntry.WorkOrder?.WorkType?.Name == 'Store Visit') {
                    System.debug('🏢 Found Internal Depot or Store Visit entry - no update needed');
                    continue;
                }
            } else {
                System.debug('⚠️ No other entries found for TimeSheet ' + triggerEntry.TimeSheetId);
            }
        }

        System.debug('📝 Total entries to update: ' + entriesToUpdate.size());

        if(!entriesToUpdate.isEmpty()) {
            try {
                update entriesToUpdate;
                System.debug('✅ Successfully updated ' + entriesToUpdate.size() + ' entries');
            } catch(Exception e) {
                System.debug(LoggingLevel.ERROR, '❌ Error updating TimeSheetEntries: ' + e.getMessage());
                System.debug(LoggingLevel.ERROR, '❌ Stack trace: ' + e.getStackTraceString());
                throw new TimeSheetProjectLinkException('Failed to update TimeSheetEntries: ' + e.getMessage());
            }
        } else {
            System.debug('ℹ️ No entries needed updating');
        }
    }

    private static Id findLastNonWasteManagementWorkOrder(List<TimeSheetEntry> entries) {
        System.debug('🔍 Searching through ' + entries.size() + ' entries for last non-Waste Management WorkOrder');

        for(TimeSheetEntry entry : entries) {
            System.debug('👉 Checking entry: ' + entry.Id +
                    ' | WorkType: ' + entry.WorkOrder?.WorkType?.Name +
                    ' | WorkOrderId: ' + entry.WorkOrderId);

            if(entry.WorkOrder?.WorkType?.Name != 'Waste Management' &&
                    entry.WorkOrder?.WorkType?.Name != null &&
                    entry.WorkOrderId != null) {
                System.debug('✅ Found valid non-Waste Management WorkOrderId: ' + entry.WorkOrderId);
                return entry.WorkOrderId;
            }
        }

        System.debug('⚠️ No valid non-Waste Management WorkOrderId found');
        return null;
    }

    public class TimeSheetProjectLinkException extends Exception {}
}
```

## Methods
### `handler(tsEntries)`

#### Signature
```apex
public static void handler(List<TimeSheetEntry> tsEntries)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| tsEntries | List&lt;TimeSheetEntry&gt; |  |

#### Return Type
**void**

---

### `findLastNonWasteManagementWorkOrder(entries)`

#### Signature
```apex
private static Id findLastNonWasteManagementWorkOrder(List<TimeSheetEntry> entries)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| entries | List&lt;TimeSheetEntry&gt; |  |

#### Return Type
**Id**

## Classes
### TimeSheetProjectLinkException Class