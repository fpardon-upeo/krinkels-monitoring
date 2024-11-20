/**
 * Created by fpardon on 19/11/2024.
 */

public with sharing class WeatherService {
    private static final String BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';
    private static final String API_KEY = '863c34128167414a8ef192250241911';

    public class WeatherForecast {
        @AuraEnabled public Decimal temperature { get; set; }
        @AuraEnabled public String condition { get; set; }
        @AuraEnabled public String icon { get; set; }
    }

    @AuraEnabled
    public static WeatherForecast getNextHourForecast(Decimal lat, Decimal lon) {
        String endpoint = BASE_URL +
                '?key=' + API_KEY +
                '&q=' + lat + ',' + lon +
                '&hours=1';

        try {
            Http http = new Http();
            HttpRequest request = new HttpRequest();
            request.setEndpoint(endpoint);
            request.setMethod('GET');

            HttpResponse response = http.send(request);

            if (response.getStatusCode() == 200) {
                System.debug('API call succeeded: ' + response.getBody());
                Map<String, Object> data = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
                Map<String, Object> forecast = (Map<String, Object>) data.get('forecast');
                List<Object> forecastDays = (List<Object>) forecast.get('forecastday');
                Map<String, Object> firstDay = (Map<String, Object>) forecastDays[0];
                List<Object> hours = (List<Object>) firstDay.get('hour');
                Map<String, Object> nextHour = (Map<String, Object>) hours[0];
                Map<String, Object> condition = (Map<String, Object>) nextHour.get('condition');

                WeatherForecast result = new WeatherForecast();
                result.temperature = (Decimal) nextHour.get('temp_c');
                result.condition = (String) condition.get('text');
                result.icon = 'https:' + (String) condition.get('icon');
                System.debug('Weather forecast: ' + result);
                return result;
            } else {
                System.debug('API call failed: ' + response.getStatusCode() + ' ' + response.getStatus());
                return null;
            }
        } catch (Exception e) {
            System.debug('Error fetching weather data: ' + e.getMessage());
            return null;
        }
    }
}