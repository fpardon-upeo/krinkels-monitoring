/**
 * Created by Frederik on 11/5/2024.
 */

import { api, LightningElement } from 'lwc';
import LightningConfirm from 'lightning/confirm';
import { CloseActionScreenEvent } from 'lightning/actions';
import scheduleWorkOrders from '@salesforce/apex/WorkOrderSchedulerController.scheduleWorkOrders';
import Toast from 'lightning/toast';
import { subscribe } from "lightning/empApi";

export default class ScheduleWorkOrders extends LightningElement {
  @api recordId; // This will receive the Maintenance Plan Id
  @api channelName = "/event/Work_Order_Creation_Event__e";

  connectedCallback() {
    this.openConfirm();
  }

  async openConfirm() {
    const result = await LightningConfirm.open({
      message: 'Are you sure you want to generate work orders for this maintenance plan? This process will run in the background.',
      variant: 'headerless',
    });

    if (result) {
      console.log('recordId', this.recordId);
      scheduleWorkOrders({ maintenancePlanId: this.recordId })
        .then(() => {
          Toast.show({
            label: 'Success',
            message: 'Work order generation has started. The Contract Managers will be notified once the work orders are ready.',
            variant: 'success',
            mode: 'dismissable'
          });
          this.dispatchEvent(new CloseActionScreenEvent());
        })
        .catch(error => {
          console.error('error', error);
          Toast.show({
            label: 'Error',
            message: error.body?.message || 'An error occurred while scheduling work orders',
            variant: 'error',
            mode: 'dismissable'
          });
          this.dispatchEvent(new CloseActionScreenEvent());
        });
    } else {
      this.dispatchEvent(new CloseActionScreenEvent());
    }
  }
}