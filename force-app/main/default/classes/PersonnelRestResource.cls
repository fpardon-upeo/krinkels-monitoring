/**
 * Created by fpardon on 24/10/2024.
 */

@RestResource(urlMapping='/atak/personnel')
global with sharing class PersonnelRestResource {

    @HttpPost
    global static String handlePost() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        return 'success';
    }
}