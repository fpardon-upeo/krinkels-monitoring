/**
 * Created by Frederik on 11/15/2024.
 */

import { LightningElement, api, wire } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { updateRecord, getRecord, createRecord } from "lightning/uiRecordApi";
import { CloseActionScreenEvent } from "lightning/actions";
import ID from "@salesforce/user/Id";
import { gql, graphql } from "lightning/uiGraphQLApi";
import getBreakRecordTypeId from "@salesforce/apex/TimeSheetController.getBreakRecordTypeId";
import StartStopTimer_Title from "@salesforce/label/c.StartStopTimer_Title";
import StartStopTimer_LogBreakText from "@salesforce/label/c.StartStopTimer_LogBreakText";
import StartStopTimer_LogBreakDescription from "@salesforce/label/c.StartStopTimer_LogBreakDescription";
import StartStopTimer_ResumeWorkText from "@salesforce/label/c.StartStopTimer_ResumeWorkText";
import StartStopTimer_ResumeWorkDescription from "@salesforce/label/c.StartStopTimer_ResumeWorkDescription";
import StartStopTimer_PauseWorkText from "@salesforce/label/c.StartStopTimer_PauseWorkText";
import StartStopTimer_PauseWorkDescription from "@salesforce/label/c.StartStopTimer_PauseWorkDescription";
import StartStopTimer_BreakDurationText from "@salesforce/label/c.StartStopTimer_BreakDurationText";
import StartStopTimer_SaveButtonText from "@salesforce/label/c.StartStopTimer_SaveButtonText";
import StartStopTimer_SuccessTitle from "@salesforce/label/c.StartStopTimer_SuccessTitle";
import StartStopTimer_SuccessMessage from "@salesforce/label/c.StartStopTimer_SuccessMessage";
import StartStopTimer_ErrorTitle from "@salesforce/label/c.StartStopTimer_ErrorTitle";
import StartStopTimer_ErrorMessage from "@salesforce/label/c.StartStopTimer_ErrorMessage";

export default class StartStopTimer extends LightningElement {
  _recordId;
  currentStatus;
  newStatus;
  showSelectionScreen = true;
  showBreakForm = false;
  breakDuration = 15;
  serviceResourceId;
  recordTypeId;

  labels = {
    StartStopTimer_Title,
    StartStopTimer_LogBreakText,
    StartStopTimer_LogBreakDescription,
    StartStopTimer_ResumeWorkText,
    StartStopTimer_ResumeWorkDescription,
    StartStopTimer_PauseWorkText,
    StartStopTimer_PauseWorkDescription,
    StartStopTimer_BreakDurationText,
    StartStopTimer_SaveButtonText,
    StartStopTimer_SuccessTitle,
    StartStopTimer_SuccessMessage,
    StartStopTimer_ErrorTitle,
    StartStopTimer_ErrorMessage
  };

  //--------------------------------------------------GETTERS/SETTERS--------------------------------------------------//

  @api set recordId(value) {
    this._recordId = value;
    console.log("Record Id set in StartStopTimer: " + this._recordId);
  }

  get recordId() {
    return this._recordId;
  }

  get variables() {
    return {
      userId: ID
    };
  }

  //--------------------------------------------------CALLBACKS--------------------------------------------------//

  connectedCallback() {
    console.log("Connected Callback called in StartStopTimer");
    getBreakRecordTypeId().then((result) => {
      this.recordTypeId = result;
      console.log("Break Record Type Id: ", this.recordTypeId);
    });
  }

  //--------------------------------------------------WIRES-----------------------------------------------------//

  @wire(getRecord, {
    recordId: "$_recordId",
    fields: ["ServiceAppointment.Status"]
  })
  wiredRecord({ error, data }) {
    if (error) {
      console.error("Error loading record:", error);
    } else if (data) {
      console.log("Record loaded:", data);
      this.currentStatus = data.fields.Status.value;
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

  //--------------------------------------------------HANDLERS--------------------------------------------------//

  handleResumeWork() {
    console.log("Resuming work on record: ", this.recordId);
    this.newStatus = "In Progress";
    this.updateRecordStatus();
  }

  handlePauseWork() {
    console.log("Pausing work on record: ", this.recordId);
    this.newStatus = "Paused";
    this.updateRecordStatus();
  }

  breakDurationChange(event) {
    this.breakDuration = event.target.value;
  }

  handleLogBreak() {
    console.log("Logging break for record: ", this.recordId);

    //First calculate the end time for the break
    let endTime = new Date();
    endTime.setMinutes(endTime.getMinutes() + this.breakDuration);
    console.log("End time for break: ", endTime);

    //Create a new Resource Absence record
    let recordInput = {
      apiName: "ResourceAbsence",
      fields: {
        Start: new Date().toISOString(),
        End: endTime.toISOString(),
        ResourceId: this.serviceResourceId,
        Type: "Standard",
        RecordTypeId: this.recordTypeId
      }
    };

    createRecord(recordInput)
      .then((response) => {
        console.log("Resource Absence record created: ", response.id);
        this.showToast("Success", "Break logged successfully", "success");
      })
      .catch((error) => {
        console.error("Error creating Resource Absence record:", error);
        this.showToast("Error", "Failed to log break", "error");
      });
  }

  handleAddBreak() {
    console.log("Adding break for record: ", this.recordId);
    this.showSelectionScreen = false;
    this.showBreakForm = true;
  }

  updateRecordStatus() {
    try {
      const fields = {
        Id: this.recordId,
        Status: this.newStatus
      };
      const recordInput = { fields };
      updateRecord(recordInput)
        .then(() => {
          console.log("Record updated with status:", this.newStatus);
          this.showToast(
            this.labels.StartStopTimer_SuccessTitle,
            this.labels.StartStopTimer_SuccessMessage,
            "success"
          );
        })
        .catch((error) => {
          console.error("Error updating record:", error);
          this.showToast(
            this.labels.StartStopTimer_ErrorTitle,
            this.labels.StartStopTimer_ErrorMessage,
            "error"
          );
        })
        .finally(() => {
          this.dispatchEvent(new CloseActionScreenEvent());
        });
    } catch (error) {
      console.error("Error updating record:", error);
      this.showToast(
        this.labels.StartStopTimer_ErrorTitle,
        this.labels.StartStopTimer_ErrorMessage,
        "error"
      );
    }
  }

  //--------------------------------------------------UTILITIES--------------------------------------------------//

  showToast(title, message, variant) {
    const event = new ShowToastEvent({
      title: title,
      message: message,
      variant: variant
    });
    this.dispatchEvent(event);
    //Wait 1 second before closing the toast
    setTimeout(() => {
      this.closeActionScreen();
    }, 1000);
  }

  closeActionScreen() {
    this.dispatchEvent(new CloseActionScreenEvent());
  }
}