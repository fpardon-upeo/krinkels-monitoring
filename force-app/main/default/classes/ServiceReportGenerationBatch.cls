/**
* Created by Frederik on 1/7/2025.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class ServiceReportGenerationBatch implements Database.Batchable<sObject>, Schedulable, Database.AllowsCallouts {

    public void execute(SchedulableContext sc) {
        Database.executeBatch(this);
    }

    public Database.QueryLocator start(Database.BatchableContext bc) {
        // Query for SD_Import__c records that need to be processed
        // You might want to add additional filtering criteria
        return Database.getQueryLocator([
                SELECT Id, Contact.Language_Formula__c FROM WorkOrder WHERE PDF_Status__c = 'Ready to be Generated' AND Status = 'Completed' AND ContactId != null
        ]);
    }

    public void execute(Database.BatchableContext bc, List<WorkOrder> scope) {
        try {

            cadmus_core__Doc_Config__c docConfig = [SELECT Id FROM cadmus_core__Doc_Config__c WHERE Name = 'Generate Service Report'];

            for(WorkOrder wo : scope) {
                System.debug('Processing WorkOrder: ' + wo.Id);
                System.debug('Language: ' + wo.Contact.Language_Formula__c);
                PDFButler_ConvertService.createServiceReport(wo.Id, docConfig.Id, wo.Contact.Language_Formula__c);
            }

        } catch(Exception e) {
            System.debug('Error processing batch: ' + e.getMessage());
        }
    }

    public void finish(Database.BatchableContext bc) {
        // Any post-processing logic can go here
        System.debug('Batch job completed');
        List<WorkOrder> workOrders = [SELECT Id, ContactId FROM WorkOrder WHERE PDF_Status__c = 'Ready to be Generated' AND Status = 'Completed' AND ContactId = null];
        for(WorkOrder wo : workOrders) {
            wo.PDF_Status__c = 'Not Generated - No Contact';
        }
        update workOrders;
    }
}