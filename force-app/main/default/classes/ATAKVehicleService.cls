/**
 * Created by fpardon on 12/11/2024.
 */

public with sharing class ATAKVehicleService {

    public static String createATAKVehicle(ATAKVehicleWrapper vehicle) {
        System.debug('ATAKVehicleService.createATAKVehicle');
        List<Product2> atakVehicles = new List<Product2>();
        List<ServiceCrew> atakServiceCrews = new List<ServiceCrew>();
        List<Schema.Location> atakVehLocs = new List<Schema.Location>();
        for(ATAKVehicleWrapper.Data vehicleData : vehicle.data) {
            Product2 atakVeh = createSingleATAKVehicle(vehicleData);
            ServiceCrew atakServiceCrew = createATAKServiceCrew(vehicleData);
            Schema.Location atakVehLoc = createSingleATAKVehicleLocation(vehicleData);
            atakVehicles.add(atakVeh);
            atakServiceCrews.add(atakServiceCrew);
            atakVehLocs.add(atakVehLoc);
        }

        List<String> returnList = new List<String>();
        returnList.add(upsertResults(atakVehicles, 'ATAK_Code__c'));
        returnList.add(upsertResults(atakServiceCrews, 'Driver_Code__c'));
        returnList.add(upsertResults(atakVehLocs, 'Code__c'));
        return JSON.serialize(returnList);
    }

    public static String upsertResults(List<SObject> records, String externalIdField){

        //Cast the externalIdField to a Field
        Schema.SObjectField externalIdFieldSchema = records.getSObjectType().getDescribe().fields.getMap().get(externalIdField);

        Database.UpsertResult[] results = Database.upsert(records, externalIdFieldSchema, false);
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
        //Get the 'Vehicle' RecordTypeId
        Id vehicleRecordTypeId = Schema.SObjectType.Product2.getRecordTypeInfosByName().get('Vehicle').getRecordTypeId();
        Product2 atakVeh = new Product2();
        atakVeh.ExternalId = vehicleData.code;
        atakVeh.Name = vehicleData.description;
        atakVeh.ProductCode = vehicleData.code;
        atakVeh.IsActive = true;
        atakVeh.Description = vehicleData.description;
        atakVeh.Family = 'Vehicle';
        atakVeh.ATAK_Code__c = vehicleData.code;
        atakVeh.Group_Code__c = vehicleData.group_code;
        atakVeh.Group_Description__c = vehicleData.group_description;
        atakVeh.Means_Category__c = vehicleData.means_categorie;
        atakVeh.Means_Code__c = vehicleData.means_code;
        atakVeh.Means_Description__c = vehicleData.means_description;
        atakVeh.Driver_Name__c = vehicleData.driver_name;
        atakVeh.Driver_Code__c = vehicleData.driver_code;
        atakVeh.Department_Code__c = vehicleData.department_code;
        atakVeh.Department_Name__c = vehicleData.department_name;
        atakVeh.Depot_Code__c = vehicleData.depot_code;
        atakVeh.Depot_Name__c = vehicleData.depot_name;
        atakVeh.Rate__c = vehicleData.rate;
        atakVeh.License_Plate__c = vehicleData.license_plate;
        atakVeh.Date_Use_End__c = vehicleData.date_use_end != null ? Date.valueOf(vehicleData.date_use_end) : null;
        atakVeh.Date_Out_of_Service__c = vehicleData.date_out_of_service != null ? Date.valueOf(vehicleData.date_out_of_service) : null;
        atakVeh.RecordTypeId = vehicleRecordTypeId;
        return atakVeh;
    }

    public static ServiceCrew createATAKServiceCrew(ATAKVehicleWrapper.Data vehicle) {
        System.debug('ATAKVehicleService.createATAKServiceCrew');
        ServiceCrew atakServiceCrew = new ServiceCrew();
        atakServiceCrew.Name = vehicle.driver_name;
        atakServiceCrew.Driver_Code__c = vehicle.driver_code;
        atakServiceCrew.CrewSize = 1;
        return atakServiceCrew;
    }

    public static Schema.Location createSingleATAKVehicleLocation(ATAKVehicleWrapper.Data vehicleData) {
        System.debug('ATAKVehicleService.createSingleATAKVehicleLocation');
        Schema.Location atakVehLoc = new Schema.Location();
        String locationName = vehicleData.driver_name + ' - ' + vehicleData.license_plate;
        atakVehLoc.Name = locationName;
        atakVehLoc.License_Plate__c = vehicleData.license_plate;
        atakVehLoc.Code__c = vehicleData.code;
        atakVehLoc.IsInventoryLocation = true;
        atakVehLoc.IsMobile = true;
        atakVehLoc.LocationType = 'Van';
        atakVehLoc.Van_Crew__r = new ServiceCrew(Driver_Code__c = vehicleData.driver_code);
        return atakVehLoc;
    }



}