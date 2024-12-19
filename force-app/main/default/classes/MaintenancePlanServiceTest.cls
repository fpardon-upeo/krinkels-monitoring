/**
 * Created by Frederik on 11/5/2024.
 */
@IsTest
private class MaintenancePlanServiceTest {

    static String testCreateServiceContract() {
        Account commAcc = FieldServiceTestData.createTestAccount('Commercial', 'Commercial Account', true);
        Product2 packageProduct = FieldServiceTestData.createTestProduct('Package', 'Service Package', true);
        Product2 serviceProduct = FieldServiceTestData.createTestProduct('Service', 'Service', true);
        serviceProduct = FieldServiceTestData.linkServiceToPackageProduct(packageProduct.Id, serviceProduct.Id, true);
        List<Product2> products = new List<Product2>{packageProduct, serviceProduct};

        String pricebookId = Test.getStandardPricebookId();
        List<PricebookEntry> pricebookEntries = FieldServiceTestData.createTestPricebookEntries(products, 1, true);

        ServiceContract serviceContract = new ServiceContract(
                AccountId = commAcc.Id,
                Pricebook2Id = pricebookId,
                Name = 'Test Service Contract',
                StartDate = Date.newInstance(Date.today().year(), 01, 01),
                Type__c = 'Service Contract'
        );

        insert serviceContract;

        System.assertEquals(1, [SELECT COUNT() FROM ServiceContract]);
        return serviceContract.Id;


    }

    /**
    @IsTest
    static void testCreateMaintenancePlanForPackage() {
        String serviceContractId = testCreateServiceContract();

        ServiceContract serviceContract = [SELECT Id, Pricebook2.Name, AccountId FROM ServiceContract WHERE Id = :serviceContractId];
        String atakProjectId = FieldServiceTestData.createATAKProject('ATAK', 'AP123456', true);

        String pricebookEntryId = [SELECT Id FROM PricebookEntry WHERE Product2.Name = 'Package' LIMIT 1].Id;

        ContractLineItem contractLineItem = new ContractLineItem(
                ServiceContractId = serviceContractId,
                PricebookEntryId = pricebookEntryId,
                Quantity = 1,
                UnitPrice = 100,
                StartDate = Date.today(),
                EndDate = Date.today().addDays(7),
                Location__Street__s = 'Oude Markt 13',
                Location__City__s = 'Leuven',
                Location__PostalCode__s = '3000',
                Recurrence_Pattern__c = 'FREQ=DAILY;INTERVAL=7',
                Project_Code__c = atakProjectId
        );

        insert contractLineItem;
        System.assertEquals(1, [SELECT COUNT() FROM ContractLineItem]);

        Test.startTest();
        MaintenancePlanService.createMaintenancePlanFormServiceContract(serviceContractId);

        MaintenancePlan maintenancePlan = [SELECT Id, ServiceContractId, AccountId, StartDate, EndDate
        FROM MaintenancePlan
        WHERE ServiceContractId = :serviceContractId];

        System.assertEquals(serviceContractId, maintenancePlan.ServiceContractId);
        System.assertEquals(serviceContract.AccountId, maintenancePlan.AccountId);
        System.assertEquals(Date.newInstance(Date.today().year(), 01, 01), maintenancePlan.StartDate);
        System.assertEquals(Date.newInstance(Date.today().year(), 12, 31), maintenancePlan.EndDate);

        List<MaintenanceAsset> maintenanceAssets = [SELECT Id, MaintenancePlanId, AssetId
        FROM MaintenanceAsset
        WHERE MaintenancePlanId = :maintenancePlan.Id];
        System.assertEquals(1, maintenanceAssets.size());

        List<Id> assetIds = new List<Id>();
        for(MaintenanceAsset ma : maintenanceAssets) {
            assetIds.add(ma.AssetId);
        }

        List<MaintenanceWorkRule> maintenanceWorkRules = [SELECT Id, ParentMaintenanceRecordId,
                NextSuggestedMaintenanceDate, RecurrencePattern
        FROM MaintenanceWorkRule
        WHERE ParentMaintenanceRecord.MaintenancePlanId = :maintenancePlan.Id];
        System.assertEquals(1, maintenanceWorkRules.size());
        System.assertEquals(Date.today(), maintenanceWorkRules[0].NextSuggestedMaintenanceDate);
        System.assertEquals('FREQ=DAILY;INTERVAL=7', maintenanceWorkRules[0].RecurrencePattern);

        List<Account> accounts = [SELECT Id FROM Account WHERE ParentId = :serviceContract.AccountId];
        System.assertEquals(1, accounts.size());

        List<Asset> assets = [SELECT Id, ATAK_Project__r.SubProject_ATAK__c, Recurrence_Pattern__c
        FROM Asset
        WHERE AccountId = :accounts[0].Id];
        System.assertEquals(1, assets.size());
        System.assertEquals(atakProjectId, assets[0].ATAK_Project__r.SubProject_ATAK__c);
        System.assertEquals('FREQ=DAILY;INTERVAL=7', assets[0].Recurrence_Pattern__c);

        WorkOrderSchedulerController.scheduleWorkOrders(maintenancePlan.Id);
        Test.stopTest();

        List<WorkOrder> workOrders = [SELECT Id, MaintenancePlanId
        FROM WorkOrder
        WHERE MaintenancePlanId = :maintenancePlan.Id];
        System.assertEquals(2, workOrders.size());
    }

    **/

    @IsTest
    static void testCreateWorkOrderVariableSchedule() {
        String serviceContractId = testCreateServiceContract();

        ServiceContract serviceContract = [SELECT Id, Pricebook2.Name, AccountId
        FROM ServiceContract
        WHERE Id = :serviceContractId];
        String atakProjectId = FieldServiceTestData.createATAKProject('ATAK', 'AP123456', true);

        List<ContractLineItem> contractLineItems = new List<ContractLineItem>();
        Date startOfYear = Date.newInstance(Date.today().year(), 01, 01);
        Date endOfCurrentLineItem = startOfYear.addMonths(3);

        contractLineItems.add(createContractLineItem(
                serviceContract.Id,
                startOfYear,
                endOfCurrentLineItem,
                'FREQ=DAILY;INTERVAL=7',
                atakProjectId,
                'Leuven',
                '3000',
                'Oude Markt 13'
        ));

        Date startOfNextLineItem = endOfCurrentLineItem.addDays(1);
        Date endOfNextLineItem = startOfNextLineItem.addMonths(3);
        contractLineItems.add(createContractLineItem(
                serviceContract.Id,
                startOfNextLineItem,
                endOfNextLineItem,
                'FREQ=MONTHLY;INTERVAL=1',
                atakProjectId,
                'Leuven',
                '3000',
                'Oude Markt 13'
        ));

        startOfNextLineItem = endOfNextLineItem.addDays(1);
        endOfNextLineItem = startOfNextLineItem.addMonths(3);
        contractLineItems.add(createContractLineItem(
                serviceContract.Id,
                startOfNextLineItem,
                endOfNextLineItem,
                'FREQ=YEARLY;INTERVAL=2',
                atakProjectId,
                'Leuven',
                '3000',
                'Oude Markt 13'
        ));

        insert contractLineItems;

        Test.startTest();
        MaintenancePlanService.createMaintenancePlanFormServiceContract(serviceContractId);

        MaintenancePlan maintenancePlan = [SELECT Id, ServiceContractId, AccountId, StartDate, EndDate
        FROM MaintenancePlan
        WHERE ServiceContractId = :serviceContractId];

        List<MaintenanceAsset> maintenanceAssets = [SELECT Id, MaintenancePlanId, AssetId
        FROM MaintenanceAsset
        WHERE MaintenancePlanId = :maintenancePlan.Id];

        List<Id> assetIds = new List<Id>();
        for(MaintenanceAsset ma : maintenanceAssets) {
            assetIds.add(ma.AssetId);
        }

        WorkOrderSchedulerController.scheduleWorkOrders(maintenancePlan.Id);
        Test.stopTest();

        List<Account> accounts = [SELECT Id FROM Account WHERE ParentId = :serviceContract.AccountId];
        System.assertEquals(1, accounts.size());

        List<Asset> assets = [SELECT Id, ATAK_Project__r.SubProject_ATAK__c, InstallDate,
                LastSuggestedMaintenanceDate__c, Recurrence_Pattern__c
        FROM Asset
        WHERE AccountId = :accounts[0].Id];
        System.assertEquals(3, assets.size());
        System.assertEquals('FREQ=DAILY;INTERVAL=7', assets[0].Recurrence_Pattern__c);
        System.assertEquals('FREQ=MONTHLY;INTERVAL=1', assets[1].Recurrence_Pattern__c);
        System.assertEquals('FREQ=YEARLY;INTERVAL=2', assets[2].Recurrence_Pattern__c);

        // Check work orders for each asset
        for (Asset asset : assets) {
            List<WorkOrder> workOrders = [SELECT Id, MaintenancePlanId
            FROM WorkOrder
            WHERE MaintenancePlanId = :maintenancePlan.Id
            AND AssetId = :asset.Id];

            RRuleAdjuster adjuster = new RRuleAdjuster(
                    asset.Recurrence_Pattern__c,
                    asset.InstallDate
            );

            Integer instanceCount = adjuster.calculateInstanceCount(
                    asset.InstallDate,
                    asset.LastSuggestedMaintenanceDate__c,
                    asset.Recurrence_Pattern__c
            );

            System.assertEquals(instanceCount, workOrders.size());
        }
    }

    private static ContractLineItem createContractLineItem(
            String serviceContractId,
            Date startDate,
            Date endDate,
            String recurrencePattern,
            String atakProjectId,
            String city,
            String postalCode,
            String street) {
        String pricebookEntryId = [SELECT Id FROM PricebookEntry WHERE Product2.Name = 'Package' LIMIT 1].Id;

        return new ContractLineItem(
                ServiceContractId = serviceContractId,
                PricebookEntryId = pricebookEntryId,
                Quantity = 1,
                UnitPrice = 100,
                StartDate = startDate,
                EndDate = endDate,
                Location__Street__s = street,
                Location__City__s = city,
                Location__PostalCode__s = postalCode,
                Recurrence_Pattern__c = recurrencePattern,
                Project_Code__c = atakProjectId
        );
    }
}