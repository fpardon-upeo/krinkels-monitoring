/**
 * This class contains unit tests for validating the behavior of Apex classes
 * and triggers.
 *
 * Unit tests are class methods that verify whether a particular piece
 * of code is working properly. Unit test methods take no arguments,
 * commit no data to the database, and are flagged with the testMethod
 * keyword in the method definition.
 *
 * All test methods in an org are executed whenever Apex code is deployed
 * to a production org to confirm correctness, ensure code
 * coverage, and prevent regressions. All Apex classes are
 * required to have at least 75% code coverage in order to be deployed
 * to a production org. In addition, all triggers must have some code coverage.
 *
 * The @isTest class annotation indicates this class only contains test
 * methods. Classes defined with the @isTest annotation do not count against
 * the org size limit for all Apex scripts.
 *
 * See the Apex Language Reference for more information about Testing and Code Coverage.
 */

@isTest
private class ServiceBuilderControllerTest {
  @TestSetup
  static void makeData() {
    // Create ATAK Project
    ATAK_Project__c atakProject = new ATAK_Project__c(
      Name = 'TEST001',
      SubProject_ATAK__c = 'TEST001'
    );
    insert atakProject;

    // Get the Financial Account Record Type
    Id financialAccountRTId = Schema.SObjectType.Account
      .getRecordTypeInfosByName()
      .get('Financial Account')
      .getRecordTypeId();

    // Create Account
    Account testAccount = new Account(
      Name = 'Test Financial Account',
      RecordTypeId = financialAccountRTId
    );
    insert testAccount;

    // Get standard pricebook and activate it
    Id standardPricebookId = Test.getStandardPricebookId();
    Pricebook2 standardPricebook = new Pricebook2(
      Id = standardPricebookId,
      IsActive = true
    );
    update standardPricebook;

    // Get the Service Package Record Type for Product
    Id servicePackageRTId = Schema.SObjectType.Product2
      .getRecordTypeInfosByName()
      .get('Service Package')
      .getRecordTypeId();

    // Create Product
    Product2 testProduct = new Product2(
      Name = 'Test Service Package',
      RecordTypeId = servicePackageRTId,
      IsActive = true
    );
    insert testProduct;

    // Create standard pricebook entry
    PricebookEntry standardPBE = new PricebookEntry(
      Pricebook2Id = standardPricebookId,
      Product2Id = testProduct.Id,
      UnitPrice = 1,
      IsActive = true,
      UseStandardPrice = false
    );
    insert standardPBE;

    // Create Service Contract
    ServiceContract sc = new ServiceContract(
      Name = 'Test Contract',
      StartDate = Date.today(),
      AccountId = testAccount.Id,
      ApprovalStatus = 'Draft',
      Pricebook2Id = standardPricebookId
    );
    insert sc;

    // Create Contract Line Item
    ContractLineItem cli = new ContractLineItem(
      ServiceContractId = sc.Id,
      PricebookEntryId = standardPBE.Id,
      Quantity = 1,
      UnitPrice = 1,
      Project_Code__c = 'TEST001' // Matches the ATAK Project
    );
    insert cli;
  }

  @isTest
  static void testGetServiceContract() {
    ServiceContract sc = [SELECT Id FROM ServiceContract LIMIT 1];
    ServiceContract result = ServiceBuilderController.getServiceContract(sc.Id);
    System.assert(
      result != null,
      'Service Contract should have been retrieved'
    );
  }

  @isTest
  static void testGetContractLines() {
    ServiceContract sc = [SELECT Id FROM ServiceContract LIMIT 1];

    List<ContractLineItem> CLI = [
      SELECT Id
      FROM ContractLineItem
      WHERE ServiceContractId = :sc.Id
    ];

    Assert.isTrue(CLI.size() > 0, 'Contains CLI(s).');
  }

  @isTest
  static void testDeleteContractLine() {
    List<ContractLineItem> CLI = [
      SELECT Id
      FROM ContractLineItem
      LIMIT 1
    ];

    Boolean result = ServiceBuilderController.deleteContractLine(CLI[0].Id);

    Assert.isTrue(
      result,
      'Result should be true which means the CLI was deelted.'
    );

    Boolean resultFalse = ServiceBuilderController.deleteContractLine(
      'randomID'
    );
    Assert.isFalse(resultFalse, 'Result should be false as fake ID as passed');

    List<ContractLineItem> contractLineItem = [
      SELECT Id
      FROM ContractLineItem
      WHERE Id = :CLI[0].Id
    ];

    Assert.isTrue(
      contractLineItem.size() == 0,
      'Length of the array should be 0'
    );
  }
}