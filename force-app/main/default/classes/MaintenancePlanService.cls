public with sharing class MaintenancePlanService {

    /**
     * Main method to create a maintenance plan from a service contract.
     * It splits tasks into smaller methods for querying, upserting, and DML handling.
     *
     * @param serviceContractId The Id of the Service Contract.
     */
    public static void createMaintenancePlanFormServiceContract(String serviceContractId) {
        try {
            ServiceContract serviceContract = getServiceContract(serviceContractId);
            List<ContractLineItem> serviceLines = getContractLineItems(serviceContractId);
            List<ServiceTerritory> territories = getServiceTerritories();
            Map<String, Id> territoryMap = mapServiceTerritories(territories);
            List<Account> uniqueLocations = getUniqueLocations(serviceContract, serviceLines);

            System.debug('Unique Locations: ' + uniqueLocations);

            upsertLocations(uniqueLocations);

            List<Asset> assets = createAssets(serviceContract, serviceLines, uniqueLocations);
            upsertAssets(assets);

            List<Service_Item__c> serviceItems = createServiceItems(assets);
            insertServiceItems(serviceItems);

            updateContractLineItems(serviceLines, assets);

            MaintenancePlan maintenancePlan = createMaintenancePlan(serviceContractId, serviceContract);
            insertMaintenancePlan(maintenancePlan);

            List<MaintenanceAsset> maintenanceAssets = createMaintenanceAssets(maintenancePlan, assets, territoryMap);
            insertMaintenanceAssets(maintenanceAssets);

            List<MaintenanceWorkRule> maintenanceWorkRules = createMaintenanceWorkRules(maintenancePlan.Id, maintenanceAssets);
            insertMaintenanceWorkRules(maintenanceWorkRules);

        } catch (Exception e) {
            System.debug('Error creating maintenance plan: ' + e.getMessage());
            throw new MaintenancePlanException('Error creating maintenance plan: ' + e.getMessage());
        }
    }

    // Helper Methods

    /**
     * Get service contract by Id.
     * @param serviceContractId The Id of the Service Contract.
     * @return ServiceContract The Service Contract.
     */
    private static ServiceContract getServiceContract(String serviceContractId) {
        return [SELECT Id, AccountId, Account.Name, Status, StartDate, EndDate
        FROM ServiceContract WHERE Id = :serviceContractId LIMIT 1];
    }

    /**
     * Query the related contract line items for a service contract.
     * @param serviceContractId The Id of the Service Contract.
     * @return List<ContractLineItem> The list of contract line items.
     */
    private static List<ContractLineItem> getContractLineItems(String serviceContractId) {
        return [SELECT Id, StartDate, EndDate, Recurrence_Pattern__c, Project_Code__c,
                Product2.Name, Product2.Family, Product2Id, ServiceContract.Account.Name,
                Location__City__s, Location__Street__s, Location__PostalCode__s, Location__CountryCode__s,
                Planning_Type__c
        FROM ContractLineItem WHERE ServiceContractId = :serviceContractId];
    }

    /**
     * Query the service territories.
     * This is used to map service territories by name for later use.
     * @return List<ServiceTerritory> The list of service territories.
     */
    private static List<ServiceTerritory> getServiceTerritories() {
        return [SELECT Id, Name FROM ServiceTerritory];
    }

    /**
     * Map service territories by name for later use.
     * @param territories The list of service territories.
     * @return Map<String, Id> The map of service territories.
     */
    private static Map<String, Id> mapServiceTerritories(List<ServiceTerritory> territories) {
        Map<String, Id> territoryMap = new Map<String, Id>();
        for (ServiceTerritory st : territories) {
            territoryMap.put(st.Name, st.Id);
        }
        return territoryMap;
    }

    /**
     * Extract unique locations from contract line items.
     * @param serviceContract The service contract.
     * @param serviceLines The list of contract line items.
     * @return List<Account> The list of unique locations.
     */
    private static List<Account> getUniqueLocations(ServiceContract serviceContract, List<ContractLineItem> serviceLines) {
        List<Account> uniqueLocations = new List<Account>();
        List<String> locationKeys = new List<String>();

        String recordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('Operational Account').getRecordTypeId();

        for (ContractLineItem line : serviceLines) {
            String locationKey = serviceContract.Account.Name + '-' + line.Location__Street__s + '-' + line.Location__City__s;
            if (!locationKeys.contains(locationKey)) {
                Account location = new Account();
                location.Name = locationKey.abbreviate(80);
                location.RecordTypeId = recordTypeId;
                location.ShippingStreet = line.Location__Street__s;
                location.ShippingCity = line.Location__City__s;
                location.ShippingPostalCode = line.Location__PostalCode__s;
                location.ShippingCountry = line.Location__CountryCode__s;
                location.ParentId = serviceContract.AccountId;
                location.Address_Identifier__c = locationKey;
                uniqueLocations.add(location);
                locationKeys.add(locationKey);
            }
        }
        return uniqueLocations;
    }

    /**
     * Upsert unique locations into Salesforce.
     * @param uniqueLocations The list of unique locations.
     */
    private static void upsertLocations(List<Account> uniqueLocations) {
        Schema.SObjectField aId = Account.Fields.Address_Identifier__c;
        Database.UpsertResult[] upsertResults = Database.upsert(uniqueLocations, aId, false);

        for (Database.UpsertResult result : upsertResults) {
            if (!result.isSuccess()) {
                for (Database.Error error : result.getErrors()) {
                    System.debug('Error upserting locations: ' + error.getMessage());
                }
            }
        }

        System.debug('Upserted Locations: ' + upsertResults);
    }

    /**
     * Create asset records based on contract line items.
     * @param serviceContract The service contract.
     * @param serviceLines The list of contract line items.
     * @param uniqueLocations The list of unique locations.
     * @return List<Asset> The list of assets.
     */
    private static List<Asset> createAssets(ServiceContract serviceContract, List<ContractLineItem> serviceLines, List<Account> uniqueLocations) {
        List<Asset> assets = new List<Asset>();

        for (ContractLineItem line : serviceLines) {
            // Generate locationKey based on street and city
            String locationKey = serviceContract.Account.Name + '-' + line.Location__Street__s + '-' + line.Location__City__s;

            Asset asset = new Asset();
            asset.Name = (line.Product2.Name + ' - ' + serviceContract.Account.Name + ' - ' + line.Location__City__s + ' ' + line.Location__Street__s).abbreviate(80);
            asset.Account = new Account(Address_Identifier__c = locationKey);  // Using locationKey instead of Account.Name
            asset.Product2Id = line.Product2Id;
            asset.Status = 'Active';
            asset.PurchaseDate = line.StartDate != null ? line.StartDate : serviceContract.StartDate;
            asset.InstallDate = asset.PurchaseDate;
            asset.UsageEndDate = line.EndDate != null ? line.EndDate : serviceContract.EndDate;
            asset.Unique_Id__c = generateUniqueAssetKey(line, locationKey);  // Using locationKey for asset uniqueness
            asset.Recurrence_Pattern__c = line.Recurrence_Pattern__c;
            assets.add(asset);
        }

        return assets;
    }


    /**
     * Upsert asset records into Salesforce.
     * @param assets The list of assets.
     */
    private static void upsertAssets(List<Asset> assets) {
        Schema.SObjectField sId = Asset.Fields.Unique_Id__c;
        Database.UpsertResult[] assetUpsertResults = Database.upsert(assets, sId, false);

        for (Database.UpsertResult result : assetUpsertResults) {
            if (!result.isSuccess()) {
                for (Database.Error error : result.getErrors()) {
                    System.debug('Error upserting assets: ' + error.getMessage());
                }
            }
        }
    }

    /**
     * Create service items for assets.
     * @param assets The list of assets.
     * @return List<Service_Item__c> The list of service items.
     */
    private static List<Service_Item__c> createServiceItems(List<Asset> assets) {
        List<Service_Item__c> serviceItems = new List<Service_Item__c>();
        for (Asset asset : assets) {
            Service_Item__c serviceItem = new Service_Item__c();
            serviceItem.Name = asset.Name;
            serviceItem.Service_Package__c = asset.Product2Id;
            serviceItem.Service__c = asset.Id;
            serviceItems.add(serviceItem);
        }
        return serviceItems;
    }

    /**
     * Insert service item records into Salesforce.
     * @param serviceItems The list of service items.
     */
    private static void insertServiceItems(List<Service_Item__c> serviceItems) {
        insert serviceItems;
    }

    /**
     * Update contract line items with associated assets.
     * @param serviceLines The list of contract line items.
     * @param assets The list of assets.
     */
    private static void updateContractLineItems(List<ContractLineItem> serviceLines, List<Asset> assets) {
        for (ContractLineItem line : serviceLines) {
            // Generate locationKey based on street and city for updating contract line items
            String locationKey = line.ServiceContract.Account.Name + '-' + line.Location__Street__s + '-' + line.Location__City__s;

            line.Asset = new Asset(Unique_Id__c = generateUniqueAssetKey(line, locationKey));  // Using locationKey, not Account.Name
        }
        update serviceLines;
    }


    /**
     * Create a maintenance plan for the service contract.
     * @param serviceContractId The Id of the Service Contract.
     * @param serviceContract The Service Contract.
     * @return MaintenancePlan The maintenance plan.
     */
    private static MaintenancePlan createMaintenancePlan(String serviceContractId, ServiceContract serviceContract) {
        MaintenancePlan maintenancePlan = new MaintenancePlan();
        maintenancePlan.MaintenancePlanTitle = 'Maintenance Plan for ' + serviceContract.Account.Name + ' - ' + serviceContract.EndDate.year();
        maintenancePlan.ServiceContractId = serviceContractId;
        maintenancePlan.StartDate = serviceContract.StartDate;
        maintenancePlan.EndDate = serviceContract.EndDate;
        maintenancePlan.AccountId = serviceContract.AccountId;
        maintenancePlan.WorkOrderGenerationMethod = 'WorkOrderPerAsset';
        maintenancePlan.GenerationHorizon = 31;
        maintenancePlan.GenerationTimeframeType = 'Months';
        maintenancePlan.GenerationTimeframe = 3;
        maintenancePlan.MaintenanceWindowStartDays = 7;
        maintenancePlan.MaintenanceWindowEndDays = 7;
        maintenancePlan.NextSuggestedMaintenanceDate = serviceContract.StartDate;
        return maintenancePlan;
    }

    /**
     * Insert maintenance plan into Salesforce.
     * @param maintenancePlan The maintenance plan.
     */
    private static void insertMaintenancePlan(MaintenancePlan maintenancePlan) {
        insert maintenancePlan;
    }

    /**
     * Create maintenance asset records for the plan.
     * @param maintenancePlan The maintenance plan.
     * @param assets The list of assets.
     * @param territoryMap The map of service territories.
     * @return List<MaintenanceAsset> The list of maintenance assets.
     */
    private static List<MaintenanceAsset> createMaintenanceAssets(MaintenancePlan maintenancePlan, List<Asset> assets, Map<String, Id> territoryMap) {
        List<MaintenanceAsset> maintenanceAssets = new List<MaintenanceAsset>();

        for (Asset asset : assets) {
            MaintenanceAsset maintenanceAsset = new MaintenanceAsset();
            maintenanceAsset.MaintenancePlanId = maintenancePlan.Id;
            maintenanceAsset.AssetId = asset.Id;
            maintenanceAsset.NextSuggestedMaintenanceDate = asset.InstallDate;
            maintenanceAssets.add(maintenanceAsset);
        }
        return maintenanceAssets;
    }

    /**
     * Insert maintenance asset records into Salesforce.
     * @param maintenanceAssets The list of maintenance assets.
     */
    private static void insertMaintenanceAssets(List<MaintenanceAsset> maintenanceAssets) {
        insert maintenanceAssets;
    }

    /**
     * Create maintenance work rules based on maintenance assets.
     * @param maintenancePlanId The Id of the Maintenance Plan.
     * @param maintenanceAssets The list of maintenance assets.
     * @return List<MaintenanceWorkRule> The list of maintenance work rules.
     */
    private static List<MaintenanceWorkRule> createMaintenanceWorkRules(Id maintenancePlanId, List<MaintenanceAsset> maintenanceAssets) {
        List<MaintenanceWorkRule> maintenanceWorkRules = new List<MaintenanceWorkRule>();

        // Query the MaintenanceAssets again to get the related Asset data
        List<MaintenanceAsset> queriedMaintenanceAssets = [
                SELECT Id, Asset.Name, Asset.Recurrence_Pattern__c, Asset.InstallDate, WorkTypeId
                FROM MaintenanceAsset
                WHERE Id IN :maintenanceAssets
        ];

        // Create a map to store Asset data related to each MaintenanceAsset
        Map<Id, MaintenanceAsset> maintenanceAssetMap = new Map<Id, MaintenanceAsset>();
        for (MaintenanceAsset ma : queriedMaintenanceAssets) {
            maintenanceAssetMap.put(ma.Id, ma);
        }

        // Now loop through the original maintenance assets and create the work rules
        for (MaintenanceAsset ma : maintenanceAssets) {
            MaintenanceAsset queriedAsset = maintenanceAssetMap.get(ma.Id);
            if (queriedAsset != null && queriedAsset.Asset != null) {
                MaintenanceWorkRule maintenanceWorkRule = new MaintenanceWorkRule();
                maintenanceWorkRule.ParentMaintenanceRecordId = queriedAsset.Id;
                maintenanceWorkRule.RecurrencePattern = queriedAsset.Asset.Recurrence_Pattern__c; // Now we have the asset's recurrence pattern
                maintenanceWorkRule.WorkTypeId = queriedAsset.WorkTypeId;
                maintenanceWorkRule.NextSuggestedMaintenanceDate = queriedAsset.Asset.InstallDate;
                maintenanceWorkRule.Title = 'Maintenance Work Rule for ' + queriedAsset.Asset.Name;
                maintenanceWorkRule.SortOrder = 1;
                maintenanceWorkRules.add(maintenanceWorkRule);
            }
        }
        return maintenanceWorkRules;
    }


    /**
     * Insert maintenance work rules into Salesforce.
     * @param maintenanceWorkRules The list of maintenance work rules.
     */
    private static void insertMaintenanceWorkRules(List<MaintenanceWorkRule> maintenanceWorkRules) {
        insert maintenanceWorkRules;
    }

    /**
     * Generate a unique asset key based on contract line item and service contract account name.
     * @param line The contract line item.
     * @param locationKey The location key.
     * @return String The unique asset key.
     */
    private static String generateUniqueAssetKey(ContractLineItem line, String locationKey) {
        return line.Product2Id + '-' + line.Recurrence_Pattern__c + '-' + line.Project_Code__c + '-' + locationKey;
    }

    /**
     * Get Work Type Id for a given service package (stubbed).
     * @param servicePackage The service package.
     * @return Id The Work Type Id.
     */
    private static Id getWorkTypeId(String servicePackage) {
        // Stub for fetching WorkTypeId based on Service Package
        return [SELECT Id FROM WorkType WHERE Name = :servicePackage LIMIT 1].Id;
    }
}