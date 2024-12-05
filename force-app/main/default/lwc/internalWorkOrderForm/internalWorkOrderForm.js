/**
 * Created by Frederik on 11/29/2024.
 */

import { api, LightningElement, wire } from "lwc";
import { gql, graphql } from "lightning/uiGraphQLApi";
import { updateRecord } from "lightning/uiRecordApi";
import ID from "@salesforce/user/Id";
import InternalWorkOrder_Header_Text from "@salesforce/label/c.InternalWorkOrder_Header_Text";
import AppointmentPicker_Appointments_Header from "@salesforce/label/c.AppointmentPicker_Appointments_Header";
import InternalWorkOrder_No_Travel_Text from "@salesforce/label/c.InternalWorkOrder_No_Travel_Text";
import InternalWorkOrder_No_Travel_Sub_Text from "@salesforce/label/c.InternalWorkOrder_No_Travel_Sub_Text";
import InternalWorkOrder_Start_Travel_Text from "@salesforce/label/c.InternalWorkOrder_Start_Travel_Text";
import InternalWorkOrder_Start_Travel_Sub_Text from "@salesforce/label/c.InternalWorkOrder_Start_Travel_Sub_Text";
import InternalWorkOrder_Waste_Button_Text from "@salesforce/label/c.InternalWorkOrder_Waste_Button_Text";
import InternalWorkOrder_Waste_Button_Sub_Text from "@salesforce/label/c.InternalWorkOrder_Waste_Button_Sub_Text";
import InternalWorkOrder_Depot_Button_Text from "@salesforce/label/c.InternalWorkOrder_Depot_Button_Text";
import InternalWorkOrder_Depot_Button_Sub_Text from "@salesforce/label/c.InternalWorkOrder_Depot_Button_Sub_Text";
import { NavigationMixin } from "lightning/navigation";

import createInternalWorkOrder from "@salesforce/apex/InternalWorkOrderController.createInternalWorkOrder";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class InternalWorkOrderForm extends NavigationMixin(
  LightningElement
) {
  @api startDate;
  @api endDate;
  @api timeSheetId;
  @api serviceResourceId;
  @api startDateAndHours;
  @api endDateAndHours;
  @api recordId;

  defaultSubject = "Internal Work Order";
  defaultType = "Waste Management";
  workTypes = [];
  showSpinner = false;
  showStartTravel = false;
  showAccountScreen = false;
  newWorkOrderId;
  newServiceAppointmentId;

  connectedCallback() {
    //check the api variables and set them to "" if they are undefined
    if (this.startDate === undefined) {
      this.startDate = "";
    }
    if (this.endDate === undefined) {
      this.endDate = "";
    }
    if (this.recordId === undefined) {
      this.recordId = "";
    }
    console.log("recordId", this.recordId);
    console.log("startDate", this.startDate);
    console.log("endDate", this.endDate);
    this.showRecordForm = true;
  }

  labels = {
    InternalWorkOrder_Header_Text,
    AppointmentPicker_Appointments_Header,
    InternalWorkOrder_No_Travel_Text,
    InternalWorkOrder_No_Travel_Sub_Text,
    InternalWorkOrder_Start_Travel_Text,
    InternalWorkOrder_Start_Travel_Sub_Text,
    InternalWorkOrder_Waste_Button_Text,
    InternalWorkOrder_Waste_Button_Sub_Text,
    InternalWorkOrder_Depot_Button_Text,
    InternalWorkOrder_Depot_Button_Sub_Text
  };

  workOrderTypeOptions = [
    { label: "Internal Depot", value: "Internal Depot" },
    { label: "Waste Management", value: "Waste Management" }
  ];

  columns = [
    {
      label: this.labels.AppointmentPicker_Appointments_Header,
      fieldName: "Appointment",
      type: "text",
      wrapText: true
    }
  ];

  accountWasteColumns = [
    { label: "Name", fieldName: "Name" },
    { label: "Waste Types", fieldName: "Type_Of_Waste__c" },
    { label: "City", fieldName: "ShippingCity" },
    { label: "Postal Code", fieldName: "ShippingPostalCode" }
  ];

  accountInternalDepotColumns = [{ label: "Name", fieldName: "Name" }];

  serviceAppointments = [];
  wasteAccounts = [];
  internalDepotAccounts = [];
  data;
  wasteAccountData;
  internalDepotData;
  showAppointmentScreen = false;
  showWasteAccountScreen = false;
  showInternalDepotScreen = false;
  showRecordForm = false;
  showSelectionScreen = true;
  selectedRows = [];
  workOrderId;
  disableNextButton = true;
  showBottomFooter = false;
  selectedAccountId;

  @wire(graphql, {
    query: gql`
      query ServiceAppointments(
        $serviceResourceId: ID
        $startDate: DateTimeInput
        $endDate: DateTimeInput
      ) {
        uiapi {
          query {
            AssignedResource(
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
                    WorkType {
                      Name {
                        value
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
                    Account {
                      Name {
                        value
                        displayValue
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
          ParentRecordId: appointment.ParentRecordId.value
        };
      });
      console.log(JSON.stringify(this.serviceAppointments));
    } else if (error) {
      console.log(error);
    }
  }

  @wire(graphql, {
    query: gql`
      query WasteAccounts {
        uiapi {
          query {
            Account(
              where: { Sub_Type__c: { eq: "Waste Depot" } }
              orderBy: { Name: { order: ASC } }
            ) {
              edges {
                node {
                  Id
                  Name {
                    value
                  }
                  Type_of_Waste__c {
                    value
                  }
                  ShippingCity {
                    value
                  }
                  ShippingPostalCode {
                    value
                  }
                }
              }
            }
          }
        }
      }
    `
  })
  wasteAccountsResult({ error, data }) {
    if (data) {
      console.log("data:", JSON.stringify(data));
      this.wasteAccountData = data;
      this.wasteAccounts = data.uiapi.query.Account.edges.map((edge) => ({
        Id: edge.node.Id,
        Name: edge.node.Name.value,
        Type_Of_Waste__c: edge.node.Type_of_Waste__c.value,
        ShippingCity: edge.node.ShippingCity.value,
        ShippingPostalCode: edge.node.ShippingPostalCode.value
      }));
    } else if (error) {
      console.error("Error fetching waste accounts:", error);
    }
  }

  @wire(graphql, {
    query: gql`
      query InternalDepotAccounts {
        uiapi {
          query {
            Account(
              where: { Sub_Type__c: { eq: "Depot KGC" } }
              orderBy: { Name: { order: ASC } }
            ) {
              edges {
                node {
                  Id
                  Name {
                    value
                  }
                }
              }
            }
          }
        }
      }
    `
  })
  internalDepotAccountsResult({ error, data }) {
    if (data) {
      this.internalDepotData = data;
      this.internalDepotAccounts = data.uiapi.query.Account.edges.map(
        (edge) => ({
          Id: edge.node.Id,
          Name: edge.node.Name.value
        })
      );
    } else if (error) {
      console.error("Error fetching internal depot accounts:", error);
    }
  }

  @wire(graphql, {
    query: gql`
      query WorkTypes {
        uiapi {
          query {
            WorkType {
              edges {
                node {
                  Name {
                    value
                    displayValue
                  }
                  Id
                }
              }
            }
          }
        }
      }
    `
  })
  workTypesQueryResult({ error, data }) {
    if (data) {
      this.data = data.uiapi.query.WorkType.edges.map((edge) => edge.node);
      this.workTypes = this.data.map((workType) => {
        return {
          Name: workType.Name.value,
          Id: workType.Id
        };
      });
      console.log(JSON.stringify(this.workTypes));
    } else if (error) {
      console.log(error);
    }
  }

  handleSubjectChange(event) {
    this.defaultSubject = event.target.value;
  }

  handleSetAppointmentClicked(event) {
    event.preventDefault();
    this.showRecordForm = false;
    this.showAppointmentScreen = true;
    this.showBottomFooter = true;

    this.selectedRows = [];
    this.workOrderId = "";
    this.disableNextButton = true;
  }

  handleSetWasteVisit() {
    this.showSelectionScreen = false;
    this.defaultType = "Waste Management";
  }

  handleSetInternalDepot() {
    this.showSelectionScreen = false;
    this.defaultType = "Internal Depot";
  }

  handleCloseWasteVisitScreen() {
    this.showAppointmentScreen = false;
    this.showRecordForm = true;
    this.showBottomFooter = false;
    //fire an event to the parent component
    const selectedEvent = new CustomEvent("closeform");
    this.dispatchEvent(selectedEvent);
  }

  handleStartTravel() {
    this.showSpinner = true;
    let fields = {};
    fields["Id"] = this.newServiceAppointmentId;
    fields["Status"] = "Travelling";

    const recordInput = { fields };
    updateRecord(recordInput)
      .then(() => {
        this.showStartTravel = false;
        this.showRecordForm = true;
        this.showBottomFooter = false;
        this.showSpinner = false;
        setTimeout(() => {
          this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
              url: `com.salesforce.fieldservice://v1/sObject/${this.newWorkOrderId}`
            }
          });
        }, 200);
      })
      .catch((error) => {
        this.showSpinner = false;
      });
  }

  handleSetAccountClicked() {
    this.showRecordForm = false;
    this.showBottomFooter = true;

    if (this.defaultType === "Waste Management") {
      this.showWasteAccountScreen = true;
    } else {
      this.showInternalDepotScreen = true;
    }
  }

  // Add this method to handle account selection (call this when an account is selected)
  handleAccountSelected(event) {
    const selectedAccount = event.detail;
    this.selectedAccountId = selectedAccount.Id;
    this.showWasteAccountScreen = false;
    this.showInternalDepotScreen = false;
    this.showRecordForm = true;
    this.showBottomFooter = false;
  }

  handleTypeChange(event) {
    console.log("event.target.value", event.target.value);
    this.defaultType = event.target.value;
    this.selectedAccountId = null; // Reset account selection when type changes
  }

  handleBack() {
    this.showAppointmentScreen = false;
    this.showRecordForm = true;
    this.showBottomFooter = false;
    this.showWasteAccountScreen = false;
    this.showInternalDepotScreen = false;

    this.selectedRows = [];
    this.workOrderId = "";
    this.disableNextButton = true;
  }

  handleCancel(event) {
    event.preventDefault();
    const selectedEvent = new CustomEvent("workordercreated", {
      detail: event.detail
    });
    this.dispatchEvent(selectedEvent);
  }

  handleWasteAccountSelection(event) {
    const selectedRows = event.detail.selectedRows;
    if (selectedRows.length > 0) {
      this.handleAccountSelected({ detail: selectedRows[0] });
    }
  }

  handleInternalDepotSelection(event) {
    const selectedRows = event.detail.selectedRows;
    if (selectedRows.length > 0) {
      this.handleAccountSelected({ detail: selectedRows[0] });
    }
  }

  handleSelect() {
    this.showAppointmentScreen = false;
    this.showRecordForm = true;
    this.showBottomFooter = false;
  }

  handleWorkOrderCreated(event) {
    console.log("handleWorkOrderCreated", event.detail);
    this.showAppointmentScreen = false;
    this.showRecordForm = true;
    //Fire an event to the parent component
    const selectedEvent = new CustomEvent("workordercreated", {
      detail: event.detail
    });
    this.dispatchEvent(selectedEvent);
  }

  handleSubmit(event) {
    event.preventDefault();
    //Get the correct WorkType Id based on the defaultType
    const workType = this.workTypes.find(
      (workType) => workType.Name === this.defaultType
    );

    this.showSpinner = true;
    console.log("selectedAccountId", this.selectedAccountId);

    createInternalWorkOrder({
      subject: this.defaultSubject,
      workTypeId: workType.Id,
      parentWorkOrderId: this.workOrderId,
      accountId: this.selectedAccountId
    })
      .then((result) => {
        console.log("result", JSON.stringify(result));
        this.newWorkOrderId = result.workOrderId;
        this.newServiceAppointmentId = result.serviceAppointmentId;
        this.showSpinner = false;
        this.showToastSuccess();
        this.showRecordForm = false;
        this.showStartTravel = true;
      })
      .catch((error) => {
        console.log("error", error);
        this.showSpinner = false;
        this.showToastError();
      });
  }

  showToastSuccess() {
    const event = new ShowToastEvent({
      title: "Success",
      message: "The Internal Work Order has been created",
      variant: "success"
    });
    this.dispatchEvent(event);
  }

  showToastError() {
    const event = new ShowToastEvent({
      title: "Error",
      message: "An error occurred while creating the Internal Work Order",
      variant: "error"
    });
    this.dispatchEvent(event);
  }

  handleRowSelection(event) {
    const selectedRows = event.detail.selectedRows;
    if (selectedRows.length > 0) {
      this.selectedRows = selectedRows;
      this.workOrderId = selectedRows[0].ParentRecordId;
      this.showAppointmentScreen = false;
      this.showRecordForm = true;
      this.showBottomFooter = false;
    }
  }
  get variables() {
    return {
      userId: ID
    };
  }

  get formElementClass() {
    return `slds-form-element slds-m-top_medium slds-m-bottom_x-small ${!this.workOrderId ? "slds-has-error" : ""}`;
  }

  get serviceAppointmentsVariables() {
    // Get the dates for last week's start and next week's end
    const today = new Date();
    const lastWeekStart = new Date(today);
    lastWeekStart.setDate(today.getDate() - 2); // Beginning of last week
    const nextWeekEnd = new Date(today);
    nextWeekEnd.setDate(today.getDate() + 2); // End of next week

    console.log("lastWeekStart", lastWeekStart);
    console.log("nextWeekEnd", nextWeekEnd);

    return {
      serviceResourceId: this.serviceResourceId,
      startDate: { value: lastWeekStart.toISOString() },
      endDate: { value: nextWeekEnd.toISOString() }
    };
  }
}