/**
 * Created by fpardon on 18/11/2024.
 */

@IsTest
private class ATAKPerformanceWrapperTest {


    @IsTest
    static void test() {
        String jsonString =
                '{'+
                        '    "personnelcode_writer": "G0000169",'+
                        '    "data": ['+
                        '        {'+
                        '            "day_id": 892240,'+
                        '            "registration_timestamp": "20241007162407",'+
                        '            "dossier": "KGC",'+
                        '            "performance_date": "20241008",'+
                        '            "start_timestamp": "20240908070000",'+
                        '            "end_timestamp": "20240907162439",'+
                        '            "performance_resource_code": "G0000169",'+
                        '            "performance_resource_type": "P",'+
                        '            "projectcode": "G170208R",'+
                        '            "quantity_registration_unit": "HR",'+
                        '            "quantity": "10.50000",'+
                        '            "remarks": null'+
                        '        }'+
                        '    ]'+
                        '}';
        ATAKPerformanceWrapper parser = ATAKPerformanceWrapper.parse(jsonString);
        System.assert(parser != null);
    }
}