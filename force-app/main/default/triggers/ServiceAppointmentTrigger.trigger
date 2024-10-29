/**
 * Created by fpardon on 28/10/2024.
 */

trigger ServiceAppointmentTrigger on ServiceAppointment (after insert) {

    ServiceAppointmentTriggerHandler handler = new ServiceAppointmentTriggerHandler();

    if(Trigger.isInsert && Trigger.isAfter){
        handler.afterInsert(Trigger.new);
    }

}