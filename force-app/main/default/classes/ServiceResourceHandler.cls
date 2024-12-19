/**
* Created by Frederik on 11/5/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class ServiceResourceHandler {

    @Future(callout=true)
    public static void createServiceResource(String personnelId){
        String userId = createServiceUser(personnelId);
        System.debug('User created: ' + userId);
        createPermissionSetAssignments(userId);
        fireUserPlatformEvent(userId);
    }

    public static String updatePersonnelRecord(String personnelId, String userId){
        ATAK_Personnel__c personnel = new ATAK_Personnel__c(Id = personnelId);
        personnel.User__c = userId;
        update personnel;
        return personnel.Id;
    }


    public static String createServiceUser(String personnelId){

        ATAK_Personnel__c personnel = [SELECT Id, Name, First_Name__c, Last_Name__c, Phone__c, Mobile__c, Email__c, Code__c, Sitemanager_Code__c FROM ATAK_Personnel__c WHERE Id = :personnelId];
        User user = new User();
        user.FirstName = personnel.First_Name__c;
        user.LastName = personnel.Last_Name__c;
        user.Email = personnel.Email__c;
        user.Phone = personnel.Phone__c;
        user.MobilePhone = personnel.Mobile__c;
        //user.Alias = personnel.Code__c.substring(0, 8);
        //Get the first 8 characters of the code, sometimes the code is less than 8 characters
        user.Alias = personnel.Code__c.substring(0, Math.min(personnel.Code__c.length(), 8));
        user.Username = personnel.Email__c + '.' + getUserNameSuffix();
        user.TimeZoneSidKey = 'Europe/Brussels';
        user.LocaleSidKey = 'en_US';
        user.EmailEncodingKey = 'UTF-8';
        user.ProfileId = [SELECT Id FROM Profile WHERE Name = 'Operator Outdoor'].Id;
        user.LanguageLocaleKey = 'en_US';
        user.IsActive = true;
        user.ATAK_Code__c = personnel.Code__c;
        if(!Test.isRunningTest()) {
            user.Manager = new User(ATAK_Code__c = personnel.Sitemanager_Code__c);
        }
        insert user;
        return user.Id;
    }

    public static void createPermissionSetAssignments(String userId){
        List<PermissionSet> permissionSets = [SELECT Id FROM PermissionSet WHERE Label IN ('Field Service Mobile License', 'Field Service Resource License', 'Field Service Resource Permissions', 'Field Service Agent Permissions', 'Field Service Mobile Custom Permission Set')];
        List<PermissionSetAssignment> permissionSetAssignments = new List<PermissionSetAssignment>();
        for(PermissionSet permissionSet : permissionSets){
            PermissionSetAssignment permissionSetAssignment = new PermissionSetAssignment();
            permissionSetAssignment.AssigneeId = userId;
            permissionSetAssignment.PermissionSetId = permissionSet.Id;
            permissionSetAssignments.add(permissionSetAssignment);
        }
        insert permissionSetAssignments;
    }

    public static void fireUserPlatformEvent(String userId){
        Operator_Created_Event__e event = new Operator_Created_Event__e();
        event.User_Id__c = userId;
        EventBus.publish(event);
    }

    public static String getUserNameSuffix(){
        //If it is a sandbox, add the sandbox suffix
        if([SELECT IsSandbox, InstanceName FROM Organization].IsSandbox){
            String baseURL = URL.getOrgDomainUrl().getHost();
            //Get everything after -- and before the next .
            String instanceName = baseURL.substringAfter('--').substringBefore('.');
            return instanceName;
        } else {
            return '';
        }
    }

    public static void createServiceResources(List<String> userIds){

        List<User> users = [SELECT Id, Name, ATAK_Code__c, ManagerId, Manager.ATAK_Code__c FROM User WHERE Id IN :userIds];
        Map<String, User> userToManager = new Map<String, User>();
        Map<String, ServiceTerritory> serviceTerritories = new Map<String, ServiceTerritory>();
        List<ServiceTerritory> existingTerritories = [SELECT Id, Name, Main_Responsible__c, Main_Responsible_Atak_Code__c FROM ServiceTerritory WHERE ParentTerritoryId = NULL AND Main_Responsible_Atak_Code__c != null];

        for(ServiceTerritory territory : existingTerritories){
            System.debug('Service Territory: ' + territory);
            serviceTerritories.put(territory.Main_Responsible__c, territory);
        }

        List<ServiceResource> serviceResources = new List<ServiceResource>();

        for(User user : users){
            userToManager.put(user.Id, user);
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
        List<ATAK_Personnel__c> personnelRecords = new List<ATAK_Personnel__c>();
        for(ServiceResource serviceResource : serviceResources){
            if(serviceTerritories.containsKey(userToManager.get(serviceResource.RelatedRecordId).ManagerId)){
                System.debug('Service Territory: ' + serviceTerritories.get(userToManager.get(serviceResource.RelatedRecordId).ManagerId));
                ServiceTerritoryMember serviceTerritoryMember = new ServiceTerritoryMember();
                serviceTerritoryMember.ServiceTerritoryId = serviceTerritories.get(userToManager.get(serviceResource.RelatedRecordId).ManagerId).Id;
                serviceTerritoryMember.ServiceResourceId = serviceResource.Id;
                serviceTerritoryMember.EffectiveStartDate = Date.today();
                serviceTerritoryMembers.add(serviceTerritoryMember);

                ATAK_Personnel__c personnel = new ATAK_Personnel__c();
                personnel.Code__c = userToManager.get(serviceResource.RelatedRecordId).ATAK_Code__c;
                personnel.Service_Resource__c = serviceResource.Id;
                personnel.User__r = new User(ATAK_Code__c = userToManager.get(serviceResource.RelatedRecordId).ATAK_Code__c);
                personnelRecords.add(personnel);

            }
        }

        insert serviceTerritoryMembers;
        upsert personnelRecords Code__c;



    }
}