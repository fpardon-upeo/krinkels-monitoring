/**
 * Created by fpardon on 21/11/2024.
 */

trigger AppointmentStatusTrigger on Service_Appointment_Status__c (before insert) {


    DateTimeRounder.RoundingRequest request = new DateTimeRounder.RoundingRequest();
    request.intervalMinutes = 5;
    for(Service_Appointment_Status__c status : Trigger.new){
        request.inputDateTime = status.Status_Change_Date__c;
        status.Status_Change_Date__c = DateTimeRounder.roundSingle(request.inputDateTime, request.intervalMinutes);
    }

}