# MapsGeoCodeWrapper Class

Created by Frederik on 10/25/2024. 
Description: 
Change Log: 
Dependencies:

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
* Created by Frederik on 10/25/2024.
* Description:
* Change Log:
* Dependencies:
*/
public class MapsGeoCodeWrapper {
    public Plus_code plus_code;
    public List<Results> results;
    public String status;
    public class Plus_code {
        public String compound_code;
        public String global_code;
    }
    public class Results {
        public List<Address_components> address_components;
        public String formatted_address;
        public Geometry geometry;
        public String place_id;
        public List<String> types;
    }
    public class Address_components {
        public String long_name;
        public String short_name;
        public List<String> types;
    }
    public class Geometry {
        public Location location;
        public String location_type;
        public Viewport viewport;
    }
    public class Location {
        public Double lat;
        public Double lng;
    }
    public class Viewport {
        public Northeast northeast;
        public Southwest southwest;
    }
    public class Northeast {
        public Double lat;
        public Double lng;
    }
    public class Southwest {
        public Double lat;
        public Double lng;
    }

    public static MapsGeoCodeWrapper parse(String json) {
        return (MapsGeoCodeWrapper) System.JSON.deserialize(json, MapsGeoCodeWrapper.class);
    }

}
```

## Fields
### `plus_code`

#### Signature
```apex
public plus_code
```

#### Type
Plus_code

---

### `results`

#### Signature
```apex
public results
```

#### Type
List&lt;Results&gt;

---

### `status`

#### Signature
```apex
public status
```

#### Type
String

## Methods
### `parse(json)`

#### Signature
```apex
public static MapsGeoCodeWrapper parse(String json)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| json | String |  |

#### Return Type
**[MapsGeoCodeWrapper](MapsGeoCodeWrapper.md)**

## Classes
### Plus_code Class

#### Fields
##### `compound_code`

###### Signature
```apex
public compound_code
```

###### Type
String

---

##### `global_code`

###### Signature
```apex
public global_code
```

###### Type
String

### Results Class

#### Fields
##### `address_components`

###### Signature
```apex
public address_components
```

###### Type
List&lt;Address_components&gt;

---

##### `formatted_address`

###### Signature
```apex
public formatted_address
```

###### Type
String

---

##### `geometry`

###### Signature
```apex
public geometry
```

###### Type
Geometry

---

##### `place_id`

###### Signature
```apex
public place_id
```

###### Type
String

---

##### `types`

###### Signature
```apex
public types
```

###### Type
List&lt;String&gt;

### Address_components Class

#### Fields
##### `long_name`

###### Signature
```apex
public long_name
```

###### Type
String

---

##### `short_name`

###### Signature
```apex
public short_name
```

###### Type
String

---

##### `types`

###### Signature
```apex
public types
```

###### Type
List&lt;String&gt;

### Geometry Class

#### Fields
##### `location`

###### Signature
```apex
public location
```

###### Type
[Location](../objects/Location.md)

---

##### `location_type`

###### Signature
```apex
public location_type
```

###### Type
String

---

##### `viewport`

###### Signature
```apex
public viewport
```

###### Type
Viewport

### Location Class

#### Fields
##### `lat`

###### Signature
```apex
public lat
```

###### Type
Double

---

##### `lng`

###### Signature
```apex
public lng
```

###### Type
Double

### Viewport Class

#### Fields
##### `northeast`

###### Signature
```apex
public northeast
```

###### Type
Northeast

---

##### `southwest`

###### Signature
```apex
public southwest
```

###### Type
Southwest

### Northeast Class

#### Fields
##### `lat`

###### Signature
```apex
public lat
```

###### Type
Double

---

##### `lng`

###### Signature
```apex
public lng
```

###### Type
Double

### Southwest Class

#### Fields
##### `lat`

###### Signature
```apex
public lat
```

###### Type
Double

---

##### `lng`

###### Signature
```apex
public lng
```

###### Type
Double