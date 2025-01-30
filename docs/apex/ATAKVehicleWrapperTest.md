# ATAKVehicleWrapperTest Class

`ISTEST`

Created by fpardon on 12/11/2024.

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * Created by fpardon on 12/11/2024.
 */

@IsTest
private class ATAKVehicleWrapperTest {


    @IsTest
    static void test() {
        String jsonString =
                '{'+
                        '    "Type": "voertuig",'+
                        '    "data": ['+
                        '        {'+
                        '            "dossier": "KGC",'+
                        '            "code": "G17VB027",'+
                        '            "depot_code": "10",'+
                        '            "depot_name": "Algemeen",'+
                        '            "department_code": "10",'+
                        '            "description": "Renault MASTER 35 LWB 2.3 DCI 35 L3H1 GESLOTEN LAADBAK",'+
                        '            "driver_code": "G0000261",'+
                        '            "driver_name": "LIESENS PASCAL",'+
                        '            "rate": 12,'+
                        '            "license_plate": "1-TAM-119",'+
                        '            "date_use_end": "2000-12-31",'+
                        '            "date_out_of_service": "2000-12-31",'+
                        '            "group_code": "VB",'+
                        '            "group_description": "GROTE BESTELWAGEN",'+
                        '            "means_categorie": "20",'+
                        '            "means_code": "VB",'+
                        '            "means_description": "Renault MASTER 35 LWB 2.3 DCI 35 L3H1 GESLOTEN LAADBAK",'+
                        '            "department_name": "Landscaping - Billing plan",'+
                        '            "used_by_code": "G0000235",'+
                        '            "used_by_name": "HOMBROECKX ARNE",'+
                        '            "actie": "update"'+
                        '        }'+
                        '    ]'+
                        '}';
        ATAKVehicleWrapper parser = ATAKVehicleWrapper.parse(jsonString);
        System.assert(parser != null);
    }
}
```

## Methods
### `test()`

`ISTEST`

#### Signature
```apex
private static void test()
```

#### Return Type
**void**