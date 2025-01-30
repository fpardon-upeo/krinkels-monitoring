# AddressSearchService Class

Created by Frederik on 10/29/2024. 
Description: 
Change Log: 
Dependencies:

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
* Created by Frederik on 10/29/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class AddressSearchService {

    @AuraEnabled
    public static String getAddress(String address) {
        //encode the address
        String apiKey = getAPIKey();
        System.debug('address: ' + address);
        String url = 'callout:MapsAutocomplete' + '?key=' + apiKey;

        // Create JSON body - using exactly the format required
        Map<String, Object> bodyMap = new Map<String, Object>{
                'input' => address
        };
        String body = JSON.serialize(bodyMap);
        System.debug('body: ' + body);

        HttpRequest req = new HttpRequest();
        req.setHeader('Content-Type', 'application/json');  // Add this header
        req.setBody(body);
        req.setEndpoint(url);
        req.setMethod('POST');
        Http http = new Http();
        HttpResponse res = http.send(req);
        System.debug('res: ' + res.getBody());
        return res.getBody();
    }

    @AuraEnabled
    public static MapsGeoCodeService.AddressResult getPlaceDetails(String placeId) {
        String apiKey = getApiKey();
        String url = 'callout:Google_Places' + '/' + placeId + '?key=' + apiKey+'&fields=addressComponents';

        HttpRequest req = new HttpRequest();
        req.setHeader('Content-Type', 'application/json');  // Add this header
        req.setEndpoint(url);
        req.setMethod('GET');
        Http http = new Http();
        HttpResponse response = http.send(req);
        System.debug('res: ' + response.getStatusCode());

        if (response.getStatusCode() == 200) {
            MapsGeoCodeWrapper.Address_components wrapper = (MapsGeoCodeWrapper.Address_components) JSON.deserialize(response.getBody(), MapsGeoCodeWrapper.Address_components.class);
            System.debug('wrapper: ' + wrapper);
        }


        return null;

    }

    private static String getAPIKey() {
        Google_Maps_API__c authSettings = Google_Maps_API__c.getOrgDefaults();
        String apiKey = authSettings.Key__c;
        return apiKey;
    }

}
```

## Methods
### `getAddress(address)`

`AURAENABLED`

#### Signature
```apex
public static String getAddress(String address)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| address | String |  |

#### Return Type
**String**

---

### `getPlaceDetails(placeId)`

`AURAENABLED`

#### Signature
```apex
public static MapsGeoCodeService.AddressResult getPlaceDetails(String placeId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| placeId | String |  |

#### Return Type
**MapsGeoCodeService.AddressResult**

---

### `getAPIKey()`

#### Signature
```apex
private static String getAPIKey()
```

#### Return Type
**String**