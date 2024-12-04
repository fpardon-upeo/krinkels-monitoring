public with sharing class ATAKWorkLogService {

    public static void createWorkLogsForTimeSheet(Id timeSheetId) {
        System.debug('🔍 Creating ATAK Work Logs for TimeSheet: ' + timeSheetId);

        // First check if there are any TimeSheet entries
        Integer entryCount = [SELECT COUNT() FROM TimeSheetEntry WHERE TimeSheetId = :timeSheetId];
        if(entryCount == 0) {
            System.debug('⚠️ No TimeSheet entries found for TimeSheet: ' + timeSheetId);
            throw new WorkLogException('No TimeSheet entries found for TimeSheet: ' + timeSheetId);
        }

        try {
            ATAKPerformanceWrapper wrapper = ATAKPerformanceService.prepareATAKPerformanceData(timeSheetId);
            Integer statusCode = ATAKPerformanceService.sendATAKPerformanceData(wrapper);

            if(wrapper.data == null || wrapper.data.isEmpty()) {
                System.debug('⚠️ No data to process for TimeSheet: ' + timeSheetId);
                throw new WorkLogException('No data to process for TimeSheet: ' + timeSheetId);
            }

            Map<DateTime, TimeSheetEntry> timeSheetEntriesByStartTime = getTimeSheetEntriesByStartTime(timeSheetId);
            Map<Decimal, Mileage_Entry__c> mileageEntriesByDistance = getMileageEntriesByDistance(timeSheetId);
            Map<String, ProductConsumed> materialsByATAKCode = getMaterialsByATAKCode(timeSheetEntriesByStartTime.values());

            List<ATAK_Work_Log__c> workLogs = new List<ATAK_Work_Log__c>();

            for(ATAKPerformanceWrapper.Data data : wrapper.data) {
                ATAK_Work_Log__c workLog = new ATAK_Work_Log__c(
                        Time_Sheet__c = timeSheetId,
                        Registration_Timestamp__c = parseATAKDateTime(data.registration_timestamp),
                        Performance_Date__c = parseATAKDate(data.performance_date),
                        Start_Timestamp__c = parseATAKDateTime(data.start_timestamp),
                        End_Timestamp__c = parseATAKDateTime(data.end_timestamp),
                        Performance_Resource_Code__c = data.performance_resource_code,
                        Performance_Resource_Type__c = data.performance_resource_type,
                        Project_Code__c = data.projectcode,
                        Quantity_Registration_Unit__c = data.quantity_registration_unit,
                        Quantity__c = Decimal.valueOf(data.quantity),
                        Dossier__c = data.dossier,
                        Status__c = 'New'
                );

                setSourceRecord(workLog, data, timeSheetEntriesByStartTime, mileageEntriesByDistance, materialsByATAKCode);
                workLog.External_Id__c = generateExternalId(workLog);
                workLogs.add(workLog);

                System.debug('✏️ Created Work Log: ' +
                        'Type: ' + workLog.Source_Type__c +
                        ', Source: ' + workLog.Source_Record_Id__c +
                        ', Resource: ' + workLog.Performance_Resource_Code__c +
                        ', External Id: ' + workLog.External_Id__c);
            }

            if(!workLogs.isEmpty()) {
                //upsert workLogs External_Id__c;
                List<Database.UpsertResult> results = Database.upsert(workLogs, ATAK_Work_Log__c.Fields.External_Id__c, false);
                for(Database.UpsertResult result : results) {
                    if(!result.isSuccess()) {
                        for(Database.Error error : result.getErrors()) {
                            System.debug('❌ Error upserting Work Log: ' + error.getMessage());
                        }
                    }
                }
                System.debug('✅ Successfully upserted ' + workLogs.size() + ' Work Logs');
            }
        } catch(Exception e) {
            System.debug(LoggingLevel.ERROR, '❌ Error processing Work Logs: ' + e.getMessage());
            System.debug(LoggingLevel.ERROR, '❌ Stack trace: ' + e.getStackTraceString());
            throw new WorkLogException('Failed to create Work Logs: ' + e.getMessage());
        }
    }


    private static String generateExternalId(ATAK_Work_Log__c workLog) {
        return String.join(
                new List<String>{
                        workLog.Source_Record_Id__c,
                        String.valueOf(workLog.Performance_Date__c),
                        workLog.Performance_Resource_Code__c,
                        workLog.Performance_Resource_Type__c,
                        workLog.Quantity_Registration_Unit__c
                },
                '_'
        );
    }


    private static void setSourceRecord(ATAK_Work_Log__c workLog,
            ATAKPerformanceWrapper.Data data,
            Map<DateTime, TimeSheetEntry> timeSheetEntries,
            Map<Decimal, Mileage_Entry__c> mileageEntries,
            Map<String, ProductConsumed> materials) {

        System.debug('🔍 Setting source record for data: ' + data);

        if(data.performance_resource_type == 'E') {
            // Equipment/Material entry
            ProductConsumed material = materials.get(data.performance_resource_code);
            if(material != null) {
                workLog.Source_Record_Id__c = material.Id;
                workLog.Source_Type__c = 'Material';
                System.debug('✅ Found matching Material: ' + material.Id);
            }
        } else if(data.performance_resource_type == 'P') {
            if(data.quantity_registration_unit == 'KM') {
                // Mileage entry - match by quantity (distance)
                Decimal quantity = Decimal.valueOf(data.quantity);
                Mileage_Entry__c mileage = mileageEntries.get(quantity);
                if(mileage != null) {
                    workLog.Source_Record_Id__c = mileage.Id;
                    workLog.Source_Type__c = 'MileageEntry';
                    System.debug('✅ Found matching Mileage Entry: ' + mileage.Id);
                }
            } else {
                // TimeSheet entry - match by start time
                DateTime startTime = parseATAKDateTime(data.start_timestamp);
                TimeSheetEntry tse = timeSheetEntries.get(startTime);
                if(tse != null) {
                    workLog.Source_Record_Id__c = tse.Id;
                    workLog.Source_Type__c = 'TimeSheetEntry';
                    System.debug('✅ Found matching TimeSheet Entry: ' + tse.Id);
                }
            }
        }

        if(workLog.Source_Record_Id__c == null) {
            System.debug('⚠️ No matching source record found for data');
        }
    }

    private static Map<DateTime, TimeSheetEntry> getTimeSheetEntriesByStartTime(Id timeSheetId) {
        Map<DateTime, TimeSheetEntry> entries = new Map<DateTime, TimeSheetEntry>();
        for(TimeSheetEntry tse : [SELECT Id, StartTime, EndTime, WorkOrderId,
                Total_Hours_Minus_Breaks__c, Code_ATAK_Limbus__c
        FROM TimeSheetEntry
        WHERE TimeSheetId = :timeSheetId]) {
            entries.put(tse.StartTime, tse);
        }
        return entries;
    }

    private static Map<Decimal, Mileage_Entry__c> getMileageEntriesByDistance(Id timeSheetId) {
        Map<Decimal, Mileage_Entry__c> entries = new Map<Decimal, Mileage_Entry__c>();
        for(Mileage_Entry__c me : [SELECT Id, Calculated_Mileage__c, Codes_ATAK_Limbus__c
        FROM Mileage_Entry__c
        WHERE Time_Sheet__c = :timeSheetId]) {
            if(me.Calculated_Mileage__c != null) {
                entries.put(me.Calculated_Mileage__c, me);
            }
        }
        return entries;
    }

    private static Map<String, ProductConsumed> getMaterialsByATAKCode(List<TimeSheetEntry> entries) {
        Set<Id> workOrderIds = new Set<Id>();
        for(TimeSheetEntry tse : entries) {
            if(tse.WorkOrderId != null) {
                workOrderIds.add(tse.WorkOrderId);
            }
        }

        Map<String, ProductConsumed> materials = new Map<String, ProductConsumed>();
        for(ProductConsumed pc : [SELECT Id, Product2.ATAK_Code__c, QuantityConsumed
        FROM ProductConsumed
        WHERE WorkOrderId IN :workOrderIds
        AND Product2.ATAK_Code__c != null]) {
            materials.put(pc.Product2.ATAK_Code__c, pc);
        }
        return materials;
    }

    public static DateTime parseATAKDateTime(String atakDateTime) {
        // Convert YYYYMMDDHHMMSS to DateTime
        Integer year = Integer.valueOf(atakDateTime.substring(0, 4));
        Integer month = Integer.valueOf(atakDateTime.substring(4, 6));
        Integer day = Integer.valueOf(atakDateTime.substring(6, 8));
        Integer hour = Integer.valueOf(atakDateTime.substring(8, 10));
        Integer minute = Integer.valueOf(atakDateTime.substring(10, 12));
        Integer second = Integer.valueOf(atakDateTime.substring(12, 14));
        return DateTime.newInstance(year, month, day, hour, minute, second);
    }

    public static Date parseATAKDate(String atakDate) {
        // Convert YYYYMMDD to Date
        Integer year = Integer.valueOf(atakDate.substring(0, 4));
        Integer month = Integer.valueOf(atakDate.substring(4, 6));
        Integer day = Integer.valueOf(atakDate.substring(6, 8));
        return Date.newInstance(year, month, day);
    }

    public class WorkLogException extends Exception {}
}