/**
 * Created by fpardon on 21/11/2024.
 */

trigger TimeSheetEntryTrigger on TimeSheetEntry (before insert, before update) {


        DateTimeRounder.RoundingRequest request = new DateTimeRounder.RoundingRequest();
        request.intervalMinutes = 5;
        for(TimeSheetEntry entry : Trigger.new){
            if(entry.StartTime == null || entry.EndTime == null){
                continue;
            }
            request.inputDateTime = entry.StartTime;
            entry.StartTime = DateTimeRounder.roundSingle(request.inputDateTime, request.intervalMinutes);
            request.inputDateTime = entry.EndTime;
            entry.EndTime = DateTimeRounder.roundSingle(request.inputDateTime, request.intervalMinutes);
        }

}