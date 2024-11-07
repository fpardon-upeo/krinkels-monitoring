public with sharing class MaintenancePlanService {


    @AuraEnabled
    public static List<ContractLineItem> getLinesWithInvalidATAKProject(String serviceContractId){
        Set<String> existingProjectCodes = new Set<String>();
        for(ATAK_Project__c proj : [SELECT SubProject_ATAK__c FROM ATAK_Project__c]) {
            existingProjectCodes.add(proj.SubProject_ATAK__c);
        }

        System.debug('Existing Project Codes: ' + existingProjectCodes);

        List<ContractLineItem> items = [
                SELECT Id, Project_Code__c, LineItemNumber
                FROM ContractLineItem
                WHERE ServiceContractId = :serviceContractId
                AND Project_Code__c NOT IN :existingProjectCodes
        ];

        System.debug('Items: ' + items);

        return items;

    }

    /**
     * Main method to create a maintenance plan from a service contract.
     * It splits tasks into smaller methods for querying, upserting, and DML handling.
     *
     * @param serviceContractId The Id of the Service Contract.
     */
    @AuraEnabled
    public static void createMaintenancePlanFormServiceContract(String serviceContractId) {
            ServiceContract serviceContract = getServiceContract(serviceContractId);
            List<ContractLineItem> serviceLines = getContractLineItems(serviceContractId);
            List<ServiceTerritory> territories = getServiceTerritories();
            List<Account> uniqueLocations = getUniqueLocations(serviceContract, serviceLines);
            Map<String, ATAK_Project__c> projectMap = getProjectMap(serviceLines);

            System.debug('Unique Locations: ' + uniqueLocations);

            upsertLocations(uniqueLocations);

            List<Asset> assets = createAssets(serviceContract, serviceLines, uniqueLocations);
            assets = upsertAssets(assets);

            List<Asset_Financial_Account__c> assetFinCustomers = createAssetFinCustomers(serviceContract, serviceLines);
            insertAssetAccounts(assetFinCustomers);


            List<Service_Item__c> serviceItems = createServiceItems(assets);
            insertServiceItems(serviceItems);

            updateContractLineItems(serviceLines, assets);

            MaintenancePlan maintenancePlan = createMaintenancePlan(serviceContractId, serviceContract);
            insertMaintenancePlan(maintenancePlan);

            List<MaintenanceAsset> maintenanceAssets = createMaintenanceAssets(maintenancePlan, assets, projectMap);
            insertMaintenanceAssets(maintenanceAssets);

            List<MaintenanceWorkRule> maintenanceWorkRules = createMaintenanceWorkRules(maintenancePlan.Id, maintenanceAssets);
            insertMaintenanceWorkRules(maintenanceWorkRules);

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
                Planning_Type__c, Estimated_Duration__c, LMRA__c, ServiceContract.Priority__c
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
        Map<String, ATAK_Project__c> projectMap = getProjectMap(serviceLines);
        System.debug('Project Map: ' + projectMap);

        for (ContractLineItem line : serviceLines) {
            System.debug('Line: ' + line);
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
            asset.Street = line.Location__Street__s;
            asset.City = line.Location__City__s;
            asset.PostalCode = line.Location__PostalCode__s;
            asset.Country = line.Location__CountryCode__s;
            asset.LMRA__c = line.LMRA__c;
            asset.Default_Duration_in_Minutes__c = line.Estimated_Duration__c;
            asset.LastSuggestedMaintenanceDate__c = line.EndDate;
            asset.Recurrence_Text__c = RRuleDescriptionGenerator.generateDescription(asset.Recurrence_Pattern__c);

            if(projectMap.containsKey(line.Project_Code__c)){
                asset.ATAK_Project__c = projectMap.get(line.Project_Code__c).Id;
                if(projectMap.get(line.Project_Code__c).Service_Territory__c != null){
                    asset.Service_Territory__c = projectMap.get(line.Project_Code__c).Service_Territory__c;
                }
            }

            assets.add(asset);
        }

        return assets;
    }

    /**
     * Create asset records based on contract line items.
     * @param serviceContract The service contract.
     * @param serviceLines The list of contract line items.
     * @return List<Asset_Financial_Account__c> The list of assets.
     */
    private static List<Asset_Financial_Account__c> createAssetFinCustomers(ServiceContract serviceContract, List<ContractLineItem> serviceLines) {

        List<Asset_Financial_Account__c> assets = new List<Asset_Financial_Account__c>();
        List<String> cliIds = new List<String>();

        for (ContractLineItem line : serviceLines){
            cliIds.add(line.Id);
        }

        List<Contract_Line_Financial_Account__c> clfas = [SELECT Id, Contract_Line_Item__c, Financial_Customer__c, Financial_Customer__r.Name FROM Contract_Line_Financial_Account__c WHERE Contract_Line_Item__c IN :cliIds];

        for(ContractLineItem cli : serviceLines){
            String locationKey = serviceContract.Account.Name + '-' + cli.Location__Street__s + '-' + cli.Location__City__s;
            for(Contract_Line_Financial_Account__c clfa : clfas){
                if(clfa.Contract_Line_Item__c == cli.Id){
                    Asset_Financial_Account__c afa = new Asset_Financial_Account__c();
                    afa.Asset__r = new Asset(Unique_Id__c = generateUniqueAssetKey(cli, locationKey));
                    afa.Key__c = generateUniqueAssetKey(cli, locationKey) + '-' + clfa.Financial_Customer__c;
                    afa.Account__c = clfa.Financial_Customer__c;
                    afa.Name = clfa.Financial_Customer__r.Name;
                    assets.add(afa);
                }
            }
        }

        return assets;

    }

    /**
     * Insert asset account records into Salesforce.
     * @param assetAccounts The list of asset accounts.
     */
    private static void insertAssetAccounts(List<Asset_Financial_Account__c> assetAccounts) {
        upsert assetAccounts Key__c;
    }


    /**
     * Upsert asset records into Salesforce.
     * @param assets The list of assets.
     */
    private static List<Asset> upsertAssets(List<Asset> assets) {
        Schema.SObjectField sId = Asset.Fields.Unique_Id__c;
        Database.UpsertResult[] assetUpsertResults = Database.upsert(assets, sId, false);

        // Loop throught the upsert results and update the assets with the Ids
        for (Integer i = 0; i < assetUpsertResults.size(); i++) {
            if (assetUpsertResults[i].isSuccess()) {
                assets[i].Id = assetUpsertResults[i].getId();
            } else {
                for (Database.Error error : assetUpsertResults[i].getErrors()) {
                    System.debug('Error upserting assets: ' + error.getMessage());
                }
            }
        }
        return assets;
    }

    /**
     * Create service items for assets.
     * @param assets The list of assets.
     * @return List<Service_Item__c> The list of service items.
     */
    private static List<Service_Item__c> createServiceItems(List<Asset> assets) {

        Map<String, List<Product2>> assetToProductMap = getAssetToProductMap(assets);
        List<Service_Item__c> serviceItems = new List<Service_Item__c>();
        for (Asset asset : assets) {
            System.debug('Asset: ' + asset);
            System.debug('Asset to Product Map: ' + assetToProductMap);
            if(assetToProductMap.containsKey(asset.Id) && assetToProductMap.get(asset.Id).size() > 0){
                //Loop through the products and create a service item for each
                for(Product2 product : assetToProductMap.get(asset.Id)){
                    Service_Item__c serviceItem = new Service_Item__c();
                    serviceItem.Service__c = asset.Id;
                    serviceItem.Service_Package__c = product.Id;
                    serviceItem.Name = product.Name;
                    serviceItem.Service_Item_Key__c = product.Id + '-' + asset.Id + '-' + asset.Recurrence_Pattern__c;
                    serviceItems.add(serviceItem);
                }
            }
        }
        return serviceItems;
    }

    /**
     * Insert service item records into Salesforce.
     * @param serviceItems The list of service items.
     */
    private static void insertServiceItems(List<Service_Item__c> serviceItems) {
        upsert serviceItems Service_Item_Key__c;
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

        //If the endDate is null, set it to the last day of the year
        if(serviceContract.EndDate == null){
            Date lastDayOfYear = Date.newInstance(Date.today().year(), 12, 31);
            maintenancePlan.EndDate = lastDayOfYear;
        } else {
            maintenancePlan.EndDate = serviceContract.EndDate;
        }

        maintenancePlan.MaintenancePlanTitle = 'Maintenance Plan for ' + serviceContract.Account.Name;
        maintenancePlan.ServiceContractId = serviceContractId;
        maintenancePlan.StartDate = serviceContract.StartDate;
        //maintenancePlan.EndDate = serviceContract.EndDate == null ? serviceContract.StartDate.to : serviceContract.EndDate;
        maintenancePlan.AccountId = serviceContract.AccountId;
        maintenancePlan.WorkOrderGenerationMethod = 'WorkOrderPerAsset';
        maintenancePlan.GenerationHorizon = 31;
        maintenancePlan.GenerationTimeframeType = 'Months';
        maintenancePlan.GenerationTimeframe = 12;
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
     * @param projectMap The map of ATAK project codes and records.
     * @return List<MaintenanceAsset> The list of maintenance assets.
     */
    private static List<MaintenanceAsset> createMaintenanceAssets(MaintenancePlan maintenancePlan, List<Asset> assets, Map<String, ATAK_Project__c> projectMap) {
        List<MaintenanceAsset> maintenanceAssets = new List<MaintenanceAsset>();
        Map<String, String> assetMap = getAssetToProductWorkTypeMap(assets);

        for (Asset asset : assets) {

            RRuleAdjuster adjuster = new RRuleAdjuster(
                    asset.Recurrence_Pattern__c,
                    asset.InstallDate
            );

            Integer numberOfWorkOrders = adjuster.calculateInstanceCount(
                    asset.InstallDate,
                    asset.LastSuggestedMaintenanceDate__c,
                    asset.Recurrence_Pattern__c
            );

            MaintenanceAsset maintenanceAsset = new MaintenanceAsset();
            maintenanceAsset.MaintenancePlanId = maintenancePlan.Id;
            maintenanceAsset.AssetId = asset.Id;
            maintenanceAsset.NextSuggestedMaintenanceDate = asset.InstallDate;
            maintenanceAsset.WorkTypeId = assetMap.get(asset.Id);
            maintenanceAsset.LastSuggestedMaintenanceDate__c = asset.LastSuggestedMaintenanceDate__c;
            maintenanceAsset.Default_Duration_in_Minutes__c = asset.Default_Duration_in_Minutes__c;
            maintenanceAsset.Number_Of_Work_Orders__c = numberOfWorkOrders;
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
     * Gets a map of the ATAK project codes and their corresponding ATAK project records.
     * @param contractLineItems The list of contract line items.
     * @return Map<String, ATAK_Project__c> The map of ATAK project codes and records.
     */
    private static Map<String, ATAK_Project__c> getProjectMap(List<ContractLineItem> contractLineItems){

        List<String> uniqueCodes = new List<String>();
        for(ContractLineItem line : contractLineItems){
            if(line.Project_Code__c != null && !uniqueCodes.contains(line.Project_Code__c)){
                uniqueCodes.add(line.Project_Code__c);
            }
        }

        Map<String, ATAK_Project__c> projectMap = new Map<String, ATAK_Project__c>();

        for(ATAK_Project__c project : [SELECT Id, Name, Subproject_Name__c, SubProject_ATAK__c, Service_Territory__c FROM ATAK_Project__c WHERE SubProject_ATAK__c IN :uniqueCodes]){
            projectMap.put(project.SubProject_ATAK__c, project);
        }
        return projectMap;
    }

    private static Map<String, String> getAssetToProductWorkTypeMap(List<Asset> assets){
        Map<String, String> assetToProductWorkTypeMap = new Map<String, String>();
        List<Asset> assetFullData = [SELECT Id, Product2Id, Product2.Work_Type__c FROM Asset WHERE Id IN :assets];
        for(Asset asset : assetFullData){
            assetToProductWorkTypeMap.put(asset.Id, asset.Product2.Work_Type__c);
        }
        return assetToProductWorkTypeMap;
    }

    private static Map<String, List<Product2>> getAssetToProductMap(List<Asset> assets){

        //What we need to return
        Map<String, List<Product2>> assetToProductMap = new Map<String, List<Product2>>();
        //Lists to store the ids of the assets and products, not sure if this is necessary
        List<String> assetIds = new List<String>();
        List<String> productIds = new List<String>();

        //Populate the lists
        for(Asset asset : assets){
            assetIds.add(asset.Id);
            productIds.add(asset.Product2Id);
        }

        //Query the products
        List<Product2> products = [SELECT Id, Name, (SELECT Id, Name FROM Products__r) FROM Product2 WHERE Id IN :productIds];

        //Now we need to return a map of the asset id to the product
        //We need to loop through the assets and find the corresponding product

        for(Asset asset : assets){
            for(Product2 product : products){
                if(asset.Product2Id == product.Id){
                    assetToProductMap.put(asset.Id, product.Products__r);
                }
            }
        }
        System.debug('Asset to Product Map: ' + assetToProductMap);
        return assetToProductMap;
    }




}