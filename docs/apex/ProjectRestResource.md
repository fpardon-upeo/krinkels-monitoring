# ProjectRestResource Class

`RESTRESOURCE`

Created by fpardon on 24/10/2024.

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * Created by fpardon on 24/10/2024.
 */

@RestResource(urlMapping='/atak/project')
global with sharing class ProjectRestResource {

    @HttpPost
    global static String handlePost() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        System.debug('Request Body: ' + req.requestBody.toString());
        String returnMessage = '';
        InboundLoggerService.createInboundLog(req.requestBody.toString(), 'Project');
        try {
            ATAKProjectWrapper project = parseBody(req.requestBody.toString());
            returnMessage = ATAKProjectService.createATAKProjects(project);
        } catch (Exception e) {
            res.statusCode = 400;
            return 'Error parsing JSON: ' + e.getMessage();
        }

        res.statusCode = 200;
        return returnMessage;

    }

    private static ATAKProjectWrapper parseBody(String json) {
        ATAKProjectWrapper project = ATAKProjectWrapper.parse(json);
        return project;
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
private static ATAKProjectWrapper parseBody(String json)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| json | String |  |

#### Return Type
**[ATAKProjectWrapper](ATAKProjectWrapper.md)**