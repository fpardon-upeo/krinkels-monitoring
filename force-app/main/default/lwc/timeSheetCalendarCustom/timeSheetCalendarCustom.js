/**
 * Created by fpardon on 18/11/2024.
 */

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

export default class TimeSheetCalendarCustom extends LightningElement {

    @api recordId;

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
    @track otherMileageEntries = [];

    // TimeSheet's ServiceResourceId/User
    @track timeSheetResourceId;

    @track startDate;
    @track endDate;
    @track startHoursLimit;
    @track endHoursLimit;

    @track isLoading = true;
    @track showNewTimeSheetOrAbsenceModal = false;
    @track showTimeSheetEntryNewForm = false;
    @track showTimeSheetEntryEditForm = false;
    @track showResourceAbsenceNewForm = false;
    @track showResourceAbsenceEditForm = false;
    @track showMileageEntries = false;
    @track showMileageEntryEditForm = false;
    @track showInMileageMessage = false;
    @track showOutMileageMessage = false;

    connectedCallback() {
        // Wait for DOM to be ready
        console.log("connectedCallback, recordId: ", this.recordId);
        Promise.all([
            loadStyle(this, FullCalendarJS + "/lib/main.css"),
            loadScript(this, FullCalendarJS + "/lib/main.min.js"),
            loadStyle(this, FullCalendarJS + "/lib/custom.css")

        ])
            .then(() => {
                return getTimeSheet({ recordId: this.recordId });
            })
            .then((result) => {
                console.log("result", JSON.stringify(result));
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

                    this.mileageEntries.forEach((entry) => {
                        if (entry.Starting_Location_Type__c === "Home") {
                            this.inMileageEntries.push(entry);
                        } else if (entry.Starting_Location_Type__c === "Customer") {
                            if (entry.Ending_Location_Type__c === "Home") {
                                this.outMileageEntries.push(entry);
                            } else {
                                this.otherMileageEntries.push(entry);
                            }
                        } else {
                            if (entry.Ending_Location_Type__c === "Home") {
                                this.outMileageEntries.push(entry);
                            } else {
                                this.otherMileageEntries.push(entry);
                            }
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
            title: `${entry.Type} - ${entry.Subject}` || `${entry.Type}`,
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

        const absenceEvents = this.resourceAbsences.map((absence) => ({
            id: absence.Id,
            start: absence.Start,
            end: absence.End,
            title: `Break - ${absence.Type}` || "Break",
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
            events: allEvents,
            editable: true,
            selectMirror: true,

            // Increase delays and make more forgiving
            eventLongPressDelay: 600,      // Reduced from 500
            longPressDelay: 600,           // Reduced from 500
            selectLongPressDelay: 600,     // Reduced from 500

            // Event settings
            eventDurationEditable: true,
            eventStartEditable: true,
            eventResizableFromStart: true,

            // New settings for touch interaction
            selectConstraint: {
                start: '00:00',
                end: '24:00',
            },
            dragRevertDuration: 0,
            dragScroll: true,
            eventDragMinDistance: 5,
            eventResizeGrow: true,
            snapDuration: "00:30:00",
            forceEventDuration: true,
            // Event styling
            eventDidMount: (info) => {
                const eventEl = info.el.querySelector(".fc-event-main");
                if (eventEl) {
                    eventEl.style.color = "white";
                    eventEl.style.fontSize = "15px";
                    eventEl.style.fontWeight = "600";
                    eventEl.style.touchAction = "none";  // Prevent browser handling of touch events
                }

                // Make resize handles more prominent
                const resizeEls = info.el.querySelectorAll('.fc-event-resizer');
                resizeEls.forEach(el => {
                    el.style.width = '20px';          // Larger touch target
                    el.style.height = '20px';
                    el.style.backgroundColor = 'rgba(255,255,255,0.3)';
                    el.style.border = '2px solid white';
                    el.style.borderRadius = '10px';
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
            selectable: true,
            // When an empty row or cell is clicked
            dateClick: (info) => {
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

        this.showMileageEntries = true;
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
        console.log("info", JSON.stringify(info));
        this.showNewTimeSheetOrAbsenceModal = true;
    }

    /**
     * Closes multiple modals
     */
    handleCloseForm() {
        this.showNewTimeSheetOrAbsenceModal = false;
        this.showTimeSheetEntryEditForm = false;
        this.showResourceAbsenceEditForm = false;
        this.showMileageEntries = false;
        this.showInMileageMessage = false;
        this.showOutMileageMessage = false;
    }

    /**
     * Closes the mileage entry edit form
     */
    handleCloseMileageEntryEditForm() {
        this.showMileageEntryEditForm = false;
        this.showMileageEntries = true;
    }

    /**
     * Closes the new TimeSheetEntry or ResourceAbsence modal
     */
    handleCloseNewTimeSheetOrAbsenceEntry() {
        this.showTimeSheetEntryNewForm = false;
        this.showResourceAbsenceNewForm = false;
        this.showNewTimeSheetOrAbsenceModal = true;
    }

    /**
     * Opens the In Mileage entries modal
     */
    handleInMileageEntries() {
        if (this.inMileageEntries.length > 0) {
            this.populateMileageEntries(this.inMileageEntries);
        } else {
            this.showInMileageMessage = true;
        }
    }

    /**
     * Opens the Out Mileage entries modal
     */
    handleOutMileageEntries() {
        if (this.outMileageEntries.length > 0) {
            this.populateMileageEntries(this.outMileageEntries);
        } else {
            this.showOutMileageMessage = true;
        }
    }

    /**
     * Opens the new TimeSheetEntry page
     */
    createTimeSheetEntry() {
        this.showNewTimeSheetOrAbsenceModal = false;
        this.showResourceAbsenceNewForm = false;
        this.showTimeSheetEntryNewForm = true;
    }

    /**
     * Opens the new ResourceAbsence modal
     */
    createResourceAbsence() {
        this.showNewTimeSheetOrAbsenceModal = false;
        this.showTimeSheetEntryNewForm = false;
        this.showResourceAbsenceNewForm = true;
    }

    /**
     * Opens the mileage entry edit form
     * @param {Object} event
     */
    handleMileageEntryEdit(event) {
        this.showMileageEntries = false;
        this.showMileageEntryEditForm = true;
        this.mileageEntryIdBeingHandled = event.target.dataset.id;
    }

    handleNewOutMileageEntry() {
        this.showOutMileageMessage = false;
        this.showOutMileageEntryNewForm = true;
    }

    handleNewInMileageEntry() {
        this.showInMileageMessage = false;
        this.showInMileageEntryNewForm = true;
    }

    handleCloseNewOutMileageEntry() {
        this.showOutMileageEntryNewForm = false;
        this.showOutMileageMessage = true;
    }

    handleCloseNewInMileageEntry() {
        this.showInMileageEntryNewForm = false;
        this.showInMileageMessage = true;
    }

    ////////////////////////////////////////////////////////////////

    handleSuccessTimeSheetOrAbsenceEntry() {
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
                this.showNewTimeSheetOrAbsenceModal = false;
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    handleSuccessMileageEntryNew() {
        this.showInMileageEntryNewForm = false;
        this.showInMileageMessage = false;
        this.showOutMileageEntryNewForm = false;
        this.showOutMileageMessage = false;

        getTimeSheet({ recordId: this.recordId })
            .then((result) => {
                if (result.timeSheet.Mileage_Entries__r) {
                    this.mileageEntries = [...result.timeSheet.Mileage_Entries__r];

                    this.mileageEntries.forEach((entry) => {
                        if (entry.Starting_Location_Type__c === "Home") {
                            this.inMileageEntries.push(entry);
                        } else if (entry.Starting_Location_Type__c === "Customer") {
                            if (entry.Ending_Location_Type__c === "Home") {
                                this.outMileageEntries.push(entry);
                            } else {
                                this.otherMileageEntries.push(entry);
                            }
                        } else {
                            if (entry.Ending_Location_Type__c === "Home") {
                                this.outMileageEntries.push(entry);
                            } else {
                                this.otherMileageEntries.push(entry);
                            }
                        }
                    });
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    handleSuccessMileageEntryEdit(event) {
        // Update the mileage entry with the new values
        this.mileageEntries.forEach((entry) => {
            if (entry.Id === this.mileageEntryIdBeingHandled) {
                entry.Starting_Mileage__c =
                    event.detail.fields.Starting_Mileage__c.value;

                entry.Ending_Mileage__c = event.detail.fields.Ending_Mileage__c.value;
            }
        });

        this.showMileageEntryEditForm = false;
        this.showMileageEntries = true;
    }

    /**
     * Submits the Time Sheet and sets the status to "Submitted"
     */
    handleSave() {
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