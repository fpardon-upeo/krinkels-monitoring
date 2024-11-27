/**
 * Created by fpardon on 21/11/2024.
 */

trigger ResourceAbsenceTrigger on ResourceAbsence (before insert, before update, after insert, after update) {

    if(Trigger.isBefore){
        DateTimeRounder.RoundingRequest request = new DateTimeRounder.RoundingRequest();
        request.intervalMinutes = 5;
        for(ResourceAbsence absence : Trigger.new){
            request.inputDateTime = absence.Start;
            absence.Start = DateTimeRounder.roundSingle(request.inputDateTime, request.intervalMinutes);
            request.inputDateTime = absence.End;
            absence.End = DateTimeRounder.roundSingle(request.inputDateTime, request.intervalMinutes);
        }
    }

    if(Trigger.isAfter) {
        if(Trigger.isInsert ) {
            TimeSheetCalculationService.processResourceAbsenceChanges(Trigger.new);
        } else if(Trigger.isUpdate) {
            //Only do something if the start or end date has changed
            for(ResourceAbsence absence : Trigger.new){
                ResourceAbsence oldAbsence = Trigger.oldMap.get(absence.Id);
                if(oldAbsence.Start != absence.Start || oldAbsence.End != absence.End){
                    TimeSheetCalculationInvocable.TimeSheetCalculationRequest request = new TimeSheetCalculationInvocable.TimeSheetCalculationRequest();
                    List<TimeSheetCalculationInvocable.TimeSheetCalculationRequest> requests = new List<TimeSheetCalculationInvocable.TimeSheetCalculationRequest>();
                    request.recordId = absence.Id;
                    request.recordType = 'ResourceAbsence';
                    requests.add(request);
                    TimeSheetCalculationInvocable.calculateTimeSheetValues(requests);
                    break;
                }
            }
        }
    }

}