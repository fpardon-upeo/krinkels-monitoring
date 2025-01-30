# DateTimeRounder Class

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
public class DateTimeRounder {

    @InvocableMethod(label='Round DateTime to Interval'
            description='Rounds a DateTime to the nearest interval (in minutes)')
    public static List<DateTime> roundToInterval(List<RoundingRequest> requests) {
        List<DateTime> results = new List<DateTime>();

        for(RoundingRequest req : requests) {
            results.add(roundSingle(req.inputDateTime, req.intervalMinutes));
        }

        return results;
    }

    public static DateTime roundSingle(DateTime dt, Integer intervalMinutes) {
        // Convert to milliseconds since epoch
        Long milliseconds = dt.getTime();

        // Convert interval to milliseconds
        Long intervalMs = intervalMinutes * 60 * 1000L;

        // Calculate rounded milliseconds
        Long remainder = Math.mod(milliseconds, intervalMs);
        Long halfInterval = intervalMs / 2;

        Long roundedMs;
        if (remainder >= halfInterval) {
            // Round up
            roundedMs = milliseconds + (intervalMs - remainder);
        } else {
            // Round down
            roundedMs = milliseconds - remainder;
        }

        // Convert back to DateTime
        return DateTime.newInstance(roundedMs);
    }

    public class RoundingRequest {
        @InvocableVariable(required=true label='Input DateTime')
        public DateTime inputDateTime;

        @InvocableVariable(required=true label='Interval (Minutes)')
        public Integer intervalMinutes;
    }
}
```

## Methods
### `roundToInterval(requests)`

`OTHER`

#### Signature
```apex
public static List<DateTime> roundToInterval(List<RoundingRequest> requests)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| requests | List&lt;RoundingRequest&gt; |  |

#### Return Type
**List&lt;DateTime&gt;**

---

### `roundSingle(dt, intervalMinutes)`

#### Signature
```apex
public static DateTime roundSingle(DateTime dt, Integer intervalMinutes)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| dt | DateTime |  |
| intervalMinutes | Integer |  |

#### Return Type
**DateTime**

## Classes
### RoundingRequest Class

#### Fields
##### `inputDateTime`

`INVOCABLEVARIABLE`

###### Signature
```apex
public inputDateTime
```

###### Type
DateTime

---

##### `intervalMinutes`

`OTHER`

###### Signature
```apex
public intervalMinutes
```

###### Type
Integer