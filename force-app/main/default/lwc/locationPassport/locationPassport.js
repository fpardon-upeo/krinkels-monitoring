/**
 * Created by Frederik on 11/21/2024.
 */

import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import getTimeSlots from '@salesforce/apex/AccountDetailsController.getTimeSlots';
import getContentDocuments from '@salesforce/apex/AccountDetailsController.getContentDocuments';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createFeedbackPost from '@salesforce/apex/AccountDetailsController.createFeedbackPost';

const FIELDS = ['Account.Name', 'Account.Access_Information__c', 'Account.Attention_points_for_execution__c', 'Account.OperatingHoursId'];
const WORKORDER_FIELDS = ['WorkOrder.AccountId'];

export default class LocationPassport extends NavigationMixin(LightningElement) {
  @api set recordId(value) {
    this._recordId = value;
    console.log('Record Id set in StartStopTimer: ' + this._recordId);
  }

  get recordId() {
    return this._recordId;
  }

  accountData;
  showInfo = false;
  timeSlots;
  contentDocuments;
  dataLoaded = false;
  slotsLoaded = false;
  docsLoaded = false;
  feedbackText = '';
  isPosting = false;
  accountId;

  @wire(getRecord, { recordId: '$recordId', fields: WORKORDER_FIELDS })
  wiredRecord({ error, data }) {
    if (data) {
      console.log('data: ', data);
      this.accountId = data.fields.AccountId.value;
      console.log('accountId: ', this.accountId);
    } else if (error) {
      console.error('Error loading work order:', error);
    }
  }

  @wire(getRecord, { recordId: '$accountId', fields: FIELDS })
  wiredAccount({ error, data }) {
    if (data) {
      this.accountData = {
        Name: data.fields.Name.value,
        Access_Information__c: data.fields.Access_Information__c.value,
        Attention_points_for_execution__c: data.fields.Attention_points_for_execution__c.value,
        OperatingHoursId: data.fields.OperatingHoursId.value
      };
      this.dataLoaded = true;
      console.log('dataLoaded: ', this.dataLoaded);
    } else if (error) {
      console.error('Error loading account:', error);
    }
  }

  @wire(getTimeSlots, { accountId: '$accountId' })
  wiredTimeSlots(result) {
    if (result.data) {
      console.log('result: ', result);
      this.timeSlots = {
        data: result.data.map(slot => ({
          ...slot,
          formattedStartTime: this.formatTime(slot.StartTime),
          formattedEndTime: this.formatTime(slot.EndTime)
        }))
      };
      this.slotsLoaded = true;
      console.log('slotsLoaded: ', this.slotsLoaded);
    }
  }

  @wire(getContentDocuments, { accountId: '$accountId' })
  wiredContentDocuments(result) {
    if (result.data) {
      this.contentDocuments = {
        data: result.data.map(doc => ({
          ...doc,
          iconName: this.getDocumentIcon(doc.FileExtension)
        }))
      };
      this.docsLoaded = false; //Disable until I figure out how to open the preview link
      console.log('docsLoaded: ', this.docsLoaded);
    }
  }

  formatTime(timeString) {
    console.log('timeString: ', timeString);
    //We get timestrings as 25200000 for 7:00 AM
    const time = new Date(timeString);
    return time.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  getDocumentIcon(fileExtension) {
    const iconMap = {
      'pdf': 'doctype:pdf',
      'doc': 'doctype:word',
      'docx': 'doctype:word',
      'xls': 'doctype:excel',
      'xlsx': 'doctype:excel',
      'csv': 'doctype:csv',
      'txt': 'doctype:txt',
      'jpg': 'doctype:image',
      'jpeg': 'doctype:image',
      'png': 'doctype:image'
    };
    return iconMap[fileExtension.toLowerCase()] || 'doctype:unknown';
  }

  handleViewDocument(event) {
    const docId = event.currentTarget.dataset.id;
    this[NavigationMixin.Navigate]({
      type: 'standard__namedPage',
      attributes: {
        pageName: 'filePreview'
      },
      state: {
        selectedRecordId: docId
      }
    });
  }

  handleFeedbackChange(event) {
    this.feedbackText = event.target.value;
  }

  get isPostDisabled() {
    return !this.feedbackText || this.isPosting;
  }


  async handlePostFeedback() {
    if (!this.feedbackText) return;

    this.isPosting = true;
    try {
      await createFeedbackPost({
        accountId: this.accountId,
        feedbackText: this.feedbackText
      });

      // Clear the input and show success message
      this.feedbackText = '';
      this.dispatchEvent(
        new ShowToastEvent({
          title: 'Success',
          message: 'Feedback posted successfully',
          variant: 'success'
        })
      );
    } catch (error) {
      // Show error message
      this.dispatchEvent(
        new ShowToastEvent({
          title: 'Error',
          message: error.body?.message || 'Error posting feedback',
          variant: 'error'
        })
      );
    } finally {
      this.isPosting = false;
    }
  }


}