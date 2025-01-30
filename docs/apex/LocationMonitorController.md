# LocationMonitorController Class

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
public with sharing class LocationMonitorController {
    @AuraEnabled(cacheable=true)
    public static List<TimesheetEntryWrapper> getTimesheetEntries(String recordId) {
        List<TimesheetEntryWrapper> entries = new List<TimesheetEntryWrapper>();

        // Query TimeSheetEntries with their related WorkOrders
        List<TimeSheetEntry> timeSheetEntries = [
                SELECT Id, TimeSheet.Owner.Name, WorkOrder.Id, WorkOrder.WorkOrderNumber,
                        WorkOrder.Latitude, WorkOrder.Longitude,
                        WorkOrder.Checkin_Location__Latitude__s,
                        WorkOrder.Checkin_Location__Longitude__s,
                        WorkOrder.Checkin_Deviation_KM__c,
                        StartTime
                FROM TimeSheetEntry
                WHERE TimeSheet.EndDate = LAST_N_DAYS:1
                AND WorkOrder.Id != null
                AND TimeSheetId = :recordId
                ORDER BY StartTime DESC
        ];

        for(TimeSheetEntry tse : timeSheetEntries) {
            entries.add(new TimesheetEntryWrapper(tse));
        }

        return entries;
    }

    @AuraEnabled
     public static TimeSheet getTimeSheetData(String recordId) {
        TimeSheet timeSheet = [
                SELECT Id, Owner.Name, StartDate, EndDate,
                        Total_Break_Time__c, Total_Hours__c, Total_KM__c, Total_Normal_Hours__c, Total_Break_and_Absent_Time_Minutes__c,
                        Total_Travel_Time__c, Working_Hours_in_Contract__c, Total_Hours_Minus_Breaks__c
                FROM TimeSheet
                WHERE Id = :recordId
        ];

        return timeSheet;
    }

    public class TimesheetEntryWrapper {
        @AuraEnabled public String id;
        @AuraEnabled public String workOrderNumber;
        @AuraEnabled public String technicianName;
        @AuraEnabled public Decimal deltaKm;
        @AuraEnabled public DateTime startTime;
        @AuraEnabled public Decimal workOrderLatitude;
        @AuraEnabled public Decimal workOrderLongitude;
        @AuraEnabled public Decimal checkinLatitude;
        @AuraEnabled public Decimal checkinLongitude;

        public TimesheetEntryWrapper(TimeSheetEntry tse) {
            this.id = tse.Id;
            this.workOrderNumber = tse.WorkOrder.WorkOrderNumber;
            this.technicianName = tse.TimeSheet.Owner.Name;
            this.deltaKm = tse.WorkOrder.Checkin_Deviation_KM__c;
            this.startTime = tse.StartTime;
            this.workOrderLatitude = tse.WorkOrder.Latitude;
            this.workOrderLongitude = tse.WorkOrder.Longitude;
            this.checkinLatitude = tse.WorkOrder.Checkin_Location__Latitude__s;
            this.checkinLongitude = tse.WorkOrder.Checkin_Location__Longitude__s;
        }
    }
}
```

## Methods
### `getTimesheetEntries(recordId)`

`AURAENABLED`

#### Signature
```apex
public static List<TimesheetEntryWrapper> getTimesheetEntries(String recordId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| recordId | String |  |

#### Return Type
**List&lt;TimesheetEntryWrapper&gt;**

---

### `getTimeSheetData(recordId)`

`AURAENABLED`

#### Signature
```apex
public static TimeSheet getTimeSheetData(String recordId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| recordId | String |  |

#### Return Type
**[TimeSheet](../objects/TimeSheet.md)**

## Classes
### TimesheetEntryWrapper Class

#### Fields
##### `id`

`AURAENABLED`

###### Signature
```apex
public id
```

###### Type
String

---

##### `workOrderNumber`

`AURAENABLED`

###### Signature
```apex
public workOrderNumber
```

###### Type
String

---

##### `technicianName`

`AURAENABLED`

###### Signature
```apex
public technicianName
```

###### Type
String

---

##### `deltaKm`

`AURAENABLED`

###### Signature
```apex
public deltaKm
```

###### Type
Decimal

---

##### `startTime`

`AURAENABLED`

###### Signature
```apex
public startTime
```

###### Type
DateTime

---

##### `workOrderLatitude`

`AURAENABLED`

###### Signature
```apex
public workOrderLatitude
```

###### Type
Decimal

---

##### `workOrderLongitude`

`AURAENABLED`

###### Signature
```apex
public workOrderLongitude
```

###### Type
Decimal

---

##### `checkinLatitude`

`AURAENABLED`

###### Signature
```apex
public checkinLatitude
```

###### Type
Decimal

---

##### `checkinLongitude`

`AURAENABLED`

###### Signature
```apex
public checkinLongitude
```

###### Type
Decimal

#### Constructors
##### `TimesheetEntryWrapper(tse)`

###### Signature
```apex
public TimesheetEntryWrapper(TimeSheetEntry tse)
```

###### Parameters
| Name | Type | Description |
|------|------|-------------|
| tse | [TimeSheetEntry](../objects/TimeSheetEntry.md) |  |