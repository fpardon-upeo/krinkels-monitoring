/**
 * Created by fpardon on 28/10/2024.
 */

import { LightningElement, api, track } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import getFinancialAccountName from "@salesforce/apex/ServiceBuilderController.getFinancialAccountName";
import insertOrRemoveContractLineFinancialAccount from "@salesforce/apex/ServiceBuilderController.insertOrRemoveContractLineFinancialAccount";

export default class ContractLineEditor extends LightningElement {
  //--------------------------------------API------------------------------------------//

  @api selectedLineItemId;
  @api contractLines;
  @api locationColumns;

  financialAccountsToBeDeleted = [];

  isLoading = false;

  @track contractLinesClone;

  finCustomerFilter = {
    criteria: [
      {
        fieldPath: "RecordType.Name",
        operator: "eq",
        value: "Financial Account"
      }
    ]
  };

  connectedCallback() {
    if (this.contractLines) {
      this.contractLinesClone = structuredClone(this.contractLines);
    }
  }

  //--------------------------------------GETTERS--------------------------------------//

  get finCustomersForLine() {
    if (!this.isLoading && this.contractLinesClone) {
      let index = this.contractLinesClone.findIndex(
        (line) => line.Id === this.selectedLineItemId
      );
      return this.contractLinesClone[index].FinCustomers;
    }
    return [];
  }

  //--------------------------------------HELPERS--------------------------------------//

  handleToast(title, message, variant) {
    const event = new ShowToastEvent({
      title: title,
      message: message,
      variant: variant
    });
    this.dispatchEvent(event);
  }

  /**
   * @description Handles the selection of a financial customer in the modal
   * @param event - The event object, containing the selected recordId
   */
  handleFinCustomerSelect(event) {
    const lineItemId = event.target.dataset.id;
    const index = this.contractLinesClone.findIndex(
      (line) => line.Id === lineItemId
    );
    const selectedFinancialAccountId = event.detail.recordId;

    getFinancialAccountName({ recordId: selectedFinancialAccountId })
      .then((financialAccountName) => {
        const customerExists = this.contractLinesClone[index].FinCustomers.some(
          (customer) => customer.recordId === selectedFinancialAccountId
        );

        if (!customerExists) {
          this.contractLinesClone[index].FinCustomers.push({
            type: "icon",
            iconName: "standard:account",
            label: financialAccountName,
            recordId: selectedFinancialAccountId
          });

          //This is necessary to trigger the watcher on the contractLines property and update the UI
          this.contractLines = [...this.contractLinesClone];
        } else {
          this.handleToast(
            "Error",
            "No duplicate financial customers allowed.",
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
   * @description Handles the saving of the record
   */
  handleSaveRecord() {
    try {
      //Insert the financial accounts to be added
      this.contractLinesClone.forEach((line) => {
        line.FinCustomers.forEach((customer) => {
          insertOrRemoveContractLineFinancialAccount({
            name: customer.label,
            contractLineItemId: line.Id,
            financialCustomerId: customer.recordId,
            action: "insert"
          });
        });
      });

      //Delete the financial accounts to be deleted
      this.financialAccountsToBeDeleted.forEach((financialAccount) => {
        insertOrRemoveContractLineFinancialAccount(financialAccount);
      });

      this.template.querySelector("lightning-record-edit-form").submit();
    } catch (error) {
      console.error("Error saving record:", error.message);

      this.handleToast(
        "Error",
        "An error occurred while saving the record.",
        "error"
      );
    }
  }

  /**
   * @description Handles the removal of a financial customer from the contract line
   * @param {Event} event - The event object
   */
  handleFinCustomerRemove(event) {
    const financialCustomerIndex = event.detail.index;
    const lineItemId = event.target.dataset.id;

    const contractLineIndex = this.contractLinesClone.findIndex(
      (line) => line.Id === lineItemId
    );

    const removedCustomer =
      this.contractLinesClone[contractLineIndex].FinCustomers[
        financialCustomerIndex
      ];

    this.financialAccountsToBeDeleted.push({
      name: removedCustomer.label,
      contractLineItemId: lineItemId,
      financialCustomerId: removedCustomer.recordId,
      action: "delete"
    });

    this.contractLinesClone[contractLineIndex].FinCustomers.splice(
      financialCustomerIndex,
      1
    );

    if (
      this.contractLinesClone[contractLineIndex]
        .Contract_Line_Financial_Accounts__r
    ) {
      this.contractLinesClone[
        contractLineIndex
      ].Contract_Line_Financial_Accounts__r = this.contractLinesClone[
        contractLineIndex
      ].Contract_Line_Financial_Accounts__r.filter(
        (account) => account.Financial_Customer__c !== removedCustomer.recordId
      );
    }

    //This is necessary to trigger the watcher on the contractLines property and update the UI
    this.contractLines = [...this.contractLinesClone];
  }

  closeModal() {
    //dispatch event to parent
    this.dispatchEvent(new CustomEvent("closemodal"));
  }

  handleSuccess() {
    const updatedContractLines = structuredClone(this.contractLines);

    this.handleToast("Success", "Record has been saved", "success");

    this.dispatchEvent(
      new CustomEvent("closemodal", {
        detail: updatedContractLines
      })
    );
  }
}