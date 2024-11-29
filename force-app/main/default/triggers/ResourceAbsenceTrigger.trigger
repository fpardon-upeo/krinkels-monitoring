/**
 * Created by fpardon on 21/11/2024.
 */

trigger ResourceAbsenceTrigger on ResourceAbsence (before insert, before update, after insert, after update) {

    if(Trigger.isBefore){
        DateTimeRounder.RoundingRequest request = new DateTimeRounder.RoundingRequest();
        List<String> resourceIds = new List<String>();
        List<Date> dates = new List<Date>();
        request.intervalMinutes = 5;
        for(ResourceAbsence absence : Trigger.new){
            System.debug('ResourceAbsenceTrigger: ' + absence);
            request.inputDateTime = absence.Start;
            absence.Start = DateTimeRounder.roundSingle(request.inputDateTime, request.intervalMinutes);
            request.inputDateTime = absence.End;
            absence.End = DateTimeRounder.roundSingle(request.inputDateTime, request.intervalMinutes);
            if(absence.Type == 'Standard'){
                resourceIds.add(absence.ResourceId);
                dates.add(absence.Start.date());
            }
        }

        System.debug('ResourceAbsenceTrigger resourceIds: ' + resourceIds);
        System.debug('ResourceAbsenceTrigger dates: ' + dates);

        //Get the timesheets for the resources and dates
        List<TimeSheet> timeSheets = [SELECT Id, ServiceResourceId, StartDate FROM TimeSheet WHERE ServiceResourceId IN :resourceIds AND StartDate IN :dates];
        for(ResourceAbsence absence : Trigger.new){
            if(absence.Type == 'Standard'){
                System.debug('Type is Standard');
                for(TimeSheet timeSheet : timeSheets){
                    if(timeSheet.ServiceResourceId == absence.ResourceId && timeSheet.StartDate == absence.Start.date()){
                        System.debug('TimeSheet found');
                        absence.Time_Sheet__c = timeSheet.Id;
                        break;
                    }
                }
            }
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