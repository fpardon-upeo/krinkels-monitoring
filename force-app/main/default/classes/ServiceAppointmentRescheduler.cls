/**
* Created by Frederik on 10/22/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class ServiceAppointmentRescheduler {

    public static List<ServiceAppointment> rescheduleAppointments(ServiceAppointment sa, Datetime newScheduledDate){
        //If the parent record is a WorkOrder, we can reschedule the appointments
        if (sa.ParentRecord instanceof WorkOrder) {
            WorkOrder wo = (WorkOrder)sa.ParentRecord;
            String recurrencePattern = wo.Asset.Recurrence_Pattern__c;
            System.debug('Original Pattern: ' + recurrencePattern);

            // Convert the times to user's timezone before calculations
            DateTime saStartTimeInUserTZ = sa.SchedStartTime;
            DateTime newScheduledDateInUserTZ = newScheduledDate;

            RRuleAdjuster adjuster = new RRuleAdjuster(
                    recurrencePattern,
                    saStartTimeInUserTZ  // Use timezone-adjusted time
            );

            // Calculate new pattern based on moved appointment
            RRuleAdjuster.RRuleResult result = adjuster.calculateAdjustment(
                    saStartTimeInUserTZ,  // Use timezone-adjusted time
                    newScheduledDateInUserTZ  // Use timezone-adjusted time
            );

            //Update the recurrence on the original asset
            Asset origAsset = new Asset(Id = wo.Asset.Id, Recurrence_Pattern__c = result.newRRule, Recurrence_Text__c = RRuleDescriptionGenerator.generateDescription(result.newRRule));
            update origAsset;


            List<ServiceAppointment> futureAppointments = getRelatedFutureAppointments(sa.Id);

            TimeZone userTZ = UserInfo.getTimeZone();
            DateTime startTime = sa.SchedStartTime.addSeconds(userTZ.getOffset(sa.SchedStartTime)/1000);
            DateTime endTime = sa.SchedEndTime.addSeconds(userTZ.getOffset(sa.SchedEndTime)/1000);
            // Ensure end is after start by comparing timestamps
            Long durationInMinutes = Math.abs((endTime.getTime() - startTime.getTime()) / 60000);
            Integer durationInMinutesInt = durationInMinutes.intValue();
            System.debug('Duration in minutes: ' + durationInMinutesInt);

            if(futureAppointments != null){
                for(Integer i = 0; i < futureAppointments.size(); i++){
                    ServiceAppointment futureAppointment = futureAppointments[i];
                    //System.debug('Future Appointment: ' + futureAppointment.AppointmentNumber);
                    //System.debug('newDates at i: ' +i + ' ' + result.newDates[i]);

                    // Since RRuleAdjuster is already giving us UTC times, use them directly
                    futureAppointment.SchedStartTime = i == 0 ? result.newDates[i+1] : result.newDates[i+1];
                    futureAppointment.SchedEndTime = i == 0 ? result.newDates[i+1].addMinutes(durationInMinutesInt) : result.newDates[i+1].addMinutes(durationInMinutesInt);

                    //System.debug('New Start Time (UTC): ' + futureAppointment.SchedStartTime);
                    //System.debug('New End Time (UTC): ' + futureAppointment.SchedEndTime);
                }
            }

            return futureAppointments;
        }
        return null;
    }


    //Returns all future appointments so we can process them
    public static List<ServiceAppointment> getRelatedFutureAppointments(String serviceAppointmentId){
        ServiceAppointment sa = [SELECT Id, SchedStartTime, SchedEndTime, DueDate, AppointmentNumber,
                TYPEOF ParentRecord
                        WHEN WorkOrder THEN Asset.Recurrence_Pattern__c, Asset.Id
                END
        FROM ServiceAppointment WHERE Id = :serviceAppointmentId LIMIT 1];


        if(sa.ParentRecord instanceof WorkOrder){
            WorkOrder wo = (WorkOrder)sa.ParentRecord;
            String recurrencePattern = wo.Asset.Recurrence_Pattern__c;
            System.debug('Original Pattern: ' + recurrencePattern);
            System.debug('Asset Id : ' + wo.Asset.Id);

            //Get all future appointments or same day appointments that share the same Parent Asset Id
            List<ServiceAppointment> futureAppointments = [
                    SELECT Id, SchedStartTime, SchedEndTime, DueDate, AppointmentNumber
                    FROM ServiceAppointment
                    WHERE ParentRecordId IN (SELECT Id FROM WorkOrder WHERE AssetId = :wo.Asset.Id)
                    AND DueDate >= :sa.SchedStartTime
                    AND Id != :sa.Id
                    ORDER BY DueDate];

            System.debug('Future Appointments: ' + futureAppointments.size());
            return futureAppointments;
        }

        return null;
    }
}