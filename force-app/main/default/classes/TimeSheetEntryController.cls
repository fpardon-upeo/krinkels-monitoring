public with sharing class TimeSheetEntryController {
    @AuraEnabled(cacheable=true)
    public static List<TimeSheetEntry> getTimeSheetEntries(String timeSheetId) {
        return [SELECT Id, WorkOrderId, WorkOrder.WorkOrderNumber, StartTime, EndTime, Starting_Allowance_Winter_Service__c, Urgent_Intervention__c, Type
        FROM TimeSheetEntry
        WHERE TimeSheetId = :timeSheetId];
    }

    @AuraEnabled(cacheable=true)
    public static List<String> getPicklistValues(String objectApiName, String fieldApiName) {
        List<String> picklistValues = new List<String>();
        Schema.DescribeFieldResult fieldResult = ((SObject) Type.forName(objectApiName).newInstance()).getSObjectType().getDescribe().fields.getMap().get(fieldApiName).getDescribe();
        for (Schema.PicklistEntry entry : fieldResult.getPicklistValues()) {
            picklistValues.add(entry.getValue());
        }
        return picklistValues;
    }
}