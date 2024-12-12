import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getServiceAppointments from '@salesforce/apex/SFS_WorkOrderCreatorController.getServiceAppointments';

export default class WorkOrderCreator extends LightningElement {

    showTypeSelection = true;
    selectedType = null;


    @api
    get recordIds() {
        return this._recordIds || [];
    }
    set recordIds(value) {
        this._recordIds = Array.isArray(value) ? value : [value];
        this.recordId = this._recordIds[0];
        console.log('recordIds set to:', this._recordIds);
    }

    @api
    get startDate() {
        return this._startDate;
    }
    set startDate(value) {
        this._startDate = value;
        console.log('startDate set to:', this._startDate);
    }

    @api
    get endDate() {
        return this._endDate;
    }
    set endDate(value) {
        this._endDate = value;
        console.log('endDate set to:', this._endDate);
    }

    _recordIds;
    _startDate;
    _endDate;
    appointments;
    error;
    recordId;

    connectedCallback() {
        console.log('Component connected with:', {
            recordIds: this.recordIds,
            startDate: this.startDate,
            endDate: this.endDate
        });

        if (this.recordIds && this.recordIds.length > 0) {
            this.recordId = this.recordIds[0];
            console.log('Loading appointments for:', this.recordId);
            this.loadAppointments();
        }
    }

    renderedCallback() {
        console.log('Component rendered');
    }

    async loadAppointments() {
        try {
            if (!this.recordIds || this.recordIds.length === 0) {
                console.log('No record IDs available');
                return;
            }
            console.log('Loading appointments for:', this.recordIds);
            this.appointments = await getServiceAppointments({
                appointmentId: this.recordId
            });
            console.log('Appointments loaded:', this.appointments);
            console.log('Appointments loaded:', JSON.stringify(this.appointments));
        } catch (error) {
            console.error('Error in loadAppointments:', error);
            this.error = error;
            this.showToast('Error', error.body?.message || 'Error loading appointments', 'error');
        }
    }

    get isWasteVisit() {
        return this.selectedType === 'waste';
    }

    get isDepotVisit() {
        return this.selectedType === 'depot';
    }

    get isShopVisit() {
        return this.selectedType === 'shop';
    }

    handleWasteVisit() {
        this.selectedType = 'waste';
        this.showTypeSelection = false;
    }

    handleDepotVisit() {
        this.selectedType = 'depot';
        this.showTypeSelection = false;
    }

    handleRedoVisit() {
        this.selectedType = 'shop';
        this.showTypeSelection = false;
    }

    handleBack() {
        this.selectedType = null;
        this.showTypeSelection = true;
    }

    handleClose() {
        this.handleBack();
        this.showToast('Info', 'Work Order Created', 'info');
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant
        }));
    }
}