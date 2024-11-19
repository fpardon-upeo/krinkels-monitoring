/**
 * @Version: 1.0
 * @Author: Upeo
 * @Copyright: 2021 Upeo Consulting
 * @Uses:
 *
 * -----------------------------------------------------------------------------------------------
 * Description: Callout class, used to store callout information
 * -----------------------------------------------------------------------------------------------
 * Revision No. 	Author 			Date 			Description
 * 1.0 			Upeo 		12/08/2023 		Initial version
 * -----------------------------------------------------------------------------------------------
 *
 * Created: 12/08/2023
 * Last Updated: 12/08/2023
 *
 * Unit tests:
 *
 * -----------------------------------------------------------------------------------------------
*/


public class CallOut {

    @AuraEnabled public String name;
    @AuraEnabled public String type;
    @AuraEnabled public String endpoint;
    @AuraEnabled public String body;
    @AuraEnabled public String method;
    @AuraEnabled public Map<String, String> headers;
    @AuraEnabled public String timeout;
    @AuraEnabled public String retry;


    public static CallOut preparePostCallout(String endpoint, String body, Map<String, String> headers){

        CallOut callout = new CallOut();
        callout.endpoint = endpoint;
        callout.method = 'POST';
        callout.headers = new Map<String, String>();
        callout.headers.putAll(headers);
        callout.headers.put('Content-Type', 'application/json');
        callout.headers.put('Accept', 'application/json');
        callout.body = body;
        callout.timeout = '120000';
        return callout;
    }

    public static CallOut preparePatchCallout(String endpoint, String body,Integer identifier){

        System.debug('Callout body: ' + body);

        CallOut callout = new CallOut();
        callout.endpoint = endpoint;
        callout.method = 'PATCH';
        callout.headers = new Map<String, String>();
        callout.headers.put('Content-Type', 'application/json');
        callout.headers.put('Accept', 'application/json');
        callout.body = body;
        callout.timeout = '120000';
        return callout;
    }






}