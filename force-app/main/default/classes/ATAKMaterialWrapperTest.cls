/**
 * Created by fpardon on 12/11/2024.
 */

@IsTest
private class ATAKMaterialWrapperTest {


    @IsTest
    static void test() {
        String jsonString =
                '{'+
                        '    "Type": "materieel",'+
                        '    "data": ['+
                        '        {'+
                        '            "dossier": "KGC",'+
                        '            "code": "G24NB032",'+
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
        ATAKMaterialWrapper parser = ATAKMaterialWrapper.parse(jsonString);
        System.assert(parser != null);
    }
}