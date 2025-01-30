# ATAKPerformanceWrapper Class

Created by fpardon on 18/11/2024.

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * Created by fpardon on 18/11/2024.
 */

public class ATAKPerformanceWrapper {
    public String personnelcode_writer;
    public List<Data> data;
    public class Data {
        public Integer day_id;
        public String registration_timestamp;
        public String dossier;
        public String performance_date;
        public String start_timestamp;
        public String end_timestamp;
        public String performance_resource_code;
        public String performance_resource_type;
        public String projectcode;
        public String quantity_registration_unit;
        public String quantity;
        public String remarks;
    }

    public static ATAKPerformanceWrapper parse(String json) {
        return (ATAKPerformanceWrapper) System.JSON.deserialize(json, ATAKPerformanceWrapper.class);
    }

}
```

## Fields
### `personnelcode_writer`

#### Signature
```apex
public personnelcode_writer
```

#### Type
String

---

### `data`

#### Signature
```apex
public data
```

#### Type
List&lt;Data&gt;

## Methods
### `parse(json)`

#### Signature
```apex
public static ATAKPerformanceWrapper parse(String json)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| json | String |  |

#### Return Type
**[ATAKPerformanceWrapper](ATAKPerformanceWrapper.md)**

## Classes
### Data Class

#### Fields
##### `day_id`

###### Signature
```apex
public day_id
```

###### Type
Integer

---

##### `registration_timestamp`

###### Signature
```apex
public registration_timestamp
```

###### Type
String

---

##### `dossier`

###### Signature
```apex
public dossier
```

###### Type
String

---

##### `performance_date`

###### Signature
```apex
public performance_date
```

###### Type
String

---

##### `start_timestamp`

###### Signature
```apex
public start_timestamp
```

###### Type
String

---

##### `end_timestamp`

###### Signature
```apex
public end_timestamp
```

###### Type
String

---

##### `performance_resource_code`

###### Signature
```apex
public performance_resource_code
```

###### Type
String

---

##### `performance_resource_type`

###### Signature
```apex
public performance_resource_type
```

###### Type
String

---

##### `projectcode`

###### Signature
```apex
public projectcode
```

###### Type
String

---

##### `quantity_registration_unit`

###### Signature
```apex
public quantity_registration_unit
```

###### Type
String

---

##### `quantity`

###### Signature
```apex
public quantity
```

###### Type
String

---

##### `remarks`

###### Signature
```apex
public remarks
```

###### Type
String