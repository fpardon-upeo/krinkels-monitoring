# MultiRequestMock Class

Created by Frederik on 31/05/2023.

**Implements**

HttpCalloutMock

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * Created by Frederik on 31/05/2023.
 */

public class MultiRequestMock implements HttpCalloutMock {
    Map<String, HttpCalloutMock> requests;

    public MultiRequestMock(Map<String, HttpCalloutMock> requests) {
        this.requests = requests;
    }

    public HTTPResponse respond(HTTPRequest req) {
        HttpCalloutMock mock = requests.get(req.getEndpoint());
        return mock.respond(req);
    }

    public void addRequestMock(String url, HttpCalloutMock mock) {
        requests.put(url, mock);
    }
}
```

## Fields
### `requests`

#### Signature
```apex
private requests
```

#### Type
Map&lt;String,HttpCalloutMock&gt;

## Constructors
### `MultiRequestMock(requests)`

#### Signature
```apex
public MultiRequestMock(Map<String,HttpCalloutMock> requests)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| requests | Map&lt;String,HttpCalloutMock&gt; |  |

## Methods
### `respond(req)`

#### Signature
```apex
public HTTPResponse respond(HTTPRequest req)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| req | HTTPRequest |  |

#### Return Type
**HTTPResponse**

---

### `addRequestMock(url, mock)`

#### Signature
```apex
public void addRequestMock(String url, HttpCalloutMock mock)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| url | String |  |
| mock | HttpCalloutMock |  |

#### Return Type
**void**