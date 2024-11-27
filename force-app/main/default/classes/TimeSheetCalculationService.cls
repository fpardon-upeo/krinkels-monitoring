/**
 * Created by fpardon on 20/11/2024.
 */

public without sharing class TimeSheetCalculationService {

    /**
     * Main orchestrator method for ResourceAbsence updates
     * @param resourceAbsences List of ResourceAbsence records that were changed
     */
    public static void processResourceAbsenceChanges(List<ResourceAbsence> resourceAbsences) {
        // Get all affected TimeSheetEntries
        Map<Id, List<TimeSheetEntry>> timeSheetEntriesMap = getOverlappingTimeSheetEntries(resourceAbsences);

        System.debug('timeSheetEntriesMap: ' + timeSheetEntriesMap);

        // Collect all unique TimeSheetEntries to update
        List<TimeSheetEntry> entriesToUpdate = new List<TimeSheetEntry>();
        Set<Id> processedEntryIds = new Set<Id>(); // To prevent duplicates

        for(Id raId : timeSheetEntriesMap.keySet()) {
            List<TimeSheetEntry> entries = timeSheetEntriesMap.get(raId);
            for(TimeSheetEntry entry : entries) {
                System.debug('entry: ' + entry);
                if(!processedEntryIds.contains(entry.Id)) {
                    System.debug('Processing entry: ' + entry);
                    // Calculate total break time for this entry
                    Integer totalBreakMinutes = calculateTotalBreakMinutes(entry, resourceAbsences);
                    // Calculate actual work time (total duration minus breaks)
                    Long totalDurationMs = entry.EndTime.getTime() - entry.StartTime.getTime();
                    Integer totalDurationMinutes = (Integer)(totalDurationMs / (1000 * 60));
                    Integer actualWorkMinutes = totalDurationMinutes - totalBreakMinutes;

                    // Update the entry
                    entry.Break_Duration__c = totalBreakMinutes;
                    entry.Working_Time__c = actualWorkMinutes;

                    entriesToUpdate.add(entry);
                    processedEntryIds.add(entry.Id);
                }
            }
        }

        if(!entriesToUpdate.isEmpty()) {
            try {
                update entriesToUpdate;
            } catch(Exception e) {
                System.debug('Error updating TimeSheetEntries: ' + e.getMessage());
            }
        }
    }

    /**
     * Main orchestrator method for TimeSheetEntry updates
     * @param timeSheetEntries List of TimeSheetEntry records that were changed
     */
    public static void processTimeSheetEntryChanges(List<TimeSheetEntry> timeSheetEntries) {
        // First get all relevant ResourceAbsences for these entries
        Set<Id> serviceResourceIds = new Set<Id>();
        Set<DateTime> startTimes = new Set<DateTime>();
        Set<DateTime> endTimes = new Set<DateTime>();
        Set<Id> tseEntryIds = new Set<Id>();

        for(TimeSheetEntry tse : timeSheetEntries) {
            System.debug('tse: ' + tse.Id);
            tseEntryIds.add(tse.Id);
        }

        System.debug('tseEntryIds: ' + tseEntryIds);

        //Requery the needed TimeSheetEntries with all needed fields
        timeSheetEntries = [
                SELECT Id, StartTime, EndTime, TimeSheet.ServiceResourceId
                FROM TimeSheetEntry
                WHERE Id IN :tseEntryIds
        ];

        System.debug('timeSheetEntries: ' + timeSheetEntries);

        for(TimeSheetEntry tse : timeSheetEntries) {
            serviceResourceIds.add(tse.TimeSheet.ServiceResourceId);
            startTimes.add(tse.StartTime);
            endTimes.add(tse.EndTime);
        }

        System.debug('serviceResourceIds: ' + serviceResourceIds);
        System.debug('startTimes: ' + startTimes);
        System.debug('endTimes: ' + endTimes);

        // Query all potentially relevant ResourceAbsences
        List<ResourceAbsence> allAbsences = [
                SELECT Id, Start, End, ResourceId
                FROM ResourceAbsence
                WHERE ResourceId IN :serviceResourceIds
                AND (
                        (Start <= :endTimes AND End >= :startTimes) OR
                        (Start >= :startTimes AND Start <= :endTimes) OR
                        (End >= :startTimes AND End <= :endTimes) OR
                        (Start <= :startTimes AND End >= :endTimes)
                )
        ];

        // Update each TimeSheetEntry
        List<TimeSheetEntry> entriesToUpdate = new List<TimeSheetEntry>();

        for(TimeSheetEntry entry : timeSheetEntries) {
            TimeSheetEntry newEntry = new TimeSheetEntry();
            //If there are no absences, set the break time to 0 and the working time to the total duration
            if(allAbsences.isEmpty()){
                newEntry.Id = entry.Id;
                newEntry.Break_Duration__c = 0;
                Long totalDurationMs = entry.EndTime.getTime() - entry.StartTime.getTime();
                Integer totalDurationMinutes = (Integer)(totalDurationMs / (1000 * 60));
                newEntry.Working_Time__c = totalDurationMinutes;
                entriesToUpdate.add(newEntry);
                continue;
            } else {
                newEntry = entry;
            }
            Integer totalBreakMinutes = calculateTotalBreakMinutes(newEntry, allAbsences);

            // Calculate actual work time
            Long totalDurationMs = newEntry.EndTime.getTime() - newEntry.StartTime.getTime();
            Integer totalDurationMinutes = (Integer)(totalDurationMs / (1000 * 60));
            Integer actualWorkMinutes = totalDurationMinutes - totalBreakMinutes;

            // Update the entry
            newEntry.Break_Duration__c = totalBreakMinutes;
            newEntry.Working_Time__c = actualWorkMinutes;

            entriesToUpdate.add(newEntry);
        }

        if(!entriesToUpdate.isEmpty()) {
            try {
                update entriesToUpdate;
            } catch(Exception e) {
                System.debug('Error updating TimeSheetEntries: ' + e.getMessage());
            }
        }
    }

    /**
     * Queries TimeSheetEntry records that overlap with the given ResourceAbsence
     * @param resourceAbsence The ResourceAbsence record to find overlapping TimeSheetEntries for
     * @return List<TimeSheetEntry> The overlapping TimeSheetEntry records
     */
    public static List<TimeSheetEntry> getOverlappingTimeSheetEntries(ResourceAbsence resourceAbsence) {

        System.debug('resourceAbsence: ' + resourceAbsence);

        return [
                SELECT Id, StartTime, EndTime, TimeSheet.ServiceResourceId
                FROM TimeSheetEntry
                WHERE TimeSheet.ServiceResourceId = :resourceAbsence.ResourceId
                AND (
                        (StartTime <= :resourceAbsence.End AND EndTime >= :resourceAbsence.Start) OR
                        (StartTime >= :resourceAbsence.Start AND StartTime <= :resourceAbsence.End) OR
                        (EndTime >= :resourceAbsence.Start AND EndTime <= :resourceAbsence.End) OR
                        (StartTime <= :resourceAbsence.Start AND EndTime >= :resourceAbsence.End)
                )
        ];
    }

    /**
     * Queries TimeSheetEntry records that overlap with the given ResourceAbsences
     * @param resourceAbsences List of ResourceAbsence records to find overlapping TimeSheetEntries for
     * @return Map<Id, List<TimeSheetEntry>> Map of ResourceAbsence Id to overlapping TimeSheetEntries
     */
    public static Map<Id, List<TimeSheetEntry>> getOverlappingTimeSheetEntries(List<ResourceAbsence> resourceAbsences) {
        // Collect all ServiceResourceIds and date ranges
        Set<Id> serviceResourceIds = new Set<Id>();
        Set<DateTime> startTimes = new Set<DateTime>();
        Set<DateTime> endTimes = new Set<DateTime>();

        for(ResourceAbsence ra : resourceAbsences) {
            serviceResourceIds.add(ra.ResourceId);
            startTimes.add(ra.Start);
            endTimes.add(ra.End);
        }

        // Query all potentially overlapping TimeSheetEntries
        List<TimeSheetEntry> allTimeSheetEntries = [
                SELECT Id, StartTime, EndTime, TimeSheet.ServiceResourceId
                FROM TimeSheetEntry
                WHERE TimeSheet.ServiceResourceId IN :serviceResourceIds
                AND (
                        (StartTime <= :endTimes AND EndTime >= :startTimes) OR
                        (StartTime >= :startTimes AND StartTime <= :endTimes) OR
                        (EndTime >= :startTimes AND EndTime <= :endTimes) OR
                        (StartTime <= :startTimes AND EndTime >= :endTimes)
                )
        ];

        // Map results to their corresponding ResourceAbsence
        Map<Id, List<TimeSheetEntry>> resultMap = new Map<Id, List<TimeSheetEntry>>();

        for(ResourceAbsence ra : resourceAbsences) {
            List<TimeSheetEntry> overlapping = new List<TimeSheetEntry>();

            for(TimeSheetEntry tse : allTimeSheetEntries) {
                if(tse.TimeSheet.ServiceResourceId == ra.ResourceId &&
                        isOverlapping(tse.StartTime, tse.EndTime, ra.Start, ra.End)) {
                    overlapping.add(tse);
                }
            }

            resultMap.put(ra.Id, overlapping);
        }
        //print all the values in the map
        for(Id key : resultMap.keySet()){
            System.debug('Key: ' + key + ' Value: ' + resultMap.get(key));
        }

        return resultMap;

    }

    /**
     * Helper method to determine if two time ranges overlap
     * @param start1 The start of the first time range
     * @param end1 The end of the first time range
     * @param start2 The start of the second time range
     * @param end2 The end of the second time range
     * @return Boolean True if the time ranges overlap, False otherwise
     */
    private static Boolean isOverlapping(DateTime start1, DateTime end1, DateTime start2, DateTime end2) {
        return (
                (start1 <= end2 && end1 >= start2) ||
                        (start1 >= start2 && start1 <= end2) ||
                        (end1 >= start2 && end1 <= end2) ||
                        (start1 <= start2 && end1 >= end2)
        );
    }

    /**
     * Calculates overlap minutes for a TimeSheetEntry with multiple ResourceAbsences
     * @param tse The TimeSheetEntry record
     * @param absences List of ResourceAbsence records
     * @return Integer Total minutes to deduct
     */
    public static Integer calculateTotalBreakMinutes(TimeSheetEntry tse, List<ResourceAbsence> absences) {
        Integer totalMinutes = 0;
        for(ResourceAbsence ra : absences) {
            System.debug('ResourceAbsence: ' + ra);
            totalMinutes += calculateOverlapMinutes(tse, ra);
            System.debug('Total minutes: ' + totalMinutes);
        }
        return totalMinutes;
    }

    /**
    * Calculates the overlap duration in minutes between a TimeSheetEntry and a ResourceAbsence
            * @param tse The TimeSheetEntry record
            * @param ra The ResourceAbsence record
            * @return Integer The number of overlapping minutes
            */
    public static Integer calculateOverlapMinutes(TimeSheetEntry tse, ResourceAbsence ra) {
        // First determine the overlap period
        DateTime overlapStart = tse.StartTime > ra.Start ? tse.StartTime : ra.Start;
        DateTime overlapEnd = tse.EndTime < ra.End ? tse.EndTime : ra.End;

        // Calculate the difference in minutes
        Long milliseconds = overlapEnd.getTime() - overlapStart.getTime();
        Integer minutes = (Integer)(milliseconds / (1000 * 60));

        return Math.max(0, minutes); // Ensure we don't return negative values
    }
}