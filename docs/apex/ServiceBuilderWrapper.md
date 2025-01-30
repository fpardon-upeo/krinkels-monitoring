# ServiceBuilderWrapper Class

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
public class ServiceBuilderWrapper {

    public List<location> locations;

    public ServiceBuilderWrapper() {
        this.locations = new List<location>();
    }

    public class location {
        public String name;
        public String city;
        public String zip;
        public String country;
        public Integer locationIndex;
        public List<service> services;
        public Integer numberOfServices;
    }

    public class service {
        public String product;
        public String code;
        public Decimal unitPrice;
        public Decimal quantity;
        public Date startDate;
        public Date endDate;
        public Integer serviceIndex;
    }

    public static ServiceBuilderWrapper wrapLineItems(List<ContractLineItem> lineItems){
        ServiceBuilderWrapper wrapper = new ServiceBuilderWrapper();
        List<String> locationKeys = new List<String>();

        // First, build a list of unique locations
        for(ContractLineItem lineItem : lineItems){
            String locationKey = lineItem.Location__City__s + lineItem.Location__Street__s + lineItem.Location__PostalCode__s;

            if(!locationKeys.contains(locationKey)){
                locationKeys.add(locationKey);
                location newLocation = new location();
                newLocation.name = lineItem.Location__Street__s;
                newLocation.city = lineItem.Location__City__s;
                newLocation.zip = lineItem.Location__PostalCode__s;
                newLocation.country = lineItem.Location__CountryCode__s;
                newLocation.locationIndex = wrapper.locations.size();
                newLocation.services = new List<service>();
                wrapper.locations.add(newLocation);
            }
        }

        // Now, add the services to the locations
        for(ContractLineItem lineItem : lineItems){
            String locationKey = lineItem.Location__City__s + lineItem.Location__Street__s + lineItem.Location__PostalCode__s;
            Integer locationIndex = locationKeys.indexOf(locationKey);
            location currentLocation = wrapper.locations[locationIndex];
            service newService = new service();
            newService.product = lineItem.Product2.Name;
            newService.code = lineItem.Project_Code__c;
            newService.unitPrice = lineItem.UnitPrice;
            newService.quantity = lineItem.Quantity;
            newService.startDate = lineItem.StartDate;
            newService.endDate = lineItem.EndDate;
            newService.serviceIndex = currentLocation.services.size();
            currentLocation.services.add(newService);
        }

        for(location loc : wrapper.locations){
            loc.numberOfServices = loc.services.size();
        }

        return wrapper;
    }
}
```

## Fields
### `locations`

#### Signature
```apex
public locations
```

#### Type
List&lt;location&gt;

## Constructors
### `ServiceBuilderWrapper()`

#### Signature
```apex
public ServiceBuilderWrapper()
```

## Methods
### `wrapLineItems(lineItems)`

#### Signature
```apex
public static ServiceBuilderWrapper wrapLineItems(List<ContractLineItem> lineItems)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| lineItems | List&lt;ContractLineItem&gt; |  |

#### Return Type
**[ServiceBuilderWrapper](ServiceBuilderWrapper.md)**

## Classes
### location Class

#### Fields
##### `name`

###### Signature
```apex
public name
```

###### Type
String

---

##### `city`

###### Signature
```apex
public city
```

###### Type
String

---

##### `zip`

###### Signature
```apex
public zip
```

###### Type
String

---

##### `country`

###### Signature
```apex
public country
```

###### Type
String

---

##### `locationIndex`

###### Signature
```apex
public locationIndex
```

###### Type
Integer

---

##### `services`

###### Signature
```apex
public services
```

###### Type
List&lt;service&gt;

---

##### `numberOfServices`

###### Signature
```apex
public numberOfServices
```

###### Type
Integer

### service Class

#### Fields
##### `product`

###### Signature
```apex
public product
```

###### Type
String

---

##### `code`

###### Signature
```apex
public code
```

###### Type
String

---

##### `unitPrice`

###### Signature
```apex
public unitPrice
```

###### Type
Decimal

---

##### `quantity`

###### Signature
```apex
public quantity
```

###### Type
Decimal

---

##### `startDate`

###### Signature
```apex
public startDate
```

###### Type
Date

---

##### `endDate`

###### Signature
```apex
public endDate
```

###### Type
Date

---

##### `serviceIndex`

###### Signature
```apex
public serviceIndex
```

###### Type
Integer