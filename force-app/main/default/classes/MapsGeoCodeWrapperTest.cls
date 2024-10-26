/**
* Created by Frederik on 10/25/2024.
* Description:
* Change Log:
* Dependencies:
*/

@IsTest
private class MapsGeoCodeWrapperTest {


    @IsTest
    static void test() {
        String jsonString =
                '{'+
                        '    "plus_code": {'+
                        '        "compound_code": "H3X5+C99 Soignies, Belgium",'+
                        '        "global_code": "9F26H3X5+C99"'+
                        '    },'+
                        '    "results": ['+
                        '        {'+
                        '            "address_components": ['+
                        '                {'+
                        '                    "long_name": "240",'+
                        '                    "short_name": "240",'+
                        '                    "types": ['+
                        '                        "street_number"'+
                        '                    ]'+
                        '                },'+
                        '                {'+
                        '                    "long_name": "N55",'+
                        '                    "short_name": "N55",'+
                        '                    "types": ['+
                        '                        "route"'+
                        '                    ]'+
                        '                },'+
                        '                {'+
                        '                    "long_name": "Soignies",'+
                        '                    "short_name": "Soignies",'+
                        '                    "types": ['+
                        '                        "locality",'+
                        '                        "political"'+
                        '                    ]'+
                        '                },'+
                        '                {'+
                        '                    "long_name": "Hainaut",'+
                        '                    "short_name": "HT",'+
                        '                    "types": ['+
                        '                        "administrative_area_level_2",'+
                        '                        "political"'+
                        '                    ]'+
                        '                },'+
                        '                {'+
                        '                    "long_name": "Région Wallonne",'+
                        '                    "short_name": "Région Wallonne",'+
                        '                    "types": ['+
                        '                        "administrative_area_level_1",'+
                        '                        "political"'+
                        '                    ]'+
                        '                },'+
                        '                {'+
                        '                    "long_name": "Belgium",'+
                        '                    "short_name": "BE",'+
                        '                    "types": ['+
                        '                        "country",'+
                        '                        "political"'+
                        '                    ]'+
                        '                },'+
                        '                {'+
                        '                    "long_name": "7060",'+
                        '                    "short_name": "7060",'+
                        '                    "types": ['+
                        '                        "postal_code"'+
                        '                    ]'+
                        '                }'+
                        '            ],'+
                        '            "formatted_address": "N55 240, 7060 Soignies, Belgium",'+
                        '            "geometry": {'+
                        '                "location": {'+
                        '                    "lat": 50.5986865,'+
                        '                    "lng": 4.0603141'+
                        '                },'+
                        '                "location_type": "RANGE_INTERPOLATED",'+
                        '                "viewport": {'+
                        '                    "northeast": {'+
                        '                        "lat": 50.6000354802915,'+
                        '                        "lng": 4.061663080291503'+
                        '                    },'+
                        '                    "southwest": {'+
                        '                        "lat": 50.5973375197085,'+
                        '                        "lng": 4.058965119708498'+
                        '                    }'+
                        '                }'+
                        '            },'+
                        '            "place_id": "Eh9ONTUgMjQwLCA3MDYwIFNvaWduaWVzLCBCZWxnaXVtIhsSGQoUChIJ9anNHrBMwkcRH2qYi0CB0jYQ8AE",'+
                        '            "types": ['+
                        '                "street_address"'+
                        '            ]'+
                        '        }'+
                        '    ],'+
                        '    "status": "OK"'+
                        '}';
        MapsGeoCodeWrapper parser = MapsGeoCodeWrapper.parse(jsonString);
        System.assert(parser != null);
    }
}