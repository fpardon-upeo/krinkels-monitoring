import { LightningElement, api, track } from "lwc";
import { loadStyle, loadScript } from "lightning/platformResourceLoader";
import FullCalendarJS from "@salesforce/resourceUrl/FullCalendar";
import getTimeSheet from "@salesforce/apex/TimeSheetController.getTimeSheet";
import updateTimeSheetEntry from "@salesforce/apex/TimeSheetController.updateTimeSheetEntry";
import updateAbsence from "@salesforce/apex/TimeSheetController.updateAbsence";
import submitTimeSheet from "@salesforce/apex/TimeSheetController.submitTimeSheet";
import getBreakRecordTypeId from "@salesforce/apex/TimeSheetController.getBreakRecordTypeId";
import getTimeSheetByResourceAndDate from "@salesforce/apex/TimeSheetController.getTimeSheetByResourceAndDate";
import getUserSettings from "@salesforce/apex/TimeSheetController.getUserSettings";
import getWorkSchedule from "@salesforce/apex/TimeSheetController.getWorkSchedule";
import updateUserSettings from "@salesforce/apex/TimeSheetController.updateUserSettings";
import createUserSettings from "@salesforce/apex/TimeSheetController.createUserSettings";
import { getRecordNotifyChange } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

//Import labels
import Calendar_User_Settings_Start_Time from "@salesforce/label/c.Calendar_User_Settings_Start_Time";
import Calendar_User_Settings_End_Time from "@salesforce/label/c.Calendar_User_Settings_End_Time";
import Calendar_Cancel from "@salesforce/label/c.Calendar_Cancel";
import Calendar_Save from "@salesforce/label/c.Calendar_Save";
import Calendar_Submit_For_Approval from "@salesforce/label/c.Calendar_Submit_For_Approval";
import Calendar_Create_New_Entry from "@salesforce/label/c.Calendar_Create_New_Entry";
import Calendar_Add_Time_Sheet_Entry from "@salesforce/label/c.Calendar_Add_Time_Sheet_Entry";
import Calendar_Add_Time_Sheet_Entry_Description from "@salesforce/label/c.Calendar_Add_Time_Sheet_Entry_Description";
import Calendar_Add_Break from "@salesforce/label/c.Calendar_Add_Break";
import Calendar_Add_Break_Description from "@salesforce/label/c.Calendar_Add_Break_Description";
import Calendar_Mileage_Options from "@salesforce/label/c.Calendar_Mileage_Options";
import Calendar_In_Mileage_Entries from "@salesforce/label/c.Calendar_In_Mileage_Entries";
import Calendar_In_Mileage_Entries_Description from "@salesforce/label/c.Calendar_In_Mileage_Entries_Description";
import Calendar_Out_Mileage_Entries from "@salesforce/label/c.Calendar_Out_Mileage_Entries";
import Calendar_Out_Mileage_Entries_Description from "@salesforce/label/c.Calendar_Out_Mileage_Entries_Description";
import Calendar_Mileage_Entries from "@salesforce/label/c.Calendar_Mileage_Entries";
import Calendar_Mileage_Starting_Location from "@salesforce/label/c.Calendar_Mileage_Starting_Location";
import Calendar_Mileage_Ending_Location from "@salesforce/label/c.Calendar_Mileage_Ending_Location";
import Calendar_Mileage_Allowance from "@salesforce/label/c.Calendar_Mileage_Allowance";
import Calendar_Mileage_Starting_Mileage from "@salesforce/label/c.Calendar_Mileage_Starting_Mileage";
import Calendar_Mileage_Ending_Mileage from "@salesforce/label/c.Calendar_Mileage_Ending_Mileage";
import Calendar_Edit from "@salesforce/label/c.Calendar_Edit";
import Calendar_No_In_Mileage_Entries_Description from "@salesforce/label/c.Calendar_No_In_Mileage_Entries_Description";
import Calendar_Add_In_Mileage_Entry from "@salesforce/label/c.Calendar_Add_In_Mileage_Entry";
import Calendar_Add_In_Mileage_Entry_Description from "@salesforce/label/c.Calendar_Add_In_Mileage_Entry_Description";
import Calendar_No_Out_Mileage_Entries_Description from "@salesforce/label/c.Calendar_No_Out_Mileage_Entries_Description";
import Calendar_Add_Out_Mileage_Entry from "@salesforce/label/c.Calendar_Add_Out_Mileage_Entry";
import Calendar_Add_Out_Mileage_Entry_Description from "@salesforce/label/c.Calendar_Add_Out_Mileage_Entry_Description";
import Calendar_Mileage_Type from "@salesforce/label/c.Calendar_Mileage_Type";
import Calendar_Submit_Time_Sheet from "@salesforce/label/c.Calendar_Submit_Time_Sheet";
import Calendar_Warning_Submit_Timesheet from "@salesforce/label/c.Calendar_Warning_Submit_Timesheet";
import Calendar_Submit from "@salesforce/label/c.Calendar_Submit";
import Calendar_New_Out_Mileage_Entry from "@salesforce/label/c.Calendar_New_Out_Mileage_Entry";
import Calendar_New_In_Mileage_Entry from "@salesforce/label/c.Calendar_New_In_Mileage_Entry";
import Calendar_New_Timesheet_Entry from "@salesforce/label/c.Calendar_New_Timesheet_Entry";
import Calendar_New_Break_Entry from "@salesforce/label/c.Calendar_New_Break_Entry";
import Calendar_Edit_Time_Sheet_Entry from "@salesforce/label/c.Calendar_Edit_Time_Sheet_Entry";
import Calendar_Edit_Break_Entry from "@salesforce/label/c.Calendar_Edit_Break_Entry";
import Calendar_Edit_Mileage_Entry from "@salesforce/label/c.Calendar_Edit_Mileage_Entry";
import Calendar_User_Settings from "@salesforce/label/c.Calendar_User_Settings";
import Calendar_No_Entries from "@salesforce/label/c.Calendar_No_Entries";
import Calendar_User_Settings_Time_Range from "@salesforce/label/c.Calendar_User_Settings_Time_Range";

export default class TimeSheetCalendar extends LightningElement {
  @api recordId;
  @api resourceId;

  // Record ID being handled (TimeSheetEntry or ResourceAbsence)
  @track recordIdBeingHandled;
  // Record ID being handled (MileageEntry)
  @track mileageEntryIdBeingHandled;
  // Break record type ID
  @track breakRecordTypeId;

  @track calendar;

  @track timeSheetEntries = [];
  @track resourceAbsences = [];
  @track mileageEntries = [];
  @track inMileageEntries = [];
  @track outMileageEntries = [];

  @track startDate;
  @track endDate;

  @track startDateAndHours;
  @track endDateAndHours;
  @track date;

  @track user = {};
  @track userWorkSchedule = [];

  // TimeSheet amount variables
  @track expectedWorkHours = 0;
  @track workHours = 0;
  @track breakHours = 0;
  @track kmAmount = 0;
  @track travelHours = 0;
  @track totalHours = 0;
  @track totalBreakHours = 0;

  // Modal states
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
  @track settingsEditModal = false;
  @track settingsNewModal = false;
  @track showCalendar = true;

  @track submitTimeSheetMessage = false;
  @track showNoEntriesModal = false;
  @track isTimeSheetSubmittedOrApproved = false;
  @track isFurtherButtonDisabled = false;
  @track isBackButtonDisabled = false;

  @track minValue = 0;
  @track maxValue = 24;

  labels = {
    Calendar_Submit_For_Approval,
    Calendar_Create_New_Entry,
    Calendar_Add_Time_Sheet_Entry,
    Calendar_Add_Time_Sheet_Entry_Description,
    Calendar_Add_Break,
    Calendar_Add_Break_Description,
    Calendar_Mileage_Options,
    Calendar_In_Mileage_Entries,
    Calendar_In_Mileage_Entries_Description,
    Calendar_Out_Mileage_Entries,
    Calendar_Out_Mileage_Entries_Description,
    Calendar_Mileage_Entries,
    Calendar_Mileage_Starting_Location,
    Calendar_Mileage_Ending_Location,
    Calendar_Mileage_Allowance,
    Calendar_Mileage_Starting_Mileage,
    Calendar_Mileage_Ending_Mileage,
    Calendar_Edit,
    Calendar_No_In_Mileage_Entries_Description,
    Calendar_Add_In_Mileage_Entry,
    Calendar_Add_In_Mileage_Entry_Description,
    Calendar_No_Out_Mileage_Entries_Description,
    Calendar_Add_Out_Mileage_Entry,
    Calendar_Add_Out_Mileage_Entry_Description,
    Calendar_Submit_Time_Sheet,
    Calendar_Warning_Submit_Timesheet,
    Calendar_Submit,
    Calendar_New_Out_Mileage_Entry,
    Calendar_New_In_Mileage_Entry,
    Calendar_New_Timesheet_Entry,
    Calendar_New_Break_Entry,
    Calendar_Edit_Time_Sheet_Entry,
    Calendar_Edit_Break_Entry,
    Calendar_Edit_Mileage_Entry,
    Calendar_User_Settings,
    Calendar_No_Entries,
    Calendar_User_Settings_Start_Time,
    Calendar_User_Settings_End_Time,
    Calendar_Cancel,
    Calendar_Save,
    Calendar_User_Settings_Time_Range,
    Calendar_Mileage_Type
  };

  @api refreshCalendar() {
    this.handleRefresh();
  }

  connectedCallback() {
    if (!(this.recordId && this.resourceId)) {
      console.log("No recordId or resourceId");
      // Maybe show a modal (tbd later)
    }

    // First load the required styles and scripts
    Promise.all([
      loadStyle(this, FullCalendarJS + "/lib/main.css"),
      loadScript(this, FullCalendarJS + "/lib/main.min.js"),
      loadStyle(this, FullCalendarJS + "/lib/custom.css")
    ])
      .then(() => {
        // Now load all data in parallel
        return Promise.all([
          getUserSettings({ userId: this.resourceId }),
          getWorkSchedule({ resourceId: this.resourceId }),
          getTimeSheet({ recordId: this.recordId })
        ]);
      })

      .then(([settings, workSchedule, timeSheet]) => {
        // Process user settings
        if (settings) {
          this.user = settings;
          this.minValue = settings.Start_Time__c / (1000 * 60 * 60);
          this.maxValue = settings.End_Time__c / (1000 * 60 * 60);
        }

        // Process work schedule
        if (workSchedule) {
          workSchedule.Work_Schedule_Days__r.forEach((day) => {
            this.userWorkSchedule.push({
              id: day.Id,
              day: day.Day_of_Week__c,
              dayNumber: day.Day_of_Week_Number__c,
              hours: day.Hours__c
            });
          });

          const todayNumber = new Date().getDay();
          this.expectedWorkHours = this.handleWorkScheduleDayHours(todayNumber);
        }

        // Process timesheet data
        if (timeSheet) {
          // Check if the TimeSheet is submitted or approved
          if (
            timeSheet.timeSheet.Status === "Submitted" ||
            timeSheet.timeSheet.Status === "Approved"
          ) {
            this.isTimeSheetSubmittedOrApproved = true;
          }

          // Check if there are no entries or breaks and display the modal and not the calendar
          if (
            !timeSheet.timeSheet.TimeSheetEntries &&
            timeSheet.resourceAbsences.length === 0
          ) {
            this.isLoading = false;
            this.isTimeSheetSubmittedOrApproved = false;
            this.showNoEntriesModal = true;

            const calendarEl = this.template.querySelector("div.fullcalendar");

            calendarEl.classList.add("hide");
          }

          if (timeSheet.timeSheet) {
            this.workHours = timeSheet.timeSheet.Total_Normal_Hours__c || 0;
            this.travelHours = timeSheet.timeSheet.Total_Travel_Time__c || 0;
            this.kmAmount = timeSheet.timeSheet.Total_KM__c || 0;
            this.totalHours = timeSheet.timeSheet.Total_Hours__c || 0;
            this.totalBreakHours =
              (timeSheet.timeSheet.Total_Break_Time__c / 60).toFixed(2) || 0;
          }

          // Get the Break record type ID
          if (timeSheet.resourceAbsences[0]?.RecordTypeId) {
            this.breakRecordTypeId = timeSheet.resourceAbsences[0].RecordTypeId;
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

          if (timeSheet.timeSheet?.StartDate) {
            this.startDate = timeSheet.timeSheet.StartDate;
          }

          if (timeSheet.timeSheet?.EndDate) {
            this.endDate = timeSheet.timeSheet.EndDate;

            // Convert to a Date object
            let dateObj = new Date(this.endDate);

            // Extract day, month, and year
            let day = dateObj.getDate().toString().padStart(2, "0");
            let month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
            let year = dateObj.getFullYear();

            this.date = `${day}-${month}-${year}`;

            //Get today's date in DD-MM-YYYY format
            const today = new Date();
            const todayDay = today.getDate().toString().padStart(2, "0");
            const todayMonth = (today.getMonth() + 1)
              .toString()
              .padStart(2, "0");
            const todayYear = today.getFullYear();
            this.todayFormatted = `${todayDay}-${todayMonth}-${todayYear}`;

            if (this.date === this.todayFormatted) {
              this.isFurtherButtonDisabled = true;
            }
          }

          // Initialize back button state
          if (this.date) {
            let [day, month, year] = this.date.split("-");
            const currentDate = new Date(year, month - 1, day);
            const today = new Date();
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(today.getDate() - 30);

            if (currentDate <= thirtyDaysAgo) {
              this.isBackButtonDisabled = true;
            }
          }

          if (timeSheet.timeSheet?.Mileage_Entries__r) {
            this.mileageEntries = [...timeSheet.timeSheet.Mileage_Entries__r];

            this.processMileageEntries();
          }

          if (timeSheet.timeSheet?.TimeSheetEntries) {
            // Get the end date from the TimeSheet
            const endDate = timeSheet.timeSheet.EndDate;

            // Track earliest and latest times
            let earliestTime = null;
            let latestTime = null;

            timeSheet.timeSheet.TimeSheetEntries.forEach((entry) => {
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
          }

          if (
            timeSheet.resourceAbsences &&
            timeSheet.resourceAbsences.length > 0
          ) {
            this.resourceAbsences = [...timeSheet.resourceAbsences];
          }
        }

        if (timeSheet.resourceAbsences?.length > 0) {
          this.resourceAbsences = [...timeSheet.resourceAbsences];
        }

        if (timeSheet.timeSheet?.Mileage_Entries__r) {
          this.mileageEntries = [...timeSheet.timeSheet.Mileage_Entries__r];
          this.processMileageEntries();
        }

        // Initialize calendar only after all data is processed
        this.initializeCalendar();
        this.isLoading = false;
      })
      .catch((error) => {
        console.error("Error in connectedCallback:", error);
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
      // Only allow editing if the TimeSheet is not submitted or approved
      editable: !this.isTimeSheetSubmittedOrApproved,
      extendedProps: {
        recordType: "TimeSheetEntry"
      }
    }));

    const absenceEvents = this.resourceAbsences.map((absence) => ({
      id: absence.Id,
      start: absence.Start,
      end: absence.End,
      title: absence.Description ? `Break - ${absence.Description}` : "Break",
      backgroundColor: "#c23934",
      borderColor: "#c23934",
      // Only allow editing if the TimeSheet is not submitted or approved
      editable: !this.isTimeSheetSubmittedOrApproved,
      extendedProps: {
        recordType: "ResourceAbsence"
      }
    }));

    const allEvents = [...timeSheetEvents, ...absenceEvents];

    const calendarEl = this.template.querySelector("div.fullcalendar");
    this.calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "timeGridDay",
      allDaySlot: false,
      //If this.user.Start_Time__c is undefined, set the slotMinTime to 00:00
      slotMinTime: this.user.Start_Time__c
        ? this.msToHoursMinutes(this.user.Start_Time__c)
        : "00:00:00",
      slotMaxTime: this.user.End_Time__c
        ? this.msToHoursMinutes(this.user.End_Time__c)
        : "24:00:00",
      height: "auto",
      headerToolbar: false,
      selectable: true,
      // Increase delays and make more forgiving
      eventLongPressDelay: 600,
      longPressDelay: 600,
      selectLongPressDelay: 600,
      // Event settings
      eventDurationEditable: true,
      eventStartEditable: true,
      eventResizableFromStart: true,
      selectConstraint: {
        start: "00:00",
        end: "24:00"
      },
      eventResizeGrow: true,
      initialDate: this.startDate,
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
      snapDuration: "00:05:00",
      events: allEvents,
      editable: !this.isTimeSheetSubmittedOrApproved,
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
        // Only allow clicking if the TimeSheet is not submitted or approved
        if (!this.isTimeSheetSubmittedOrApproved) {
          this.handleEventClick(info);
        }
      },
      // Drag and drop event
      eventDrop: (info) => {
        // Format dates for Salesforce
        const startTime = info.event.start.toISOString();
        const endTime = info.event.end.toISOString();

        // Only allow dragging if the TimeSheet is not submitted or approved
        if (!this.isTimeSheetSubmittedOrApproved) {
          if (info.event.extendedProps.recordType === "TimeSheetEntry") {
            updateTimeSheetEntry({
              timeSheetEntryId: info.event.id,
              startTime: startTime,
              endTime: endTime
            })
              .then((result) => {
                if (result.timeSheet.TimeSheetEntries) {
                  this.timeSheetEntries = [
                    ...result.timeSheet.TimeSheetEntries
                  ];
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
          } else if (
            info.event.extendedProps.recordType === "ResourceAbsence"
          ) {
            updateAbsence({
              absenceId: info.event.id,
              startTime: startTime,
              endTime: endTime,
              timeSheetId: this.recordId
            })
              .then((result) => {
                if (result.timeSheet.TimeSheetEntries) {
                  this.timeSheetEntries = [
                    ...result.timeSheet.TimeSheetEntries
                  ];
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
        }
      },
      // Resize event
      eventResize: (info) => {
        // Format dates for Salesforce
        const startTime = info.event.start;
        const endTime = info.event.end;

        // Only allow resizing if the TimeSheet is not submitted or approved
        if (!this.isTimeSheetSubmittedOrApproved) {
          if (info.event.extendedProps.recordType === "TimeSheetEntry") {
            updateTimeSheetEntry({
              timeSheetEntryId: info.event.id,
              startTime: startTime,
              endTime: endTime
            })
              .then((result) => {
                if (result.timeSheet.TimeSheetEntries) {
                  this.timeSheetEntries = [
                    ...result.timeSheet.TimeSheetEntries
                  ];
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
          } else if (
            info.event.extendedProps.recordType === "ResourceAbsence"
          ) {
            updateAbsence({
              absenceId: info.event.id,
              startTime: startTime,
              endTime: endTime,
              timeSheetId: this.recordId
            })
              .then((result) => {
                if (result.timeSheet.TimeSheetEntries) {
                  this.timeSheetEntries = [
                    ...result.timeSheet.TimeSheetEntries
                  ];
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
        }
      },
      // When multiple rows or cells are selected
      select: (info) => {
        // Only allow selecting if the TimeSheet is not submitted or approved
        if (!this.isTimeSheetSubmittedOrApproved) {
          this.handleDateClick(info);
        }
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
        Allowance_Type__c: entry.Allowance_Type__c || "",
        Type__c: entry.Type__c || ""
      };

      // Add the object to the mileageEntries array as it's the one that will be displayed in the modal
      this.mileageEntries.push(obj);
    });
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
    this.submitTimeSheetMessage = false;
    this.settingsEditModal = false;
    this.settingsNewModal = false;
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

  handleOpenSettings() {
    this.handleCloseForm();

    if (this.user.Id) {
      this.settingsEditModal = true;
    } else {
      this.settingsNewModal = true;
    }
  }

  /**
   * Increases the date by one day
   */
  handleFurtherDays() {
    this.isLoading = true;
    this.showNoEntriesModal = false;
    this.isBackButtonDisabled = false;

    //Reset arrays and tracked properties
    this.timeSheetEntries = [];
    this.resourceAbsences = [];
    this.mileageEntries = [];

    this.workHours = 0;
    this.travelHours = 0;
    this.kmAmount = 0;
    this.totalHours = 0;
    this.totalBreakHours = 0;

    const calendarEl = this.template.querySelector("div.fullcalendar");

    calendarEl.classList.remove("hide");

    // Remove all existing events
    this.calendar.removeAllEvents();

    //Get todays date in DD-MM-YYYY format with consistent padding
    const today = new Date();
    const dayToday = today.getDate().toString().padStart(2, "0");
    const monthToday = (today.getMonth() + 1).toString().padStart(2, "0");
    const yearToday = today.getFullYear();
    const todayFormatted = `${dayToday}-${monthToday}-${yearToday}`;

    //Convert this.date back to Date
    let [day, month, year] = this.date.split("-");
    let dateObj = new Date(year, month - 1, day);

    // Add one day
    dateObj.setDate(dateObj.getDate() + 1);

    // Format back to DD-MM-YYYY string with consistent padding
    let newDay = dateObj.getDate().toString().padStart(2, "0");
    let newMonth = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    let newYear = dateObj.getFullYear();

    this.date = `${newDay}-${newMonth}-${newYear}`;

    if (this.date === todayFormatted) {
      this.isFurtherButtonDisabled = true;
    }

    getTimeSheetByResourceAndDate({
      serviceResourceId: this.resourceId,
      endDate: `${newYear}-${newMonth}-${newDay}`
    })
      .then((result) => {
        this.recordId = result.timeSheet.Id;
        // Check if the TimeSheet is submitted or approved
        if (
          result.timeSheet.Status === "Submitted" ||
          result.timeSheet.Status === "Approved"
        ) {
          this.isTimeSheetSubmittedOrApproved = true;
        } else {
          this.isTimeSheetSubmittedOrApproved = false;
        }

        // Update tracked properties from result
        if (result.timeSheet) {
          this.workHours = result.timeSheet.Total_Normal_Hours__c || 0;
          this.travelHours = result.timeSheet.Total_Travel_Time__c || 0;
          this.kmAmount = result.timeSheet.Total_KM__c || 0;
          this.totalHours = result.timeSheet.Total_Hours__c || 0;
          this.totalBreakHours =
            (result.timeSheet.Total_Break_Time__c / 60).toFixed(2) || 0;
        }

        // Handle mileage entries
        if (result.timeSheet?.Mileage_Entries__r) {
          this.mileageEntries = [...result.timeSheet.Mileage_Entries__r];
          this.processMileageEntries();
        }

        // Check if there are no entries or breaks and display the modal and not the calendar
        if (
          !result.timeSheet?.TimeSheetEntries &&
          result.resourceAbsences.length === 0
        ) {
          this.isLoading = false;
          this.showNoEntriesModal = true;
          this.isTimeSheetSubmittedOrApproved = true;

          const calendarEl = this.template.querySelector("div.fullcalendar");

          calendarEl.classList.add("hide");
          return;
        }

        // Create new TimeSheet events
        if (result.timeSheet?.TimeSheetEntries) {
          const timeSheetEvents = result.timeSheet.TimeSheetEntries.map(
            (entry) => ({
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
              editable: !this.isTimeSheetSubmittedOrApproved,
              extendedProps: {
                recordType: "TimeSheetEntry"
              }
            })
          );
          timeSheetEvents.forEach((event) => this.calendar.addEvent(event));
        }

        // Create new ResourceAbsence events
        if (result.resourceAbsences) {
          const absenceEvents = result.resourceAbsences.map((absence) => ({
            id: absence.Id,
            start: absence.Start,
            end: absence.End,
            title: absence.Description
              ? `Break - ${absence.Description}`
              : "Break",
            backgroundColor: "#c23934",
            borderColor: "#c23934",
            editable: !this.isTimeSheetSubmittedOrApproved,
            extendedProps: {
              recordType: "ResourceAbsence"
            }
          }));
          absenceEvents.forEach((event) => this.calendar.addEvent(event));
        }

        // Update calendar date
        this.calendar.gotoDate(`${newYear}-${newMonth}-${newDay}`);

        this.isLoading = false;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.isLoading = false;
        this.showNoEntriesModal = true;
        calendarEl.classList.add("hide");
        this.isTimeSheetSubmittedOrApproved = true;
      });

    // Get the day number (0-6) of the new date
    const dateNumber = dateObj.getDay();
    this.expectedWorkHours = this.handleWorkScheduleDayHours(dateNumber);
  }

  /**
   * Decreases the date by one day
   */
  handleBackDays() {
    this.isLoading = true;
    this.showNoEntriesModal = false;

    //Reset arrays and tracked properties
    this.timeSheetEntries = [];
    this.resourceAbsences = [];
    this.mileageEntries = [];

    this.expectedWorkHours = 0;
    this.workHours = 0;
    this.travelHours = 0;
    this.kmAmount = 0;
    this.totalHours = 0;
    this.totalBreakHours = 0;

    const calendarEl = this.template.querySelector("div.fullcalendar");
    calendarEl.classList.remove("hide");

    // Remove all existing events
    this.calendar.removeAllEvents();

    //Convert this.date back to Date
    let [day, month, year] = this.date.split("-");
    let dateObj = new Date(year, month - 1, day);

    // Subtract one day
    dateObj.setDate(dateObj.getDate() - 1);

    // Format back to DD-MM-YYYY string with consistent padding
    let newDay = dateObj.getDate().toString().padStart(2, "0");
    let newMonth = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    let newYear = dateObj.getFullYear();

    this.date = `${newDay}-${newMonth}-${newYear}`;

    // Get today's date in DD-MM-YYYY format with consistent padding
    const today = new Date();
    const dayToday = today.getDate().toString().padStart(2, "0");
    const monthToday = (today.getMonth() + 1).toString().padStart(2, "0");
    const yearToday = today.getFullYear();
    const todayFormatted = `${dayToday}-${monthToday}-${yearToday}`;

    // Check if we're at today's date (for further button)
    if (this.date === todayFormatted) {
      this.isFurtherButtonDisabled = true;
    } else {
      this.isFurtherButtonDisabled = false;
    }

    getTimeSheetByResourceAndDate({
      serviceResourceId: this.resourceId,
      endDate: `${newYear}-${newMonth}-${newDay}`
    })
      .then((result) => {
        this.recordId = result.timeSheet.Id;
        // Check if the TimeSheet is submitted or approved
        if (
          result.timeSheet.Status === "Submitted" ||
          result.timeSheet.Status === "Approved"
        ) {
          this.isTimeSheetSubmittedOrApproved = true;
        } else {
          this.isTimeSheetSubmittedOrApproved = false;
        }

        // Update tracked properties from result
        if (result.timeSheet) {
          this.workHours = result.timeSheet.Total_Normal_Hours__c || 0;
          this.travelHours = result.timeSheet.Total_Travel_Time__c || 0;
          this.kmAmount = result.timeSheet.Total_KM__c || 0;
          this.totalHours = result.timeSheet.Total_Hours__c || 0;
          this.totalBreakHours =
            (result.timeSheet.Total_Break_Time__c / 60).toFixed(2) || 0;
        }

        // Handle mileage entries
        if (result.timeSheet?.Mileage_Entries__r) {
          this.mileageEntries = [...result.timeSheet.Mileage_Entries__r];

          this.processMileageEntries();
        }

        // Check if there are no entries or breaks and display the modal and not the calendar
        if (
          !result.timeSheet?.TimeSheetEntries &&
          result.resourceAbsences.length === 0
        ) {
          this.showNoEntriesModal = true;
          this.isLoading = false;

          calendarEl.classList.add("hide");
          this.isTimeSheetSubmittedOrApproved = true;
          return;
        }

        // Create new TimeSheet events
        if (result.timeSheet?.TimeSheetEntries) {
          const timeSheetEvents = result.timeSheet.TimeSheetEntries.map(
            (entry) => ({
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
              editable: !this.isTimeSheetSubmittedOrApproved,
              extendedProps: {
                recordType: "TimeSheetEntry"
              }
            })
          );
          timeSheetEvents.forEach((event) => this.calendar.addEvent(event));
        }

        // Create new ResourceAbsence events
        if (result.resourceAbsences) {
          const absenceEvents = result.resourceAbsences.map((absence) => ({
            id: absence.Id,
            start: absence.Start,
            end: absence.End,
            title: absence.Description
              ? `Break - ${absence.Description}`
              : "Break",
            backgroundColor: "#c23934",
            borderColor: "#c23934",
            editable: !this.isTimeSheetSubmittedOrApproved,
            extendedProps: {
              recordType: "ResourceAbsence"
            }
          }));
          absenceEvents.forEach((event) => this.calendar.addEvent(event));
        }

        // Update calendar date
        this.calendar.gotoDate(`${newYear}-${newMonth}-${newDay}`);

        this.isLoading = false;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.isLoading = false;
        this.showNoEntriesModal = true;
        calendarEl.classList.add("hide");
        this.isTimeSheetSubmittedOrApproved = true;
      });

    this.expectedWorkHours = this.handleWorkScheduleDayHours(dateObj.getDay());
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
    const toastEvent = new ShowToastEvent({
      title: "Success",
      message: `Mileage entry created successfully.`,
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

          this.processMileageEntries();
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

          this.processMileageEntries();
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

  handleSuccessSettings(event) {
    const type = event.target.dataset.type;

    // Convert slider values to Time format
    const startTime = this.convertToTime(this.minValue);
    const endTime = this.convertToTime(this.maxValue);

    if (startTime === endTime) {
      const toastEvent = new ShowToastEvent({
        title: "Error",
        message: "Start time and end time cannot be the same.",
        variant: "error"
      });

      this.dispatchEvent(toastEvent);
      return;
    }

    if (startTime > endTime) {
      const toastEvent = new ShowToastEvent({
        title: "Error",
        message: "Start time cannot be greater than end time.",
        variant: "error"
      });

      this.dispatchEvent(toastEvent);
      return;
    }

    if (!startTime || !endTime) {
      const toastEvent = new ShowToastEvent({
        title: "Error",
        message: "Start time and end time are required.",
        variant: "error"
      });

      this.dispatchEvent(toastEvent);

      return;
    }

    if (type === "new") {
      createUserSettings({
        userId: this.resourceId,
        startMilliseconds: this.timeStringToMilliseconds(startTime),
        endMilliseconds: this.timeStringToMilliseconds(endTime)
      })
        .then(() => {
          const toastEvent = new ShowToastEvent({
            title: "Success",
            message: "Settings created successfully.",
            variant: "success"
          });

          this.dispatchEvent(toastEvent);
          this.updateCalendarView(startTime, endTime);

          getUserSettings({ userId: this.resourceId })
            .then((result) => {
              if (result) {
                this.user = result;
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        })
        .catch((error) => {
          const toastEvent = new ShowToastEvent({
            title: "Error",
            message: "Error creating settings.",
            variant: "error"
          });

          this.dispatchEvent(toastEvent);
          console.error("Error:", error);
        });
    } else if (type === "edit") {
      updateUserSettings({
        settingsId: this.user.Id,
        startMilliseconds: this.timeStringToMilliseconds(startTime),
        endMilliseconds: this.timeStringToMilliseconds(endTime)
      })
        .then(() => {
          const toastEvent = new ShowToastEvent({
            title: "Success",
            message: "Settings updated successfully.",
            variant: "success"
          });

          this.dispatchEvent(toastEvent);
          this.updateCalendarView(startTime, endTime);
        })
        .catch((error) => {
          console.error("Error:", error);

          const toastEvent = new ShowToastEvent({
            title: "Error",
            message: "Error updating settings.",
            variant: "error"
          });

          this.dispatchEvent(toastEvent);
        });
    }

    this.handleCloseForm();
  }

  handleSubmitTimeSheetMessage() {
    this.handleCloseForm();

    this.submitTimeSheetMessage = true;
  }

  /**
   * Submits the Time Sheet and sets the status to "Submitted"
   */
  handleSubmitTimeSheet() {
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

  handleRefresh() {
    this.isLoading = true;

    //Remove all events from calendar
    this.calendar.removeAllEvents();

    //Fetch latest data
    getTimeSheet({ recordId: this.recordId })
      .then((result) => {
        // Reset all tracked arrays
        this.timeSheetEntries = [];
        this.resourceAbsences = [];
        this.mileageEntries = [];

        console.log("result refresh ", JSON.stringify(result));
        // Process the new data
        if (result.timeSheet) {
          this.workHours = result.timeSheet.Total_Normal_Hours__c || 0;
          this.travelHours = result.timeSheet.Total_Travel_Time__c || 0;
          this.kmAmount = result.timeSheet.Total_KM__c || 0;
          this.totalHours = result.timeSheet.Total_Hours__c || 0;
          this.totalBreakHours =
            (result.timeSheet.Total_Break_Time__c / 60).toFixed(2) || 0;
        }

        // Re-populate all data arrays
        if (result.timeSheet.TimeSheetEntries) {
          this.timeSheetEntries = [...result.timeSheet.TimeSheetEntries];
        }

        if (result.resourceAbsences) {
          this.resourceAbsences = [...result.resourceAbsences];
        }

        if (result.timeSheet.Mileage_Entries__r) {
          this.mileageEntries = [...result.timeSheet.Mileage_Entries__r];
          this.processMileageEntries();
        }

        // Create new TimeSheet events
        if (result.timeSheet?.TimeSheetEntries) {
          const timeSheetEvents = result.timeSheet.TimeSheetEntries.map(
            (entry) => ({
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
              editable: !this.isTimeSheetSubmittedOrApproved,
              extendedProps: {
                recordType: "TimeSheetEntry"
              }
            })
          );
          timeSheetEvents.forEach((event) => this.calendar.addEvent(event));
        }

        // Create new ResourceAbsence events
        if (result.resourceAbsences) {
          const absenceEvents = result.resourceAbsences.map((absence) => ({
            id: absence.Id,
            start: absence.Start,
            end: absence.End,
            title: absence.Description
              ? `Break - ${absence.Description}`
              : "Break",
            backgroundColor: "#c23934",
            borderColor: "#c23934",
            editable: !this.isTimeSheetSubmittedOrApproved,
            extendedProps: {
              recordType: "ResourceAbsence"
            }
          }));
          absenceEvents.forEach((event) => this.calendar.addEvent(event));
        }

        this.isLoading = false;
      })
      .catch((error) => {
        console.error("Error refreshing calendar:", error);
        this.isLoading = false;
      });
  }

  ///////////////////////////////HELPER FUNCTIONS///////////////////////////////

  // Helper method to process mileage entries
  processMileageEntries() {
    //Reset mileage arrays
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

  // Helper method to update the calendar view
  updateCalendarView(startTime, endTime) {
    this.calendar.setOption("slotMinTime", startTime);
    this.calendar.setOption("slotMaxTime", endTime);
    this.calendar.render();
    this.calendar.refetchEvents();
  }

  /**
   * Helper method to convert slider value to time format (0 -> 00:00, 0.50 -> 00:30)
   * @param {Number} value - The slider value (ex 0.5, 12.5)
   * @returns {String} - The formatted time (ex "00:30", "12:30")
   */
  convertToTime(value) {
    const hours = Math.floor(value);
    const minutes = (value % 1) * 60;

    const displayHours = hours.toString().padStart(2, "0");
    const displayMinutes = minutes === 30 ? "30" : "00";

    return `${displayHours}:${displayMinutes}`;
  }

  // Helper method to convert milliseconds to hours and minutes
  msToHoursMinutes(ms) {
    const totalMinutes = Math.floor(ms / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`;
  }

  // Helper method to convert time string from hours and minutes to milliseconds
  timeStringToMilliseconds(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 * 60 * 1000 + minutes * 60 * 1000;
  }

  // Handlers for slider changes
  handleMinChange(event) {
    this.minValue = parseFloat(event.target.value);
  }

  handleMaxChange(event) {
    this.maxValue = parseFloat(event.target.value);
  }

  handleWorkScheduleDayHours(dateNumber) {
    const todayNumber = dateNumber;

    const today = this.userWorkSchedule.find(
      (day) => day.dayNumber === todayNumber
    );

    if (today) {
      return today.hours;
    }

    return 0;
  }

  // Getters for displaying selected times
  get minLabel() {
    return this.convertToTime(this.minValue);
  }

  get maxLabel() {
    return this.convertToTime(this.maxValue);
  }
}