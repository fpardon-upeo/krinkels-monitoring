/**
 * Created by Frederik on 11/21/2024.
 */

import { LightningElement, api, wire } from "lwc";
import { getRecord } from "lightning/uiRecordApi";
import getTimeSlots from "@salesforce/apex/AccountDetailsController.getTimeSlots";
import { NavigationMixin } from "lightning/navigation";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import createFeedbackPost from "@salesforce/apex/AccountDetailsController.createFeedbackPost";

import LocationPassport_General_Information_Header from "@salesforce/label/c.LocationPassport_General_Information_Header";
import LocationPassport_General_Information_Account_Name_Header from "@salesforce/label/c.LocationPassport_General_Information_Account_Name_Header";
import LocationPassport_General_Information_Account_AccessInformation_Header from "@salesforce/label/c.LocationPassport_General_Information_Account_AccessInformation_Header";
import LocationPassport_General_Information_Account_AttentionPoints_Header from "@salesforce/label/c.LocationPassport_General_Information_Account_AttentionPoints_Header";
import LocationPassport_Operating_Hours_Header from "@salesforce/label/c.LocationPassport_Operating_Hours_Header";
import LocationPassport_Operating_Hours_Day_Header from "@salesforce/label/c.LocationPassport_Operating_Hours_Day_Header";
import LocationPassport_Operating_Hours_Start_Time_Header from "@salesforce/label/c.LocationPassport_Operating_Hours_Start_Time_Header";
import LocationPassport_Operating_Hours_End_Time_Header from "@salesforce/label/c.LocationPassport_Operating_Hours_End_Time_Header";
import LocationPassport_Feedback_Header from "@salesforce/label/c.LocationPassport_Feedback_Header";
import LocationPassport_Feedback_Label from "@salesforce/label/c.LocationPassport_Feedback_Label";
import LocationPassport_Feedback_Submit_Button from "@salesforce/label/c.LocationPassport_Feedback_Submit_Button";
import LocationPassport_Documents_Header from "@salesforce/label/c.LocationPassport_Documents_Header";
import LocationPassport_Successfull_Toast_Title from "@salesforce/label/c.LocationPassport_Successfull_Toast_Title";
import LocationPassport_Successfull_Toast_Message from "@salesforce/label/c.LocationPassport_Successfull_Toast_Message";
import LocationPassport_Error_Toast_Title from "@salesforce/label/c.LocationPassport_Error_Toast_Title";
import LocationPassport_Error_Toast_Message from "@salesforce/label/c.LocationPassport_Error_Toast_Message";
import LocationPassport_View_Button from "@salesforce/label/c.LocationPassport_View_Button";

const FIELDS = [
  "Account.Name",
  "Account.Access_Information__c",
  "Account.Attention_points_for_execution__c",
  "Account.OperatingHoursId"
];

const WORKORDER_FIELDS = ["WorkOrder.AccountId"];

export default class LocationPassport extends NavigationMixin(
  LightningElement
) {
  @api set recordId(value) {
    this._recordId = value;
    console.log("Record Id set in StartStopTimer: " + this._recordId);
  }

  get recordId() {
    return this._recordId;
  }

  accountData;
  showInfo = false;
  timeSlots;
  contentDocuments;
  dataLoaded = false;
  slotsLoaded = false;
  docsLoaded = false;
  feedbackText = "";
  isPosting = false;
  accountId;

  //Labels
  labels = {
    LocationPassport_General_Information_Header,
    LocationPassport_General_Information_Account_Name_Header,
    LocationPassport_General_Information_Account_AccessInformation_Header,
    LocationPassport_General_Information_Account_AttentionPoints_Header,
    LocationPassport_Operating_Hours_Header,
    LocationPassport_Operating_Hours_Day_Header,
    LocationPassport_Operating_Hours_Start_Time_Header,
    LocationPassport_Operating_Hours_End_Time_Header,
    LocationPassport_Feedback_Header,
    LocationPassport_Feedback_Label,
    LocationPassport_Feedback_Submit_Button,
    LocationPassport_Documents_Header,
    LocationPassport_View_Button
  };

  @wire(getRecord, { recordId: "$recordId", fields: WORKORDER_FIELDS })
  wiredRecord({ error, data }) {
    if (data) {
      console.log("data: ", data);
      this.accountId = data.fields.AccountId.value;
      console.log("accountId: ", this.accountId);
    } else if (error) {
      console.error("Error loading work order:", error);
    }
  }

  @wire(getRecord, { recordId: "$accountId", fields: FIELDS })
  wiredAccount({ error, data }) {
    if (data) {
      this.accountData = {
        Name: data.fields.Name.value,
        Access_Information__c: data.fields.Access_Information__c.value,
        Attention_points_for_execution__c:
          data.fields.Attention_points_for_execution__c.value,
        OperatingHoursId: data.fields.OperatingHoursId.value
      };
      this.dataLoaded = true;
      console.log("dataLoaded: ", this.dataLoaded);
    } else if (error) {
      console.error("Error loading account:", error);
    }
  }

  @wire(getTimeSlots, { accountId: "$accountId" })
  wiredTimeSlots(result) {
    if (result.data) {
      console.log("result: ", result);
      this.timeSlots = {
        data: result.data.map((slot) => ({
          ...slot,
          formattedStartTime: this.formatTime(slot.StartTime),
          formattedEndTime: this.formatTime(slot.EndTime)
        }))
      };
      this.slotsLoaded = true;
      console.log("slotsLoaded: ", this.slotsLoaded);
    }
  }
  formatTime(timeString) {
    console.log("timeString: ", timeString);
    //We get timestrings as 25200000 for 7:00 AM
    const time = new Date(timeString);
    return time.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  getDocumentIcon(fileExtension) {
    const iconMap = {
      pdf: "doctype:pdf",
      doc: "doctype:word",
      docx: "doctype:word",
      xls: "doctype:excel",
      xlsx: "doctype:excel",
      csv: "doctype:csv",
      txt: "doctype:txt",
      jpg: "doctype:image",
      jpeg: "doctype:image",
      png: "doctype:image"
    };
    return iconMap[fileExtension.toLowerCase()] || "doctype:unknown";
  }

  handleViewDocument(event) {
    const docId = event.currentTarget.dataset.id;
    this[NavigationMixin.Navigate]({
      type: "standard__namedPage",
      attributes: {
        pageName: "filePreview"
      },
      state: {
        selectedRecordId: docId
      }
    });
  }

  handleFeedbackChange(event) {
    this.feedbackText = event.target.value;
  }

  get isPostDisabled() {
    return !this.feedbackText || this.isPosting;
  }

  async handlePostFeedback() {
    if (!this.feedbackText) return;

    this.isPosting = true;
    try {
      await createFeedbackPost({
        //For accountId use the recordId of the record being open
        workOrderId: this.recordId,
        accountId: this.accountId,
        feedbackText: this.feedbackText
      }).then((result) => {
        console.log("result", result);
      });

      // Clear the input and show success message
      this.feedbackText = "";
      this.dispatchEvent(
        new ShowToastEvent({
          title: LocationPassport_Successfull_Toast_Title,
          message: LocationPassport_Successfull_Toast_Message,
          variant: "success"
        })
      );
    } catch (error) {
      // Show error message
      this.dispatchEvent(
        new ShowToastEvent({
          title: LocationPassport_Error_Toast_Title,
          message: LocationPassport_Error_Toast_Message,
          variant: "error"
        })
      );

      console.error("Error posting feedback:", error);
    } finally {
      this.isPosting = false;
    }
  }
}