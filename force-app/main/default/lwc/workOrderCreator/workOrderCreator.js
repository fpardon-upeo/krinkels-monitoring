import { LightningElement, api } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import getServiceAppointments from "@salesforce/apex/SFS_WorkOrderCreatorController.getServiceAppointments";
import WorkOrderCreator_WasteVisitTitle from "@salesforce/label/c.WorkOrderCreator_WasteVisitTitle";
import WorkOrderCreator_DepotVisitTitle from "@salesforce/label/c.WorkOrderCreator_DepotVisitTitle";
import WorkOrderCreator_ReworkVisitTitle from "@salesforce/label/c.WorkOrderCreator_ReworkVisitTitle";
import WorkOrderCreator_WasteVisitMessage from "@salesforce/label/c.WorkOrderCreator_WasteVisitMessage";
import WorkOrderCreator_DepotVisitMessage from "@salesforce/label/c.WorkOrderCreator_DepotVisitMessage";
import WorkOrderCreator_ReworkVisitMessage from "@salesforce/label/c.WorkOrderCreator_ReworkVisitMessage";
import WorkOrderCreator_SuccessTitle from "@salesforce/label/c.WorkOrderCreator_SuccessTitle";
import WorkOrderCreator_ErrorTitle from "@salesforce/label/c.WorkOrderCreator_ErrorTitle";

export default class WorkOrderCreator extends LightningElement {
  showTypeSelection = true;
  selectedType = null;
  title = "";
  message = "";
  variant = "";
  iconName = "";
  showWarning = false;
  showSuccess = false;

  labels = {
    WorkOrderCreator_WasteVisitTitle,
    WorkOrderCreator_DepotVisitTitle,
    WorkOrderCreator_ReworkVisitTitle,
    WorkOrderCreator_WasteVisitMessage,
    WorkOrderCreator_DepotVisitMessage,
    WorkOrderCreator_ReworkVisitMessage,
    WorkOrderCreator_SuccessTitle,
    WorkOrderCreator_ErrorTitle
  };

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
    this.showSuccess = false;
    this.title = "";
    this.message = "";
    this.variant = "";
    this.iconName = "";

    if (event.detail) {
      if (event.detail.outcome == "error") {
        this.iconName = "utility:warning";
        this.title = this.labels.WorkOrderCreator_ErrorTitle;
        this.message = event.detail.message;
        this.showWarning = true;

        //Remove it back after 3 seconds
        setTimeout(() => {
          this.showWarning = false;
        }, 3000);
      } else {
        this.iconName = "utility:success";
        this.title = this.labels.WorkOrderCreator_SuccessTitle;
        this.message = event.detail.message;
        this.showSuccess = true;

        //Remove it back after 3 seconds
        setTimeout(() => {
          this.showSuccess = false;
        }, 3000);
      }

      //Currently not working for some reason
      // this.showToast(
      //   event.detail.title,
      //   event.detail.message,
      //   event.detail.variant
      // );
    }

    this.handleBack();
  }

  showToast(title, message, variant) {
    const toastEvent = new ShowToastEvent({
      title: title,
      message: message,
      variant: variant
    });

    this.dispatchEvent(toastEvent);
  }
}