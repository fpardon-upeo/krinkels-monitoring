/**
 * Created by Frederik on 10/29/2024.
 */

import { api, LightningElement, track } from "lwc";
import LightningConfirm from "lightning/confirm";
import { CloseActionScreenEvent } from "lightning/actions";
import createMaintenancePlanFormServiceContract from "@salesforce/apex/MaintenancePlanService.createMaintenancePlanFormServiceContract";
import getLinesWithInvalidATAKProject from "@salesforce/apex/MaintenancePlanService.getLinesWithInvalidATAKProject";
import Toast from "lightning/toast";
import { createRecord, updateRecord } from "lightning/uiRecordApi";
import { NavigationMixin } from "lightning/navigation";
import GenerateMaintenancePlan_Title from "@salesforce/label/c.GenerateMaintenancePlan_Title";
import GenerateMaintenancePlan_LineNumber_Label from "@salesforce/label/c.GenerateMaintenancePlan_LineNumber_Label";
import GenerateMaintenancePlan_AtakProject_Label from "@salesforce/label/c.GenerateMaintenancePlan_AtakProject_Label";
import GenerateMaintenancePlan_Confirmation_Message from "@salesforce/label/c.GenerateMaintenancePlan_Confirmation_Message";
import GenerateMaintenancePlan_ErrorTitle from "@salesforce/label/c.GenerateMaintenancePlan_ErrorTitle";
import GenerateMaintenancePlan_ErrorMessageInvalidATAKProject from "@salesforce/label/c.GenerateMaintenancePlan_ErrorMessageInvalidATAKProject";
import GenerateMaintenancePlan_SuccessTitle from "@salesforce/label/c.GenerateMaintenancePlan_SuccessTitle";
import GenerateMaintenancePlan_SuccessMessage from "@salesforce/label/c.GenerateMaintenancePlan_SuccessMessage";
import GenerateMaintenancePlan_ErrorMessage from "@salesforce/label/c.GenerateMaintenancePlan_ErrorMessage";
import GenerateMaintenancePlan_ErrorUpdateMessage from "@salesforce/label/c.GenerateMaintenancePlan_ErrorUpdateMessage";

export default class GenerateMaintenancePlan extends NavigationMixin(
  LightningElement
) {
  labels = {
    GenerateMaintenancePlan_Title,
    GenerateMaintenancePlan_LineNumber_Label,
    GenerateMaintenancePlan_AtakProject_Label,
    GenerateMaintenancePlan_Confirmation_Message,
    GenerateMaintenancePlan_ErrorTitle,
    GenerateMaintenancePlan_ErrorMessageInvalidATAKProject,
    GenerateMaintenancePlan_SuccessTitle,
    GenerateMaintenancePlan_SuccessMessage,
    GenerateMaintenancePlan_ErrorMessage,
    GenerateMaintenancePlan_ErrorUpdateMessage
  };

  @api recordId;
  @track showTable = false;
  @track tableData = [];
  @track draftValues = [];
  @track tableColumns = [
    {
      label: this.labels.GenerateMaintenancePlan_LineNumber_Label,
      fieldName: "LineItemNumber",
      type: "text"
    },
    {
      label: this.labels.GenerateMaintenancePlan_AtakProject_Label,
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
      message: this.labels.GenerateMaintenancePlan_Confirmation_Message,
      variant: "headerless"
    })
      .then((result) => {
        console.log("result", result);
        console.log("recordId", this.recordId);
        if (result === true) {
          let linesWithInvalidATAKProject = 0;
          getLinesWithInvalidATAKProject({ serviceContractId: this.recordId })
            .then((result) => {
              console.log("result", JSON.stringify(result));
              linesWithInvalidATAKProject = result.length;
              console.log(
                "linesWithInvalidATAKProject",
                linesWithInvalidATAKProject
              );
              if (linesWithInvalidATAKProject > 0) {
                this.showTable = true;
                this.tableData = result;
                Toast.show({
                  label: this.labels.GenerateMaintenancePlan_ErrorTitle,
                  message:
                    this.labels
                      .GenerateMaintenancePlan_ErrorMessageInvalidATAKProject,
                  variant: "error",
                  mode: "dismissable"
                });
              } else {
                createMaintenancePlanFormServiceContract({
                  serviceContractId: this.recordId
                })
                  .then((result) => {
                    console.log("Maintenance Plan ID:", result);

                    const maintenancePlanId = result;

                    Toast.show({
                      label: this.labels.GenerateMaintenancePlan_SuccessTitle,
                      message:
                        this.labels.GenerateMaintenancePlan_SuccessMessage,
                      variant: "success",
                      mode: "dismissable"
                    });

                    // Navigate to the new maintenance plan
                    this[NavigationMixin.Navigate]({
                      type: "standard__recordPage",
                      attributes: {
                        recordId: maintenancePlanId,
                        objectApiName: "MaintenancePlan",
                        actionName: "view"
                      }
                    });

                    // this.dispatchEvent(new CloseActionScreenEvent());
                  })
                  .catch((error) => {
                    console.error("error", error);
                    Toast.show({
                      label: this.labels.GenerateMaintenancePlan_ErrorTitle,
                      message: this.labels.GenerateMaintenancePlan_ErrorMessage,
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
        }
        if (result === false) {
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
        })
        .catch((error) => {
          console.error("error", error);
          Toast.show({
            label: this.labels.GenerateMaintenancePlan_ErrorTitle,
            message: this.labels.GenerateMaintenancePlan_ErrorUpdateMessage,
            variant: "error",
            mode: "dismissable"
          });
        });
    });
  }
}