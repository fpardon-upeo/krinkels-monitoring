# ATAKPerformanceServiceInvocable Class

Created by fpardon on 18/11/2024.

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * Created by fpardon on 18/11/2024.
 */

public with sharing class ATAKPerformanceServiceInvocable {

    public class RequestWrapper {
        @InvocableVariable(required=true Label='Timesheet Id' Description='The Id of the timesheet to process')
        public String timesheetId;
    }

    public class ResponseWrapper {
        @InvocableVariable (Label='Success' Description='Indicates if the timesheet was processed successfully')
        public Integer statusCode;
    }

    @InvocableMethod(Label='Process Timesheet' Callout=true Description='Process a timesheet in ATAK')
    public static void processTimesheet(List<RequestWrapper> requests) {
        List<ResponseWrapper> response = new List<ResponseWrapper>();
        for(RequestWrapper request : requests) {
            ResponseWrapper resp = new ResponseWrapper();
            String timesheetId = request.timesheetId;
            ATAKWorkLogService.createWorkLogsForTimeSheet(timesheetId);
            resp.statusCode = 200;
            response.add(resp);
        }
    }
}
```

## Methods
### `processTimesheet(requests)`

`INVOCABLEMETHOD`

#### Signature
```apex
public static void processTimesheet(List<RequestWrapper> requests)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| requests | List&lt;RequestWrapper&gt; |  |

#### Return Type
**void**

## Classes
### RequestWrapper Class

#### Fields
##### `timesheetId`

`INVOCABLEVARIABLE`

###### Signature
```apex
public timesheetId
```

###### Type
String

### ResponseWrapper Class

#### Fields
##### `statusCode`

`INVOCABLEVARIABLE`

###### Signature
```apex
public statusCode
```

###### Type
Integer