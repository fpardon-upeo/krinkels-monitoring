/**
 * Created by fpardon on 11/12/2024.
 */

import { LightningElement, api, track } from "lwc";
import getDepots from "@salesforce/apex/SFS_WorkOrderCreatorController.getDepots";
import createDepotVisitWorkOrder from "@salesforce/apex/SFS_WorkOrderCreatorController.createDepotVisitWorkOrder";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import DepotVisitForm_BackButtonLabel from "@salesforce/label/c.DepotVisitForm_BackButtonLabel";
import DepotVisitForm_CreateButtonLabel from "@salesforce/label/c.DepotVisitForm_CreateButtonLabel";
import DepotVisitForm_PickUpItemsLabel from "@salesforce/label/c.DepotVisitForm_PickUpItemsLabel";
import DepotVisitForm_DropOffItemsLabel from "@salesforce/label/c.DepotVisitForm_DropOffItemsLabel";
import DepotVisitForm_DepotKGC from "@salesforce/label/c.DepotVisitForm_DepotKGC";
import DepotVisitForm_SubjectLabel from "@salesforce/label/c.DepotVisitForm_SubjectLabel";
import DepotVisitForm_Title from "@salesforce/label/c.DepotVisitForm_Title";
import DepotVisitForm_SuccessToastTitle from "@salesforce/label/c.DepotVisitForm_SuccessToastTitle";
import DepotVisitForm_SuccessToastMessage from "@salesforce/label/c.DepotVisitForm_SuccessToastMessage";
import DepotVisitForm_ErrorToastTitle from "@salesforce/label/c.DepotVisitForm_ErrorToastTitle";
import DepotVisitForm_ErrorToastMessage from "@salesforce/label/c.DepotVisitForm_ErrorToastMessage";

export default class DepotVisitForm extends LightningElement {
  @api recordId;

  @track isLoading = false;
  @track depotOptions = [];
  @track selectedDepotId;
  @track subject = "Internal Work Order";
  @track dropOffItems = "";
  @track pickUpItems = "";

  labels = {
    DepotVisitForm_BackButtonLabel,
    DepotVisitForm_CreateButtonLabel,
    DepotVisitForm_PickUpItemsLabel,
    DepotVisitForm_DropOffItemsLabel,
    DepotVisitForm_DepotKGC,
    DepotVisitForm_SubjectLabel,
    DepotVisitForm_Title,
    DepotVisitForm_SuccessToastTitle,
    DepotVisitForm_SuccessToastMessage,
    DepotVisitForm_ErrorToastTitle,
    DepotVisitForm_ErrorToastMessage
  };

  get isCreateDisabled() {
    return !this.selectedDepotId;
  }

  // Lifecycle hooks
  connectedCallback() {
    this.loadDepots();
  }

  // Data loading methods
  async loadDepots() {
    try {
      this.isLoading = true;
      const depots = await getDepots();
      this.depotOptions = depots.map((depot) => ({
        label: depot.Name,
        value: depot.Id
      }));
    } catch (error) {
      this.handleError(error);
    } finally {
      this.isLoading = false;
    }
  }

  // Event handlers
  handleSubjectChange(event) {
    this.subject = event.detail.value;
  }

  handleDepotChange(event) {
    this.selectedDepotId = event.detail.value;
  }

  handleDropOffItemsChange(event) {
    this.dropOffItems = event.detail.value;
  }

  handlePickUpItemsChange(event) {
    this.pickUpItems = event.detail.value;
  }

  handleBack() {
    this.dispatchEvent(new CustomEvent("close"));
  }

  async handleCreate() {
    if (this.isCreateDisabled) return;

    try {
      this.isLoading = true;
      const workOrderId = await createDepotVisitWorkOrder({
        parentRecordId: this.recordId,
        depotId: this.selectedDepotId,
        subject: this.subject,
        dropOffItems: this.dropOffItems,
        pickUpItems: this.pickUpItems
      });

      this.dispatchEvent(
        new CustomEvent("close", {
          detail: {
            title: this.labels.DepotVisitForm_SuccessToastTitle,
            message: this.labels.DepotVisitForm_SuccessToastMessage,
            variant: "success"
          }
        })
      );
    } catch (error) {
      this.dispatchEvent(
        new CustomEvent("close", {
          detail: {
            title: this.labels.DepotVisitForm_ErrorToastTitle,
            message: this.labels.DepotVisitForm_ErrorToastMessage,
            variant: "error"
          }
        })
      );

      // this.handleError(error);
    } finally {
      this.isLoading = false;
    }
  }

  // handleError(error) {
  //   console.error(error);
  //   this.dispatchEvent(
  //     new ShowToastEvent({
  //       title: "Error",
  //       message: error.body?.message || "An unexpected error occurred",
  //       variant: "error"
  //     })
  //   );
  // }
}