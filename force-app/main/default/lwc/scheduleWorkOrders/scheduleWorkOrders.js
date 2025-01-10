/**
 * Created by Frederik on 11/5/2024.
 */

import { api, LightningElement } from "lwc";
import LightningConfirm from "lightning/confirm";
import { CloseActionScreenEvent } from "lightning/actions";
import scheduleWorkOrders from "@salesforce/apex/WorkOrderSchedulerController.scheduleWorkOrders";
import Toast from "lightning/toast";
import { subscribe } from "lightning/empApi";
import ScheduleWO_ConfirmMessage from "@salesforce/label/c.ScheduleWO_ConfirmMessage";
import ScheduleWO_SuccessTitle from "@salesforce/label/c.ScheduleWO_SuccessTitle";
import ScheduleWO_ErrorTitle from "@salesforce/label/c.ScheduleWO_ErrorTitle";
import ScheduleWO_SuccessMessage from "@salesforce/label/c.ScheduleWO_SuccessMessage";
import ScheduleWO_ErrorMessage from "@salesforce/label/c.ScheduleWO_ErrorMessage";

export default class ScheduleWorkOrders extends LightningElement {
  labels = {
    ScheduleWO_ConfirmMessage,
    ScheduleWO_SuccessTitle,
    ScheduleWO_ErrorTitle,
    ScheduleWO_SuccessMessage,
    ScheduleWO_ErrorMessage
  };
  @api recordId; // This will receive the Maintenance Plan Id
  @api channelName = "/event/Work_Order_Creation_Event__e";

  connectedCallback() {
    this.openConfirm();
  }

  async openConfirm() {
    const result = await LightningConfirm.open({
      message: this.labels.ScheduleWO_ConfirmMessage,
      variant: "headerless"
    });

    if (result) {
      console.log("recordId", this.recordId);
      scheduleWorkOrders({ maintenancePlanId: this.recordId })
        .then(() => {
          Toast.show({
            label: this.labels.ScheduleWO_SuccessTitle,
            message: this.labels.ScheduleWO_SuccessMessage,
            variant: "success",
            mode: "dismissable"
          });
          this.dispatchEvent(new CloseActionScreenEvent());
        })
        .catch((error) => {
          console.error("error", error);
          Toast.show({
            label: this.labels.ScheduleWO_ErrorTitle,
            message: this.labels.ScheduleWO_ErrorMessage,
            variant: "error",
            mode: "dismissable"
          });
          this.dispatchEvent(new CloseActionScreenEvent());
        });
    } else {
      this.dispatchEvent(new CloseActionScreenEvent());
    }
  }
}