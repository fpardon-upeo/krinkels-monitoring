# ATAKPerformanceService Class

ATAKPerformanceService handles the preparation and sending of performance data to ATAK. 
The following business rules are applied: 
TIMESHEET ENTRY FILTERING RULES: 
1. Depot Visits: 
- Depot work at start of day: Filtered out until first production work 
- Depot work in middle of day: Treated as normal work and included 
- Depot work at end of day: Filtered out after last production work 
2. Travel Time (RT): 
- First travel to first customer: Included 
- Travel between customers: Included 
- Travel between customer and depot (mid-day): Included 
- Travel from last customer: Filtered out 
3. Work Time (HR): 
- All production work: Included 
- Depot work before first customer: Filtered out 
- Depot work between customers: Included 
- Depot work after last customer: Filtered out 
4. Winter Service: 
- When Starting_Allowance_Winter_Service__c &#x3D; true on an entry: 
- Original entry included with original code (HR/RT) 
- Additional entry created with code &#x27;P&#x27; 
- Requires Work Order&#x27;s Asset to be linked to &#x27;Winter Maintenance&#x27; Product 
MILEAGE RULES: 
- All mileage entries are included 
- Mileage is linked to customer project (not depot) 
- Starting mileage linked to first customer project 
- Ending mileage linked to last customer project 
MATERIAL CONSUMPTION RULES: 
- All material entries included 
- Uses type &#x27;E&#x27; for equipment 
- Uses &#x27;MU&#x27; as quantity registration unit 
- Quantities formatted with 2 decimal places 
DATA TRANSFORMATION: 
- Dates formatted as: YYYYMMDD 
- Timestamps formatted as: YYYYMMDDHHmmss 
- Quantities for &#x27;P&#x27; code are always &#x27;1&#x27; 
- Project codes taken from Asset.ATAK_Project__r.SubProject_ATAK__c

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
* ATAKPerformanceService handles the preparation and sending of performance data to ATAK.
* The following business rules are applied:
*
* TIMESHEET ENTRY FILTERING RULES:
* 1. Depot Visits:
*    - Depot work at start of day: Filtered out until first production work
*    - Depot work in middle of day: Treated as normal work and included
*    - Depot work at end of day: Filtered out after last production work
*
* 2. Travel Time (RT):
*    - First travel to first customer: Included
*    - Travel between customers: Included
*    - Travel between customer and depot (mid-day): Included
*    - Travel from last customer: Filtered out
*
* 3. Work Time (HR):
*    - All production work: Included
*    - Depot work before first customer: Filtered out
*    - Depot work between customers: Included
*    - Depot work after last customer: Filtered out
*
* 4. Winter Service:
*    - When Starting_Allowance_Winter_Service__c = true on an entry:
*      - Original entry included with original code (HR/RT)
*      - Additional entry created with code 'P'
*    - Requires Work Order's Asset to be linked to 'Winter Maintenance' Product
*
* MILEAGE RULES:
* - All mileage entries are included
* - Mileage is linked to customer project (not depot)
* - Starting mileage linked to first customer project
* - Ending mileage linked to last customer project
*
* MATERIAL CONSUMPTION RULES:
* - All material entries included
* - Uses type 'E' for equipment
* - Uses 'MU' as quantity registration unit
* - Quantities formatted with 2 decimal places
*
* DATA TRANSFORMATION:
* - Dates formatted as: YYYYMMDD
* - Timestamps formatted as: YYYYMMDDHHmmss
* - Quantities for 'P' code are always '1'
* - Project codes taken from Asset.ATAK_Project__r.SubProject_ATAK__c
*/

public with sharing class ATAKPerformanceService {

    // List of performance codes where project code becomes 'ATAKDEFAULT'
    private static final Set<String> ATAKDEFAULT_CODES = new Set<String>{
            'VV', 'A', 'Z', 'SP-', 'AF'
    };


    /**
     * @description: This method prepares the ATAK performance data for a timesheet
     * @param tsId - TimeSheet record Id
     * @return ATAKPerformanceWrapper object
     */

    public static ATAKPerformanceWrapper prepareATAKPerformanceDataIndoor(String tsId) {

        TimeSheet ts = [
                SELECT Id, ServiceResource.RelatedRecord.ATAK_Code__c, ServiceResourceId, StartDate
                FROM Timesheet
                WHERE Id = :tsId
        ];

        List<TimeSheetEntry> tsEntries = [
                SELECT Id, WorkOrderId, WorkOrder.WorkType.Name, WorkOrder.Subject, CreatedDate, StartTime, EndTime, Timesheet.ServiceResource.RelatedRecord.ATAK_Code__c,
                        WorkOrder.Asset.ATAK_Project__r.SubProject_ATAK__c, Total_Hours_Minus_Breaks__c, Code_ATAK_Limbus__c,
                        Starting_Allowance_Winter_Service__c, Urgent_Intervention__c
                FROM TimeSheetEntry
                WHERE TimesheetId = :tsId
                ORDER BY StartTime ASC
        ];

        ATAKPerformanceWrapper wrapper = new ATAKPerformanceWrapper();
        wrapper.personnelcode_writer = ts.ServiceResource.RelatedRecord.ATAK_Code__c; //The one who writes the timesheet, can log for other users
        List<ATAKPerformanceWrapper.Data> dataList = new List<ATAKPerformanceWrapper.Data>();

        // Create a list of work order ids so we can get the subproject of the first and last work order
        // We also need this list to get the materials
        List<String> workOrderIds = new List<String>();

        // Loop through the timesheet entries and add them to the data list
        for (TimeSheetEntry timeSheetEntry : tsEntries) {
            ATAKPerformanceWrapper.Data data = personnelTimesheetToATAKPerformance(timeSheetEntry);
            dataList.add(data);
            workOrderIds.add(timeSheetEntry.WorkOrderId);
            if (timeSheetEntry.Starting_Allowance_Winter_Service__c == true) {
                //Add a second entry for the winter service, Code_ATAK_Limbus__c = "P"
                timeSheetEntry.Code_ATAK_Limbus__c = 'P';
                ATAKPerformanceWrapper.Data dataWinter = personnelTimesheetToATAKPerformance(timeSheetEntry);
                dataList.add(dataWinter);
            }
        }

        Boolean isLeader = resourceIsCrewLeader(ts.ServiceResourceId);

        if (isLeader == true) {

            List<WorkOrder> workOrders = [
                    SELECT Id, (SELECT Total_Hours__c FROM TimeSheetEntries WHERE Is_Kilometer_Allowance_Entry__c = FALSE)
                    FROM WorkOrder
                    WHERE Id IN :workOrderIds
            ];

            Map<String, Decimal> workOrderHours = new Map<String, Decimal>();
            for (WorkOrder workOrder : workOrders) {
                Decimal totalHours = 0;
                for (TimeSheetEntry tse : workOrder.TimeSheetEntries) {
                    totalHours += tse.Total_Hours__c;
                }
                workOrderHours.put(workOrder.Id, totalHours);
            }

            List<ProductConsumed> materials = [
                    SELECT Id, CreatedDate, Product2.ATAK_Code__c, QuantityConsumed, WorkOrder.Asset.ATAK_Project__r.SubProject_ATAK__c
                    FROM ProductConsumed
                    WHERE WorkOrderId IN :workOrderIds
            ];

            // Loop through the materials and add them to the data list
            for (ProductConsumed material : materials) {
                ATAKPerformanceWrapper.Data data = materialTimesheetToATAKPerformance(material, workOrderHours.get(material.WorkOrderId));
                dataList.add(data);
            }
        }

        wrapper.data = dataList;
        return wrapper;

    }


    /**
     * @description: This method prepares the ATAK performance data for a timesheet
     * @param tsId - TimeSheet record Id
     * @return ATAKPerformanceWrapper object
     */

    public static ATAKPerformanceWrapper prepareATAKPerformanceData(String tsId) {

        // Get the timesheet, timesheet entries, mileage entries and materials

        TimeSheet ts = [
                SELECT Id, ServiceResource.RelatedRecord.ATAK_Code__c
                FROM Timesheet
                WHERE Id = :tsId
        ];

        List<TimeSheetEntry> tsEntries = [
                SELECT Id, WorkOrderId, WorkOrder.WorkType.Name, WorkOrder.Subject, CreatedDate, StartTime, EndTime, Timesheet.ServiceResource.RelatedRecord.ATAK_Code__c,
                        WorkOrder.Asset.ATAK_Project__r.SubProject_ATAK__c, Total_Hours_Minus_Breaks__c, Code_ATAK_Limbus__c,
                        Starting_Allowance_Winter_Service__c, Urgent_Intervention__c
                FROM TimeSheetEntry
                WHERE TimesheetId = :tsId
                AND Type != 'Small Leave'
                ORDER BY StartTime ASC
        ];
        System.debug('ATAKPerformanceService.prepareATAKPerformanceData - tsEntries: ' + tsEntries);
        System.debug('ATAKPerformanceService.prepareATAKPerformanceData - tsEntries: ' + tsEntries.size());

        //Loop through the entries from first to last. The first entries with Work Type "Internal Depot" before we get to a work type with "Production Time" need to be removed

        Boolean foundProductionTime = false;
        Boolean firstTravelSkipped = false;
        List<TimeSheetEntry> tsEntriesFiltered = new List<TimeSheetEntry>();
        TimeSheetEntry lastTravelEntry = null;

        // First pass - filter from start and identify last travel
        Integer counter = 0;
        Integer firstProductionIndex = -1;
        for (TimeSheetEntry tsEntry : tsEntries) {
            counter++;
            if (tsEntry.WorkOrder.WorkType.Name != 'Internal Depot' && tsEntry.WorkOrder.WorkType.Name != null) {
                System.debug('tsEntry.WorkOrder.WorkType.Name: '+ tsEntry.WorkOrder.WorkType.Name);
                if (firstProductionIndex == -1) {
                    firstProductionIndex = counter;
                }
                System.debug('ATAKPerformanceService.prepareATAKPerformanceData - Found production work');
                foundProductionTime = true;

                // If this is our first RT after finding production work, skip it
                if (!firstTravelSkipped && tsEntry.Code_ATAK_Limbus__c == 'RT') {
                    System.debug('ATAKPerformanceService.prepareATAKPerformanceData - Skipping first travel');
                    firstTravelSkipped = true;
                    continue;
                }

                // Track potential last travel entry
                if (tsEntry.Code_ATAK_Limbus__c == 'RT') {
                    System.debug('ATAKPerformanceService.prepareATAKPerformanceData - Found potential last travel');
                    lastTravelEntry = tsEntry;
                } else {
                    // If we found a non-travel entry, clear the last travel
                    lastTravelEntry = null;
                }
            }
            System.debug('tse before foundProductionTime: ' + tsEntry);
            if (foundProductionTime == true) {
                System.debug('tse added because foundProductionTime is true: ' + tsEntry);
                tsEntriesFiltered.add(tsEntry);
            }
        }

        //Second pass - filter from end
        foundProductionTime = false;
        List<TimeSheetEntry> tsEntriesFilteredFinal = new List<TimeSheetEntry>();
        for (Integer i = tsEntriesFiltered.size() - 1; i >= 0; i--) {
            TimeSheetEntry tsEntry = tsEntriesFiltered[i];
            if (tsEntry.WorkOrder.WorkType.Name != 'Internal Depot' && tsEntry.WorkOrder.WorkType.Name != null) {
                foundProductionTime = true;
            }
            if (foundProductionTime == true) {
                tsEntriesFilteredFinal.add(tsEntry);
            }
        }

        // Now handle last travel time
        TimeSheetEntry lastEntry = tsEntriesFilteredFinal.isEmpty() ? null : tsEntriesFilteredFinal[0];
        if (lastEntry != null && lastEntry.Code_ATAK_Limbus__c == 'RT') {
            tsEntriesFilteredFinal.remove(0);
        }

        System.debug('ATAKPerformanceService.prepareATAKPerformanceData - tsEntriesFilteredFinal: ' + tsEntriesFilteredFinal);
        System.debug('ATAKPerformanceService.prepareATAKPerformanceData - tsEntriesFilteredFinal: ' + tsEntriesFilteredFinal.size());

        //Now we need to reverse the list
        List<TimeSheetEntry> reversedList = new List<TimeSheetEntry>();
        for (Integer i = tsEntriesFilteredFinal.size() - 1; i >= 0; i--) {
            reversedList.add(tsEntriesFilteredFinal[i]);
        }

        System.debug('ATAKPerformanceService.prepareATAKPerformanceData - reversedList: ' + reversedList);
        System.debug('ATAKPerformanceService.prepareATAKPerformanceData - reversedList: ' + reversedList.size());


        List<Mileage_Entry__c> mileageEntries = [
                SELECT Id, CreatedDate,
                        Time_Sheet__r.StartDate, Codes_ATAK_Limbus__c, Type__c,
                        Calculated_Mileage__c, Work_Order__r.Asset.ATAK_Project__r.SubProject_ATAK__c, Service_Resource__r.RelatedRecord.ATAK_Code__c
                FROM Mileage_Entry__c
                WHERE Time_Sheet__c = :tsId
        ];

        // Create the wrapper object and add the data
        ATAKPerformanceWrapper wrapper = new ATAKPerformanceWrapper();
        wrapper.personnelcode_writer = ts.ServiceResource.RelatedRecord.ATAK_Code__c; //The one who writes the timesheet, can log for other users
        List<ATAKPerformanceWrapper.Data> dataList = new List<ATAKPerformanceWrapper.Data>();

        // Create a list of work order ids so we can get the subproject of the first and last work order
        // We also need this list to get the materials
        List<String> workOrderIds = new List<String>();

        List<String> tseIds = new List<String>();
        // Get the Ids currently in the list
        for (TimeSheetEntry tse : reversedList) {
            tseIds.add(tse.Id);
        }

        //Get all TSEs from the Timesheet that are not in the list and where Code_ATAK_Limbus__c != 'RT' or != 'HR'
        List<TimeSheetEntry> tses = [
                SELECT Id, WorkOrderId, WorkOrder.WorkType.Name, WorkOrder.Subject, CreatedDate, StartTime, EndTime, Timesheet.ServiceResource.RelatedRecord.ATAK_Code__c,
                        WorkOrder.Asset.ATAK_Project__r.SubProject_ATAK__c, Total_Hours_Minus_Breaks__c, Code_ATAK_Limbus__c,
                        Starting_Allowance_Winter_Service__c, Urgent_Intervention__c
                FROM TimeSheetEntry
                WHERE TimesheetId = :tsId AND Id NOT IN :tseIds AND Code_ATAK_Limbus__c != 'RT' AND Code_ATAK_Limbus__c != 'HR'
                ORDER BY StartTime ASC
        ];

        //Check this list for missing ATAK codes. If there are any, we need to process them.
        /*
        List<TimeSheetEntry> tsesToProcess = new List<TimeSheetEntry>();
        for (TimeSheetEntry tse : tses) {
            if (tse.Timesheet.ServiceResource.RelatedRecord.ATAK_Code__c == null) {
                tsesToProcess.add(tse);
            }
        }

         */

        //Add the new TSEs to the list
        for (TimeSheetEntry tse : tses) {
            reversedList.add(tse);
        }


        // Loop through the timesheet entries and add them to the data list
        for (TimeSheetEntry timeSheetEntry : reversedList) {
            ATAKPerformanceWrapper.Data data = personnelTimesheetToATAKPerformance(timeSheetEntry);
            dataList.add(data);
            if (timeSheetEntry.WorkOrderId != null && !ATAKDEFAULT_CODES.contains(timeSheetEntry.Code_ATAK_Limbus__c)) {
                //Add the work order id to the list (if it is not null)
                workOrderIds.add(timeSheetEntry.WorkOrderId);
            }
            if (timeSheetEntry.Starting_Allowance_Winter_Service__c == true) {
                System.debug('!!!!! ATAKPerformanceService.prepareATAKPerformanceData - Winter Service');
                //Add a second entry for the winter service, Code_ATAK_Limbus__c = "P"
                timeSheetEntry.Code_ATAK_Limbus__c = 'P';
                ATAKPerformanceWrapper.Data dataWinter = personnelTimesheetToATAKPerformance(timeSheetEntry);
                dataList.add(dataWinter);
            }
            if (timeSheetEntry.Urgent_Intervention__c == true) {
                System.debug('!!!!! ATAKPerformanceService.prepareATAKPerformanceData - Urgent Service');
                //Add a second entry for the urgent intervention, Code_ATAK_Limbus__c = "DIVU"
                timeSheetEntry.Code_ATAK_Limbus__c = 'DIVU';
                ATAKPerformanceWrapper.Data dataWinter = personnelTimesheetToATAKPerformance(timeSheetEntry);
                dataList.add(dataWinter);
            }
        }

        //Before adding the mileage entries, we need to get the SubProject_ATAK__c of the first and last work order
        String firstWorkOrderId = !workOrderIds.isEmpty() ? workOrderIds[0] : null;
        String lastWorkOrderId = !workOrderIds.isEmpty() ? workOrderIds[workOrderIds.size() - 1] : null;

        String firstSubProject;

        try {
            firstSubProject = [
                    SELECT Asset.ATAK_Project__r.SubProject_ATAK__c
                    FROM WorkOrder
                    WHERE Id = :firstWorkOrderId
            ].Asset.ATAK_Project__r.SubProject_ATAK__c;
        } catch (Exception e) {
            firstSubProject = '';
        }

        String lastSubProject;

        try {
            lastSubProject = [
                    SELECT Asset.ATAK_Project__r.SubProject_ATAK__c
                    FROM WorkOrder
                    WHERE Id = :lastWorkOrderId
            ].Asset.ATAK_Project__r.SubProject_ATAK__c;
        } catch (Exception e) {
            lastSubProject = '';
        }

        // Loop through the mileage entries and add them to the data list
        for (Mileage_Entry__c mileage : mileageEntries) {
            ATAKPerformanceWrapper.Data data = mileageToATAKPerformance(mileage, firstSubProject, lastSubProject);
            dataList.add(data);
        }

        // Get the materials based on the work order ids

        if (resourceIsCrewLeader(ts.ServiceResourceId) == true) {

            List<WorkOrder> workOrders = [
                    SELECT Id, (SELECT Total_Hours_Minus_Breaks_and_Pauses__c FROM TimeSheetEntries WHERE Is_Kilometer_Allowance_Entry__c = FALSE AND TimeSheetId = :tsId)
                    FROM WorkOrder
                    WHERE Id IN :workOrderIds
            ];

            Map<String, Decimal> workOrderHours = new Map<String, Decimal>();
            for (WorkOrder workOrder : workOrders) {
                Decimal totalHours = 0;
                for (TimeSheetEntry tse : workOrder.TimeSheetEntries) {
                    totalHours += tse.Total_Hours_Minus_Breaks_and_Pauses__c;
                }
                workOrderHours.put(workOrder.Id, totalHours);
            }

            List<ProductConsumed> materials = [
                    SELECT Id, CreatedDate, Product2.ATAK_Code__c, QuantityConsumed, WorkOrder.Asset.ATAK_Project__r.SubProject_ATAK__c
                    FROM ProductConsumed
                    WHERE WorkOrderId IN :workOrderIds
            ];

            // Loop through the materials and add them to the data list
            for (ProductConsumed material : materials) {
                ATAKPerformanceWrapper.Data data = materialTimesheetToATAKPerformance(material, workOrderHours.get(material.WorkOrderId));
                dataList.add(data);
            }

        }

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
     *@outstanding: What do we do with the first travel time record of the day? From a payroll perspective this is covered
    *               by the kilometer allowance. Do we need to send this to ATAK for reporting reasons?
     *              And if so, using which code?
    * @param: tsEntry - TimeSheetEntry record
    * @return: ATAKPerformanceWrapper.Data object
    **/
    public static ATAKPerformanceWrapper.Data personnelTimesheetToATAKPerformance(TimeSheetEntry tsEntry) {
        ATAKPerformanceWrapper.Data data = new ATAKPerformanceWrapper.Data();
        data.registration_timestamp = tsEntry.CreatedDate.format('YYYYMMddHHmmss');
        data.dossier = 'KGC';
        data.performance_date = tsEntry.StartTime.format('YYYYMMdd');
        data.start_timestamp = tsEntry.StartTime.format('YYYYMMddHHmmss');
        data.end_timestamp = tsEntry.EndTime.format('YYYYMMddHHmmss');
        data.performance_resource_code = tsEntry.Timesheet.ServiceResource.RelatedRecord.ATAK_Code__c;
        data.performance_resource_type = 'P';
        data.projectcode = tsEntry.WorkOrder.Asset.ATAK_Project__r.SubProject_ATAK__c;
        data.quantity_registration_unit = tsEntry.Code_ATAK_Limbus__c;
        data.remarks = tsEntry.WorkOrder.Subject;

        // Override projectcode if TSE code is in ATAKDEFAULT_CODES
        if (ATAKDEFAULT_CODES.contains(tsEntry.Code_ATAK_Limbus__c)) {
            data.projectcode = 'ATAKDEFAULT';
        }

        if (data.quantity_registration_unit == 'P' || data.quantity_registration_unit == 'DIVU') {
            data.quantity = '1';
        } else {
            data.quantity = tsEntry.Total_Hours_Minus_Breaks__c == null
                    ? '0'
                    : String.valueOf(tsEntry.Total_Hours_Minus_Breaks__c);
        }
        return data;
    }

    /**
    * @description: This method converts a Mileage_Entry object to an ATAKPerformanceWrapper.Data object for personnel timesheets
    * @remarks:
    *           - Dates need to be sent as strings in the format 20241008 ("YYYYMMDD")
    *           - Times need to be sent as strings in the format 20240908070000 ("YYYYMMDDHHMMSS")
    * @param: Mileage - Mileage_Entry__c
    * @param: firstSubProject - SubProject_ATAK__c of the first work order
    * @param: lastSubProject - SubProject_ATAK__c of the last work order
     *
    * @return: ATAKPerformanceWrapper.Data object
    **/

    public static ATAKPerformanceWrapper.Data mileageToATAKPerformance(Mileage_Entry__c mileage, String firstSubProject, String lastSubProject) {
        ATAKPerformanceWrapper.Data data = new ATAKPerformanceWrapper.Data();

        String atakProject = '';

        if (mileage.Work_Order__r.Asset.ATAK_Project__r.SubProject_ATAK__c == null && mileage.Type__c == ' Starting') {
            atakProject = firstSubProject;
        } else if (mileage.Work_Order__r.Asset.ATAK_Project__r.SubProject_ATAK__c == null && mileage.Type__c == ' Ending') {
            atakProject = lastSubProject;
        } else {
            atakProject = mileage.Work_Order__r.Asset.ATAK_Project__r.SubProject_ATAK__c;
        }

        data.registration_timestamp = mileage.CreatedDate.format('YYYYMMddHHmmss');
        data.dossier = 'KGC';
        data.performance_date = Datetime.newInstance(mileage.Time_Sheet__r.StartDate.year(), mileage.Time_Sheet__r.StartDate.month(), mileage.Time_Sheet__r.StartDate.day()).format('YYYYMMdd');
        data.start_timestamp = mileage.CreatedDate.format('YYYYMMddHHmmss');
        data.end_timestamp = mileage.CreatedDate.format('YYYYMMddHHmmss');
        data.performance_resource_code = mileage.Service_Resource__r.RelatedRecord.ATAK_Code__c;
        data.performance_resource_type = 'P'; //P for personnel
        data.projectcode = atakProject;
        data.quantity_registration_unit = mileage.Codes_ATAK_Limbus__c;
        data.quantity = mileage.Calculated_Mileage__c == null ? '0' : String.valueOf(mileage.Calculated_Mileage__c);
        return data;
    }


    /**
    * @description: This method converts a TimeSheetEntry object to an ATAKPerformanceWrapper.Data object for material timesheets
    * @remarks:
    *           - Dates need to be sent as strings in the format 20241008 ("YYYYMMDD")
    *           - Times need to be sent as strings in the format 20240908070000 ("YYYYMMDDHHMMSS")
    *           - quantity_registration_unit is "MU", then quantity is the number of hours worked
     *          - performance_resource_code is the atak id of the material used
     *          - performance_resource_type is "M" for material
    * @param: material - ProductConsumed record
    * @return: ATAKPerformanceWrapper.Data object
    **/
    public static ATAKPerformanceWrapper.Data materialTimesheetToATAKPerformance(ProductConsumed material, Decimal workOrderHours) {

        System.debug('ATAKPerformanceService.materialTimesheetToATAKPerformance - material: ' + material);
        System.debug('ATAKPerformanceService.materialTimesheetToATAKPerformance - workOrderHours: ' + workOrderHours);

        ATAKPerformanceWrapper.Data data = new ATAKPerformanceWrapper.Data();
        data.registration_timestamp = material.CreatedDate.format('YYYYMMddHHmmss');
        data.dossier = 'KGC';
        data.performance_date = material.CreatedDate.format('YYYYMMdd');
        data.start_timestamp = material.CreatedDate.format('YYYYMMddHHmmss');
        data.end_timestamp = material.CreatedDate.format('YYYYMMddHHmmss');
        data.performance_resource_code = material.Product2.ATAK_Code__c;
        data.performance_resource_type = 'E'; //M for material
        data.projectcode = material.WorkOrder.Asset.ATAK_Project__r.SubProject_ATAK__c;
        data.quantity_registration_unit = 'MU';
        data.quantity = workOrderHours == null ? '0' : String.valueOf(workOrderHours);
        return data;
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

        if (response.getStatusCode() == 200) {
            System.debug('ATAKPerformanceService.sendATAKPerformanceData - Success');
            OutboundLoggerService.createOutboundLog(jsonATAKPerformanceData, response.getBody());
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

    **/

    /**
     * @description: This method gets a new auth token
     * @return String - the auth token
     * @remarks: we cannot use OAUTH2, so we need to send the username and password in the body.
     * There is no refresh token, so we need to get a new token every time.
     * ATAK returns a token in the response body
     * This token is valid for 1 hours (in theory).
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

        System.debug('response: ' + response);

        if (response.getStatusCode() == 200) {
            Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            token = (String) results.get('token');
        } else {
            token = '';
        }
        return token;
    }

    private static Boolean resourceIsCrewLeader(String resourceId) {
        //Find the ServiceCrewMember record for the resource
        //Only get the ones that are active (End Date is null or in the future)

        Boolean isLeader = false;

        try {
            ServiceCrewMember scm = [
                    SELECT Id, IsLeader
                    FROM ServiceCrewMember
                    WHERE ServiceResource.Id = :resourceId AND (EndDate = null OR EndDate >= TODAY)
            ];
            isLeader = scm.IsLeader;
        } catch (Exception e) {
            isLeader = false;
        }

        return isLeader;

    }


}
```

## Fields
### `ATAKDEFAULT_CODES`

#### Signature
```apex
private static final ATAKDEFAULT_CODES
```

#### Type
Set&lt;String&gt;

## Methods
### `prepareATAKPerformanceDataIndoor(tsId)`

: This method prepares the ATAK performance data for a timesheet

#### Signature
```apex
public static ATAKPerformanceWrapper prepareATAKPerformanceDataIndoor(String tsId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| tsId | String | - TimeSheet record Id |

#### Return Type
**[ATAKPerformanceWrapper](ATAKPerformanceWrapper.md)**

ATAKPerformanceWrapper object

---

### `prepareATAKPerformanceData(tsId)`

: This method prepares the ATAK performance data for a timesheet

#### Signature
```apex
public static ATAKPerformanceWrapper prepareATAKPerformanceData(String tsId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| tsId | String | - TimeSheet record Id |

#### Return Type
**[ATAKPerformanceWrapper](ATAKPerformanceWrapper.md)**

ATAKPerformanceWrapper object

---

### `personnelTimesheetToATAKPerformance(tsEntry)`

: This method converts a TimeSheetEntry object to an ATAKPerformanceWrapper.Data object for personnel timesheets

**Remarks** 

: 
- Dates need to be sent as strings in the format 20241008 (&quot;YYYYMMDD&quot;) 
- Times need to be sent as strings in the format 20240908070000 (&quot;YYYYMMDDHHMMSS&quot;) 
- If quantity_registration_unit is &quot;P&quot;, then quantity is always 1 
- If quantity_registration_unit is &quot;HR&quot;, then quantity is the number of hours worked

**Outstanding** 

: What do we do with the first travel time record of the day? From a payroll perspective this is covered 
by the kilometer allowance. Do we need to send this to ATAK for reporting reasons? 
And if so, using which code?

#### Signature
```apex
public static ATAKPerformanceWrapper.Data personnelTimesheetToATAKPerformance(TimeSheetEntry tsEntry)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| tsEntry | [TimeSheetEntry](../objects/TimeSheetEntry.md) |  |

#### Return Type
**ATAKPerformanceWrapper.Data**

: ATAKPerformanceWrapper.Data object

---

### `mileageToATAKPerformance(mileage, firstSubProject, lastSubProject)`

: This method converts a Mileage_Entry object to an ATAKPerformanceWrapper.Data object for personnel timesheets

**Remarks** 

: 
- Dates need to be sent as strings in the format 20241008 (&quot;YYYYMMDD&quot;) 
- Times need to be sent as strings in the format 20240908070000 (&quot;YYYYMMDDHHMMSS&quot;)

#### Signature
```apex
public static ATAKPerformanceWrapper.Data mileageToATAKPerformance(Mileage_Entry__c mileage, String firstSubProject, String lastSubProject)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| mileage | [Mileage_Entry__c](../objects/Mileage_Entry__c.md) |  |
| firstSubProject | String |  |
| lastSubProject | String |  |

#### Return Type
**ATAKPerformanceWrapper.Data**

: ATAKPerformanceWrapper.Data object

---

### `materialTimesheetToATAKPerformance(material, workOrderHours)`

: This method converts a TimeSheetEntry object to an ATAKPerformanceWrapper.Data object for material timesheets

**Remarks** 

: 
- Dates need to be sent as strings in the format 20241008 (&quot;YYYYMMDD&quot;) 
- Times need to be sent as strings in the format 20240908070000 (&quot;YYYYMMDDHHMMSS&quot;) 
- quantity_registration_unit is &quot;MU&quot;, then quantity is the number of hours worked 
- performance_resource_code is the atak id of the material used 
- performance_resource_type is &quot;M&quot; for material

#### Signature
```apex
public static ATAKPerformanceWrapper.Data materialTimesheetToATAKPerformance(ProductConsumed material, Decimal workOrderHours)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| material | [ProductConsumed](../objects/ProductConsumed.md) |  |
| workOrderHours | Decimal |  |

#### Return Type
**ATAKPerformanceWrapper.Data**

: ATAKPerformanceWrapper.Data object

---

### `sendATAKPerformanceData(wrapper)`

: This method sends the ATAK performance data to the ATAK API

#### Signature
```apex
public static Integer sendATAKPerformanceData(ATAKPerformanceWrapper wrapper)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| wrapper | [ATAKPerformanceWrapper](ATAKPerformanceWrapper.md) | - ATAKPerformanceWrapper object |

#### Return Type
**Integer**

---

### `getAuthToken()`

: This method checks if the auth token is still valid

#### Signature
```apex
public static String getAuthToken()
```

#### Return Type
**String**

String - the auth token,[object Object],,[object Object],private static String checkAuthToken() {,[object Object],// Check if the auth token is still valid,[object Object],// Due to technical reasons on the ATAK side, we cannot use OAUTH2,[object Object],// Tokens are sored in the ATAK_Settings__c custom setting,[object Object],// This contains a Token, Validity Start and Validity End,[object Object],// If the token is not valid, we need to get a new one,[object Object],,[object Object],String token &#x3D; &#x27;&#x27;;,[object Object],,[object Object],ATAK_Settings__c settings &#x3D; ATAK_Settings__c.getOrgDefaults();,[object Object],,[object Object],if (settings !&#x3D; null) {,[object Object],if (settings.Token__c !&#x3D; null &amp;&amp; settings.Validity_End__c !&#x3D; null) {,[object Object],if (settings.Validity_End__c &gt; Datetime.now()) {,[object Object],token &#x3D; settings.Token__c;,[object Object],},[object Object],},[object Object],} else {,[object Object],// No settings found, get a new token,[object Object],token &#x3D; getAuthToken();,[object Object],},[object Object],return token;,[object Object],}

---

### `resourceIsCrewLeader(resourceId)`

#### Signature
```apex
private static Boolean resourceIsCrewLeader(String resourceId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| resourceId | String |  |

#### Return Type
**Boolean**