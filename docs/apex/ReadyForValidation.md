# ReadyForValidation Class

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
public with sharing class ReadyForValidation {
  @TestVisible
  private static List<ATAK_Project__c> getATAKProjects(String projectCode) {
    return [SELECT Id FROM ATAK_Project__c WHERE SubProject_ATAK__c = :projectCode];
  }

  @TestVisible
  private static List<ATAK_Project__c> getATAKProjectsForNotification(
    Set<String> projectCodes
  ) {
    return [
      SELECT Id, SubProject_ATAK__c, OwnerId, Service_Territory__r.Main_Responsible__c
      FROM ATAK_Project__c
      WHERE SubProject_ATAK__c IN :projectCodes
    ];
  }

  @AuraEnabled
  public static Boolean setReadyForValidation(Id recordId) {
    ServiceContract sc = [
      SELECT
        Id,
        Name,
        ApprovalStatus,
        (SELECT Id, Project_Code__c FROM ContractLineItems)
      FROM ServiceContract
      WHERE Id = :recordId
    ];

    // First validate all project codes
    for (ContractLineItem lineItem : sc.ContractLineItems) {
      List<ATAK_Project__c> projects = getATAKProjects(
        lineItem.Project_Code__c
      );

      if (projects.isEmpty()) {
        throw new AuraHandledException(
          'Project Code: ' + lineItem.Project_Code__c + ' does not exist.'
        );
      }
    }

    // Get project codes for notification
    Set<String> projectCodes = new Set<String>();
    for (ContractLineItem cli : sc.ContractLineItems) {
      projectCodes.add(cli.Project_Code__c);
    }

    System.debug('projectCodes: ' + projectCodes);

    // Get owners to notify
    Set<String> ownersToNotify = new Set<String>();
    for (ATAK_Project__c proj : getATAKProjectsForNotification(projectCodes)) {
      if(proj.Service_Territory__r.Main_Responsible__c != null){
        ownersToNotify.add(proj.Service_Territory__r.Main_Responsible__c);
      }
    }

    System.debug('ownersToNotify: ' + ownersToNotify);

    // Get notification type
    CustomNotificationType notificationType = [
      SELECT Id, DeveloperName
      FROM CustomNotificationType
      WHERE DeveloperName = 'Service_Contract_Approval_Notification'
      LIMIT 1
    ];

    System.debug('notificationType: ' + notificationType);

    // Send notification
    Messaging.CustomNotification notification = new Messaging.CustomNotification();
    notification.setTitle('Service Contract Ready for Validation');
    notification.setBody(
      'The Service Contract ' + sc.Name + ' requires your validation.'
    );
    notification.setNotificationTypeId(notificationType.Id);
    notification.setTargetId(sc.Id);

    try {
      notification.send(ownersToNotify);
    } catch (Exception e) {
      throw new AuraHandledException(
        'Failed to send notification: ' + e.getMessage()
      );
    }

    return true;
  }
}
```

## Methods
### `getATAKProjects(projectCode)`

`TESTVISIBLE`

#### Signature
```apex
private static List<ATAK_Project__c> getATAKProjects(String projectCode)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| projectCode | String |  |

#### Return Type
**List&lt;ATAK_Project__c&gt;**

---

### `getATAKProjectsForNotification(projectCodes)`

`TESTVISIBLE`

#### Signature
```apex
private static List<ATAK_Project__c> getATAKProjectsForNotification(Set<String> projectCodes)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| projectCodes | Set&lt;String&gt; |  |

#### Return Type
**List&lt;ATAK_Project__c&gt;**

---

### `setReadyForValidation(recordId)`

`AURAENABLED`

#### Signature
```apex
public static Boolean setReadyForValidation(Id recordId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| recordId | Id |  |

#### Return Type
**Boolean**