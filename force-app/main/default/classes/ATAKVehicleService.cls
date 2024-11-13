/**
 * Created by fpardon on 12/11/2024.
 */

public with sharing class ATAKVehicleService {

    public static String createATAKVehicle(ATAKVehicleWrapper vehicle) {
        System.debug('ATAKVehicleService.createATAKVehicle');
        List<Product2> atakVehicle = new List<Product2>();
        for(ATAKVehicleWrapper.Data vehicleData : vehicle.data) {
            Product2 atakVeh = createSingleATAKVehicle(vehicleData);
            atakVehicle.add(atakVeh);
        }

        Database.UpsertResult[] results = Database.upsert(atakVehicle, Product2.Fields.ATAK_Code__c, false);
        Integer successCount = 0;
        Integer errorCount = 0;
        for(Database.UpsertResult result : results) {
            if(!result.isSuccess()) {
                for(Database.Error error : result.getErrors()) {
                    System.debug('Error: ' + error.getMessage());
                    errorCount++;
                }
            } else {
                successCount++;
            }
        }

        return 'Success: ' + successCount + ' Error: ' + errorCount + ' Total: ' + results.size() + ' processed.';

    }

    public static Product2 createSingleATAKVehicle(ATAKVehicleWrapper.Data vehicleData) {
        System.debug('ATAKVehicleService.createATAKVehicle');
        System.debug('vehicleData: ' + vehicleData.code);
        Product2 atakVeh = new Product2();
        atakVeh.ExternalId = vehicleData.code;
        atakVeh.Name = vehicleData.description;
        atakVeh.ProductCode = vehicleData.code;
        atakVeh.IsActive = true;
        atakVeh.Description = vehicleData.description;
        atakVeh.Family = 'Vehicle';
        return atakVeh;
    }

}