# ATAKProjectWrapperTest Class

`ISTEST`

Created by fpardon on 05/11/2024.

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * Created by fpardon on 05/11/2024.
 */

@IsTest
private class ATAKProjectWrapperTest {


    @IsTest
    static void test() {
        String jsonString =
                '{'+
                        '    "Type": "project",'+
                        '    "data": ['+
                        '        {'+
                        '            "dossier": "KGC",'+
                        '            "projectcode": "G210143L",'+
                        '            "project_description": "ACTION BELGIUM - PARKINGONDERHOUD - CHARLEROI",'+
                        '            "costcenter_code": "G210143L",'+
                        '            "costcenter_name": "ACTION BELGIUM - PARKINGONDERHOUD - CHARLEROI",'+
                        '            "department_code": "10",'+
                        '            "department_name": "Landscaping - Billing plan",'+
                        '            "depot_code": "GALG",'+
                        '            "depot_name": "Algemeen",'+
                        '            "project_create_date": "2021-12-22",'+
                        '            "dim_projecttype": "Perceel 1- Beheer op offerte",'+
                        '            "dim_clienttype": "Vlaamse Overheid-Fac. bedrijf",'+
                        '            "dim_branche": "Verkoopspunten / Points de ventes",'+
                        '            "dim_group": "Verkoopspunten / Points de ventes",'+
                        '            "dim_discipline": "xxxx",'+
                        '            "project_startdate": "2021-12-22",'+
                        '            "project_enddate": "2023-12-22",'+
                        '            "dim_tendertype": "qqqq",'+
                        '            "dim_language": "Nederlands",'+
                        '            "actie": "update",'+
                        '            "projectfunctionaris": ['+
                        '                {'+
                        '                    "func_initial": "BKHT",'+
                        '                    "func_name": "Koen Vanhoutte",'+
                        '                    "func_type": "Afdelingshoofd"'+
                        '                },'+
                        '                {'+
                        '                    "func_initial": "BJVW",'+
                        '                    "func_name": "Jean-Francois VanWinkel",'+
                        '                    "func_type": "Projectleider",'+
                        '                    "func_startdate": "2024-06-18"'+
                        '                },'+
                        '                {'+
                        '                    "func_initial": "GJWA",'+
                        '                    "func_name": "Jimmy Vandewalle",'+
                        '                    "func_type": "Werfleider"'+
                        '                }'+
                        '            ],'+
                        '            "adrescodes": ['+
                        '                {'+
                        '                    "project_addresscode": "100044"'+
                        '                },'+
                        '                {'+
                        '                    "project_addresscode": "ACT002"'+
                        '                }'+
                        '            ],'+
                        '            "projectavtiviteiten": ['+
                        '                {'+
                        '                    "project_activiteit": "Gladheidbestrijding"'+
                        '                },'+
                        '                {'+
                        '                    "project_activiteit": "Knippen Hagen / overhangend groen"'+
                        '                },'+
                        '                {'+
                        '                    "project_activiteit": "Maaien gazons / grasvelden"'+
                        '                },'+
                        '                {'+
                        '                    "project_activiteit": "Maaien kruiden vegetatie / ruw gras"'+
                        '                },'+
                        '                {'+
                        '                    "project_activiteit": "Onderhoud watergangen"'+
                        '                },'+
                        '                {'+
                        '                    "project_activiteit": "Onkruidbestrijding beplantingen"'+
                        '                },'+
                        '                {'+
                        '                    "project_activiteit": "Onkruidbestrijding verharding"'+
                        '                },'+
                        '                {'+
                        '                    "project_activiteit": "Onkruidbestrijding verharding - vegen goten"'+
                        '                },'+
                        '                {'+
                        '                    "project_activiteit": "Overig / herstelwerk"'+
                        '                },'+
                        '                {'+
                        '                    "project_activiteit": "Snoeien bomen"'+
                        '                },'+
                        '                {'+
                        '                    "project_activiteit": "Snoeien heesters / bosplantsoen"'+
                        '                },'+
                        '                {'+
                        '                    "project_activiteit": "Snoeien overhangend groen"'+
                        '                }'+
                        '            ]'+
                        '        }'+
                        '    ]'+
                        '}';
        ATAKProjectWrapper parser = ATAKProjectWrapper.parse(jsonString);
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