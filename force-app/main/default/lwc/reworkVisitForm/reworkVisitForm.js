/**
 * Created by fpardon on 11/12/2024.
 */

import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getReworkReasons from '@salesforce/apex/SFS_WorkOrderCreatorController.getReworkReasons';
import getExistingTasks from '@salesforce/apex/SFS_WorkOrderCreatorController.getExistingTasks';
import createReworkOrder from '@salesforce/apex/SFS_WorkOrderCreatorController.createReworkOrder';

const COLUMNS = [
    { label: 'Description', fieldName: 'Description', type: 'text', wrapText: true }
];

export default class ReworkVisitForm extends LightningElement {
    @api recordId;

    @track currentStep = 1;
    @track isLoading = false;
    @track subject;
    @track reworkReason;
    @track reworkReasonOptions = [];
    @track selectedTaskType;
    @track existingTasks = [];
    @track selectedTasks = [];
    @track showAdditionalTasks = false;
    @track newTasks = [];

    columns = COLUMNS;
    taskTypeOptions = [
        { label: 'Tasks from previous work order', value: 'redo' },
        { label: 'Add new tasks', value: 'new' }
    ];

    // Lifecycle hooks
    connectedCallback() {
        this.loadInitialData();
    }

    // Step management getters
    get isStepOne() {
        return this.currentStep === 1;
    }

    get isStepTwo() {
        return this.currentStep === 2;
    }

    get isStepThree() {
        return this.currentStep === 3;
    }

    // Path styling getters
    get stepOneClass() {
        let baseClass = 'slds-tabs_path__item';
        if (this.currentStep === 1) {
            baseClass += ' slds-is-current slds-is-active';
        } else if (this.currentStep > 1) {
            baseClass += ' slds-is-complete';
        }
        return baseClass;
    }

    get stepTwoClass() {
        let baseClass = 'slds-tabs_path__item';
        if (this.currentStep === 2) {
            baseClass += ' slds-is-current slds-is-active';
        } else if (this.currentStep > 2) {
            baseClass += ' slds-is-complete';
        }
        return baseClass;
    }

    get stepThreeClass() {
        let baseClass = 'slds-tabs_path__item';
        if (this.currentStep === 3) {
            baseClass += ' slds-is-current slds-is-active';
        }
        return baseClass;
    }

    // Content display getters
    get isRedoTasks() {
        return this.selectedTaskType === 'redo';
    }

    get showNewTasks() {
        return this.selectedTaskType === 'new' || this.showAdditionalTasks;
    }

    get nextButtonLabel() {
        return this.isStepThree ? 'Create Work Order' : 'Next';
    }

    get isNextDisabled() {
        switch(this.currentStep) {
            case 1:
                return !this.subject || !this.reworkReason || !this.selectedTaskType;
            case 2:
                if (this.isRedoTasks) {
                    return !this.selectedTasks.length && !this.newTasks.length;
                }
                return !this.newTasks.length;
            default:
                return false;
        }
    }

    get hasSelectedTasks() {
        return this.selectedTasks && this.selectedTasks.length > 0;
    }

    get hasNewTasks() {
        return this.newTasks && this.newTasks.length > 0;
    }

    get selectedTasksDisplay() {
        return this.selectedTasks || [];
    }

    // Data loading methods
    async loadInitialData() {
        try {
            this.isLoading = true;
            const [reasons, workOrder] = await Promise.all([
                getReworkReasons(),
                getExistingTasks({ serviceAppointmentId: this.recordId })
            ]);

            this.reworkReasonOptions = reasons.map(reason => ({
                label: reason,
                value: reason
            }));

            this.existingTasks = workOrder.WorkOrderLineItems || [];
            this.subject = `Rework of ${workOrder.WorkOrderNumber}`;
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

    handleReasonChange(event) {
        this.reworkReason = event.detail.value;
    }

    handleTaskTypeChange(event) {
        this.selectedTaskType = event.detail.value;
        this.selectedTasks = [];
        this.newTasks = [];
        this.showAdditionalTasks = false;
    }

    handleTaskSelection(event) {
        const selectedRows = event.detail.selectedRows;
        this.selectedTasks = [...selectedRows];
    }

    handleAdditionalTasksChange(event) {
        this.showAdditionalTasks = event.detail.checked;
        if (!this.showAdditionalTasks) {
            this.newTasks = [];
        }
    }

    handleAddTask() {
        this.newTasks = [...this.newTasks, {
            key: Date.now().toString(),
            description: ''
        }];
    }

    handleRemoveTask(event) {
        const index = parseInt(event.target.dataset.index, 10);
        this.newTasks = this.newTasks.filter((_, i) => i !== index);
    }

    handleTaskDescriptionChange(event) {
        const index = parseInt(event.target.dataset.index, 10);
        const description = event.detail.value;
        this.newTasks = this.newTasks.map((task, i) => {
            if (i === index) {
                return { ...task, description };
            }
            return task;
        });
    }

    async handleNextOrCreate() {
        if (this.isStepThree) {
            await this.handleCreate();
        } else {
            this.handleNext();
        }
    }

    handleNext() {
        if (this.isNextDisabled) {
            return;
        }
        this.currentStep += 1;
    }

    handleBack() {
        if (this.currentStep > 1) {
            this.currentStep -= 1;
        } else {
            this.dispatchEvent(new CustomEvent('close'));
        }
    }

    async handleCreate() {
        try {
            this.isLoading = true;
            const workOrderId = await createReworkOrder({
                parentRecordId: this.recordId,
                subject: this.subject,
                reworkReason: this.reworkReason,
                selectedTaskIds: this.selectedTasks.map(task => task.Id),
                newTasks: this.newTasks.map(task => task.description)
            });

            this.dispatchEvent(new ShowToastEvent({
                title: 'Success',
                message: 'Rework Order created successfully',
                variant: 'success'
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