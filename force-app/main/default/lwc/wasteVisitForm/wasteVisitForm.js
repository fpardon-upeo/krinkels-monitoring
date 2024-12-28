import { LightningElement, api, track } from "lwc";
import getWasteTypePicklist from "@salesforce/apex/SFS_WorkOrderCreatorController.getWasteTypePicklist";
import getWasteDepots from "@salesforce/apex/SFS_WorkOrderCreatorController.getWasteDepots";
import createWasteVisitWorkOrder from "@salesforce/apex/SFS_WorkOrderCreatorController.createWasteVisitWorkOrder";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

const COLUMNS = [
  { label: "Waste Depot", fieldName: "Name", type: "text" },
  { label: "Contract", fieldName: "Contract__c", type: "boolean" },
  { label: "Type of Waste", fieldName: "Type_of_Waste__c", type: "text" },
  { label: "Postal Code", fieldName: "ShippingPostalCode", type: "text" },
  { label: "City", fieldName: "ShippingCity", type: "text" }
];

export default class WasteVisitForm extends LightningElement {
  @api recordId;
  @track currentStep = 1;
  @track wasteTypeOptions = [];
  @track selectedWasteTypes = [];
  @track depots = [];
  @track selectedDepotId;
  @track isLoading = false;

  columns = COLUMNS;

  // Getters for step management
  get isStepOne() {
    return this.currentStep === 1;
  }

  get isStepTwo() {
    return this.currentStep === 2;
  }

  get isStepThree() {
    return this.currentStep === 3;
  }

  // Path styling getters
  get stepOneClass() {
    let baseClass = "slds-path__item";
    if (this.currentStep === 1) {
      baseClass += " slds-is-current slds-is-active";
    } else if (this.currentStep > 1) {
      baseClass += " slds-is-complete";
    }
    return baseClass;
  }

  get stepTwoClass() {
    let baseClass = "slds-path__item";
    if (this.currentStep === 2) {
      baseClass += " slds-is-current slds-is-active";
    } else if (this.currentStep > 2) {
      baseClass += " slds-is-complete";
    }
    return baseClass;
  }

  get stepThreeClass() {
    let baseClass = "slds-path__item";
    if (this.currentStep === 3) {
      baseClass += " slds-is-current slds-is-active";
    }
    return baseClass;
  }

  get firstIconClass() {
    return `slds-path__stage-icon ${this.currentStep > 1 ? "slds-show" : "slds-hide"}`;
  }

  get secondIconClass() {
    return `slds-path__stage-icon ${this.currentStep > 2 ? "slds-show" : "slds-hide"}`;
  }

  get thirdIconClass() {
    return `slds-path__stage-icon ${this.currentStep > 3 ? "slds-show" : "slds-hide"}`;
  }

  // Button and validation getters
  get nextButtonLabel() {
    return this.isStepThree ? "Create Work Order" : "Next";
  }

  get nextButtonClass() {
    return this.isStepThree ? "slds-button_brand" : "";
  }

  get isNextDisabled() {
    switch (this.currentStep) {
      case 1:
        return !this.selectedWasteTypes?.length;
      case 2:
        return !this.selectedDepotId;
      default:
        return false;
    }
  }

  get formattedWasteTypes() {
    return this.selectedWasteTypes?.join(", ") || "";
  }

  get selectedDepot() {
    return this.depots.find((depot) => depot.Id === this.selectedDepotId);
  }

  get selectedRows() {
    return this.selectedDepotId ? [this.selectedDepotId] : [];
  }

  // Lifecycle hooks
  connectedCallback() {
    this.loadWasteTypes();
  }

  // Data loading methods
  async loadWasteTypes() {
    try {
      this.isLoading = true;
      const options = await getWasteTypePicklist();
      this.wasteTypeOptions = options.map((opt) => ({
        label: opt,
        value: opt
      }));
    } catch (error) {
      this.handleError(error);
    } finally {
      this.isLoading = false;
    }
  }

  async loadDepots() {
    try {
      this.isLoading = true;
      this.depots = await getWasteDepots({
        wasteTypes: this.selectedWasteTypes
      });
    } catch (error) {
      this.handleError(error);
    } finally {
      this.isLoading = false;
    }
  }

  // Event handlers
  handleWasteTypeChange(event) {
    this.selectedWasteTypes = event.detail.value;
  }

  handleDepotSelection(event) {
    const selectedRows = event.detail.selectedRows;
    this.selectedDepotId = selectedRows.length ? selectedRows[0].Id : null;
  }

  async handleNextOrCreate() {
    if (this.isStepThree) {
      await this.handleCreateWorkOrder();
    } else {
      await this.handleNext();
    }
  }

  async handleNext() {
    if (this.isNextDisabled) {
      return;
    }

    if (this.currentStep === 1) {
      await this.loadDepots();
    }

    this.currentStep += 1;
  }

  handleBack() {
    if (this.currentStep > 1) {
      this.currentStep -= 1;
    } else {
      this.dispatchEvent(new CustomEvent("close"));
    }
  }

  async handleCreateWorkOrder() {
    try {
      this.isLoading = true;
      const workOrderId = await createWasteVisitWorkOrder({
        parentRecordId: this.recordId,
        depotId: this.selectedDepotId,
        wasteTypes: this.selectedWasteTypes.join(";")
      });

      // this.dispatchEvent(new ShowToastEvent({
      //     title: 'Success',
      //     message: 'Waste Visit Work Order created successfully',
      //     variant: 'success'
      // }));

      // this.dispatchEvent(new CustomEvent("close"));

      this.dispatchEvent(
        new CustomEvent("close", {
          detail: {
            title: "Success",
            message: "Waste Visit Work Order created successfully",
            variant: "success"
          }
        })
      );
    } catch (error) {
      // this.handleError(error);

      this.dispatchEvent(
        new CustomEvent("close", {
          detail: {
            title: "Error",
            message: error.body?.message || "An unexpected error occurred",
            variant: "error"
          }
        })
      );
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