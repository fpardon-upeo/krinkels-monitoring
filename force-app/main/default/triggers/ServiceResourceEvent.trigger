/**
 * Created by Frederik on 11/5/2024.
 */

trigger ServiceResourceEvent on Operator_Created_Event__e (after insert) {

    List<String> userIds = new List<String>();
    System.debug('Trigger fired');
    for (Operator_Created_Event__e event : Trigger.New) {
        System.debug('user id: ' + event.User_Id__c);
        userIds.add(event.User_Id__c);
    }

    ServiceResourceHandler.createServiceResources(userIds);

}