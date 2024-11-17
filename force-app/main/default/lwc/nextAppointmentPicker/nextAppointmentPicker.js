/**
 * Created by fpardon on 15/11/2024.
 */

import {LightningElement, api, wire, track} from 'lwc';
import { gql, graphql } from "lightning/uiGraphQLApi";
import { getRecord, updateRecord}  from "lightning/uiRecordApi";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';
import ID from '@salesforce/user/Id';
//LABELS
import AppointmentPicker_Next_Button from '@salesforce/label/c.AppointmentPicker_Next_Button';
import AppointmentPicker_No_Results from '@salesforce/label/c.AppointmentPicker_No_Results';
import AppointmentPicker_End_Day_Button from '@salesforce/label/c.AppointmentPicker_End_Day_Button';
import AppointmentPicker_Select_Next_Appointment_Button from '@salesforce/label/c.AppointmentPicker_Select_Next_Appointment_Button';
import AppointmentPicker_Appointments_Header from '@salesforce/label/c.AppointmentPicker_Appointments_Header';
import AppointmentPicker_Travel_Started_Toast from '@salesforce/label/c.AppointmentPicker_Travel_Started_Toast';
import AppointmentPicker_Day_Ended_Toast from '@salesforce/label/c.AppointmentPicker_Day_Ended_Toast';
import AppointmentPicker_Spinner from '@salesforce/label/c.AppointmentPicker_Spinner';
import AppointmentPicker_Incomplete_Work_Steps_Message from '@salesforce/label/c.AppointmentPicker_Incomplete_Work_Steps_Message';
import AppointmentPicker_Next_Action_Text from '@salesforce/label/c.AppointmentPicker_Next_Action_Text';
import AppointmentPicker_Next_Action_Sub_Text from '@salesforce/label/c.AppointmentPicker_Next_Action_Sub_Text';
import AppointmentPicker_End_Day_Button_Sub_Text from '@salesforce/label/c.AppointmentPicker_End_Day_Button_Sub_Text';
import {NavigationMixin} from "lightning/navigation";
import {
    ToastTypes,
} from "c/utilsImageCapture";




export default class NextAppointmentPicker extends NavigationMixin(LightningElement) {

//--------------------------------------API------------------------------------------//

    @api recordId
    showSpinner = true;
    ID = ID;
    serviceResourceId;
    serviceAppointments;
    workOrderId;
    nextWorkOrderId;
    serviceAppointmentId;
    data = [];
    otherWorkSteps;
    toastType = null;
    toastMessage = '';

//--------------------------------------VISIBILITY----------------------------------------//
    disableNextButton = true;
    showInitialScreen = false;
    showAppointmentScreen = false;
    showHasIncompleteWorkSteps = true;
    selectedRows = [];
    labels = {
        AppointmentPicker_Next_Button,
        AppointmentPicker_No_Results,
        AppointmentPicker_End_Day_Button,
        AppointmentPicker_Select_Next_Appointment_Button,
        AppointmentPicker_Appointments_Header,
        AppointmentPicker_Travel_Started_Toast,
        AppointmentPicker_Day_Ended_Toast,
        AppointmentPicker_Spinner,
        AppointmentPicker_Incomplete_Work_Steps_Message,
        AppointmentPicker_Next_Action_Text,
        AppointmentPicker_Next_Action_Sub_Text,
        AppointmentPicker_End_Day_Button_Sub_Text
    }
    columns = [
        { label: this.labels.AppointmentPicker_Appointments_Header, fieldName: 'Appointment', type: 'text', wrapText: true },
    ];

//--------------------------------------LIFECYCLE----------------------------------------//

    connectedCallback() {
        console.log('connectedCallback');
        console.log(this.recordId);
    }

//--------------------------------------WIRE-----------------------------------------//

    @wire(getRecord, { recordId: "$recordId", fields: ['WorkStep.WorkOrderId'] })
    wiredWorkOrder({ error, data }) {
        if (data) {
            console.log(data);
            console.log(data.fields.WorkOrderId.value);
            this.workOrderId = data.fields.WorkOrderId.value;
        } else if (error) {
            console.log(error);
        }
    }

    @wire(graphql, {
        query: gql`
    query OtherWorkSteps($workOrderId: ID, $currentStepId: ID) {
      uiapi {
        query {
          WorkStep(where: {
          and: [
            { ParentRecordId: { eq: $workOrderId } },
            { Id: { ne: $currentStepId } }
           ]
           })
           {
            edges {
              node {
                Id,
                Status {
                    value
                    displayValue
                },
              }
            }
          }
        }
      }
    }`,
        variables: "$workStepVariables",
    })
    workStepQueryResult ({error, data}) {
        if (data) {
            this.otherWorkSteps = data.uiapi.query.WorkStep.edges;
            console.log('other worksteps',this.otherWorkSteps);
            //Check if all other work steps are completed
            let allCompleted = true;
            console.log('recordId', this.recordId);
            this.otherWorkSteps.forEach(step => {
                console.log('step status', step.node.Status.value);
                console.log('step id', step.node.Id);
                if (step.node.Status.value !== 'Completed' && step.node.Id !== this.recordId) {
                    allCompleted = false;
                }
            });
            console.log('allCompleted', allCompleted);
            if (allCompleted) {
                this.showSpinner = false;
                this.showInitialScreen = true;
                this.showHasIncompleteWorkSteps = false;
            } else {
                this.showSpinner = false;
                this.showInitialScreen = false;
                this.showHasIncompleteWorkSteps = true;
            }
        } else if (error) {
            console.log(error);
            this.showSpinner = false;
        }
    }

    @wire(graphql, {
        query: gql`
    query ServiceAppointment($workOrderId: ID) {
      uiapi {
        query {
          ServiceAppointment(where: 
            { ParentRecordId: { eq: $workOrderId } })
            {
            edges {
              node {
                Id,
                Status {
                    value
                    displayValue
                },
              }
            }
          }
        }
      }
    }`,
        variables: "$workOrderVariables",
    })
    serviceAppointmentQueryResult ({error, data}) {
        if (data) {
            this.serviceAppointmentId = data.uiapi.query.ServiceAppointment.edges[0].node.Id;
            console.log('service appointment id',this.serviceAppointmentId);
        } else if (error) {
            console.log(error);
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

    @wire(graphql, {
        query: gql`
    query ServiceAppointments($serviceResourceId: ID, $startDate: DateTimeInput, $endDate: DateTimeInput, $saId: ID) {
      uiapi {
        query {
          AssignedResource(
            where: { 
              and: [
                { ServiceResourceId: { eq: $serviceResourceId } },
                { ServiceAppointment: { Id: { ne: $saId } } },
                { ServiceAppointment: { Status: { ne: "Completed" } } },
                { ServiceAppointment: { Status: { ne: "Unscheduled" } } },
                { ServiceAppointment: { Status: { ne: "Cannot Complete" } } },
                { ServiceAppointment: { Status: { ne: "Cancelled" } } },
                { ServiceAppointment: { 
                    SchedStartTime: { 
                      gte: $startDate,
                      lte: $endDate
                    } 
                  }
                }
              ]
            }
          ) {
            edges {
              node {
                ServiceAppointment {
                  AppointmentNumber {
                    value
                    displayValue
                  },
                  Id,
                  Subject {
                    value
                    displayValue
                  }, 
                  SchedStartTime {
                    value
                    displayValue
                  },
                  ParentRecordId {
                    value
                    displayValue
                  }
                }
              }
            }
          }
        }
      }
    }`,
        variables: "$serviceAppointmentsVariables",
    })
    appointmentsQueryResult ({error, data}) {
        if (data) {
            this.data = data.uiapi.query.AssignedResource.edges.map(edge => edge.node.ServiceAppointment);
            this.serviceAppointments = this.data.map(appointment => {
                return {
                    Appointment: appointment.Subject.value,
                    AppointmentNumber: appointment.AppointmentNumber.value,
                    Subject: appointment.Subject.value,
                    Id: appointment.Id,
                    SchedStartTime: appointment.SchedStartTime.value,
                    ParentRecordId: appointment.ParentRecordId.value
                }
            });
            console.log(JSON.stringify(this.serviceAppointments));
        } else if (error) {
            console.log(error);
        }
    }

//--------------------------------------LIFECYCLE------------------------------------//

//--------------------------------------HANDLERS-------------------------------------//

    handleRowSelection(event) {
        const selectedRows = event.detail.selectedRows;
        console.log('selectedRows', JSON.stringify(selectedRows));
        this.selectedRows = selectedRows;
        this.nextWorkOrderId = selectedRows[0].ParentRecordId;
        this.disableNextButton = selectedRows.length === 0;
    }

    handleSetAppointmentClicked() {
        console.log('Set appointment clicked');
        this.showInitialScreen = false;
        this.showAppointmentScreen = true;
    }

    handleSelect() {
        console.log('selectedRows', JSON.stringify(this.selectedRows));
        console.log('selectedRows Id', this.selectedRows[0].Id);
        this.setWorkStepStatus();
        this.setCurrentServiceAppointStatus();
        this.setParentWorkOrderStatus();
        this.setNextServiceAppointStatus();
        this.setNextWorkOrderStatus();
        this.toastType = ToastTypes.Success;
        this.toastMessage = this.labels.AppointmentPicker_Travel_Started_Toast;

        setTimeout(() => {
            this[NavigationMixin.Navigate]({
                "type": "standard__webPage",
                "attributes": {
                    "url": `com.salesforce.fieldservice://v1/sObject/${this.nextWorkOrderId}`
                }
            });
        }, 2000);
    }

    handleEndDayClicked() {
        console.log('End day clicked');
        this.setWorkStepStatus();
        this.setCurrentServiceAppointStatus();
        this.setParentWorkOrderStatus();
        //Show the toast
        this.toastType = ToastTypes.Success;
        this.toastMessage = this.labels.AppointmentPicker_Day_Ended_Toast;
        setTimeout(() => {
            this[NavigationMixin.Navigate]({
                "type": "standard__webPage",
                "attributes": {
                    "url": `com.salesforce.fieldservice://v1/sObject/${this.workOrderId}`
                }
            });
        }, 2000);
    }

    handleTouchStart(event) {
        event.currentTarget.classList.add('touch-active');
    }

    handleTouchEnd(event) {
        // Store the element since we'll need it after the timeout
        const element = event.currentTarget;

        // Add a small delay before removing the class
        setTimeout(() => {
            element.classList.remove('touch-active');
        }, 150); // 150ms delay
    }

//--------------------------------------HELPERS--------------------------------------//

    setCurrentServiceAppointStatus() {
        const fields = {};
        fields['Id'] = this.serviceAppointmentId;
        fields['Status'] = 'Completed';
        const recordInput = { fields };
        console.log('recordInput', JSON.stringify(recordInput));
        updateRecord(recordInput)
            .then(() => {
                console.log('Service Appointment status updated');
            })
            .catch(error => {
                console.log('Error updating service appointment status', error);
            });
    }

    setNextServiceAppointStatus() {
        const fields = {};
        fields['Id'] = this.selectedRows[0].Id;
        fields['Status'] = 'Travelling';
        const recordInput = { fields };
        console.log('recordInput', JSON.stringify(recordInput));
        updateRecord(recordInput)
            .then(() => {
                console.log('Service Appointment status updated');
            })
            .catch(error => {
                console.log('Error updating service appointment status', error);
            });

    }

    setNextWorkOrderStatus() {
        const fields = {};
        fields['Id'] = this.workOrderId;
        fields['Status'] = 'Travelling';
        const recordInput = { fields };
        console.log('recordInput', JSON.stringify(recordInput));
        updateRecord(recordInput)
            .then(() => {
                console.log('Work Order status updated');
            })
            .catch(error => {
                console.log('Error updating work order status', error);
            });

    }

    setParentWorkOrderStatus() {
        const fields = {};
        fields['Id'] = this.workOrderId;
        fields['Status'] = 'Completed';
        const recordInput = { fields };
        console.log('recordInput', JSON.stringify(recordInput));
        updateRecord(recordInput)
            .then(() => {
                console.log('Work Order status updated');
            })
            .catch(error => {
                console.log('Error updating work order status', error);
            });
    }

    setWorkStepStatus() {
        const fields = {};
        fields['Id'] = this.recordId;
        fields['Status'] = 'Completed';
        const recordInput = { fields };
        console.log('recordInput', JSON.stringify(recordInput));
        updateRecord(recordInput)
            .then(() => {
                console.log('Work Step status updated');
            })
            .catch(error => {
                console.log('Error updating work step status', error);
            });
    }

    hideToast() {
        this.toastType = null;
    }

//--------------------------------------GETTERS-----------------------------------//

    get serviceAppointmentsVariables() {
        // Get the dates for last week's start and next week's end
        const today = new Date();
        const lastWeekStart = new Date(today);
        lastWeekStart.setDate(today.getDate() - today.getDay() - 7); // Beginning of last week
        const nextWeekEnd = new Date(today);
        nextWeekEnd.setDate(today.getDate() - today.getDay() + 21); // End of next week

        return {
            serviceResourceId: this.serviceResourceId,
            startDate: { value: lastWeekStart.toISOString() },
            endDate: { value: nextWeekEnd.toISOString() },
            saId: this.serviceAppointmentId,
        };
    }

    get workOrderVariables() {
        return {
            workOrderId: this.workOrderId,
        };
    }

    get workStepVariables() {
        return {
            workOrderId: this.workOrderId,
            currentStepId: this.recordId,
        };
    }

    get variables() {
        return {
            userId: ID,
        };
    }

    get shouldShowToast() {
        return this.toastType == null ? false : true;
    }

}