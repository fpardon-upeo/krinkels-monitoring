/**
 * Created by fpardon on 24/10/2024.
 */

@RestResource(urlMapping='/atak/machine')
global with sharing class MachineRestResource {

    @HttpPost
    global static String handlePost() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        return 'success';
    }

}