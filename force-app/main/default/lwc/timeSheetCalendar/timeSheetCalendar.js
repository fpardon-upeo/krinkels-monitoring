import { LightningElement, api, track } from "lwc";
import { loadStyle, loadScript } from "lightning/platformResourceLoader";
import FullCalendarJS from "@salesforce/resourceUrl/FullCalendar";
import getTimeSheet from "@salesforce/apex/TimeSheetController.getTimeSheet";
import updateTimeSheetEntry from "@salesforce/apex/TimeSheetController.updateTimeSheetEntry";
import updateAbsence from "@salesforce/apex/TimeSheetController.updateAbsence";
import { getRecordNotifyChange } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class TimeSheetCalendar extends LightningElement {
  @api recordId;

  // Record ID being handled (TimeSheetEntry or ResourceAbsence)
  @track recordIdBeingHandled;

  @track calendar;

  @track timeSheetEntries = [];
  @track resourceAbsences = [];

  // TimeSheet's ServiceResourceId/User
  @track timeSheetResourceId;

  @track startDate;
  @track endDate;

  @track isLoading = true;
  @track showModal = false;
  @track showTimeSheetEntryNewForm = false;
  @track showTimeSheetEntryEditForm = false;
  @track showResourceAbsenceNewForm = false;
  @track showResourceAbsenceEditForm = false;

  connectedCallback() {
    // Wait for DOM to be ready
    Promise.all([
      loadStyle(this, FullCalendarJS + "/lib/main.css"),
      loadScript(this, FullCalendarJS + "/lib/main.js")
    ])
      .then(() => {
        return getTimeSheet({ recordId: this.recordId });
      })
      .then((result) => {
        this.timeSheetResourceId = result.timeSheet.ServiceResourceId;

        if (result.timeSheet.StartDate) {
          this.startDate = result.timeSheet.StartDate;
        }

        if (result.timeSheet.EndDate) {
          this.endDate = result.timeSheet.EndDate;
        }

        if (result.timeSheet.TimeSheetEntries) {
          this.timeSheetEntries = [...result.timeSheet.TimeSheetEntries];
        }

        if (result.resourceAbsences) {
          this.resourceAbsences = [...result.resourceAbsences];
        }

        this.initializeCalendar();
        this.isLoading = false;
      })
      .catch((error) => {
        console.error("Error:", error);
        this.isLoading = false;
      });
  }

  initializeCalendar() {
    // Create end date at 23:59:59 of the end date
    let endDateLimit = new Date(this.endDate);
    endDateLimit.setHours(23, 59, 59, 999);

    const timeSheetEvents = this.timeSheetEntries.map((entry) => ({
      id: entry.Id,
      start: entry.StartTime,
      end: entry.EndTime,
      title: `TimeSheet Entry - ${entry.Subject}`,
      backgroundColor:
        entry.Type === "Normal Hours"
          ? "#6DA241"
          : entry.Type === "Travel Time"
            ? "#009FBD"
            : "#DAA520",
      borderColor:
        entry.Type === "Normal Hours"
          ? "#6DA241"
          : entry.Type === "Travel Time"
            ? "#009FBD"
            : "#DAA520",
      editable: true,
      extendedProps: {
        recordType: "TimeSheetEntry"
      }
    }));

    const absenceEvents = this.resourceAbsences.map((absence) => ({
      id: absence.Id,
      start: absence.Start,
      end: absence.End,
      title: `Absence: ${absence.Type}`,
      backgroundColor: "#c23934",
      borderColor: "#c23934",
      editable: true,
      extendedProps: {
        recordType: "ResourceAbsence"
      }
    }));

    const allEvents = [...timeSheetEvents, ...absenceEvents];

    const calendarEl = this.template.querySelector("div.fullcalendar");
    this.calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "timeGridDay",
      allDaySlot: false,
      slotMinTime: "06:00:00",
      slotMaxTime: "20:00:00",
      height: "auto",
      //Set initial date and Range as well
      initialDate: this.startDate,
      validRange: {
        start: this.startDate,
        end: endDateLimit
      },
      slotLabelFormat: {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      },
      eventTimeFormat: {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      },
      snapDuration: "00:30:00",
      events: allEvents,
      // Event styling
      eventDidMount: (info) => {
        // This will be called for each event when it's rendered
        const eventEl = info.el.querySelector(".fc-event-main");
        if (eventEl) {
          eventEl.style.color = "white";
          eventEl.style.fontSize = "15px";
          eventEl.style.fontWeight = "600";
        }
      },
      // Click event
      eventClick: (info) => {
        this.handleEventClick(info);
      },
      // Drag and drop event
      eventDrop: (info) => {
        // Format dates for Salesforce
        const startTime = info.event.start.toISOString();
        const endTime = info.event.end.toISOString();

        if (info.event.extendedProps.recordType === "TimeSheetEntry") {
          updateTimeSheetEntry({
            timeSheetEntryId: info.event.id,
            startTime: startTime,
            endTime: endTime
          })
            .then((result) => {
              // Update the local data with the server response
              this.timeSheetResourceId = result.timeSheet.ServiceResourceId;

              if (result.timeSheet.TimeSheetEntries) {
                this.timeSheetEntries = [...result.timeSheet.TimeSheetEntries];
              }

              if (result.resourceAbsences) {
                this.resourceAbsences = [...result.resourceAbsences];
              }

              // Notify LDS of the updated record
              getRecordNotifyChange([{ recordId: info.event.id }]);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        } else if (info.event.extendedProps.recordType === "ResourceAbsence") {
          updateAbsence({
            absenceId: info.event.id,
            startTime: startTime,
            endTime: endTime,
            timeSheetId: this.recordId
          })
            .then((result) => {
              // Update the local data with the server response
              this.timeSheetResourceId = result.timeSheet.ServiceResourceId;
              if (result.timeSheet.TimeSheetEntries) {
                this.timeSheetEntries = [...result.timeSheet.TimeSheetEntries];
              }

              if (result.resourceAbsences) {
                this.resourceAbsences = [...result.resourceAbsences];
              }

              // Notify LDS of the updated record
              getRecordNotifyChange([{ recordId: info.event.id }]);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      },
      // Resize event
      eventResize: (info) => {
        // Format dates for Salesforce
        const startTime = info.event.start;
        const endTime = info.event.end;

        if (info.event.extendedProps.recordType === "TimeSheetEntry") {
          updateTimeSheetEntry({
            timeSheetEntryId: info.event.id,
            startTime: startTime,
            endTime: endTime
          })
            .then((result) => {
              // Update the local data with the server response
              this.timeSheetResourceId = result.timeSheet.ServiceResourceId;
              if (result.timeSheet.TimeSheetEntries) {
                this.timeSheetEntries = [...result.timeSheet.TimeSheetEntries];
              }

              if (result.resourceAbsences) {
                this.resourceAbsences = [...result.resourceAbsences];
              }

              // Notify LDS of the updated record
              getRecordNotifyChange([{ recordId: info.event.id }]);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        } else if (info.event.extendedProps.recordType === "ResourceAbsence") {
          updateAbsence({
            absenceId: info.event.id,
            startTime: startTime,
            endTime: endTime,
            timeSheetId: this.recordId
          })
            .then((result) => {
              // Update the local data with the server response
              this.timeSheetResourceId = result.timeSheet.ServiceResourceId;
              if (result.timeSheet.TimeSheetEntries) {
                this.timeSheetEntries = [...result.timeSheet.TimeSheetEntries];
              }

              if (result.resourceAbsences) {
                this.resourceAbsences = [...result.resourceAbsences];
              }

              // Notify LDS of the updated record
              getRecordNotifyChange([{ recordId: info.event.id }]);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      },
      selectable: true,
      // When an empty row or cell is clicked
      dateClick: (info) => {
        this.handleDateClick(info);
      }
    });

    this.calendar.render();
  }

  /**
   * Opens the record page of the clicked event type (TimeSheetEntry or ResourceAbsence) so the user can edit it
   * @param {Object} info
   */

  handleEventClick(info) {
    const recordId = info.event.id;
    const recordType = info.event.extendedProps.recordType;

    if (recordType === "TimeSheetEntry") {
      this.showTimeSheetEntryEditForm = true;
      this.recordIdBeingHandled = recordId;
    } else if (recordType === "ResourceAbsence") {
      this.showResourceAbsenceEditForm = true;
      this.recordIdBeingHandled = recordId;
    }
  }

  /**
   * Opens the modal to create a new TimeSheetEntry or ResourceAbsence when the user clicks on an empty date/callendar cell
   * @param {Object} info
   */
  handleDateClick(info) {
    this.showModal = true;
  }

  /**
   * Closes the modal
   */
  handleCloseModal() {
    this.showModal = false;
  }

  handleCloseForm() {
    this.showTimeSheetEntryNewForm = false;
    this.showResourceAbsenceNewForm = false;
    this.showTimeSheetEntryEditForm = false;
    this.showResourceAbsenceEditForm = false;
  }

  /**
   * Opens the new TimeSheetEntry page
   */
  createTimeSheetEntry() {
    this.showModal = false;
    this.showResourceAbsenceNewForm = false;
    this.showTimeSheetEntryNewForm = true;
  }

  /**
   * Opens the new ResourceAbsence page
   */
  createResourceAbsence() {
    this.showModal = false;
    this.showTimeSheetEntryNewForm = false;
    this.showResourceAbsenceNewForm = true;
  }

  handleSuccess() {
    // Remove all events from the calendar
    const removeEvents = this.calendar.getEventSources();
    removeEvents.forEach((event) => {
      event.remove();
    });

    // Fetch again all the time sheet entries and resource absences
    getTimeSheet({ recordId: this.recordId })
      .then((result) => {
        // Update the local data with the server response
        this.timeSheetResourceId = result.timeSheet.ServiceResourceId;
        if (result.timeSheet.TimeSheetEntries) {
          this.timeSheetEntries = [...result.timeSheet.TimeSheetEntries];
        }

        if (result.resourceAbsences) {
          this.resourceAbsences = [...result.resourceAbsences];
        }

        // Create new events
        const timeSheetEvents = this.timeSheetEntries.map((entry) => ({
          id: entry.Id,
          start: entry.StartTime,
          end: entry.EndTime,
          title: `TimeSheet Entry - ${entry.Subject}`,
          backgroundColor:
            entry.Type === "Normal Hours"
              ? "#6DA241"
              : entry.Type === "Travel Time"
                ? "#009FBD"
                : "#DAA520",
          borderColor:
            entry.Type === "Normal Hours"
              ? "#6DA241"
              : entry.Type === "Travel Time"
                ? "#009FBD"
                : "#DAA520",
          editable: true,
          extendedProps: {
            recordType: "TimeSheetEntry"
          }
        }));

        const absenceEvents = this.resourceAbsences.map((absence) => ({
          id: absence.Id,
          start: absence.Start,
          end: absence.End,
          title: `Absence: ${absence.Type}`,
          backgroundColor: "#c23934",
          borderColor: "#c23934",
          editable: true,
          extendedProps: {
            recordType: "ResourceAbsence"
          }
        }));

        const allEvents = [...timeSheetEvents, ...absenceEvents];

        // Add new events to calendar
        this.calendar.addEventSource(allEvents);

        this.showResourceAbsenceNewForm = false;
        this.showTimeSheetEntryNewForm = false;
        this.showResourceAbsenceEditForm = false;
        this.showTimeSheetEntryEditForm = false;
        this.showModal = false;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}