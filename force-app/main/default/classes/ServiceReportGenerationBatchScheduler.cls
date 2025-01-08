/**
* Created by Frederik on 1/7/2025.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class ServiceReportGenerationBatchScheduler  implements Schedulable {


    public void execute(SchedulableContext sc) {

        String serviceReportBatch = Database.executeBatch(new ServiceReportGenerationBatch(), 1);
        System.debug('Batch Id: ' + serviceReportBatch);

    }
}