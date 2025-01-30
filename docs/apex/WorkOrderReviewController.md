# WorkOrderReviewController Class

Created by Frederik on 1/7/2025. 
Description: 
Change Log: 
Dependencies:

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
* Created by Frederik on 1/7/2025.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class WorkOrderReviewController {

    public class WorkOrderWrapper {
        @AuraEnabled public String Id;
        @AuraEnabled public String WorkOrderNumber;
        @AuraEnabled public String WorkOrderLink;
        @AuraEnabled public String Status;
        @AuraEnabled public String PDFStatus;
        @AuraEnabled public String Description;
        @AuraEnabled public Datetime StartDate;
        @AuraEnabled public Datetime EndDate;
        @AuraEnabled public String AccountId;
        @AuraEnabled public String AccountName;
        @AuraEnabled public String ContactId;
        @AuraEnabled public String ContactName;
        @AuraEnabled public Datetime AppointmentScheduledStartTime;
        @AuraEnabled public Datetime AppointmentScheduledEndTime;
        @AuraEnabled public Datetime AppointmentActualStartTime;
        @AuraEnabled public Datetime AppointmentActualEndTime;
        @AuraEnabled public String AppointmentStatus;
        @AuraEnabled public Decimal AppointmentDuration;

    }


    @AuraEnabled
    public static List<WorkOrderWrapper> getWorkOrders(String timesheetId) {

        List<TimeSheetEntry> timeSheetEntries = [SELECT Id, WorkOrderId FROM TimeSheetEntry WHERE TimeSheetId = :timesheetId];
        List<String> workOrderIds = new List<String>();

        for(TimeSheetEntry entry : timeSheetEntries) {
            if(entry.WorkOrderId != null && !workOrderIds.contains(entry.WorkOrderId)) {
                workOrderIds.add(entry.WorkOrderId);
            }
        }

        List<WorkOrder> workOrders = [SELECT Id, WorkOrderNumber, Status, PDF_Status__c, Description, StartDate, EndDate, Account.Name, AccountId, Contact.Name, ContactId, Contact.Email FROM WorkOrder WHERE Id IN :workOrderIds];
        List<ServiceAppointment> serviceAppointments = [SELECT Id, ParentRecordId, SchedStartTime, SchedEndTime, ActualStartTime, ActualEndTime, Status, Duration, Description, Subject FROM ServiceAppointment WHERE ParentRecordId IN :workOrderIds];


        List<WorkOrderWrapper> workOrderWrappers = new List<WorkOrderWrapper>();

        for(WorkOrder workOrder : workOrders) {
            WorkOrderWrapper wrapper = new WorkOrderWrapper();
            wrapper.Id = workOrder.Id;
            wrapper.WorkOrderNumber = workOrder.WorkOrderNumber;
            wrapper.Status = workOrder.Status;
            wrapper.PDFStatus = workOrder.PDF_Status__c;
            wrapper.Description = workOrder.Description;
            wrapper.StartDate = workOrder.StartDate;
            wrapper.EndDate = workOrder.EndDate;
            wrapper.AccountId = workOrder.AccountId;
            wrapper.AccountName = workOrder.Account.Name;
            wrapper.ContactId = workOrder.ContactId;
            wrapper.ContactName = workOrder.Contact.Name;
            wrapper.WorkOrderLink = '/' + workOrder.Id;

            for(ServiceAppointment serviceAppointment : serviceAppointments) {
                if(serviceAppointment.ParentRecordId == workOrder.Id) {
                    wrapper.AppointmentScheduledStartTime = serviceAppointment.SchedStartTime;
                    wrapper.AppointmentScheduledEndTime = serviceAppointment.SchedEndTime;
                    wrapper.AppointmentActualStartTime = serviceAppointment.ActualStartTime;
                    wrapper.AppointmentActualEndTime = serviceAppointment.ActualEndTime;
                    wrapper.AppointmentStatus = serviceAppointment.Status;
                    wrapper.AppointmentDuration = serviceAppointment.Duration;
                }
            }

            workOrderWrappers.add(wrapper);
        }

        System.debug('workOrderWrappers: ' + workOrderWrappers.size());
        return workOrderWrappers;

    }
}
```

## Methods
### `getWorkOrders(timesheetId)`

`AURAENABLED`

#### Signature
```apex
public static List<WorkOrderWrapper> getWorkOrders(String timesheetId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| timesheetId | String |  |

#### Return Type
**List&lt;WorkOrderWrapper&gt;**

## Classes
### WorkOrderWrapper Class

#### Fields
##### `Id`

`AURAENABLED`

###### Signature
```apex
public Id
```

###### Type
String

---

##### `WorkOrderNumber`

`AURAENABLED`

###### Signature
```apex
public WorkOrderNumber
```

###### Type
String

---

##### `WorkOrderLink`

`AURAENABLED`

###### Signature
```apex
public WorkOrderLink
```

###### Type
String

---

##### `Status`

`AURAENABLED`

###### Signature
```apex
public Status
```

###### Type
String

---

##### `PDFStatus`

`AURAENABLED`

###### Signature
```apex
public PDFStatus
```

###### Type
String

---

##### `Description`

`AURAENABLED`

###### Signature
```apex
public Description
```

###### Type
String

---

##### `StartDate`

`AURAENABLED`

###### Signature
```apex
public StartDate
```

###### Type
Datetime

---

##### `EndDate`

`AURAENABLED`

###### Signature
```apex
public EndDate
```

###### Type
Datetime

---

##### `AccountId`

`AURAENABLED`

###### Signature
```apex
public AccountId
```

###### Type
String

---

##### `AccountName`

`AURAENABLED`

###### Signature
```apex
public AccountName
```

###### Type
String

---

##### `ContactId`

`AURAENABLED`

###### Signature
```apex
public ContactId
```

###### Type
String

---

##### `ContactName`

`AURAENABLED`

###### Signature
```apex
public ContactName
```

###### Type
String

---

##### `AppointmentScheduledStartTime`

`AURAENABLED`

###### Signature
```apex
public AppointmentScheduledStartTime
```

###### Type
Datetime

---

##### `AppointmentScheduledEndTime`

`AURAENABLED`

###### Signature
```apex
public AppointmentScheduledEndTime
```

###### Type
Datetime

---

##### `AppointmentActualStartTime`

`AURAENABLED`

###### Signature
```apex
public AppointmentActualStartTime
```

###### Type
Datetime

---

##### `AppointmentActualEndTime`

`AURAENABLED`

###### Signature
```apex
public AppointmentActualEndTime
```

###### Type
Datetime

---

##### `AppointmentStatus`

`AURAENABLED`

###### Signature
```apex
public AppointmentStatus
```

###### Type
String

---

##### `AppointmentDuration`

`AURAENABLED`

###### Signature
```apex
public AppointmentDuration
```

###### Type
Decimal