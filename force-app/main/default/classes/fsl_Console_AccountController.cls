public with sharing class fsl_Console_AccountController {
    @AuraEnabled(cacheable=true)
    public static String getAccountId(Id serviceAppointmentId) {
        // Fetch the AccountId from the ServiceAppointment's parent record
        ServiceAppointment sa = [SELECT AccountId FROM ServiceAppointment WHERE Id = :serviceAppointmentId LIMIT 1];
        return sa.AccountId;
    }

    @AuraEnabled(cacheable=true)
    public static List<String> getFieldSetFields(String fieldSetName, String objectName) {
        List<String> fieldNames = new List<String>();
        Schema.DescribeSObjectResult objDescribe = Schema.getGlobalDescribe().get(objectName).getDescribe();
        Map<String, Schema.FieldSet> fieldSets = objDescribe.fieldSets.getMap();
        if (fieldSets.containsKey(fieldSetName)) {
            for (Schema.FieldSetMember field : fieldSets.get(fieldSetName).getFields()) {
                fieldNames.add(field.getFieldPath());
            }
        }
        return fieldNames;
    }
}