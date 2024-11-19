/**
 * Created by fpardon on 18/11/2024.
 */

public with sharing class ATAKPerformanceService {

    public static Integer syncATAKPerformanceData(String tsId) {
        ATAKPerformanceWrapper wrapper = prepareATAKPerformanceData(tsId);
        Integer statusCode = sendATAKPerformanceData(wrapper);
        return statusCode;
    }


    /**
     * @description: This method prepares the ATAK performance data for a timesheet
     * @param tsId - TimeSheet record Id
     * @return ATAKPerformanceWrapper object
     */

    public static ATAKPerformanceWrapper prepareATAKPerformanceData(String tsId) {

        TimeSheet ts = [
                SELECT Id, ServiceResource.RelatedRecord.ATAK_Code__c
                FROM Timesheet WHERE Id = :tsId
        ];

        List<TimeSheetEntry> tsEntries = [
                SELECT Id, CreatedDate, StartTime, EndTime, Timesheet.ServiceResource.RelatedRecord.ATAK_Code__c,
                        WorkOrder.Asset.ATAK_Project__r.SubProject_ATAK__c, Total_Hours_Minus_Breaks__c, Code_ATAK_Limbus__c
                FROM TimeSheetEntry WHERE TimesheetId = :tsId
        ];

        List<Mileage_Entry__c> mileageEntries = [
                SELECT Id, CreatedDate,
                        Time_Sheet__r.StartDate, Codes_ATAK_Limbus__c,
                        Calculated_Mileage__c, Work_Order__r.Asset.ATAK_Project__r.SubProject_ATAK__c, Service_Resource__r.RelatedRecord.ATAK_Code__c
                FROM Mileage_Entry__c WHERE Time_Sheet__c = :tsId
        ];

        ATAKPerformanceWrapper wrapper = new ATAKPerformanceWrapper();
        wrapper.personnelcode_writer = ts.ServiceResource.RelatedRecord.ATAK_Code__c; //The one who writes the timesheet, can log for other users

        List<ATAKPerformanceWrapper.Data> dataList = new List<ATAKPerformanceWrapper.Data>();

        /** TODO: Add logic to determine if the timesheet is for personnel or material **/
        for(TimeSheetEntry timeSheetEntry : tsEntries){
            ATAKPerformanceWrapper.Data data = personnelTimesheetToATAKPerformance(timeSheetEntry);
            dataList.add(data);
        }

        for(Mileage_Entry__c mileage : mileageEntries){
            ATAKPerformanceWrapper.Data data = mileageToATAKPerformance(mileage);
            dataList.add(data);
        }

        System.debug('ATAKPerformanceService.prepareATAKPerformanceData - wrapper: ' + wrapper);

        wrapper.data = dataList;
        return wrapper;
    }


    /**
    * @description: This method converts a TimeSheetEntry object to an ATAKPerformanceWrapper.Data object for personnel timesheets
    * @remarks:
    *           - Dates need to be sent as strings in the format 20241008 ("YYYYMMDD")
    *           - Times need to be sent as strings in the format 20240908070000 ("YYYYMMDDHHMMSS")
    *           - If quantity_registration_unit is "P", then quantity is always 1
    *           - If quantity_registration_unit is "HR", then quantity is the number of hours worked
    * @param: tsEntry - TimeSheetEntry record
    * @return: ATAKPerformanceWrapper.Data object
    **/
    public static ATAKPerformanceWrapper.Data personnelTimesheetToATAKPerformance(TimeSheetEntry tsEntry){


        ATAKPerformanceWrapper.Data data = new ATAKPerformanceWrapper.Data();

        //data.day_id = tsEntry.day_id; // Krinkels needs to confirm if this field is needed
        data.registration_timestamp = tsEntry.CreatedDate.format('YYYYMMddHHmmss');
        data.dossier = 'KGC';
        data.performance_date = tsEntry.StartTime.format('YYYYMMdd');
        data.start_timestamp = tsEntry.StartTime.format('YYYYMMddHHmmss');
        data.end_timestamp = tsEntry.EndTime.format('YYYYMMddHHmmss');
        data.performance_resource_code = tsEntry.Timesheet.ServiceResource.RelatedRecord.ATAK_Code__c;
        data.performance_resource_type = 'P'; //P for personnel
        data.projectcode = tsEntry.WorkOrder.Asset.ATAK_Project__r.SubProject_ATAK__c;
        data.quantity_registration_unit = tsEntry.Code_ATAK_Limbus__c;

        // If quantity_registration_unit is "P", then quantity is always 1
        if (data.quantity_registration_unit == 'P') {
            data.quantity = '1';
        } else {
            data.quantity = tsEntry.Total_Hours_Minus_Breaks__c == null ? '0' : String.valueOf(tsEntry.Total_Hours_Minus_Breaks__c);
        }

        System.debug('ATAKPerformanceService.personnelTimesheetToATAKPerformance - data: ' + data);
        return data;
    }

    /**
    * @description: This method converts a Mileage_Entry object to an ATAKPerformanceWrapper.Data object for personnel timesheets
    * @remarks:
    *           - Dates need to be sent as strings in the format 20241008 ("YYYYMMDD")
    *           - Times need to be sent as strings in the format 20240908070000 ("YYYYMMDDHHMMSS")
    * @param: Mileage - Mileage_Entry__c
    * @return: ATAKPerformanceWrapper.Data object
    **/

    public static ATAKPerformanceWrapper.Data mileageToATAKPerformance(Mileage_Entry__c mileage) {
        ATAKPerformanceWrapper.Data data = new ATAKPerformanceWrapper.Data();
        data.registration_timestamp = mileage.CreatedDate.format('YYYYMMddHHmmss');
        data.dossier = 'KGC';
        data.performance_date = Datetime.newInstance(mileage.Time_Sheet__r.StartDate.year(), mileage.Time_Sheet__r.StartDate.month(), mileage.Time_Sheet__r.StartDate.day()).format('YYYYMMdd');
        data.start_timestamp = mileage.CreatedDate.format('YYYYMMddHHmmss');
        data.end_timestamp = mileage.CreatedDate.format('YYYYMMddHHmmss');
        data.performance_resource_code = mileage.Service_Resource__r.RelatedRecord.ATAK_Code__c;
        data.performance_resource_type = 'P'; //P for personnel
        data.projectcode = mileage.Work_Order__r.Asset.ATAK_Project__r.SubProject_ATAK__c;
        data.quantity_registration_unit = mileage.Codes_ATAK_Limbus__c;
        data.quantity = mileage.Calculated_Mileage__c == null ? '0' : String.valueOf(mileage.Calculated_Mileage__c);
        return data;
    }


    /**
    * @description: This method converts a TimeSheetEntry object to an ATAKPerformanceWrapper.Data object for material timesheets
    * @remarks:
    *           - Dates need to be sent as strings in the format 20241008 ("YYYYMMDD")
    *           - Times need to be sent as strings in the format 20240908070000 ("YYYYMMDDHHMMSS")
    *           - If quantity_registration_unit is "HR", then quantity is the number of hours worked
     *          - performance_resource_code is the atak id of the material used
     *          - performance_resource_type is "M" for material
    * @param: tsEntryID - TimeSheetEntry record Id
    * @return: ATAKPerformanceWrapper.Data object
    **/
    public static ATAKPerformanceWrapper.Data materialTimesheetToATAKPerformance(String tsEntryId){

        return new ATAKPerformanceWrapper.Data();

    }

    /**
     * @description: This method sends the ATAK performance data to the ATAK API
     * @param wrapper - ATAKPerformanceWrapper object
     */

    public static Integer sendATAKPerformanceData(ATAKPerformanceWrapper wrapper) {
        String jsonATAKPerformanceData = JSON.serialize(wrapper);
        System.debug('ATAKPerformanceService.sendATAKPerformanceData - jsonATAKPerformanceData: ' + jsonATAKPerformanceData);
        Map<String, String> headers = new Map<String, String>();
        String token = getAuthToken();
        System.debug('ATAKPerformanceService.sendATAKPerformanceData - token: ' + token);
        headers.put('Authorization', token);
        CallOut callout = CallOut.preparePostCallout('callout:ATAK_Performance', jsonATAKPerformanceData, headers);
        CallOutHandler handler = new CallOutHandler();
        HttpResponse response = handler.makeCallout(callout);
        System.debug('ATAKPerformanceService.sendATAKPerformanceData - response: ' + response);

        if(response.getStatusCode() == 200) {
            System.debug('ATAKPerformanceService.sendATAKPerformanceData - Success');
            return response.getStatusCode();
        } else {
            System.debug('ATAKPerformanceService.sendATAKPerformanceData - Error');
            OutboundLoggerService.createOutboundLog(jsonATAKPerformanceData, response.getBody());
            return response.getStatusCode();
        }
    }

    /**
     * @description: This method checks if the auth token is still valid
     * @return String - the auth token
    **/

    private static String checkAuthToken() {
        // Check if the auth token is still valid
        // Due to technical reasons on the ATAK side, we cannot use OAUTH2
        // Tokens are sored in the ATAK_Settings__c custom setting
        // This contains a Token, Validity Start and Validity End
        // If the token is not valid, we need to get a new one

        String token = '';

        ATAK_Settings__c settings = ATAK_Settings__c.getOrgDefaults();

        if (settings != null) {
            if (settings.Token__c != null && settings.Validity_End__c != null) {
                if (settings.Validity_End__c > Datetime.now()) {
                    token = settings.Token__c;
                }
            }
        } else {
            // No settings found, get a new token
            token = getAuthToken();
        }
        return token;
    }

    /**
     * @description: This method gets a new auth token
     * @return String - the auth token
    **/

    public static String getAuthToken() {

        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('callout:ATAK_Token');
        request.setMethod('POST');
        request.setHeader('Content-Type', 'application/json');
        request.setHeader('Accept', 'application/json');

        String body = '{"username":"{!$Credential.Username}","password":"{!$Credential.Password}"}';
        request.setBody(body);
        HttpResponse response = http.send(request);

        String token = '';

        if (response.getStatusCode() == 200) {
            Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            token = (String) results.get('token');
        } else {
            token = '';
        }
        return token;
    }


}