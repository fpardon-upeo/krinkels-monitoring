# MachineRestResourceTest Class

`ISTEST`

Created by Frederik on 12/18/2024.

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * Created by Frederik on 12/18/2024.
 */

@IsTest
private class MachineRestResourceTest {
    @IsTest
    static void testInboundMaterialCall() {

        RestRequest req = new RestRequest();
        RestResponse res = new RestResponse();
        req.requestURI = '/services/apexrest/atak/machine'; //Request URL
        req.httpMethod = 'POST';
        req.requestBody = Blob.valueOf(getMachineJSON());

        RestContext.request = req;
        RestContext.response= res;

        System.debug('Request: ' + JSON.serialize(req));

        Test.startTest();
        MachineRestResource.handlePost();
        Test.stopTest();

        Product2 machine = [SELECT Id, Name, ATAK_Code__c FROM Product2 WHERE Name = 'Nimos Mug II onkruidborstelmachine'];
        System.assertEquals('G24NB033', machine.ATAK_Code__c);
        System.assertEquals('Nimos Mug II onkruidborstelmachine', machine.Name);

    }

    @IsTest
    static void testInboundVehicleCall() {

        RestRequest req = new RestRequest();
        RestResponse res = new RestResponse();
        req.requestURI = '/services/apexrest/atak/machine'; //Request URL
        req.httpMethod = 'POST';
        req.requestBody = Blob.valueOf(getVehicleJson());

        RestContext.request = req;
        RestContext.response= res;

        System.debug('Request: ' + JSON.serialize(req));

        Test.startTest();
        MachineRestResource.handlePost();
        Test.stopTest();

    }

    private static String getMachineJSON() {
        return '{'+
                '    "Type": "materiaal",'+
                '    "data": ['+
                '        {'+
                '            "dossier": "KGC",'+
                '            "code": "G24NB033",'+
                '            "depot_code": "10",'+
                '            "depot_name": "Algemeen",'+
                '            "department_code": "10",'+
                '            "description": "Nimos Mug II onkruidborstelmachine",'+
                '            "rate": 10,'+
                '            "license_plate": "XXX",'+
                '            "date_use_end": "2000-12-31",'+
                '            "date_out_of_service": "2000-12-31",'+
                '            "group_code": "NB",'+
                '            "group_description": "ONKRUIDBORSTEL",'+
                '            "means_categorie": "21",'+
                '            "means_code": "NB",'+
                '            "means_description": "Nimos Mug II onkruidborstelmachine",'+
                '            "department_name": "Landscaping - Billing plan",'+
                '            "actie": "update"'+
                '        }'+
                '    ]'+
                '}';
    }

    private static String getVehicleJson(){

        return  '{'+
                '    "Type": "voertuig",'+
                '    "data": ['+
                '        {'+
                '            "dossier": "KGC",'+
                '            "code": "G24VR036",'+
                '            "depot_code": "00",'+
                '            "depot_name": "Algemeen",'+
                '            "department_code": "00",'+
                '            "description": "HUUR BESTELWAGEN",'+
                '            "rate": 15,'+
                '            "license_plate": "2-FLB-867",'+
                '            "group_code": "VR",'+
                '            "group_description": "RENTING BESTELWAGEN",'+
                '            "means_categorie": "20",'+
                '            "means_code": "VR",'+
                '            "means_description": "HUUR BESTELWAGEN",'+
                '            "department_name": "Algemeen",'+
                '            "used_by_code": "G0000231",'+
                '            "used_by_name": "BURGGRAEVE SIMON",'+
                '            "actie": "update"'+
                '        }'+
                '    ]'+
                '}';

    }

}
```

## Methods
### `testInboundMaterialCall()`

`ISTEST`

#### Signature
```apex
private static void testInboundMaterialCall()
```

#### Return Type
**void**

---

### `testInboundVehicleCall()`

`ISTEST`

#### Signature
```apex
private static void testInboundVehicleCall()
```

#### Return Type
**void**

---

### `getMachineJSON()`

#### Signature
```apex
private static String getMachineJSON()
```

#### Return Type
**String**

---

### `getVehicleJson()`

#### Signature
```apex
private static String getVehicleJson()
```

#### Return Type
**String**