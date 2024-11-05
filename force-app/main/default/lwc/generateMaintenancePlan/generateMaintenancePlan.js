/**
 * Created by Frederik on 10/29/2024.
 */

import { api, LightningElement, track } from "lwc";
import LightningConfirm from "lightning/confirm";
import { CloseActionScreenEvent } from "lightning/actions";
import createMaintenancePlanFormServiceContract from "@salesforce/apex/MaintenancePlanService.createMaintenancePlanFormServiceContract";
import Toast from "lightning/toast";

export default class GenerateMaintenancePlan extends LightningElement {
  @api recordId;

  connectedCallback() {
    this.openConfirm();
    console.log("recordId", this.recordId);
  }

  async openConfirm() {
    const result = await LightningConfirm.open({
      message:
        "Are you sure you want to create a maintenance plan? This will create a maintenance plan for the selected equipment.",
      variant: "headerless"
    })
      .then((result) => {
        console.log("result", result);
        console.log("recordId", this.recordId);
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
      })
      .catch((error) => {
        console.error("error", error);
      });
  }

  closeScreen() {
    this.dispatchEvent(new CloseActionScreenEvent());
  }
}