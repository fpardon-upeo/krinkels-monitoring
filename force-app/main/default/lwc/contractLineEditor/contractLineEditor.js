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
  @track product2Id;

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
    this.contractLines.forEach((line) => {
      if (line.Id === this.selectedLineItemId) {
        this.product2Id = line.Product2Id;
        console.log("Product Id:", this.product2Id);
      }
    });

    if (this.contractLines) {
      this.contractLinesClone = JSON.parse(JSON.stringify(this.contractLines));
    }
  }

  //--------------------------------------GETTERS--------------------------------------//

  get finCustomersForLine() {
    if (!this.isLoading && this.contractLines) {
      let index = this.contractLines.findIndex(
        (line) => line.Id === this.selectedLineItemId
      );
      return this.contractLines[index].FinCustomers;
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
  handleSaveRecord(event) {
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

  handleSuccess(event) {
    const updatedContractLines = JSON.parse(JSON.stringify(this.contractLines));

    //find the line index that was updated
    const index = updatedContractLines.findIndex(
      (line) => line.Id === this.selectedLineItemId
    );

    //Update the contract line with the new values from the form fields
    updatedContractLines[index].EndDate = event.detail.fields.EndDate.value;
    updatedContractLines[index].StartDate = event.detail.fields.StartDate.value;
    updatedContractLines[index].Location__City__s =
      event.detail.fields.Location__City__s.value;
    updatedContractLines[index].Location__Street__s =
      event.detail.fields.Location__Street__s.value;
    updatedContractLines[index].Location__PostalCode__s =
      event.detail.fields.Location__PostalCode__s.value;
    updatedContractLines[index].Location__City__s =
      event.detail.fields.Location__City__s.value;
    updatedContractLines[index].Geolocation__Latitude__s =
      event.detail.fields.Geolocation__Latitude__s.value;
    updatedContractLines[index].Geolocation__Longitude__s =
      event.detail.fields.Geolocation__Longitude__s.value;
    updatedContractLines[index].Calculated_Duration__c =
      event.detail.fields.Calculated_Duration__c.value;
    updatedContractLines[index].Estimated_Duration__c =
      event.detail.fields.Estimated_Duration__c.value;

    this.handleToast("Success", "Record has been saved", "success");

    this.dispatchEvent(
      new CustomEvent("closemodal", {
        detail: updatedContractLines
      })
    );
  }
}