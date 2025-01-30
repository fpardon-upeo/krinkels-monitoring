# CreateInternalWorkOrderController Class

Created by Frederik on 12/11/2024. 
Description: 
Change Log: 
Dependencies:

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
* Created by Frederik on 12/11/2024.
* Description:
* Change Log:
* Dependencies:
*/

public with sharing class CreateInternalWorkOrderController {
    @AuraEnabled(cacheable=true)
    public static ServiceResource getServiceResourceDetails(Id resourceId) {
        return [
                SELECT Id, RelatedRecord.Department
                FROM ServiceResource
                WHERE Id = :resourceId
                LIMIT 1
        ];
    }
}
```

## Methods
### `getServiceResourceDetails(resourceId)`

`AURAENABLED`

#### Signature
```apex
public static ServiceResource getServiceResourceDetails(Id resourceId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| resourceId | Id |  |

#### Return Type
**[ServiceResource](../objects/ServiceResource.md)**