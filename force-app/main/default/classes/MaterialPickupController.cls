/**
* Created by Frederik on 12/5/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class MaterialPickupController {

    @AuraEnabled
    public static List<ProductItem> getMaterialItems(String searchTerm) {

        List<ProductItem> materialItems = new List<ProductItem>();
        ServiceResource serviceResource = getServiceResource();

        try {

            materialItems = [SELECT Id, Product2.Name, Product2.ATAK_Code__c, Is_Temporary__c
                             FROM ProductItem
                                WHERE Is_Temporary__c = true
                                AND LocationId = :serviceResource.LocationId
                             ORDER BY Product2.Name ASC
                             LIMIT 10];

        } catch (Exception e) {
            System.debug('Error getting material items: ' + e.getMessage());
        }

        return materialItems;
    }

    @AuraEnabled
    public static Boolean createProductAndMaterialItem(String productName, String atakId, String recordTypeId){

        Boolean success = false;


            //First check if a product with the ATAK ID already exists

            Product2 product;

            try {
                product = [SELECT Id, Name, ATAK_Code__c FROM Product2 WHERE ATAK_Code__c = :atakId LIMIT 1];
            } catch (Exception e) {
                System.debug('Error getting product: ' + e.getMessage());
            }

            if (product == null) {
                //Create a new product
                product = new Product2();
                product.Name = productName;
                product.ATAK_Code__c = atakId;
                product.RecordTypeId = recordTypeId;
                insert product;
            }

            //Get the current user service resource
            ServiceResource serviceResource = getServiceResource();

            //Create a new material item
            ProductItem materialItem = new ProductItem();
            materialItem.Product2Id = product.Id;
            materialItem.QuantityOnHand = 1;
            materialItem.LocationId = serviceResource.LocationId;
            materialItem.SerialNumber = atakId;
            materialItem.QuantityUnitOfMeasure = 'Minutes';
            materialItem.Is_Temporary__c = true;

            insert materialItem;

            success = true;


        return success;

    }

    @AuraEnabled
    public static void deleteMaterialItem(String materialItemId) {

        try {
            ProductItem materialItem = [SELECT Id FROM ProductItem WHERE Id = :materialItemId LIMIT 1];
            delete materialItem;
        } catch (Exception e) {
            System.debug('Error deleting material item: ' + e.getMessage());
        }

    }

    private static ServiceResource getServiceResource() {
        return [SELECT Id, LocationId FROM ServiceResource WHERE RelatedRecordId = :UserInfo.getUserId() LIMIT 1];
    }

}