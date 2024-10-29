/**
 * Created by fpardon on 28/10/2024.
 */

import { LightningElement, api } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import getFinancialAccountName from "@salesforce/apex/ServiceBuilderController.getFinancialAccountName";
import insertOrRemoveContractLineFinancialAccount from "@salesforce/apex/ServiceBuilderController.insertOrRemoveContractLineFinancialAccount";

export default class ContractLineEditor extends LightningElement {
  //--------------------------------------API------------------------------------------//

  @api selectedLineItemId;
  @api contractLines;
  @api locationColumns;

  isLoading = false;

  finCustomerFilter = {
    criteria: [
      {
        fieldPath: "RecordType.Name",
        operator: "eq",
        value: "Financial Account"
      }
    ]
  };

  //--------------------------------------TRACK----------------------------------------//

  //--------------------------------------WIRE-----------------------------------------//

  //--------------------------------------LIFECYCLE------------------------------------//

  //--------------------------------------HANDLERS-------------------------------------//

  /**
   * @description Handles the selection of a financial customer in the modal
   * @param event - The event object, containing the selected recordId
   */
  handleFinCustomerSelect(event) {
    const lineItemId = event.target.dataset.id;

    const index = this.contractLines.findIndex(
      (line) => line.Id === lineItemId
    );

    const selectedFinancialAccountId = event.detail.recordId;

    getFinancialAccountName({ recordId: selectedFinancialAccountId })
      .then((financialAccountName) => {
        const customerExists = this.contractLines[index].FinCustomers.some(
          (customer) => customer.recordId === selectedFinancialAccountId
        );

        const deepClone = JSON.parse(JSON.stringify(this.contractLines));

        if (!customerExists) {
          insertOrRemoveContractLineFinancialAccount({
            name: financialAccountName,
            contractLineItemId: lineItemId,
            financialCustomerId: selectedFinancialAccountId,
            action: "insert"
          })
            .then(() => {
              deepClone[index].FinCustomers.push({
                type: "icon",
                iconName: "standard:account",
                label: financialAccountName,
                recordId: selectedFinancialAccountId
              });

              this.contractLines = [...deepClone];

              this.handleToast(
                "Success",
                `Financial customer ${financialAccountName} added to the contract line.`,
                "success"
              );
            })
            .catch((error) => {
              console.log(error.message);

              this.handleToast(
                "Error",
                "An error occurred while adding the financial customer.",
                "error"
              );
            });
        } else {
          this.handleToast(
            "Error",
            "Financial customer already part of the contract line.",
            "error"
          );
        }

        const recordPicker = this.template.querySelector(
          "lightning-record-picker.financial-customer-picker"
        );

        if (recordPicker) {
          recordPicker.clearSelection();
        }
      })
      .catch((error) => {
        console.error("Error getting financial account name:", error);
        this.handleToast(
          "Error",
          "An error occurred while adding the financial customer.",
          "error"
        );
      });
  }

  /**
   * @description Handles the removal of a financial customer from the contract line
   * @param {Event} event - The event object
   */
  handleFinCustomerRemove(event) {
    const financialCustomerIndex = event.detail.index;
    const lineItemId = event.target.dataset.id;

    const deepClone = JSON.parse(JSON.stringify(this.contractLines));

    const contractLineIndex = deepClone.findIndex(
      (line) => line.Id === lineItemId
    );

    const removedCustomer =
      deepClone[contractLineIndex].FinCustomers[financialCustomerIndex];

    insertOrRemoveContractLineFinancialAccount({
      name: removedCustomer.label,
      contractLineItemId: lineItemId,
      financialCustomerId: removedCustomer.recordId,
      action: "delete"
    })
      .then(() => {
        deepClone[contractLineIndex].FinCustomers.splice(
          financialCustomerIndex,
          1
        );

        this.contractLines = [...deepClone];

        this.handleToast(
          "Success",
          `Financial customer ${removedCustomer.label} removed from the contract line.`,
          "success"
        );
      })
      .catch((error) => {
        console.error("Error removing financial customer:", error);
        this.handleToast(
          "Error",
          "An error occurred while removing the financial customer.",
          "error"
        );
      });
  }

  handleSuccess() {
    this.handleToast("Success", "Record has been saved", "success");
    window.location.reload();
  }

  handleToast(title, message, variant) {
    const event = new ShowToastEvent({
      title: title,
      message: message,
      variant: variant
    });
    this.dispatchEvent(event);
  }

  handleSaveRecord() {
    this.template.querySelector("lightning-record-edit-form").submit();
  }

  //--------------------------------------GETTERS--------------------------------------//

  get finCustomersForLine() {
    if (!this.isLoading) {
      let index = this.contractLines.findIndex(
        (line) => line.Id === this.selectedLineItemId
      );
      return this.contractLines[index].FinCustomers;
    } else {
      return [];
    }
  }

  //--------------------------------------HELPERS--------------------------------------//

  closeModal() {
    //dispatch event to parent
    this.dispatchEvent(new CustomEvent("closemodal"));
  }
}