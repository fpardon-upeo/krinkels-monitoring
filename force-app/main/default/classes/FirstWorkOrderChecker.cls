/**
 * Created by fpardon on 04/12/2024.
 */

public with sharing class FirstWorkOrderChecker {

    @AuraEnabled
    public static Boolean hasFirstWorkOrder() {
        //Get today's ServiceAppointments based on the current date and the Service Resource Id
        //For that we need to query the AssignedResource object
        //Use the SchedStartTime of the ServiceAppointment as the date of the ServiceAppointment

        String userId = UserInfo.getUserId();

        ServiceResource serviceResource = [SELECT Id
                                           FROM ServiceResource
                                           WHERE RelatedRecordId = :userId
                                           LIMIT 1
        ];

        String serviceResourceId = serviceResource.Id;

        //Query the AssignedResource object
        List<AssignedResource> assignedResources = [SELECT
                ServiceAppointmentId, ServiceResourceId, ServiceAppointment.SchedStartTime,
                ServiceAppointment.ParentRecordId
                                                    FROM AssignedResource
                                                    WHERE ServiceResourceId = :serviceResourceId
                                                    AND ServiceAppointment.SchedStartTime = TODAY
                                                    ORDER BY ServiceAppointment.SchedStartTime ASC
        ];

        List<String> workOrderIds = new List<String>();
        for(AssignedResource assignedResource : assignedResources) {
            workOrderIds.add(assignedResource.ServiceAppointment.ParentRecordId);
        }

        //Now select all WorkOrders where the Id is in the list of workOrderIds and Is_First_Of_Day__c is true
        List<WorkOrder> workOrders = [SELECT Id
                                      FROM WorkOrder
                                      WHERE Id IN :workOrderIds
                                      AND Is_First_of_Day__c = true
                                      LIMIT 1
        ];

        return workOrders.size() > 0;

    }

}