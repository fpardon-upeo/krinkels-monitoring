import { LightningElement, wire, track, api } from 'lwc';
import getTimesheetEntries from '@salesforce/apex/LocationMonitorController.getTimesheetEntries';
import DASHBOARD_TITLE from '@salesforce/label/c.LocationMonitor_DashboardTitle';
import THRESHOLD_SLIDER_LABEL from '@salesforce/label/c.LocationMonitor_ThresholdSliderLabel';
import EXCEEDS_THRESHOLD from '@salesforce/label/c.LocationMonitor_ExceedsThreshold';
import NO_CHECKIN_LOCATION from '@salesforce/label/c.LocationMonitor_NoCheckinLocation';
import NO_WORK_ORDER_LOCATION from '@salesforce/label/c.LocationMonitor_NoWorkOrderLocation';
import NO_LOCATIONS from '@salesforce/label/c.LocationMonitor_NoLocations';
import WITHIN_THRESHOLD from '@salesforce/label/c.LocationMonitor_WithinThreshold';

export default class LocationMonitor extends LightningElement {

  labels = {
    dashboardTitle: DASHBOARD_TITLE,
    thresholdSliderLabel: THRESHOLD_SLIDER_LABEL,
    exceedsThreshold: EXCEEDS_THRESHOLD,
    noCheckinLocation: NO_CHECKIN_LOCATION,
    noWorkOrderLocation: NO_WORK_ORDER_LOCATION,
    noLocations: NO_LOCATIONS,
    withinThreshold: WITHIN_THRESHOLD
  };

  @track thresholdValue = 2.5;
  @track workOrders = [];
  @api recordId;

  @wire(getTimesheetEntries, { recordId: '$recordId' })
  wiredEntries({ error, data }) {
    if (data) {
      const workOrderMap = new Map();

      data.forEach(entry => {
        if (!workOrderMap.has(entry.workOrderNumber)) {
          const locationStatus = this.getLocationStatus(entry);
          const exceedsThreshold = locationStatus === 'VALID' && entry.deltaKm > this.thresholdValue;
          const withinThreshold = locationStatus === 'VALID' && entry.deltaKm <= this.thresholdValue;

          workOrderMap.set(entry.workOrderNumber, {
            ...entry,
            locationStatus,
            exceedsThreshold,
            withinThreshold,  // Add this property
            cardContentClass: this.getCardClass(locationStatus, entry.deltaKm, this.thresholdValue),
            locationInfoClass: this.getLocationInfoClass(locationStatus),
            locationIcon: this.getLocationIcon(locationStatus),
            statusMessage: this.getStatusMessage(locationStatus, entry.deltaKm)
          });
        }
      });

      this.workOrders = Array.from(workOrderMap.values());
    } else if (error) {
      console.error('Error fetching entries:', error);
    }
  }

  getLocationStatus(entry) {
    const hasWorkOrderLocation = entry.workOrderLatitude != null && entry.workOrderLongitude != null
      && entry.workOrderLatitude !== 0 && entry.workOrderLongitude !== 0;
    const hasCheckinLocation = entry.checkinLatitude != null && entry.checkinLongitude != null;

    if (!hasWorkOrderLocation && !hasCheckinLocation) return 'NO_LOCATIONS';
    if (!hasWorkOrderLocation) return 'NO_WORK_ORDER_LOCATION';
    if (!hasCheckinLocation) return 'NO_CHECKIN_LOCATION';
    return 'VALID';
  }

  getCardClass(status, deltaKm, threshold) {
    if (status !== 'VALID') return 'card-content warning';
    return deltaKm > threshold ? 'card-content alert' : 'card-content';
  }

  getLocationInfoClass(status) {
    return status === 'VALID' ? 'location-info' : 'location-warning';
  }

  getLocationIcon(status) {
    switch (status) {
      case 'NO_CHECKIN_LOCATION':
        return 'utility:offline';
      case 'NO_WORK_ORDER_LOCATION':
        return 'utility:maintenance';
      case 'NO_LOCATIONS':
        return 'utility:error';
      default:
        return 'utility:location';
    }
  }

  getStatusMessage(status, deltaKm) {
    switch (status) {
      case 'NO_CHECKIN_LOCATION':
        return NO_CHECKIN_LOCATION;
      case 'NO_WORK_ORDER_LOCATION':
        return NO_WORK_ORDER_LOCATION;
      case 'NO_LOCATIONS':
        return NO_LOCATIONS;
      case 'VALID':
        return `${deltaKm.toFixed(2)} km`;
    }
  }

  handleThresholdChange(event) {
    this.thresholdValue = event.detail.value;
    if (this.workOrders) {
      this.workOrders = this.workOrders.map(wo => ({
        ...wo,
        exceedsThreshold: wo.locationStatus === 'VALID' && wo.deltaKm > this.thresholdValue,
        withinThreshold: wo.locationStatus === 'VALID' && wo.deltaKm <= this.thresholdValue,
        cardContentClass: this.getCardClass(wo.locationStatus, wo.deltaKm, this.thresholdValue)
      }));
    }
  }
}