# PersonnelRestResource Class

`RESTRESOURCE`

Created by fpardon on 24/10/2024.

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * Created by fpardon on 24/10/2024.
 */

@RestResource(urlMapping='/atak/personnel')
global with sharing class PersonnelRestResource {

    @HttpPost
    global static String handlePost() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String returnMessage = '';
        InboundLoggerService.createInboundLog(req.requestBody.toString(), 'Personnel');

        try {
            ATAKPersonnelWrapper personnel = parseBody(req.requestBody.toString());
            returnMessage = ATAKPersonnelService.createATAKPersonnel(personnel);
        } catch (Exception e) {
            res.statusCode = 400;
            return 'Error parsing JSON: ' + e.getMessage();
        }

        res.statusCode = 200;
        return returnMessage;

    }

    private static ATAKPersonnelWrapper parseBody(String json) {
        ATAKPersonnelWrapper personnelWrapper = ATAKPersonnelWrapper.parse(json);
        return personnelWrapper;
    }
}
```

## Methods
### `handlePost()`

`HTTPPOST`

#### Signature
```apex
global static String handlePost()
```

#### Return Type
**String**

---

### `parseBody(json)`

#### Signature
```apex
private static ATAKPersonnelWrapper parseBody(String json)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| json | String |  |

#### Return Type
**[ATAKPersonnelWrapper](ATAKPersonnelWrapper.md)**