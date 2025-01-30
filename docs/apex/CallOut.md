# CallOut Class

**Version** 

: 1.0

**Copyright** 

: 2021 Upeo Consulting

**Uses** 

: 
 
----------------------------------------------------------------------------------------------- 
Description: Callout class, used to store callout information 
----------------------------------------------------------------------------------------------- 
Revision No. 	Author 			Date 			Description 
1.0 			Upeo 		12/08/2023 		Initial version 
----------------------------------------------------------------------------------------------- 
 
Created: 12/08/2023 
Last Updated: 12/08/2023 
 
Unit tests: 
 
-----------------------------------------------------------------------------------------------

**Author** : Upeo

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * @Version: 1.0
 * @Author: Upeo
 * @Copyright: 2021 Upeo Consulting
 * @Uses:
 *
 * -----------------------------------------------------------------------------------------------
 * Description: Callout class, used to store callout information
 * -----------------------------------------------------------------------------------------------
 * Revision No. 	Author 			Date 			Description
 * 1.0 			Upeo 		12/08/2023 		Initial version
 * -----------------------------------------------------------------------------------------------
 *
 * Created: 12/08/2023
 * Last Updated: 12/08/2023
 *
 * Unit tests:
 *
 * -----------------------------------------------------------------------------------------------
*/


public class CallOut {

    @AuraEnabled public String name;
    @AuraEnabled public String type;
    @AuraEnabled public String endpoint;
    @AuraEnabled public String body;
    @AuraEnabled public String method;
    @AuraEnabled public Map<String, String> headers;
    @AuraEnabled public String timeout;
    @AuraEnabled public String retry;


    public static CallOut preparePostCallout(String endpoint, String body, Map<String, String> headers){

        CallOut callout = new CallOut();
        callout.endpoint = endpoint;
        callout.method = 'POST';
        callout.headers = new Map<String, String>();
        callout.headers.putAll(headers);
        callout.headers.put('Content-Type', 'application/json');
        callout.headers.put('Accept', 'application/json');
        callout.body = body;
        callout.timeout = '120000';
        return callout;
    }

    public static CallOut preparePatchCallout(String endpoint, String body,Integer identifier){

        System.debug('Callout body: ' + body);

        CallOut callout = new CallOut();
        callout.endpoint = endpoint;
        callout.method = 'PATCH';
        callout.headers = new Map<String, String>();
        callout.headers.put('Content-Type', 'application/json');
        callout.headers.put('Accept', 'application/json');
        callout.body = body;
        callout.timeout = '120000';
        return callout;
    }






}
```

## Fields
### `name`

`AURAENABLED`

#### Signature
```apex
public name
```

#### Type
String

---

### `type`

`AURAENABLED`

#### Signature
```apex
public type
```

#### Type
String

---

### `endpoint`

`AURAENABLED`

#### Signature
```apex
public endpoint
```

#### Type
String

---

### `body`

`AURAENABLED`

#### Signature
```apex
public body
```

#### Type
String

---

### `method`

`AURAENABLED`

#### Signature
```apex
public method
```

#### Type
String

---

### `headers`

`AURAENABLED`

#### Signature
```apex
public headers
```

#### Type
Map&lt;String,String&gt;

---

### `timeout`

`AURAENABLED`

#### Signature
```apex
public timeout
```

#### Type
String

---

### `retry`

`AURAENABLED`

#### Signature
```apex
public retry
```

#### Type
String

## Methods
### `preparePostCallout(endpoint, body, headers)`

#### Signature
```apex
public static CallOut preparePostCallout(String endpoint, String body, Map<String,String> headers)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| endpoint | String |  |
| body | String |  |
| headers | Map&lt;String,String&gt; |  |

#### Return Type
**[CallOut](CallOut.md)**

---

### `preparePatchCallout(endpoint, body, identifier)`

#### Signature
```apex
public static CallOut preparePatchCallout(String endpoint, String body, Integer identifier)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| endpoint | String |  |
| body | String |  |
| identifier | Integer |  |

#### Return Type
**[CallOut](CallOut.md)**