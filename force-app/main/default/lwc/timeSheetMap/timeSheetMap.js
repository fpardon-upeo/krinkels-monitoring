/**
 * Created by Frederik on 12/2/2024.
 */

import { LightningElement, api } from "lwc";
import getCoordinates from "@salesforce/apex/TimeSheetMapController.getCoordinates";

export default class TimeSheetMap extends LightningElement {

  @api recordId;
  locations = [];
  mapMarkers = [];
  showMap = false;

  connectedCallback() {
    getCoordinates({ timeSheetId: this.recordId })
      .then(result => {
        console.log("result", result);
        this.locations = result;
        result.forEach(location => {
          if(location.latitude && location.longitude) {
            this.mapMarkers.push({
              location: {
                Latitude: location.latitude,
                Longitude: location.longitude
              },
              title: new Date(location.timeStamp).toLocaleDateString('nl-BE', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              }) + ' - ' + new Date(location.timeStamp).toLocaleTimeString('nl-BE', {
                hour: '2-digit',
                minute: '2-digit'
              })
            });
          }
        });
        this.showMap = true;
      })
      .catch(error => {
        console.error("error", error);
      });
  }

}