# fsl_Console_AccountController Class

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
public with sharing class fsl_Console_AccountController {
    @AuraEnabled(cacheable=true)
    public static String getAccountId(Id serviceAppointmentId) {
        // Fetch the AccountId from the ServiceAppointment's parent record
        ServiceAppointment sa = [SELECT AccountId FROM ServiceAppointment WHERE Id = :serviceAppointmentId LIMIT 1];
        return sa.AccountId;
    }

    @AuraEnabled(cacheable=true)
    public static List<String> getFieldSetFields(String fieldSetName, String objectName) {
        List<String> fieldNames = new List<String>();
        Schema.DescribeSObjectResult objDescribe = Schema.getGlobalDescribe().get(objectName).getDescribe();
        Map<String, Schema.FieldSet> fieldSets = objDescribe.fieldSets.getMap();
        if (fieldSets.containsKey(fieldSetName)) {
            for (Schema.FieldSetMember field : fieldSets.get(fieldSetName).getFields()) {
                fieldNames.add(field.getFieldPath());
            }
        }
        return fieldNames;
    }
}
```

## Methods
### `getAccountId(serviceAppointmentId)`

`AURAENABLED`

#### Signature
```apex
public static String getAccountId(Id serviceAppointmentId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| serviceAppointmentId | Id |  |

#### Return Type
**String**

---

### `getFieldSetFields(fieldSetName, objectName)`

`AURAENABLED`

#### Signature
```apex
public static List<String> getFieldSetFields(String fieldSetName, String objectName)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| fieldSetName | String |  |
| objectName | String |  |

#### Return Type
**List&lt;String&gt;**