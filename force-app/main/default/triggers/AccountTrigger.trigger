/**
 * Created by Frederik on 12/4/2024.
 * Description: Trigger for Account object that creates Operating Hours and Time Slots after account creation
 * Change Log:
 * Dependencies: AccountTriggerHandler.cls
 */
trigger AccountTrigger on Account (after insert) {

    // Best practice to use a trigger handler pattern and avoid logic in the trigger itself
    if (Trigger.isAfter) {
        if (Trigger.isInsert) {
            AccountTriggerHandler.createOperatingHoursAndSlots(Trigger.new);
        }
    }
}