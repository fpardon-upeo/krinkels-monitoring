/**
 * @Version: 1.0
 * @Author: Frederik
 * @Copyright: 2021 Upeo Consulting
 * @Uses:
 *
 * -----------------------------------------------------------------------------------------------
 * Description: 
 *
 *
 * Created: 5/8/2024
 * Last Updated: 5/8/2024
 *
 * Unit tests:
 *
 * Change log:
 * -----------------------------------------------------------------------------------------------
*/
trigger ServiceContractMaintenancePlan on ServiceContract (after update) {

    //Loop through all the service contracts that have been updated, check if Generate_Maintenance_Plan__c was updated to true

    for(ServiceContract sc : Trigger.new){
        if(sc.Generate_Maintenance_Plan__c == true && Trigger.oldMap.get(sc.Id).Generate_Maintenance_Plan__c == false){
            MaintenancePlanService.createMaintenancePlanFormServiceContract(sc.Id);
        }
    }

}