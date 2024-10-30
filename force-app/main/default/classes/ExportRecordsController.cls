public with sharing class ExportRecordsController {

    public class ExportWrapper {
        @AuraEnabled public List<SObject> records;
        @AuraEnabled public List<String> fields;
        @AuraEnabled public Map<String, String> fieldTypes;  // Add this
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
            }

            String parentField = configRecord.Parent_Relationship_Field__c;
            String whereClause = configRecord.Where_Clause__c;

            String query = 'SELECT ' + String.join(fields, ',') +
                    ' FROM ' + objectName +
                    ' WHERE ' + parentField + ' = :parentId';

            if (String.isNotBlank(whereClause)) {
                query += ' AND ' + whereClause;
            }

            List<SObject> results = Database.query(query);

            System.debug('results before: ' + results);

            // Ensure all fields are present, even if null
            for(SObject record : results) {
                Map<String, Object> populatedFields = record.getPopulatedFieldsAsMap();
                for(String field : fields) {
                    if(!populatedFields.containsKey(field)) {
                        record.put(field, null);
                    }
                }
            }

            Schema.SObjectType objectType = Schema.getGlobalDescribe().get(objectName);
            Map<String, Schema.SObjectField> fieldMap = objectType.getDescribe().fields.getMap();

            Map<String, String> fieldTypes = new Map<String, String>();
            for(String field : fields) {
                if(fieldMap.containsKey(field)) {
                    Schema.DisplayType fieldType = fieldMap.get(field).getDescribe().getType();
                    fieldTypes.put(field, fieldType.name());
                }
            }

            ExportWrapper wrapper = new ExportWrapper();
            wrapper.records = results;
            wrapper.fields = fields;
            wrapper.fieldTypes = fieldTypes;
            return wrapper;
        } catch (Exception e) {
            throw new AuraHandledException('Error retrieving export data: ' + e.getMessage());
        }
    }
}