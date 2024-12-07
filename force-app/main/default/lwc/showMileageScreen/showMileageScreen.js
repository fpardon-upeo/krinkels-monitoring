import { LightningElement, api, track } from "lwc";
import getMileageEntries from "@salesforce/apex/TimeSheetController.getMileageEntries";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class ShowMileageScreen extends LightningElement {
  @api recordId;

  @track kmAmount = 0;
  @track mileageEntries = [];
  @track inMileageEntries = [];
  @track outMileageEntries = [];
  @track mileageEntryIdBeingHandled;

  // Modal states
  @track showMileageEntries = false;
  @track showInMileageMessage = false;
  @track showOutMileageMessage = false;
  @track showOutMileageEntryNewForm = false;
  @track showInMileageEntryNewForm = false;
  @track showMileageEntryEditForm = false;

  connectedCallback() {
    this.loadMileageData();
  }

  loadMileageData() {
    getMileageEntries({ recordId: this.recordId })
      .then((result) => {
        console.log("result of mileage entries", result);
        if (result) {
          this.kmAmount = result.Total_KM__c || 0;
          if (result.Mileage_Entries__r) {
            this.mileageEntries = [...result.Mileage_Entries__r];
            this.categorizeMileageEntries();
          }
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Error",
            message: error.body?.message || "Error loading mileage entries",
            variant: "error"
          })
        );
      });

    // Automatically show the mileage info modal
    this.showMileageInfoModal = true;
  }

  categorizeMileageEntries() {
    // Reset arrays before populating
    this.inMileageEntries = [];
    this.outMileageEntries = [];

    this.mileageEntries.forEach((entry) => {
      if (entry.Type__c === "Starting") {
        this.inMileageEntries.push(entry);
      } else if (entry.Type__c === "Ending") {
        this.outMileageEntries.push(entry);
      }
    });
  }

  // Modal handlers
  handleCloseForm() {
    this.showMileageEntries = false;
    this.showInMileageMessage = false;
    this.showOutMileageMessage = false;
    this.showOutMileageEntryNewForm = false;
    this.showInMileageEntryNewForm = false;
    this.showMileageEntryEditForm = false;
  }

  handleShowMileageInfo() {
    this.handleCloseForm();
    this.showMileageInfoModal = true;
  }

  handleInMileageEntries() {
    if (this.inMileageEntries.length > 0) {
      this.handleCloseForm();
      this.populateMileageEntries(this.inMileageEntries);
      this.showMileageEntries = true;
    } else {
      this.handleCloseForm();
      this.showInMileageMessage = true;
    }
  }

  handleOutMileageEntries() {
    if (this.outMileageEntries.length > 0) {
      this.handleCloseForm();
      this.populateMileageEntries(this.outMileageEntries);
      this.showMileageEntries = true;
    } else {
      this.handleCloseForm();
      this.showOutMileageMessage = true;
    }
  }

  handleNewInMileageEntry() {
    this.handleCloseForm();
    this.showInMileageEntryNewForm = true;
  }

  handleNewOutMileageEntry() {
    this.handleCloseForm();
    this.showOutMileageEntryNewForm = true;
  }

  handleMileageEntryEdit(event) {
    this.mileageEntryIdBeingHandled = event.target.dataset.id;
    this.handleCloseForm();
    this.showMileageEntryEditForm = true;
  }

  handleSuccessMileageEntryNew(event) {
    console.log("event.detail", event.detail);
    console.log("event", event);

    this.handleCloseForm();
    this.loadMileageData();

    const toastEvent = new ShowToastEvent({
      title: "Success",
      message: "Mileage entry created successfully.",
      variant: "success"
    });
    this.dispatchEvent(toastEvent);
  }

  handleSuccessMileageEntryEdit() {
    this.handleCloseForm();
    this.loadMileageData();

    const toastEvent = new ShowToastEvent({
      title: "Success",
      message: "Mileage entry updated successfully.",
      variant: "success"
    });
    this.dispatchEvent(toastEvent);
  }

  populateMileageEntries(mileageArray) {
    this.mileageEntries = mileageArray.map((entry) => ({
      Id: entry.Id,
      Starting_Mileage__c: entry.Starting_Mileage__c || "",
      Ending_Mileage__c: entry.Ending_Mileage__c || "",
      Starting_Location_Type__c: entry.Starting_Location_Type__c || "",
      Ending_Location_Type__c: entry.Ending_Location_Type__c || "",
      Allowance_Type__c: entry.Allowance_Type__c || ""
    }));
  }

  handleBackToMenu() {
    //Close all Modals
    this.handleCloseForm();

    // Then dispatch the event
    this.dispatchEvent(new CustomEvent("back"));
  }
}