import { LightningElement, api, track } from "lwc";
import getWasteTypePicklist from "@salesforce/apex/SFS_WorkOrderCreatorController.getWasteTypePicklist";
import getWasteDepots from "@salesforce/apex/SFS_WorkOrderCreatorController.getWasteDepots";
import createWasteVisitWorkOrder from "@salesforce/apex/SFS_WorkOrderCreatorController.createWasteVisitWorkOrder";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import WasteVisitForm_WasteTypeText from "@salesforce/label/c.WasteVisitForm_WasteTypeText";
import WasteVisitForm_DepotText from "@salesforce/label/c.WasteVisitForm_DepotText";
import WasteVisitForm_DetailsText from "@salesforce/label/c.WasteVisitForm_DetailsText";
import WasteVisitForm_SelectedDepotText from "@salesforce/label/c.WasteVisitForm_SelectedDepotText";
import WasteVisitForm_SelectedWasteTypesText from "@salesforce/label/c.WasteVisitForm_SelectedWasteTypesText";
import WasteVisitForm_SelectedWasteTypesDropOff from "@salesforce/label/c.WasteVisitForm_SelectedWasteTypesDropOff";
import WasteVisitForm_WasteDepotColumnLabel from "@salesforce/label/c.WasteVisitForm_WasteDepotColumnLabel";
import WasteVisitForm_ContractColumnLabel from "@salesforce/label/c.WasteVisitForm_ContractColumnLabel";
import WasteVisitForm_TypeOfWasteColumnLabel from "@salesforce/label/c.WasteVisitForm_TypeOfWasteColumnLabel";
import WasteVisitForm_PostalCodeColumnLabel from "@salesforce/label/c.WasteVisitForm_PostalCodeColumnLabel";
import WasteVisitForm_CityColumnLabel from "@salesforce/label/c.WasteVisitForm_CityColumnLabel";
import WasteVisitForm_CreateWOText from "@salesforce/label/c.WasteVisitForm_CreateWOText";
import WasteVisitForm_NextText from "@salesforce/label/c.WasteWasteVisitForm_NextTextVisitForm_NextText";
import WasteVisitForm_SuccessTitle from "@salesforce/label/c.WasteVisitForm_SuccessTitle";
import WasteVisitForm_SuccessMessage from "@salesforce/label/c.WasteVisitForm_SuccessMessage";
import WasteVisitForm_ErrorTitle from "@salesforce/label/c.WasteVisitForm_ErrorTitle";
import WasteVisitForm_ErrorMessage from "@salesforce/label/c.WasteVisitForm_ErrorMessage";
import WasteVisitForm_BackText from "@salesforce/label/c.WasteVisitForm_BackText";
import WasteVisitForm_AvailableTypes from "@salesforce/label/c.WasteVisitForm_AvailableTypes";
import WasteVisitForm_SelectedTypes from "@salesforce/label/c.WasteVisitForm_SelectedTypes";

const COLUMNS = [
  {
    label: WasteVisitForm_WasteDepotColumnLabel,
    fieldName: "Name",
    type: "text"
  },
  {
    label: WasteVisitForm_ContractColumnLabel,
    fieldName: "Contract__c",
    type: "boolean"
  },
  {
    label: WasteVisitForm_TypeOfWasteColumnLabel,
    fieldName: "Type_of_Waste__c",
    type: "text"
  },
  {
    label: WasteVisitForm_PostalCodeColumnLabel,
    fieldName: "ShippingPostalCode",
    type: "text"
  },
  {
    label: WasteVisitForm_CityColumnLabel,
    fieldName: "ShippingCity",
    type: "text"
  }
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

  labels = {
    WasteVisitForm_WasteTypeText,
    WasteVisitForm_DepotText,
    WasteVisitForm_DetailsText,
    WasteVisitForm_SelectedDepotText,
    WasteVisitForm_SelectedWasteTypesText,
    WasteVisitForm_SelectedWasteTypesDropOff,
    WasteVisitForm_WasteDepotColumnLabel,
    WasteVisitForm_ContractColumnLabel,
    WasteVisitForm_TypeOfWasteColumnLabel,
    WasteVisitForm_PostalCodeColumnLabel,
    WasteVisitForm_CityColumnLabel,
    WasteVisitForm_CreateWOText,
    WasteVisitForm_NextText,
    WasteVisitForm_SuccessTitle,
    WasteVisitForm_SuccessMessage,
    WasteVisitForm_ErrorTitle,
    WasteVisitForm_ErrorMessage,
    WasteVisitForm_BackText,
    WasteVisitForm_AvailableTypes,
    WasteVisitForm_SelectedTypes
  };

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
    return this.isStepThree
      ? this.labels.WasteVisitForm_CreateWOText
      : this.labels.WasteVisitForm_NextText;
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
            outcome: "success",
            title: this.labels.WasteVisitForm_SuccessTitle,
            message: this.labels.WasteVisitForm_SuccessMessage,
            variant: "success"
          }
        })
      );
    } catch (error) {
      // this.handleError(error);

      this.dispatchEvent(
        new CustomEvent("close", {
          detail: {
            outcome: "error",
            title: this.labels.WasteVisitForm_ErrorTitle,
            message: this.labels.WasteVisitForm_ErrorMessage,
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