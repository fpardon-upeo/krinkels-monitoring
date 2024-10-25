/**
 * Created by Frederik on 5/31/2024.
 * Description:
 * Change Log:
 * Dependencies:
 */

public without sharing class ServiceBuilderController {
  @AuraEnabled
  public static List<ContractLineItem> getContractLines(String recordId) {
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
    System.debug('contractLine: ' + contractLine);

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

    return contractLine;
  }
}