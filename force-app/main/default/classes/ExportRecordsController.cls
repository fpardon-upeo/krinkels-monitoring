/**
* Created by Frederik on 10/25/2024.
* Description:
* Change Log:
* Dependencies:
*/

public with sharing class ExportRecordsController {
    @AuraEnabled
    public static List<SObject> getExportData(Id parentId) {

        //Get the sObjectType from the parent Id
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
            String fields = configRecord.Fields_to_Export__c;
            String parentField = configRecord.Parent_Relationship_Field__c;
            String whereClause = configRecord.Where_Clause__c;

            System.debug('objectName: ' + objectName);
            System.debug('fields: ' + fields);
            System.debug('parentField: ' + parentField);

            String query = 'SELECT ' + fields +
                    ' FROM ' + objectName +
                    ' WHERE ' + parentField + ' = :parentId';

            System.debug('query: ' + query);

            if (String.isNotBlank(whereClause)) {
                query += ' AND ' + whereClause;
            }

            return Database.query(query);
        } catch (Exception e) {
            throw new AuraHandledException('Error retrieving export data: ' + e.getMessage());
        }
    }
}