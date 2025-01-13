/**
 * Created by fpardon on 15/11/2024.
 */

import { LightningElement, api, wire, track } from "lwc";
import { gql, graphql, refreshGraphQL } from "lightning/uiGraphQLApi";
import { getRecord, updateRecord, createRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { CloseActionScreenEvent } from "lightning/actions";
import ID from "@salesforce/user/Id";
import getBreakRecordTypeId from "@salesforce/apex/TimeSheetController.getBreakRecordTypeId";
//LABELS
import AppointmentPicker_Next_Button from "@salesforce/label/c.AppointmentPicker_Next_Button";
import AppointmentPicker_No_Results from "@salesforce/label/c.AppointmentPicker_No_Results";
import AppointmentPicker_End_Day_Button from "@salesforce/label/c.AppointmentPicker_End_Day_Button";
import AppointmentPicker_Select_Next_Appointment_Button from "@salesforce/label/c.AppointmentPicker_Select_Next_Appointment_Button";
import AppointmentPicker_Appointments_Header from "@salesforce/label/c.AppointmentPicker_Appointments_Header";
import AppointmentPicker_Travel_Started_Toast from "@salesforce/label/c.AppointmentPicker_Travel_Started_Toast";
import AppointmentPicker_Day_Ended_Toast from "@salesforce/label/c.AppointmentPicker_Day_Ended_Toast";
import AppointmentPicker_Spinner from "@salesforce/label/c.AppointmentPicker_Spinner";
import AppointmentPicker_Incomplete_Work_Steps_Message from "@salesforce/label/c.AppointmentPicker_Incomplete_Work_Steps_Message";
import AppointmentPicker_Next_Action_Text from "@salesforce/label/c.AppointmentPicker_Next_Action_Text";
import AppointmentPicker_Next_Action_Sub_Text from "@salesforce/label/c.AppointmentPicker_Next_Action_Sub_Text";
import AppointmentPicker_End_Day_Button_Sub_Text from "@salesforce/label/c.AppointmentPicker_End_Day_Button_Sub_Text";
import StartDay_KM_Card_Title from "@salesforce/label/c.StartDay_KM_Card_Title";
import StartDay_KM_Back_Button_Text from "@salesforce/label/c.StartDay_KM_Back_Button_Text";
import StartDay_KM_Save_Button_Text from "@salesforce/label/c.StartDay_KM_Save_Button_Text";
import AppointmentPicker_Break_Button_Sub_Text from "@salesforce/label/c.AppointmentPicker_Break_Button_Sub_Text";
import AppointmentPicker_Break_Button_text from "@salesforce/label/c.AppointmentPicker_Break_Button_Text";
import AppointmentPicker_Break_Form_Title from "@salesforce/label/c.AppointmentPicker_Break_Form_Title";
import AppointmentPicker_Break_Duration_Label from "@salesforce/label/c.AppointmentPicker_Break_Duration_Label";
import AppointmentPicker_Save_Button from "@salesforce/label/c.AppointmentPicker_Save_Button";
import AppointmentPicker_Break_Success_Message from "@salesforce/label/c.AppointmentPicker_Break_Success_Message";
import StartDay_Internal_Button_Sub_Text from "@salesforce/label/c.StartDay_Internal_Button_Sub_Text";
import StartDay_Internal_Button_Text from "@salesforce/label/c.StartDay_Internal_Button_Text";
import AppointmentPicker_Cancel_Button from "@salesforce/label/c.AppointmentPicker_Cancel_Button";
import AppointmentPicker_Last_Depot_Text from "@salesforce/label/c.AppointmentPicker_Last_Depot_Text";
import AppointmentPicker_Last_Depot_Sub_Text from "@salesforce/label/c.AppointmentPicker_Last_Depot_Sub_Text";
import AppointmentPicker_Simple_Checkout_Button_Text from "@salesforce/label/c.AppointmentPicker_Simple_Checkout_Button_Text";
import AppointmentPicker_Simple_Checkout_Button_Sub_Text from "@salesforce/label/c.AppointmentPicker_Simple_Checkout_Button_Sub_Text";
import AppointmentPicker_InternalWO_Title from "@salesforce/label/c.AppointmentPicker_InternalWO_Title";
import AppointmentPicker_Select_Appointment_Title from "@salesforce/label/c.AppointmentPicker_Select_Appointment_Title";
import AppointmentPicker_Success_Toast_Title from "@salesforce/label/c.AppointmentPicker_Success_Toast_Title";

import { NavigationMixin } from "lightning/navigation";
import { ToastTypes } from "c/utilsImageCapture";

import firstWorkOrderChecker from "@salesforce/apex/FirstWorkOrderChecker.hasFirstWorkOrder";

export default class NextAppointmentPicker extends NavigationMixin(
  LightningElement
) {
  //--------------------------------------API------------------------------------------//

  @api recordId;
  showSpinner = true;
  ID = ID;
  serviceResourceId;
  serviceAppointments;
  timesheetId;
  workOrderId;
  nextWorkOrderId;
  serviceAppointmentId;
  data = [];
  otherWorkSteps;
  toastType = null;
  toastMessage = "";
  breakDuration = 15;
  breakRecordTypeId;
  graphQLServiceAppointments;
  startingLocationType = "";
  endingLocationType = "";

  breakDurationOptions = [
    { label: "15", value: 15 },
    { label: "30", value: 30 },
    { label: "45", value: 45 },
    { label: "60", value: 60 }
  ];

  //--------------------------------------VISIBILITY----------------------------------------//
  disableNextButton = true;
  showInitialScreen = false;
  showAppointmentScreen = false;
  showHasIncompleteWorkSteps = false;
  showMilageEntryScreen = false;
  showWorkOrderScreen = false;
  showBreakForm = false;
  hasFirstWorkOrder = false;
  notifyCustomer = false;
  selectedRows = [];
  mileageType = "";
  endingDayAtDepot = false;
  labels = {
    AppointmentPicker_Next_Button,
    AppointmentPicker_No_Results,
    AppointmentPicker_End_Day_Button,
    AppointmentPicker_Select_Next_Appointment_Button,
    AppointmentPicker_Appointments_Header,
    AppointmentPicker_Travel_Started_Toast,
    AppointmentPicker_Day_Ended_Toast,
    AppointmentPicker_Spinner,
    AppointmentPicker_Incomplete_Work_Steps_Message,
    AppointmentPicker_Next_Action_Text,
    AppointmentPicker_Next_Action_Sub_Text,
    AppointmentPicker_End_Day_Button_Sub_Text,
    StartDay_KM_Card_Title,
    StartDay_KM_Back_Button_Text,
    StartDay_KM_Save_Button_Text,
    AppointmentPicker_Break_Button_Sub_Text,
    AppointmentPicker_Break_Button_text,
    AppointmentPicker_Break_Form_Title,
    AppointmentPicker_Break_Duration_Label,
    AppointmentPicker_Save_Button,
    AppointmentPicker_Break_Success_Message,
    StartDay_Internal_Button_Sub_Text,
    StartDay_Internal_Button_Text,
    AppointmentPicker_Cancel_Button,
    AppointmentPicker_Last_Depot_Text,
    AppointmentPicker_Last_Depot_Sub_Text,
    AppointmentPicker_Simple_Checkout_Button_Text,
    AppointmentPicker_Simple_Checkout_Button_Sub_Text,
    AppointmentPicker_InternalWO_Title,
    AppointmentPicker_Select_Appointment_Title,
    AppointmentPicker_Success_Toast_Title
  };

  columns = [
    {
      label: this.labels.AppointmentPicker_Appointments_Header,
      fieldName: "Appointment",
      type: "text",
      wrapText: true
    }
  ];

  //--------------------------------------LIFECYCLE----------------------------------------//

  connectedCallback() {
    console.log("connectedCallback");
    console.log(this.recordId);
    getBreakRecordTypeId().then((result) => {
      this.breakRecordTypeId = result;
      console.log("Break Record Type Id: ", this.recordTypeId);
    });
    firstWorkOrderChecker().then((result) => {
      console.log("hasFirstWorkOrder", result);
      this.hasFirstWorkOrder = result;
    });
  }

  //--------------------------------------WIRE-----------------------------------------//

  @wire(getRecord, { recordId: "$recordId", fields: ["WorkStep.WorkOrderId"] })
  wiredWorkOrder({ error, data }) {
    if (data) {
      console.log(data);
      console.log(data.fields.WorkOrderId.value);
      this.workOrderId = data.fields.WorkOrderId.value;
    } else if (error) {
      console.log(error);
    }
  }

  @wire(graphql, {
    query: gql`
      query OtherWorkSteps($workOrderId: ID, $currentStepId: ID) {
        uiapi {
          query {
            WorkStep(
              where: {
                and: [
                  { ParentRecordId: { eq: $workOrderId } }
                  { Id: { ne: $currentStepId } }
                ]
              }
            ) {
              edges {
                node {
                  Id
                  Status {
                    value
                    displayValue
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: "$workStepVariables"
  })
  workStepQueryResult({ error, data }) {
    if (data) {
      this.otherWorkSteps = data.uiapi.query.WorkStep.edges;
      console.log("other worksteps", this.otherWorkSteps);
      //Check if all other work steps are completed
      let allCompleted = true;
      console.log("recordId", this.recordId);
      this.otherWorkSteps.forEach((step) => {
        const status = step.node.Status.value;
        if (
          status !== "Completed" &&
          status !== "Not Applicable" &&
          step.node.Id !== this.recordId
        ) {
          allCompleted = false;
        }
      });
      console.log("allCompleted", allCompleted);
      if (allCompleted) {
        //Wait 1 second before showing the initial screen
        setTimeout(() => {
          this.showSpinner = false;
          this.showInitialScreen = true;
          this.showHasIncompleteWorkSteps = false;
        }, 500);
      } else {
        this.showSpinner = false;
        this.showInitialScreen = false;
        this.showHasIncompleteWorkSteps = true;
      }
    } else if (error) {
      console.log(error);
      this.showSpinner = false;
    }
  }

  @wire(graphql, {
    query: gql`
      query ServiceAppointment($workOrderId: ID) {
        uiapi {
          query {
            ServiceAppointment(
              where: { ParentRecordId: { eq: $workOrderId } }
            ) {
              edges {
                node {
                  Id
                  Status {
                    value
                    displayValue
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: "$workOrderVariables"
  })
  serviceAppointmentQueryResult({ error, data }) {
    if (data) {
      this.serviceAppointmentId =
        data.uiapi.query.ServiceAppointment.edges[0].node.Id;
      console.log("service appointment id", this.serviceAppointmentId);
    } else if (error) {
      console.log(error);
    }
  }

  @wire(graphql, {
    query: gql`
      query ServiceResources($userId: ID) {
        uiapi {
          query {
            ServiceResource(where: { RelatedRecordId: { eq: $userId } }) {
              edges {
                node {
                  Id
                }
              }
            }
          }
        }
      }
    `,
    variables: "$variables"
  })
  resourcesQueryResult({ error, data }) {
    if (data) {
      this.serviceResourceId =
        data.uiapi.query.ServiceResource.edges[0].node.Id;
      console.log("service resource id", this.serviceResourceId);
    } else if (error) {
      console.log(error);
    }
  }

  @wire(graphql, {
    query: gql`
      query ServiceAppointments(
        $serviceResourceId: ID
        $startDate: DateTimeInput
        $endDate: DateTimeInput
        $saId: ID
      ) {
        uiapi {
          query {
            AssignedResource(
              where: {
                and: [
                  { ServiceResourceId: { eq: $serviceResourceId } }
                  { Id: { ne: $saId } }
                  { ServiceAppointment: { Status: { ne: "Completed" } } }
                  { ServiceAppointment: { Status: { ne: "Unscheduled" } } }
                  { ServiceAppointment: { Status: { ne: "Cannot Complete" } } }
                  { ServiceAppointment: { Status: { ne: "Cancelled" } } }
                  { ServiceAppointment: { Status: { ne: "In Progress" } } }
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
  appointmentsQueryResult(result) {
    this.graphQLServiceAppointments = result;
    if (result.data) {
      this.data = result.data.uiapi.query.AssignedResource.edges.map(
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
          ParentRecordId: appointment.ParentRecordId.value
        };
      });
      console.log(JSON.stringify(this.serviceAppointments));
    } else if (result.error) {
      console.log(result.error);
    }
  }

  @api
  async handleServiceAppointmentsRefresh() {
    try {
      await refreshGraphQL(this.graphQLServiceAppointments);
    } catch (error) {
      console.error("Error refreshing service appointments", error);
    }
  }

  @wire(graphql, {
    query: gql`
      query TimeSheet($resourceId: ID, $today: DateInput) {
        uiapi {
          query {
            TimeSheet(
              where: {
                and: [
                  { ServiceResourceId: { eq: $resourceId } }
                  { StartDate: { eq: $today } }
                  { EndDate: { eq: $today } }
                ]
              }
            ) {
              edges {
                node {
                  Id
                }
              }
            }
          }
        }
      }
    `,
    variables: "$timeSheetVariables"
  })
  timeSheetQueryResult({ error, data }) {
    if (data) {
      console.log("timesheet data", data);
      //check first if the edges is not empty
      if (data.uiapi.query.TimeSheet.edges.length === 0) {
        console.log("timesheet is empty");
      } else {
        this.timeSheetId = data.uiapi.query.TimeSheet.edges[0].node.Id;
        console.log("timesheet id", this.timeSheetId);
      }
    } else if (error) {
      console.log(error);
    }
  }

  //--------------------------------------LIFECYCLE------------------------------------//

  //--------------------------------------HANDLERS-------------------------------------//

  handleBubbleNotification(event) {
    this.notifyCustomer = event.detail.checked;
  }

  handleRowSelection(event) {
    const selectedRows = event.detail.selectedRows;
    console.log("selectedRows", JSON.stringify(selectedRows));
    this.selectedRows = selectedRows;
    this.nextWorkOrderId = selectedRows[0].ParentRecordId;
    this.disableNextButton = selectedRows.length === 0;
  }

  handleTakeBreakClicked() {
    console.log("Take break clicked");
    this.showInitialScreen = false;
    this.showBreakForm = true;
  }

  handleSimplyClose() {
    console.log("Simply close clicked");
    this.setWorkStepStatus();
    this.setCurrentServiceAppointStatus();
    this.setParentWorkOrderStatus();
    setTimeout(() => {
      this[NavigationMixin.Navigate]({
        type: "standard__webPage",
        attributes: {
          url: `com.salesforce.fieldservice://v1/sObject/${this.workOrderId}`
        }
      });
    }, 500);
  }

  handleSetAppointmentClicked() {
    console.log("Set appointment clicked");
    this.showInitialScreen = false;
    this.showAppointmentScreen = true;
  }

  handleInternalOrderClicked() {
    console.log("Internal order clicked");
    this.showInitialScreen = false;
    this.showWorkOrderScreen = true;
  }

  handleEndDayWithDepotClicked() {
    console.log("End day with depot clicked");
    this.showInitialScreen = false;
    this.showMilageEntryScreen = true;
    this.endingDayAtDepot = true;
    this.mileageType = "Ending";
    this.endingLocationType = "Depot";
    this.startingLocationType = "Customer";
  }

  async handleWorkOrderCreated(event) {
    await this.handleServiceAppointmentsRefresh();
    this.showWorkOrderScreen = false;
    this.showInitialScreen = true;
  }

  handleBreakDurationChange(event) {
    console.log("break duration", event.detail.value);
    console.log("type of break duration", typeof event.detail.value);
    //Convert the string to a number
    this.breakDuration = parseInt(event.detail.value);
  }

  handleSelect() {
    console.log("selectedRows", JSON.stringify(this.selectedRows));
    console.log("selectedRows Id", this.selectedRows[0].Id);
    this.setWorkStepStatus();
    this.setCurrentServiceAppointStatus();
    this.setParentWorkOrderStatus();
    this.setNextServiceAppointStatus();
    this.setNextWorkOrderStatus();
    this.toastType = ToastTypes.Success;
    this.toastMessage = this.labels.AppointmentPicker_Travel_Started_Toast;

    setTimeout(() => {
      this[NavigationMixin.Navigate]({
        type: "standard__webPage",
        attributes: {
          url: `com.salesforce.fieldservice://v1/sObject/${this.nextWorkOrderId}`
        }
      });
    }, 500);
  }

  handleEndWorkingDay() {
    console.log("End working day clicked");
    this.showInitialScreen = false;
    this.showMilageEntryScreen = true;
  }

  handleEndDayClicked() {
    console.log("End day clicked");
    this.setWorkStepStatus();
    this.setCurrentServiceAppointStatus();
    this.setParentWorkOrderStatus();
    this.showInitialScreen = false;
    this.showBreakForm = false;
    this.mileageType = "Ending";
    this.showMilageEntryScreen = true;
  }

  handleSaveBreak() {
    this.setWorkStepStatus();
    this.setCurrentServiceAppointStatus();
    this.setParentWorkOrderStatus();

    //Create a new ResourceAbsence record
    //First set the current date time
    let startDate = new Date().toISOString();

    //Add the break duration to the start date
    let endDate = new Date(
      new Date(startDate).getTime() + this.breakDuration * 60000
    ).toISOString();

    const fields = {};
    fields["ResourceId"] = this.serviceResourceId;
    fields["Start"] = startDate;
    fields["End"] = endDate;
    fields["Type"] = "Standard";
    fields["RecordTypeId"] = this.breakRecordTypeId;

    const recordInput = { apiName: "ResourceAbsence", fields };
    createRecord(recordInput)
      .then(() => {
        console.log("ResourceAbsence record created");

        const toastEvent = new ShowToastEvent({
          title: this.labels.AppointmentPicker_Success_Toast_Title,
          message: this.labels.AppointmentPicker_Break_Success_Message,
          variant: "success"
        });

        this.dispatchEvent(toastEvent);
        setTimeout(() => {
          this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
              url: `com.salesforce.fieldservice://v1/sObject/${this.workOrderId}`
            }
          });
        }, 500);
      })
      .catch((error) => {
        console.log("Error creating ResourceAbsence record", error);
      });
  }

  handleTouchStart(event) {
    event.currentTarget.classList.add("touch-active");
  }

  handleTouchEnd(event) {
    // Store the element since we'll need it after the timeout
    const element = event.currentTarget;

    // Add a small delay before removing the class
    setTimeout(() => {
      element.classList.remove("touch-active");
    }, 150); // 150ms delay
  }

  handleMileageSuccess(event) {
    this.toastType = ToastTypes.Success;
    this.toastMessage = this.labels.AppointmentPicker_Day_Ended_Toast;
    if (this.endingDayAtDepot === false) {
      setTimeout(() => {
        this[NavigationMixin.Navigate]({
          type: "standard__webPage",
          attributes: {
            url: `com.salesforce.fieldservice://v1/sObject/${this.workOrderId}`
          }
        });
      }, 500);
    } else {
      this.showMilageEntryScreen = false;
      this.showAppointmentScreen = true;
    }
  }

  //--------------------------------------HELPERS--------------------------------------//

  setCurrentServiceAppointStatus() {
    const fields = {};
    fields["Id"] = this.serviceAppointmentId;
    fields["Status"] = "Completed";
    const recordInput = { fields };
    console.log("recordInput", JSON.stringify(recordInput));
    updateRecord(recordInput)
      .then(() => {
        console.log("Service Appointment status updated");
      })
      .catch((error) => {
        console.log("Error updating service appointment status", error);
      });
  }

  setNextServiceAppointStatus() {
    const fields = {};
    fields["Id"] = this.selectedRows[0].Id;
    fields["Status"] = "Travelling";
    fields["Trigger_Notification_to_Customer__c"] = this.notifyCustomer;
    const recordInput = { fields };
    console.log("recordInput service appointment", JSON.stringify(recordInput));
    updateRecord(recordInput)
      .then(() => {
        console.log("Service Appointment status updated");
      })
      .catch((error) => {
        console.log("Error updating service appointment status", error);
      });
  }

  setNextWorkOrderStatus() {
    const fields = {};
    fields["Id"] = this.nextWorkOrderId;
    fields["Status"] = "Travelling";
    fields["Trigger_Notification_to_Customer__c"] = this.notifyCustomer;
    console.log("hasFirstWorkOrder", this.hasFirstWorkOrder);
    if (this.hasFirstWorkOrder === false) {
      console.log("setting first work order");
      fields["Is_First_of_Day__c"] = true;
    }
    const recordInput = { fields };
    console.log("recordInput work order", JSON.stringify(recordInput));
    updateRecord(recordInput)
      .then((result) => {
        console.log("Work Order status updated", result);
        console.log(result);
      })
      .catch((error) => {
        console.log("Error updating work order status", error);
      });
  }

  setParentWorkOrderStatus() {
    const fields = {};
    fields["Id"] = this.workOrderId;
    fields["Status"] = "Completed";
    const recordInput = { fields };
    console.log("recordInput", JSON.stringify(recordInput));
    updateRecord(recordInput)
      .then(() => {
        console.log("Work Order status updated");
      })
      .catch((error) => {
        console.log("Error updating work order status", error);
      });
  }

  setWorkStepStatus() {
    const fields = {};
    fields["Id"] = this.recordId;
    fields["Status"] = "Completed";
    const recordInput = { fields };
    console.log("recordInput", JSON.stringify(recordInput));
    updateRecord(recordInput)
      .then(() => {
        console.log("Work Step status updated");
      })
      .catch((error) => {
        console.log("Error updating work step status", error);
      });
  }

  hideToast() {
    this.toastType = null;
  }

  //--------------------------------------GETTERS-----------------------------------//

  get serviceAppointmentsVariables() {
    // Get the dates for last week's start and next week's end
    const today = new Date();
    const lastWeekStart = new Date(today);
    lastWeekStart.setDate(today.getDate() - today.getDay() - 7); // Beginning of last week
    const nextWeekEnd = new Date(today);
    nextWeekEnd.setDate(today.getDate() - today.getDay() + 21); // End of next week

    return {
      serviceResourceId: this.serviceResourceId,
      startDate: { value: lastWeekStart.toISOString() },
      endDate: { value: nextWeekEnd.toISOString() },
      saId: this.serviceAppointmentId
    };
  }

  get workOrderVariables() {
    return {
      workOrderId: this.workOrderId
    };
  }

  get workStepVariables() {
    return {
      workOrderId: this.workOrderId,
      currentStepId: this.recordId
    };
  }

  get variables() {
    return {
      userId: ID
    };
  }

  get timeSheetVariables() {
    let todayAsDate = new Date();
    let today = todayAsDate.toISOString();
    today = today.split("T")[0];
    console.log("today", today);
    return {
      resourceId: this.serviceResourceId,
      today: { value: today }
    };
  }

  get shouldShowToast() {
    return this.toastType == null ? false : true;
  }

  handleClose() {
    this.disableNextButton = true;

    this.showAppointmentScreen = false;
    this.showHasIncompleteWorkSteps = false;
    this.showMilageEntryScreen = false;
    this.showWorkOrderScreen = false;
    this.showBreakForm = false;

    this.showInitialScreen = true;
  }
}