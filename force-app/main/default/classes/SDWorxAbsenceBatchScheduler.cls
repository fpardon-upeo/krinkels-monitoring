/**
* Created by Frederik on 11/26/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class SDWorxAbsenceBatchScheduler implements Schedulable {


    public void execute(SchedulableContext sc) {

        String absenceBatch = Database.executeBatch(new SDWorxAbsenceBatch(), 200);
        System.debug('Batch Id: ' + absenceBatch);

    }
}