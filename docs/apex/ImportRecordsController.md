# ImportRecordsController Class

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
public with sharing class ImportRecordsController {
    public class ImportResult {
        @AuraEnabled public String recordId;
        @AuraEnabled public String error;
        @AuraEnabled public Boolean success;
    }

    @AuraEnabled
    public static ImportResult createUpdateRecord(Map<String, Object> fields, String pricebookEntryExternalId) {
        ImportResult result = new ImportResult();
        Savepoint sp = Database.setSavepoint();

        try {
            ContractLineItem cli;

            // Get field describe information for type conversion
            Map<String, Schema.SObjectField> fieldMap = Schema.SObjectType.ContractLineItem.fields.getMap();

            // First, find the PricebookEntry by External ID if provided
            Id pricebookEntryId;
            if (String.isNotBlank(pricebookEntryExternalId)) {
                List<PricebookEntry> pbes = [
                        SELECT Id
                        FROM PricebookEntry
                        WHERE External_Id__c = :pricebookEntryExternalId
                        LIMIT 1
                ];

                System.debug('PricebookEntry: ' + pbes);

                if (!pbes.isEmpty()) {
                    pricebookEntryId = pbes[0].Id;
                } else {
                    throw new AuraHandledException('PricebookEntry not found for External ID: ' + pricebookEntryExternalId);
                }
            }

            // Convert field values based on their types
            Map<String, Object> convertedFields = new Map<String, Object>();
            for (String fieldName : fields.keySet()) {
                if (fieldMap.containsKey(fieldName)) {
                    Schema.DescribeFieldResult fieldDescribe = fieldMap.get(fieldName).getDescribe();
                    Object value = convertFieldValue(fields.get(fieldName), fieldDescribe);
                    if (value != null) {
                        convertedFields.put(fieldName, value);
                    }
                }
            }

            // Handle update case
            if (convertedFields.containsKey('Id')) {
                Id recordId = (Id)convertedFields.get('Id');
                cli = [SELECT Id FROM ContractLineItem WHERE Id = :recordId];

                // Remove fields we don't want to update
                convertedFields.remove('ServiceContractId');

                // Set our required fields
                convertedFields.put('UnitPrice', 1);
                convertedFields.put('Quantity', 1);

                // If we found a PricebookEntry by External ID, use it
                System.debug('PricebookEntryId: ' + pricebookEntryId);
                if (pricebookEntryId != null) {
                    convertedFields.put('PricebookEntryId', pricebookEntryId);
                }

                // Update fields on the record
                for (String fieldName : convertedFields.keySet()) {
                    cli.put(fieldName, convertedFields.get(fieldName));
                }

                System.debug('ContractLineItem: ' + cli);

                update cli;
                result.recordId = cli.Id;
            }
            // Handle insert case
            else {
                // Set our required fields
                convertedFields.put('UnitPrice', 1);
                convertedFields.put('Quantity', 1);

                // If we found a PricebookEntry by External ID, use it
                if (pricebookEntryId != null) {
                    convertedFields.put('PricebookEntryId', pricebookEntryId);
                }

                // Create new record with all fields
                cli = new ContractLineItem();
                for (String fieldName : convertedFields.keySet()) {
                    cli.put(fieldName, convertedFields.get(fieldName));
                }

                insert cli;
                result.recordId = cli.Id;
            }

            result.success = true;
            return result;

        } catch (Exception e) {
            Database.rollback(sp);
            result.success = false;
            result.error = e.getMessage();
            System.debug('Error creating/updating record: ' + e.getMessage());
            return result;
        }
    }

    private static Object convertFieldValue(Object value, Schema.DescribeFieldResult fieldDescribe) {
        if (value == null) return null;

        String stringValue = String.valueOf(value).trim();
        if (String.isBlank(stringValue)) return null;

        try {
            switch on fieldDescribe.getType() {
                when DATE {
                    // Handle date in format YYYY-MM-DD
                    if (stringValue.contains('-')) {
                        List<String> parts = stringValue.split('-');
                        if (parts.size() == 3) {
                            return Date.newInstance(
                                    Integer.valueOf(parts[0]),
                                    Integer.valueOf(parts[1]),
                                    Integer.valueOf(parts[2])
                            );
                        }
                    }
                    // Handle date in format MM/DD/YYYY
                    if (stringValue.contains('/')) {
                        List<String> parts = stringValue.split('/');
                        if (parts.size() == 3) {
                            return Date.newInstance(
                                    Integer.valueOf(parts[2]),
                                    Integer.valueOf(parts[0]),
                                    Integer.valueOf(parts[1])
                            );
                        }
                    }
                    return null;
                }
                when DATETIME {
                    return Datetime.valueOfGmt(stringValue);
                }
                when BOOLEAN {
                    return stringValue.toLowerCase() == 'true';
                }
                when INTEGER {
                    return Integer.valueOf(stringValue);
                }
                when DOUBLE {
                    return Decimal.valueOf(stringValue);
                }
                when else {
                    return stringValue;
                }
            }
        } catch (Exception e) {
            System.debug('Error converting field ' + fieldDescribe.getName() + ': ' + e.getMessage());
            return null;
        }
    }
}
```

## Methods
### `createUpdateRecord(fields, pricebookEntryExternalId)`

`AURAENABLED`

#### Signature
```apex
public static ImportResult createUpdateRecord(Map<String,Object> fields, String pricebookEntryExternalId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| fields | Map&lt;String,Object&gt; |  |
| pricebookEntryExternalId | String |  |

#### Return Type
**ImportResult**

---

### `convertFieldValue(value, fieldDescribe)`

#### Signature
```apex
private static Object convertFieldValue(Object value, Schema.DescribeFieldResult fieldDescribe)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| value | Object |  |
| fieldDescribe | Schema.DescribeFieldResult |  |

#### Return Type
**Object**

## Classes
### ImportResult Class

#### Fields
##### `recordId`

`AURAENABLED`

###### Signature
```apex
public recordId
```

###### Type
String

---

##### `error`

`AURAENABLED`

###### Signature
```apex
public error
```

###### Type
String

---

##### `success`

`AURAENABLED`

###### Signature
```apex
public success
```

###### Type
Boolean