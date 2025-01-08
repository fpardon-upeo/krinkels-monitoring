/**
 * Created by Frederik on 1/7/2025.
 */

import {LightningElement, api} from 'lwc';
import getWorkOrders from '@salesforce/apex/WorkOrderReviewController.getWorkOrders';

export default class WorkOrderReview extends LightningElement {

    @api recordId;
    columns = [
        {label: 'Number', fieldName: 'WorkOrderLink', type: 'url', typeAttributes: {label: {fieldName: 'WorkOrderNumber'}, target: '_blank'}},
        {label: 'Description', fieldName: 'Description', type: 'text', wrapText: true},
        {label: 'Status', fieldName: 'Status', type: 'text'},
        {label: 'PDF Status', fieldName: 'PDFStatus', type: 'text'},
        {label: 'Sched. Start', fieldName: 'AppointmentScheduledStartTime', type: 'date', typeAttributes:{
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
            }},
        {label: 'Sched. End', fieldName: 'AppointmentScheduledEndTime', type: 'date', typeAttributes:{
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        }},
        {label: 'Actual Start', fieldName: 'AppointmentActualStartTime', type: 'date', typeAttributes:{
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
        }},
        {label: 'Actual End', fieldName: 'AppointmentActualStartTime', type: 'date', typeAttributes:{
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
        }}

    ];

    workOrders;

    connectedCallback() {
        getWorkOrders({timesheetId: this.recordId})
            .then(result => {
                this.workOrders = result;
                console.log('Work orders loaded:', this.workOrders);
            })
            .catch(error => {
                console.error('Error loading work orders:', error);
            });
    }

    get workOrderSize() {
        return this.workOrders ? this.workOrders.length : 0;
    }
}