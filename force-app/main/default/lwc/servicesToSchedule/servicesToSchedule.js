import { LightningElement, track } from "lwc";
import getUnscheduledAssets from "@salesforce/apex/SchedulingController.getUnscheduledAssets";
import userId from "@salesforce/user/Id";

export default class ServicesToSchedule extends LightningElement {
  @track assetsToSchedule = [];
  error;
  userId = userId;

  connectedCallback() {
    this.getUnscheduledAssets();
  }

  getUnscheduledAssets() {
    getUnscheduledAssets()
      .then((result) => {
        console.log(JSON.stringify(result));
        this.processAssetMap(result);
        this.error = undefined;
      })
      .catch((error) => {
        this.error = error;
        this.assetsToSchedule = [];
      });
  }

  processAssetMap(assetMap) {
    this.assetsToSchedule = [];
    // In Salesforce, the Map comes as an Object where keys are Asset Ids
    Object.keys(assetMap).forEach(assetId => {
      const serviceAppointments = assetMap[assetId];
      if (serviceAppointments && serviceAppointments.length > 0) {
        if(!serviceAppointments[0].Asset__r.Recurrence_Pattern__c) {
          serviceAppointments[0].Asset__r.Recurrence_Text__c = "One-time";
        } else {
          serviceAppointments[0].Asset__r.Recurrence_Text__c = this.getPatternText(serviceAppointments[0].Asset__r.Recurrence_Pattern__c);
        }
        this.assetsToSchedule.push({
          assetId: assetId,
          asset: serviceAppointments[0].Asset__r,
          services: serviceAppointments.length,
          latitude: serviceAppointments[0].FSL__InternalSLRGeolocation__Latitude__s,
          longitude: serviceAppointments[0].FSL__InternalSLRGeolocation__Longitude__s,
          appointments: serviceAppointments
        });
      }
    });
  }

  handleDragStart(event) {
    const assetId = event.target.dataset.id;
    console.log('Drag Start:', assetId);
    event.dataTransfer.setData('text/plain', assetId);

    //Get the dragged asset from the list
    const draggedAsset = this.assetsToSchedule.find(asset => asset.assetId === assetId);
    console.log('Dragged Asset:', draggedAsset);

    // Dispatch custom event to parent
    const dragEvent = new CustomEvent('dragdatachange', {
      detail: {
        assetId: assetId,
        assetDetails: draggedAsset
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(dragEvent);
  }

  handleDragEnd() {
    // Clear the dragged data
    this.dispatchEvent(new CustomEvent('dragdatachange', {
      detail: { assetId: null },
      bubbles: true,
      composed: true
    }));
  }
  getPatternText(rrule) {
    console.log(rrule);
    let patternText = "";
    const parts = rrule.split(";");
    let frequency = "";

    // First pass to get FREQ as it's needed for interval text
    for (const part of parts) {
      const [key, value] = part.split("=");
      if (key === "FREQ") {
        frequency = value.toLowerCase();
        break;
      }
    }

    // Second pass for all parts
    for (const part of parts) {
      const [key, value] = part.split("=");

      switch (key.toUpperCase()) {
        case "FREQ":
          patternText += this.getFrequencyText(value.toLowerCase());
          break;
        case "INTERVAL":
          patternText += ` Every ${value} ${this.getPeriodText(frequency)}`;
          break;
        case "BYSETPOS":
          patternText += ` on the ${this.getOrdinal(value)}`;
          break;
        case "BYDAY":
          patternText += ` on ${this.getDayText(value)}`;
          break;
        case "COUNT":
          patternText += ` for ${value} occurrence(s)`;
          break;
        case "BYMONTHDAY":
          patternText += ` on the ${this.getOrdinal(value)} day of the month`;
          break;
        case "WKST":
          patternText += ` ${this.getDayText(value.toLowerCase())}`;
          break;
        case "UNTIL":
          patternText += ` until ${this.formatDate(value)}`;
          break;
        default:
          break;
      }
    }

    return patternText.trim();
  }

  getFrequencyText(freq) {
    switch (freq) {
      case "daily":
        return "Daily";
      case "weekly":
        return "Weekly";
      case "monthly":
        return "Monthly";
      case "yearly":
        return "Yearly";
      default:
        return "";
    }
  }

  getPeriodText(period) {
    switch (period) {
      case "daily":
        return "day(s)";
      case "weekly":
        return "week(s)";
      case "monthly":
        return "month(s)";
      case "yearly":
        return "year(s)";
      default:
        return "";
    }
  }

  getDayText(dayValue) {
    const days = dayValue.split(",");
    const dayNames = days.map((day) => {
      switch (day.toUpperCase()) {
        case "SU":
          return "Sunday";
        case "MO":
          return "Monday";
        case "TU":
          return "Tuesday";
        case "WE":
          return "Wednesday";
        case "TH":
          return "Thursday";
        case "FR":
          return "Friday";
        case "SA":
          return "Saturday";
        default:
          return "";
      }
    });
    return dayNames.join(", ");
  }

  getOrdinal(day) {
    const suffixes = ["th", "st", "nd", "rd"];
    const value = parseInt(day);
    const suffix =
      suffixes[
        (value >= 4 && value <= 20) ||
        [23, 24, 25, 26, 27, 28, 29].includes(value % 100)
          ? 0
          : value % 10
        ] || suffixes[0];
    return `${value}${suffix}`;
  }

  formatDate(dateString) {
    // RRULE UNTIL dates are typically in format YYYYMMDD or YYYYMMDDTHHMMSSZ
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);

    // Create a date object and format it
    const date = new Date(year, parseInt(month) - 1, day);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }

}