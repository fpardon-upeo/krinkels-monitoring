# PersonnelRestResourceTest Class

`ISTEST`

Created by Frederik on 11/15/2024. 
Description: 
Change Log: 
Dependencies:

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
* Created by Frederik on 11/15/2024.
* Description:
* Change Log:
* Dependencies:
*/

@IsTest
public without sharing class PersonnelRestResourceTest {

    @IsTest
    public static void testInboundPersonnelCall(){

        RestRequest req = new RestRequest();
        RestResponse res = new RestResponse();
        req.requestURI = '/services/apexrest/atak/personnel'; //Request URL
        req.httpMethod = 'POST';
        req.requestBody = Blob.valueOf(getPersonnelJson());

        RestContext.request = req;
        RestContext.response= res;

        System.debug('Request: ' + JSON.serialize(req));

        Test.startTest();
        PersonnelRestResource.handlePost();
        Test.stopTest();

        ATAK_Personnel__c personnel = [SELECT Id, Name, Phone__c, Code__c  FROM ATAK_Personnel__c WHERE Code__c = 'GX000493' LIMIT 1];
        System.assertEquals('GX000493', personnel.Code__c);
        System.assertEquals('TILMANT MIKE', personnel.Name);
        System.assertEquals('+32 492 28 77 70', personnel.Phone__c);

    }

    private static String getPersonnelJson() {
        return '{' +
                '    "Type": "personeel",' +
                '    "data": [' +
                '        {' +
                '            "dossier": "KGC",' +
                '            "code": "GX000493",' +
                '            "name": "TILMANT MIKE",' +
                '            "phone": "+32 492 28 77 70",' +
                '            "mobile": "0610010011",' +
                '            "email": "lalala.lalal@gmail.com",' +
                '            "depot_code": "GALG",' +
                '            "depot_name": "Algemeen",' +
                '            "department_code": "10",' +
                '            "statute": "0",' +
                '            "startdate": "2024-09-09",' +
                '            "enddate": "2024-10-25",' +
                '            "department_name": "Landscaping - Billing plan",' +
                '            "sitemanager_code": "GJWA",' +
                '            "sitemanager_name": "Jimmy Vandewalle",' +
                '            "actie": "update"' +
                '        }' +
                '    ]' +
                '}';
    }

}
```

## Methods
### `testInboundPersonnelCall()`

`ISTEST`

#### Signature
```apex
public static void testInboundPersonnelCall()
```

#### Return Type
**void**

---

### `getPersonnelJson()`

#### Signature
```apex
private static String getPersonnelJson()
```

#### Return Type
**String**