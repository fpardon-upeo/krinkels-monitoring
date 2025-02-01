import { LightningElement, track, wire, api } from 'lwc';
import getTimeSheetEntries from '@salesforce/apex/TimeSheetEntryController.getTimeSheetEntries';
import getPicklistValues from '@salesforce/apex/TimeSheetEntryController.getPicklistValues';
import { getRecord } from 'lightning/uiRecordApi';

export default class TimeSheetEntryTable extends LightningElement {
    @track timeSheetEntries = [];
    @track isEditable = false;
    @track typeOptions = [];
    @api recordId;

    displayInfo = {
        primaryField: 'Asset.Name',
        additionalFields: ['ATAK_Project_Code__c'],
    };

    filter = {
        criteria: [
            {
                fieldPath: 'Status',
                operator: 'eq',
                value: 'Completed',
            },
        ],
    };


    @wire(getRecord, { recordId: '$recordId', fields: ['TimeSheet__c.StartDate'] })
    timeSheet;

    @wire(getTimeSheetEntries, { timeSheetId: '$recordId' })
    wiredTimeSheetEntries({ error, data }) {
        if (data) {
            this.timeSheetEntries = this.transformTimeSheetEntries(data);
        } else if (error) {
            console.error('Error fetching time sheet entries', error);
        }
    }

    @wire(getPicklistValues, { objectApiName: 'TimeSheetEntry', fieldApiName: 'Type' })
    wiredPicklistValues({ error, data }) {
        if (data) {
            this.typeOptions = data.map(value => ({ label: value, value }));
        } else if (error) {
            console.error('Error fetching picklist values', error);
        }
    }

    transformTimeSheetEntries(entries) {
        return entries.map(entry => {
            return {
                ...entry,
                StartTime: this.formatDateTime(entry.StartTime),
                EndTime: this.formatDateTime(entry.EndTime)
            };
        });
    }

    formatDateTime(datetimeValue) {
        if (!datetimeValue) return '';
        const date = new Date(datetimeValue);
        return date.toISOString().slice(0, 16); // Converts to "YYYY-MM-DDTHH:mm"
    }

    toggleEdit() {
        this.isEditable = !this.isEditable;
    }

    handleAddRow() {
        //Create a new Entry with a StartTime set to 08:00 on the Timesheet.StartDate and an EndTime set to 10:00 on the Timesheet.StartDate

        const newEntry = {
            TimeSheetId: this.recordId,
            StartTime: this.timeSheet.data.fields.StartDate.value + 'T08:00',
            EndTime: this.timeSheet.data.fields.StartDate.value + 'T10:00',
            WorkOrder: {
                Id: '',
                Name: ''
            }

        }

        this.timeSheetEntries = [
            ...this.timeSheetEntries,
            newEntry
        ];
    }

    handleInputChange(event) {
        const id = event.target.dataset.id;
        const field = event.target.dataset.field;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.timeSheetEntries = this.timeSheetEntries.map(entry => {
            if (entry.Id === id) {
                return { ...entry, [field]: value };
            }
            return entry;
        });
    }
}