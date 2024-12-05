/**
 * Created by Frederik on 12/2/2024.
 */

import { api, LightningElement, track } from "lwc";
import checkIn from '@salesforce/apex/CheckInService.checkIn';
import { getLocationService } from "lightning/mobileCapabilities";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import { CloseActionScreenEvent } from 'lightning/actions';
import LOADING_MESSAGE from '@salesforce/label/c.Checkin_Loading';

export default class CheckIn extends  NavigationMixin(LightningElement) {

  _recordId;
  @track latitude;
  @track longitude;
  requestInProgress = false;
  myLocationService;
  currentLocation;

  labels = {
    loadingMessage: LOADING_MESSAGE
  }

  @api
  get recordId() {
    return this._recordId;
  }

  set recordId(recordId) {
    if (recordId !== this._recordId) {
      this._recordId = recordId;
    }
  }

  @api async invoke () {
    console.log('invoke');
    this.myLocationService = getLocationService();
    await this.getLocation();
  }

  connectedCallback() {
    console.log('connectedCallback');
    this.myLocationService = getLocationService();
    this.getLocation();
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
    if (this.myLocationService != null && this.myLocationService.isAvailable()) {
      const locationOptions = {
        enableHighAccuracy: true
      };

      this.requestInProgress = true;

      try {
        const result = await this.myLocationService.getCurrentPosition(locationOptions);
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
      throw new Error("LocationService Is Not Available");
    }
  }

  closeQuickAction() {
    this.dispatchEvent(new CloseActionScreenEvent());
  }

}