# ServiceContractHandler Class

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
public class ServiceContractHandler {
  public static void handleApprovalStatusChange(
    List<ServiceContract> newContracts,
    Map<Id, ServiceContract> oldMap
  ) {
    Set<String> projectCodes = new Set<String>();
    Set<Id> contractsInApproval = new Set<Id>();

    // Collect relevant ServiceContracts
    for (ServiceContract sc : newContracts) {
      ServiceContract oldSc = oldMap.get(sc.Id);
      if (
        sc.ApprovalStatus == 'In Approval Process' &&
        oldSc.ApprovalStatus != 'In Approval Process'
      ) {
        contractsInApproval.add(sc.Id);
      }
    }

    // Get all related ContractLineItems and their project codes
    for (ContractLineItem cli : [
      SELECT Id, Project_Code__c, ServiceContractId
      FROM ContractLineItem
      WHERE ServiceContractId IN :contractsInApproval
    ]) {
      projectCodes.add(cli.Project_Code__c);
    }

    // Query ATAK_Project__c records that match the project codes
    Set<String> ownersToNotify = new Set<String>();

    for (ATAK_Project__c proj : [
      SELECT Id, SubProject_ATAK__c, OwnerId
      FROM ATAK_Project__c
      WHERE SubProject_ATAK__c IN :projectCodes
    ]) {
      //As it's a set we don't need to verify for duplicates
      ownersToNotify.add(proj.OwnerId);
    }

    CustomNotificationType notificationType = [
      SELECT Id, DeveloperName
      FROM CustomNotificationType
      WHERE DeveloperName = 'Service_Contract_Approval_Notification'
      LIMIT 1
    ];

    // Get the Service Contracts we need
    Map<Id, ServiceContract> contractsToProcess = new Map<Id, ServiceContract>();
    for (ServiceContract sc : newContracts) {
      if (contractsInApproval.contains(sc.Id)) {
        contractsToProcess.put(sc.Id, sc);
      }
    }

    // Handle each contract that entered approval
    for (ServiceContract sc : contractsToProcess.values()) {
      Messaging.CustomNotification notification = new Messaging.CustomNotification();
      notification.setTitle('Service Contract Ready for Approval');
      notification.setBody('Service Contract requires your approval.');
      notification.setNotificationTypeId(notificationType.Id);
      notification.setTargetId(sc.Id);

      try {
        notification.send(ownersToNotify);
      } catch (Exception e) {
        System.debug(
          'Failed to send notification for Service Contract ' +
            sc.Id +
            ': ' +
            e.getMessage()
        );
      }
    }
  }
}
```

## Methods
### `handleApprovalStatusChange(newContracts, oldMap)`

#### Signature
```apex
public static void handleApprovalStatusChange(List<ServiceContract> newContracts, Map<Id,ServiceContract> oldMap)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| newContracts | List&lt;ServiceContract&gt; |  |
| oldMap | Map&lt;Id,ServiceContract&gt; |  |

#### Return Type
**void**