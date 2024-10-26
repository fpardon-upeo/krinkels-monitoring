/**
 * Created by Frederik on 6/4/2024.
 *
 * Description: component used in the serviceBuilder component to build out an RRULE string that will be used when creating MaintenanceWorkRule records.
 *
 *
 */

import { api, track } from "lwc";
import LightningModal from "lightning/modal";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class RecurrencePattern extends LightningModal {
  @api recordId; // The record Id of the ContractLineItem
  @api selectedRecurrencePattern; // The selected recurrence pattern from the parent component
  @api selectedRecords = []; // The selected records from the parent component
  selectedPeriod = "WEEKLY";
  selectedInterval = 1;
  selectedEndType = "Never";
  @track selectedRecurrenceDays = [];
  selectedMonthType;
  selectedMonthRecurrence;
  selectedMonthWeekRecurrence;
  selectedRecurrenceDay;
  selectedRruleEndDate;

  showAfterOccurrences = false;
  showOnDate = false;

  //Set the default date of onDate to next year on the same day
  selectedEndDate;
  selectedOccurrences = 1;

  periodOptions = [
    { label: "Days", value: "DAILY" },
    { label: "Weeks", value: "WEEKLY" },
    { label: "Months", value: "MONTHLY" },
    { label: "Years", value: "YEARLY" }
  ];

  endTypeOptions = [
    { label: "Never", value: "Never" },
    { label: "After Occurrences", value: "After" },
    { label: "On Date", value: "On" }
  ];

  recurrenceDaysOptions = [
    { label: "Monday", value: "MO" },
    { label: "Tuesday", value: "TU" },
    { label: "Wednesday", value: "WE" },
    { label: "Thursday", value: "TH" },
    { label: "Friday", value: "FR" },
    { label: "Saturday", value: "SA" },
    { label: "Sunday", value: "SU" }
  ];

  recurrenceMonthTypeOptions = [
    { label: "Day of the Month", value: "DayOfMonth" },
    { label: "Week of the Month", value: "WeekOfMonth" }
  ];

  recurrenceMonthWeekOptions = [
    { label: "First", value: "1" },
    { label: "Second", value: "2" },
    { label: "Third", value: "3" },
    { label: "Fourth", value: "4" },
    { label: "Last", value: "-1" }
  ];

  connectedCallback() {
    if (this.recordId !== undefined) {
      this.selectedRecords.push(this.recordId);
      if (this.recordId.Recurrence_Pattern__c !== undefined) {
        this.parseRRule(this.recordId.Recurrence_Pattern__c);
      }
    }
  }

  parseRRule(rrule) {
    //Parse the RRULE string to set the selected options
    const parts = rrule.split(";");
    for (const part of parts) {
      const [key, value] = part.split("=");
      switch (key.toUpperCase()) {
        case "FREQ":
          if (value === "DAILY") {
            this.selectedPeriod = "DAILY";
          } else if (value === "WEEKLY") {
            this.selectedPeriod = "WEEKLY";
          } else if (value === "MONTHLY") {
            this.selectedPeriod = "MONTHLY";
          } else {
            this.selectedPeriod = "YEARLY";
          }
          break;
        case "INTERVAL":
          this.selectedInterval = parseInt(value);
          break;
        case "BYSETPOS":
          this.selectedMonthWeekRecurrence = parseInt(value);
          this.selectedMonthType = "WeekOfMonth";
          break;
        case "BYDAY":
          let days = value.split(",");
          days.forEach((day) => {
            this.selectedRecurrenceDays.push(day);
          });
          this.selectedRecurrenceDays = [...this.selectedRecurrenceDays];
          break;
        case "COUNT":
          this.selectedOccurrences = parseInt(value);
          this.showAfterOccurrences = true;
          this.selectedEndType = "After";
          break;
        case "BYMONTHDAY":
          this.selectedMonthRecurrence = parseInt(value);
          this.selectedMonthType = "DayOfMonth";
          break;
        case "WKST":
          this.selectedRecurrenceDay = value;
          break;
        case "UNTIL":
          //We get the date in a format like: 20240505T000000Z
          let year = value.substring(0, 4);
          let month = value.substring(4, 6);
          let day = value.substring(6, 8);
          this.selectedEndDate = `${year}-${month}-${day}`;
          this.showOnDate = true;
          this.selectedEndType = "On";
          this.selectedRruleEndDate = value;
          break;
        default:
          break;
      }
    }
  }

  handleSave() {
    if (this.selectedEndType === "On" && this.selectedEndDate === undefined) {
      this.dispatchEvent(
        new ShowToastEvent({
          title: "Error",
          message:
            "Please select an end date or change Recurrence Ends option.",
          variant: "error"
        })
      );

      return;
    }

    if (this.selectedRecords.length === 0 && this.recordId !== undefined) {
      //Add the recordId to the selectedRecords array
      this.selectedRecords.push(this.recordId);
    }

    let records = JSON.parse(JSON.stringify(this.selectedRecords));

    records.forEach((record) => {
      record.Recurrence_Pattern__c = this.completePattern;
      record.EndDate = this.selectedEndDate
        ? this.selectedEndDate
        : record.EndDate;
      record.Frequency__c = this.selectedPeriod;
    });

    this.close(JSON.stringify(records));
  }

  handlePeriodChange(event) {
    this.selectedPeriod = event.detail.value; //Clear the values we don't need based on the selected period
    if (this.selectedPeriod !== "WEEKLY") {
      this.selectedRecurrenceDays = [];
    }
    if (this.selectedPeriod !== "MONTHLY") {
      this.selectedMonthType = null;
      this.selectedMonthRecurrence = null;
      this.selectedMonthWeekRecurrence = null;
      this.selectedRecurrenceDay = null;
    }
    if (this.selectedPeriod !== "YEARLY") {
      this.selectedRecurrenceDay = null;
    }
  }

  handleIntervalChange(event) {
    this.selectedInterval = event.detail.value;
  }

  handleEndTypeChange(event) {
    this.selectedEndType = event.detail.value;

    console.log(this.selectedEndType);

    this.handleEndTypeDependencies();
  }

  handleEndDateChange(event) {
    this.selectedEndDate = event.detail.value;
    //We need the date to be in a format like '20240627T000000Z' for the RRULE string
    let date = new Date(this.selectedEndDate);
    let year = date.getFullYear();
    let month = date.getMonth() + 1; //Months are zero based in javascript, took me a while to figure this out

    //Add a leading zero to the month if it is less than 10
    if (month < 10) {
      month = "0" + month;
    }

    let day = date.getDate();

    //Add a leading zero to the day if it is less than 10
    if (day < 10) {
      day = "0" + day;
    }

    this.selectedRruleEndDate = `${year}${month}${day}T000000Z`;
  }

  handleOccurrencesChange(event) {
    this.selectedOccurrences = event.detail.value;
  }

  handleEndTypeDependencies() {
    if (this.selectedEndType === "Never") {
      this.showOnDate = false;
      this.showAfterOccurrences = false;
      // this.selectedEndDate = null;
      this.selectedRruleEndDate = "";
      this.selectedOccurrences = 0;
    } else if (this.selectedEndType === "After") {
      this.showAfterOccurrences = true;
      this.showOnDate = false;
      // this.selectedEndDate = null;
      this.selectedRruleEndDate = "";
    } else {
      this.selectedOccurrences = 0;
      this.showOnDate = true;
      this.showAfterOccurrences = false;
    }
  }

  handleRecurrenceDaysChange(event) {
    this.selectedRecurrenceDays = event.detail.value;
  }

  handleRecurrenceMonthTypeChange(event) {
    this.selectedMonthType = event.detail.value;
    if (this.selectedMonthType === "DayOfMonth") {
      this.selectedMonthWeekRecurrence = null;
      this.selectedRecurrenceDay = null;
    } else {
      this.selectedMonthRecurrence = null;
    }
  }

  handleMonthRecurrenceChange(event) {
    this.selectedMonthRecurrence = event.detail.value;
  }

  handleMonthWeekRecurrenceChange(event) {
    this.selectedMonthWeekRecurrence = event.detail.value;
  }

  handleMonthWeekRecurrenceDayChange(event) {
    this.selectedRecurrenceDay = event.detail.value;
  }

  get pattern() {
    //Use the label of the selected period to determine the RRULE string
    let period =
      this.selectedPeriod === "DAILY"
        ? "Day(s)"
        : this.selectedPeriod === "WEEKLY"
          ? "Weeks(s)"
          : this.selectedPeriod === "MONTHLY"
            ? "Month(s)"
            : "Year(s)";
    let basePattern = `Every ${this.selectedInterval} ${period}`;
    let days = this.selectedRecurrenceDays
      .map((day) => {
        return day.label;
      })
      .join(", ");
    let daysPattern = ` on ${days}`;
    let endPattern = "";
    if (this.selectedEndType === "After") {
      endPattern = ` for ${this.selectedOccurrences} occurrences`;
    } else if (this.selectedEndType === "On") {
      endPattern = ` until ${this.selectedEndDate}`;
    }
    return `${basePattern}${daysPattern}${endPattern}`;
  }

  get completePattern() {
    //Builds out the complete RRULE string based on the selected options
    let freq = "FREQ=" + this.selectedPeriod.toUpperCase();
    let interval = "INTERVAL=" + this.selectedInterval;
    let bySetPos = "BYSETPOS=" + this.selectedMonthWeekRecurrence;
    let byDay = "BYDAY=" + this.selectedRecurrenceDays.join(",");
    let count = "COUNT=" + this.selectedOccurrences;
    let until = "UNTIL=" + this.selectedRruleEndDate;
    let byMonthDay = "BYMONTHDAY=" + this.selectedMonthRecurrence;
    let wkst = "WKST=" + this.selectedRecurrenceDay;

    //Now make sure to build out the RRULE string based on the selected options, leaving out the ones that are not selected
    //The frequency and interval are always required
    //The BYDAY is only required if the period is weekly
    //The COUNT is only required if the end type is after
    //The UNTIL is only required if the end type is on
    //The BYMONTHDAY is only required if the period is monthly and the month type is DayOfMonth
    //The WKST is only required if the period is monthly and the month type is WeekOfMonth

    let pattern = `${freq};${interval}`;
    if (this.selectedMonthWeekRecurrence) {
      pattern += `;${bySetPos}`;
    }
    if (this.selectedRecurrenceDays.length > 0) {
      pattern += `;${byDay}`;
    }
    if (this.selectedOccurrences > 1) {
      pattern += `;${count}`;
    }
    if (this.selectedMonthRecurrence) {
      pattern += `;${byMonthDay}`;
    }
    if (this.selectedRecurrenceDay) {
      pattern += `;${wkst}`;
    }
    if (this.selectedRruleEndDate) {
      pattern += `;${until}`;
    }
    return pattern;
  }

  get showWeekDays() {
    return this.selectedPeriod === "WEEKLY";
  }

  get showMonthRecurrence() {
    return this.selectedPeriod === "MONTHLY";
  }

  get showMonthDayRecurrence() {
    return (
      this.selectedMonthType === "DayOfMonth" &&
      this.selectedPeriod === "MONTHLY"
    );
  }

  get showMonthWeekRecurrence() {
    return (
      this.selectedMonthType === "WeekOfMonth" &&
      this.selectedPeriod === "MONTHLY"
    );
  }

  get PatternText() {
    let patternText = "";
    const parts = this.completePattern.split(";");

    for (const part of parts) {
      const [key, value] = part.split("=");

      switch (key.toUpperCase()) {
        case "INTERVAL":
          patternText += ` Every ${value} ${this.getPeriodText(this.selectedPeriod.toLowerCase())}`;
          break;
        case "BYSETPOS":
          patternText += ` on the ${this.getOrdinal(value)}`;
          break;
        case "BYDAY":
          patternText += ` on ${this.getDayText(value)}`;
          break;
        case "COUNT":
          patternText += ` for ${value} occurrence(s)`;
          break;
        case "BYMONTHDAY":
          patternText += ` on the ${this.getOrdinal(value)} day of the month`;
          break;
        case "WKST":
          patternText += ` ${this.getDayText(value.toLowerCase())}`;
          break;
        case "UNTIL":
          patternText += ` until ${this.selectedEndDate}`;
          break;
        default:
          break;
      }
    }

    return patternText;
  }

  getPeriodText(period) {
    switch (period) {
      case "daily":
        return "day(s)";
      case "weekly":
        return "week(s)";
      case "monthly":
        return "month(s)";
      case "yearly":
        return "year(s)";
      default:
        return "";
    }
  }

  getDayText(dayValue) {
    const days = dayValue.split(",");
    const dayNames = days.map((day) => {
      switch (day.toUpperCase()) {
        case "SU":
          return "Sunday";
        case "MO":
          return "Monday";
        case "TU":
          return "Tuesday";
        case "WE":
          return "Wednesday";
        case "TH":
          return "Thursday";
        case "FR":
          return "Friday";
        case "SA":
          return "Saturday";
        default:
          return "";
      }
    });
    return dayNames.join(", ");
  }

  getOrdinal(day) {
    const suffixes = ["th", "st", "nd", "rd"];
    const value = parseInt(day);
    const suffix =
      suffixes[
        (value >= 4 && value <= 20) ||
        [23, 24, 25, 26, 27, 28, 29].includes(value % 100)
          ? 0
          : value % 10
      ] || suffixes[0];
    return `${value}${suffix}`;
  }
}