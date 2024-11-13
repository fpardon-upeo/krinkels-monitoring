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
        Product2 atakMat = new Product2();
        atakMat.ExternalId = materialData.code;
        atakMat.Name = materialData.description;
        atakMat.ProductCode = materialData.code;
        atakMat.IsActive = true;
        atakMat.Description = materialData.description;
        atakMat.Family = 'Material';
        return atakMat;
    }

}