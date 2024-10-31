/**
 * Created by Frederik on 10/30/2024.
 */
// resourceCalendar.js
import { LightningElement, track, api } from 'lwc';
import getScheduledAppointments from "@salesforce/apex/SchedulingController.getScheduledAppointments";
import createAssignedResource from "@salesforce/apex/SchedulingController.createAssignedResource";

export default class ResourceCalendar extends LightningElement {
  @track currentDate = new Date();
  @track calendarDays = [];
  @track appointments = [];
  _draggedAssetId;
  _resourceId; // Pass this from parent component
  _draggedAssetDetails;
  weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  @api
  set draggedAssetDetails(value) {
    this._draggedAssetDetails = value;
    console.log('ResourceCalendar received draggedAssetDetails:', value);
  }
  get draggedAssetDetails() {
    return this._draggedAssetDetails;
  }
  @api
  set draggedAssetId(value) {
    console.log('ResourceCalendar received draggedAssetId:', value);
    this._draggedAssetId = value;
    // Implement any logic needed when the dragged asset changes
  }

  get draggedAssetId() {
    return this._draggedAssetId;
  }

  @api
  get resourceId() {
    return this._resourceId;
  }
  set resourceId(value) {
    this._resourceId = value;
    if (this._resourceId) {
      this.loadAppointments();
    } else {
      // Clear appointments if no resource is selected
      this.appointments = [];
      this.generateCalendarDays();
    }
  }

  connectedCallback() {
    if (this._resourceId) {
      this.loadAppointments();
    }
  }

  get formattedMonth() {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric'
    }).format(this.currentDate);
  }

  previousMonth() {
    this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() - 1));
    this.loadAppointments();
  }

  nextMonth() {
    this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() + 1));
    this.loadAppointments();
  }

  async loadAppointments() {
    if (!this._resourceId) return;

    try {
      // Format date for Apex
      const startDate = this.currentDate.toISOString().split('T')[0];

      const result = await getScheduledAppointments({
        resourceId: this._resourceId,
        startDate: startDate
      });

      console.log('Appointments:', JSON.stringify(result));

      this.appointments = result.map(apt => ({
        ...apt,
        SchedStartTime: new Date(apt.SchedStartTime),
        SchedEndTime: new Date(apt.SchedEndTime)
      }));

      this.generateCalendarDays();
    } catch (error) {
      console.error('Error loading appointments:', error);
      // Optionally show error toast
      this.dispatchEvent(
        new ShowToastEvent({
          title: 'Error loading appointments',
          message: error.message,
          variant: 'error'
        })
      );
    }
  }

  calculateWorkload(date) {
    // Convert input date to start and end of day
    const startOfDay = new Date(date.setHours(0, 0, 0, 0));
    const endOfDay = new Date(date.setHours(23, 59, 59, 999));

    // Filter appointments for this day
    const dayAppointments = this.appointments.filter(apt => {
      const aptDate = apt.SchedStartTime;
      return aptDate >= startOfDay && aptDate <= endOfDay;
    });

    // Calculate total hours scheduled for the day
    const totalHoursScheduled = dayAppointments.reduce((total, apt) => {
      const duration = (apt.SchedEndTime - apt.SchedStartTime) / (1000 * 60 * 60); // Convert to hours
      return total + duration;
    }, 0);

    // Assuming 8-hour workday
    const WORK_HOURS = 8;
    const load = Math.min(totalHoursScheduled / WORK_HOURS, 1); // Normalized between 0 and 1

    return {
      appointments: dayAppointments,
      scheduled: dayAppointments.length,
      hoursScheduled: totalHoursScheduled.toFixed(1),
      available: Math.max(0, WORK_HOURS - totalHoursScheduled).toFixed(1),
      load: load
    };
  }

  getWorkloadColor(workload) {
    if (!workload.load) return 'white';

    // Color scale from white to red based on workload
    const intensity = Math.floor(workload.load * 255);
    return `rgb(255, ${255 - intensity}, ${255 - intensity})`;
  }


  generateCalendarDays() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    // Calculate first day offset
    let start = firstDay.getDay() || 7; // Convert Sunday (0) to 7
    start--; // Adjust to start from Monday

    // Add empty cells for days before the first of the month
    for (let i = 0; i < start; i++) {
      days.push({
        date: `empty-${i}`,
        dayNumber: '',
        className: 'calendar-day inactive-day',
        hasWorkload: false
      });
    }

    // Add actual days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const currentDate = new Date(year, month, i);
      const workload = this.calculateWorkload(currentDate);
      days.push({
        date: currentDate.toISOString(),
        dayNumber: i,
        className: `calendar-day${this.isToday(currentDate) ? ' today' : ''}`,
        style: `background-color: ${this.getWorkloadColor(workload)}`,
        hasWorkload: true,
        scheduledCount: workload.appointments.length,
        hoursScheduled: workload.hoursScheduled,
        hoursAvailable: workload.available,
        appointmentsString: JSON.stringify(workload.appointments) // Stringify the appointments
      });
    }

    this.calendarDays = days;
  }

  isToday(date) {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  }

  handleDayClick(event) {
    const date = event.currentTarget.dataset.date;
    // Handle day click - could dispatch event or show details
    this.dispatchEvent(new CustomEvent('dayselect', {
      detail: { date }
    }));
  }

  handleDayAppointmentsMouseEnter(event) {
    const appointmentsData = event.currentTarget.dataset.appointments;
    try {
      const appointments = JSON.parse(appointmentsData);
      console.log('Appointments:', appointments);
      appointments.forEach(appointment => {
        console.log('Appointment ID:', appointment.Id);
        console.log('Asset Longitude:', appointment.FSL__InternalSLRGeolocation__Longitude__s);
        console.log('Asset Latitude:', appointment.FSL__InternalSLRGeolocation__Latitude__s);
        console.log('Start Time:', appointment.SchedStartTime);
        // Log other relevant fields
      });
    } catch (error) {
      console.error('Error parsing appointments:', error);
    }
  }


  handleDragOver(event) {
    event.preventDefault();

    const dropDate = event.currentTarget.dataset.date;
    // Now you can do validation with this.draggedAssetId and dropDate
    event.currentTarget.classList.add('drag-over');

  }

  handleDragLeave(event) {
    event.currentTarget.classList.remove('drag-over');
  }

  handleDrop(event) {
    console.log('drop date:', event.currentTarget.dataset.date);
    console.log('test', JSON.stringify(this._draggedAssetDetails.appointments[0]));
    console.log('resourceId:', this._resourceId);
    createAssignedResource({
      serviceResourceId : this._resourceId,
      serviceAppointmentId : this._draggedAssetDetails.appointments[0].Id,
      startDate : event.currentTarget.dataset.date})
      .then(result => {
        console.log('Assigned Resource created:', result);
        this.loadAppointments();
      }).catch(error => {
        console.error('Error creating Assigned Resource:',
          error.body.message);
    })
    event.currentTarget.classList.remove('drag-over');
  }

}