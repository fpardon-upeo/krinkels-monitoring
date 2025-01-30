# WorkOrderLocationQueueable Class

**Implements**

Queueable

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
public without sharing class WorkOrderLocationQueueable implements Queueable {
    private Map<Id, Location> workOrderLocations;

    public class Location {
        public Decimal latitude;
        public Decimal longitude;

        public Location(Decimal latitude, Decimal longitude) {
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }

    public WorkOrderLocationQueueable(Map<Id, Location> workOrderLocations) {
        this.workOrderLocations = workOrderLocations;
    }

    public void execute(QueueableContext context) {
        List<WorkOrder> workOrdersToUpdate = new List<WorkOrder>();
        List<WorkOrder> workOrders = [
                SELECT Id, Asset.Service_Territory__c,
                        Account.ShippingLatitude, Account.ShippingLongitude
                FROM WorkOrder
                WHERE Id IN :workOrderLocations.keySet()
        ];

        // Store Asset Territory mapping
        Map<Id, Id> workOrderAssetTerritory = new Map<Id, Id>();
        for(WorkOrder wo : workOrders) {
            workOrderAssetTerritory.put(wo.Id, wo.Asset.Service_Territory__c);
        }

        // Get unique locations to minimize API calls
        Map<String, Id> locationToTerritoryMap = new Map<String, Id>();
        for(Id woId : workOrderLocations.keySet()) {
            Location loc = workOrderLocations.get(woId);
            String locationKey = loc.longitude + ';' + loc.latitude;

            if(!locationToTerritoryMap.containsKey(locationKey)) {
                Id territoryId = FSL.PolygonUtils.getTerritoryIdByPolygons(
                        loc.longitude.doubleValue(),
                        loc.latitude.doubleValue()
                );
                if(territoryId != null) {
                    locationToTerritoryMap.put(locationKey, territoryId);
                }
            }
        }

        // Process work orders
        Map<Id, Id> workOrderToTerritory = new Map<Id, Id>();
        for(Id woId : workOrderLocations.keySet()) {
            WorkOrder wo = new WorkOrder(Id = woId);
            Location loc = workOrderLocations.get(woId);
            String locationKey = loc.longitude + ';' + loc.latitude;

            Id serviceTerritoryId = locationToTerritoryMap.get(locationKey);
            if(serviceTerritoryId == null) {
                serviceTerritoryId = workOrderAssetTerritory.get(woId);
            }

            wo.ServiceTerritoryId = serviceTerritoryId;
            workOrderToTerritory.put(woId, serviceTerritoryId);
            workOrdersToUpdate.add(wo);
        }

        if(!workOrdersToUpdate.isEmpty()) {
            update workOrdersToUpdate;

            // Update related Service Appointments
            List<ServiceAppointment> serviceAppointments = [
                    SELECT Id, ParentRecordId
                    FROM ServiceAppointment
                    WHERE ParentRecordId IN :workOrdersToUpdate
            ];

            for(ServiceAppointment sa : serviceAppointments) {
                sa.ServiceTerritoryId = workOrderToTerritory.get(sa.ParentRecordId);
            }

            if(!serviceAppointments.isEmpty()) {
                update serviceAppointments;
            }
        }
    }
}
```

## Fields
### `workOrderLocations`

#### Signature
```apex
private workOrderLocations
```

#### Type
Map&lt;Id,Location&gt;

## Constructors
### `WorkOrderLocationQueueable(workOrderLocations)`

#### Signature
```apex
public WorkOrderLocationQueueable(Map<Id,Location> workOrderLocations)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| workOrderLocations | Map&lt;Id,Location&gt; |  |

## Methods
### `execute(context)`

#### Signature
```apex
public void execute(QueueableContext context)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| context | QueueableContext |  |

#### Return Type
**void**

## Classes
### Location Class

#### Fields
##### `latitude`

###### Signature
```apex
public latitude
```

###### Type
Decimal

---

##### `longitude`

###### Signature
```apex
public longitude
```

###### Type
Decimal

#### Constructors
##### `Location(latitude, longitude)`

###### Signature
```apex
public Location(Decimal latitude, Decimal longitude)
```

###### Parameters
| Name | Type | Description |
|------|------|-------------|
| latitude | Decimal |  |
| longitude | Decimal |  |