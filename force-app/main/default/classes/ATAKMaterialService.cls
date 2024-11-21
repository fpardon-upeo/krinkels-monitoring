/**
 * Created by fpardon on 12/11/2024.
 */

public with sharing class ATAKMaterialService {

    public static String createATAKMaterial(ATAKMaterialWrapper material) {
        System.debug('ATAKMaterialService.createATAKMaterial');
        List<Product2> atakMaterial = new List<Product2>();
        for(ATAKMaterialWrapper.Data materialData : material.data) {
            Product2 atakMat = createSingleATAKMaterial(materialData);
            atakMaterial.add(atakMat);
        }

        Database.UpsertResult[] results = Database.upsert(atakMaterial, Product2.Fields.ATAK_Code__c, false);
        Integer successCount = 0;
        Integer errorCount = 0;
        for(Database.UpsertResult result : results) {
            if(!result.isSuccess()) {
                for(Database.Error error : result.getErrors()) {
                    System.debug('Error: ' + error.getMessage());
                    errorCount++;
                }
            } else {
                successCount++;
            }
        }

        return 'Success: ' + successCount + ' Error: ' + errorCount + ' Total: ' + results.size() + ' processed.';

    }

    public static Product2 createSingleATAKMaterial(ATAKMaterialWrapper.Data materialData) {
        System.debug('ATAKMaterialService.createATAKMaterial');
        System.debug('materialData: ' + materialData.code);
        Id materialRecordTypeId = Schema.SObjectType.Product2.getRecordTypeInfosByName().get('Material').getRecordTypeId();
        Product2 atakMat = new Product2();
        atakMat.ExternalId = materialData.code;
        atakMat.Name = materialData.description;
        atakMat.ProductCode = materialData.code;
        atakMat.IsActive = true;
        atakMat.Description = materialData.description;
        atakMat.Family = 'Material';
        atakMat.ATAK_Code__c = materialData.code;
        atakMat.Group_Code__c = materialData.group_code;
        atakMat.Group_Description__c = materialData.group_description;
        atakMat.Means_Category__c = materialData.means_categorie;
        atakMat.Means_Code__c = materialData.means_code;
        atakMat.Means_Description__c = materialData.means_description;
        atakMat.Department_Code__c = materialData.department_code;
        atakMat.Department_Name__c = materialData.department_name;
        atakMat.Depot_Code__c = materialData.depot_code;
        atakMat.Depot_Name__c = materialData.depot_name;
        atakMat.Rate__c = materialData.rate;
        atakMat.Date_Use_End__c = materialData.date_use_end != null && materialData.date_use_end != '' ? Date.valueOf(materialData.date_use_end) : null;
        atakMat.Date_Out_of_Service__c = materialData.date_out_of_service != null && materialData.date_out_of_service != '' ? Date.valueOf(materialData.date_out_of_service) : null;
        atakMat.RecordTypeId = materialRecordTypeId;
        return atakMat;
    }

}