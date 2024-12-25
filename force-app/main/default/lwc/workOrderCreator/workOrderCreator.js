import { LightningElement, api } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import getServiceAppointments from "@salesforce/apex/SFS_WorkOrderCreatorController.getServiceAppointments";

export default class WorkOrderCreator extends LightningElement {
  showTypeSelection = true;
  selectedType = null;
  title = "";
  message = "";
  variant = "";
  iconName = "";
  showWarning = false;

  @api
  get recordIds() {
    return this._recordIds || [];
  }
  set recordIds(value) {
    this._recordIds = Array.isArray(value) ? value : [value];
    this.recordId = this._recordIds[0];
    console.log("recordIds set to:", this._recordIds);
  }

  @api
  get startDate() {
    return this._startDate;
  }
  set startDate(value) {
    this._startDate = value;
    console.log("startDate set to:", this._startDate);
  }

  @api
  get endDate() {
    return this._endDate;
  }
  set endDate(value) {
    this._endDate = value;
    console.log("endDate set to:", this._endDate);
  }

  _recordIds;
  _startDate;
  _endDate;
  appointments;
  error;
  recordId;

  connectedCallback() {
    console.log("Component connected with:", {
      recordIds: this.recordIds,
      startDate: this.startDate,
      endDate: this.endDate
    });

    if (this.recordIds && this.recordIds.length > 0) {
      this.recordId = this.recordIds[0];
      console.log("Loading appointments for:", this.recordId);
      this.loadAppointments();
    }
  }

  renderedCallback() {
    console.log("Component rendered");
  }

  async loadAppointments() {
    try {
      if (!this.recordIds || this.recordIds.length === 0) {
        console.log("No record IDs available");
        return;
      }
      console.log("Loading appointments for:", this.recordIds);
      this.appointments = await getServiceAppointments({
        appointmentId: this.recordId
      });
      console.log("Appointments loaded:", this.appointments);
      console.log("Appointments loaded:", JSON.stringify(this.appointments));
    } catch (error) {
      console.error("Error in loadAppointments:", error);
      this.error = error;
      this.showToast(
        "Error",
        error.body?.message || "Error loading appointments",
        "error"
      );
    }
  }

  get isWasteVisit() {
    return this.selectedType === "waste";
  }

  get isDepotVisit() {
    return this.selectedType === "depot";
  }

  get isShopVisit() {
    return this.selectedType === "shop";
  }

  handleWasteVisit() {
    this.selectedType = "waste";
    this.showTypeSelection = false;
  }

  handleDepotVisit() {
    this.selectedType = "depot";
    this.showTypeSelection = false;
  }

  handleRedoVisit() {
    this.selectedType = "shop";
    this.showTypeSelection = false;
  }

  handleBack() {
    this.selectedType = null;
    this.showTypeSelection = true;
  }

  handleClose(event) {
    this.showWarning = false;
    this.title = "";
    this.message = "";
    this.variant = "";
    this.iconName = "";

    if (event.detail) {
      if (event.detail.title == "Error") {
        this.iconName = "utility:warning";
        this.title = "Error";
        this.message = event.detail.message;
      } else {
        this.iconName = "utility:success";
        this.title = "Success";
        this.message = event.detail.message;
      }

      //Currently not working for some reason
      // this.showToast(
      //   event.detail.title,
      //   event.detail.message,
      //   event.detail.variant
      // );

      this.showWarning = true;

      //Add it back after 3 seconds
      setTimeout(() => {
        this.showWarning = false;
      }, 3000);
    }

    this.handleBack();
  }

  showToast(title, message, variant) {
    const toastEvent = new ShowToastEvent({
      title: title || "Error",
      message: message || "An error occurred",
      variant: variant || "error"
    });

    this.dispatchEvent(toastEvent);
  }
}