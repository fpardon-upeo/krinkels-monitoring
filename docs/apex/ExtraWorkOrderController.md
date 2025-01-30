# ExtraWorkOrderController Class

Created by Frederik on 1/6/2025. 
Description: 
Change Log: 
Dependencies:

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
* Created by Frederik on 1/6/2025.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class ExtraWorkOrderController {

    public class ExternalWorkOrderWrapper {
        @AuraEnabled public String workOrderId;  // Add @AuraEnabled and public
        @AuraEnabled public String serviceAppointmentId;  // Add @AuraEnabled and public
    }

    @AuraEnabled
    public static ExternalWorkOrderWrapper createExtraWorkOrder(String subject, String parentWorkOrderId) {

        System.debug('Creating Internal Work Order');
        System.debug('subject: ' + subject);
        System.debug('parentWorkOrderId: ' + parentWorkOrderId);

        String workTypeId = getWorkTypeId();

        WorkOrder parentWorkOrder = getParentWorkOrder(parentWorkOrderId);

        WorkOrder internalWorkOrder = new WorkOrder();

        if(parentWorkOrder.MaintenancePlan.ServiceContract.Contract_type__c == 'Progress statements'){
            System.debug('Creating Internal Work Order with existing asset');
            internalWorkOrder = cloneExistingWorkOrder(parentWorkOrder, workTypeId);
        } else {
            System.debug('Creating Internal Work Order with new asset');
            internalWorkOrder = cloneExistingWorkOrderWithNewAsset(parentWorkOrder, workTypeId);
        }

        createWorkOrderLine(internalWorkOrder.Id, subject);
        ExternalWorkOrderWrapper externalWorkOrderWrapper = new ExternalWorkOrderWrapper();
        String assignedResource = InternalWorkOrderController.assignServiceResource(InternalWorkOrderController.getServiceResourceId(), internalWorkOrder.Id);
        if(assignedResource != null) {
            externalWorkOrderWrapper.workOrderId = internalWorkOrder.Id;
            externalWorkOrderWrapper.serviceAppointmentId = assignedResource;
            System.debug('Internal Work Order Created');
            System.debug('internalWorkOrderWrapper: ' + externalWorkOrderWrapper);
            return externalWorkOrderWrapper;
        } else {
            return null;
        }
    }

    private static WorkOrder cloneExistingWorkOrder(WorkOrder parentWorkOrder, String workTypeId) {
        WorkOrder internalWorkOrder = new WorkOrder();
        internalWorkOrder.Subject = 'Extra Work - ' + Date.today().day() + '/' + Date.today().month() + '/' + Date.today().year();
        internalWorkOrder.WorkTypeId = workTypeId;
        internalWorkOrder.AssetId = parentWorkOrder.AssetId;
        internalWorkOrder.ServiceTerritoryId = parentWorkOrder.ServiceTerritoryId;
        internalWorkOrder.ParentWorkOrderId = parentWorkOrder.Id;
        internalWorkOrder.SuggestedMaintenanceDate = Date.today();
        internalWorkOrder.MaintenancePlanId = parentWorkOrder.MaintenancePlanId;
        internalWorkOrder.AccountId = parentWorkOrder.AccountId;
        internalWorkOrder.Work_Order_Type__c = 'Production';
        internalWorkOrder.Status = 'Unscheduled';
        internalWorkOrder.Country = parentWorkOrder.Country;
        internalWorkOrder.City = parentWorkOrder.City;
        internalWorkOrder.PostalCode = parentWorkOrder.PostalCode;
        internalWorkOrder.Street = parentWorkOrder.Street;

        insert internalWorkOrder;
        return internalWorkOrder;
    }

    private static WorkOrder cloneExistingWorkOrderWithNewAsset(WorkOrder parentWorkOrder, String workTypeId) {

        Product2 extraWorkProduct = [SELECT Id FROM Product2 WHERE Name = 'Extra Work'];
        ATAK_Project__c project = [SELECT Id FROM ATAK_Project__c WHERE Name = 'DUMMYEXTRA'];

        Asset newAsset = new Asset();
        newAsset.Product2Id = extraWorkProduct.Id;
        newAsset.AccountId = parentWorkOrder.AccountId;
        newAsset.ATAK_Project__c = project.Id;
        newAsset.Service_Territory__c = parentWorkOrder.ServiceTerritoryId;
        newAsset.Name = 'Extra Work - ' + Date.today().day() + '/' + Date.today().month() + '/' + Date.today().year();
        insert newAsset;


        WorkOrder internalWorkOrder = new WorkOrder();
        internalWorkOrder.Subject = 'Extra Work - ' + Date.today().day() + '/' + Date.today().month() + '/' + Date.today().year();
        internalWorkOrder.WorkTypeId = workTypeId;
        internalWorkOrder.AssetId = newAsset.Id;
        internalWorkOrder.ServiceTerritoryId = parentWorkOrder.ServiceTerritoryId;
        internalWorkOrder.ParentWorkOrderId = parentWorkOrder.Id;
        internalWorkOrder.SuggestedMaintenanceDate = Date.today();
        internalWorkOrder.MaintenancePlanId = parentWorkOrder.MaintenancePlanId;
        internalWorkOrder.AccountId = parentWorkOrder.AccountId;
        internalWorkOrder.Work_Order_Type__c = 'Production';
        internalWorkOrder.Status = 'Unscheduled';
        internalWorkOrder.Country = parentWorkOrder.Country;
        internalWorkOrder.City = parentWorkOrder.City;
        internalWorkOrder.PostalCode = parentWorkOrder.PostalCode;
        internalWorkOrder.Street = parentWorkOrder.Street;

        insert internalWorkOrder;
        return internalWorkOrder;
    }

    private static String createWorkOrderLine(String workOrderId, String subject){

        WorkOrderLineItem workOrderLineItem = new WorkOrderLineItem();
        workOrderLineItem.WorkOrderId = workOrderId;
        workOrderLineItem.Description = subject;
        workOrderLineItem.Subject = subject;
        insert workOrderLineItem;
        return workOrderLineItem.Id;
    }


    private static WorkOrder getParentWorkOrder(String parentWorkOrderId) {
        System.debug('Getting Parent Work Order');
        System.debug('parentWorkOrderId: ' + parentWorkOrderId);
        WorkOrder parentWorkOrder = [SELECT Id, Subject, AccountId, Account.Name, Street, City, PostalCode, Country, MaintenancePlan.ServiceContract.Contract_type__c, WorkTypeId, AssetId, ServiceTerritoryId, MaintenancePlanId FROM WorkOrder WHERE Id = :parentWorkOrderId];
        return parentWorkOrder;
    }

    private static String getWorkTypeId() {
        return [SELECT Id FROM WorkType WHERE Name = 'Extra Work'].Id;
    }

}
```

## Methods
### `createExtraWorkOrder(subject, parentWorkOrderId)`

`AURAENABLED`

#### Signature
```apex
public static ExternalWorkOrderWrapper createExtraWorkOrder(String subject, String parentWorkOrderId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| subject | String |  |
| parentWorkOrderId | String |  |

#### Return Type
**ExternalWorkOrderWrapper**

---

### `cloneExistingWorkOrder(parentWorkOrder, workTypeId)`

#### Signature
```apex
private static WorkOrder cloneExistingWorkOrder(WorkOrder parentWorkOrder, String workTypeId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| parentWorkOrder | [WorkOrder](../objects/WorkOrder.md) |  |
| workTypeId | String |  |

#### Return Type
**[WorkOrder](../objects/WorkOrder.md)**

---

### `cloneExistingWorkOrderWithNewAsset(parentWorkOrder, workTypeId)`

#### Signature
```apex
private static WorkOrder cloneExistingWorkOrderWithNewAsset(WorkOrder parentWorkOrder, String workTypeId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| parentWorkOrder | [WorkOrder](../objects/WorkOrder.md) |  |
| workTypeId | String |  |

#### Return Type
**[WorkOrder](../objects/WorkOrder.md)**

---

### `createWorkOrderLine(workOrderId, subject)`

#### Signature
```apex
private static String createWorkOrderLine(String workOrderId, String subject)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| workOrderId | String |  |
| subject | String |  |

#### Return Type
**String**

---

### `getParentWorkOrder(parentWorkOrderId)`

#### Signature
```apex
private static WorkOrder getParentWorkOrder(String parentWorkOrderId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| parentWorkOrderId | String |  |

#### Return Type
**[WorkOrder](../objects/WorkOrder.md)**

---

### `getWorkTypeId()`

#### Signature
```apex
private static String getWorkTypeId()
```

#### Return Type
**String**

## Classes
### ExternalWorkOrderWrapper Class

#### Fields
##### `workOrderId`

`AURAENABLED`

###### Signature
```apex
public workOrderId
```

###### Type
String

---

##### `serviceAppointmentId`

`AURAENABLED`

###### Signature
```apex
public serviceAppointmentId
```

###### Type
String