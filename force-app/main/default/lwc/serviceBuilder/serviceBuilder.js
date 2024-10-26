/**
 * @file ServiceBuilder.js
 * @description Controller for the ServiceBuilder Lightning Web Component
 * @author Frederik
 * @created 5/31/2024
 */

import { LightningElement, api, track } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import getContractLines from "@salesforce/apex/ServiceBuilderController.getContractLines";
import saveContractLine from "@salesforce/apex/ServiceBuilderController.saveContractLine";
import deleteContractLine from "@salesforce/apex/ServiceBuilderController.deleteContractLine";
import getFinancialAccountName from "@salesforce/apex/ServiceBuilderController.getFinancialAccountName";
import insertOrRemoveContractLineFinancialAccount from "@salesforce/apex/ServiceBuilderController.insertOrRemoveContractLineFinancialAccount";
import recurrenceModal from "c/recurrencePattern";
import { subscribe } from "lightning/empApi";

export default class ServiceBuilder extends LightningElement {
  // API Properties
  @api recordId;
  @api channelName = "/event/Contract_Event__e";

  // Tracked Properties
  @track contractLines = [];
  @track wrappedContractLines = [];
  @track originalContractLines = [];
  @track filterResults = [];
  @track appliedFilters = [];

  // Component Properties
  frequencyOptions;
  planningTypeOptions;
  selectedRecords = [];
  showActions = true;
  selectedLineItemId;
  isModalOpen = false;
  isLoading = true;

  // Accordion Sections
  activeSections = ["generalInfo", "locationInfo", "priceInfo"];

  // Column Labels
  serviceTypeLabel = "Service Type";
  selectLabel = "";
  projectCodeLabel = "Code";
  streetLabel = "Street";
  cityLabel = "City";
  zipCodeLabel = "Zip Code";
  startDateLabel = "Start Date";
  endDateLabel = "End Date";
  actionsLabel = "Actions";

  // Product Matching Configuration
  productMatchingInfo = {
    primaryField: { fieldPath: "Name" },
    additionalFields: [{ fieldPath: "ProductCode" }]
  };

  finCustomerFilter = {
    criteria: [
      {
        fieldPath: "RecordType.Name",
        operator: "eq",
        value: "Financial Customer"
      }
    ]
  };

  /**
   * @description Lifecycle hook called when the component is inserted into the DOM
   */
  connectedCallback() {
    this.loadContractLines();
    this.handleSubscribe();
  }

  handleSubscribe() {
    const self = this;
    const messageCallback = function (response) {
      console.log("New message received 2: ", response);
      if (response.data.payload.Record_Id__c === self.recordId) {
        console.log("Record Id matched");
        self.loadContractLines();
      }
    };

    subscribe(this.channelName, -1, messageCallback).then((response) => {
      console.log(
        "Subscription request sent to: ",
        JSON.stringify(response.channel)
      );
      this.subscription = response;
    });
  }

  /**
   * @description Loads contract lines for the current record
   */
  loadContractLines() {
    getContractLines({ recordId: this.recordId })
      .then((result) => {
        let index = 0;

        result.forEach((line) => {
          line.FinCustomers = [];
          line.Index = index;
          line.IsNew = false;
          line.IsSelected = false;
          // line.StartDate =
          //   line.StartDate !== undefined
          //     ? line.StartDate
          //     : line.ServiceContract.StartDate;

          index++;
        });

        this.contractLines = result;
        this.originalContractLines = [...this.contractLines];
        this.isLoading = false;

        console.log(JSON.stringify(this.contractLines));
      })
      .catch((error) => {
        console.error("Error loading contract lines:", error);
        this.isLoading = false;
      });
  }

  /**
   * @description Sets opacity for rows other than the selected one
   * @param {Event} event - The event object
   */
  setOtherRowOpacity(event) {
    let index = parseInt(event.target.dataset.index) + 2;
    this.template.querySelectorAll("tr").forEach((row, rowIndex) => {
      if (parseInt(rowIndex) !== parseInt(index) && rowIndex !== 0) {
        row.style.opacity = 0.6;
      } else {
        row.style.opacity = 1;
      }
    });
  }

  /**
   * @description Resets opacity for all rows
   */
  resetRowOpacity() {
    this.template.querySelectorAll("tr").forEach((row) => {
      row.style.opacity = 1;
    });
  }

  /**
   * @description Reindexes the contract lines
   */
  reIndex() {
    this.contractLines.forEach((line, newIndex) => {
      line.Index = newIndex;
    });

    this.contractLines = [...this.contractLines];
  }

  /**
   * @description Handles basic sorting of the contract lines
   * @param {Event} event - The event object
   */
  handleBasicSort(event) {
    let field = event.target.dataset.field;
    let lwcRef = event.target.dataset.lwcref;
    let sortDirection = event.target.dataset.sort;

    let newSort = sortDirection === "asc" ? "desc" : "asc";
    let newSortIcon = newSort === "asc" ? "↑" : "↓";

    this.refs[lwcRef].innerHTML =
      event.target.dataset.label + " " + newSortIcon;
    this.refs[lwcRef].dataset.sort = newSort;

    // Reset sort on other columns
    this.template.querySelectorAll("th[data-lwcref]").forEach((column) => {
      if (column.dataset.lwcref !== lwcRef) {
        column.innerHTML = column.dataset.label;
        column.dataset.sort = "none";
      }
    });

    this.handleSort(field, newSort);
  }

  /**
   * @description Sorts the contract lines based on the given field and direction
   * @param {string} field - The field to sort by
   * @param {string} sortDirection - The sort direction ('asc' or 'desc')
   */
  handleSort(field, sortDirection) {
    let sortedData = this.contractLines.sort((a, b) => {
      let valueA = a[field] ? a[field].toString().toLowerCase() : "";
      let valueB = b[field] ? b[field].toString().toLowerCase() : "";
      return sortDirection === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    });
    this.contractLines = [...sortedData];
    this.reIndex();
  }

  /**
   * @description Handles checkbox selection for a contract line
   * @param {Event} event - The event object
   */
  handleCheck(event) {
    let index = event.target.dataset.index;
    let value = event.target.checked;

    this.contractLines[index].IsSelected = value;

    this.contractLines = [...this.contractLines];
  }

  /**
   * @description Displays a toast notification
   * @param {string} title - The toast title
   * @param {string} message - The toast message
   * @param {string} variant - The toast variant (success, error, warning, info)
   */
  handleToast(title, message, variant) {
    const event = new ShowToastEvent({
      title: title,
      message: message,
      variant: variant
    });
    this.dispatchEvent(event);
  }

  /**
   * @description Handles successful save of a record
   */
  handleSuccess() {
    this.handleToast("Success", "Record has been saved", "success");

    window.location.reload();
  }

  /**
   * @description Handles changes to the project code
   * @param {Event} event - The event object
   */
  handleProjectCodeChange(event) {
    let index = event.target.dataset.index;
    this.contractLines[index].Project_Code__c = event.detail.value;
  }

  /**
   * @description Handles changes to the street address
   * @param {Event} event - The event object
   */
  handleStreetChange(event) {
    let index = event.target.dataset.index;
    this.contractLines[index].Location__Street__s = event.detail.value;
  }

  /**
   * @description Handles changes to the city
   * @param {Event} event - The event object
   */
  handleCityChange(event) {
    let index = event.target.dataset.index;
    this.contractLines[index].Location__City__s = event.detail.value;
  }

  /**
   * @description Handles changes to the zip code
   * @param {Event} event - The event object
   */
  handleZipCodeChange(event) {
    let index = event.target.dataset.index;
    this.contractLines[index].Location__PostalCode__s = event.detail.value;
  }

  /**
   * @description Handles changes to the start date
   * @param {Event} event - The event object
   */
  handleStartDateChange(event) {
    let index = event.target.dataset.index;
    this.contractLines[index].StartDate = event.detail.value;
  }

  /**
   * @description Handles changes to the end date
   * @param {Event} event - The event object
   */
  handleLineEndDateChange(event) {
    let index = event.target.dataset.index;
    this.contractLines[index].EndDate = event.detail.value;
  }

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

        if (!customerExists) {
          insertOrRemoveContractLineFinancialAccount({
            name: financialAccountName,
            contractLineItemId: lineItemId,
            financialCustomerId: selectedFinancialAccountId,
            action: "insert"
          })
            .then(() => {
              this.contractLines[index].FinCustomers.push({
                type: "icon",
                iconName: "standard:account",
                label: financialAccountName,
                recordId: selectedFinancialAccountId
              });

              this.contractLines = [...this.contractLines];

              this.handleToast(
                "Success",
                "Financial customer added to the contract line.",
                "success"
              );
            })
            .catch((error) => {
              console.error("Error inserting financial customer:", error);
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
    const contractLineIndex = this.contractLines.findIndex(
      (line) => line.Id === lineItemId
    );

    const removedCustomer =
      this.contractLines[contractLineIndex].FinCustomers[
        financialCustomerIndex
      ];

    insertOrRemoveContractLineFinancialAccount({
      name: removedCustomer.label,
      contractLineItemId: lineItemId,
      financialCustomerId: removedCustomer.recordId,
      action: "delete"
    })
      .then(() => {
        this.contractLines[contractLineIndex].FinCustomers.splice(
          financialCustomerIndex,
          1
        );

        this.contractLines = [...this.contractLines];

        this.handleToast(
          "Success",
          "Financial customer removed from the contract line.",
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

  /**
   * @description Handles setting the recurrence pattern
   * @param {Event} event - The event object
   */
  async handleSetRecurrence(event) {
    let index = parseInt(event.target.dataset.index);
    let selectedRecord = this.contractLines[index];

    try {
      const result = await recurrenceModal.open({
        recordId: selectedRecord,
        size: "small"
      });

      if (result) {
        let records = JSON.parse(result);

        records.forEach((record) => {
          record.Index = index;
          this.contractLines[index] = record;
          this.insertContractLine(index, record.Product2Id);
        });

        this.handleToast(
          "Success",
          "Recurrence pattern has been applied to selected record",
          "success"
        );
      } else {
        console.log("Modal closed without saving using cross icon button");
      }
    } catch (error) {
      console.error("Error applying recurrence pattern:", error);
      this.handleToast(
        "Error",
        "An error occurred while applying recurrence pattern",
        "error"
      );
    }
  }

  /**
   * @description Handles changes to the service (product) selection
   * @param {Event} event - The event object
   */
  handleServiceChange(event) {
    let index = event.target.dataset.index;
    let value = event.detail.recordId;

    this.insertContractLine(index, value);
  }

  /**
   * @description Handles mass edit of recurrence patterns for selected records
   */
  handleMassEditRecurrence() {
    this.selectedRecords = this.contractLines.filter((line) => line.IsSelected);

    recurrenceModal
      .open({
        selectedRecords: this.selectedRecords,
        size: "small"
      })
      .then((result) => {
        // Uncheck all selected records
        this.template.querySelectorAll("lightning-input").forEach((input) => {
          input.checked = false;
        });
        this.selectedRecords = [];
        let records = JSON.parse(result);
        records.forEach((record) => {
          let index = record.Index;
          this.contractLines[index] = record;
          this.insertContractLine(index, record.Product2Id);
        });
        this.handleToast(
          "Success",
          "Recurrence pattern has been applied to selected records",
          "success"
        );
      })
      .catch((error) => {
        console.error("Error applying mass recurrence pattern:", error);
        this.handleToast(
          "Error",
          "An error occurred while applying recurrence pattern",
          "error"
        );
      });
  }

  /**
   * @description Handles search functionality for contract lines
   * @param {Event} event - The event object
   */
  handleSearch(event) {
    let searchTerm = event.detail.value.toLowerCase();

    let field = event.target.dataset.field;

    // Remove previous filter for this field
    this.appliedFilters = this.appliedFilters.filter(
      (filter) => filter.field !== field
    );

    // Add the new filter if there's a search term
    if (searchTerm !== "") {
      this.appliedFilters.push({ field, searchTerm });
    }

    // Apply all filters
    this.filterResults = this.originalContractLines
      .filter((line) => {
        return this.appliedFilters.every(
          (filter) =>
            line[filter.field] &&
            line[filter.field].toLowerCase().includes(filter.searchTerm)
        );
      })
      .map((line, index) => {
        line.Index = index;
        return line;
      });
  }

  /**
   * @description Clears all applied search filters
   */
  handleClearSearch() {
    this.appliedFilters = [];
    this.filterResults = [];
    // Clear all search input fields
    const headerSearchInputs = this.template.querySelectorAll(
      "th lightning-input[data-field]"
    );
    headerSearchInputs.forEach((input) => {
      input.value = "";
    });
  }

  /**
   * @description Getter to retrieve the finCustomers for a line based on the selectedLineItemId. Returns an empty array if undefined or null.
   * @returns {Array} The finCustomers for the selected line
   */

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

  /**
   * @description Getter to determine which contract lines to display
   * @returns {Array} The contract lines to display
   */
  get contractLinesToShow() {
    if (!this.isLoading) {
      return this.filterResults.length > 0
        ? this.filterResults
        : this.contractLines;
    } else {
      return [];
    }
  }

  /**
   * @description Adds a new row to the contract lines
   */
  handleAddActionRow() {
    const startDate = this.contractLines[0].ServiceContract.StartDate
      ? this.contractLines[0].ServiceContract.StartDate
      : this.contractLines[0].StartDate;

    const endDate = this.contractLines[0].ServiceContract.EndDate
      ? this.contractLines[0].ServiceContract.EndDate
      : `${new Date().getFullYear()}/12/31`;

    const newRow = {
      Id: null,
      Product2Id: null,
      Frequency__c: "",
      Planning_Type__c: "",
      Quantity: 1,
      UnitPrice: 0,
      StartDate: startDate,
      EndDate: endDate,
      IsNew: true,
      ServiceContractId: this.recordId
    };

    if (this.filterResults.length > 0) {
      newRow.Index = this.filterResults.length;
      this.filterResults.push(newRow);
      this.filterResults = [...this.filterResults];
    } else {
      newRow.Index = this.contractLines.length;
      this.contractLines.push(newRow);
      this.contractLines = [...this.contractLines];
    }
  }

  /**
   * @description Handles copying a contract line
   * @param {Event} event - The event object
   */
  handleCopyLine(event) {
    const index = parseInt(event.target.dataset.index);
    const originalLine = this.contractLines[index];

    const newRow = {
      Id: null,
      Product2Id: originalLine.Product2Id,
      Frequency__c: originalLine.Frequency__c,
      Planning_Type__c: originalLine.Planning_Type__c,
      Quantity: originalLine.Quantity,
      UnitPrice: originalLine.UnitPrice,
      StartDate: originalLine.StartDate,
      EndDate: originalLine.EndDate,
      Location__Street__s: originalLine.Location__Street__s,
      Location__City__s: originalLine.Location__City__s,
      Location__PostalCode__s: originalLine.Location__PostalCode__s,
      Project_Code__c: originalLine.Project_Code__c,
      IsNew: true,
      IsSelected: false,
      ServiceContractId: this.recordId,
      Index: this.contractLines.length
    };

    this.contractLines.push(newRow);
    this.contractLines = [...this.contractLines];
    this.reIndex();
  }

  /**
   * @description Handles deletion of a contract line
   * @param {Event} event - The event object
   */
  handleDeleteRow(event) {
    let index = event.target.dataset.index;
    let recordId = this.contractLines[index].Id;
    if (recordId !== null) {
      deleteContractLine({ contractLineId: recordId })
        .then(() => {
          this.contractLines.splice(index, 1);
          this.reIndex();
          this.handleToast("Success", "Record has been deleted", "success");
        })
        .catch((error) => {
          console.error("Error deleting contract line:", error);
          this.handleToast(
            "Error",
            "An error occurred while deleting record",
            "error"
          );
          this.contractLines = [...this.contractLines];
        });
    } else {
      this.contractLines.splice(index, 1);
      this.contractLines = [...this.contractLines];
    }
  }

  /**
   * @description Handles saving all modified contract lines
   */
  handleSaveAll() {
    this.contractLines.forEach((line, index) => {
      this.insertContractLine(index, line.Product2Id);
    });

    this.handleToast("Success", "All records have been saved", "success");
    this.reIndex();
  }

  /**
   * @description Inserts or updates a contract line
   * @param {number} index - The index of the contract line in the array
   * @param {string} value - The Product2Id value
   */
  insertContractLine(index, value) {
    let contractLine = this.contractLines[index];
    contractLine.Product2Id = value;
    contractLine.Location__CountryCode__s = "BE";

    saveContractLine({ contractLine: contractLine })
      .then((result) => {
        result.IsSelected = false;
        result.IsNew = false;
        result.Index = index;
        this.contractLines[index] = result;
        this.contractLines = [...this.contractLines];
        this.reIndex();
      })
      .catch((error) => {
        console.error("Error saving contract line:", error);
        this.contractLines = [...this.contractLines];
      });
  }

  /**
   * @description Opens the edit modal for a contract line
   * @param {Event} event - The event object
   */
  handleOpenEditModal(event) {
    let eventRecordId = event.target.dataset.id;

    const index = this.contractLines.findIndex(
      (line) => line.Id === eventRecordId
    );

    this.isModalOpen = true;

    this.populateLightningPickerWithExistingFinancialAccountsOfContractLine(
      index
    );
  }

  /**
   * @description Populates the lightning picker with existing financial accounts of a contract line
   * @param {number} index - The index of the contract line in the array
   */
  populateLightningPickerWithExistingFinancialAccountsOfContractLine(index) {
    this.selectedLineItemId = this.contractLines[index].Id;

    // Get the financial accounts of the contract line
    const financialAccounts =
      this.contractLines[index].Contract_Line_Financial_Accounts__r;

    // Loop through the financial accounts and add them to the FinCustomers array if they don't already exist
    if (financialAccounts.length > 0) {
      financialAccounts.forEach((account) => {
        const financialAccountInfo = {
          type: "icon",
          iconName: "standard:account",
          label: account.Financial_Customer__r.Name,
          recordId: account.Financial_Customer__c
        };

        // Check if the financial account already exists in FinCustomers
        const financialAccountExists = this.contractLines[
          index
        ].FinCustomers.some(
          (customer) => customer.recordId === financialAccountInfo.recordId
        );

        // If it doesn't exist, push it to FinCustomers
        if (!financialAccountExists) {
          this.contractLines[index].FinCustomers.push(financialAccountInfo);
        }
      });
    }
  }

  /**
   * @description Closes the edit modal
   */
  closeModal() {
    this.isModalOpen = false;
  }

  // /**
  //  * @description Handles navigation to the previous record
  //  * @param {Event} event - The event object
  //  */
  // handlePrevious(event) {
  //   let currentIndex =
  //     this.filterResults.length > 0
  //       ? this.filterResults.findIndex(
  //           (line) => line.Id === this.selectedLineItemId
  //         )
  //       : this.contractLines.findIndex(
  //           (line) => line.Id === this.selectedLineItemId
  //         );

  //   let previousIndex = currentIndex - 1;

  //   // Loop to find the previous valid index
  //   while (previousIndex !== currentIndex) {
  //     if (previousIndex < 0) {
  //       previousIndex = this.contractLines.length - 1;
  //     }

  //     const previousLine =
  //       this.filterResults.length > 0
  //         ? this.filterResults[previousIndex]
  //         : this.contractLines[previousIndex];

  //     if (previousLine && previousLine.Id) {
  //       break;
  //     }

  //     previousIndex--;
  //   }

  //   this.selectedLineItemId =
  //     this.filterResults.length > 0
  //       ? this.filterResults[previousIndex].Id
  //       : this.contractLines[previousIndex].Id;

  //   event.target.dataset.id = this.selectedLineItemId;
  //   event.target.dataset.index = previousIndex;
  //   this.setOtherRowOpacity(event);

  //   // Populate the lightning picker with the financial accounts of the previous line
  //   this.populateLightningPickerWithExistingFinancialAccountsOfContractLine(
  //     previousIndex
  //   );
  // }

  // /**
  //  * @description Handles navigation to the next record
  //  * @param {Event} event - The event object
  //  */
  // handleNext(event) {
  //   let currentIndex =
  //     this.filterResults.length > 0
  //       ? this.filterResults.findIndex(
  //           (line) => line.Id === this.selectedLineItemId
  //         )
  //       : this.contractLines.findIndex(
  //           (line) => line.Id === this.selectedLineItemId
  //         );

  //   let nextIndex = currentIndex + 1;

  //   // Loop to find the next valid index
  //   while (nextIndex !== currentIndex) {
  //     if (nextIndex >= this.contractLines.length) {
  //       nextIndex = 0; // Wrap around to the start
  //     }

  //     const nextLine =
  //       this.filterResults.length > 0
  //         ? this.filterResults[nextIndex]
  //         : this.contractLines[nextIndex];

  //     if (nextLine && nextLine.Id) {
  //       // Found a valid line
  //       break;
  //     }

  //     nextIndex++;
  //   }

  //   this.selectedLineItemId =
  //     this.filterResults.length > 0
  //       ? this.filterResults[nextIndex].Id
  //       : this.contractLines[nextIndex].Id;

  //   event.target.dataset.id = this.selectedLineItemId;
  //   event.target.dataset.index = nextIndex;
  //   this.setOtherRowOpacity(event);

  //   //testing this out
  //   // Select the lightning-record-edit-form element
  //   const form = this.template.querySelector("lightning-record-edit-form");
  //   // Check if the form was found
  //   if (form) {
  //     console.log("form found ");
  //     // Find all lightning-input-field components within this form
  //     const inputFields = form.querySelectorAll("lightning-input-field");
  //     // Reset each input field to its original value
  //     inputFields.forEach((field) => {
  //       console.log("resetting field");
  //       field.reset();
  //     });
  //   }

  //   // Populate the lightning picker with the financial accounts of the next line
  //   this.populateLightningPickerWithExistingFinancialAccountsOfContractLine(
  //     nextIndex
  //   );
  // }
}