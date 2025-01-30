# SFS_WorkOrderCreatorController Class

Created by fpardon on 11/12/2024.

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * Created by fpardon on 11/12/2024.
 */

public with sharing class SFS_WorkOrderCreatorController {

    @AuraEnabled
    public static List<String> getWasteTypePicklist() {


        try {
            Schema.DescribeFieldResult fieldResult = Account.Type_of_Waste__c.getDescribe();
            List<Schema.PicklistEntry> picklistValues = fieldResult.getPicklistValues();
            List<String> options = new List<String>();

            for (Schema.PicklistEntry entry : picklistValues) {
                if (entry.isActive()) {
                    options.add(entry.getValue());
                }
            }
            System.debug('options: ' + options);
            return options;
        } catch (Exception e) {
            System.debug('Error: ' + e.getMessage());
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Account> getWasteDepots(List<String> wasteTypes) {
        try {
            String wasteTypesQuery = '';
            for(String wasteType : wasteTypes) {
                if(wasteTypesQuery != '') {
                    wasteTypesQuery += ' OR ';
                }
                wasteTypesQuery += 'Type_of_Waste__c INCLUDES (\'' + String.escapeSingleQuotes(wasteType) + '\')';
            }

            String query = 'SELECT Id, Name, Contract__c, Type_of_Waste__c, ' +
                    'ShippingPostalCode, ShippingCity ' +
                    'FROM Account ' +
                    'WHERE (' + wasteTypesQuery + ') ' +
                    'WITH SECURITY_ENFORCED ' +
                    'LIMIT 50';

            System.debug('Query: ' + query);
            return Database.query(query);
        } catch (Exception e) {
            System.debug('Error: ' + e.getMessage());
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Id createWasteVisitWorkOrder(Id parentRecordId, Id depotId, String wasteTypes) {

        System.debug('parentRecordId: ' + parentRecordId);
        System.debug('depotId: ' + depotId);
        System.debug('wasteTypes: ' + wasteTypes);

        try {

            //Get the WorkOrder from the ServiceAppointment
            ServiceAppointment serviceAppointment = [
                    SELECT Id, ParentRecordId
                    FROM ServiceAppointment
                    WHERE Id = :parentRecordId
                    WITH SECURITY_ENFORCED
                    LIMIT 1
            ];


            // Get the parent work order info
            WorkOrder parentWO = [
                    SELECT Id, MaintenancePlanId, ServiceTerritoryId,
                            AssetId, SuggestedMaintenanceDate, StartDate, EndDate
                    FROM WorkOrder
                    WHERE Id = :serviceAppointment.ParentRecordId
                    WITH SECURITY_ENFORCED
                    LIMIT 1
            ];

            System.debug('parentWO: ' + parentWO);

            // Get the work type
            WorkType wasteManagementWT = [
                    SELECT Id
                    FROM WorkType
                    WHERE Name = 'Waste Management'
                    WITH SECURITY_ENFORCED
                    LIMIT 1
            ];

            System.debug('wasteManagementWT: ' + wasteManagementWT);

            // Create the waste visit work order
            WorkOrder wo = new WorkOrder(
                    ParentWorkOrderId = parentWO.Id,
                    AccountId = depotId,
                    MaintenancePlanId = parentWO.MaintenancePlanId,
                    Subject = 'Waste Depot Visit',
                    ServiceTerritoryId = parentWO.ServiceTerritoryId,
                    WorkTypeId = wasteManagementWT.Id,
                    AssetId = parentWO.AssetId,
                    Waste_Visit_Planned__c = true,
                    Waste_to_Drop_Off__c = wasteTypes,
                    Work_Order_Type__c = 'Waste Depot Visit',
                    SuggestedMaintenanceDate = parentWO.SuggestedMaintenanceDate,
                    StartDate = parentWO.StartDate,
                    EndDate = parentWO.EndDate
            );

            insert wo;
            return wo.Id;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Account> getDepots() {
        try {
            return [
                    SELECT Id, Name
                    FROM Account
                    WHERE Sub_Type__c = 'Depot KGC'
                    WITH SECURITY_ENFORCED
                    ORDER BY Name
                    LIMIT 100
            ];
        } catch (Exception e) {
            System.debug('Error: ' + e.getMessage());
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Id createDepotVisitWorkOrder(
            Id parentRecordId,
            Id depotId,
            String subject,
            String dropOffItems,
            String pickUpItems
    ) {
        System.debug('parentRecordId: ' + parentRecordId);
        System.debug('depotId: ' + depotId);
        System.debug('subject: ' + subject);
        System.debug('dropOffItems: ' + dropOffItems);
        System.debug('pickUpItems: ' + pickUpItems);

        try {
            //Get the WorkOrder from the ServiceAppointment
            ServiceAppointment serviceAppointment = [
                    SELECT Id, ParentRecordId
                    FROM ServiceAppointment
                    WHERE Id = :parentRecordId
                    WITH SECURITY_ENFORCED
                    LIMIT 1
            ];

            // Get the parent work order info
            WorkOrder parentWO = [
                    SELECT Id, MaintenancePlanId, ServiceTerritoryId,
                            ServiceContractId, AssetId, SuggestedMaintenanceDate, StartDate, EndDate
                    FROM WorkOrder
                    WHERE Id = :serviceAppointment.ParentRecordId
                    WITH SECURITY_ENFORCED
                    LIMIT 1
            ];

            System.debug('parentWO: ' + parentWO);

            // Get the work type
            WorkType depotWT = [
                    SELECT Id
                    FROM WorkType
                    WHERE Name = 'Internal Depot'
                    WITH SECURITY_ENFORCED
                    LIMIT 1
            ];

            System.debug('depotWT: ' + depotWT);

            // Create depot visit work order
            WorkOrder wo = new WorkOrder(
                    ParentWorkOrderId = parentWO.Id,
                    AccountId = depotId,
                    MaintenancePlanId = parentWO.MaintenancePlanId,
                    Subject = subject,
                    ServiceTerritoryId = parentWO.ServiceTerritoryId,
                    ServiceContractId = parentWO.ServiceContractId,
                    WorkTypeId = depotWT.Id,
                    AssetId = parentWO.AssetId,
                    Depot_Visit_Planned__c = true,
                    Drop_Off_Items__c = dropOffItems,
                    Pick_Up_Items__c = pickUpItems,
                    Work_Order_Type__c = 'Depot Visit',
                    SuggestedMaintenanceDate = parentWO.SuggestedMaintenanceDate,
                    StartDate = parentWO.StartDate,
                    EndDate = parentWO.EndDate
            );

            insert wo;
            return wo.Id;
        } catch (Exception e) {
            System.debug('Error: ' + e.getMessage());
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static ServiceAppointment getServiceAppointments(String appointmentId) {
        return [
                SELECT
                        Id,
                        AppointmentNumber,
                        Status,
                        SchedStartTime,
                        SchedEndTime,
                        ParentRecordId,
                        ParentRecordType,
                        TYPEOF ParentRecord
                                WHEN WorkOrder THEN
                                Id,
                                Subject,
                                Description,
                                Priority,
                                Status,
                                ServiceTerritoryId,
                                Duration,
                                DurationType,
                                AccountId,
                                Account.Name
                        END
                FROM ServiceAppointment
                WHERE Id = :appointmentId
                WITH SECURITY_ENFORCED
                LIMIT 1
        ];
    }

    @AuraEnabled
    public static List<String> getReworkReasons() {
        try {
            Schema.DescribeFieldResult fieldResult = WorkOrder.Rework_reasons__c.getDescribe();
            List<Schema.PicklistEntry> picklistValues = fieldResult.getPicklistValues();
            List<String> options = new List<String>();

            for (Schema.PicklistEntry entry : picklistValues) {
                if (entry.isActive()) {
                    options.add(entry.getValue());
                }
            }
            return options;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static WorkOrder getExistingTasks(Id serviceAppointmentId) {

        try {

            ServiceAppointment serviceAppointment = [
                    SELECT Id, ParentRecordId
                    FROM ServiceAppointment
                    WHERE Id = :serviceAppointmentId
                    WITH SECURITY_ENFORCED
                    LIMIT 1
            ];

            return [
                    SELECT Id, WorkOrderNumber,
                    (SELECT Id, Description
                    FROM WorkOrderLineItems
                    ORDER BY CreatedDate ASC)
                    FROM WorkOrder
                    WHERE Id = :serviceAppointment.ParentRecordId
                    WITH SECURITY_ENFORCED
                    LIMIT 1
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Id createReworkOrder(
            Id parentRecordId,
            String subject,
            String reworkReason,
            List<Id> selectedTaskIds,
            List<String> newTasks
    ) {
        try {
            //Get the WorkOrder from the ServiceAppointment
            ServiceAppointment serviceAppointment = [
                    SELECT Id, ParentRecordId
                    FROM ServiceAppointment
                    WHERE Id = :parentRecordId
                    WITH SECURITY_ENFORCED
                    LIMIT 1
            ];

            // Get parent work order info
            WorkOrder parentWO = [
                    SELECT Id, AccountId, AssetId, MaintenancePlanId,
                            ServiceContractId, ServiceTerritoryId, WorkOrderNumber, SuggestedMaintenanceDate, StartDate, EndDate
                    FROM WorkOrder
                    WHERE Id = :serviceAppointment.ParentRecordId
                    WITH SECURITY_ENFORCED
                    LIMIT 1
            ];

            // Get work type
            WorkType reworkWT = [
                    SELECT Id
                    FROM WorkType
                    WHERE Name = 'Rework'
                    WITH SECURITY_ENFORCED
                    LIMIT 1
            ];

            // Create rework order
            WorkOrder wo = new WorkOrder(
                    ParentWorkOrderId = parentWO.Id,
                    AccountId = parentWO.AccountId,
                    AssetId = parentWO.AssetId,
                    MaintenancePlanId = parentWO.MaintenancePlanId,
                    ServiceContractId = parentWO.ServiceContractId,
                    ServiceTerritoryId = parentWO.ServiceTerritoryId,
                    Subject = subject,
                    WorkTypeId = reworkWT.Id,
                    Rework_Planned__c = true,
                    Rework_reasons__c = reworkReason,
                    Rework_for_Work_Order__c = parentWO.Id,
                    SuggestedMaintenanceDate = parentWO.SuggestedMaintenanceDate,
                    StartDate = parentWO.StartDate,
                    EndDate = parentWO.EndDate
            );

            insert wo;

            List<WorkOrderLineItem> linesToInsert = new List<WorkOrderLineItem>();

            // Add selected existing tasks
            if (!selectedTaskIds.isEmpty()) {
                for (WorkOrderLineItem existingLine : [
                        SELECT Description
                        FROM WorkOrderLineItem
                        WHERE Id IN :selectedTaskIds
                        WITH SECURITY_ENFORCED
                ]) {
                    linesToInsert.add(new WorkOrderLineItem(
                            WorkOrderId = wo.Id,
                            Description = existingLine.Description,
                            Status = 'New'
                    ));
                }
            }

            // Add new tasks
            if (!newTasks.isEmpty()) {
                for (String taskDescription : newTasks) {
                    linesToInsert.add(new WorkOrderLineItem(
                            WorkOrderId = wo.Id,
                            Description = taskDescription,
                            Status = 'New'
                    ));
                }
            }

            if (!linesToInsert.isEmpty()) {
                insert linesToInsert;
            }

            return wo.Id;
        } catch (Exception e) {
            System.debug('Error: ' + e.getMessage());
            throw new AuraHandledException(e.getMessage());
        }
    }

}
```

## Methods
### `getWasteTypePicklist()`

`AURAENABLED`

#### Signature
```apex
public static List<String> getWasteTypePicklist()
```

#### Return Type
**List&lt;String&gt;**

---

### `getWasteDepots(wasteTypes)`

`AURAENABLED`

#### Signature
```apex
public static List<Account> getWasteDepots(List<String> wasteTypes)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| wasteTypes | List&lt;String&gt; |  |

#### Return Type
**List&lt;Account&gt;**

---

### `createWasteVisitWorkOrder(parentRecordId, depotId, wasteTypes)`

`AURAENABLED`

#### Signature
```apex
public static Id createWasteVisitWorkOrder(Id parentRecordId, Id depotId, String wasteTypes)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| parentRecordId | Id |  |
| depotId | Id |  |
| wasteTypes | String |  |

#### Return Type
**Id**

---

### `getDepots()`

`AURAENABLED`

#### Signature
```apex
public static List<Account> getDepots()
```

#### Return Type
**List&lt;Account&gt;**

---

### `createDepotVisitWorkOrder(parentRecordId, depotId, subject, dropOffItems, pickUpItems)`

`AURAENABLED`

#### Signature
```apex
public static Id createDepotVisitWorkOrder(Id parentRecordId, Id depotId, String subject, String dropOffItems, String pickUpItems)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| parentRecordId | Id |  |
| depotId | Id |  |
| subject | String |  |
| dropOffItems | String |  |
| pickUpItems | String |  |

#### Return Type
**Id**

---

### `getServiceAppointments(appointmentId)`

`AURAENABLED`

#### Signature
```apex
public static ServiceAppointment getServiceAppointments(String appointmentId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| appointmentId | String |  |

#### Return Type
**[ServiceAppointment](../objects/ServiceAppointment.md)**

---

### `getReworkReasons()`

`AURAENABLED`

#### Signature
```apex
public static List<String> getReworkReasons()
```

#### Return Type
**List&lt;String&gt;**

---

### `getExistingTasks(serviceAppointmentId)`

`AURAENABLED`

#### Signature
```apex
public static WorkOrder getExistingTasks(Id serviceAppointmentId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| serviceAppointmentId | Id |  |

#### Return Type
**[WorkOrder](../objects/WorkOrder.md)**

---

### `createReworkOrder(parentRecordId, subject, reworkReason, selectedTaskIds, newTasks)`

`AURAENABLED`

#### Signature
```apex
public static Id createReworkOrder(Id parentRecordId, String subject, String reworkReason, List<Id> selectedTaskIds, List<String> newTasks)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| parentRecordId | Id |  |
| subject | String |  |
| reworkReason | String |  |
| selectedTaskIds | List&lt;Id&gt; |  |
| newTasks | List&lt;String&gt; |  |

#### Return Type
**Id**