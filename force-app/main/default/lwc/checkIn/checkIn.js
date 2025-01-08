/**
 * Created by Frederik on 12/2/2024.
 */

import { api, LightningElement, track } from "lwc";
import checkIn from "@salesforce/apex/CheckInService.checkIn";
import { getLocationService } from "lightning/mobileCapabilities";
import { updateRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { NavigationMixin } from "lightning/navigation";
import { CloseActionScreenEvent } from "lightning/actions";
import LOADING_MESSAGE from "@salesforce/label/c.Checkin_Loading";
import Checkin_locationError from "@salesforce/label/c.Checkin_locationError";

export default class CheckIn extends NavigationMixin(LightningElement) {
  _recordId;
  @track latitude;
  @track longitude;
  requestInProgress = false;
  myLocationService;
  currentLocation;

  labels = {
    loadingMessage: LOADING_MESSAGE,
    locationError: Checkin_locationError
  };

  @api
  get recordId() {
    return this._recordId;
  }

  set recordId(recordId) {
    if (recordId !== this._recordId) {
      this._recordId = recordId;
    }
  }

  @api async invoke() {
    console.log("invoke");
    this.myLocationService = getLocationService();
    await this.getLocation();
  }

  connectedCallback() {
    console.log("connectedCallback");
    this.updateWorkStepToCompleted();
    this.myLocationService = getLocationService();
    this.getLocation();
  }

  updateWorkStepToCompleted() {
    const fields = {};
    fields["Status"] = "Completed";
    fields["Id"] = this.recordId;
    const recordInput = { fields };
    updateRecord(recordInput)
      .then(() => {
        console.log("Record updated");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  showToast(title, message, variant) {
    const event = new ShowToastEvent({
      title: title,
      message: message,
      variant: variant
    });
    this.dispatchEvent(event);
  }

  async getLocation() {
    if (
      this.myLocationService != null &&
      this.myLocationService.isAvailable()
    ) {
      const locationOptions = {
        enableHighAccuracy: true
      };

      this.requestInProgress = true;

      try {
        const result =
          await this.myLocationService.getCurrentPosition(locationOptions);
        this.currentLocation = result;
        this.latitude = result.coords.latitude.toFixed(6);
        this.longitude = result.coords.longitude.toFixed(6);

        await checkIn({
          recordId: this.recordId,
          latitude: this.latitude,
          longitude: this.longitude
        });

        // Try multiple close methods
        this.closeQuickAction();
      } catch (error) {
        console.error(error);
        throw error;
      }
    } else {
      throw new Error(this.labels.locationError);
    }
  }

  closeQuickAction() {
    this.dispatchEvent(new CloseActionScreenEvent());
  }
}