/**
 * Created by Frederik on 11/19/2024.
 */

import { LightningElement, wire, api } from "lwc";
import ID from "@salesforce/user/Id";
import { gql, graphql } from "lightning/uiGraphQLApi";
import AppointmentPicker_Appointments_Header from "@salesforce/label/c.AppointmentPicker_Appointments_Header";
import TimeSheetEntryForm_BackButton from "@salesforce/label/c.TimeSheetEntryForm_BackButton";
import TimeSheetEntryForm_SelectWork_Text from "@salesforce/label/c.TimeSheetEntryForm_SelectWork_Text";
import TimeSheetEntryForm_ContinueButton from "@salesforce/label/c.TimeSheetEntryForm_ContinueButton";
import TimeSheetEntryForm_CancelButton from "@salesforce/label/c.TimeSheetEntryForm_CancelButton";
import TimeSheetEntryForm_SaveButton from "@salesforce/label/c.TimeSheetEntryForm_SaveButton";
import TimeSheetEntryForm_WorkOrder_Text from "@salesforce/label/c.TimeSheetEntryForm_WorkOrder_Text";
import TimeSheetEntryForm_Required_Label from "@salesforce/label/c.TimeSheetEntryForm_Required_Label";
import TimeSheetEntryForm_MachineText from "@salesforce/label/c.TimeSheetEntryForm_MachineText";
import TimeSheetEntryForm_NightWorkText from "@salesforce/label/c.TimeSheetEntryForm_NightWorkText";
import TimeSheetEntryForm_WO_Text from "@salesforce/label/c.TimeSheetEntryForm_WO_Text";
import TimeSheetEntryForm_SelectWorkOrder from "@salesforce/label/c.TimeSheetEntryForm_SelectWorkOrder";

export default class TimesheetEntryForm extends LightningElement {
  @api timesheetEntryId;
  @api startDate;
  @api endDate;
  @api timeSheetId;
  @api serviceResourceId;
  @api startDateAndHours;
  @api endDateAndHours;

  labelsText = {
    TimeSheetEntryForm_BackButton,
    TimeSheetEntryForm_SelectWork_Text,
    TimeSheetEntryForm_ContinueButton,
    TimeSheetEntryForm_CancelButton,
    TimeSheetEntryForm_SaveButton,
    TimeSheetEntryForm_WorkOrder_Text,
    TimeSheetEntryForm_Required_Label,
    TimeSheetEntryForm_MachineText,
    TimeSheetEntryForm_NightWorkText,
    TimeSheetEntryForm_WO_Text,
    TimeSheetEntryForm_SelectWorkOrder
  };

  get buttonLabel() {
    return this.workOrderId
      ? this.labelsText.TimeSheetEntryForm_WO_Text
      : this.labelsText.TimeSheetEntryForm_SelectWorkOrder;
  }

  get variables() {
    return {
      userId: ID
    };
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

  get typeFieldOptions() {
    // Return a comma-separated string of values to exclude
    return "Machine,Night Work";
  }

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

    console.log(JSON.stringify(this.labelsText));
  }

  labels = {
    AppointmentPicker_Appointments_Header
  };

  columns = [
    {
      label: this.labels.AppointmentPicker_Appointments_Header,
      fieldName: "Appointment",
      type: "text",
      wrapText: true
    }
  ];

  serviceAppointments = [];
  data;
  showAppointmentScreen = false;
  showRecordForm = false;
  selectedRows = [];
  workOrderId;
  disableNextButton = true;
  showBottomFooter = false;

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

  handleStartTimeChange(event) {
    this.startDate = event.detail.value;
  }

  handleEndTimeChange(event) {
    this.endDate = event.detail.value;
  }

  handleSetAppointmentClicked() {
    console.log(
      "Service Appointments:",
      JSON.stringify(this.serviceAppointments)
    );

    this.showRecordForm = false;
    this.showAppointmentScreen = true;
    this.showBottomFooter = true;
  }

  handleBack() {
    this.showAppointmentScreen = false;
    this.showRecordForm = true;
    this.showBottomFooter = false;
  }

  handleCancel(event) {
    event.preventDefault();

    // Dispatch a custom event that the parent will listen to
    this.dispatchEvent(new CustomEvent("closeform"));
  }

  handleSelect() {
    this.handleBack();
  }

  handleTimesheetCreated(event) {
    console.log("handleTimesheetCreated", event.detail);
    this.showAppointmentScreen = false;
    this.showRecordForm = true;
    //Fire an event to the parent component
    const selectedEvent = new CustomEvent("timesheetcreated", {
      detail: event.detail
    });
    this.dispatchEvent(selectedEvent);
  }

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
}