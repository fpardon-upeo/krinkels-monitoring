import { LightningElement, track, wire } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { getPicklistValues } from "lightning/uiObjectInfoApi";
import { createRecord } from "lightning/uiRecordApi";
import TYPE_OF_ABSENCE_FIELD from "@salesforce/schema/ResourceAbsence.Type_of_Absence__c";
import getServiceResourceDetails from "@salesforce/apex/CreateInternalWorkOrderController.getServiceResourceDetails";
import CreateInternalWorkOrder_Header from "@salesforce/label/c.CreateInternalWorkOrder_Header";
import CreateInternalWorkOrder_CancelButton from "@salesforce/label/c.CreateInternalWorkOrder_CancelButton";
import CreateInternalWorkOrder_SaveButton from "@salesforce/label/c.CreateInternalWorkOrder_SaveButton";
import CreateInternalWorkOrder_StartDateTimeLabel from "@salesforce/label/c.CreateInternalWorkOrder_StartDateTimeLabel";
import CreateInternalWorkOrder_EndDateTimeLabel from "@salesforce/label/c.CreateInternalWorkOrder_EndDateTimeLabel";
import CreateInternalWorkOrder_SelectInternalWorkTypeLabel from "@salesforce/label/c.CreateInternalWorkOrder_SelectInternalWorkTypeLabel";
import CreateInternalWorkOrder_SelectServiceResourceLabel from "@salesforce/label/c.CreateInternalWorkOrder_SelectServiceResourceLabel";
import CreateInternalWorkOrder_SuccessTitle from "@salesforce/label/c.CreateInternalWorkOrder_SuccessTitle";
import CreateInternalWorkOrder_SuccessMessage from "@salesforce/label/c.CreateInternalWorkOrder_SuccessMessage";

export default class CreateInternalWorkOrder extends LightningElement {
  @track selectedWorkType;
  @track selectedOperator;
  @track startDateTime = new Date().toISOString();
  @track endDateTime = new Date().toISOString();
  @track departmentType;
  @track internalWorkTypeOptions = [];

  labels = {
    CreateInternalWorkOrder_Header,
    CreateInternalWorkOrder_CancelButton,
    CreateInternalWorkOrder_SaveButton,
    CreateInternalWorkOrder_StartDateTimeLabel,
    CreateInternalWorkOrder_EndDateTimeLabel,
    CreateInternalWorkOrder_SelectInternalWorkTypeLabel,
    CreateInternalWorkOrder_SelectServiceResourceLabel,
    CreateInternalWorkOrder_SuccessTitle,
    CreateInternalWorkOrder_SuccessMessage
  };

  @wire(getPicklistValues, {
    recordTypeId: "012000000000000AAA", // You'll need to replace this with the correct record type ID
    fieldApiName: TYPE_OF_ABSENCE_FIELD
  })
  wiredPicklistValues({ error, data }) {
    if (data) {
      this.internalWorkTypeOptions = data.values.map((item) => ({
        label: item.label,
        value: item.value
      }));
    } else if (error) {
      this.handleError(error);
    }
  }

  @wire(getServiceResourceDetails, { resourceId: "$selectedOperator" })
  wiredServiceResource({ error, data }) {
    if (data) {
      const department = data.RelatedRecord.Department;
      if (department === "Landscaping - Billing plan") {
        this.departmentType = "Outdoor";
      } else if (department === "Indoor - Billing plan") {
        this.departmentType = "Indoor";
      }
    } else if (error) {
      this.handleError(error);
    }
  }

  handleWorkTypeChange(event) {
    this.selectedWorkType = event.detail.value;
  }

  handleOperatorChange(event) {
    this.selectedOperator = event.detail.recordId;
  }

  handleStartDateChange(event) {
    this.startDateTime = event.detail.value;
  }

  handleEndDateChange(event) {
    this.endDateTime = event.detail.value;
  }

  async handleSave() {
    try {
      if (!this.validateFields()) {
        return;
      }

      // Create Work Order
      const workOrder = await this.createWorkOrder();

      // Create Service Appointment
      const serviceAppointment = await this.createServiceAppointment(
        workOrder.id
      );

      // Create Assigned Resource
      await this.createAssignedResource(serviceAppointment.id);

      this.showToast(
        this.labels.CreateInternalWorkOrder_SuccessTitle,
        this.labels.CreateInternalWorkOrder_SuccessMessage,
        "success"
      );
      this.closeQuickAction();
    } catch (error) {
      this.handleError(error);
    }
  }

  validateFields() {
    const allValid = [
      ...this.template.querySelectorAll("lightning-input,lightning-combobox")
    ].reduce((validSoFar, inputField) => {
      inputField.reportValidity();
      return validSoFar && inputField.checkValidity();
    }, true);
    return allValid;
  }

  async createWorkOrder() {
    const assetName = `${this.selectedWorkType} - ${this.departmentType}`;
    const asset = await this.getAssetByName(assetName);
    const workType = await this.getWorkTypeByName("Internal Production Work");

    const workOrderFields = {
      Subject: `${this.selectedWorkType} - ${this.selectedOperator}`,
      AssetId: asset.id,
      WorkTypeId: workType.id,
      Scheduled_Date__c: this.startDateTime
    };

    return await createRecord({
      apiName: "WorkOrder",
      fields: workOrderFields
    });
  }

  async createServiceAppointment(workOrderId) {
    const serviceAppointmentFields = {
      ParentRecordId: workOrderId,
      SchedStartTime: this.startDateTime,
      SchedEndTime: this.endDateTime
    };

    return await createRecord({
      apiName: "ServiceAppointment",
      fields: serviceAppointmentFields
    });
  }

  async createAssignedResource(serviceAppointmentId) {
    const assignedResourceFields = {
      ServiceAppointmentId: serviceAppointmentId,
      ServiceResourceId: this.selectedOperator
    };

    return await createRecord({
      apiName: "AssignedResource",
      fields: assignedResourceFields
    });
  }

  handleCancel() {
    this.closeQuickAction();
  }

  closeQuickAction() {
    const closeQA = new CustomEvent("close");
    this.dispatchEvent(closeQA);
  }

  showToast(title, message, variant) {
    this.dispatchEvent(
      new ShowToastEvent({
        title: title,
        message: message,
        variant: variant
      })
    );
  }

  handleError(error) {
    let message = "Unknown error";
    if (Array.isArray(error.body)) {
      message = error.body.map((e) => e.message).join(", ");
    } else if (typeof error.body.message === "string") {
      message = error.body.message;
    }
    this.showToast("Error", message, "error");
  }
}