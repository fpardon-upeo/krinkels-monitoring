import { LightningElement, api, track } from "lwc";
import { CloseActionScreenEvent } from "lightning/actions";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import createExtraWorkOrder from "@salesforce/apex/ExtraWorkOrderController.createExtraWorkOrder";
import WorkOrderActions_Header from "@salesforce/label/c.WorkOrderActions_Header";
import WorkOrderActions_Shop_Visit_Header from "@salesforce/label/c.WorkOrderActions_Shop_Visit_Header";
import WorkOrderActions_Special_Equipment_Header from "@salesforce/label/c.WorkOrderActions_Special_Equipment_Header";
import WorkOrderActions_Edit_Tasks_Header from "@salesforce/label/c.WorkOrderActions_Edit_Tasks_Header";
import WorkOrderActions_Shop_Visit_Description from "@salesforce/label/c.WorkOrderActions_Shop_Visit_Description";
import WorkOrderActions_Special_Equipment_Description from "@salesforce/label/c.WorkOrderActions_Special_Equipment_Description";
import WorkOrderActions_Edit_Tasks_Description from "@salesforce/label/c.WorkOrderActions_Edit_Tasks_Description";
import WorkOrderActions_Cancel_Button from "@salesforce/label/c.WorkOrderActions_Cancel_Button";
import WorkOrderActions_Save_Button from "@salesforce/label/c.WorkOrderActions_Save_Button";
import WorkOrderActions_Extra_Work_Description from "@salesforce/label/c.WorkOrderActions_Extra_Work_Description";
import WorkOrderActions_Extra_Work_Header from "@salesforce/label/c.WorkOrderActions_Extra_Work_Header";
import WorkOrderActions_Extra_Work_Subject from "@salesforce/label/c.WorkOrderActions_Extra_Work_Subject";
import WorkOrderActions_ErrorTitle from "@salesforce/label/c.WorkOrderActions_ErrorTitle";
import WorkOrderActions_SuccessTitle from "@salesforce/label/c.WorkOrderActions_SuccessTitle";
import WorkOrderActions_ErrorMessage from "@salesforce/label/c.WorkOrderActions_ErrorMessage";
import WorkOrderActions_SuccessMessage from "@salesforce/label/c.WorkOrderActions_SuccessMessage";

export default class WorkOrderActions extends LightningElement {
  @track showLogShopVisit = false;
  @track showLogSpecialEquipment = false;
  @track showLogEditTasks = false;
  @track showExtraWork = false;
  @track showInitialScreen = true;
  @track showImageCapture = false;
  @api recordId;
  @track imagePreview;
  @track base64Image = "";
  @track extraWorkSubject = "";

  labels = {
    WorkOrderActions_Header,
    WorkOrderActions_Shop_Visit_Header,
    WorkOrderActions_Special_Equipment_Header,
    WorkOrderActions_Edit_Tasks_Header,
    WorkOrderActions_Shop_Visit_Description,
    WorkOrderActions_Special_Equipment_Description,
    WorkOrderActions_Edit_Tasks_Description,
    WorkOrderActions_Cancel_Button,
    WorkOrderActions_Save_Button,
    WorkOrderActions_Extra_Work_Description,
    WorkOrderActions_Extra_Work_Header,
    WorkOrderActions_Extra_Work_Subject,
    WorkOrderActions_ErrorTitle,
    WorkOrderActions_SuccessTitle,
    WorkOrderActions_ErrorMessage,
    WorkOrderActions_SuccessMessage
  };

  connectedCallback() {
    console.log("recordId:", this.recordId);
  }

  logShopVisit() {
    console.log("logShopVisit");
    this.showInitialScreen = false;
    this.showLogShopVisit = true;
  }

  logExtraWork() {
    console.log("createExtraWork");
    this.showInitialScreen = false;
    this.showExtraWork = true;
  }

  createExtraWork() {
    console.log("createExtraWork");
    createExtraWorkOrder({
      subject: this.extraWorkSubject,
      parentWorkOrderId: this.recordId
    })
      .then((result) => {
        console.log("result", result);
        this.dispatchEvent(
          new ShowToastEvent({
            title: this.labels.WorkOrderActions_SuccessTitle,
            message: this.labels.WorkOrderActions_SuccessMessage,
            variant: "success"
          })
        );
        this.closeModal();
      })
      .catch((error) => {
        console.log("error", error);
        this.dispatchEvent(
          new ShowToastEvent({
            title: this.labels.WorkOrderActions_ErrorTitle,
            message: this.labels.WorkOrderActions_ErrorMessage,
            variant: "error"
          })
        );
      });
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
    this.showExtraWork = false;
  }

  handleExtraWorkSubjectChange(event) {
    this.extraWorkSubject = event.target.value;
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