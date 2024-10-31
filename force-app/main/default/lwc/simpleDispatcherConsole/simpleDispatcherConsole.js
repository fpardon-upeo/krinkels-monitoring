/**
 * Created by Frederik on 10/30/2024.
 */

import { LightningElement, track, api } from "lwc";
import getServiceTerritories from "@salesforce/apex/SchedulingController.getServiceTerritories";
import getServiceResources from "@salesforce/apex/SchedulingController.getServiceResources";
import userId from "@salesforce/user/Id";

export default class SimpleDispatcherConsole extends LightningElement {

  @track territoryOptions = [];
  @track resourceOptions = [];
  @track selectedTerritory;
  @track selectedResource;
  _draggedAssetId;
  _draggedAssetDetails;

  get draggedAssetDetails() {
    return this._draggedAssetDetails;
  }
  @api
  set draggedAssetDetails(value) {
    this._draggedAssetDetails = value;
    console.log('SimpleDispatcherConsole received draggedAssetDetails:', value);
  }

  @api
  set draggedAssetId(value) {
    console.log('SimpleDispatcherConsole received draggedAssetId:', value);
    this._draggedAssetId = value;
    // If you need to pass it to resource calendar, you might want to refresh something here
  }

  get draggedAssetId() {
    return this._draggedAssetId;
  }
  connectedCallback() {
    this.getTerritories()
  }

  getTerritories() {
    getServiceTerritories()
      .then((result) => {
        let territoryOptions = [];
        result.forEach((territory) => {
          territoryOptions.push({
            label: territory.Name,
            value: territory.Id
          });
          this.territoryOptions = territoryOptions;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getResources() {
    getServiceResources({ territoryId: this.selectedTerritory })
      .then((result) => {
        //Parse the ResourceType
        //This indicates whether the resource is:
        // a Technician (T),
        // Dispatcher (D),
        // Crew (C),
        // Asset (S),
        // Agent (A),
        // Planner (P).
        let resources = [];
        result.forEach((resource) => {
          resources.push({
            label: resource.Name,
            value: resource.Id,
          })
        });
        this.resourceOptions = resources;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleTerritoryChange(event) {
    console.log(event.detail.value);
    this.selectedTerritory = event.detail.value;
    this.getResources();
  }

  handleResourceChange(event) {
    console.log(event.detail.value);
    this.selectedResource = event.detail.value;
  }


}