import { LightningElement, api, track } from "lwc";
import getMileageEntries from "@salesforce/apex/TimeSheetController.getMileageEntries";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import Mileage_Start_Day from "@salesforce/label/c.Mileage_Start_Day";
import Mileage_End_Day from "@salesforce/label/c.Mileage_End_day";
import Mileage_View_Add_StartMileage from "@salesforce/label/c.Mileage_View_Add_StartMileage";
import Mileage_View_Add_EndMileage from "@salesforce/label/c.Mileage_View_Add_EndMileage";
import Mileage_View_Add_OwnMileage from "@salesforce/label/c.Mileage_View_Add_OwnMileage";
import Mileage_Own from "@salesforce/label/c.Mileage_Own";
import Mileage_Entries_Header from "@salesforce/label/c.Mileage_Entries_Header";
import Mileage_Return_Button from "@salesforce/label/c.Mileage_Return_Button";
import Mileage_Cancel_Button from "@salesforce/label/c.Mileage_Cancel_Button";
import Mileage_Edit_Button from "@salesforce/label/c.Mileage_Edit_Button";
import Mileage_Save_Button from "@salesforce/label/c.Mileage_Save_Button";
import Mileage_New_In_Header from "@salesforce/label/c.Mileage_New_In_Header";
import Mileage_New_Out_Header from "@salesforce/label/c.Mileage_New_Out_Header";
import Mileage_Edit_Entry_Header from "@salesforce/label/c.Mileage_Edit_Entry_Header";
import Mileage_In_Header from "@salesforce/label/c.Mileage_In_Header";
import Mileage_Out_Header from "@salesforce/label/c.Mileage_Out_Header";
import Mileage_Own_Header from "@salesforce/label/c.Mileage_Own_Header";
import Mileage_Add_In_Entry from "@salesforce/label/c.Mileage_Add_In_Entry";
import Mileage_Add_In_Entry_Description from "@salesforce/label/c.Mileage_Add_In_Entry_Description";
import Mileage_Add_Out_Entry from "@salesforce/label/c.Mileage_Add_Out_Entry";
import Mileage_Add_Out_Entry_Description from "@salesforce/label/c.Mileage_Add_Out_Entry_Description";
import Mileage_Own_No_Entries_Message from "@salesforce/label/c.Mileage_Own_No_Entries_Message";
import Mileage_Header from "@salesforce/label/c.Mileage_Header";

export default class ShowMileageScreen extends LightningElement {
  @api recordId;

  @track kmAmount = 0;
  @track mileageEntries = [];
  @track inMileageEntries = [];
  @track outMileageEntries = [];
  @track ownMileageEntries = [];
  @track mileageEntryIdBeingHandled;

  // Modal states
  @track showMileageEntries = false;
  @track showInMileageMessage = false;
  @track showOutMileageMessage = false;
  @track showOutMileageEntryNewForm = false;
  @track showInMileageEntryNewForm = false;
  @track showMileageEntryEditForm = false;
  @track showOwnMileageMessage = false;

  //Labels
  labels = {
    Mileage_Start_Day,
    Mileage_View_Add_StartMileage,
    Mileage_End_Day,
    Mileage_View_Add_EndMileage,
    Mileage_Own,
    Mileage_View_Add_OwnMileage,
    Mileage_Entries_Header,
    Mileage_Return_Button,
    Mileage_Cancel_Button,
    Mileage_Edit_Button,
    Mileage_Save_Button,
    Mileage_New_In_Header,
    Mileage_New_Out_Header,
    Mileage_Edit_Entry_Header,
    Mileage_In_Header,
    Mileage_Out_Header,
    Mileage_Own_Header,
    Mileage_Add_In_Entry,
    Mileage_Add_In_Entry_Description,
    Mileage_Add_Out_Entry,
    Mileage_Add_Out_Entry_Description,
    Mileage_Own_No_Entries_Message,
    Mileage_Header
  };

  connectedCallback() {
    this.loadMileageData();
  }

  loadMileageData() {
    getMileageEntries({ recordId: this.recordId })
      .then((result) => {
        if (result) {
          this.kmAmount = result.Total_KM__c || 0;
          if (result.Mileage_Entries__r) {
            console.log("result.Mileage_Entries__r", result);
            this.mileageEntries = [...result.Mileage_Entries__r];
            console.log(
              "this.mileageEntries",
              JSON.stringify(this.mileageEntries)
            );
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
    this.ownMileageEntries = [];

    this.mileageEntries.forEach((entry) => {
      if (entry.Type__c === "Starting") {
        this.inMileageEntries.push(entry);
      } else if (entry.Type__c === "Ending") {
        this.outMileageEntries.push(entry);
      }

      //Add to own mileage entries if allowance type is own vehicle
      if (entry.Allowance_Type__c === "Own Vehicle") {
        this.ownMileageEntries.push(entry);
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
    this.showOwnMileageMessage = false;
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

  handleOwnMileageEntries() {
    this.handleCloseForm();

    if (this.ownMileageEntries.length > 0) {
      this.populateMileageEntries(this.ownMileageEntries);
      this.showMileageEntries = true;
    } else {
      console.log("No Own mileage entries");
      this.showOwnMileageMessage = true;
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
      Allowance_Type__c: entry.Allowance_Type__c || "",
      Type__c: entry.Type__c || ""
    }));
  }

  handleBackToMenu() {
    //Close all Modals
    this.handleCloseForm();

    // Then dispatch the event
    this.dispatchEvent(new CustomEvent("back"));
  }
}