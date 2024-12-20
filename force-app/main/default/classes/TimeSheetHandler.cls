/**
 * Created by fpardon on 19/12/2024.
 */

public with sharing class TimeSheetHandler {

    public static void onAfterInsert(List<TimeSheet> timeSheets){

        //Get the service resources tied ti the timesheets
        List<String> resourceIds = new List<String>();
        for(TimeSheet ts : timeSheets){
            resourceIds.add(ts.ServiceResourceId);
        }

        System.debug('Resource Ids: ' + resourceIds);

        Map<Id, ServiceResource> serviceResources = new Map<Id, ServiceResource>([SELECT Id, Name, Work_Schedule__c FROM ServiceResource WHERE Id IN :resourceIds]);
        Map<String, ServiceResource> timeSheetResourceMap = new Map<String, ServiceResource>();
        List<String> workScheduleIds = new List<String>();

        System.debug('Service Resources: ' + serviceResources);

        //Put them in a map so we can use this to get the service resource for the timesheet
        for(TimeSheet ts : timeSheets){
            System.debug('Service Resource Id: ' + ts.ServiceResourceId);
            System.debug('ts: ' + ts);
            System.debug('Service Resource: ' + serviceResources.get(ts.ServiceResourceId));
            System.debug('Service Resource Work Schedule: ' + serviceResources.get(ts.ServiceResourceId).Work_Schedule__c);
            timeSheetResourceMap.put(ts.ServiceResourceId, serviceResources.get(ts.ServiceResourceId));
            if(serviceResources.get(ts.ServiceResourceId).Work_Schedule__c != null && workScheduleIds.contains(serviceResources.get(ts.ServiceResourceId).Work_Schedule__c) == false){
                workScheduleIds.add(serviceResources.get(ts.ServiceResourceId).Work_Schedule__c);
            }
        }

        System.debug('Work Schedule Ids: ' + workScheduleIds);
        System.debug('TimeSheet Resource Map: ' + timeSheetResourceMap);

        //Get the Day of the week for the first timesheet, Sunday = 1, Monday = 2, etc.
        Integer dayOfWeek = dayOfWeekNumber(timeSheets[0].StartDate);

        //Convert the day of the week to a string (Monday, Tuesday, etc.)
        String dayOfWeekString = dayOfWeekString(dayOfWeek);

        System.debug('Day of the week: ' + dayOfWeek);
        System.debug('Day of the week string: ' + dayOfWeekString);

        //Get the work schedule day records for the day of the week

        Map<Id, Work_Schedule_Day__c> workScheduleDayMap = new Map<Id, Work_Schedule_Day__c>();
        List<Work_Schedule_Day__c> workScheduleDays = [SELECT Id, Work_Schedule__c, Hours__c, Day_of_Week__c FROM Work_Schedule_Day__c WHERE Work_Schedule__c IN :workScheduleIds AND Day_of_Week__c = :dayOfWeekString];

        for(Work_Schedule_Day__c wsd : workScheduleDays){
            workScheduleDayMap.put(wsd.Work_Schedule__c, wsd);
        }

        System.debug('Work Schedule Day Map: ' + workScheduleDayMap);


        List<TimeSheet> timeSheetsToUpdate = new List<TimeSheet>();

        //Now for each timesheet, get the Hours for that day based on the work schedule and the service resource
        for(TimeSheet ts : timeSheets){
            Work_Schedule_Day__c wsd = workScheduleDayMap.get(timeSheetResourceMap.get(ts.ServiceResourceId).Work_Schedule__c);
            System.debug('Work Schedule Day: ' + wsd);
            TimeSheet tsToUpdate = new TimeSheet();
            tsToUpdate.Id = ts.Id;
            tsToUpdate.Working_Hours_in_Contract__c = wsd.Hours__c;
            timeSheetsToUpdate.add(tsToUpdate);
        }

        System.debug('TimeSheets with working hours: ' + timeSheets);

        update timeSheetsToUpdate;
    }

    public static Integer dayOfWeekNumber(Date aDate) {
        return Math.mod(Date.newInstance(1900, 1, 7).daysBetween(aDate),7);
    }

    public static String dayOfWeekString(Integer dayOfWeek){
        switch on dayOfWeek {
            when 1 {
                return 'Sunday';
            }
            when 2 {
                return 'Monday';
            }
            when 3 {
                return 'Tuesday';
            }
            when 4 {
                return 'Wednesday';
            }
            when 5 {
                return 'Thursday';
            }
            when 6 {
                return 'Friday';
            }
            when 0 {
                return 'Saturday';
            }
            when else {
                return '';
            }
        }
    }

}