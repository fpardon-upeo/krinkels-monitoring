/**
 * Created by Frederik on 12/5/2024.
 */
import { LightningElement, api, wire, track } from "lwc";
import { gql, graphql, refreshGraphQL } from "lightning/uiGraphQLApi";
import { getRecord, updateRecord, createRecord } from "lightning/uiRecordApi";
import { getObjectInfo } from "lightning/uiObjectInfoApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { CloseActionScreenEvent } from "lightning/actions";
import getMaterialItems from "@salesforce/apex/MaterialPickupController.getMaterialItems";
import createProductAndMaterialItem from "@salesforce/apex/MaterialPickupController.createProductAndMaterialItem";
import deleteMaterialItem from "@salesforce/apex/MaterialPickupController.deleteMaterialItem";
import MaterialPickUp_NoMaterials_Text from "@salesforce/label/c.MaterialPickUp_NoMaterials_Text";
import MaterialPickUp_SelectMaterials_Text from "@salesforce/label/c.MaterialPickUp_SelectMaterials_Text";
import MaterialPickUp_SuccessTitle from "@salesforce/label/c.MaterialPickUp_SuccessTitle";
import MaterialPickUp_SuccessMessage from "@salesforce/label/c.MaterialPickUp_SuccessMessage";
import MaterialPickUp_ErrorTitle from "@salesforce/label/c.MaterialPickUp_ErrorTitle";
import MaterialPickUp_ErrorMessage from "@salesforce/label/c.MaterialPickUp_ErrorMessage";
import MaterialPickUp_PickUpItems from "@salesforce/label/c.MaterialPickUp_PickUpItems";
import MaterialPickUp_ShortTextFieldLabel from "@salesforce/label/c.MaterialPickUp_ShortTextFieldLabel";
import MaterialPickUp_ATAKCodeFieldLabel from "@salesforce/label/c.MaterialPickUp_ATAKCodeFieldLabel";
import MaterialPickUp_AddedItemsText from "@salesforce/label/c.MaterialPickUp_AddedItemsText";
import MaterialPickUp_SaveButtonLabel from "@salesforce/label/c.MaterialPickUp_SaveButtonLabel";
import MaterialPickUp_SelectMaterialToReturn from "@salesforce/label/c.MaterialPickUp_SelectMaterialToReturn";
import MaterialPickUp_DropOffItemsText from "@salesforce/label/c.MaterialPickUp_DropOffItemsText";
import MaterialPickUp_SelectedMaterialsToReturnText from "@salesforce/label/c.MaterialPickUp_SelectedMaterialsToReturnText";
import MaterialPickUp_SaveReturnsButtonLabel from "@salesforce/label/c.MaterialPickUp_SaveReturnsButtonLabel";
import MaterialPickUp_MaterialFieldLabel from "@salesforce/label/c.MaterialPickUp_MaterialFieldLabel";
import MaterialPickUp_CloseButtonLabel from "@salesforce/label/c.MaterialPickUp_CloseButtonLabel";

export default class MaterialPickup extends LightningElement {
  labels = {
    MaterialPickUp_NoMaterials_Text,
    MaterialPickUp_SelectMaterials_Text,
    MaterialPickUp_PickUpItems,
    MaterialPickUp_SuccessTitle,
    MaterialPickUp_SuccessMessage,
    MaterialPickUp_ErrorTitle,
    MaterialPickUp_ErrorMessage,
    MaterialPickUp_ShortTextFieldLabel,
    MaterialPickUp_ATAKCodeFieldLabel,
    MaterialPickUp_AddedItemsText,
    MaterialPickUp_SaveButtonLabel,
    MaterialPickUp_SelectMaterialToReturn,
    MaterialPickUp_DropOffItemsText,
    MaterialPickUp_SelectedMaterialsToReturnText,
    MaterialPickUp_SaveReturnsButtonLabel,
    MaterialPickUp_MaterialFieldLabel,
    MaterialPickUp_CloseButtonLabel
  };

  _recordId;
  workOrderId;
  pickupItems;
  dropOffItems;
  recordTypeId;

  @track materialDropoffItems = [];
  @track currentShortText = "";
  @track currentAtakCode = "";
  selectedMaterialId;
  temporaryMaterialsInVanOptions = [];

  @wire(getObjectInfo, { objectApiName: "Product2" })
  objectInfo({ error, data }) {
    if (data) {
      // Find the Record Type ID based on the record type name (DeveloperName)
      const recordTypes = data.recordTypeInfos;
      const recordTypeInfo = Object.values(recordTypes).find(
        (rt) => rt.name === "Material"
      );
      if (recordTypeInfo) {
        this.recordTypeId = recordTypeInfo.recordTypeId;
        console.log("Record Type ID:", this.recordTypeId);
      }
    } else if (error) {
      console.error("Error fetching object info:", error);
    }
  }

  materialPickupItems = [];

  @api
  get recordId() {
    return this._recordId;
  }

  set recordId(recordId) {
    console.log("recordId", recordId);
    if (recordId !== this._recordId) {
      this._recordId = recordId;
    }
  }

  connectedCallback() {
    console.log("connectedCallback");
    getMaterialItems()
      .then((result) => {
        console.log("result", result);
        this.temporaryMaterialsInVanOptions = result.map((item) => ({
          label: item.Product2.Name,
          value: item.Id
        }));
      })
      .catch((error) => {
        console.error("Error fetching material items:", error);
      });
  }

  //Get the WorkOrder recordId from the WorkStep
  @wire(getRecord, { recordId: "$_recordId", fields: ["WorkStep.WorkOrderId"] })
  workStepRecord({ error, data }) {
    if (data) {
      this.workOrderId = data.fields.WorkOrderId.value;
      console.log("workOrderId", this.workOrderId);
    } else if (error) {
      console.error("Error loading WorkStep record", error);
    }
  }

  @wire(getRecord, {
    recordId: "$workOrderId",
    fields: ["WorkOrder.Pick_Up_Items__c", "WorkOrder.Drop_Off_Items__c"]
  })
  workOrderRecord({ error, data }) {
    if (data) {
      console.log("workOrderRecord", data);
      this.pickupItems = data.fields.Pick_Up_Items__c.value;
      this.dropOffItems = data.fields.Drop_Off_Items__c.value;
      console.log("pickupItems", this.pickupItems);
      console.log("dropOffItems", this.dropOffItems);
    } else if (error) {
      console.error("Error loading WorkOrder record", error);
    }
  }

  addItem() {
    if (this.currentShortText || this.currentAtakCode) {
      let newItem = {
        shortText: this.currentShortText,
        atakCode: this.currentAtakCode,
        id: this.materialPickupItems.length
      };
      this.materialPickupItems = [...this.materialPickupItems, newItem];
      // Clear inputs
      this.currentShortText = "";
      this.currentAtakCode = "";
    }
  }
  deleteItem(event) {
    console.log("deleteItem", event.target.dataset.id);
    const targetId = parseInt(event.target.dataset.id);
    this.materialPickupItems = this.materialPickupItems.filter(
      (item) => item.id !== targetId
    );
    this.materialPickupItems = this.materialPickupItems.map((item, i) => ({
      ...item,
      id: i
    }));
    this.materialPickupItems = [...this.materialPickupItems];
  }

  handleCurrentShortTextChange(event) {
    this.currentShortText = event.target.value;
  }

  handleCurrentAtakCodeChange(event) {
    this.currentAtakCode = event.target.value;
  }

  saveItems() {
    console.log("saveItems", this.materialPickupItems);
    let items = this.materialPickupItems.map((item) => {
      return {
        Short_Text__c: item.shortText,
        ATAK_Code__c: item.atakCode
      };
    });
    console.log("items", items);
    let totalItems = items.length;
    items.forEach((item) => {
      createProductAndMaterialItem({
        productName: item.Short_Text__c,
        atakId: item.ATAK_Code__c,
        recordTypeId: this.recordTypeId
      })
        .then((result) => {
          console.log("result", result);
          totalItems--;
          if (totalItems === 0) {
            let toast = new ShowToastEvent({
              title: this.labels.MaterialPickUp_SuccessTitle,
              message: this.labels.MaterialPickUp_SuccessMessage,
              variant: "success"
            });
            this.dispatchEvent(toast);
          }
        })
        .catch((error) => {
          console.error("Error creating product and material item:", error);
          let toast = new ShowToastEvent({
            title: this.labels.MaterialPickUp_ErrorTitle,
            message: this.labels.MaterialPickUp_ErrorMessage,
            variant: "error"
          });
          this.dispatchEvent(toast);
        });
    });
  }

  handleMaterialSelection(event) {
    const materialId = event.detail.value;
    const selectedMaterial = this.temporaryMaterialsInVanOptions.find(
      (opt) => opt.value === materialId
    );

    if (selectedMaterial) {
      const newItem = {
        id: this.materialDropoffItems.length,
        shortText: selectedMaterial.label,
        atakCode: "",
        materialId: materialId
      };
      this.materialDropoffItems = [...this.materialDropoffItems, newItem];
      this.selectedMaterialId = ""; // Reset selection
    }
  }

  handleDropoffAtakCodeChange(event) {
    let index = event.target.dataset.id;
    this.materialDropoffItems[index].atakCode = event.target.value;
  }

  deleteDropoffItem(event) {
    const targetId = parseInt(event.target.dataset.id);
    this.materialDropoffItems = this.materialDropoffItems.filter(
      (item) => item.id !== targetId
    );
    this.materialDropoffItems = this.materialDropoffItems.map((item, i) => ({
      ...item,
      id: i
    }));
    this.materialDropoffItems = [...this.materialDropoffItems];
  }

  saveDropoffItems() {
    console.log("saveDropoffItems", this.materialDropoffItems);
    let items = this.materialDropoffItems.map((item) => {
      return {
        materialId: item.materialId,
        Short_Text__c: item.shortText,
        ATAK_Code__c: item.atakCode
      };
    });
    console.log("items to return:", items);
    let totalItems = items.length;
    items.forEach((item) => {
      deleteMaterialItem({ materialItemId: item.materialId })
        .then((result) => {
          console.log("result", result);
          totalItems--;
          if (totalItems === 0) {
            let toast = new ShowToastEvent({
              title: this.labels.MaterialPickUp_SuccessTitle,
              message: this.labels.MaterialPickUp_SuccessMessage,
              variant: "success"
            });
            this.dispatchEvent(toast);
            getMaterialItems()
              .then((result) => {
                console.log("result", result);
                this.temporaryMaterialsInVanOptions = result.map((item) => ({
                  label: item.Product2.Name,
                  value: item.Id
                }));
              })
              .catch((error) => {
                console.error("Error fetching material items:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Error deleting material item:", error);
          let toast = new ShowToastEvent({
            title: this.labels.MaterialPickUp_ErrorTitle,
            message: this.labels.MaterialPickUp_ErrorMessage,
            variant: "error"
          });
          this.dispatchEvent(toast);
        });
    });
  }

  handleClose() {
    //update the workstep record
    const fields = {};
    fields.Id = this._recordId;
    fields.Status = "Completed";
    const recordInput = { fields };
    updateRecord(recordInput)
      .then(() => {
        console.log("WorkStep updated");
      })
      .catch((error) => {
        console.error("Error updating WorkStep:", error);
      });

    const closeAction = new CloseActionScreenEvent();
    this.dispatchEvent(closeAction);
  }

  get disableSave() {
    return this.materialPickupItems.length === 0;
  }

  get disableMaterialReturnPicklist() {
    return this.temporaryMaterialsInVanOptions.length === 0;
  }

  get materialPlaceholder() {
    return this.temporaryMaterialsInVanOptions.length === 0
      ? this.labels.MaterialPickUp_NoMaterials_Text
      : this.labels.MaterialPickUp_SelectMaterials_Text;
  }
}