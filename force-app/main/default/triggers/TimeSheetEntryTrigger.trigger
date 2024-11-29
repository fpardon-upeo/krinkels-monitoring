/**
 * Created by fpardon on 21/11/2024.
 */

trigger TimeSheetEntryTrigger on TimeSheetEntry (before insert, before update, after insert, after update) {

    if(Trigger.isBefore){
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

    if(Trigger.isAfter){
        System.debug('Trigger context: ' + Trigger.operationType + ' - Is Insert: ' + Trigger.isInsert + ' - Is Update: ' + Trigger.isUpdate);
        if(Trigger.isInsert){
            TimeSheetCalculationService.processTimeSheetEntryChanges(Trigger.new);
            TimeSheetProjectLinkService.handler(Trigger.new);
        }
        if(Trigger.isUpdate){
            //Only process the entries whose start or end time has changed
            List<TimeSheetEntry> entriesToUpdate = new List<TimeSheetEntry>();
            List<TimeSheetEntry> entriesForWorkOrderRelink = new List<TimeSheetEntry>();
            for(TimeSheetEntry entry : Trigger.new){
                TimeSheetEntry oldEntry = Trigger.oldMap.get(entry.Id);
                if(oldEntry.StartTime != entry.StartTime || oldEntry.EndTime != entry.EndTime){
                    entriesToUpdate.add(entry);
                }
                System.debug('Old Work Order Id: ' + oldEntry.WorkOrderId + ' - New Work Order Id: ' + entry.WorkOrderId);
                if(oldEntry.WorkOrderId != entry.WorkOrderId){
                    entriesForWorkOrderRelink.add(entry);
                }
            }
            if(entriesToUpdate.size() > 0){
                TimeSheetCalculationService.processTimeSheetEntryChanges(entriesToUpdate);
            }

            if(entriesForWorkOrderRelink.size() > 0){
                System.debug('Relinking Work Orders');
                TimeSheetProjectLinkService.handler(entriesForWorkOrderRelink);
            }
        }

    }

}