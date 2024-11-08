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
        List<PricebookEntry> pricebookEntries = FieldServiceTestData.createTestPricebookEntries(products, 1, true);
        String pricebookId = FieldServiceTestData.getStandardPricebookId();

        ServiceContract serviceContract = new ServiceContract();
        serviceContract.AccountId = commAcc.Id;
        serviceContract.Pricebook2Id = pricebookId;
        serviceContract.Name = 'Test Service Contract';
        serviceContract.StartDate = Date.newInstance(Date.today().year(), 01, 01);
        serviceContract.Type__c = 'Service Contract';

        insert serviceContract;
        System.assertEquals(1, [SELECT COUNT() FROM ServiceContract]);
        return serviceContract.Id;

    }

    @IsTest
    static void testCreateMaintenancePlanForPackage() {

        String serviceContractId = testCreateServiceContract();

        ServiceContract serviceContract = [SELECT Id, Pricebook2.Name, AccountId FROM ServiceContract WHERE Id = :serviceContractId];
        String atakProjectId = FieldServiceTestData.createATAKProject('ATAK', 'AP123456', true);
        System.debug('ATAK Project ID: ' + atakProjectId);


        String pricebookEntryId = [SELECT Id FROM PricebookEntry WHERE Product2.Name = 'Package'].Id;

        ContractLineItem contractLineItem = new ContractLineItem();
        contractLineItem.ServiceContractId = serviceContractId;
        contractLineItem.PricebookEntryId = pricebookEntryId;
        contractLineItem.Quantity = 1;
        contractLineItem.UnitPrice = 100;
        contractLineItem.StartDate = Date.today();
        contractLineItem.EndDate = Date.today().addDays(7);
        contractLineItem.Location__Street__s = 'Oude Markt 13';
        contractLineItem.Location__City__s = 'Leuven';
        contractLineItem.Location__PostalCode__s = '3000';
        contractLineItem.Recurrence_Pattern__c = 'FREQ=DAILY;INTERVAL=7';
        contractLineItem.Project_Code__c = atakProjectId;
        insert contractLineItem;
        System.assertEquals(1, [SELECT COUNT() FROM ContractLineItem]);
        MaintenancePlanService.createMaintenancePlanFormServiceContract(serviceContractId);

        //Check the created maintenance plan
        MaintenancePlan maintenancePlan = [SELECT Id, ServiceContractId, AccountId, StartDate, EndDate FROM MaintenancePlan WHERE ServiceContractId = :serviceContractId];
        System.assertEquals(serviceContractId, maintenancePlan.ServiceContractId);
        System.assertEquals(serviceContract.AccountId, maintenancePlan.AccountId);
        System.assertEquals(Date.today(), maintenancePlan.StartDate);
        //The end date should be the end of the current year
        System.assertEquals(Date.newInstance(Date.today().year(), 12, 31), maintenancePlan.EndDate);

        //Check the created maintenance assets
        List<MaintenanceAsset> maintenanceAssets = [SELECT Id, MaintenancePlanId, AssetId FROM MaintenanceAsset WHERE MaintenancePlanId = :maintenancePlan.Id];
        System.assertEquals(1, maintenanceAssets.size());

        //Add the asset ids to a list so we can check this later
        List<Id> assetIds = new List<Id>();
        for(MaintenanceAsset ma : maintenanceAssets) {
            assetIds.add(ma.AssetId);
        }

        //Check the created Maintenance Work Rules
        List<MaintenanceWorkRule> maintenanceWorkRules = [SELECT Id, ParentMaintenanceRecordId, NextSuggestedMaintenanceDate, RecurrencePattern FROM MaintenanceWorkRule WHERE ParentMaintenanceRecord.MaintenancePlanId = :maintenancePlan.Id];
        System.assertEquals(1, maintenanceWorkRules.size());
        System.assertEquals(Date.today(), maintenanceWorkRules[0].NextSuggestedMaintenanceDate);
        System.assertEquals('FREQ=DAILY;INTERVAL=7', maintenanceWorkRules[0].RecurrencePattern);

        //Check the create Accounts
        List<Account> accounts = [SELECT Id FROM Account ParentId WHERE ParentId = :serviceContract.AccountId];
        System.assertEquals(1, accounts.size());

        //Check the created Assets
        List<Asset> assets = [SELECT Id, ATAK_Project__r.SubProject_ATAK__c, Recurrence_Pattern__c FROM Asset WHERE AccountId = :accounts[0].Id];
        System.assertEquals(1, assets.size());
        System.assertEquals(atakProjectId, assets[0].ATAK_Project__r.SubProject_ATAK__c);
        System.assertEquals('FREQ=DAILY;INTERVAL=7', assets[0].Recurrence_Pattern__c);

        //Call the WorkOrderSchedulerController to create the work orders
        Test.startTest();
        WorkOrderSchedulerController.scheduleWorkOrders(maintenancePlan.Id);
        Test.stopTest();

        //Check the created Work Orders
        List<WorkOrder> workOrders = [SELECT Id, MaintenancePlanId  FROM WorkOrder WHERE MaintenancePlanId = :maintenancePlan.Id];
        //There should be 2 work orders created, one for the first maintenance date and one for the second maintenance date
        System.assertEquals(2, workOrders.size());
    }


    @IsTest
    static void testCreateWorkOrderVariableSchedule() {

        String serviceContractId = testCreateServiceContract();

        ServiceContract serviceContract = [SELECT Id, Pricebook2.Name, AccountId FROM ServiceContract WHERE Id = :serviceContractId];
        String atakProjectId = FieldServiceTestData.createATAKProject('ATAK', 'AP123456', true);
        System.debug('ATAK Project ID: ' + atakProjectId);

        List<ContractLineItem> contractLineItems = new List<ContractLineItem>();
        Date startOfYear = Date.newInstance(Date.today().year(), 01, 01);
        Date endOfCurrentLineItem = startOfYear.addMonths(3);
        contractLineItems.add(createContractLineItem(serviceContract.Id, startOfYear, endOfCurrentLineItem, 'FREQ=DAILY;INTERVAL=7', atakProjectId, 'Leuven', '3000', 'Oude Markt 13'));
        Date startOfNextLineItem = endOfCurrentLineItem.addDays(1);
        Date endOfNextLineItem = startOfNextLineItem.addMonths(3);
        contractLineItems.add(createContractLineItem(serviceContract.Id, startOfNextLineItem, endOfNextLineItem, 'FREQ=MONTHLY;INTERVAL=1', atakProjectId, 'Leuven', '3000', 'Oude Markt 13'));
        startOfNextLineItem = endOfNextLineItem.addDays(1);
        endOfNextLineItem = startOfNextLineItem.addMonths(3);
        contractLineItems.add(createContractLineItem(serviceContract.Id, startOfNextLineItem, endOfNextLineItem, 'FREQ=YEARLY;INTERVAL=2', atakProjectId, 'Leuven', '3000', 'Oude Markt 13'));

        insert contractLineItems;
        MaintenancePlanService.createMaintenancePlanFormServiceContract(serviceContractId);

        //Check the created maintenance plan
        MaintenancePlan maintenancePlan = [SELECT Id, ServiceContractId, AccountId, StartDate, EndDate FROM MaintenancePlan WHERE ServiceContractId = :serviceContractId];

        //Check the created maintenance assets
        List<MaintenanceAsset> maintenanceAssets = [SELECT Id, MaintenancePlanId, AssetId FROM MaintenanceAsset WHERE MaintenancePlanId = :maintenancePlan.Id];

        //Add the asset ids to a list so we can check this later
        List<Id> assetIds = new List<Id>();
        for(MaintenanceAsset ma : maintenanceAssets) {
            assetIds.add(ma.AssetId);
        }

        //Call the WorkOrderSchedulerController to create the work orders
        Test.startTest();
        WorkOrderSchedulerController.scheduleWorkOrders(maintenancePlan.Id);
        Test.stopTest();

        List<Account> accounts = [SELECT Id FROM Account ParentId WHERE ParentId = :serviceContract.AccountId];
        System.assertEquals(1, accounts.size());

        List<Asset> assets = [SELECT Id, ATAK_Project__r.SubProject_ATAK__c, InstallDate, LastSuggestedMaintenanceDate__c, Recurrence_Pattern__c FROM Asset WHERE AccountId = :accounts[0].Id];
        //There should be 3 assets created, one for each unique combination of recurrence and address
        System.assertEquals(3, assets.size());
        //The Recurrence__c field should be set to the recurrence pattern of the contract line item
        System.assertEquals('FREQ=DAILY;INTERVAL=7', assets[0].Recurrence_Pattern__c);
        System.assertEquals('FREQ=MONTHLY;INTERVAL=1', assets[1].Recurrence_Pattern__c);
        System.assertEquals('FREQ=YEARLY;INTERVAL=2', assets[2].Recurrence_Pattern__c);



        //Check the created Work Orders for the first asset recurrence pattern
        List<WorkOrder> workOrders = [SELECT Id, MaintenancePlanId  FROM WorkOrder WHERE MaintenancePlanId = :maintenancePlan.Id AND AssetId = :assets[0].Id];
        RRuleAdjuster adjuster = new RRuleAdjuster(
                assets[0].Recurrence_Pattern__c,
                assets[0].InstallDate
        );

        Integer instanceCount = adjuster.calculateInstanceCount(
                assets[0].InstallDate,
                assets[0].LastSuggestedMaintenanceDate__c,
                assets[0].Recurrence_Pattern__c
        );

        System.assertEquals(instanceCount, workOrders.size());

        //Check the created Work Orders for the second asset recurrence pattern
        workOrders = [SELECT Id, MaintenancePlanId  FROM WorkOrder WHERE MaintenancePlanId = :maintenancePlan.Id AND AssetId = :assets[1].Id];
        adjuster = new RRuleAdjuster(
                assets[1].Recurrence_Pattern__c,
                assets[1].InstallDate
        );

        instanceCount = adjuster.calculateInstanceCount(
                assets[1].InstallDate,
                assets[1].LastSuggestedMaintenanceDate__c,
                assets[1].Recurrence_Pattern__c
        );

        System.assertEquals(instanceCount, workOrders.size());

        //Check the created Work Orders for the third asset recurrence pattern
        workOrders = [SELECT Id, MaintenancePlanId  FROM WorkOrder WHERE MaintenancePlanId = :maintenancePlan.Id AND AssetId = :assets[2].Id];
        adjuster = new RRuleAdjuster(
                assets[2].Recurrence_Pattern__c,
                assets[2].InstallDate
        );

        instanceCount = adjuster.calculateInstanceCount(
                assets[2].InstallDate,
                assets[2].LastSuggestedMaintenanceDate__c,
                assets[2].Recurrence_Pattern__c
        );

        System.assertEquals(instanceCount, workOrders.size());
    }

    private static ContractLineItem createContractLineItem(
            String serviceContractId,
            Date startDate,
            Date endDate,
            String recurrencePattern,
            String atakProjectId,
            String City,
            String PostalCode,
            String Street) {
        String pricebookEntryId = [SELECT Id FROM PricebookEntry WHERE Product2.Name = 'Package'].Id;

        ContractLineItem contractLineItem = new ContractLineItem();
        contractLineItem.ServiceContractId = serviceContractId;
        contractLineItem.PricebookEntryId = pricebookEntryId;
        contractLineItem.Quantity = 1;
        contractLineItem.UnitPrice = 100;
        contractLineItem.StartDate = startDate;
        contractLineItem.EndDate = endDate;
        contractLineItem.Location__Street__s = Street;
        contractLineItem.Location__City__s = City;
        contractLineItem.Location__PostalCode__s = PostalCode;
        contractLineItem.Recurrence_Pattern__c = recurrencePattern;
        contractLineItem.Project_Code__c = atakProjectId;
        return contractLineItem;
    }





}