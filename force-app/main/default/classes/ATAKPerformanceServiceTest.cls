@IsTest
private class ATAKPerformanceServiceTest {

    @TestSetup
    static void setupTestData() {
        // Create base test data using FieldServiceTestData utility
        Map<String, Object> baseData = FieldServiceTestData.createTimeSheetTestData();
        TimeSheet timeSheet = (TimeSheet)baseData.get('TimeSheet');
        ServiceResource resource = (ServiceResource)baseData.get('ServiceResource');
        User testUser = (User)baseData.get('User');

        // Add ATAK Code to User and update
        testUser.ATAK_Code__c = 'USER001';
        update testUser;

        // Update ServiceResource
        resource.RelatedRecord = testUser;
        update resource;

        // Create Work Types
        WorkType depotType = new WorkType(Name = 'Internal Depot', EstimatedDuration = 2.0);
        WorkType productionType = new WorkType(Name = 'Production Work', EstimatedDuration = 2.0);
        insert new List<WorkType>{depotType, productionType};

        // Create ATAK Projects
        List<ATAK_Project__c> atakProjects = new List<ATAK_Project__c>();
        for(Integer i = 1; i <= 5; i++) {
            atakProjects.add(new ATAK_Project__c(
                    SubProject_ATAK__c = 'PROJ00' + i,
                    Subproject_Name__c = 'Project ' + i
            ));
        }
        insert atakProjects;

        // Create Assets
        List<Asset> assets = new List<Asset>();
        for(ATAK_Project__c proj : atakProjects) {
            assets.add(new Asset(
                    Name = 'Asset for ' + proj.Subproject_Name__c,
                    ATAK_Project__c = proj.Id
            ));
        }
        insert assets;

        // Create Work Orders
        List<WorkOrder> workOrders = new List<WorkOrder>();
        for(Integer i = 0; i < assets.size(); i++) {
            workOrders.add(new WorkOrder(
                    AssetId = assets[i].Id,
                    StartDate = Date.today(),
                    EndDate = Date.today(),
                    WorkTypeId = i == 0 || i == 4 ? depotType.Id : productionType.Id,
                    Subject = 'Work Order ' + (i + 1)
            ));
        }
        insert workOrders;

        //Get the Material Record Type for Product2
        RecordType rt = [SELECT Id FROM RecordType WHERE SObjectType = 'Product2' AND Name = 'Material'];

        // Create Products for materials
        Product2 product = new Product2(
                Name = 'Test Product',
                ATAK_Code__c = 'MAT001',
                IsActive = true,
                RecordTypeId = rt.Id
        );
        insert product;

        // Create Location for ProductItem
        Schema.Location loc = new Schema.Location(
                Name = 'Test Location',
                IsInventoryLocation = true
        );
        insert loc;

        // Create ProductItem
        ProductItem prodItem = new ProductItem(
                Product2Id = product.Id,
                LocationId = loc.Id,
                QuantityOnHand = 100
        );
        insert prodItem;
    }

    /**
     * Tests the worklog service with a complete day scenario
     * Setup:
     * - Morning depot visits
     * - Multiple customer visits
     * - Afternoon depot visits
     * - Mileage entries
     * Expected: 5 work logs
     * - 1 RT (travel between customers)
     * - 2 HR (customer work)
     * - 2 KM (mileage)
     * Tests that WorkLogs are created with correct:
     * - Quantity Registration Units
     * - Project Codes
     * - Performance Resource Codes
     */
    @IsTest
    static void testWorkLogService() {
        TimeSheet ts = [SELECT Id FROM TimeSheet LIMIT 1];
        ServiceResource sr = [SELECT Id FROM ServiceResource LIMIT 1];

        // Create ATAK Projects
        ATAK_Project__c depotProject = new ATAK_Project__c(
                SubProject_ATAK__c = 'G814568',
                Subproject_Name__c = 'Depot Project'
        );
        ATAK_Project__c customerProject = new ATAK_Project__c(
                SubProject_ATAK__c = 'G814573',
                Subproject_Name__c = 'Customer Project'
        );
        insert new List<ATAK_Project__c>{depotProject, customerProject};

        // Create Assets
        Asset depotAsset = new Asset(
                Name = 'Depot Asset',
                ATAK_Project__c = depotProject.Id
        );
        Asset customerAsset = new Asset(
                Name = 'Customer Asset',
                ATAK_Project__c = customerProject.Id
        );
        insert new List<Asset>{depotAsset, customerAsset};

        // Create Work Orders
        WorkOrder depotWO = new WorkOrder(
                AssetId = depotAsset.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Internal Depot'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Depot Visit'
        );
        WorkOrder customerWO1 = new WorkOrder(
                AssetId = customerAsset.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Production Work'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Customer Visit 1'
        );
        WorkOrder customerWO2 = new WorkOrder(
                AssetId = customerAsset.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Production Work'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Customer Visit 2'
        );
        insert new List<WorkOrder>{depotWO, customerWO1, customerWO2};

        // Create TimeSheet entries
        DateTime startTime = DateTime.newInstance(2024, 12, 4, 8, 0, 0);
        List<TimeSheetEntry> entries = new List<TimeSheetEntry>{
                // Morning depot
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = depotWO.Id,
                        StartTime = startTime, EndTime = startTime.addMinutes(30),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = depotWO.Id,
                        StartTime = startTime.addMinutes(30), EndTime = startTime.addMinutes(90),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR'),
                // First customer
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO1.Id,
                        StartTime = startTime.addMinutes(90), EndTime = startTime.addMinutes(120),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO1.Id,
                        StartTime = startTime.addMinutes(120), EndTime = startTime.addMinutes(180),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR'),
                // Second customer
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO2.Id,
                        StartTime = startTime.addMinutes(180), EndTime = startTime.addMinutes(210),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO2.Id,
                        StartTime = startTime.addMinutes(210), EndTime = startTime.addMinutes(240),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR'),
                // Afternoon depot
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = depotWO.Id,
                        StartTime = startTime.addMinutes(240), EndTime = startTime.addMinutes(300),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = depotWO.Id,
                        StartTime = startTime.addMinutes(300), EndTime = startTime.addMinutes(330),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR')
        };
        insert entries;

        // Create Mileage entries
        List<Mileage_Entry__c> mileageEntries = new List<Mileage_Entry__c>{
                new Mileage_Entry__c(
                        Time_Sheet__c = ts.Id,
                        Work_Order__c = depotWO.Id,
                        Service_Resource__c = sr.Id,
                        Codes_ATAK_Limbus__c = 'KMAP',
                        Type__c = 'Starting',
                        Starting_Mileage__c = 6000,
                        Ending_Mileage__c = 6150
                ),
                new Mileage_Entry__c(
                        Time_Sheet__c = ts.Id,
                        Work_Order__c = depotWO.Id,
                        Service_Resource__c = sr.Id,
                        Codes_ATAK_Limbus__c = 'KMAP',
                        Type__c = 'Ending',
                        Starting_Mileage__c = 9000,
                        Ending_Mileage__c = 9050
                )
        };
        insert mileageEntries;

        Test.startTest();
        ATAKWorkLogService.createWorkLogsForTimeSheet(ts.Id);
        Test.stopTest();

        List<ATAK_Work_Log__c> workLogs = [SELECT Id, Quantity_Registration_Unit__c, Quantity__c, Project_Code__c, Performance_Resource_Code__c FROM ATAK_Work_Log__c];
        System.debug(workLogs.size());
        for(ATAK_Work_Log__c log : workLogs) {
            System.debug(log);
        }
        System.assertEquals(5, workLogs.size(), 'Should create 5 work logs (1 RT for first customer travel + 2 HR for production work + 2 mileage entries)');

    }

    /**
 * Tests filtering of first and last travel times
 * Setup:
 * - 8:00-8:30 Travel to first customer (should be filtered - KM)
 * - 8:30-9:30 Work at customer 1
 * - 9:30-10:00 Travel between customers
 * - 10:00-11:00 Work at customer 2
 * - 11:00-11:30 Travel from last customer (should be filtered - KM)
 * Expected: 4 entries
 * - 2 HR entries (customer work)
 * - 1 RT entry (between customers)
 * - 2 KM entries
 */
    @IsTest
    static void testFirstAndLastTravelFiltering() {
        TimeSheet ts = [SELECT Id FROM TimeSheet LIMIT 1];
        ServiceResource sr = [SELECT Id FROM ServiceResource LIMIT 1];

        ATAK_Project__c depotProject = new ATAK_Project__c(
                SubProject_ATAK__c = 'G814568',
                Subproject_Name__c = 'Depot Project'
        );
        ATAK_Project__c customerProject = new ATAK_Project__c(
                SubProject_ATAK__c = 'G814573',
                Subproject_Name__c = 'Customer Project'
        );
        insert new List<ATAK_Project__c>{depotProject, customerProject};

        // Create Assets
        Asset depotAsset = new Asset(
                Name = 'Depot Asset',
                ATAK_Project__c = depotProject.Id
        );
        Asset customerAsset = new Asset(
                Name = 'Customer Asset',
                ATAK_Project__c = customerProject.Id
        );
        insert new List<Asset>{depotAsset, customerAsset};

        // Create Work Orders
        WorkOrder depotWO = new WorkOrder(
                AssetId = depotAsset.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Internal Depot'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Depot Visit'
        );
        WorkOrder customerWO1 = new WorkOrder(
                AssetId = customerAsset.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Production Work'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Customer Visit 1'
        );
        WorkOrder customerWO2 = new WorkOrder(
                AssetId = customerAsset.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Production Work'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Customer Visit 2'
        );
        insert new List<WorkOrder>{depotWO, customerWO1, customerWO2};

        // Create TimeSheet entries
        DateTime startTime = DateTime.newInstance(2024, 12, 4, 8, 0, 0);
        List<TimeSheetEntry> entries = new List<TimeSheetEntry>{
                // First travel (should be filtered)
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO1.Id,
                        StartTime = startTime, EndTime = startTime.addMinutes(30),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                // First customer work
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO1.Id,
                        StartTime = startTime.addMinutes(30), EndTime = startTime.addMinutes(90),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR'),
                // Travel between customers
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO2.Id,
                        StartTime = startTime.addMinutes(90), EndTime = startTime.addMinutes(120),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                // Second customer work
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO2.Id,
                        StartTime = startTime.addMinutes(120), EndTime = startTime.addMinutes(180),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR'),
                // Last travel (should be filtered)
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO2.Id,
                        StartTime = startTime.addMinutes(180), EndTime = startTime.addMinutes(210),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT')
        };
        insert entries;

        List<Mileage_Entry__c> mileageEntries = new List<Mileage_Entry__c>{
                new Mileage_Entry__c(
                        Time_Sheet__c = ts.Id,
                        Work_Order__c = depotWO.Id,
                        Service_Resource__c = sr.Id,
                        Codes_ATAK_Limbus__c = 'KMAP',
                        Type__c = 'Starting',
                        Starting_Mileage__c = 6000,
                        Ending_Mileage__c = 6150
                ),
                new Mileage_Entry__c(
                        Time_Sheet__c = ts.Id,
                        Work_Order__c = depotWO.Id,
                        Service_Resource__c = sr.Id,
                        Codes_ATAK_Limbus__c = 'KMAP',
                        Type__c = 'Ending',
                        Starting_Mileage__c = 9000,
                        Ending_Mileage__c = 9050
                )
        };
        insert mileageEntries;


        Test.startTest();
        ATAKPerformanceWrapper wrapper = ATAKPerformanceService.prepareATAKPerformanceData(ts.Id);
        Test.stopTest();

        System.assertEquals(5, wrapper.data.size(), 'Should have 5 entries (2 HR + 1 RT + 2 KM, first and last travel filtered)');

        // Verify the specific entries
        Integer hrCount = 0;
        Integer rtCount = 0;
        Integer kmCount = 0;
        for(ATAKPerformanceWrapper.Data data : wrapper.data) {
            if(data.quantity_registration_unit == 'HR') hrCount++;
            if(data.quantity_registration_unit == 'RT') rtCount++;
            if(data.quantity_registration_unit == 'KMAP') kmCount++;
        }

        System.assertEquals(2, hrCount, 'Should have 2 HR entries');
        System.assertEquals(1, rtCount, 'Should have 1 RT entry (only between customers)');
        System.assertEquals(2, kmCount, 'Should have 2 KM entries');
    }

    /**
 * Tests filtering of first and last travel times
 * Setup:
 * - 8:00-8:30 Travel to first customer (should be filtered - KM)
 * - 8:30-9:30 Work at customer 1
 * - 9:30-10:00 Travel between customers
 * - 10:00-11:00 Work at customer 2
 * - 11:00-11:30 Travel from last customer (should be filtered - KM)
 * Expected: 4 entries
 * - 2 HR entries (customer work)
 * - 1 RT entry (between customers)
 * - 2 KM entries
 */
    @IsTest
    static void testFirstAndLastTravelFilteringIndoor() {
        TimeSheet ts = [SELECT Id FROM TimeSheet LIMIT 1];
        ServiceResource sr = [SELECT Id FROM ServiceResource LIMIT 1];

        ATAK_Project__c depotProject = new ATAK_Project__c(
                SubProject_ATAK__c = 'G814568',
                Subproject_Name__c = 'Depot Project'
        );
        ATAK_Project__c customerProject = new ATAK_Project__c(
                SubProject_ATAK__c = 'G814573',
                Subproject_Name__c = 'Customer Project'
        );
        insert new List<ATAK_Project__c>{depotProject, customerProject};

        // Create Assets
        Asset depotAsset = new Asset(
                Name = 'Depot Asset',
                ATAK_Project__c = depotProject.Id
        );
        Asset customerAsset = new Asset(
                Name = 'Customer Asset',
                ATAK_Project__c = customerProject.Id
        );
        insert new List<Asset>{depotAsset, customerAsset};

        // Create Work Orders
        WorkOrder depotWO = new WorkOrder(
                AssetId = depotAsset.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Internal Depot'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Depot Visit'
        );
        WorkOrder customerWO1 = new WorkOrder(
                AssetId = customerAsset.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Production Work'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Customer Visit 1'
        );
        WorkOrder customerWO2 = new WorkOrder(
                AssetId = customerAsset.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Production Work'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Customer Visit 2'
        );
        insert new List<WorkOrder>{depotWO, customerWO1, customerWO2};

        // Create TimeSheet entries
        DateTime startTime = DateTime.newInstance(2024, 12, 4, 8, 0, 0);
        List<TimeSheetEntry> entries = new List<TimeSheetEntry>{
                // First travel (should be filtered)
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO1.Id,
                        StartTime = startTime, EndTime = startTime.addMinutes(30),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                // First customer work
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO1.Id,
                        StartTime = startTime.addMinutes(30), EndTime = startTime.addMinutes(90),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR'),
                // Travel between customers
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO2.Id,
                        StartTime = startTime.addMinutes(90), EndTime = startTime.addMinutes(120),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                // Second customer work
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO2.Id,
                        StartTime = startTime.addMinutes(120), EndTime = startTime.addMinutes(180),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR'),
                // Last travel (should be filtered)
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO2.Id,
                        StartTime = startTime.addMinutes(180), EndTime = startTime.addMinutes(210),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT')
        };
        insert entries;


        Test.startTest();
        ATAKPerformanceWrapper wrapper = ATAKPerformanceService.prepareATAKPerformanceDataIndoor(ts.Id);
        System.debug(wrapper.data);
        Test.stopTest();

        System.assertEquals(6, wrapper.data.size(), 'Should have 6 entries (3 HR + 3 RT)');
    }

    /**
     * Tests scenario with depot framing plus mileage entries
     * Setup:
     * - Morning depot visits (should be filtered out)
     * - Two customer visits in between
     * - Afternoon depot visits (should be filtered out)
     * - Plus mileage entries
     * Expected: 5 entries total
     * - 1 RT (travel between customers)
     * - 2 HR (customer work)
     * - 2 KM (mileage entries)
     */
    @IsTest
    static void testScenario1_DepotFramingWithMileage() {
        TimeSheet ts = [SELECT Id FROM TimeSheet LIMIT 1];
        ServiceResource sr = [SELECT Id FROM ServiceResource LIMIT 1];

        // Create ATAK Projects
        ATAK_Project__c depotProject = new ATAK_Project__c(
                SubProject_ATAK__c = 'G814568',
                Subproject_Name__c = 'Depot Project'
        );
        ATAK_Project__c customerProject = new ATAK_Project__c(
                SubProject_ATAK__c = 'G814573',
                Subproject_Name__c = 'Customer Project'
        );
        insert new List<ATAK_Project__c>{depotProject, customerProject};

        // Create Assets
        Asset depotAsset = new Asset(
                Name = 'Depot Asset',
                ATAK_Project__c = depotProject.Id
        );
        Asset customerAsset = new Asset(
                Name = 'Customer Asset',
                ATAK_Project__c = customerProject.Id
        );
        insert new List<Asset>{depotAsset, customerAsset};

        // Create Work Orders
        WorkOrder depotWO = new WorkOrder(
                AssetId = depotAsset.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Internal Depot'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Depot Visit'
        );
        WorkOrder customerWO1 = new WorkOrder(
                AssetId = customerAsset.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Production Work'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Customer Visit 1'
        );
        WorkOrder customerWO2 = new WorkOrder(
                AssetId = customerAsset.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Production Work'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Customer Visit 2'
        );
        insert new List<WorkOrder>{depotWO, customerWO1, customerWO2};

        // Create TimeSheet entries
        DateTime startTime = DateTime.newInstance(2024, 12, 4, 8, 0, 0);
        List<TimeSheetEntry> entries = new List<TimeSheetEntry>{
                // Morning depot
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = depotWO.Id,
                        StartTime = startTime, EndTime = startTime.addMinutes(30),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = depotWO.Id,
                        StartTime = startTime.addMinutes(30), EndTime = startTime.addMinutes(90),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR'),
                // First customer
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO1.Id,
                        StartTime = startTime.addMinutes(90), EndTime = startTime.addMinutes(120),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO1.Id,
                        StartTime = startTime.addMinutes(120), EndTime = startTime.addMinutes(180),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR'),
                // Second customer
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO2.Id,
                        StartTime = startTime.addMinutes(180), EndTime = startTime.addMinutes(210),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO2.Id,
                        StartTime = startTime.addMinutes(210), EndTime = startTime.addMinutes(240),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR'),
                // Afternoon depot
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = depotWO.Id,
                        StartTime = startTime.addMinutes(240), EndTime = startTime.addMinutes(300),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = depotWO.Id,
                        StartTime = startTime.addMinutes(300), EndTime = startTime.addMinutes(330),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR')
        };
        insert entries;

        // Create Mileage entries
        List<Mileage_Entry__c> mileageEntries = new List<Mileage_Entry__c>{
                new Mileage_Entry__c(
                        Time_Sheet__c = ts.Id,
                        Work_Order__c = depotWO.Id,
                        Service_Resource__c = sr.Id,
                        Codes_ATAK_Limbus__c = 'KMAP',
                        Type__c = 'Starting',
                        Starting_Mileage__c = 6000,
                        Ending_Mileage__c = 6150
                ),
                new Mileage_Entry__c(
                        Time_Sheet__c = ts.Id,
                        Work_Order__c = depotWO.Id,
                        Service_Resource__c = sr.Id,
                        Codes_ATAK_Limbus__c = 'KMAP',
                        Type__c = 'Ending',
                        Starting_Mileage__c = 9000,
                        Ending_Mileage__c = 9050
                )
        };
        insert mileageEntries;

        Test.startTest();
        ATAKPerformanceWrapper wrapper = ATAKPerformanceService.prepareATAKPerformanceData(ts.Id);
        Test.stopTest();

        // Verify results - should include first customer travel, production work, and mileage
        System.assertEquals(5, wrapper.data.size(), 'Should have 5 entries (1 RT for first customer travel + 2 HR for production work + 2 mileage entries)');

        // Count different types of entries
        Integer rtCount = 0;
        Integer hrCount = 0;
        Integer kmCount = 0;
        for(ATAKPerformanceWrapper.Data data : wrapper.data) {
            if(data.quantity_registration_unit == 'RT') rtCount++;
            if(data.quantity_registration_unit == 'HR') hrCount++;
            if(data.quantity_registration_unit == 'KMAP') kmCount++;
            System.debug(data);
        }

        System.assertEquals(1, rtCount, 'Should have 1 RT entry (travel to second customer)');
        System.assertEquals(2, hrCount, 'Should have 2 HR entry (production work)');
        System.assertEquals(2, kmCount, 'Should have 2 KM entries');

    }


    /**
     * Tests multiple depot visits before customer
     * Setup:
     * - Two complete depot visits (travel + work for each)
     * - One customer visit at end
     * Expected: 3 entries
     * - Production work only
     * - All depot work filtered
     * - 2 mileage entries
     */
    @IsTest
    static void testScenario3_MultipleDepotVisits() {
        TimeSheet ts = [SELECT Id FROM TimeSheet LIMIT 1];
        ServiceResource sr = [SELECT Id FROM ServiceResource LIMIT 1];

        // Create ATAK Projects
        ATAK_Project__c depotProject = new ATAK_Project__c(
                SubProject_ATAK__c = 'G814568',
                Subproject_Name__c = 'Depot Project'
        );
        ATAK_Project__c customerProject = new ATAK_Project__c(
                SubProject_ATAK__c = 'G814573',
                Subproject_Name__c = 'Customer Project'
        );
        insert new List<ATAK_Project__c>{depotProject, customerProject};

        // Create Assets
        Asset depotAsset = new Asset(
                Name = 'Depot Asset',
                ATAK_Project__c = depotProject.Id
        );
        Asset customerAsset = new Asset(
                Name = 'Customer Asset',
                ATAK_Project__c = customerProject.Id
        );
        insert new List<Asset>{depotAsset, customerAsset};

        // Create Work Orders
        WorkOrder depotWO = new WorkOrder(
                AssetId = depotAsset.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Internal Depot'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Depot Visit'
        );
        WorkOrder customerWO = new WorkOrder(
                AssetId = customerAsset.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Production Work'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Customer Visit'
        );
        insert new List<WorkOrder>{depotWO, customerWO};

        // Create TimeSheet entries
        DateTime startTime = DateTime.newInstance(2024, 12, 4, 8, 0, 0);
        List<TimeSheetEntry> entries = new List<TimeSheetEntry>{
                // First Depot Visit
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = depotWO.Id,
                        StartTime = startTime, EndTime = startTime.addMinutes(30),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = depotWO.Id,
                        StartTime = startTime.addMinutes(30), EndTime = startTime.addMinutes(60),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR'),
                // Second Depot Visit
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = depotWO.Id,
                        StartTime = startTime.addMinutes(60), EndTime = startTime.addMinutes(90),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = depotWO.Id,
                        StartTime = startTime.addMinutes(90), EndTime = startTime.addMinutes(120),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR'),
                // Travel to Customer (should be ignored)
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO.Id,
                        StartTime = startTime.addMinutes(120), EndTime = startTime.addMinutes(150),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                // Production Work
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO.Id,
                        StartTime = startTime.addMinutes(150), EndTime = startTime.addMinutes(210),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR')
        };
        insert entries;

        // Create Mileage entries - one for start of day, one for end
        List<Mileage_Entry__c> mileageEntries = new List<Mileage_Entry__c>{
                new Mileage_Entry__c(
                        Time_Sheet__c = ts.Id,
                        Work_Order__c = customerWO.Id, // Should link to first customer
                        Service_Resource__c = sr.Id,
                        Codes_ATAK_Limbus__c = 'KMAP',
                        Type__c = 'Starting',
                        Starting_Mileage__c = 6000,
                        Ending_Mileage__c = 6150
                ),
                new Mileage_Entry__c(
                        Time_Sheet__c = ts.Id,
                        Work_Order__c = customerWO.Id, // Should link to last customer
                        Service_Resource__c = sr.Id,
                        Codes_ATAK_Limbus__c = 'KMAP',
                        Type__c = 'Ending',
                        Starting_Mileage__c = 9000,
                        Ending_Mileage__c = 9050
                )
        };
        insert mileageEntries;

        Test.startTest();
        ATAKPerformanceWrapper wrapper = ATAKPerformanceService.prepareATAKPerformanceData(ts.Id);
        Test.stopTest();

        // Verify results - should only include production work and mileage
        System.assertEquals(3, wrapper.data.size(), 'Should have 3 entries (1 production work + 2 mileage entries)');

        // Verify entry types and projects
        Integer hrCount = 0;
        Integer kmCount = 0;
        String productionProject = 'G814573';

        for(ATAKPerformanceWrapper.Data data : wrapper.data) {
            if(data.quantity_registration_unit == 'HR') {
                hrCount++;
                System.assertEquals(productionProject, data.projectcode, 'Production work should be linked to customer project');
            }
            if(data.quantity_registration_unit == 'KMAP') {
                kmCount++;
                System.assertEquals(productionProject, data.projectcode, 'Mileage should be linked to customer project');
            }
        }

        System.assertEquals(1, hrCount, 'Should have 1 HR entry for production work');
        System.assertEquals(2, kmCount, 'Should have 2 KM entries');
    }

    /**
     * Tests full day of production work with correct filtering of first travel
     * Setup:
     * - All work orders are Production Work type
     * - 8 time entries:
     *   - First travel (should be filtered)
     *   - Customer work
     *   - Travel between customers
     *   - More customer work
     * - Plus mileage entries
     * Expected: 9 entries
     * - 3 RT (excluding first travel)
     * - 4 HR (all work time)
     * - 2 KM (mileage entries)
     */
    @IsTest
    static void testScenario2_AllProductionWithMileage() {
        TimeSheet ts = [SELECT Id FROM TimeSheet LIMIT 1];
        ServiceResource sr = [SELECT Id FROM ServiceResource LIMIT 1];

        // Create ATAK Projects
        ATAK_Project__c project1 = new ATAK_Project__c(
                SubProject_ATAK__c = 'G814568',
                Subproject_Name__c = 'Project 1'
        );
        ATAK_Project__c project2 = new ATAK_Project__c(
                SubProject_ATAK__c = 'G814573',
                Subproject_Name__c = 'Project 2'
        );
        insert new List<ATAK_Project__c>{project1, project2};

        // Create Assets
        Asset asset1 = new Asset(
                Name = 'Asset 1',
                ATAK_Project__c = project1.Id
        );
        Asset asset2 = new Asset(
                Name = 'Asset 2',
                ATAK_Project__c = project2.Id
        );
        insert new List<Asset>{asset1, asset2};

        // Create Work Orders - all production work
        WorkOrder wo1 = new WorkOrder(
                AssetId = asset1.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Production Work'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Visit 1'
        );
        WorkOrder wo2 = new WorkOrder(
                AssetId = asset2.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Production Work'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Visit 2'
        );
        insert new List<WorkOrder>{wo1, wo2};

        // Create TimeSheet entries - all production work
        DateTime startTime = DateTime.newInstance(2024, 12, 4, 8, 0, 0);
        List<TimeSheetEntry> entries = new List<TimeSheetEntry>{
                // First customer travel (should be ignored)
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = wo1.Id,
                        StartTime = startTime, EndTime = startTime.addMinutes(30),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                // First customer work
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = wo1.Id,
                        StartTime = startTime.addMinutes(30), EndTime = startTime.addMinutes(90),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR'),
                // Travel between customers
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = wo1.Id,
                        StartTime = startTime.addMinutes(90), EndTime = startTime.addMinutes(120),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = wo1.Id,
                        StartTime = startTime.addMinutes(120), EndTime = startTime.addMinutes(180),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR'),
                // Second customer
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = wo2.Id,
                        StartTime = startTime.addMinutes(180), EndTime = startTime.addMinutes(210),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = wo2.Id,
                        StartTime = startTime.addMinutes(210), EndTime = startTime.addMinutes(240),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR'),
                // Last customer travel and work
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = wo1.Id,
                        StartTime = startTime.addMinutes(240), EndTime = startTime.addMinutes(300),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = wo1.Id,
                        StartTime = startTime.addMinutes(300), EndTime = startTime.addMinutes(330),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR')
        };
        insert entries;

        // Create Mileage entries
        List<Mileage_Entry__c> mileageEntries = new List<Mileage_Entry__c>{
                new Mileage_Entry__c(
                        Time_Sheet__c = ts.Id,
                        Work_Order__c = wo1.Id,
                        Service_Resource__c = sr.Id,
                        Codes_ATAK_Limbus__c = 'KMAP',
                        Type__c = 'Starting',
                        Starting_Mileage__c = 6000,
                        Ending_Mileage__c = 6150
                ),
                new Mileage_Entry__c(
                        Time_Sheet__c = ts.Id,
                        Work_Order__c = wo1.Id,
                        Service_Resource__c = sr.Id,
                        Codes_ATAK_Limbus__c = 'KMAP',
                        Type__c = 'Ending',
                        Starting_Mileage__c = 9000,
                        Ending_Mileage__c = 9050
                )
        };
        insert mileageEntries;

        Test.startTest();
        ATAKPerformanceWrapper wrapper = ATAKPerformanceService.prepareATAKPerformanceData(ts.Id);
        Test.stopTest();

        // Debug output
        System.debug('Total entries: ' + wrapper.data.size());
        for(Integer i = 0; i < wrapper.data.size(); i++) {
            ATAKPerformanceWrapper.Data data = wrapper.data[i];
            System.debug('Entry ' + i + ': ' +
                    ' Type: ' + data.quantity_registration_unit +
                    ' Project: ' + data.projectcode +
                    ' Start: ' + data.start_timestamp +
                    ' End: ' + data.end_timestamp +
                    ' Quantity: ' + data.quantity);
        }
        // Verify results
        System.assertEquals(9, wrapper.data.size(), 'Should have 9 entries (7 time entries + 2 mileage entries)');

        // Verify first entry is not the initial travel time
        ATAKPerformanceWrapper.Data firstEntry = wrapper.data[0];
        System.assertNotEquals('RT', firstEntry.quantity_registration_unit, 'First entry should not be the initial travel time');

        // Count different types of entries
        Integer rtCount = 0;
        Integer hrCount = 0;
        Integer kmCount = 0;
        for(ATAKPerformanceWrapper.Data data : wrapper.data) {
            if(data.quantity_registration_unit == 'RT') rtCount++;
            if(data.quantity_registration_unit == 'HR') hrCount++;
            if(data.quantity_registration_unit == 'KMAP') kmCount++;

            if(data.quantity_registration_unit == 'KMAP') {
                // Verify mileage is assigned to correct project
                System.assertEquals('G814568', data.projectcode, 'Mileage should be assigned to first/last customer project');
            }
        }

        System.assertEquals(3, rtCount, 'Should have 3 RT entries (excluding first travel)');
        System.assertEquals(4, hrCount, 'Should have 4 HR entries');
        System.assertEquals(2, kmCount, 'Should have 2 KM entries');
    }

    /**
     * Tests most basic depot framing scenario without mileage
     * Setup:
     * - First entry is depot work
     * - Middle entries are production work
     * - Last entry is depot work
     * Expected: 3 entries
     * - Only the middle production work entries
     * - Depot work at start and end filtered out
     */
    @IsTest
    static void testScenario1_DepotFraming() {
        // Test scenario where first and last entries are depot visits
        TimeSheet ts = [SELECT Id FROM TimeSheet LIMIT 1];
        List<WorkOrder> workOrders = [SELECT Id FROM WorkOrder ORDER BY CreatedDate];

        // Create TimeSheet entries in sequence
        List<TimeSheetEntry> entries = new List<TimeSheetEntry>();
        DateTime startTime = DateTime.now().addHours(-8);

        for(Integer i = 0; i < workOrders.size(); i++) {
            entries.add(new TimeSheetEntry(
                    TimeSheetId = ts.Id,
                    WorkOrderId = workOrders[i].Id,
                    StartTime = startTime.addHours(i),
                    EndTime = startTime.addHours(i + 1),
                    Type = 'Work',
                    Code_ATAK_Limbus__c = 'HR'
                    ));
        }
        insert entries;

        Test.startTest();
        ATAKPerformanceWrapper wrapper = ATAKPerformanceService.prepareATAKPerformanceData(ts.Id);
        Test.stopTest();

        // Verify only production work entries are included
        System.assertEquals(3, wrapper.data.size(), 'Should only include middle three production entries');
        for(ATAKPerformanceWrapper.Data data : wrapper.data) {
            System.assertNotEquals('Internal Depot', data.remarks, 'Should not include depot work');
        }
    }


    /**
     * Tests simple all-production scenario
     * Setup:
     * - All work orders changed to Production Work type
     * - 5 entries with one RT code
     * Expected: 5 entries
     * - All entries included except first travel time
     * - No depot filtering needed
     */
    @IsTest
    static void testScenario2_AllProductionWork() {
        // Update all work orders to production type
        WorkType prodType = [SELECT Id FROM WorkType WHERE Name = 'Production Work'];
        List<WorkOrder> workOrders = [SELECT Id FROM WorkOrder];
        for (WorkOrder wo : workOrders) {
            wo.WorkTypeId = prodType.Id;
        }
        update workOrders;

        TimeSheet ts = [SELECT Id FROM TimeSheet LIMIT 1];

        // Create TimeSheet entries
        List<TimeSheetEntry> entries = new List<TimeSheetEntry>();
        DateTime startTime = DateTime.now().addHours(-8);

        for (Integer i = 0; i < workOrders.size(); i++) {
            entries.add(new TimeSheetEntry(
                    TimeSheetId = ts.Id,
                    WorkOrderId = workOrders[i].Id,
                    StartTime = startTime.addHours(i),
                    EndTime = startTime.addHours(i + 1),
                    Type = 'Work',
                    Code_ATAK_Limbus__c = i == 2 ? 'RT' : 'HR'
            ));
        }
        insert entries;

        Test.startTest();
        ATAKPerformanceWrapper wrapper = ATAKPerformanceService.prepareATAKPerformanceData(ts.Id);
        Test.stopTest();

        System.assertEquals(5, wrapper.data.size(), 'Should include all entries except first travel time and last travel time (covered by KM allowance)');
    }


    /**
     * Tests winter service allowance functionality
     * Setup:
     * - Work Order linked to 'Winter Maintenance' product
     * - Single TimeSheet entry with winter service flag
     * Expected: 2 entries
     * - Original HR entry
     * - Additional P-code entry for winter service
     */
    @IsTest
    static void testWinterServiceAllowance() {
        TimeSheet ts = [SELECT Id FROM TimeSheet LIMIT 1];

        // Create Product2 for Winter Maintenance
        Product2 winterProduct = new Product2(
                Name = 'Winter Maintenance',
                IsActive = true,
                RecordTypeId = [SELECT Id FROM RecordType WHERE SObjectType = 'Product2' AND Name = 'Material'].Id
        );
        insert winterProduct;

        // Create Asset linked to Winter Maintenance product
        Asset winterAsset = new Asset(
                Name = 'Winter Maintenance Asset',
                Product2Id = winterProduct.Id
        );
        insert winterAsset;

        // Create Work Order with Winter Asset
        WorkOrder wo = new WorkOrder(
                AssetId = winterAsset.Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Production Work' LIMIT 1].Id,
                Subject = 'Winter Maintenance Work'
        );
        insert wo;

        TimeSheetEntry entry = new TimeSheetEntry(
                TimeSheetId = ts.Id,
                WorkOrderId = wo.Id,
                StartTime = DateTime.now(),
                EndTime = DateTime.now().addHours(1),
                Type = 'Normal Hours',
                Code_ATAK_Limbus__c = 'HR',
                Starting_Allowance_Winter_Service__c = true
        );
        insert entry;

        Test.startTest();
        ATAKPerformanceWrapper wrapper = ATAKPerformanceService.prepareATAKPerformanceData(ts.Id);
        Test.stopTest();

        // Should create two entries - one for regular work and one for winter service
        System.assertEquals(2, wrapper.data.size(), 'Should create double entries for winter service');
        Boolean foundPCode = false;
        for(ATAKPerformanceWrapper.Data data : wrapper.data) {
            if(data.quantity_registration_unit == 'P') {
                foundPCode = true;
                break;
            }
        }
        System.assert(foundPCode, 'Should find entry with P code for winter service');
    }

    /**
     * Tests scenario with depot visit between customers
     * Setup:
     * - 8:00-8:30 Travel to Customer (filtered)
     * - 8:30-9:30 Production Work
     * - 9:30-10:00 Travel to Depot
     * - 10:00-10:30 Depot Work (included as mid-day)
     * - 10:30-11:00 Travel to Customer
     * - 11:00-12:00 Production Work
     * Expected: 7 entries
     * - 3 HR (2 production + 1 mid-day depot)
     * - 2 RT (between visits)
     * - 2 KM (mileage entries)
     */

    @IsTest
    static void testScenario4_MixedDayWithDepot() {
        TimeSheet ts = [SELECT Id FROM TimeSheet LIMIT 1];
        ServiceResource sr = [SELECT Id FROM ServiceResource LIMIT 1];

        // Create ATAK Projects
        ATAK_Project__c depotProject = new ATAK_Project__c(
                SubProject_ATAK__c = 'G814568',
                Subproject_Name__c = 'Depot Project'
        );
        ATAK_Project__c customerProject = new ATAK_Project__c(
                SubProject_ATAK__c = 'G814573',
                Subproject_Name__c = 'Customer Project'
        );
        insert new List<ATAK_Project__c>{depotProject, customerProject};

        // Create Assets
        Asset depotAsset = new Asset(
                Name = 'Depot Asset',
                ATAK_Project__c = depotProject.Id
        );
        Asset customerAsset = new Asset(
                Name = 'Customer Asset',
                ATAK_Project__c = customerProject.Id
        );
        insert new List<Asset>{depotAsset, customerAsset};

        // Create Work Orders
        WorkOrder depotWO = new WorkOrder(
                AssetId = depotAsset.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Internal Depot'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Depot Visit'
        );
        WorkOrder customerWO = new WorkOrder(
                AssetId = customerAsset.Id,
                WorkTypeId = [SELECT Id FROM WorkType WHERE Name = 'Production Work'].Id,
                StartDate = Date.today(),
                EndDate = Date.today(),
                Subject = 'Customer Visit'
        );
        insert new List<WorkOrder>{depotWO, customerWO};

        // Create TimeSheet entries
        DateTime startTime = DateTime.newInstance(2024, 12, 4, 8, 0, 0);
        List<TimeSheetEntry> entries = new List<TimeSheetEntry>{
                // First travel to customer (should be ignored)
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO.Id,
                        StartTime = startTime, EndTime = startTime.addMinutes(30),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                // First production work
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO.Id,
                        StartTime = startTime.addMinutes(30), EndTime = startTime.addMinutes(90),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR'),
                // Travel to depot
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = depotWO.Id,
                        StartTime = startTime.addMinutes(90), EndTime = startTime.addMinutes(120),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                // Depot work
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = depotWO.Id,
                        StartTime = startTime.addMinutes(120), EndTime = startTime.addMinutes(150),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR'),
                // Travel to next customer
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO.Id,
                        StartTime = startTime.addMinutes(150), EndTime = startTime.addMinutes(180),
                        Type = 'Travel Time', Code_ATAK_Limbus__c = 'RT'),
                // Second production work
                new TimeSheetEntry(TimeSheetId = ts.Id, WorkOrderId = customerWO.Id,
                        StartTime = startTime.addMinutes(180), EndTime = startTime.addMinutes(240),
                        Type = 'Normal Hours', Code_ATAK_Limbus__c = 'HR')
        };
        insert entries;

        // Create Mileage entries for the day
        List<Mileage_Entry__c> mileageEntries = new List<Mileage_Entry__c>{
                new Mileage_Entry__c(
                        Time_Sheet__c = ts.Id,
                        Work_Order__c = customerWO.Id,
                        Service_Resource__c = sr.Id,
                        Codes_ATAK_Limbus__c = 'KMAP',
                        Type__c = 'Starting',
                        Starting_Mileage__c = 6000,
                        Ending_Mileage__c = 6150
                ),
                new Mileage_Entry__c(
                        Time_Sheet__c = ts.Id,
                        Work_Order__c = customerWO.Id,
                        Service_Resource__c = sr.Id,
                        Codes_ATAK_Limbus__c = 'KMAP',
                        Type__c = 'Ending',
                        Starting_Mileage__c = 9000,
                        Ending_Mileage__c = 9050
                )
        };
        insert mileageEntries;

        Test.startTest();
        ATAKPerformanceWrapper wrapper = ATAKPerformanceService.prepareATAKPerformanceData(ts.Id);
        Test.stopTest();

        // Verify results
        // Verify results
        System.assertEquals(7, wrapper.data.size(), 'Should have 7 entries (3 HR including depot + 2 RT between visits + 2 KM) - excluding first travel');

// Count entry types
        Integer hrCount = 0;
        Integer rtCount = 0;
        Integer kmCount = 0;

        for(ATAKPerformanceWrapper.Data data : wrapper.data) {
            if(data.quantity_registration_unit == 'HR') hrCount++;
            if(data.quantity_registration_unit == 'RT') rtCount++;
            if(data.quantity_registration_unit == 'KMAP') kmCount++;
        }

        System.assertEquals(3, hrCount, 'Should have 3 HR entries (2 production + 1 mid-day depot)');
        System.assertEquals(2, rtCount, 'Should have 2 RT entries (between visits, excluding first travel)');
        System.assertEquals(2, kmCount, 'Should have 2 KM entries');

        // Verify entries are in correct order
        Boolean foundFirstWork = false;
        Boolean foundDepotTravel = false;
        Boolean foundSecondWork = false;

        for(ATAKPerformanceWrapper.Data data : wrapper.data) {
            if(data.quantity_registration_unit == 'HR') {
                if(!foundFirstWork) {
                    foundFirstWork = true;
                } else {
                    foundSecondWork = true;
                    System.assert(foundDepotTravel, 'Depot travel should come before second work entry');
                }
            }
            if(data.quantity_registration_unit == 'RT' && data.projectcode == 'G814568') {
                foundDepotTravel = true;
                System.assert(foundFirstWork, 'First work should come before depot travel');
            }
        }
    }

    /**
     * Tests mileage entry processing
     * Setup:
     * - One production TimeSheet entry
     * - One mileage entry with start/end readings
     * Expected: Mileage calculation
     * - Correct quantity (ending - starting)
     * - Correct code (KMAP)
     * - Linked to correct project
     */
    @IsTest
    static void testMileageEntries() {
        TimeSheet ts = [SELECT Id FROM TimeSheet LIMIT 1];
        WorkOrder wo = [SELECT Id FROM WorkOrder WHERE WorkType.Name = 'Production Work' LIMIT 1];
        ServiceResource sr = [SELECT Id FROM ServiceResource LIMIT 1];

        // We need to create a TimeSheetEntry first
        TimeSheetEntry entry = new TimeSheetEntry(
                TimeSheetId = ts.Id,
                WorkOrderId = wo.Id,
                StartTime = DateTime.now(),
                EndTime = DateTime.now().addHours(1),
                Type = 'Normal Hours',
                Code_ATAK_Limbus__c = 'HR'
        );
        insert entry;

        // Now create the Mileage Entry for the same Work Order
        Mileage_Entry__c mileage = new Mileage_Entry__c(
                Time_Sheet__c = ts.Id,
                Work_Order__c = wo.Id,  // Using same Work Order as TimeSheetEntry
                Service_Resource__c = sr.Id,
                Codes_ATAK_Limbus__c = 'KMAP',
                Type__c = 'Starting',
                Starting_Mileage__c = 100.0,
                Ending_Mileage__c = 150.5
        );
        insert mileage;

        Test.startTest();
        ATAKPerformanceWrapper wrapper = ATAKPerformanceService.prepareATAKPerformanceData(ts.Id);
        Test.stopTest();

        Boolean foundMileage = false;
        for(ATAKPerformanceWrapper.Data data : wrapper.data) {
            if(data.quantity_registration_unit == 'KMAP') {
                foundMileage = true;
                System.assertEquals('51', data.quantity, 'Mileage quantity should match');
                break;
            }
        }
        System.assert(foundMileage, 'Should find mileage entry');
    }


    /**
     * Tests material consumption tracking
     * Setup:
     * - One production time entry
     * - One material consumption record
     * Expected:
     * - Correct type (E for equipment)
     * - Correct unit (MU)
     * - Correct formatting (2 decimal places)
     */
    @IsTest
    static void testMaterialConsumption() {
        TimeSheet ts = [SELECT Id FROM TimeSheet LIMIT 1];
        WorkOrder wo = [SELECT Id FROM WorkOrder WHERE WorkType.Name = 'Production Work' LIMIT 1];
        ProductItem pi = [SELECT Id FROM ProductItem LIMIT 1];

        // First create a TimeSheetEntry
        TimeSheetEntry entry = new TimeSheetEntry(
                TimeSheetId = ts.Id,
                WorkOrderId = wo.Id,
                StartTime = DateTime.now(),
                EndTime = DateTime.now().addHours(1),
                Type = 'Normal Hours',
                Code_ATAK_Limbus__c = 'HR'
        );
        insert entry;

        // Then create the ProductConsumed record
        ProductConsumed material = new ProductConsumed(
                ProductItemId = pi.Id,
                WorkOrderId = wo.Id,
                QuantityConsumed = 10.0
        );
        insert material;

        //Debug some things
        ServiceCrew sc = [SELECT Id FROM ServiceCrew LIMIT 1];
        ServiceResource sr = [SELECT Id FROM ServiceResource LIMIT 1];
        ServiceCrewMember scm = [SELECT Id, IsLeader FROM ServiceCrewMember WHERE ServiceCrewId = :sc.Id LIMIT 1];


        System.debug('Service Crew: ' + sc);
        System.debug('Service Resource: ' + sr);
        System.debug('Service Crew Member: ' + scm);

        Test.startTest();
        ATAKPerformanceWrapper wrapper = ATAKPerformanceService.prepareATAKPerformanceData(ts.Id);
        Test.stopTest();

        Boolean foundMaterial = false;
        for(ATAKPerformanceWrapper.Data data : wrapper.data) {
            if(data.performance_resource_type == 'E') {
                foundMaterial = true;
                System.assertEquals('10.00', data.quantity, 'Material quantity should match');
                System.assertEquals('MU', data.quantity_registration_unit, 'Should use MU for materials');
                break;
            }
        }
    }

    @IsTest
    static void testCallOut() {
        SingleRequestMock mockToken = new SingleRequestMock(
                200,
                'OK',
                '{'+'"token": "12345"'+'}',
                null
        );

        Map<String, HttpCalloutMock> endpoint2TestResp = new Map<String,HttpCalloutMock>();
        endpoint2TestResp.put('callout:ATAK_Token', mockToken);
        endpoint2TestResp.put('callout:ATAK_Performance', mockToken);

        HttpCalloutMock multiCalloutMock = new MultiRequestMock(endpoint2TestResp);
        Test.setMock(HttpCalloutMock.class, multiCalloutMock);

        Test.startTest();

        ATAKPerformanceWrapper wrapper = new ATAKPerformanceWrapper();
        wrapper.data = new List<ATAKPerformanceWrapper.Data>();

        ATAKPerformanceWrapper.Data data = new ATAKPerformanceWrapper.Data();
        data.quantity_registration_unit = 'HR';
        data.projectcode = 'G814568';
        data.start_timestamp = '2024-12-04T08:00:00Z';

        wrapper.data.add(data);

        ATAKPerformanceService.sendATAKPerformanceData(wrapper);

        Test.stopTest();

    }
}