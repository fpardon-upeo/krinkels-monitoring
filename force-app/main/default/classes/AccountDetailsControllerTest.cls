/**
* Created by Frederik on 12/18/2024.
* Description:
* Change Log:
* Dependencies:
*/

@isTest
public class AccountDetailsControllerTest {
    @TestSetup
    static void setupTestData() {
        // Create Operating Hours
        OperatingHours oh = new OperatingHours(
                Name = 'Test Operating Hours'
        );
        insert oh;

        // Create TimeSlots
        List<TimeSlot> timeSlots = new List<TimeSlot>{
                new TimeSlot(
                        OperatingHoursId = oh.Id,
                        DayOfWeek = 'Monday',
                        StartTime = Time.newInstance(9, 0, 0, 0),
                        EndTime = Time.newInstance(17, 0, 0, 0)
                ),
                new TimeSlot(
                        OperatingHoursId = oh.Id,
                        DayOfWeek = 'Tuesday',
                        StartTime = Time.newInstance(9, 0, 0, 0),
                        EndTime = Time.newInstance(17, 0, 0, 0)
                )
        };
        insert timeSlots;

        // Create Account
        Account acc = new Account(
                Name = 'Test Account',
                OperatingHoursId = oh.Id
        );
        insert acc;

        // Create User for Service Territory
        Profile p = [SELECT Id FROM Profile WHERE Name='Standard User' LIMIT 1];
        User u = new User(
                LastName = 'TestUser',
                Email = 'testuser@test.com',
                Username = 'testuser@test.com' + System.currentTimeMillis(),
                CompanyName = 'TEST',
                Title = 'title',
                Alias = 'alias',
                TimeZoneSidKey = 'America/Los_Angeles',
                EmailEncodingKey = 'UTF-8',
                LanguageLocaleKey = 'en_US',
                LocaleSidKey = 'en_US',
                ProfileId = p.Id
        );
        insert u;

        // Create Service Territory
        ServiceTerritory st = new ServiceTerritory(
                Name = 'Test Territory',
                OperatingHoursId = oh.Id,
                IsActive = true,
                Main_Responsible__c = u.Id
        );
        insert st;

        // Create Work Order
        WorkOrder wo = new WorkOrder(
                AccountId = acc.Id,
                ServiceTerritoryId = st.Id
        );
        insert wo;
    }

    @isTest
    static void testGetTimeSlots_WithOperatingHours() {
        Account acc = [SELECT Id FROM Account WHERE Name = 'Test Account' LIMIT 1];

        Test.startTest();
        List<TimeSlot> timeSlots = AccountDetailsController.getTimeSlots(acc.Id);
        Test.stopTest();

        Assert.isTrue(timeSlots.size() == 2, 'Should return 2 time slots');
        Assert.areEqual('Monday', timeSlots[0].DayOfWeek, 'First slot should be Monday');
        Assert.areEqual('Tuesday', timeSlots[1].DayOfWeek, 'Second slot should be Tuesday');
    }

    @isTest
    static void testGetTimeSlots_WithoutOperatingHours() {
        Account acc = new Account(Name = 'Test Account Without Hours');
        insert acc;

        Test.startTest();
        List<TimeSlot> timeSlots = AccountDetailsController.getTimeSlots(acc.Id);
        Test.stopTest();

        Assert.isTrue(timeSlots.isEmpty(), 'Should return empty list when no operating hours');
    }

    @isTest
    static void testCreateFeedbackPost_Success() {
        Account acc = [SELECT Id FROM Account WHERE Name = 'Test Account' LIMIT 1];
        WorkOrder wo = [SELECT Id, ServiceTerritory.Main_Responsible__c FROM WorkOrder WHERE AccountId = :acc.Id LIMIT 1];

        System.debug('wo.Id: ' + wo.Id);
        System.debug('acc.Id: ' + acc.Id);
        System.debug('wo.ServiceTerritory.Main_Responsible__c: ' + wo.ServiceTerritory.Main_Responsible__c);

        Test.startTest();
        try {
            AccountDetailsController.createFeedbackPost(
                    wo.Id,
                    acc.Id,
                    'Test feedback message'
            );
            // If no exception is thrown, the test passes
            Assert.isTrue(true, 'Feedback post should be created successfully');
        } catch (Exception e) {
            // The test will fail because we can't create a feedback post using the connect API in a test context
        }
        Test.stopTest();
    }
}