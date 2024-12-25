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
  selectedRecurrenceYearType;
  selectedRecurrenceYearMonth;
  selectedRecurrenceYearMonthDay;
  selectedYearlyRecurrenceDay;

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

  recurrenceYearTypeOptions = [
    { label: "Specific Date", value: "specificDate" },
    { label: "Day of a Given Month", value: "dayOfGivenMonth" }
  ];

  recurrenceYearMonthTypeOptions = [
    {
      label: "January",
      value: "1"
    },
    {
      label: "February",
      value: "2"
    },
    {
      label: "March",
      value: "3"
    },
    {
      label: "April",
      value: "4"
    },
    {
      label: "May",
      value: "5"
    },
    {
      label: "June",
      value: "6"
    },
    {
      label: "July",
      value: "7"
    },
    {
      label: "August",
      value: "8"
    },
    {
      label: "September",
      value: "9"
    },
    {
      label: "October",
      value: "10"
    },
    {
      label: "November",
      value: "11"
    },
    {
      label: "December",
      value: "12"
    }
  ];

  recurrenceYearMonthDayOptions = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" },
    { label: "13", value: "13" },
    { label: "14", value: "14" },
    { label: "15", value: "15" },
    { label: "16", value: "16" },
    { label: "17", value: "17" },
    { label: "18", value: "18" },
    { label: "19", value: "19" },
    { label: "20", value: "20" },
    { label: "21", value: "21" },
    { label: "22", value: "22" },
    { label: "23", value: "23" },
    { label: "24", value: "24" },
    { label: "25", value: "25" },
    { label: "26", value: "26" },
    { label: "27", value: "27" },
    { label: "28", value: "28" },
    { label: "29", value: "29" },
    { label: "30", value: "30" },
    { label: "31", value: "31" }
  ];

  recurrenceYearDayOptions = [
    { label: "Monday", value: "MO" },
    { label: "Tuesday", value: "TU" },
    { label: "Wednesday", value: "WE" },
    { label: "Thursday", value: "TH" },
    { label: "Friday", value: "FR" },
    { label: "Saturday", value: "SA" },
    { label: "Sunday", value: "SU" },
    { label: "Weekday", value: "MO,TU,WE,TH,FR" },
    { label: "Weekend Day", value: "SA,SU" },
    { label: "Day", value: "MO,TU,WE,TH,FR,SA,SU" }
  ];

  recurrenceMonthWeekOptions = [
    { label: "First", value: "1" },
    { label: "Second", value: "2" },
    { label: "Third", value: "3" },
    { label: "Fourth", value: "4" },
    { label: "Last", value: "-1" }
  ];

  connectedCallback() {
    // Set default end date for "Never" option
    const currentYear = new Date().getFullYear();
    this.selectedEndDate = `${currentYear}-12-31`;

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

    console.log("records: ", JSON.stringify(records));

    records.forEach((record) => {
      record.Recurrence_Pattern__c = this.completePattern;
      record.EndDate = this.selectedEndDate
        ? this.selectedEndDate
        : record.EndDate;
      record.Frequency__c = this.selectedPeriod;
    });

    this.close(JSON.stringify(records));
  }

  handleClose() {
    this.close();
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
      const currentYear = new Date().getFullYear();
      this.selectedEndDate = `${currentYear}-12-31`;
      this.showOnDate = false;
      this.showAfterOccurrences = false;
      this.selectedRruleEndDate = "";
      this.selectedOccurrences = 0;
    } else if (this.selectedEndType === "After") {
      this.showAfterOccurrences = true;
      this.showOnDate = false;
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

  handleRecurrenceYearTypeChange(event) {
    this.selectedRecurrenceYearType = event.detail.value;
    if (this.selectedRecurrenceYearType === "specificDate") {
      this.selectedMonthType = "specificDate";
    } else {
      this.selectedMonthType = "dayOfGivenMonth";
    }
  }

  handleMonthRecurrenceChange(event) {
    this.selectedMonthRecurrence = event.detail.value;
  }

  handleMonthWeekRecurrenceChange(event) {
    this.selectedMonthWeekRecurrence = event.detail.value;
  }

  handleMonthWeekRecurrenceDayChange(event) {
    this.selectedYearlyRecurrenceDay = event.detail.value;
  }

  handleYearDayRecurrenceMonthChange(event) {
    this.selectedRecurrenceYearMonth = event.detail.value;
  }

  handleYearDayRecurrenceDayChange(event) {
    this.selectedRecurrenceYearMonthDay = event.detail.value;
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

  get showYearRecurrence() {
    return this.selectedPeriod === "YEARLY";
  }

  get showMonthDayRecurrence() {
    return (
      this.selectedMonthType === "DayOfMonth" &&
      this.selectedPeriod === "MONTHLY"
    );
  }

  get showYearDayRecurrence() {
    return (
      this.selectedMonthType === "specificDate" &&
      this.selectedPeriod === "YEARLY"
    );
  }

  get showYearMonthDayRecurrence() {
    return (
      this.selectedMonthType === "dayOfGivenMonth" &&
      this.selectedPeriod === "YEARLY"
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