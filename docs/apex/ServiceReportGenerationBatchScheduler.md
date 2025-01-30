# ServiceReportGenerationBatchScheduler Class

Created by Frederik on 1/7/2025. 
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
* Created by Frederik on 1/7/2025.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class ServiceReportGenerationBatchScheduler  implements Schedulable {


    public void execute(SchedulableContext sc) {

        String serviceReportBatch = Database.executeBatch(new ServiceReportGenerationBatch(), 1);
        System.debug('Batch Id: ' + serviceReportBatch);

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