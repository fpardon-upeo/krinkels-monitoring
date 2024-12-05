@IsTest
private class ATAKPerformanceServiceTest {

    @TestSetup
    static void setupTestData() {
        Map<String, Object> baseData = FieldServiceTestData.createTimeSheetTestData();
        TimeSheet timeSheet = (TimeSheet)baseData.get('TimeSheet');
        ServiceResource resource = (ServiceResource)baseData.get('ServiceResource');
        User testUser = (User)baseData.get('User');

        // Add ATAK Code to User and update Service Resource's RelatedRecord
        testUser.ATAK_Code__c = 'USER001';
        update testUser;

        resource.RelatedRecord = testUser;
        update resource;

        // Create Work Types
        WorkType productionType = new WorkType(
                Name = 'Production Work',
                EstimatedDuration = 2.0
        );
        WorkType depotType = new WorkType(
                Name = 'Depot Visit',
                EstimatedDuration = 1.0
        );
        insert new List<WorkType>{productionType, depotType};

        // Create ATAK Projects
        ATAK_Project__c firstCustomerProject = new ATAK_Project__c(
                SubProject_ATAK__c = 'CUST001',
                Subproject_Name__c = 'Customer Project 1'
        );
        ATAK_Project__c depotProject = new ATAK_Project__c(
                SubProject_ATAK__c = 'DEPOT001',
                Subproject_Name__c = 'Depot Project'
        );
        ATAK_Project__c lastCustomerProject = new ATAK_Project__c(
                SubProject_ATAK__c = 'CUST002',
                Subproject_Name__c = 'Customer Project 2'
        );
        insert new List<ATAK_Project__c>{firstCustomerProject, depotProject, lastCustomerProject};

        // Create Assets
        Asset firstCustomerAsset = new Asset(
                Name = 'Customer Asset 1',
                ATAK_Project__c = firstCustomerProject.Id
        );
        Asset depotAsset = new Asset(
                Name = 'Depot Asset',
                ATAK_Project__c = depotProject.Id
        );
        Asset lastCustomerAsset = new Asset(
                Name = 'Customer Asset 2',
                ATAK_Project__c = lastCustomerProject.Id
        );
        insert new List<Asset>{firstCustomerAsset, depotAsset, lastCustomerAsset};

        DateTime baseTime = DateTime.now().addHours(-8);  // Start 8 hours ago

        // Create Work Orders for a full day scenario
        List<WorkOrder> workOrders = new List<WorkOrder>{
                // First travel (home to depot)
                new WorkOrder(
                        StartDate = Date.today(),
                        EndDate = Date.today(),
                        AssetId = depotAsset.Id,
                        WorkTypeId = depotType.Id,
                        Subject = 'Morning Depot Visit'
                ),
                // First customer visit
                new WorkOrder(
                        StartDate = Date.today(),
                        EndDate = Date.today(),
                        AssetId = firstCustomerAsset.Id,
                        WorkTypeId = productionType.Id,
                        Subject = 'First Customer Visit'
                ),
                // Middle customer visit
                new WorkOrder(
                        StartDate = Date.today(),
                        EndDate = Date.today(),
                        AssetId = lastCustomerAsset.Id,
                        WorkTypeId = productionType.Id,
                        Subject = 'Last Customer Visit'
                ),
                // Last depot visit
                new WorkOrder(
                        StartDate = Date.today(),
                        EndDate = Date.today(),
                        AssetId = depotAsset.Id,
                        WorkTypeId = depotType.Id,
                        Subject = 'Evening Depot Visit'
                )
        };
        insert workOrders;

        // Create TimeSheet Entries
        List<TimeSheetEntry> entries = new List<TimeSheetEntry>();
        Integer hourOffset = 0;
        for(WorkOrder wo : workOrders) {
            entries.add(new TimeSheetEntry(
                    TimeSheetId = timeSheet.Id,
                    StartTime = baseTime.addHours(hourOffset),
                    EndTime = baseTime.addHours(hourOffset + 2),
                    WorkOrderId = wo.Id,
                    Type = 'Work'
            ));
            hourOffset += 2;
        }
        insert entries;

        // Create Mileage Entries
        List<Mileage_Entry__c> mileages = new List<Mileage_Entry__c>();
        for(Integer i = 0; i < workOrders.size(); i++) {
            mileages.add(new Mileage_Entry__c(
                    Time_Sheet__c = timeSheet.Id,
                    Work_Order__c = workOrders[i].Id,
                    Codes_ATAK_Limbus__c = 'KMAP',
                    Service_Resource__c = resource.Id,
                    Type__c = i == 0 ? 'Starting' : 'Ending'
            ));
        }
    }

    @IsTest
    static void testHomeDepotCustomerScenario() {
        // Get the TimeSheet
        TimeSheet timeSheet = [SELECT Id FROM TimeSheet LIMIT 1];

        Test.startTest();
        ATAKPerformanceWrapper wrapper = ATAKPerformanceService.prepareATAKPerformanceData(timeSheet.Id);
        Test.stopTest();

        // Verify wrapper data
        System.assertNotEquals(null, wrapper, 'Wrapper should not be null');
        System.assertNotEquals(null, wrapper.data, 'Wrapper data should not be null');

        // Get entries related to depot visits
        List<ATAKPerformanceWrapper.Data> depotEntries = new List<ATAKPerformanceWrapper.Data>();
        for(ATAKPerformanceWrapper.Data entry : wrapper.data) {
            if(entry.projectcode == 'DEPOT001') {
                depotEntries.add(entry);
            }
        }

        // Verify depot entries only contain mileage records (KMAP)
        for(ATAKPerformanceWrapper.Data entry : depotEntries) {
            if(entry.performance_resource_type == 'P') {
                System.assertEquals('KMAP', entry.quantity_registration_unit,
                        'Depot entries should only have mileage registration');
            }
        }
    }
}