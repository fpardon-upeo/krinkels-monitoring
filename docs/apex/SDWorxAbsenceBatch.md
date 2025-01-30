# SDWorxAbsenceBatch Class

Created by Frederik on 11/15/2024. 
Description: 
Change Log: 
Dependencies:

**Implements**

Database.Batchable&lt;sObject&gt;, 
Schedulable

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
* Created by Frederik on 11/15/2024.
* Description:
* Change Log:
* Dependencies:
*/

public class SDWorxAbsenceBatch implements Database.Batchable<sObject>, Schedulable {

    public void execute(SchedulableContext sc) {
        Database.executeBatch(this);
    }

    public Database.QueryLocator start(Database.BatchableContext bc) {
        // Query for SD_Import__c records that need to be processed
        // You might want to add additional filtering criteria
        return Database.getQueryLocator([
                SELECT Id, ArbeidsContractWerknemer__c, KalenderdagDat__c,
                        AfwezigheidDagdeelKode__c, AfwezigheidPresturen__c,
                        PersoonId__c, AfwezigheidscodelabelCode__c
                FROM SD_Import__c
        ]);
    }

    public void execute(Database.BatchableContext bc, List<SD_Import__c> scope) {
        try {
            // Process the records
            SDWorxToResourceAbsenceService.createAbsenceRecords(scope);

            // Mark records as processed
            delete scope;

        } catch(Exception e) {
            System.debug('Error processing batch: ' + e.getMessage());
        }
    }

    public void finish(Database.BatchableContext bc) {
        // Any post-processing logic can go here
        System.debug('Batch job completed');
    }

    // Method to schedule the batch job
    public static String scheduleJob(String jobName, String cronExp) {
        return System.schedule(jobName, cronExp, new SDWorxAbsenceBatch());
    }
}
```

## Methods
### `execute(sc)`

#### Signature
```apex
public void execute(SchedulableContext sc)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| sc | SchedulableContext |  |

#### Return Type
**void**

---

### `start(bc)`

#### Signature
```apex
public Database.QueryLocator start(Database.BatchableContext bc)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| bc | Database.BatchableContext |  |

#### Return Type
**Database.QueryLocator**

---

### `execute(bc, scope)`

#### Signature
```apex
public void execute(Database.BatchableContext bc, List<SD_Import__c> scope)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| bc | Database.BatchableContext |  |
| scope | List&lt;SD_Import__c&gt; |  |

#### Return Type
**void**

---

### `finish(bc)`

#### Signature
```apex
public void finish(Database.BatchableContext bc)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| bc | Database.BatchableContext |  |

#### Return Type
**void**

---

### `scheduleJob(jobName, cronExp)`

#### Signature
```apex
public static String scheduleJob(String jobName, String cronExp)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| jobName | String |  |
| cronExp | String |  |

#### Return Type
**String**