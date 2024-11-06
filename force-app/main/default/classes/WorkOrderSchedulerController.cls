/**
* Created by Frederik on 11/5/2024.
* Description:
* Change Log:
* Dependencies:
*/
public without sharing class WorkOrderSchedulerController {

    @AuraEnabled
    public static void scheduleWorkOrders(String maintenancePlanId) {
        try {
            // Add some validation
            if (String.isEmpty(maintenancePlanId)) {
                throw new AuraHandledException('Maintenance Plan ID is required');
            }

            // Verify the maintenance plan exists and user has access
            MaintenancePlan mp = [SELECT Id, AccountId
            FROM MaintenancePlan
            WHERE Id = :maintenancePlanId
            WITH SECURITY_ENFORCED
            LIMIT 1];

            // Start the batch job
            WorkOrderSchedulerBatch batchJob = new WorkOrderSchedulerBatch(maintenancePlanId);
            Database.executeBatch(batchJob, 200);

            // Note: If you need to track the job ID, you would need to handle that
            // in the finish method of the batch class instead of here

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}