# SDWorxAbsenceBatchScheduler Class

Created by Frederik on 11/26/2024. 
Description: 
Change Log: 
Dependencies:

**Implements**

Schedulable

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
* Created by Frederik on 11/26/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class SDWorxAbsenceBatchScheduler implements Schedulable {


    public void execute(SchedulableContext sc) {

        String absenceBatch = Database.executeBatch(new SDWorxAbsenceBatch(), 200);
        System.debug('Batch Id: ' + absenceBatch);

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