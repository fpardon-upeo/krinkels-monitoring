@IsTest
private class ATAKPersonnelWrapperTest {


    @IsTest
    static void test() {
        String jsonString =
                '{'+
                        '    "Type": "personeel",'+
                        '    "data": ['+
                        '        {'+
                        '            "dossier": "KGC",'+
                        '            "code": "GX000493",'+
                        '            "name": "TILMANT MIKE",'+
                        '            "phone": "+32 492 28 77 70",'+
                        '            "mobile": "0610010011",'+
                        '            "email": "lalala.lalal@gmail.com",'+
                        '            "depot_code": "GALG",'+
                        '            "depot_name": "Algemeen",'+
                        '            "department_code": "10",'+
                        '            "statute": "0",'+
                        '            "startdate": "2024-09-09",'+
                        '            "enddate": "2024-10-25",'+
                        '            "department_name": "Landscaping - Billing plan",'+
                        '            "sitemanager_code": "GJWA",'+
                        '            "sitemanager_name": "Jimmy Vandewalle",'+
                        '            "actie": "update"'+
                        '        }'+
                        '    ]'+
                        '}';
        ATAKPersonnelWrapper parser = ATAKPersonnelWrapper.parse(jsonString);
        System.assert(parser != null);
    }
}