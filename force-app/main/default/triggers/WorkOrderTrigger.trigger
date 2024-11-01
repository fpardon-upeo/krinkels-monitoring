/**
 * Created by Frederik on 10/31/2024.
 */

trigger WorkOrderTrigger on WorkOrder (after update, after insert) {

    WorkOrderTriggerHandler handler = new WorkOrderTriggerHandler();

    if(Trigger.isAfter && Trigger.isInsert){
        System.debug('WorkOrderTrigger: after insert');
        handler.afterInsert(Trigger.new);
    }
    
}