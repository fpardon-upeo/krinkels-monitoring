/**
* Created by Frederik on 12/4/2024.
* Description: Handler class for Account trigger operations, creates Operating Hours and Time Slots for Operational Customer accounts
* Change Log: Added record type filter for Operational Customer accounts, updated day names, added Account-OperatingHours association, fixed time slot creation
* Dependencies:
*/

public without sharing class AccountTriggerHandler {

    private static Map<Integer, String> dayMap = new Map<Integer, String>{
            1 => 'Monday',
            2 => 'Tuesday',
            3 => 'Wednesday',
            4 => 'Thursday',
            5 => 'Friday',
            6 => 'Saturday',
            7 => 'Sunday'
    };

    public static void createOperatingHoursAndSlots(List<Account> newAccounts) {
        // Get the Record Type Id for 'Operational Customer'
        Id operationalCustomerRTId = Schema.SObjectType.Account.getRecordTypeInfosByDeveloperName()
                .get('Operational_Account')
                .getRecordTypeId();

        // Filter accounts to only process Operational Customers
        List<Account> operationalAccounts = new List<Account>();
        for(Account acc : newAccounts) {
            if(acc.RecordTypeId == operationalCustomerRTId) {
                operationalAccounts.add(acc);
            }
        }

        // If no operational accounts, exit early
        if(operationalAccounts.isEmpty()) {
            return;
        }

        // Map to store Account Id to Operating Hours relationship
        Map<Id, OperatingHours> accountToOHMap = new Map<Id, OperatingHours>();

        //First create the OperatingHours
        List<OperatingHours> operatingHoursToInsert = new List<OperatingHours>();
        for(Account acc : operationalAccounts) {
            OperatingHours oh = new OperatingHours();
            oh.Name = acc.Name + ' Operating Hours';
            oh.TimeZone = 'Europe/Paris';
            operatingHoursToInsert.add(oh);
            accountToOHMap.put(acc.Id, oh);
        }

        System.debug('creating ' + operatingHoursToInsert.size() + ' OperatingHours');
        insert operatingHoursToInsert;

        // Update Accounts with Operating Hours Id
        List<Account> accountsToUpdate = new List<Account>();
        for(Account acc : operationalAccounts) {
            Account accUpdate = new Account(
                    Id = acc.Id,
                    OperatingHoursId = accountToOHMap.get(acc.Id).Id
            );
            accountsToUpdate.add(accUpdate);
        }
        update accountsToUpdate;

        List<TimeSlot> slotsToInsert = new List<TimeSlot>();

        // Create time slots for each day from 8:00 to 19:00
        for(OperatingHours oh : operatingHoursToInsert) {
            for(Integer dayNumber = 1; dayNumber <= 7; dayNumber++) {
                // Create 11 slots per day (8:00-9:00, 9:00-10:00, ..., 18:00-19:00)
                TimeSlot slot = new TimeSlot();
                slot.OperatingHoursId = oh.Id;
                slot.DayOfWeek = dayMap.get(dayNumber);
                slot.StartTime = Time.newInstance(0, 0, 0, 0);
                slot.EndTime = Time.newInstance(0, 0, 0, 0);
                slotsToInsert.add(slot);
            }
        }

        System.debug('creating ' + slotsToInsert.size() + ' TimeSlots');
        insert slotsToInsert;
    }
}