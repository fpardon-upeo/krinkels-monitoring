# ATAKMaterialWrapper Class

Created by fpardon on 12/11/2024.

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * Created by fpardon on 12/11/2024.
 */

public class ATAKMaterialWrapper {
    public String Type;
    public List<Data> data;
    public class Data {
        public String dossier;
        public String code;
        public String depot_code;
        public String depot_name;
        public String department_code;
        public String description;
        public Integer rate;
        public String license_plate;
        public String date_use_end;
        public String date_out_of_service;
        public String group_code;
        public String group_description;
        public String means_categorie;
        public String means_code;
        public String means_description;
        public String department_name;
        public String actie;
    }

    public static ATAKMaterialWrapper parse(String json) {
        return (ATAKMaterialWrapper) System.JSON.deserialize(json, ATAKMaterialWrapper.class);
    }
}
```

## Fields
### `Type`

#### Signature
```apex
public Type
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
public static ATAKMaterialWrapper parse(String json)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| json | String |  |

#### Return Type
**[ATAKMaterialWrapper](ATAKMaterialWrapper.md)**

## Classes
### Data Class

#### Fields
##### `dossier`

###### Signature
```apex
public dossier
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

##### `depot_code`

###### Signature
```apex
public depot_code
```

###### Type
String

---

##### `depot_name`

###### Signature
```apex
public depot_name
```

###### Type
String

---

##### `department_code`

###### Signature
```apex
public department_code
```

###### Type
String

---

##### `description`

###### Signature
```apex
public description
```

###### Type
String

---

##### `rate`

###### Signature
```apex
public rate
```

###### Type
Integer

---

##### `license_plate`

###### Signature
```apex
public license_plate
```

###### Type
String

---

##### `date_use_end`

###### Signature
```apex
public date_use_end
```

###### Type
String

---

##### `date_out_of_service`

###### Signature
```apex
public date_out_of_service
```

###### Type
String

---

##### `group_code`

###### Signature
```apex
public group_code
```

###### Type
String

---

##### `group_description`

###### Signature
```apex
public group_description
```

###### Type
String

---

##### `means_categorie`

###### Signature
```apex
public means_categorie
```

###### Type
String

---

##### `means_code`

###### Signature
```apex
public means_code
```

###### Type
String

---

##### `means_description`

###### Signature
```apex
public means_description
```

###### Type
String

---

##### `department_name`

###### Signature
```apex
public department_name
```

###### Type
String

---

##### `actie`

###### Signature
```apex
public actie
```

###### Type
String