# ATAKPersonnelWrapper Class

Created by fpardon on 12/11/2024.

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * Created by fpardon on 12/11/2024.
 */

public class ATAKPersonnelWrapper {
    public String Type;
    public List<Data> data;
    public class Data {
        public String dossier;
        public String code;
        public String name;
        public String phone;
        public String mobile;
        public String email;
        public String depot_code;
        public String depot_name;
        public String department_code;
        public String statute;
        public String startdate;
        public String enddate;
        public String department_name;
        public String sitemanager_code;
        public String sitemanager_name;
        public String employment_agency;
        public String actie;
    }

    public static ATAKPersonnelWrapper parse(String json) {
        return (ATAKPersonnelWrapper) System.JSON.deserialize(json, ATAKPersonnelWrapper.class);
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
public static ATAKPersonnelWrapper parse(String json)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| json | String |  |

#### Return Type
**[ATAKPersonnelWrapper](ATAKPersonnelWrapper.md)**

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

##### `name`

###### Signature
```apex
public name
```

###### Type
String

---

##### `phone`

###### Signature
```apex
public phone
```

###### Type
String

---

##### `mobile`

###### Signature
```apex
public mobile
```

###### Type
String

---

##### `email`

###### Signature
```apex
public email
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

##### `statute`

###### Signature
```apex
public statute
```

###### Type
String

---

##### `startdate`

###### Signature
```apex
public startdate
```

###### Type
String

---

##### `enddate`

###### Signature
```apex
public enddate
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

##### `sitemanager_code`

###### Signature
```apex
public sitemanager_code
```

###### Type
String

---

##### `sitemanager_name`

###### Signature
```apex
public sitemanager_name
```

###### Type
String

---

##### `employment_agency`

###### Signature
```apex
public employment_agency
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