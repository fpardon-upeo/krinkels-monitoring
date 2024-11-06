/**
 * Created by Frederik on 11/5/2024.
 */

@IsTest
public class FieldServiceTestData {
    public static Account createTestAccount(String name, String recordTypeName, Boolean doInsert) {
        Account account = new Account();
        account.Name = name;
        account.RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get(recordTypeName).getRecordTypeId();
        if (doInsert) {
            insert account;
        }
        return account;
    }

    public static Product2 createTestProduct(String name, String recordTypeName, Boolean doInsert) {
        Product2 product = new Product2();
        product.Name = name;
        product.RecordTypeId = Schema.SObjectType.Product2.getRecordTypeInfosByName().get(recordTypeName).getRecordTypeId();
        product.IsActive = true;
        if (doInsert) {
            insert product;
        }
        return product;
    }

    public static Product2 linkServiceToPackageProduct(String mainProduct, String serviceProduct, Boolean doInsert) {

        Product2 serviceProd = new Product2(Id = serviceProduct, Service_Package_Product__c = mainProduct);
        if (doInsert) {
            update serviceProd;
        }
        return serviceProd;

    }

    public static String createATAKProject(String name, String ATAKProjectId, Boolean doInsert) {
        ATAK_Project__c atakProject = new ATAK_Project__c();
        atakProject.SubProject_ATAK__c = ATAKProjectId;
        atakProject.Subproject_Name__c = ATAKProjectId;
        if (doInsert) {
            insert atakProject;
        }
        return atakProject.SubProject_ATAK__c;
    }

    public static List<PricebookEntry> createTestPricebookEntries( List<Product2> products, Double unitPrice, Boolean doInsert) {
        List<PricebookEntry> pricebookEntries = new List<PricebookEntry>();
        String pricebookId = getStandardPricebookId();
        for (Product2 product : products) {
            PricebookEntry pricebookEntry = createTestPricebookEntry(pricebookId, product.Id, unitPrice);
            pricebookEntries.add(pricebookEntry);
        }
        if (doInsert) {
            insert pricebookEntries;
        }
        return pricebookEntries;
    }

    public static PricebookEntry createTestPricebookEntry(String pricebookId, String productId, Double unitPrice) {
        PricebookEntry pricebookEntry = new PricebookEntry();
        pricebookEntry.Pricebook2Id = pricebookId;
        pricebookEntry.Product2Id = productId;
        pricebookEntry.UnitPrice = unitPrice;
        pricebookEntry.IsActive = true;
        pricebookEntry.UseStandardPrice = false;
        return pricebookEntry;
    }

    public static String getStandardPricebookId() {
        String pricebookId = Test.getStandardPricebookId();
        Pricebook2 pb = new Pricebook2(Id = pricebookId, IsActive = true);
        update pb;
        return pb.Id;
    }
}