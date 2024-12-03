/**
* Created by Frederik on 12/2/2024.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class TimeSheetMapController {

    public class coordinate {
        @AuraEnabled public Decimal latitude;
        @AuraEnabled public Decimal longitude;
        @AuraEnabled public Datetime timeStamp;
        public coordinate(Decimal latitude, Decimal longitude, Datetime timeStamp) {
            this.latitude = latitude;
            this.longitude = longitude;
            this.timeStamp = timeStamp;
        }
    }

    @AuraEnabled
    public static List<coordinate> getCoordinates(String timeSheetId) {
        List<coordinate> coordinates = new List<coordinate>();
        TimeSheet timeSheet = [SELECT Id, StartDate, ServiceResourceId FROM TimeSheet WHERE Id = :timeSheetId];
        List<ServiceResourceHistory> serviceResourceHistories = [SELECT Id, Field, NewValue, CreatedDate FROM ServiceResourceHistory WHERE (Field = 'LastKnownLongitude' OR Field = 'LastKnownLatitude') AND ServiceResourceId = :timeSheet.ServiceResourceId AND CreatedDate >= :timeSheet.StartDate ORDER BY CreatedDate ASC];
        //We get Last Known Longitude and Last Known Latitude as values in the Field field of the ServiceResourceHistory object
        //These are separate entries in the Field field, so we need to iterate through the list to find them
        Decimal lastKnownLatitude = null;
        Decimal lastKnownLongitude = null;
        for(ServiceResourceHistory srh : serviceResourceHistories) {
            System.debug('Field: ' + srh.Field + ' NewValue: ' + srh.NewValue);
            if(srh.Field == 'LastKnownLatitude') {
                lastKnownLatitude = Decimal.valueOf((Double) srh.NewValue);
            } else if(srh.Field == 'LastKnownLongitude') {
                lastKnownLongitude = Decimal.valueOf((Double) srh.NewValue);
            }
            if(lastKnownLatitude != null && lastKnownLongitude != null) {
                coordinates.add(new coordinate(lastKnownLatitude, lastKnownLongitude, srh.CreatedDate));
                lastKnownLatitude = null;
                lastKnownLongitude = null;
            }
        }

        return coordinates;
    }
}