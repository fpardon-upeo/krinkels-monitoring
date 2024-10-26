/**
* Created by Frederik on 10/25/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class MapsGeoCodeService {

    private static final String NAMED_CREDENTIAL = 'callout:GoogleMaps';

    public class AddressResult {
        public String street;
        public String city;
        public String zipCode;
        public String country;

        public AddressResult(String street, String city, String zipCode, String country) {
            this.street = street;
            this.city = city;
            this.zipCode = zipCode;
            this.country = country;
        }
    }

    /**
     * This method will call the Google Maps API to get the address from the coordinates
     * @param latitude (Decimal) - Latitude
     * @param longitude (Decimal) - Longitude
     * @return AddressResult - Address
     */

    public static AddressResult getAddressFromCoordinates(Decimal latitude, Decimal longitude) {
        try {

            Google_Maps_API__c authSettings = Google_Maps_API__c.getOrgDefaults();
            String apiKey = authSettings.Key__c;

            // Construct the endpoint URL with parameters
            String endpoint = NAMED_CREDENTIAL +
                    '/json?&latlng=' + EncodingUtil.urlEncode(String.valueOf(latitude), 'UTF-8') +
                    ',' + EncodingUtil.urlEncode(String.valueOf(longitude), 'UTF-8') +
                    '&result_type=street_address' +
                    '&location_type=RANGE_INTERPOLATED' +
                    '&key=' + apiKey;


            // Make the callout
            Http http = new Http();
            HttpRequest request = new HttpRequest();
            request.setEndpoint(endpoint);
            request.setMethod('GET');

            HttpResponse response = http.send(request);

            // Parse the response
            if (response.getStatusCode() == 200) {
                MapsGeoCodeWrapper wrapper = MapsGeoCodeWrapper.parse(response.getBody());

                if (wrapper.results != null && !wrapper.results.isEmpty()) {
                    MapsGeoCodeWrapper.Results firstResult = wrapper.results[0];
                    return parseAddressComponents(firstResult.address_components);
                }
            }

            return null;
        } catch (Exception e) {
            System.debug('Error getting address from coordinates: ' + e.getMessage());
            throw new GoogleMapsException('Error processing geocoding request: ' + e.getMessage());
        }
    }

    /**
     * This method will parse the address components from the Google Maps API response
     * @param components (List<MapsGeoCodeWrapper.Address_components>) - Address components
     * @return AddressResult - Address
     */

    private static AddressResult parseAddressComponents(List<MapsGeoCodeWrapper.Address_components> components) {
        String street = '';
        String city = '';
        String zipCode = '';
        String country = '';

        for (MapsGeoCodeWrapper.Address_components component : components) {
            if (component.types.contains('street_number')) {
                street = component.long_name + ' ';
            } else if (component.types.contains('route')) {
                street += component.long_name;
            } else if (component.types.contains('locality')) {
                city = component.long_name;
            } else if (component.types.contains('postal_code')) {
                zipCode = component.long_name;
            } else if (component.types.contains('country')) {
                country = component.short_name;
            }
        }

        return new AddressResult(street.trim(), city, zipCode, country);
    }

    public class GoogleMapsException extends Exception {}
}