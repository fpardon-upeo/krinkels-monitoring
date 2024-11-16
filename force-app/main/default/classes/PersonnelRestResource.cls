/**
 * Created by fpardon on 24/10/2024.
 */

@RestResource(urlMapping='/atak/personnel')
global with sharing class PersonnelRestResource {

    @HttpPost
    global static String handlePost() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String returnMessage = '';
        InboundLoggerService.createInboundLog(req.requestBody.toString(), 'Personnel');

        try {
            ATAKPersonnelWrapper personnel = parseBody(req.requestBody.toString());
            returnMessage = ATAKPersonnelService.createATAKPersonnel(personnel);
        } catch (Exception e) {
            res.statusCode = 400;
            return 'Error parsing JSON: ' + e.getMessage();
        }

        res.statusCode = 200;
        return returnMessage;

    }

    private static ATAKPersonnelWrapper parseBody(String json) {
        ATAKPersonnelWrapper personnelWrapper = ATAKPersonnelWrapper.parse(json);
        return personnelWrapper;
    }
}