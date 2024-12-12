/**
 * Created by fpardon on 11/12/2024.
 */

import { LightningElement, api, track } from 'lwc';
import getDepots from '@salesforce/apex/SFS_WorkOrderCreatorController.getDepots';
import createDepotVisitWorkOrder from '@salesforce/apex/SFS_WorkOrderCreatorController.createDepotVisitWorkOrder';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DepotVisitForm extends LightningElement {
    @api recordId;

    @track isLoading = false;
    @track depotOptions = [];
    @track selectedDepotId;
    @track subject = 'Internal Work Order';
    @track dropOffItems = '';
    @track pickUpItems = '';

    get isCreateDisabled() {
        return !this.selectedDepotId;
    }

    // Lifecycle hooks
    connectedCallback() {
        this.loadDepots();
    }

    // Data loading methods
    async loadDepots() {
        try {
            this.isLoading = true;
            const depots = await getDepots();
            this.depotOptions = depots.map(depot => ({
                label: depot.Name,
                value: depot.Id
            }));
        } catch (error) {
            this.handleError(error);
        } finally {
            this.isLoading = false;
        }
    }

    // Event handlers
    handleSubjectChange(event) {
        this.subject = event.detail.value;
    }

    handleDepotChange(event) {
        this.selectedDepotId = event.detail.value;
    }

    handleDropOffItemsChange(event) {
        this.dropOffItems = event.detail.value;
    }

    handlePickUpItemsChange(event) {
        this.pickUpItems = event.detail.value;
    }

    handleBack() {
        this.dispatchEvent(new CustomEvent('close'));
    }

    async handleCreate() {
        if (this.isCreateDisabled) return;

        try {
            this.isLoading = true;
            const workOrderId = await createDepotVisitWorkOrder({
                parentRecordId: this.recordId,
                depotId: this.selectedDepotId,
                subject: this.subject,
                dropOffItems: this.dropOffItems,
                pickUpItems: this.pickUpItems
            });

            this.dispatchEvent(new ShowToastEvent({
                title: 'Success',
                message: 'Depot Visit Work Order created successfully',
                variant: 'success',
                mode: 'dismissible'
            }));

            this.dispatchEvent(new CustomEvent('close'));
        } catch (error) {
            this.handleError(error);
        } finally {
            this.isLoading = false;
        }
    }

    handleError(error) {
        console.error(error);
        this.dispatchEvent(new ShowToastEvent({
            title: 'Error',
            message: error.body?.message || 'An unexpected error occurred',
            variant: 'error'
        }));
    }
}