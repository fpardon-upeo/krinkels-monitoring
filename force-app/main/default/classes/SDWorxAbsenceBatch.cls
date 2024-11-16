/**
* Created by Frederik on 11/15/2024.
* Description:
* Change Log:
* Dependencies:
*/

public class SDWorxAbsenceBatch implements Database.Batchable<sObject>, Schedulable {

    public void execute(SchedulableContext sc) {
        Database.executeBatch(this);
    }

    public Database.QueryLocator start(Database.BatchableContext bc) {
        // Query for SD_Import__c records that need to be processed
        // You might want to add additional filtering criteria
        return Database.getQueryLocator([
                SELECT Id, ArbeidsContractWerknemer__c, KalenderdagDat__c,
                        AfwezigheidDagdeelKode__c, AfwezigheidPresturen__c,
                        PersoonId__c, AfwezigheidscodelabelCode__c
                FROM SD_Import__c
        ]);
    }

    public void execute(Database.BatchableContext bc, List<SD_Import__c> scope) {
        try {
            // Process the records
            SDWorxToResourceAbsenceService.createAbsenceRecords(scope);

            // Mark records as processed
            delete scope;

        } catch(Exception e) {
            System.debug('Error processing batch: ' + e.getMessage());
        }
    }

    public void finish(Database.BatchableContext bc) {
        // Any post-processing logic can go here
        System.debug('Batch job completed');
    }

    // Method to schedule the batch job
    public static String scheduleJob(String jobName, String cronExp) {
        return System.schedule(jobName, cronExp, new SDWorxAbsenceBatch());
    }
}