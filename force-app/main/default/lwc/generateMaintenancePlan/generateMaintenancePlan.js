/**
 * Created by Frederik on 10/29/2024.
 */

import { api, LightningElement, track } from "lwc";
import LightningConfirm from "lightning/confirm";
import { CloseActionScreenEvent } from "lightning/actions";
import createMaintenancePlanFormServiceContract from "@salesforce/apex/MaintenancePlanService.createMaintenancePlanFormServiceContract";
import getLinesWithInvalidATAKProject from "@salesforce/apex/MaintenancePlanService.getLinesWithInvalidATAKProject";
import firePlatformEvent from "@salesforce/apex/ServiceBuilderController.firePlatformEvent";
import Toast from "lightning/toast";
import { createRecord, updateRecord } from "lightning/uiRecordApi";
import CONTRACT_EVENT_OBJECT from "@salesforce/schema/Contract_Event__c";

export default class GenerateMaintenancePlan extends LightningElement {
  @api recordId;
  @track showTable = false;
  @track tableData = [];
  @track draftValues = [];
  @track tableColumns = [
    {
      label: "Line Number",
      fieldName: "LineItemNumber",
      type: "text"
    },
    {
      label: "ATAK Project",
      fieldName: "Project_Code__c",
      type: "text",
      editable: true
    }
  ];

  connectedCallback() {
    this.openConfirm();
    console.log("recordId", this.recordId);
  }

  async openConfirm() {
    const result = await LightningConfirm.open({
      message: "Are you sure you want to create a maintenance plan? This will create a maintenance plan for the selected equipment.",
      variant: "headerless"
    })
      .then((result) => {
        console.log("result", result);
        console.log("recordId", this.recordId);
        if(result === true) {
          let linesWithInvalidATAKProject = 0;
          getLinesWithInvalidATAKProject({ serviceContractId: this.recordId })
            .then((result) => {
              console.log("result", JSON.stringify(result));
              linesWithInvalidATAKProject = result.length;
              console.log("linesWithInvalidATAKProject", linesWithInvalidATAKProject);
              if(linesWithInvalidATAKProject > 0) {
                this.showTable = true;
                this.tableData = result;
                Toast.show({
                  label: "Error",
                  message: "The selected equipment has lines with invalid ATAK projects. Please correct the ATAK projects before creating the maintenance plan.",
                  variant: "error",
                  mode: "dismissable"
                });
              } else {
                createMaintenancePlanFormServiceContract({
                  serviceContractId: this.recordId
                })
                  .then((result) => {
                    console.log("result", result);
                    Toast.show({
                      label: "Success",
                      message: "The maintenance plan was created successfully",
                      variant: "success",
                      mode: "dismissable"
                    });
                    this.dispatchEvent(new CloseActionScreenEvent());
                  })
                  .catch((error) => {
                    console.error("error", error);
                    Toast.show({
                      label: "Error",
                      message: "An error occurred while creating the maintenance plan",
                      variant: "error",
                      mode: "dismissable"
                    });
                    this.dispatchEvent(new CloseActionScreenEvent());
                  });
              }
            })
            .catch((error) => {
              console.error("error", error);
            });
        } if (result === false) {
          this.dispatchEvent(new CloseActionScreenEvent());
        }
      })
      .catch((error) => {
        console.error("error", error);
      });
  }

  handleSave(event) {
    console.log("event.detail.draftValues", event.detail.draftValues);
    this.draftValues = event.detail.draftValues;
    console.log("this.draftValues", this.draftValues);
    let recordsToUpdate = this.draftValues.length;
    let recordsUpdated = 0;
    this.draftValues.forEach((draftValue) => {
      console.log("draftValue", draftValue);
      const fields = {};
      fields.Id = draftValue.Id;
      fields.Project_Code__c = draftValue.Project_Code__c;
      const recordInput = { fields };
      console.log("recordInput", recordInput);
      updateRecord(recordInput)
        .then(() => {
          recordsUpdated++;
          console.log("recordsUpdated", recordsUpdated);
          if(recordsUpdated === recordsToUpdate) {
            firePlatformEvent({ contractId: this.recordId })
              .then(() => {
              this.openConfirm();
              })
              .catch((error) => {
                console.error("error", error);
                this.openConfirm();
              });
          }
        })
        .catch((error) => {
          console.error("error", error);
          Toast.show({
            label: "Error",
            message: "An error occurred while updating the line items. Please try again.",
            variant: "error",
            mode: "dismissable"
          });
        });
    });
  }
}