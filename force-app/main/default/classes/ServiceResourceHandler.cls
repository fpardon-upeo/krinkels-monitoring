/**
* Created by Frederik on 11/5/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class ServiceResourceHandler {

    public static void createServiceResources(List<String> userIds){

        List<User> users = [SELECT Id, Name, ManagerId, Manager.ATAK_Code__c FROM User WHERE Id IN :userIds];
        Map<String, String> userToManager = new Map<String, String>();
        Map<String, ServiceTerritory> serviceTerritories = new Map<String, ServiceTerritory>();
        List<ServiceTerritory> existingTerritories = [SELECT Id, Name, Main_Responsible__c, Main_Responsible_Atak_Code__c FROM ServiceTerritory WHERE ParentTerritoryId = NULL AND Main_Responsible_Atak_Code__c != null];

        for(ServiceTerritory territory : existingTerritories){
            serviceTerritories.put(territory.Main_Responsible__c, territory);
        }

        List<ServiceResource> serviceResources = new List<ServiceResource>();

        for(User user : users){
            userToManager.put(user.Id, user.ManagerId);
            ServiceResource serviceResource = new ServiceResource();
            serviceResource.Name = user.Name;
            serviceResource.RelatedRecordId = user.Id;
            serviceResource.ResourceType = 'T';
            serviceResource.IsActive = true;
            serviceResource.IsOptimizationCapable = true;
            serviceResources.add(serviceResource);
        }

        insert serviceResources;

        List<ServiceTerritoryMember> serviceTerritoryMembers = new List<ServiceTerritoryMember>();
        for(ServiceResource serviceResource : serviceResources){
            if(serviceTerritories.containsKey(userToManager.get(serviceResource.RelatedRecordId))){
                ServiceTerritoryMember serviceTerritoryMember = new ServiceTerritoryMember();
                serviceTerritoryMember.ServiceTerritoryId = serviceTerritories.get(userToManager.get(serviceResource.RelatedRecordId)).Id;
                serviceTerritoryMember.ServiceResourceId = serviceResource.Id;
                serviceTerritoryMember.EffectiveStartDate = Date.today();
                serviceTerritoryMembers.add(serviceTerritoryMember);
            }
        }

        insert serviceTerritoryMembers;
    }


}