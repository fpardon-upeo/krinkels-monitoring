/**
* Created by Frederik on 10/30/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class SchedulingController {

    @AuraEnabled
    public static Map<Id, List<ServiceAppointment>> getUnscheduledAssets() {
        Map<Id, List<ServiceAppointment>> assetToAppointments = new Map<Id, List<ServiceAppointment>>();

        // Query your service appointments
        List<ServiceAppointment> appointments = [
                SELECT Id, Asset__c, Asset__r.Name, Asset__r.Street, Asset__r.City, Asset__r.PostalCode, DueDate,
                Asset__r.Product2.Name, Asset__r.Recurrence_Pattern__c, FSL__InternalSLRGeolocation__Latitude__s , FSL__InternalSLRGeolocation__Longitude__s
                FROM ServiceAppointment
                WHERE Status = 'Unscheduled'
                ORDER BY DueDate ASC
        ];

        // Group appointments by Asset
        for(ServiceAppointment sa : appointments) {
            if(!assetToAppointments.containsKey(sa.Asset__c)) {
                assetToAppointments.put(sa.Asset__c, new List<ServiceAppointment>());
            }
            assetToAppointments.get(sa.Asset__c).add(sa);
        }

        return assetToAppointments;
    }

    @AuraEnabled
    public static List<ServiceTerritory> getServiceTerritories() {
        return [
                SELECT Id, Name
                FROM ServiceTerritory
        ];
    }

    @AuraEnabled
    public static List<ServiceResource> getServiceResources(String territoryId) {
        //First get the service territory members

        List<ServiceTerritoryMember> members = [
                SELECT ServiceResourceId
                FROM ServiceTerritoryMember
                WHERE ServiceTerritoryId = :territoryId
        ];

        // Extract the service resource Ids
        Set<Id> memberIds = new Set<Id>();
        for(ServiceTerritoryMember member : members) {
            memberIds.add(member.ServiceResourceId);
        }

        //Then get the service resources
        List<ServiceResource> resources = [
                SELECT Id, Name, ResourceType
                FROM ServiceResource
                WHERE Id IN :memberIds
        ];

        return resources;
    }

    @AuraEnabled
    public static void createAssignedResource(String serviceResourceId, String serviceAppointmentId, Datetime startDate) {

        System.debug('serviceResourceId: ' + serviceResourceId);
        System.debug('serviceAppointmentId: ' + serviceAppointmentId);
        System.debug('startDate: ' + startDate);

        //Get all the service appointments for the given service resource on the date
        //Include the geo location fields so we can calculate the distance between the appointments and slot in the closest one
        //We first need to get the AssignedResource records, these contain the ServiceAppointment Ids.
        //First make sure that the date is an actual date and not a datetime

        // Set startDate to the start of the day
        Date day = startDate.date();  // Extracts the date part
        Datetime dayStart = DateTime.newInstance(day, Time.newInstance(0, 0, 0, 0)); // Start of the day (00:00:00)
        Datetime dayEnd = DateTime.newInstance(day, Time.newInstance(23, 59, 59, 999)); // End of the day (23:59:59.999)

        // Query the AssignedResource records using the start and end of day range
        List<AssignedResource> assignedResources = [
                SELECT ServiceAppointmentId
                FROM AssignedResource
                WHERE ServiceResourceId = :serviceResourceId
                AND ServiceAppointment.SchedStartTime <= :dayEnd
                AND ServiceAppointment.SchedStartTime >= :dayStart
        ];


        System.debug('assignedResources: ' + assignedResources.size());

        // Extract the ServiceAppointment Ids
        Set<Id> appointmentIds = new Set<Id>();
        for(AssignedResource ar : assignedResources) {
            appointmentIds.add(ar.ServiceAppointmentId);
        }

        //Get the ServiceAppointments
        List<ServiceAppointment> appointments = [
                SELECT Id, SchedStartTime, SchedEndTime, AppointmentNumber, Asset__c, Asset__r.Name, Asset__r.Street, Asset__r.City, Asset__r.PostalCode, FSL__InternalSLRGeolocation__Latitude__s , FSL__InternalSLRGeolocation__Longitude__s,
                        Asset__r.Product2.Name, Asset__r.Recurrence_Pattern__c
                FROM ServiceAppointment
                WHERE Id IN :appointmentIds
        ];

        System.debug('appointments: ' + appointments.size());

        ServiceAppointment originalAppointment = [SELECT Id, AppointmentNumber, SchedStartTime, SchedEndTime, Asset__c, Asset__r.Name, Asset__r.Street, Asset__r.City, Asset__r.PostalCode, FSL__InternalSLRGeolocation__Latitude__s , FSL__InternalSLRGeolocation__Longitude__s,
                        Asset__r.Product2.Name, Asset__r.Recurrence_Pattern__c
                FROM ServiceAppointment
                WHERE Id = :serviceAppointmentId];

        System.debug('originalAppointment: ' + originalAppointment);

        // Find the closest appointment
        ServiceAppointment closestAppointment = null;
        Decimal closestDistance = null;

        for(ServiceAppointment appointment : appointments) {
            System.debug('sa: ' + appointment.AppointmentNumber);
            Decimal distance = calculateDistance(originalAppointment.FSL__InternalSLRGeolocation__Latitude__s, originalAppointment.FSL__InternalSLRGeolocation__Longitude__s, appointment.FSL__InternalSLRGeolocation__Latitude__s, appointment.FSL__InternalSLRGeolocation__Longitude__s);
            System.debug('distance: ' + distance);
            if(closestDistance == null || distance < closestDistance) {
                closestDistance = distance;
                closestAppointment = appointment;
            }
        }
        System.debug('closestAppointment: ' + closestAppointment);

        // Try to find the best slot for the appointment, slot the original appointment after the closest appointment
        // Then create the AssignedResource record
        //Then re-evaluate the start and end time of each appointment and make sure they follow each other in the correct order and at the correct time

        // Update the original appointment
        originalAppointment.SchedStartTime = closestAppointment.SchedEndTime.addMinutes(30);
        originalAppointment.SchedEndTime = originalAppointment.SchedStartTime.addMinutes(30);

        update originalAppointment;

        // Create the AssignedResource record
        AssignedResource ar = new AssignedResource();
        ar.ServiceResourceId = serviceResourceId;
        ar.ServiceAppointmentId = serviceAppointmentId;

        insert ar;

        // Get the appointments again and re-evaluate the start and end time of each appointment
        List<AssignedResource> newAssignedResources = [
                SELECT ServiceAppointmentId
                FROM AssignedResource
                WHERE ServiceResourceId = :serviceResourceId
                AND ServiceAppointment.SchedStartTime <= :dayEnd
                AND ServiceAppointment.SchedStartTime >= :dayStart
        ];

        // Extract the ServiceAppointment Ids
        Set<Id> newAppointmentIds = new Set<Id>();
        for(AssignedResource newAr : newAssignedResources) {
            newAppointmentIds.add(newAr.ServiceAppointmentId);
        }

        //Get the ServiceAppointments
        List<ServiceAppointment> newAppointments = [
                SELECT Id, SchedStartTime, SchedEndTime, AppointmentNumber, Asset__c, Asset__r.Name, Asset__r.Street, Asset__r.City, Asset__r.PostalCode, FSL__InternalSLRGeolocation__Latitude__s , FSL__InternalSLRGeolocation__Longitude__s,
                        Asset__r.Product2.Name, Asset__r.Recurrence_Pattern__c
                FROM ServiceAppointment
                WHERE Id IN :newAppointmentIds
        ];

        System.debug('newAppointments: ' + newAppointments.size());

        // Re-evaluate the start and end time of each appointment

        Datetime previousEndTime = null;
        for(ServiceAppointment newAppointment : newAppointments) {
            if(previousEndTime != null) {
                newAppointment.SchedStartTime = previousEndTime.addMinutes(30);
                newAppointment.SchedEndTime = newAppointment.SchedStartTime.addMinutes(30);
                update newAppointment;
            }
            previousEndTime = newAppointment.SchedEndTime;
        }

        //Finally call GanttRoundPinAction.action
        //List<Id> serviceAppointmentsIds, Datetime ganttStartDate, Datetime ganttEndDate, Map<String, Object> additionalParameters

        List<Id> serviceAppointmentsIds = new List<Id>();
        serviceAppointmentsIds.add(originalAppointment.Id);

        GanttRoundPinAction ganttRoundPinAction = new GanttRoundPinAction();
        ganttRoundPinAction.action(serviceAppointmentsIds, null, null, new Map<String, Object>());

    }

    private static Decimal calculateDistance(Decimal firstLatitude, Decimal firstLongitude, Decimal secondLatitude, Decimal secondLongitude) {
        Decimal lat1 = firstLatitude;
        Decimal lon1 = firstLongitude;
        Decimal lat2 = secondLatitude;
        Decimal lon2 = secondLongitude;
        Decimal R = 6371; // km
        Decimal x = (lat2 - lat1) * Math.PI / 180 * Math.cos((lon2 + lon1) * Math.PI / 360);
        Decimal y = (lon2 - lon1) * Math.PI / 180;
        Decimal d = Math.sqrt(x * x + y * y) * R;
        return d;
    }

    @AuraEnabled
    public static List<ServiceAppointment> getScheduledAppointments(String resourceId, Date startDate ) {

        System.debug('resourceId: ' + resourceId);
        System.debug('startDate: ' + startDate);

        // Convert the date to a datetime
        // First get the AssignedResource records, these contain the ServiceAppointment Ids. Filter the records by ServiceAppointment.SchedStartTime
        Datetime startDateTime = Datetime.newInstance(startDate.year(), startDate.month(), startDate.day());
        // Get the last day of the month based on the start date
        Date endDate = startDate.toStartOfMonth().addMonths(1).addDays(-1);
        Datetime endDateTime = Datetime.newInstance(endDate.year(), endDate.month(), endDate.day());

        List<AssignedResource> assignedResources = [
                SELECT ServiceAppointmentId
                FROM AssignedResource
                WHERE ServiceResourceId = :resourceId
                AND ServiceAppointment.SchedStartTime >= :startDateTime
                AND ServiceAppointment.SchedStartTime <= :endDateTime
        ];

        // Extract the ServiceAppointment Ids
        Set<Id> appointmentIds = new Set<Id>();
        for(AssignedResource ar : assignedResources) {
            appointmentIds.add(ar.ServiceAppointmentId);
        }

        //Get the ServiceAppointments
        List<ServiceAppointment> appointments = [
                SELECT Id, SchedStartTime, SchedEndTime, Asset__c, Asset__r.Name, Asset__r.Street, Asset__r.City, Asset__r.PostalCode, FSL__InternalSLRGeolocation__Latitude__s , FSL__InternalSLRGeolocation__Longitude__s,
                        Asset__r.Product2.Name, Asset__r.Recurrence_Pattern__c
                FROM ServiceAppointment
                WHERE Id IN :appointmentIds
        ];

        System.debug('appointments: ' + appointments.size());

        return appointments;
    }
}