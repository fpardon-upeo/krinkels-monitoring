/**
 * Created by Frederik on 5/31/2024.
 * Description:
 * Change Log:
 * Dependencies:
 */

public without sharing class ServiceBuilderController {
  @AuraEnabled
  public static List<ContractLineItem> getContractLines(String recordId) {
    List<ContractLineItem> contractLines = [
      SELECT
        Id,
        LineItemNumber,
        ServiceContract.StartDate,
        ServiceContract.EndDate,
        ServiceContract.Location_Type__c,
        Recurrence_Pattern__c,
        ServiceContractId,
        Product2Id,
        Product2.Name,
        AssetId,
        Asset.Name,
        StartDate,
        EndDate,
        PricebookEntryId,
        Quantity,
        UnitPrice,
        ListPrice,
        TotalPrice,
        Status,
        Planning_Type__c,
        Location__Street__s,
        Location__City__s,
        Location__PostalCode__s,
        Location__StateCode__s,
        Location__CountryCode__s,
        Geolocation__Latitude__s,
        Geolocation__Longitude__s,
        Project_Code__c,
        (
          SELECT
            Id,
            Contract_Line_Item__c,
            Financial_Customer__c,
            Financial_Customer__r.Name
          FROM Contract_Line_Financial_Accounts__r
        )
      FROM ContractLineItem
      WHERE ServiceContractId = :recordId
    ];
    return contractLines;
  }

  @AuraEnabled
  public static String getWrappedContractLines(String recordId) {
    List<ContractLineItem> contractLines = new List<ContractLineItem>();
    contractLines = [
      SELECT
        Id,
        LineItemNumber,
        ServiceContract.StartDate,
        ServiceContract.EndDate,
        Recurrence_Pattern__c,
        ServiceContractId,
        Product2Id,
        Product2.Name,
        AssetId,
        Asset.Name,
        StartDate,
        EndDate,
        PricebookEntryId,
        Quantity,
        UnitPrice,
        ListPrice,
        TotalPrice,
        Status,
        Planning_Type__c,
        Location__Street__s,
        Location__City__s,
        Location__PostalCode__s,
        Location__StateCode__s,
        Location__CountryCode__s,
        Project_Code__c
      FROM ContractLineItem
      WHERE ServiceContractId = :recordId
    ];
    ServiceBuilderWrapper wrapper = ServiceBuilderWrapper.wrapLineItems(
      contractLines
    );
    //Force the wrapper to be serialized as JSON
    System.debug('wrapper: ' + JSON.serialize(wrapper));
    return JSON.serialize(wrapper);
  }

  @AuraEnabled
  public static Boolean deleteContractLine(String contractLineId) {
    ContractLineItem contractLine = [
      SELECT Id
      FROM ContractLineItem
      WHERE Id = :contractLineId
      LIMIT 1
    ];
    try {
      delete contractLine;
      return true;
    } catch (Exception e) {
      return false;
    }
  }

  @AuraEnabled
  public static ContractLineItem saveContractLine(
    ContractLineItem contractLine
  ) {
    //Get the PricebookEntryId
    PricebookEntry pricebookEntry = [
      SELECT Id
      FROM PricebookEntry
      WHERE Product2Id = :contractLine.Product2Id
      LIMIT 1
    ];

    if (contractLine.Id == null) {
      contractLine.PricebookEntryId = pricebookEntry.Id;
      insert contractLine;
    } else {
      update contractLine;
    }

    // Return the same fields as getContractLines using a single query
    return [
      SELECT
        Id,
        LineItemNumber,
        ServiceContract.StartDate,
        ServiceContract.EndDate,
        ServiceContract.Location_Type__c,
        Recurrence_Pattern__c,
        ServiceContractId,
        Product2Id,
        Product2.Name,
        AssetId,
        Asset.Name,
        StartDate,
        EndDate,
        PricebookEntryId,
        Quantity,
        UnitPrice,
        ListPrice,
        TotalPrice,
        Status,
        Planning_Type__c,
        Location__Street__s,
        Location__City__s,
        Location__PostalCode__s,
        Location__StateCode__s,
        Location__CountryCode__s,
        Geolocation__Latitude__s,
        Geolocation__Longitude__s,
        Project_Code__c,
        (
          SELECT
            Id,
            Contract_Line_Item__c,
            Financial_Customer__c,
            Financial_Customer__r.Name
          FROM Contract_Line_Financial_Accounts__r
        )
      FROM ContractLineItem
      WHERE Id = :contractLine.Id
    ];
  }

  @AuraEnabled
  public static String getFinancialAccountName(String recordId) {
    Account financialAccount = [
      SELECT Name
      FROM Account
      WHERE Id = :recordId
    ];

    return financialAccount.Name;
  }

  @AuraEnabled
  public static void insertOrRemoveContractLineFinancialAccount(
    String name,
    Id contractLineItemId,
    Id financialCustomerId,
    String action
  ) {
    // Query to check if a record with this combination already exists
    List<Contract_Line_Financial_Account__c> existingRecords = [
      SELECT Id
      FROM Contract_Line_Financial_Account__c
      WHERE
        Contract_Line_Item__c = :contractLineItemId
        AND Financial_Customer__c = :financialCustomerId
    ];

    // Check if the list is empty, meaning no existing record is found
    if (existingRecords.isEmpty() && action == 'insert') {
      // Create a new record if no existing record found
      Contract_Line_Financial_Account__c contractLineFinancialAccount = new Contract_Line_Financial_Account__c();
      contractLineFinancialAccount.Name = name;
      contractLineFinancialAccount.Contract_Line_Item__c = contractLineItemId;
      contractLineFinancialAccount.Financial_Customer__c = financialCustomerId;

      insert contractLineFinancialAccount;
    } else if (!existingRecords.isEmpty() && action == 'delete') {
      delete existingRecords;
    }
  }

  @AuraEnabled
  public static void updateServiceContractLocationType(
    Id recordId,
    String locationType
  ) {
    try {
      ServiceContract serviceContract = [
        SELECT Id, Location_Type__c
        FROM ServiceContract
        WHERE Id = :recordId
      ];

      serviceContract.Location_Type__c = locationType;

      update serviceContract;
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}