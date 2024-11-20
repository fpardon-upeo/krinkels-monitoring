/**
 * Created by fpardon on 19/11/2024.
 */

import {LightningElement, api, wire, track} from 'lwc';
import { getLocationService } from 'lightning/mobileCapabilities';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getNextHourForecast from '@salesforce/apex/WeatherService.getNextHourForecast';
import {gql, graphql} from "lightning/uiGraphQLApi";
import ID from '@salesforce/user/Id';



export default class StartOperatorDayMetrics extends LightningElement {

//--------------------------------------API------------------------------------------//

    serviceResourceId;
    myLocationService;
    currentLocation;
    Latitude;
    Longitude;
    requestInProgress = false;
    weatherInfo;
    showWeather = false;
    showCompletion = false;
    data;
    serviceAppointments;

    @track currentAppointment = {
        customerName: 'Aldi',
        serviceType: 'Greencare',
        status: 'Ongoing'
    };

    @track nextAppointment = {
        address: 'LIDL',
        estimatedArrival: 'Grass Maintenance',
        scheduledTime: '09:00'
    };

    @track completedAppointments = 5;
    @track totalAppointments = 9;

    connectedCallback() {
        console.log('serviceResourceId', this.serviceResourceId);
        this.myLocationService = getLocationService();
        //this.fetchWeather( 51.294896, 4.437022);
        this.getLocation();
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

    get variables() {
        return {
            userId: ID
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
                  Status, {
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
            console.log('service appointments data', data);
            this.data = data.uiapi.query.AssignedResource.edges.map(edge => edge.node.ServiceAppointment);
            this.serviceAppointments = this.data.map(appointment => {
                return {
                    Appointment: appointment.Subject.value,
                    Status: appointment.Status.value,
                }
            });
            console.log(JSON.stringify(this.serviceAppointments));
            this.calculateAppointmentsMetrics();
        } else if (error) {
            console.log(error);
        }
    }

    calculateAppointmentsMetrics() {
        this.totalAppointments = this.serviceAppointments.length;

        const completedStatuses = ['Completed', 'Canceled', 'Cannot Complete'];
        this.completedAppointments = this.serviceAppointments.filter(
            appointment => completedStatuses.includes(appointment.Status)
        ).length;
        console.log('completed appointments', this.completedAppointments);
        this.showCompletion = true;
    }

    get serviceAppointmentsVariables() {
        // Create date object for today
        const todayDate = new Date();

        // Set start of day (midnight)
        const startOfDay = new Date(todayDate.setHours(0, 0, 0, 0)).toISOString();

        // Set end of day (23:59:59.999)
        const endOfDay = new Date(todayDate.setHours(23, 59, 59, 999)).toISOString();

        console.log('startOfDay', startOfDay);
        console.log('endOfDay', endOfDay);
        console.log('serviceResourceId', this.serviceResourceId);

        return {
            serviceResourceId: this.serviceResourceId,
            startDate: { value: startOfDay },
            endDate: { value: endOfDay }
        };
    }

    async getLocation() {
        if(this.myLocationService != null && this.myLocationService.isAvailable()) {

            // Configure options for location request
            const locationOptions = {
                enableHighAccuracy: true
            }

            // Show an "indeterminate progress" spinner before we start the request
            this.requestInProgress = true;

            // Make the request
            // Uses anonymous function to handle results or errors
            this.myLocationService
                .getCurrentPosition(locationOptions)
                .then((result)  => {
                    this.currentLocation = result;
                    this.Latitude = result.coords.latitude;
                    this.Longitude = result.coords.longitude;
                    //Convert the longitude and latitude to 6 points after the decimal
                    this.Latitude = this.Latitude.toFixed(6);
                    this.Longitude = this.Longitude.toFixed(6);
                    // result is a Location object
                    console.log(JSON.stringify(result));
                    this.fetchWeather(this.Latitude, this.Longitude);
                })
                .catch((error) => {
                    // Handle errors here
                    console.error(error);
                })
                .finally(() => {
                    console.log('#finally');
                    // Remove the spinner
                    this.requestInProgress = false;

                });
        } else {
            // LocationService is not available
            // Not running on hardware with GPS, or some other context issue
            console.log('Get Location button should be disabled and unclickable. ');
            console.log('Somehow it got clicked: ');
            console.log(event);

            // Let user know they need to use a mobile phone with a GPS
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'LocationService Is Not Available',
                    message: 'Try again from the Salesforce app on a mobile device.',
                    variant: 'error'
                })
            );
        }
    }

    async fetchWeather(lat, lon) {
        try {
            const forecast = await getNextHourForecast({ lat: lat, lon: lon });
            console.log('forecast', forecast);
            console.log(JSON.stringify(forecast));
            if (forecast) {
                this.weatherInfo = forecast;
                this.showWeather = true;
            }
            return null;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            return null;
        }
    }

    get progressStyle() {
        const percentage = (this.completedAppointments / this.totalAppointments) * 100;
        return `width: ${percentage}%`;
    }



    // Suggested data to retrieve from Salesforce:
    // - Current ServiceAppointment (Status = In Progress)
    // - Next ServiceAppointment (Status = Scheduled, earliest StartTime)
    // - Daily ServiceAppointment count and completion status
    // - ServiceResource current location (if available)
    // - Travel time estimates (if using Field Service routing features)

}