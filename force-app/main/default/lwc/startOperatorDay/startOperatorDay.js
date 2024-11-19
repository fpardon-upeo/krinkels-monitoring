/**
 * Created by fpardon on 17/11/2024.
 */

import {LightningElement, api, wire, track} from 'lwc';
import { gql, graphql } from "lightning/uiGraphQLApi";
import { getRecord, updateRecord}  from "lightning/uiRecordApi";
import ID from '@salesforce/user/Id';
//LABELS
import StartDay_Start_Button_Text from '@salesforce/label/c.StartDay_Start_Button_Text';
import StartDay_Start_Button_Sub_Text from '@salesforce/label/c.StartDay_Start_Button_Sub_Text';
import StartDay_KM_Button_Text from '@salesforce/label/c.StartDay_KM_Button_Text';
import StartDay_KM_Button_Sub_Text from '@salesforce/label/c.StartDay_KM_Button_Sub_Text';
import StartDay_Next_Action_Text from '@salesforce/label/c.StartDay_Next_Action_Text';
import StartDay_Loading_Message from '@salesforce/label/c.StartDay_Loading_Message';
import AppointmentPicker_Next_Button from '@salesforce/label/c.AppointmentPicker_Next_Button';
import AppointmentPicker_Appointments_Header from '@salesforce/label/c.AppointmentPicker_Appointments_Header';
import StartDay_KM_Card_Title from '@salesforce/label/c.StartDay_KM_Card_Title';
import StartDay_KM_Save_Button_Text from '@salesforce/label/c.StartDay_KM_Save_Button_Text';
import StartDay_KM_Save_Success_Result from '@salesforce/label/c.StartDay_KM_Save_Success_Result';
import AppointmentPicker_Travel_Started_Toast from '@salesforce/label/c.AppointmentPicker_Travel_Started_Toast';
import StartDay_KM_Back_Button_Text from '@salesforce/label/c.StartDay_KM_Back_Button_Text';
import {NavigationMixin} from "lightning/navigation";
import {
    ToastTypes,
} from "c/utilsImageCapture";

//OBJECTS AND FIELDS
import Allowance_Type__c from '@salesforce/schema/Mileage_Entry__c.Allowance_Type__c';
import Starting_Location_Type__c from '@salesforce/schema/Mileage_Entry__c.Starting_Location_Type__c';
import Ending_Location_Type__c from '@salesforce/schema/Mileage_Entry__c.Ending_Location_Type__c';
import Service_Resource__c from '@salesforce/schema/Mileage_Entry__c.Service_Resource__c';
import Starting_Mileage__c from '@salesforce/schema/Mileage_Entry__c.Starting_Mileage__c';
import Ending_Mileage__c from '@salesforce/schema/Mileage_Entry__c.Ending_Mileage__c';

export default class StartOperatorDay extends LightningElement {

//--------------------------------------API------------------------------------------//

    @api recordId
    showSpinner = false;
    ID = ID;
    serviceResourceId;
    timeSheetId;
    serviceAppointments;
    nextWorkOrderId;
    data = [];
    toastType = null;
    toastMessage = '';

//--------------------------------------VISIBILITY----------------------------------------//
    disableNextButton = true;
    showInitialScreen = true;
    showAppointmentScreen = false;
    showMilageEntryScreen = false;
    selectedRows = [];
    labels = {
        StartDay_Start_Button_Text,
        StartDay_Start_Button_Sub_Text,
        StartDay_KM_Button_Text,
        StartDay_KM_Button_Sub_Text,
        AppointmentPicker_Appointments_Header,
        AppointmentPicker_Next_Button,
        AppointmentPicker_Travel_Started_Toast,
        StartDay_Next_Action_Text,
        StartDay_Loading_Message,
        StartDay_KM_Card_Title,
        StartDay_KM_Save_Button_Text,
        StartDay_KM_Save_Success_Result,
        StartDay_KM_Back_Button_Text
    }

    milesEntryFields = [
        Allowance_Type__c,
        Starting_Location_Type__c,
        Ending_Location_Type__c,
        Service_Resource__c,
        Starting_Mileage__c,
        Ending_Mileage__c
    ];

    columns = [
        { label: this.labels.AppointmentPicker_Appointments_Header, fieldName: 'Appointment', type: 'text', wrapText: true },
    ];

//--------------------------------------LIFECYCLE----------------------------------------//

    connectedCallback() {
        console.log('connectedCallback');
        console.log(this.recordId);
    }

//--------------------------------------WIRE-----------------------------------------//

    @wire(graphql, {
        query: gql`
        query TimeSheet($resourceId: ID, $today: DateInput) {
            uiapi {
                query {
                    TimeSheet(where: { and: [
                        { ServiceResourceId: { eq: $resourceId } }, 
                        { StartDate: { eq: $today } }, 
                        { EndDate: { eq: $today } } 
                    ]}) {
                        edges {
                            node {
                                Id
                            }
                        }
                    }
                }
            }
        }`,
        variables: "$timeSheetVariables",
    })
    timeSheetQueryResult ({error, data}) {
        if (data) {
            console.log('timesheet data', data);
            //check first if the edges is not empty
            if(data.uiapi.query.TimeSheet.edges.length === 0){
                console.log('timesheet is empty');
            } else {
                this.timeSheetId = data.uiapi.query.TimeSheet.edges[0].node.Id;
                console.log('timesheet id', this.timeSheetId);
            }
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
    query ServiceAppointments($serviceResourceId: ID, $startDate: DateTimeInput, $endDate: DateTimeInput) {
      uiapi {
        query {
          AssignedResource(
            where: { 
              and: [
                { ServiceResourceId: { eq: $serviceResourceId } },
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

    handleMileageSuccess() {
        console.log('Mileage entry success');
        this.showMilageEntryScreen = false;
        this.showInitialScreen = true;
        this.toastType = ToastTypes.Success;
        this.toastMessage = this.labels.StartDay_KM_Save_Success_Result;

        setTimeout(() => {
            this[NavigationMixin.Navigate]({
                "type": "standard__webPage",
                "attributes": {
                    "url": `com.salesforce.fieldservice://v1`
                }
            });
        }, 2000);
    }

    handleSetAppointmentClicked() {
        console.log('Set appointment clicked');
        this.showInitialScreen = false;
        this.showAppointmentScreen = true;
    }

    handleSelect() {
        console.log('selectedRows', JSON.stringify(this.selectedRows));
        console.log('selectedRows Id', this.selectedRows[0].Id);
        this.setNextServiceAppointStatus();
        this.setNextWorkOrderStatus();
        this.toastType = ToastTypes.Success;
        this.toastMessage = this.labels.AppointmentPicker_Travel_Started_Toast;
        this.showAppointmentScreen = false;
        this.showMilageEntryScreen = true;
    }

    handleSetKMClicked() {
        console.log('Set KM clicked');
        this.showMilageEntryScreen = true;
        this.showInitialScreen = false;
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

    handleBack() {
        this.nextWorkOrderId = null;
        this.selectedRows = [];
        this.showAppointmentScreen = false;
        this.showMilageEntryScreen = false;
        this.showInitialScreen = true;
    }

//--------------------------------------HELPERS--------------------------------------//


    setNextServiceAppointStatus() {
        const fields = {};
        fields['Id'] = this.selectedRows[0].Id;
        fields['Status'] = 'Travelling';
        const recordInput = { fields };
        console.log('recordInput sa', JSON.stringify(recordInput));
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
        fields['Id'] = this.selectedRows[0].ParentRecordId;
        fields['Status'] = 'Travelling';
        const recordInput = { fields };
        console.log('recordInput wo', JSON.stringify(recordInput));
        updateRecord(recordInput)
            .then(() => {
                console.log('Work Order status updated');
            })
            .catch(error => {
                console.log('Error updating work order status', error);
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
            endDate: { value: nextWeekEnd.toISOString() }
        };
    }

    get variables() {
        return {
            userId: ID,
        };
    }

    get timeSheetVariables() {

        let todayAsDate = new Date();
        let today = todayAsDate.toISOString();
        today = today.split('T')[0];
        console.log('today', today);
        return {
            resourceId: this.serviceResourceId,
            today: { value: today }
        };
    }

    get shouldShowToast() {
        return this.toastType == null ? false : true;
    }

}