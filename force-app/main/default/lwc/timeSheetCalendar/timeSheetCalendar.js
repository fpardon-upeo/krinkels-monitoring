import { LightningElement, api, track } from "lwc";
import { loadStyle, loadScript } from "lightning/platformResourceLoader";
import FullCalendarJS from "@salesforce/resourceUrl/FullCalendar";
import getTimeSheet from "@salesforce/apex/TimeSheetController.getTimeSheet";
import updateTimeSheetEntry from "@salesforce/apex/TimeSheetController.updateTimeSheetEntry";
import updateAbsence from "@salesforce/apex/TimeSheetController.updateAbsence";
import submitTimeSheet from "@salesforce/apex/TimeSheetController.submitTimeSheet";
import getBreakRecordTypeId from "@salesforce/apex/TimeSheetController.getBreakRecordTypeId";
import { getRecordNotifyChange } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class TimeSheetCalendar extends LightningElement {
  @api recordId;

  // Record ID being handled (TimeSheetEntry or ResourceAbsence)
  @track recordIdBeingHandled;

  // Record ID being handled (MileageEntry)
  @track mileageEntryIdBeingHandled;

  // Break record type ID
  @track breakRecordTypeId;

  // TimeSheet's ServiceResourceId/User
  @track timeSheetResourceId;

  @track calendar;

  @track timeSheetEntries = [];
  @track resourceAbsences = [];
  @track mileageEntries = [];

  @track inMileageEntries = [];
  @track outMileageEntries = [];
  @track otherMileageEntries = [];

  @track startDate;
  @track endDate;
  @track startHoursLimit;
  @track endHoursLimit;
  @track startDateAndHours;
  @track endDateAndHours;

  @track workHours = 0;
  @track breakHours = 0;
  @track kmAmount = 0;
  @track travelHours = 0;

  @track isLoading = true;
  @track showNewTimeSheetOrAbsenceModal = false;
  @track showMileageInfoModal = false;
  @track showMileageEntries = false;
  @track showInMileageMessage = false;
  @track showOutMileageMessage = false;
  @track showOutMileageEntryNewForm = false;
  @track showInMileageEntryNewForm = false;
  @track showTimeSheetEntryNewForm = false;
  @track showTimeSheetEntryEditForm = false;
  @track showResourceAbsenceNewForm = false;
  @track showResourceAbsenceEditForm = false;
  @track showMileageEntryEditForm = false;

  connectedCallback() {
    // Wait for DOM to be ready
    Promise.all([
      loadStyle(this, FullCalendarJS + "/lib/main.css"),
      loadScript(this, FullCalendarJS + "/lib/main.min.js"),
      loadStyle(this, FullCalendarJS + "/lib/custom.css")
    ])
      .then(() => {
        return getTimeSheet({ recordId: this.recordId });
      })
      .then((result) => {
        if (result.timeSheet) {
          this.workHours = result.timeSheet.Total_Normal_Hours__c || 0;
          this.travelHours = result.timeSheet.Total_Travel_Time__c || 0;
          this.kmAmount = result.timeSheet.Total_KM__c || 0;
          this.totalHours = result.timeSheet.Total_Hours__c || 0;
        }

        // Get the Break record type ID
        if (result.resourceAbsences[0]?.RecordTypeId) {
          this.breakRecordTypeId = result.resourceAbsences[0].RecordTypeId;
        } else {
          getBreakRecordTypeId()
            .then((result) => {
              console.log("breakRecordTypeId", result);
              this.breakRecordTypeId = result;
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }

        // Get the TimeSheet's ServiceResourceId/User
        this.timeSheetResourceId = result.timeSheet.ServiceResourceId;

        if (result.timeSheet.StartDate) {
          this.startDate = result.timeSheet.StartDate;
        }

        if (result.timeSheet.EndDate) {
          this.endDate = result.timeSheet.EndDate;
        }

        if (result.timeSheet.Mileage_Entries__r) {
          this.mileageEntries = [...result.timeSheet.Mileage_Entries__r];

          // Reset arrays before populating
          this.inMileageEntries = [];
          this.outMileageEntries = [];
          this.otherMileageEntries = [];

          this.mileageEntries.forEach((entry) => {
            // Out mileage: Starting at Customer OR Ending at Home
            if (
              entry.Starting_Location_Type__c === "Customer" ||
              entry.Ending_Location_Type__c === "Home"
            ) {
              this.outMileageEntries.push(entry);
            }
            // In mileage: Starting at Home OR Ending at Customer
            else if (
              entry.Starting_Location_Type__c === "Home" ||
              entry.Ending_Location_Type__c === "Customer"
            ) {
              this.inMileageEntries.push(entry);
            }
            // Other mileage: Both locations are Depot/Other
            else if (
              (entry.Starting_Location_Type__c === "Depot" ||
                entry.Starting_Location_Type__c === "Other") &&
              (entry.Ending_Location_Type__c === "Depot" ||
                entry.Ending_Location_Type__c === "Other")
            ) {
              this.otherMileageEntries.push(entry);
            }
          });
        }

        if (result.timeSheet.TimeSheetEntries) {
          // Get the end date from the TimeSheet
          const endDate = result.timeSheet.EndDate;

          // Track earliest and latest times
          let earliestTime = null;
          let latestTime = null;

          result.timeSheet.TimeSheetEntries.forEach((entry) => {
            //Get the date from each timesheet entry and compare to the TimeSheet's end date
            const entryEndDate = new Date(entry.EndTime);
            const onlyDate = entryEndDate.toISOString().split("T")[0];

            if (onlyDate === endDate) {
              // Add the entry to the timeSheetEntries array as the end date matches the TimeSheet's end date
              this.timeSheetEntries.push(entry);

              // Track earliest and latest times
              const startTime = new Date(entry.StartTime);
              const endTime = new Date(entry.EndTime);

              if (!earliestTime || startTime < earliestTime) {
                earliestTime = startTime;
              }
              if (!latestTime || endTime > latestTime) {
                latestTime = endTime;
              }
            }
          });

          // Set initial limits
          if (earliestTime && latestTime) {
            earliestTime.setHours(earliestTime.getHours() - 1);
            latestTime.setHours(latestTime.getHours() + 1);

            this.startHoursLimit = earliestTime;
            this.endHoursLimit = latestTime;
          } else {
            // Default values if no entries found
            this.startHoursLimit = new Date(endDate);
            this.startHoursLimit.setHours(6, 0, 0);
            this.endHoursLimit = new Date(endDate);
            this.endHoursLimit.setHours(20, 0, 0);
          }
        }

        if (result.resourceAbsences) {
          this.resourceAbsences = [...result.resourceAbsences];

          this.resourceAbsences.forEach((absence) => {
            const absenceStart = new Date(absence.Start);
            const absenceEnd = new Date(absence.End);

            // Check if the absence start time is earlier
            if (absenceStart < this.startHoursLimit) {
              this.startHoursLimit = new Date(absenceStart);
              this.startHoursLimit.setHours(
                this.startHoursLimit.getHours() - 1
              );
            }

            // Check if the absence end time is later
            if (absenceEnd > this.endHoursLimit) {
              this.endHoursLimit = new Date(absenceEnd);
              this.endHoursLimit.setHours(this.endHoursLimit.getHours() + 1);
            }
          });
        }

        // Format the times for the calendar
        this.startHoursLimit =
          this.startHoursLimit.getHours().toString().padStart(2, "0") +
          ":00:00";
        this.endHoursLimit =
          this.endHoursLimit.getHours().toString().padStart(2, "0") + ":00:00";

        this.initializeCalendar();

        this.isLoading = false;
      })
      .catch((error) => {
        console.error("Error:", error.message);
        this.isLoading = false;
      });
  }

  initializeCalendar() {
    const timeSheetEvents = this.timeSheetEntries.map((entry) => ({
      id: entry.Id,
      start: entry.StartTime,
      end: entry.EndTime,
      title: entry.Subject
        ? `${entry.Type} - ${entry.Subject}`
        : `${entry.Type}`,
      backgroundColor:
        entry.Type === "Normal Hours"
          ? "#6DA241"
          : entry.Type === "Travel Time"
            ? "#009FBD"
            : entry.Type === "Night Work" || entry.Type === "Machine"
              ? "#DAA520"
              : "#c23934",
      borderColor:
        entry.Type === "Normal Hours"
          ? "#6DA241"
          : entry.Type === "Travel Time"
            ? "#009FBD"
            : entry.Type === "Night Work" || entry.Type === "Machine"
              ? "#DAA520"
              : "#c23934",
      editable: true,
      extendedProps: {
        recordType: "TimeSheetEntry"
      }
    }));

    this.resourceAbsences.forEach((absence) => {
      console.log("absence", JSON.stringify(absence));
    });

    const absenceEvents = this.resourceAbsences.map((absence) => ({
      id: absence.Id,
      start: absence.Start,
      end: absence.End,
      title: absence.Description ? `Break - ${absence.Description}` : "Break",
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
      slotMinTime: this.startHoursLimit,
      slotMaxTime: this.endHoursLimit,
      height: "auto",
      headerToolbar: false,
      selectable: true,
      // Increase delays and make more forgiving
      eventLongPressDelay: 600, // Reduced from 500
      longPressDelay: 600, // Reduced from 500
      selectLongPressDelay: 600, // Reduced from 500
      // Event settings
      eventDurationEditable: true,
      eventStartEditable: true,
      eventResizableFromStart: true,
      selectConstraint: {
        start: "00:00",
        end: "24:00"
      },
      eventResizeGrow: true,
      //Set initial date and Range as well
      initialDate: this.startDate,
      validRange: {
        start: this.startDate,
        end: this.endDate
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
      editable: true,
      selectMirror: true,

      // Event styling
      eventDidMount: (info) => {
        const eventEl = info.el.querySelector(".fc-event-main");
        if (eventEl) {
          eventEl.style.color = "white";
          eventEl.style.fontSize = "15px";
          eventEl.style.fontWeight = "600";
          eventEl.style.touchAction = "none"; // Prevent browser handling of touch events
        }

        // Make resize handles more prominent
        const resizeEls = info.el.querySelectorAll(".fc-event-resizer");
        resizeEls.forEach((el) => {
          el.style.width = "20px"; // Larger touch target
          el.style.height = "20px";
          el.style.backgroundColor = "rgba(255,255,255,0.3)";
          el.style.border = "2px solid white";
          el.style.borderRadius = "10px";
        });
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
      // When multiple rows or cells are selected
      select: (info) => {
        this.handleDateClick(info);
      }
    });

    this.calendar.render();
  }

  /**
   * Populates the mileageEntries array with the mileage entries
   * @param {Array} mileageArray
   */
  populateMileageEntries(mileageArray) {
    this.mileageEntries = [];

    // Create a new object for each In Mileage entry
    mileageArray.forEach((entry) => {
      const obj = {
        Id: entry.Id,
        Starting_Mileage__c: entry.Starting_Mileage__c || "",
        Ending_Mileage__c: entry.Ending_Mileage__c || "",
        Starting_Location_Type__c: entry.Starting_Location_Type__c || "",
        Ending_Location_Type__c: entry.Ending_Location_Type__c || "",
        Allowance_Type__c: entry.Allowance_Type__c || ""
      };

      // Add the object to the mileageEntries array as it's the one that will be displayed in the modal
      this.mileageEntries.push(obj);
    });
    console.log("mileageArray", JSON.stringify(mileageArray));
    console.log("this.mileageEntries", JSON.stringify(this.mileageEntries));
  }

  /**
   * Opens the record modal of the clicked event type (TimeSheetEntry or ResourceAbsence) so the user can edit it
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

  ////////////////////////////////////////////////////////////////// Handlers and modals //////////////////////////////////////////////////////////////////
  /**
   * Opens the modal to create a new TimeSheetEntry or ResourceAbsence when the user clicks on an empty date/callendar cell
   * @param {Object} info
   */
  handleDateClick(info) {
    this.startDateAndHours = info.startStr;
    this.endDateAndHours = info.endStr;

    this.showNewTimeSheetOrAbsenceModal = true;
  }

  /**
   * Closes every modal
   */
  handleCloseForm() {
    this.isLoading = false;
    this.showNewTimeSheetOrAbsenceModal = false;
    this.showTimeSheetEntryNewForm = false;
    this.showTimeSheetEntryEditForm = false;
    this.showResourceAbsenceNewForm = false;
    this.showResourceAbsenceEditForm = false;
    this.showMileageEntries = false;
    this.showMileageEntryEditForm = false;
    this.showInMileageMessage = false;
    this.showOutMileageMessage = false;
    this.showMileageInfoModal = false;
    this.showOutMileageEntryNewForm = false;
    this.showInMileageEntryNewForm = false;
  }

  /**
   * Opens the In Mileage entries modal
   */
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

  /**
   * Opens the Out Mileage entries modal
   */
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

  /**
   * Opens the new TimeSheetEntry page
   */
  createTimeSheetEntry() {
    this.handleCloseForm();
    this.showTimeSheetEntryNewForm = true;
  }

  /**
   * Opens the new ResourceAbsence modal
   */
  createResourceAbsence() {
    this.handleCloseForm();
    this.showResourceAbsenceNewForm = true;
  }

  /**
   * Opens the mileage entry edit form
   * @param {Object} event
   */
  handleMileageEntryEdit(event) {
    this.mileageEntryIdBeingHandled = event.target.dataset.id;
    this.handleCloseForm();
    this.showMileageEntryEditForm = true;
  }

  handleNewOutMileageEntry() {
    this.handleCloseForm();
    this.showOutMileageEntryNewForm = true;
  }

  handleNewInMileageEntry() {
    this.handleCloseForm();
    this.showInMileageEntryNewForm = true;
  }

  handleShowMileageInfo() {
    this.handleCloseForm();
    this.showMileageInfoModal = true;
  }
  ////////////////////////////////////////////////////////////////

  handleSuccessTimeSheetOrAbsenceEntry(event) {
    const timeSheetOrAbsence = event.detail.apiName;
    const recordId = event.detail.id;
    const allEvents = this.calendar.getEvents();

    // Check if this is an existing event
    const existingEvent = allEvents.find((event) => event.id === recordId);

    if (timeSheetOrAbsence === "TimeSheetEntry") {
      const newStartTime = event.detail.fields.StartTime.value;
      const newEndTime = event.detail.fields.EndTime.value;
      const newType = event.detail.fields.Type.value;
      const newSubject = event.detail.fields.Subject.value;

      // Determine colors based on type
      const color =
        newType === "Normal Hours"
          ? "#6DA241"
          : newType === "Travel Time"
            ? "#009FBD"
            : newType === "Night Work" || newType === "Machine"
              ? "#DAA520"
              : "#c23934";

      if (existingEvent) {
        // Update existing event
        existingEvent.setStart(newStartTime);
        existingEvent.setEnd(newEndTime);
        existingEvent.setProp(
          "title",
          !newSubject ? `${newType}` : `${newType} - ${newSubject}`
        );
        existingEvent.setProp("backgroundColor", color);
        existingEvent.setProp("borderColor", color);

        const toastEvent = new ShowToastEvent({
          title: "Success",
          message: "Time Sheet entry updated successfully.",
          variant: "success"
        });

        this.dispatchEvent(toastEvent);
      } else {
        // Create new event
        this.calendar.addEvent({
          id: recordId,
          start: newStartTime,
          end: newEndTime,
          title: newSubject ? `${newType} - ${newSubject}` : `${newType}`,
          backgroundColor: color,
          borderColor: color,
          editable: true,
          extendedProps: {
            recordType: "TimeSheetEntry"
          }
        });

        const toastEvent = new ShowToastEvent({
          title: "Success",
          message: "Time Sheet entry created successfully.",
          variant: "success"
        });

        this.dispatchEvent(toastEvent);
      }
    } else if (timeSheetOrAbsence === "ResourceAbsence") {
      const newStart = event.detail.fields.Start.value;
      const newEnd = event.detail.fields.End.value;
      const newDescription = event.detail.fields.Description.value;

      if (existingEvent) {
        // Update existing event
        existingEvent.setStart(newStart);
        existingEvent.setEnd(newEnd);
        existingEvent.setProp(
          "title",
          !newDescription ? "Break" : `Break - ${newDescription}`
        );
        existingEvent.setProp("backgroundColor", "#c23934");
        existingEvent.setProp("borderColor", "#c23934");

        const toastEvent = new ShowToastEvent({
          title: "Success",
          message: "Break updated successfully.",
          variant: "success"
        });

        this.dispatchEvent(toastEvent);
      } else {
        // Create new event
        this.calendar.addEvent({
          id: recordId,
          start: newStart,
          end: newEnd,
          title:
            newDescription === null ? "Break" : `Break - ${newDescription}`,
          backgroundColor: "#c23934",
          borderColor: "#c23934",
          editable: true,
          extendedProps: {
            recordType: "ResourceAbsence"
          }
        });

        const toastEvent = new ShowToastEvent({
          title: "Success",
          message: "Break created successfully.",
          variant: "success"
        });

        this.dispatchEvent(toastEvent);
      }
    }

    this.handleCloseForm();
  }

  handleSuccessMileageEntryNew(event) {
    const recordId = event.detail.id;

    const toastEvent = new ShowToastEvent({
      title: "Success",
      message: `${recordId} - Mileage entry created successfully.`,
      variant: "success"
    });

    this.dispatchEvent(toastEvent);

    getTimeSheet({ recordId: this.recordId })
      .then((result) => {
        if (result.timeSheet) {
          this.workHours = result.timeSheet.Total_Normal_Hours__c || 0;
          this.travelHours = result.timeSheet.Total_Travel_Time__c || 0;
          this.kmAmount = result.timeSheet.Total_KM__c || 0;
          this.totalHours = result.timeSheet.Total_Hours__c || 0;
        }

        if (result.timeSheet.Mileage_Entries__r) {
          this.mileageEntries = [...result.timeSheet.Mileage_Entries__r];

          // Reset arrays before populating
          this.inMileageEntries = [];
          this.outMileageEntries = [];
          this.otherMileageEntries = [];

          this.mileageEntries.forEach((entry) => {
            // Out mileage: Starting at Customer OR Ending at Home
            if (
              entry.Starting_Location_Type__c === "Customer" ||
              entry.Ending_Location_Type__c === "Home"
            ) {
              this.outMileageEntries.push(entry);
            }
            // In mileage: Starting at Home OR Ending at Customer
            else if (
              entry.Starting_Location_Type__c === "Home" ||
              entry.Ending_Location_Type__c === "Customer"
            ) {
              this.inMileageEntries.push(entry);
            }
            // Other mileage: Both locations are Depot/Other
            else if (
              (entry.Starting_Location_Type__c === "Depot" ||
                entry.Starting_Location_Type__c === "Other") &&
              (entry.Ending_Location_Type__c === "Depot" ||
                entry.Ending_Location_Type__c === "Other")
            ) {
              this.otherMileageEntries.push(entry);
            }
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    this.handleCloseForm();
  }

  handleSuccessMileageEntryEdit(event) {
    this.handleCloseForm();

    // Fetch fresh data from the server
    getTimeSheet({ recordId: this.recordId })
      .then((result) => {
        if (result.timeSheet) {
          this.workHours = result.timeSheet.Total_Normal_Hours__c || 0;
          this.travelHours = result.timeSheet.Total_Travel_Time__c || 0;
          this.kmAmount = result.timeSheet.Total_KM__c || 0;
          this.totalHours = result.timeSheet.Total_Hours__c || 0;
        }

        if (result.timeSheet.Mileage_Entries__r) {
          this.mileageEntries = [...result.timeSheet.Mileage_Entries__r];

          // Reset arrays before populating
          this.inMileageEntries = [];
          this.outMileageEntries = [];
          this.otherMileageEntries = [];

          this.mileageEntries.forEach((entry) => {
            // Out mileage: Starting at Customer OR Ending at Home
            if (
              entry.Starting_Location_Type__c === "Customer" ||
              entry.Ending_Location_Type__c === "Home"
            ) {
              this.outMileageEntries.push(entry);
            }
            // In mileage: Starting at Home OR Ending at Customer
            else if (
              entry.Starting_Location_Type__c === "Home" ||
              entry.Ending_Location_Type__c === "Customer"
            ) {
              this.inMileageEntries.push(entry);
            }
            // Other mileage: Both locations are Depot/Other
            else if (
              (entry.Starting_Location_Type__c === "Depot" ||
                entry.Starting_Location_Type__c === "Other") &&
              (entry.Ending_Location_Type__c === "Depot" ||
                entry.Ending_Location_Type__c === "Other")
            ) {
              this.otherMileageEntries.push(entry);
            }
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const toastEvent = new ShowToastEvent({
      title: "Success",
      message: "Mileage entry updated successfully.",
      variant: "success"
    });

    this.dispatchEvent(toastEvent);
  }

  /**
   * Submits the Time Sheet and sets the status to "Submitted"
   */
  handleSave() {
    this.handleCloseForm();

    submitTimeSheet({ timeSheetId: this.recordId })
      .then(() => {
        const toastEvent = new ShowToastEvent({
          title: "Success",
          message: "Time Sheet submitted successfully.",
          variant: "success"
        });

        this.dispatchEvent(toastEvent);
      })
      .catch((error) => {
        const toastEvent = new ShowToastEvent({
          title: "Error",
          message: "Error submitting time sheet.",
          variant: "error"
        });

        this.dispatchEvent(toastEvent);

        console.error("Error:", error);
      });
  }
}