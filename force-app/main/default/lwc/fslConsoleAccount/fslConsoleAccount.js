import { LightningElement, api } from 'lwc';
import getFieldSetFields from '@salesforce/apex/fsl_Console_AccountController.getFieldSetFields';
import getAccountId from '@salesforce/apex/fsl_Console_AccountController.getAccountId';

export default class FSL_Console_Account_Tab extends LightningElement {
    @api recordId; // ServiceAppointment Id passed from Visualforce
    accountId; // The related Account Id
    fields = []; // Fields retrieved from the field set

    connectedCallback() {
        console.log('recordId:', this.recordId);
        this.accountId = this.recordId; // Set the AccountId to the ServiceAppointment Id
        this.fetchFieldSetFields();
    }

    // Fetch the AccountId related to the ServiceAppointment
    fetchAccountId() {
        getAccountId({ serviceAppointmentId: this.recordId })
            .then((result) => {
                this.accountId = result; // Store the AccountId
            })
            .catch((error) => {
                console.error('Error fetching AccountId:', error);
            });
    }

    // Fetch the field set fields for the Account object
    fetchFieldSetFields() {
        getFieldSetFields({ fieldSetName: 'FSL__Gantt_Lightbox', objectName: 'Account' })
            .then((fields) => {
                console.log('fields:', fields);
                console.log('fields:', JSON.stringify(fields));
                this.fields = fields; // Assign the fields
            })
            .catch((error) => {
                console.error('Error fetching field set fields:', error);
            });
    }

    // Combined condition to check if both fields and accountId are available
    get hasFieldsAndAccountId() {
        return this.fields.length > 0 && this.accountId;
    }
}