import { LightningElement, api, track } from "lwc";
import { CloseActionScreenEvent } from "lightning/actions";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import WorkOrderActions_Header from "@salesforce/label/c.WorkOrderActions_Header";
import WorkOrderActions_Shop_Visit_Header from "@salesforce/label/c.WorkOrderActions_Shop_Visit_Header";
import WorkOrderActions_Special_Equipment_Header from "@salesforce/label/c.WorkOrderActions_Special_Equipment_Header";
import WorkOrderActions_Edit_Tasks_Header from "@salesforce/label/c.WorkOrderActions_Edit_Tasks_Header";
import WorkOrderActions_Shop_Visit_Description from "@salesforce/label/c.WorkOrderActions_Shop_Visit_Description";
import WorkOrderActions_Special_Equipment_Description from "@salesforce/label/c.WorkOrderActions_Special_Equipment_Description";
import WorkOrderActions_Edit_Tasks_Description from "@salesforce/label/c.WorkOrderActions_Edit_Tasks_Description";
import WorkOrderActions_Cancel_Button from "@salesforce/label/c.WorkOrderActions_Cancel_Button";
import WorkOrderActions_Save_Button from "@salesforce/label/c.WorkOrderActions_Save_Button";

export default class WorkOrderActions extends LightningElement {
  @track showLogShopVisit = false;
  @track showLogSpecialEquipment = false;
  @track showLogEditTasks = false;
  @track showInitialScreen = true;
  @track showImageCapture = false;
  @api recordId;
  @track imagePreview;
  @track base64Image = "";

  labels = {
    WorkOrderActions_Header,
    WorkOrderActions_Shop_Visit_Header,
    WorkOrderActions_Special_Equipment_Header,
    WorkOrderActions_Edit_Tasks_Header,
    WorkOrderActions_Shop_Visit_Description,
    WorkOrderActions_Special_Equipment_Description,
    WorkOrderActions_Edit_Tasks_Description,
    WorkOrderActions_Cancel_Button,
    WorkOrderActions_Save_Button
  };

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

    this.dispatchEvent(new CloseActionScreenEvent());
  }
}