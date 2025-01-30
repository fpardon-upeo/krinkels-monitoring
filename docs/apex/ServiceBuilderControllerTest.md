# ServiceBuilderControllerTest Class

`ISTEST`

This class contains unit tests for validating the behavior of Apex classes 
and triggers. 
 
Unit tests are class methods that verify whether a particular piece 
of code is working properly. Unit test methods take no arguments, 
commit no data to the database, and are flagged with the testMethod 
keyword in the method definition. 
 
All test methods in an org are executed whenever Apex code is deployed 
to a production org to confirm correctness, ensure code 
coverage, and prevent regressions. All Apex classes are 
required to have at least 75% code coverage in order to be deployed 
to a production org. In addition, all triggers must have some code coverage. 
 
The

**IsTest** 

class annotation indicates this class only contains test 
methods. Classes defined with the

**IsTest** 

annotation do not count against 
the org size limit for all Apex scripts. 
 
See the Apex Language Reference for more information about Testing and Code Coverage.

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
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
      Project_Code__c = 'TEST001'
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

    List<ContractLineItem> CLI = ServiceBuilderController.getContractLines(
      sc.Id
    );

    Assert.isTrue(CLI.size() > 0, 'Contains CLI(s).');
  }

  @isTest
  static void testDeleteContractLine() {
    // Get the CLI created in test setup
    ContractLineItem cli = [SELECT Id FROM ContractLineItem LIMIT 1];

    // Test successful deletion
    Boolean result = ServiceBuilderController.deleteContractLine(cli.Id);
    Assert.isTrue(result, 'Deletion should return true');

    // Verify the CLI was actually deleted
    List<ContractLineItem> remainingCLIs = [
      SELECT Id
      FROM ContractLineItem
      WHERE Id = :cli.Id
    ];
    Assert.areEqual(0, remainingCLIs.size(), 'CLI should be deleted');

    // Test deletion with invalid ID
    Boolean failResult = ServiceBuilderController.deleteContractLine(
      '001000000000000'
    );
    Assert.isFalse(failResult, 'Deletion with invalid ID should return false');
  }

  @isTest
  static void testGetWrappedContractLines() {
    ServiceContract sc = [SELECT Id FROM ServiceContract LIMIT 1];
    String result = ServiceBuilderController.getWrappedContractLines(sc.Id);
    Assert.isNotNull(result, 'Result should not be null');

    //Wrong ID
    String resultNull = ServiceBuilderController.getWrappedContractLines(
      '001000000000000AAA'
    );
    Assert.areEqual(
      '{"locations":[]}',
      resultNull,
      'Should return empty wrapper'
    );
  }

  @isTest
  static void testGetFinancialAccountName() {
    Account acc = [SELECT Id, Name FROM Account LIMIT 1];
    String name = ServiceBuilderController.getFinancialAccountName(acc.Id);
    Assert.areEqual(acc.Name, name, 'Financial account name should match');
  }

  @isTest
  static void testInsertOrRemoveContractLineFinancialAccount() {
    ContractLineItem cli = [SELECT Id FROM ContractLineItem LIMIT 1];
    Account financialAccount = [SELECT Id FROM Account LIMIT 1];

    // Test insert
    ServiceBuilderController.insertOrRemoveContractLineFinancialAccount(
      'Test Link',
      cli.Id,
      financialAccount.Id,
      'insert'
    );

    List<Contract_Line_Financial_Account__c> links = [
      SELECT Id
      FROM Contract_Line_Financial_Account__c
      WHERE Contract_Line_Item__c = :cli.Id
    ];
    Assert.areEqual(1, links.size(), 'Link should have been created');

    // Test delete
    ServiceBuilderController.insertOrRemoveContractLineFinancialAccount(
      'Test Link',
      cli.Id,
      financialAccount.Id,
      'delete'
    );

    links = [
      SELECT Id
      FROM Contract_Line_Financial_Account__c
      WHERE Contract_Line_Item__c = :cli.Id
    ];
    Assert.areEqual(0, links.size(), 'Link should have been deleted');
  }

  @isTest
  static void testUpdateServiceContractLocationType() {
    ServiceContract sc = [SELECT Id FROM ServiceContract LIMIT 1];

    ServiceBuilderController.updateServiceContractLocationType(
      sc.Id,
      'Address'
    );

    ServiceContract updatedSC = [
      SELECT Id, Location_Type__c
      FROM ServiceContract
      WHERE Id = :sc.Id
    ];
    Assert.areEqual(
      'Address',
      updatedSC.Location_Type__c,
      'Location type should have been updated to Address'
    );
  }

  @isTest
  static void testUpdateServiceContractLocationTypeException() {
    ServiceContract sc = [SELECT Id FROM ServiceContract LIMIT 1];

    try {
      ServiceBuilderController.updateServiceContractLocationType(
        '001000000000000AAA',
        'Address'
      );
      Assert.fail('Should have thrown an exception for invalid ID');
    } catch (AuraHandledException e) {
      // Expected exception
    }
  }

  @isTest
  static void testPrepareContractForNextYear() {
    ServiceContract sc = [SELECT Id FROM ServiceContract LIMIT 1];
    ContractLineItem cli = [
      SELECT Id, StartDate, EndDate
      FROM ContractLineItem
      LIMIT 1
    ];

    // Set dates and recurrence pattern
    cli.StartDate = Date.today();
    cli.EndDate = Date.today().addDays(30);
    cli.Recurrence_Pattern__c = 'FREQ=WEEKLY;INTERVAL=1;BYDAY=MO;UNTIL=20241218T000000Z';
    update cli;

    Boolean result = ServiceBuilderController.prepareContractForNextYear(sc.Id);
    Assert.isTrue(result, 'Contract preparation should succeed');

    ContractLineItem updated = [
      SELECT StartDate, EndDate, Recurrence_Pattern__c
      FROM ContractLineItem
      WHERE Id = :cli.Id
    ];

    Assert.areEqual(
      cli.StartDate.addYears(1),
      updated.StartDate,
      'Start date should be increased by 1 year' + updated.StartDate
    );
    Assert.areEqual(
      cli.EndDate.addYears(1),
      updated.EndDate,
      'End date should be increased by 1 year' + updated.EndDate
    );
  }

  @isTest
  static void testSaveContractLine() {
    // Get existing CLI
    ContractLineItem cli = [
      SELECT Id, Product2Id, Quantity
      FROM ContractLineItem
      LIMIT 1
    ];

    // Test update
    cli.Quantity = 2;
    ContractLineItem result = ServiceBuilderController.saveContractLine(cli);

    // Verify
    Assert.areEqual(2, result.Quantity, 'Quantity should be updated to 2 ');
    Assert.areEqual(0, result.UnitPrice, 'UnitPrice should be 0');
  }

  @isTest
  static void testGetProductRecordTypeIds() {
    // Call the method
    Map<String, String> recordTypeIds = ServiceBuilderController.getProductRecordTypeIds();

    // Get the expected Record Type IDs directly
    Id serviceRTId = Schema.SObjectType.Product2.getRecordTypeInfosByDeveloperName()
      .get('Service')
      .getRecordTypeId();
    Id servicePackageRTId = Schema.SObjectType.Product2.getRecordTypeInfosByDeveloperName()
      .get('Service_Package')
      .getRecordTypeId();

    // Verify the results
    Assert.isNotNull(recordTypeIds, 'Record Type map should not be null');
    Assert.areEqual(
      2,
      recordTypeIds.size(),
      'Should return exactly 2 Record Type IDs'
    );
    Assert.areEqual(
      serviceRTId,
      recordTypeIds.get('Service'),
      'Service Record Type ID should match'
    );
    Assert.areEqual(
      servicePackageRTId,
      recordTypeIds.get('ServicePackage'),
      'Service Package Record Type ID should match'
    );
  }
}
```

## Methods
### `makeData()`

`TESTSETUP`

#### Signature
```apex
private static void makeData()
```

#### Return Type
**void**

---

### `testGetServiceContract()`

`ISTEST`

#### Signature
```apex
private static void testGetServiceContract()
```

#### Return Type
**void**

---

### `testGetContractLines()`

`ISTEST`

#### Signature
```apex
private static void testGetContractLines()
```

#### Return Type
**void**

---

### `testDeleteContractLine()`

`ISTEST`

#### Signature
```apex
private static void testDeleteContractLine()
```

#### Return Type
**void**

---

### `testGetWrappedContractLines()`

`ISTEST`

#### Signature
```apex
private static void testGetWrappedContractLines()
```

#### Return Type
**void**

---

### `testGetFinancialAccountName()`

`ISTEST`

#### Signature
```apex
private static void testGetFinancialAccountName()
```

#### Return Type
**void**

---

### `testInsertOrRemoveContractLineFinancialAccount()`

`ISTEST`

#### Signature
```apex
private static void testInsertOrRemoveContractLineFinancialAccount()
```

#### Return Type
**void**

---

### `testUpdateServiceContractLocationType()`

`ISTEST`

#### Signature
```apex
private static void testUpdateServiceContractLocationType()
```

#### Return Type
**void**

---

### `testUpdateServiceContractLocationTypeException()`

`ISTEST`

#### Signature
```apex
private static void testUpdateServiceContractLocationTypeException()
```

#### Return Type
**void**

---

### `testPrepareContractForNextYear()`

`ISTEST`

#### Signature
```apex
private static void testPrepareContractForNextYear()
```

#### Return Type
**void**

---

### `testSaveContractLine()`

`ISTEST`

#### Signature
```apex
private static void testSaveContractLine()
```

#### Return Type
**void**

---

### `testGetProductRecordTypeIds()`

`ISTEST`

#### Signature
```apex
private static void testGetProductRecordTypeIds()
```

#### Return Type
**void**