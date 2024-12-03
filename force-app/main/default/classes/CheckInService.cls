/**
* Created by Frederik on 12/2/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class CheckInService {

    @AuraEnabled
    public static void checkIn(String recordId, Double latitude, Double longitude) {
        System.debug('CheckInService.checkIn');
        System.debug('recordId: ' + recordId);
        System.debug('latitude: ' + latitude);
        System.debug('longitude: ' + longitude);
        // Get the work step record
        WorkStep workStep = [SELECT Id, WorkOrderId FROM WorkStep WHERE Id = :recordId LIMIT 1];
        WorkOrder workOrder = [SELECT Id, Status FROM WorkOrder WHERE Id = :workStep.WorkOrderId LIMIT 1];
        ServiceAppointment serviceAppointment = [SELECT Id, Status FROM ServiceAppointment WHERE ParentRecordId = :workStep.WorkOrderId LIMIT 1];

        //Update the work step status to Completed
        workStep.Status = 'Completed';

        //Update the work order status to In Progress
        workOrder.Status = 'In Progress';
        workOrder.Checkin_Location__Latitude__s = latitude;
        workOrder.Checkin_Location__Longitude__s = longitude;

        //Update the service appointment status to In Progress
        serviceAppointment.Status = 'In Progress';

        //Update the records
        update workStep;
        update workOrder;
        update serviceAppointment;
    }

}