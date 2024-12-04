/**
 * Created by fpardon on 19/11/2024.
 */

import { LightningElement, api, wire, track } from "lwc";
import { getLocationService } from "lightning/mobileCapabilities";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import getNextHourForecast from "@salesforce/apex/WeatherService.getNextHourForecast";
import { gql, graphql, refreshGraphQL } from "lightning/uiGraphQLApi";
import ID from "@salesforce/user/Id";
import {NavigationMixin} from "lightning/navigation";

export default class StartOperatorDayMetrics extends NavigationMixin(LightningElement) {
  //--------------------------------------API------------------------------------------//

  @api serviceResourceId;
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


  @track nextAppointment = {};

  @track completedAppointments = 5;
  @track totalAppointments = 9;

  connectedCallback() {
    const today = new Date();
    this.startDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    ).toISOString();
    this.endDate = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).toISOString();
    console.log("serviceResourceId", this.serviceResourceId);
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
      }
    `,
    variables: "$variables"
  })
  resourcesQueryResult({ error, data }) {
    if (data) {
      this.serviceResourceId =
        data.uiapi.query.ServiceResource.edges[0].node.Id;
      console.log("service resource id", this.serviceResourceId);
    } else if (error) {
      console.log(error);
    }
  }

  get serviceAppointmentsVariables() {
    // Create date object for today
    const todayDate = new Date();

    // Set start of day (midnight)
    const startOfDay = new Date(todayDate.setHours(0, 0, 0, 0)).toISOString();

    // Set end of day (23:59:59.999)
    const endOfDay = new Date(
      todayDate.setHours(23, 59, 59, 999)
    ).toISOString();

    console.log("startOfDay", startOfDay);
    console.log("endOfDay", endOfDay);
    console.log("serviceResourceId", this.serviceResourceId);

    return {
      serviceResourceId: this.serviceResourceId,
      startDate: { value: startOfDay },
      endDate: { value: endOfDay }
    };
  }

  @wire(graphql, {
    query: gql`
      query ServiceAppointments(
        $serviceResourceId: ID
        $startDate: DateTimeInput
        $endDate: DateTimeInput
      ) {
        uiapi {
          query {
            AssignedResource(
              where: {
                and: [
                  { ServiceResourceId: { eq: $serviceResourceId } }
                  {
                    ServiceAppointment: {
                      SchedStartTime: { gte: $startDate, lte: $endDate }
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
                    }
                    Id
                    Status {
                      value
                      displayValue
                    }
                    Subject {
                      value
                      displayValue
                    }
                    SchedStartTime {
                      value
                      displayValue
                    }
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
      }
    `,
    variables: "$serviceAppointmentsVariables"
  })
  graphqlQueryResult(result) {
    this.graphqlData = result;

    if (result.data) {
      console.log("service appointments data", result.data);
      this.data = result.data.uiapi.query.AssignedResource.edges.map(
        (edge) => edge.node.ServiceAppointment
      );
      this.serviceAppointments = this.data.map((appointment) => ({
        Appointment: appointment.Subject.value,
        Status: appointment.Status.value
      }));
      console.log(JSON.stringify(this.serviceAppointments));
      this.calculateAppointmentsMetrics();
    } else if (result.error) {
      console.error("Query error:", result.error);
    }
  }

  @api
  async handleRefresh() {
    try {
      await refreshGraphQL(this.graphqlData);
      await this.getLocation();

      //TESTING
      // Dispatch event to trigger calendar refresh
      this.dispatchEvent(new CustomEvent("refreshall"));
    } catch (error) {
      console.error("Error refreshing data:", error);
      this.sendToastMessage("Error", "Failed to refresh data", "error");
    }
  }

  handleOpenWorkOrder() {
    setTimeout(() => {
      this[NavigationMixin.Navigate]({
        "type": "standard__webPage",
        "attributes": {
          "url": `com.salesforce.fieldservice://v1/sObject/${this.nextWorkOrderId}`
        }
      });
    }, 500);
  }

  get variables() {
    return {
      userId: ID
    };
  }

  calculateAppointmentsMetrics() {
    this.totalAppointments = this.serviceAppointments.length;
    const completedStatuses = ["Completed", "Canceled", "Cannot Complete"];
    this.completedAppointments = this.serviceAppointments.filter(
      (appointment) => completedStatuses.includes(appointment.Status)
    ).length;
    const inProgressStatuses = ["Completed", "Canceled", "Cannot Complete", "In Progress", "Travelling"];
    const hasInProgress = this.serviceAppointments.filter(
      (appointment) => inProgressStatuses.includes(appointment.Status)
    ).length > 0;
    console.log("completed appointments", this.completedAppointments);
    console.log("total appointments", this.totalAppointments);
    console.log("in progress appointments", this.serviceAppointments.filter(
        (appointment) => inProgressStatuses.includes(appointment.Status)
    ).length);
    console.log("hasInProgress", hasInProgress);
    this.showCompletion = true;

    //Fire an event to the parent component to notify it on the amount of closed appointments
    const event = new CustomEvent("completedappointments", {
      detail: hasInProgress
    });
    this.dispatchEvent(event);
  }

  async getLocation() {
    if (
      this.myLocationService != null &&
      this.myLocationService.isAvailable()
    ) {
      // Configure options for location request
      const locationOptions = {
        enableHighAccuracy: true
      };

      // Show an "indeterminate progress" spinner before we start the request
      this.requestInProgress = true;

      try {
        const result =
          await this.myLocationService.getCurrentPosition(locationOptions);
        this.currentLocation = result;
        this.Latitude = result.coords.latitude;
        this.Longitude = result.coords.longitude;
        //Convert the longitude and latitude to 6 points after the decimal
        this.Latitude = this.Latitude.toFixed(6);
        this.Longitude = this.Longitude.toFixed(6);
        // result is a Location object
        console.log(JSON.stringify(result));
        await this.fetchWeather(this.Latitude, this.Longitude);
      } catch (error) {
        // Handle errors here
        console.error(error);
        throw error; // Re-throw to be caught by handleRefresh
      } finally {
        console.log("#finally");
        // Remove the spinner
        this.requestInProgress = false;
      }
    } else {
      // LocationService is not available
      const error = new Error("LocationService Is Not Available");
      await this.fetchWeather(51.294896, 4.437022);
    }
  }

  async fetchWeather(lat, lon) {
    try {
      const forecast = await getNextHourForecast({ lat: lat, lon: lon });
      console.log("forecast", forecast);
      console.log(JSON.stringify(forecast));
      if (forecast) {
        this.weatherInfo = forecast;
        this.showWeather = true;
      }
      return null;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  }

  sendToastMessage(title, message, variant) {
    this.dispatchEvent(
      new ShowToastEvent({
        title: title,
        message: message,
        variant: variant
      })
    );
  }

  get progressStyle() {
    const percentage =
      (this.completedAppointments / this.totalAppointments) * 100;
    return `width: ${percentage}%`;
  }

  get nextWorkOrderURL() {
    return `/com.salesforce.fieldservice://v1/sObject/${this.nextWorkOrderId}`;
  }
}