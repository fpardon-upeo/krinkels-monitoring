/**
 * Created by fpardon on 15/11/2024.
 */

import {LightningElement, api, wire, track} from 'lwc';
import { gql, graphql } from "lightning/uiGraphQLApi";
import { getRecord}  from "lightning/uiRecordApi";
import ID from '@salesforce/user/Id';


export default class NextAppointmentPicker extends LightningElement {

//--------------------------------------API------------------------------------------//

    @api recordId
    ID = ID;
    serviceResourceId;
    serviceAppointments;
    columns = [
        { label: 'Appointment Number', fieldName: 'AppointmentNumber', type: 'text' },
        { label: 'Subject', fieldName: 'Subject', type: 'text' },
        { label: 'Planned Time', fieldName: 'SchedStartTime', type: 'date', typeAttributes:{
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
            }}
    ];
    data = [];

//--------------------------------------TRACK----------------------------------------//

//--------------------------------------WIRE-----------------------------------------//

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
            console.log(data);
            this.serviceResourceId = data.uiapi.query.ServiceResource.edges[0].node.Id;
            console.log(this.serviceResourceId);
        } else if (error) {
            console.log(error);
        }
    }

    get variables() {
        return {
            userId: ID,
        };
    }

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
                  Subject {
                    value
                    displayValue
                  }, 
                  SchedStartTime {
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
            console.log(data);
            this.data = data.uiapi.query.AssignedResource.edges.map(edge => edge.node.ServiceAppointment);
            console.log(JSON.stringify(this.data));
            this.serviceAppointments = this.data.map(appointment => {
                return {
                    AppointmentNumber: appointment.AppointmentNumber.value,
                    Subject: appointment.Subject.value,
                    SchedStartTime: appointment.SchedStartTime.value,
                }
            });
            console.log(JSON.stringify(this.serviceAppointments));
        } else if (error) {
            console.log(error);
        }
    }

//--------------------------------------LIFECYCLE------------------------------------//

//--------------------------------------HANDLERS-------------------------------------//

//--------------------------------------HELPERS--------------------------------------//

}