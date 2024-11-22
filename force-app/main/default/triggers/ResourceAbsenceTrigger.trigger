/**
 * Created by fpardon on 21/11/2024.
 */

trigger ResourceAbsenceTrigger on ResourceAbsence (before insert, before update) {

    DateTimeRounder.RoundingRequest request = new DateTimeRounder.RoundingRequest();
    request.intervalMinutes = 5;
    for(ResourceAbsence absence : Trigger.new){
        request.inputDateTime = absence.Start;
        absence.Start = DateTimeRounder.roundSingle(request.inputDateTime, request.intervalMinutes);
        request.inputDateTime = absence.End;
        absence.End = DateTimeRounder.roundSingle(request.inputDateTime, request.intervalMinutes);
    }

}