import { LightningElement, api, track } from "lwc";
import { CloseActionScreenEvent } from "lightning/actions";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class WorkOrderActions extends LightningElement {
  @track showLogShopVisit = false;
  @track showLogSpecialEquipment = false;
  @track showLogEditTasks = false;
  @track showInitialScreen = true;
  @track showImageCapture = false;
  @api recordId;
  @track imagePreview;
  @track base64Image = "";

  connectedCallback() {
    console.log("recordId:", this.recordId);
  }

  logShopVisit() {
    console.log("logShopVisit");
    this.showInitialScreen = false;
    this.showLogShopVisit = true;
  }

  logSpecialEquipment() {
    console.log("logSpecialEquipment");
    this.showInitialScreen = false;
    this.showLogSpecialEquipment = true;
  }

  logEditTasks() {
    console.log("logEditTasks");
    this.showInitialScreen = false;
    this.showLogEditTasks = true;
  }

  closeModal() {
    console.log("closeModal");
    this.showLogShopVisit = false;
    this.showLogSpecialEquipment = false;
    this.showLogEditTasks = false;
    this.showInitialScreen = true;
    this.showImageCapture = false;
  }

  closeAction() {
    this.dispatchEvent(new CloseActionScreenEvent());
  }

  handleSuccess(event) {
    console.log("handleSuccess", event);

    this.closeModal();

    // const evt = new ShowToastEvent({
    //   title: "Success",
    //   message: "Record updated successfully",
    //   variant: "success"
    // });

    // this.dispatchEvent(evt);

    this.dispatchEvent(new CloseActionScreenEvent());
  }

  handleSuccessShopVisit() {
    this.closeModal();
    this.showImageCapture = true;
  }

  handleUploadFinished(event) {
    //Add on toastEvent file Id to the message
    console.log("handleUploadFinished", event.detail.files);

    const toastEvent = new ShowToastEvent({
      title: "Success",
      message: JSON.stringify(event.detail.files),
      variant: "success"
    });

    this.dispatchEvent(toastEvent);
  }
}