# MileageEntryProjectLinkService Class

Created by fpardon on 28/11/2024.

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * Created by fpardon on 28/11/2024.
 */

public without sharing class MileageEntryProjectLinkService {

    /**
     * @description Method to handle the mileage entries
     * @param mileageEntries List of Mileage_Entry__c records to process
     * @return void
     */
    public static void handler(List<Mileage_Entry__c> mileageEntries) {
        System.debug('🔍 Handler started with ' + mileageEntries.size() + ' entries');

        // Collect TimeSheet IDs and Mileage Entry IDs
        Set<Id> tsIds = new Set<Id>();
        Set<Id> mileageIds = new Set<Id>();
        for(Mileage_Entry__c entry : mileageEntries) {
            tsIds.add(entry.Time_Sheet__c);
            mileageIds.add(entry.Id);
        }

        // First, query the trigger entries with their parent information
        Map<Id, Mileage_Entry__c> triggerEntriesWithParents = new Map<Id, Mileage_Entry__c>([
                SELECT Id, Time_Sheet__c, Work_Order__c,
                        Work_Order__r.WorkType.Name
                FROM Mileage_Entry__c
                WHERE Id IN :mileageIds
        ]);
        System.debug('📊 Found ' + triggerEntriesWithParents.size() + ' trigger entries with parent info');

        // Query all other relevant Mileage Entries for the affected TimeSheets
        List<Mileage_Entry__c> otherMileageEntries = [
                SELECT Id, Time_Sheet__c, Work_Order__c,
                        Work_Order__r.WorkType.Name,
                        CreatedDate  // Using CreatedDate for ordering since Mileage_Entry__c might not have StartTime
                FROM Mileage_Entry__c
                WHERE Time_Sheet__c IN :tsIds
                AND Id NOT IN :mileageIds
                ORDER BY CreatedDate DESC
        ];
        System.debug('📊 Found ' + otherMileageEntries.size() + ' other Mileage Entries');

        // Group other entries by TimeSheet
        Map<Id, List<Mileage_Entry__c>> entriesByTimeSheet = new Map<Id, List<Mileage_Entry__c>>();
        for(Mileage_Entry__c entry : otherMileageEntries) {
            if(!entriesByTimeSheet.containsKey(entry.Time_Sheet__c)) {
                entriesByTimeSheet.put(entry.Time_Sheet__c, new List<Mileage_Entry__c>());
            }
            entriesByTimeSheet.get(entry.Time_Sheet__c).add(entry);
        }

        // Process entries that need updating
        List<Mileage_Entry__c> entriesToUpdate = new List<Mileage_Entry__c>();

        for(Mileage_Entry__c triggerEntry : triggerEntriesWithParents.values()) {
            System.debug('⚡ Processing trigger entry: ' + triggerEntry.Id +
                    ' | Current WorkOrder: ' + triggerEntry.Work_Order__c +
                    ' | WorkType: ' + triggerEntry.Work_Order__r?.WorkType?.Name);

            if(entriesByTimeSheet.containsKey(triggerEntry.Time_Sheet__c)) {
                List<Mileage_Entry__c> dayEntries = entriesByTimeSheet.get(triggerEntry.Time_Sheet__c);
                System.debug('📋 Found ' + dayEntries.size() + ' other entries for TimeSheet ' + triggerEntry.Time_Sheet__c);

                if(triggerEntry.Work_Order__r?.WorkType?.Name == 'Waste Management') {
                    System.debug('♻️ Found Waste Management entry');
                    Id lastWorkOrderId = findLastNonWasteManagementWorkOrder(dayEntries);
                    System.debug('🔍 Last non-Waste Management WorkOrderId found: ' + lastWorkOrderId);

                    if(lastWorkOrderId != null && lastWorkOrderId != triggerEntry.Work_Order__c) {
                        System.debug('✏️ Updating WorkOrderId from ' + triggerEntry.Work_Order__c + ' to ' + lastWorkOrderId);
                        triggerEntry.Work_Order__c = lastWorkOrderId;
                        entriesToUpdate.add(triggerEntry);
                    }
                } else if(triggerEntry.Work_Order__r?.WorkType?.Name == 'Internal Depot' ||
                        triggerEntry.Work_Order__r?.WorkType?.Name == 'Store Visit') {
                    System.debug('🏢 Found Internal Depot or Store Visit entry - no update needed');
                    continue;
                }
            }
        }

        System.debug('📝 Total entries to update: ' + entriesToUpdate.size());

        if(!entriesToUpdate.isEmpty()) {
            try {
                update entriesToUpdate;
                System.debug('✅ Successfully updated ' + entriesToUpdate.size() + ' entries');
            } catch(Exception e) {
                System.debug(LoggingLevel.ERROR, '❌ Error updating Mileage Entries: ' + e.getMessage());
                System.debug(LoggingLevel.ERROR, '❌ Stack trace: ' + e.getStackTraceString());
                throw new MileageEntryProjectLinkException('Failed to update Mileage Entries: ' + e.getMessage());
            }
        }
    }

    private static Id findLastNonWasteManagementWorkOrder(List<Mileage_Entry__c> entries) {
        System.debug('🔍 Searching through ' + entries.size() + ' entries for last non-Waste Management WorkOrder');

        for(Mileage_Entry__c entry : entries) {
            System.debug('👉 Checking entry: ' + entry.Id +
                    ' | WorkType: ' + entry.Work_Order__r?.WorkType?.Name +
                    ' | WorkOrderId: ' + entry.Work_Order__c);

            if(entry.Work_Order__r?.WorkType?.Name != 'Waste Management' &&
                    entry.Work_Order__r?.WorkType?.Name != null &&
                    entry.Work_Order__c != null) {
                System.debug('✅ Found valid non-Waste Management WorkOrderId: ' + entry.Work_Order__c);
                return entry.Work_Order__c;
            }
        }

        System.debug('⚠️ No valid non-Waste Management WorkOrderId found');
        return null;
    }

    public class MileageEntryProjectLinkException extends Exception {}
}
```

## Methods
### `handler(mileageEntries)`

Method to handle the mileage entries

#### Signature
```apex
public static void handler(List<Mileage_Entry__c> mileageEntries)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| mileageEntries | List&lt;Mileage_Entry__c&gt; | List of Mileage_Entry__c records to process |

#### Return Type
**void**

void

---

### `findLastNonWasteManagementWorkOrder(entries)`

#### Signature
```apex
private static Id findLastNonWasteManagementWorkOrder(List<Mileage_Entry__c> entries)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| entries | List&lt;Mileage_Entry__c&gt; |  |

#### Return Type
**Id**

## Classes
### MileageEntryProjectLinkException Class