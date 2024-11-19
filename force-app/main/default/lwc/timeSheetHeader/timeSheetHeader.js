/**
 * Created by fpardon on 18/11/2024.
 */

import {LightningElement, api, wire, track} from 'lwc';
import TimeSheet_Header_Title from '@salesforce/label/c.TimeSheet_Header_Title';
import {gql, graphql} from "lightning/uiGraphQLApi";
import ID from '@salesforce/user/Id';


export default class TimeSheetHeader extends LightningElement {

//--------------------------------------API------------------------------------------//

    @api recordId;
    totalHoursLogged = 0;
    totalHoursExpected = 8;
    totalDistance = 0;
    travelTime = 0;
    workingTime = 0;
    breakTime = 0;

//--------------------------------------PROPERTIES-----------------------------------//
    serviceResourceId;
    timeSheetId;


//--------------------------------------TRACK----------------------------------------//

    labels = {
        TimeSheet_Header_Title
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
                                Id,
                                Total_Normal_Hours__c {
                                    value
                                },
                                Total_Hours__c {
                                    value
                                },
                                Total_Travel_Time__c {
                                    value
                                },
                                Total_KM__c {
                                    value
                                },
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
                this.workingTime = data.uiapi.query.TimeSheet.edges[0].node.Total_Normal_Hours__c.value;
                this.totalHoursLogged = data.uiapi.query.TimeSheet.edges[0].node.Total_Hours__c.value;
                this.travelTime = data.uiapi.query.TimeSheet.edges[0].node.Total_Travel_Time__c.value;
                this.totalDistance = data.uiapi.query.TimeSheet.edges[0].node.Total_KM__c.value;
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

//--------------------------------------LIFECYCLE------------------------------------//

//--------------------------------------HANDLERS-------------------------------------//

//--------------------------------------HELPERS--------------------------------------//

    /**
     * Getters for formatting display values
     */
    get formattedTotalHoursLogged() {
        return this.totalHoursLogged;
    }

    get formattedTotalHoursExpected() {
        return this.totalHoursExpected.toFixed(2);
    }

    get formattedTotalDistance() {
        return this.totalDistance.toFixed(1);
    }

    get formattedTravelTime() {
        return this.travelTime.toFixed(2);
    }

    get formattedBreakTime() {
        return this.breakTime.toFixed(2);
    }

    get formattedMissingHours() {
        return (this.totalHoursExpected - this.totalHoursLogged);
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

    get variables() {
        return {
            userId: ID,
        };
    }

    get timeSheetLoaded() {
        return this.timeSheetId ? true : false;
    }

}