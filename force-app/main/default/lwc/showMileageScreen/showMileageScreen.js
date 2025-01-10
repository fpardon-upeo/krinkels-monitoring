import { LightningElement, api, track, wire } from "lwc";
import { gql, graphql } from "lightning/uiGraphQLApi";
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
import Mileage_SelectAppointmentText from "@salesforce/label/c.Mileage_SelectAppointmentText";
import Mileage_NextButtonText from "@salesforce/label/c.Mileage_NextButtonText";
import Mileage_SelectWorkOrderText from "@salesforce/label/c.Mileage_SelectWorkOrderText";
import Mileage_ChangeWorkOrderText from "@salesforce/label/c.Mileage_ChangeWorkOrderText";
import Mileage_ErrorTitle from "@salesforce/label/c.Mileage_ErrorTitle";
import Mileage_ErrorMessageLoadingEntries from "@salesforce/label/c.Mileage_ErrorMessageLoadingEntries";
import Mileage_SuccessTitle from "@salesforce/label/c.Mileage_SuccessTitle";
import Mileage_SuccessMessageEditEntry from "@salesforce/label/c.Mileage_SuccessMessageEditEntry";
import Mileage_SuccessMessageNewEntry from "@salesforce/label/c.Mileage_SuccessMessageNewEntry";

export default class ShowMileageScreen extends LightningElement {
  @api recordId;
  @api serviceResourceId;

  @track kmAmount = 0;
  @track mileageEntries = [];
  @track inMileageEntries = [];
  @track outMileageEntries = [];
  @track ownMileageEntries = [];
  @track mileageEntryIdBeingHandled;
  @track selectedRows = [];
  @track workOrderId;
  @track startDate;
  @track endDate;
  @track disableNextButton = true;

  // Modal states
  @track showMileageEntries = false;
  @track showInMileageMessage = false;
  @track showOutMileageMessage = false;
  @track showOutMileageEntryNewForm = false;
  @track showInMileageEntryNewForm = false;
  @track showMileageEntryEditForm = false;
  @track showOwnMileageMessage = false;
  @track showAppointmentScreen = false;
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
    Mileage_Header,
    Mileage_SelectAppointmentText,
    Mileage_NextButtonText,
    Mileage_SelectWorkOrderText,
    Mileage_ChangeWorkOrderText,
    Mileage_ErrorTitle,
    Mileage_ErrorMessageLoadingEntries,
    Mileage_SuccessTitle,
    Mileage_SuccessMessageEditEntry,
    Mileage_SuccessMessageNewEntry
  };

  @wire(graphql, {
    query: gql`
      query ServiceAppointments(
        $serviceResourceId: ID
        $startDate: DateTimeInput
        $endDate: DateTimeInput
      ) {
        uiapi {
          query {
            AssignedResource(first: 200
              where: {
                and: [
                  { ServiceResourceId: { eq: $serviceResourceId } }
                  { ServiceAppointment: { Status: { ne: "Scheduled" } } }
                  { ServiceAppointment: { Status: { ne: "Unscheduled" } } }
                  { ServiceAppointment: { Status: { ne: "Cannot Complete" } } }
                  { ServiceAppointment: { Status: { ne: "Cancelled" } } }
                  {
                    ServiceAppointment: {
                      SchedStartTime: { gte: $startDate, lte: $endDate }
                    }
                  }
                ]
              }
              orderBy: {
                ServiceAppointment: { SchedStartTime: { order: ASC } }
              }
            ) {
              edges {
                node {
                  ServiceAppointment {
                    AppointmentNumber {
                      value
                      displayValue
                    }
                    Account {
                      Name {
                        value
                        displayValue
                      }
                    }
                    Id
                    Subject {
                      value
                      displayValue
                    }
                    SchedStartTime {
                      value
                      displayValue
                    }
                    ParentRecordId {
                      value
                      displayValue
                    }
                    WorkType {
                      Name {
                        value
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: "$serviceAppointmentsVariables"
  })
  appointmentsQueryResult({ error, data }) {
    if (data) {
      this.data = data.uiapi.query.AssignedResource.edges.map(
        (edge) => edge.node.ServiceAppointment
      );
      this.serviceAppointments = this.data.map((appointment) => {
        //Pretty schedule start time
        let date = new Date(appointment.SchedStartTime.value);
        //Use the date and the cleaned up hours and minutes, use 24h format
        let dateFormatted =
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          " " +
          date.getHours() +
          ":" +
          date.getMinutes();
        //Make sure we don't return things like 14:0, but 14:00
        dateFormatted = dateFormatted.replace(/:(\d)$/, ":0$1");

        let icon = "";
        if (appointment.WorkType.Name.value === "Waste Management") {
          icon = "🗑️";
        } else if (appointment.WorkType.Name.value === "Internal Depot") {
          icon = "🏭";
        } else {
          icon = "💲";
        }

        return {
          Appointment:
            icon +
            " " +
            appointment.Account.Name.value +
            " - " +
            dateFormatted +
            " - " +
            appointment.WorkType.Name.value,
          AppointmentNumber: appointment.AppointmentNumber.value,
          Subject: appointment.Subject.value,
          Id: appointment.Id,
          SchedStartTime: appointment.SchedStartTime.value,
          ParentRecordId: appointment.ParentRecordId.value,
          WorkOrderType: appointment.WorkType.Name.value
        };
      });
      console.log(JSON.stringify(this.serviceAppointments));
    } else if (error) {
      console.log(error);
    }
  }

  get serviceAppointmentsVariables() {
    // Get the dates for last week's start and next week's end
    const today = new Date();
    const lastWeekStart = new Date(today);
    lastWeekStart.setDate(today.getDate() - 3); // Beginning of last week
    const nextWeekEnd = new Date(today);
    nextWeekEnd.setDate(today.getDate() - today.getDay() + 3); // End of next week

    console.log("lastweekstart", lastWeekStart.toISOString());
    console.log("nextweekend", nextWeekEnd.toISOString());

    return {
      serviceResourceId: this.serviceResourceId,
      startDate: { value: lastWeekStart.toISOString() },
      endDate: { value: nextWeekEnd.toISOString() }
    };
  }

  connectedCallback() {
    this.loadMileageData();
  }

  loadMileageData() {
    console.log("recordId", this.recordId);
    getMileageEntries({ recordId: this.recordId })
      .then((result) => {
        if (result) {
          this.kmAmount = result.Total_KM__c || 0;
          this.startDate = result.StartDate;
          this.endDate = result.EndDate ? result.EndDate : result.StartDate;

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
            title: this.labels.Mileage_ErrorTitle,
            message: this.labels.Mileage_ErrorMessageLoadingEntries,
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
    this.showAppointmentScreen = false;

    this.workOrderId = null;
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
    this.workOrderId = null;

    console.log("event.detail", event.detail);
    console.log("event", event);

    this.handleCloseForm();
    this.loadMileageData();

    const toastEvent = new ShowToastEvent({
      title: this.labels.Mileage_SuccessTitle,
      message: this.labels.Mileage_SuccessMessageNewEntry,
      variant: "success"
    });
    this.dispatchEvent(toastEvent);
  }

  handleSuccessMileageEntryEdit(event) {
    this.handleCloseForm();
    this.loadMileageData();

    const toastEvent = new ShowToastEvent({
      title: this.labels.Mileage_SuccessTitle,
      message: this.labels.Mileage_SuccessMessageEditEntry,
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

  ////////////////////////////////////////////////////////////////

  columns = [
    {
      label: this.labels.AppointmentPicker_Appointments_Header,
      fieldName: "Appointment",
      type: "text",
      wrapText: true
    }
  ];

  handleRowSelection(event) {
    const button = this.template.querySelector(".grey-button");

    //If the button exists, remove the grey-button class and add the submit-button class
    // This will only happens once, when the user selects an option
    if (button) {
      button.classList.remove("grey-button");
      button.classList.add("submit-button");
    }

    //Continue with the rest of the logic, this will happen every time the user selects an option
    const selectedRows = event.detail.selectedRows;
    console.log("selectedRows", JSON.stringify(selectedRows));
    this.selectedRows = selectedRows;
    this.workOrderId = selectedRows[0].ParentRecordId;
    this.disableNextButton = selectedRows.length === 0;
  }

  handleSetAppointmentClicked() {
    this.showAppointmentScreen = true;
  }

  handleNext() {
    // Close the appointment screen
    this.showAppointmentScreen = false;

    // Return to the new mileage entry form
    if (this.showInMileageEntryNewForm) {
      this.showInMileageEntryNewForm = true;
    } else if (this.showOutMileageEntryNewForm) {
      this.showOutMileageEntryNewForm = true;
    }
  }

  get workOrderText() {
    if (this.workOrderId) {
      return this.labels.Mileage_ChangeWorkOrderText;
    } else {
      return this.labels.Mileage_SelectWorkOrderText;
    }
  }
}