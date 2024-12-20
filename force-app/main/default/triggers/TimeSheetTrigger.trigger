/**
 * Created by fpardon on 19/12/2024.
 */

trigger TimeSheetTrigger on TimeSheet (after insert) {

    if(Trigger.isAfter && Trigger.isInsert){
        TimeSheetHandler.onAfterInsert(Trigger.new);
    }
}