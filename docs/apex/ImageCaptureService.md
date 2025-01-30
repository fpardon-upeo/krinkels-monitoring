# ImageCaptureService Class

Created by Frederik on 11/28/2024. 
Description: 
Change Log: 
Dependencies:

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
* Created by Frederik on 11/28/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class ImageCaptureService {

    @AuraEnabled
    public static String getWorkOrderIdFromWorkStepId(String workStepId) {
        String workOrderId = '';
        if (workStepId != null) {
            List<WorkStep> workSteps = [SELECT Id, WorkOrderId FROM WorkStep];
            if (workSteps.size() > 0) {
                workOrderId = workSteps[0].WorkOrderId;
            }
        }
        return workOrderId;
    }

}
```

## Methods
### `getWorkOrderIdFromWorkStepId(workStepId)`

`AURAENABLED`

#### Signature
```apex
public static String getWorkOrderIdFromWorkStepId(String workStepId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| workStepId | String |  |

#### Return Type
**String**