# InboundLoggerService Class

Created by Frederik on 11/13/2024. 
Description: 
Change Log: 
Dependencies:

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
* Created by Frederik on 11/13/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class InboundLoggerService {

    // Static variable to cache the logging enabled setting
    private static Boolean isLoggingEnabled;

    // Getter method to check if logging is enabled
    public static Boolean getIsLoggingEnabled() {
        if (isLoggingEnabled == null) {
            // Get the custom setting for the current user context
            Logger_Settings__c settings = Logger_Settings__c.getInstance();
            isLoggingEnabled = settings != null ? settings.Enable_Inbound_Logs__c : false;
        }
        return isLoggingEnabled;
    }

    public static void resetLoggingCache() {
        isLoggingEnabled = null;
    }

    public static void createInboundLog(String message, String logType) {
        if (getIsLoggingEnabled()) {
            try {
                // Create a new Inbound Log record
                Inbound_Log__c log = new Inbound_Log__c();
                log.JSON_Body__c = message;
                log.Type__c = logType;
                insert log;
            } catch (Exception e) {
                // Log the exception
                System.debug('Error creating inbound log: ' + e.getMessage());
            }
        }
    }
}
```

## Fields
### `isLoggingEnabled`

#### Signature
```apex
private static isLoggingEnabled
```

#### Type
Boolean

## Methods
### `getIsLoggingEnabled()`

#### Signature
```apex
public static Boolean getIsLoggingEnabled()
```

#### Return Type
**Boolean**

---

### `resetLoggingCache()`

#### Signature
```apex
public static void resetLoggingCache()
```

#### Return Type
**void**

---

### `createInboundLog(message, logType)`

#### Signature
```apex
public static void createInboundLog(String message, String logType)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| message | String |  |
| logType | String |  |

#### Return Type
**void**