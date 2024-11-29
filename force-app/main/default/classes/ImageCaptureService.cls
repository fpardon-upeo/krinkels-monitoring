/**
* Created by Frederik on 11/28/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class ImageCaptureService {

    @AuraEnabled
    public static String getWorkOrderIdFromWorkStepId(String workStepId) {
        String workOrderId = '';
        if (workStepId != null) {
            List<WorkStep> workSteps = [SELECT Id, WorkOrderId FROM WorkStep];
            if (workSteps.size() > 0) {
                workOrderId = workSteps[0].WorkOrderId;
            }
        }
        return workOrderId;
    }

}