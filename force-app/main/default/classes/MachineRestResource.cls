/**
 * Created by fpardon on 24/10/2024.
 */

@RestResource(urlMapping='/atak/machine')
global with sharing class MachineRestResource {

    @HttpPost
    global static String handlePost() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String returnMessage = '';
        InboundLoggerService.createInboundLog(req.requestBody.toString(), 'Machine');


        //Every body we get contains a type element and a data element
        //We need to check the type element to know what to do with the data element
        //We need to extract the type element from the body

        String fullBody = req.requestBody.toString();
        String typeOfData = fullBody.substringBetween('"Type": "', '",');

        System.debug('Type: ' + typeOfData);

        if(typeOfData == 'voertuig'){
            returnMessage = ATAKVehicleService.createATAKVehicle(ATAKVehicleWrapper.parse(fullBody));
        } else if(typeOfData == 'materieel'){
            returnMessage = ATAKMaterialService.createATAKMaterial(ATAKMaterialWrapper.parse(fullBody));
        } else {
            return 'Error: Type not recognized';
        }

        res.statusCode = 200;
        return returnMessage;

    }

}