# ExportRecordsController Class

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
public with sharing class ExportRecordsController {
    public class ExportWrapper {
        @AuraEnabled public List<Map<String, Object>> records;
        @AuraEnabled public List<String> fields;
        @AuraEnabled public Map<String, String> fieldTypes;
    }

    @AuraEnabled
    public static ExportWrapper getExportData(Id parentId) {
        System.debug('parentId: ' + parentId);
        String sObjectType = parentId.getSObjectType().getDescribe().getName();
        System.debug('sObjectType: ' + sObjectType);

        try {
            // Get the export configuration
            Export_Configuration__mdt config = Export_Configuration__mdt.getInstance(sObjectType);

            Export_Configuration__mdt configRecord = [
                    SELECT Object_API_Name__c, Fields_to_Export__c, Parent_Relationship_Field__c, Where_Clause__c
                    FROM Export_Configuration__mdt
                    WHERE Id = :config.Id
            ];

            // Build the query
            String objectName = configRecord.Object_API_Name__c;
            List<String> fields = configRecord.Fields_to_Export__c.split(',');

            // Trim whitespace from fields
            for(Integer i = 0; i < fields.size(); i++) {
                fields[i] = fields[i].trim();
                System.debug('field: ' + fields[i]);
            }

            String parentRelationshipField = configRecord.Parent_Relationship_Field__c;
            String whereClause = configRecord.Where_Clause__c;

            String query = 'SELECT ' + String.join(fields, ',') +
                    ' FROM ' + objectName +
                    ' WHERE ' + parentRelationshipField + ' = :parentId';

            System.debug('query: ' + query);

            if (String.isNotBlank(whereClause)) {
                query += ' AND ' + whereClause;
            }

            List<SObject> queryResults = Database.query(query);
            System.debug('results before: ' + queryResults);

            // Convert SObjects to Maps and handle relationship fields
            List<Map<String, Object>> processedRecords = new List<Map<String, Object>>();
            List<String> processedFields = new List<String>();
            Map<String, String> fieldTypes = new Map<String, String>();

            // Get base object field map for field types
            Schema.SObjectType objectType = Schema.getGlobalDescribe().get(objectName);
            Map<String, Schema.SObjectField> fieldMap = objectType.getDescribe().fields.getMap();

            // Process fields first to handle relationships
            for(String field : fields) {
                String processedField = field.replace('.', '_');
                processedFields.add(processedField);

                if(field.contains('.')) {
                    // Handle relationship field types
                    List<String> parts = field.split('\\.');
                    if(parts.size() == 2 && fieldMap.containsKey(parts[0])) {
                        Schema.DescribeFieldResult relatedFieldDescribe = fieldMap.get(parts[0]).getDescribe();
                        if(!relatedFieldDescribe.getReferenceTo().isEmpty()) {
                            Schema.SObjectType relatedType = relatedFieldDescribe.getReferenceTo()[0];
                            Map<String, Schema.SObjectField> relatedFieldMap = relatedType.getDescribe().fields.getMap();
                            if(relatedFieldMap.containsKey(parts[1])) {
                                fieldTypes.put(processedField, relatedFieldMap.get(parts[1]).getDescribe().getType().name());
                            }
                        }
                    }
                } else {
                    // Handle regular field types
                    if(fieldMap.containsKey(field)) {
                        fieldTypes.put(field, fieldMap.get(field).getDescribe().getType().name());
                    }
                }
            }

            // Process records
            for(SObject record : queryResults) {
                Map<String, Object> processedRecord = new Map<String, Object>();

                for(String field : fields) {
                    String processedField = field.replace('.', '_');

                    if(field.contains('.')) {
                        // Handle relationship fields
                        List<String> parts = field.split('\\.');
                        SObject relatedRecord = record.getSObject(parts[0]);
                        processedRecord.put(processedField, relatedRecord != null ? relatedRecord.get(parts[1]) : null);
                    } else {
                        // Handle regular fields
                        processedRecord.put(field, record.get(field));
                    }
                }

                processedRecords.add(processedRecord);
            }

            ExportWrapper wrapper = new ExportWrapper();
            wrapper.records = processedRecords;
            wrapper.fields = processedFields;
            wrapper.fieldTypes = fieldTypes;
            return wrapper;

        } catch (Exception e) {
            System.debug('Error: ' + e.getMessage() + '\n' + e.getStackTraceString());
            throw new AuraHandledException('Error retrieving export data: ' + e.getMessage());
        }
    }
}
```

## Methods
### `getExportData(parentId)`

`AURAENABLED`

#### Signature
```apex
public static ExportWrapper getExportData(Id parentId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| parentId | Id |  |

#### Return Type
**ExportWrapper**

## Classes
### ExportWrapper Class

#### Fields
##### `records`

`AURAENABLED`

###### Signature
```apex
public records
```

###### Type
List&lt;Map&lt;String,Object&gt;&gt;

---

##### `fields`

`AURAENABLED`

###### Signature
```apex
public fields
```

###### Type
List&lt;String&gt;

---

##### `fieldTypes`

`AURAENABLED`

###### Signature
```apex
public fieldTypes
```

###### Type
Map&lt;String,String&gt;