/**
 * Created by fpardon on 18/11/2024.
 */

public with sharing class ATAKPerformanceServiceInvocable {

    public class RequestWrapper {
        @InvocableVariable(required=true Label='Timesheet Id' Description='The Id of the timesheet to process')
        public String timesheetId;
    }

    public class ResponseWrapper {
        @InvocableVariable (Label='Success' Description='Indicates if the timesheet was processed successfully')
        public Integer statusCode;
    }

    @InvocableMethod(Label='Process Timesheet' Callout=true Description='Process a timesheet in ATAK')
    public static void processTimesheet(List<RequestWrapper> requests) {
        List<ResponseWrapper> response = new List<ResponseWrapper>();
        for(RequestWrapper request : requests) {
            ResponseWrapper resp = new ResponseWrapper();
            String timesheetId = request.timesheetId;
            ATAKWorkLogService.createWorkLogsForTimeSheet(timesheetId);
            resp.statusCode = 200;
            response.add(resp);
        }
    }
}