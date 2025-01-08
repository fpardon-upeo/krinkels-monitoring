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
private class ReadyForValidationTest {
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
  static void testSetReadyForValidation_Success() {
    ServiceContract sc = [SELECT Id FROM ServiceContract LIMIT 1];

    Test.startTest();
    Boolean result = ReadyForValidation.setReadyForValidation(sc.Id);
    Test.stopTest();

    Assert.isTrue(result, 'Ready for validation should be successful');
  }

  @isTest
  static void testSetReadyForValidation_InvalidProjectCode() {
    // Get the Service Contract and its CLI
    ServiceContract sc = [SELECT Id FROM ServiceContract LIMIT 1];
    ContractLineItem cli = [
      SELECT Id
      FROM ContractLineItem
      WHERE ServiceContractId = :sc.Id
      LIMIT 1
    ];

    // Update CLI with invalid project code
    cli.Project_Code__c = 'INVALID_CODE';
    update cli;

    Test.startTest();
    Boolean exceptionThrown = false;
    try {
      ReadyForValidation.setReadyForValidation(sc.Id);
      Assert.fail('Should have thrown an exception for invalid project code');
    } catch (AuraHandledException e) {
      exceptionThrown = true;
    }
    Test.stopTest();

    Assert.isTrue(
      exceptionThrown,
      'An exception should be thrown for invalid project code'
    );
  }

  @isTest
  static void testBasicSetup() {
    // Verify all records are created correctly
    ATAK_Project__c proj = [SELECT Id, Name FROM ATAK_Project__c LIMIT 1];
    Account acc = [SELECT Id, RecordTypeId FROM Account LIMIT 1];
    ServiceContract sc = [SELECT Id, AccountId FROM ServiceContract LIMIT 1];
    ContractLineItem cli = [
      SELECT Id, Project_Code__c
      FROM ContractLineItem
      LIMIT 1
    ];

    Assert.areNotEqual(null, proj.Id, 'ATAK Project should be created');
    Assert.areNotEqual(null, acc.Id, 'Account should be created');
    Assert.areNotEqual(null, sc.Id, 'Service Contract should be created');
    Assert.areNotEqual(null, cli.Id, 'Contract Line Item should be created');
    Assert.areEqual(
      'TEST001',
      cli.Project_Code__c,
      'Project Code should match ATAK Project'
    );
  }

  @isTest
  static void testGetATAKProjectsForNotification() {
    // Get project codes from existing CLI
    Set<String> projectCodes = new Set<String>{ 'TEST001' };

    Test.startTest();
    List<ATAK_Project__c> projects = ReadyForValidation.getATAKProjectsForNotification(
      projectCodes
    );
    Test.stopTest();

    Assert.areEqual(1, projects.size(), 'Should find one ATAK project');
    Assert.areEqual(
      'TEST001',
      projects[0].SubProject_ATAK__c,
      'Should match the project code'
    );
  }

  @isTest
  static void testGetATAKProjects() {
    // Query the existing ATAK Project with all needed fields
    ATAK_Project__c existingProject = [
      SELECT Id, Name
      FROM ATAK_Project__c
      WHERE Name = 'TEST001'
      LIMIT 1
    ];

    Test.startTest();
    List<ATAK_Project__c> projects = ReadyForValidation.getATAKProjects(
      'TEST001'
    );
    Test.stopTest();

    Assert.areEqual(1, projects.size(), 'Should find one ATAK project');
    Assert.areEqual(
      'TEST001',
      existingProject.Name,
      'Should match the project code'
    );
  }
}