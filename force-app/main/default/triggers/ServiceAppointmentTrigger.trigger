/**
 * Created by fpardon on 28/10/2024.
 */

trigger ServiceAppointmentTrigger on ServiceAppointment (after insert, after update) {

    ServiceAppointmentTriggerHandler handler = new ServiceAppointmentTriggerHandler();

    if(Trigger.isInsert && Trigger.isAfter){
        handler.afterInsert(Trigger.new);
    }

    if(Trigger.isUpdate && Trigger.isAfter){
        handler.afterUpdate(Trigger.new, Trigger.oldMap);
    }

}