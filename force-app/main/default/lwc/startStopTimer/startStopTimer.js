/**
 * Created by Frederik on 11/15/2024.
 */

import { LightningElement, api, wire } from "lwc";
import {ShowToastEvent } from 'lightning/platformShowToastEvent';
import { updateRecord, getRecord, createRecord } from "lightning/uiRecordApi";
import { CloseActionScreenEvent } from 'lightning/actions';
import ID from '@salesforce/user/Id';
import { gql, graphql } from "lightning/uiGraphQLApi";
import getBreakRecordTypeId from "@salesforce/apex/TimeSheetController.getBreakRecordTypeId";




export default class StartStopTimer extends LightningElement{

  _recordId;
  currentStatus;
  newStatus;
  showSelectionScreen = true;
  showBreakForm = false;
  breakDuration = 15;
  serviceResourceId;
  recordTypeId;

  //--------------------------------------------------GETTERS/SETTERS--------------------------------------------------//

  @api set recordId(value) {
    this._recordId = value;
    console.log('Record Id set in StartStopTimer: ' + this._recordId);
  }

  get recordId() {
    return this._recordId;
  }

  get variables() {
    return {
      userId: ID
    };
  }



  //--------------------------------------------------CALLBACKS--------------------------------------------------//

  connectedCallback() {
    console.log('Connected Callback called in StartStopTimer');
    getBreakRecordTypeId().then(
      result => {
        this.recordTypeId = result;
        console.log('Break Record Type Id: ', this.recordTypeId);
      }
    )
  }

  //--------------------------------------------------WIRES-----------------------------------------------------//

  @wire(getRecord, { recordId: '$_recordId', fields: ['ServiceAppointment.Status'] })
  wiredRecord({ error, data }) {
    if (error) {
      console.error('Error loading record:', error);
    } else if (data) {
      console.log('Record loaded:', data);
      this.currentStatus = data.fields.Status.value;
    }
  }

  @wire(graphql, {
    query: gql`
    query ServiceResources($userId: ID) {
      uiapi {
        query {
          ServiceResource(where: { RelatedRecordId: { eq: $userId } }) {
            edges {
              node {
                Id
              }
            }
          }
        }
      }
    }`,
    variables: "$variables",
  })
  resourcesQueryResult ({error, data}) {
    if (data) {
      this.serviceResourceId = data.uiapi.query.ServiceResource.edges[0].node.Id;
      console.log('service resource id', this.serviceResourceId);
    } else if (error) {
      console.log(error);
    }
  }

  //--------------------------------------------------HANDLERS--------------------------------------------------//

  handleResumeWork() {
    console.log('Resuming work on record: ', this.recordId);
    this.newStatus = 'In Progress';
    this.updateRecordStatus();
  }

  handlePauseWork() {
    console.log('Pausing work on record: ', this.recordId);
    this.newStatus = 'Paused';
    this.updateRecordStatus();
  }

  breakDurationChange(event) {
    this.breakDuration = event.target.value;
  }

  handleLogBreak() {
    console.log('Logging break for record: ', this.recordId);

    //First calculate the end time for the break
    let endTime = new Date();
    endTime.setMinutes(endTime.getMinutes() + this.breakDuration);
    console.log('End time for break: ', endTime);

    //Create a new Resource Absence record
    let recordInput = {
      apiName: 'ResourceAbsence',
      fields: {
        Start: new Date().toISOString(),
        End: endTime.toISOString(),
        ResourceId: this.serviceResourceId,
        Type: 'Standard',
        RecordTypeId: this.recordTypeId
      }
    };

    createRecord(recordInput).then(
      response => {
        console.log('Resource Absence record created: ', response.id);
        this.showToast('Success', 'Break logged successfully', 'success');
      }
    ).catch(
      error => {
        console.error('Error creating Resource Absence record:', error);
        this.showToast('Error', 'Failed to log break', 'error');
      }
    );
  }

  handleAddBreak() {
    console.log('Adding break for record: ', this.recordId);
    this.showSelectionScreen = false;
    this.showBreakForm = true;
  }

  updateRecordStatus() {
    try {
      const fields = {
        Id: this.recordId,
        Status: this.newStatus
      };
      const recordInput = { fields };
      updateRecord(recordInput)
        .then(() => {
          console.log('Record updated with status:', this.newStatus);
          this.showToast('Success', 'Record updated', 'success');
        })
        .catch(error => {
          console.error('Error updating record:', error);
          this.showToast('Error', 'Failed to update record', 'error');
        })
        .finally(() => {
          this.dispatchEvent(new CloseActionScreenEvent());
        });
    } catch (error) {
      console.error('Error updating record:', error);
      this.showToast('Error', 'Failed to update record', 'error');
    }
  }

  //--------------------------------------------------UTILITIES--------------------------------------------------//

  showToast(title, message, variant) {
    const event = new ShowToastEvent({
      title: title,
      message: message,
      variant: variant
    });
    this.dispatchEvent(event);
  }

}