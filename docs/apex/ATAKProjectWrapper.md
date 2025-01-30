# ATAKProjectWrapper Class

Created by fpardon on 05/11/2024.

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * Created by fpardon on 05/11/2024.
 */

public class ATAKProjectWrapper {
    public String Type;
    public List<Data> data;
    public class Data {
        public String dossier;
        public String projectcode;
        public String project_description;
        public String costcenter_code;
        public String costcenter_name;
        public String department_code;
        public String department_name;
        public String depot_code;
        public String depot_name;
        public String project_create_date;
        public String dim_projecttype;
        public String dim_clienttype;
        public String dim_branche;
        public String dim_group;
        public String dim_discipline;
        public String project_startdate;
        public String project_enddate;
        public String dim_tendertype;
        public String dim_language;
        public String actie;
        public List<Projectfunctionaris> projectfunctionaris;
        public List<Adrescodes> adrescodes;
        public List<Projectavtiviteiten> projectavtiviteiten;
    }
    public class Projectfunctionaris {
        public String func_initial;
        public String func_name;
        public String func_type;
    }
    public class Adrescodes {
        public String project_addresscode;
    }
    public class Projectavtiviteiten {
        public String project_activiteit;
    }

    public static ATAKProjectWrapper parse(String json) {
        return (ATAKProjectWrapper) System.JSON.deserialize(json, ATAKProjectWrapper.class);
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
public static ATAKProjectWrapper parse(String json)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| json | String |  |

#### Return Type
**[ATAKProjectWrapper](ATAKProjectWrapper.md)**

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

##### `projectcode`

###### Signature
```apex
public projectcode
```

###### Type
String

---

##### `project_description`

###### Signature
```apex
public project_description
```

###### Type
String

---

##### `costcenter_code`

###### Signature
```apex
public costcenter_code
```

###### Type
String

---

##### `costcenter_name`

###### Signature
```apex
public costcenter_name
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

##### `department_name`

###### Signature
```apex
public department_name
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

##### `project_create_date`

###### Signature
```apex
public project_create_date
```

###### Type
String

---

##### `dim_projecttype`

###### Signature
```apex
public dim_projecttype
```

###### Type
String

---

##### `dim_clienttype`

###### Signature
```apex
public dim_clienttype
```

###### Type
String

---

##### `dim_branche`

###### Signature
```apex
public dim_branche
```

###### Type
String

---

##### `dim_group`

###### Signature
```apex
public dim_group
```

###### Type
String

---

##### `dim_discipline`

###### Signature
```apex
public dim_discipline
```

###### Type
String

---

##### `project_startdate`

###### Signature
```apex
public project_startdate
```

###### Type
String

---

##### `project_enddate`

###### Signature
```apex
public project_enddate
```

###### Type
String

---

##### `dim_tendertype`

###### Signature
```apex
public dim_tendertype
```

###### Type
String

---

##### `dim_language`

###### Signature
```apex
public dim_language
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

---

##### `projectfunctionaris`

###### Signature
```apex
public projectfunctionaris
```

###### Type
List&lt;Projectfunctionaris&gt;

---

##### `adrescodes`

###### Signature
```apex
public adrescodes
```

###### Type
List&lt;Adrescodes&gt;

---

##### `projectavtiviteiten`

###### Signature
```apex
public projectavtiviteiten
```

###### Type
List&lt;Projectavtiviteiten&gt;

### Projectfunctionaris Class

#### Fields
##### `func_initial`

###### Signature
```apex
public func_initial
```

###### Type
String

---

##### `func_name`

###### Signature
```apex
public func_name
```

###### Type
String

---

##### `func_type`

###### Signature
```apex
public func_type
```

###### Type
String

### Adrescodes Class

#### Fields
##### `project_addresscode`

###### Signature
```apex
public project_addresscode
```

###### Type
String

### Projectavtiviteiten Class

#### Fields
##### `project_activiteit`

###### Signature
```apex
public project_activiteit
```

###### Type
String