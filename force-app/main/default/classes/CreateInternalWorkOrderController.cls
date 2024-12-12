/**
* Created by Frederik on 12/11/2024.
* Description:
* Change Log:
* Dependencies:
*/

public with sharing class CreateInternalWorkOrderController {
    @AuraEnabled(cacheable=true)
    public static ServiceResource getServiceResourceDetails(Id resourceId) {
        return [
                SELECT Id, RelatedRecord.Department
                FROM ServiceResource
                WHERE Id = :resourceId
                LIMIT 1
        ];
    }
}