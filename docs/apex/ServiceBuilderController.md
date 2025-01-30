# ServiceBuilderController Class

Created by Frederik on 5/31/2024. 
Description: 
Change Log: 
Dependencies:

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * Created by Frederik on 5/31/2024.
 * Description:
 * Change Log:
 * Dependencies:
 */

public without sharing class ServiceBuilderController {

  @AuraEnabled
  public static String getContractPackageId(String recordId) {
    ServiceContract serviceContract = [
      SELECT Id, Product__c
      FROM ServiceContract
      WHERE Id = :recordId
    ];

    return serviceContract.Product__c;
  }

  @AuraEnabled
  public static ServiceContract getServiceContract(Id recordId) {
    // Query the ServiceContract record with the specified recordId
    ServiceContract serviceContract = [
      SELECT
        Product__c,
        Default_LMRA__c,
        StartDate,
        EndDate,
        Location_Type__c,
        (SELECT Id FROM MaintenancePlans)
      FROM ServiceContract
      WHERE Id = :recordId
      LIMIT 1
    ];

    return serviceContract;
  }

  @AuraEnabled
  public static List<ContractLineItem> getContractLines(String recordId) {
    List<ContractLineItem> contractLines = [
      SELECT
        Id,
        LineItemNumber,
        ServiceContract.StartDate,
        ServiceContract.EndDate,
        ServiceContract.Location_Type__c,
        ServiceContract.Product__c,
        ServiceContract.Default_LMRA__c,
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
        LMRA__c,
        Calculated_Duration__c,
        Estimated_Duration__c,
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
    try {
      ContractLineItem contractLine = [
        SELECT Id
        FROM ContractLineItem
        WHERE Id = :contractLineId
        LIMIT 1
      ];

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
    // Query for active PricebookEntry with better error handling
    List<PricebookEntry> pricebookEntries = [
      SELECT Id
      FROM PricebookEntry
      WHERE Product2Id = :contractLine.Product2Id AND IsActive = TRUE
      LIMIT 1
    ];

    if (pricebookEntries.isEmpty()) {
      throw new AuraHandledException(
        'No active price book entry found for the selected product.'
      );
    }

    try {
      // Update PricebookEntryId for both new and existing records
      contractLine.PricebookEntryId = pricebookEntries[0].Id;
      contractLine.UnitPrice = 0;

      if (contractLine.Id == null) {
        insert contractLine;
      } else {
        update contractLine;
      }

      // Return the updated record
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
          Estimated_Duration__c,
          Calculated_Duration__c,
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
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
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

  @AuraEnabled
  public static Boolean prepareContractForNextYear(String contractId) {
    List<ContractLineItem> contractLineItems = [
      SELECT Id, StartDate, EndDate, Recurrence_Pattern__c
      FROM ContractLineItem
      WHERE ServiceContractId = :contractId
    ];

    for (ContractLineItem contractLineItem : contractLineItems) {
      Date startDate = contractLineItem.StartDate.addYears(1);
      Date endDate = contractLineItem.EndDate.addYears(1);
      String recurrencePattern = contractLineItem.Recurrence_Pattern__c;

      //For the recurrence pattern, we just need to check if it contains UNITL= and then we can just add 1 year to the date
      //FREQ=WEEKLY;INTERVAL=1;BYDAY=MO;UNTIL=20241218T000000Z -> FREQ=WEEKLY;INTERVAL=1;BYDAY=MO;UNTIL=20251218T000000Z
      //All we update is the first 4 characters of the date
      System.debug('recurrencePattern: ' + recurrencePattern);
      if (recurrencePattern != null && recurrencePattern.contains('UNTIL=')) {
        recurrencePattern =
          recurrencePattern.substring(0, 4) +
          String.valueOf(startDate.year()) +
          recurrencePattern.substring(8);
        contractLineItem.Recurrence_Pattern__c = recurrencePattern;
      }

      contractLineItem.StartDate = startDate;
      contractLineItem.EndDate = endDate;
    }

    try {
      update contractLineItems;
      firePlatformEvent(contractId);
      return true;
    } catch (Exception e) {
      return false;
    }
  }

  public static void firePlatformEvent(String contractId) {
    //Create a new Platform Event
    Contract_Event__e event = new Contract_Event__e(Record_Id__c = contractId);
    EventBus.publish(event);
  }

  @AuraEnabled
  public static Map<String, String> getProductRecordTypeIds() {
    Map<String, String> recordTypeMap = new Map<String, String>();

    recordTypeMap.put(
      'Service',
      Schema.SObjectType.Product2.getRecordTypeInfosByDeveloperName()
        .get('Service')
        .getRecordTypeId()
    );
    recordTypeMap.put(
      'ServicePackage',
      Schema.SObjectType.Product2.getRecordTypeInfosByDeveloperName()
        .get('Service_Package')
        .getRecordTypeId()
    );

    return recordTypeMap;
  }
}
```

## Methods
### `getContractPackageId(recordId)`

`AURAENABLED`

#### Signature
```apex
public static String getContractPackageId(String recordId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| recordId | String |  |

#### Return Type
**String**

---

### `getServiceContract(recordId)`

`AURAENABLED`

#### Signature
```apex
public static ServiceContract getServiceContract(Id recordId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| recordId | Id |  |

#### Return Type
**[ServiceContract](../objects/ServiceContract.md)**

---

### `getContractLines(recordId)`

`AURAENABLED`

#### Signature
```apex
public static List<ContractLineItem> getContractLines(String recordId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| recordId | String |  |

#### Return Type
**List&lt;ContractLineItem&gt;**

---

### `getWrappedContractLines(recordId)`

`AURAENABLED`

#### Signature
```apex
public static String getWrappedContractLines(String recordId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| recordId | String |  |

#### Return Type
**String**

---

### `deleteContractLine(contractLineId)`

`AURAENABLED`

#### Signature
```apex
public static Boolean deleteContractLine(String contractLineId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| contractLineId | String |  |

#### Return Type
**Boolean**

---

### `saveContractLine(contractLine)`

`AURAENABLED`

#### Signature
```apex
public static ContractLineItem saveContractLine(ContractLineItem contractLine)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| contractLine | [ContractLineItem](../objects/ContractLineItem.md) |  |

#### Return Type
**[ContractLineItem](../objects/ContractLineItem.md)**

---

### `getFinancialAccountName(recordId)`

`AURAENABLED`

#### Signature
```apex
public static String getFinancialAccountName(String recordId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| recordId | String |  |

#### Return Type
**String**

---

### `insertOrRemoveContractLineFinancialAccount(name, contractLineItemId, financialCustomerId, action)`

`AURAENABLED`

#### Signature
```apex
public static void insertOrRemoveContractLineFinancialAccount(String name, Id contractLineItemId, Id financialCustomerId, String action)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| name | String |  |
| contractLineItemId | Id |  |
| financialCustomerId | Id |  |
| action | String |  |

#### Return Type
**void**

---

### `updateServiceContractLocationType(recordId, locationType)`

`AURAENABLED`

#### Signature
```apex
public static void updateServiceContractLocationType(Id recordId, String locationType)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| recordId | Id |  |
| locationType | String |  |

#### Return Type
**void**

---

### `prepareContractForNextYear(contractId)`

`AURAENABLED`

#### Signature
```apex
public static Boolean prepareContractForNextYear(String contractId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| contractId | String |  |

#### Return Type
**Boolean**

---

### `firePlatformEvent(contractId)`

#### Signature
```apex
public static void firePlatformEvent(String contractId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| contractId | String |  |

#### Return Type
**void**

---

### `getProductRecordTypeIds()`

`AURAENABLED`

#### Signature
```apex
public static Map<String,String> getProductRecordTypeIds()
```

#### Return Type
**Map&lt;String,String&gt;**