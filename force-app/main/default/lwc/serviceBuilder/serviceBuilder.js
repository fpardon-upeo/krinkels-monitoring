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
import insertOrRemoveContractLineFinancialAccount from "@salesforce/apex/ServiceBuilderController.insertOrRemoveContractLineFinancialAccount";
import updateServiceContractLocationType from "@salesforce/apex/ServiceBuilderController.updateServiceContractLocationType";
import getServiceContract from "@salesforce/apex/ServiceBuilderController.getServiceContract";
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
  @track serviceContract = {};
  @track locationType = "Address";

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
  estimatedDurationLabel = "Est. Dur.";
  calculatedDurationLabel = "Calc. Dur.";
  longitudeLabel = "Longitude";
  latitudeLabel = "Latitude";
  longitudeLabel = "Longitude";
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

  ///////////////////////////////Getters/////////////////////////////

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
   * @description Getter to determine the location columns to display
   * @returns {Object} The location columns to display
   */
  get locationColumns() {
    return {
      isGeoLocation: this.locationType === "Geolocation",
      isAddress: this.locationType === "Address"
    };
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
   * @description Lifecycle hook called when the component is inserted into the DOM
   */
  connectedCallback() {
    this.loadContractLines();

    this.handleSubscribe();
  }

  handleSubscribe() {
    const self = this;
    const messageCallback = function (response) {
      if (response.data.payload.Record_Id__c === self.recordId) {
        self.loadContractLines();
      }
    };

    subscribe(this.channelName, -1, messageCallback).then((response) => {
      this.subscription = response;
    });
  }

  /**
   * @description Loads contract lines for the current record
   */
  loadContractLines() {
    getContractLines({ recordId: this.recordId })
      .then((result) => {
        this.serviceContract = result[0].ServiceContract;

        if (result.length > 0) {
          let index = 0;

          // Sort the results by LineItemNumber first
          result.sort((a, b) => {
            return a.LineItemNumber - b.LineItemNumber;
          });

          result.forEach((line) => {
            // Initialize FinCustomers array
            line.FinCustomers = [];

            // Convert Contract_Line_Financial_Accounts__r to FinCustomers format
            if (line.Contract_Line_Financial_Accounts__r) {
              line.Contract_Line_Financial_Accounts__r.forEach((account) => {
                line.FinCustomers.push({
                  type: "icon",
                  iconName: "standard:account",
                  label: account.Financial_Customer__r.Name,
                  recordId: account.Financial_Customer__c
                });
              });
            }

            line.Index = index;
            line.IsNew = false;
            line.IsSelected = false;

            index++;
          });

          // Set initial locationType from the first contract line
          if (result.length > 0) {
            this.locationType =
              result[0].ServiceContract.Location_Type__c || "Address";
          }

          this.contractLines = result;
          this.originalContractLines = [...this.contractLines];
          this.isLoading = false;
        } else {
          getServiceContract({ recordId: this.recordId }).then((result) => {
            this.serviceContract = result;
          });
        }
      })
      .catch((error) => {
        console.error("Error loading contract lines:", error);
        this.isLoading = false;
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
   * @description Handles changes to the project code
   * @param {Event} event - The event object
   */
  handleProjectCodeChange(event) {
    let index = event.target.dataset.index;
    this.contractLines[index].Project_Code__c = event.detail.value;
  }

  handleEstimatedDurationChange(event) {
    let index = event.target.dataset.index;
    this.contractLines[index].Estimated_Duration__c = Number(
      event.detail.value
    );
  }

  handleCalculatedDurationChange(event) {
    let index = event.target.dataset.index;
    this.contractLines[index].Calculated_Duration__c = Number(
      event.detail.value
    );
  }

  /**
   * @description Handles changes to the latitude
   * @param {Event} event - The event object
   */
  handleLatitudeChange(event) {
    let index = event.target.dataset.index;

    //convert to decimal
    let convertedValue = parseFloat(event.detail.value);
    this.contractLines[index].Geolocation__Latitude__s = convertedValue;
  }

  /**
   * @description Handles changes to the longitude
   * @param {Event} event - The event object
   */
  handleLongitudeChange(event) {
    let index = event.target.dataset.index;
    this.contractLines[index].Geolocation__Longitude__s = event.detail.value;
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
          if (!record.IsNew) {
            this.insertContractLine(index, record.Product2Id);
          }
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

    this.contractLines[index].Product2Id = value;
  }

  /**
   * @description Handles mass edit of recurrence patterns for selected records
   */
  handleMassEditRecurrence() {
    this.selectedRecords = this.contractLines.filter((line) => line.IsSelected);

    if (this.selectedRecords.length === 0) {
      this.handleToast(
        "Error",
        "No records selected, please select at least one record by selecting the appropriate checkbox.",
        "error"
      );
      return;
    }

    recurrenceModal
      .open({
        selectedRecords: this.selectedRecords,
        size: "small"
      })
      .then((result) => {
        if (result) {
          // Uncheck all selected records
          this.template.querySelectorAll("lightning-input").forEach((input) => {
            input.checked = false;
          });
          this.selectedRecords = [];
          let records = JSON.parse(result);
          records.forEach((record) => {
            let index = record.Index;
            this.contractLines[index] = record;

            if (!record.IsNew) {
              this.insertContractLine(index, record.Product2Id);
            }
          });
          this.handleToast(
            "Success",
            "Recurrence pattern has been applied to selected records",
            "success"
          );
        }
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
    let type = event.target.dataset.type;

    // Remove previous filter for this field
    this.appliedFilters = this.appliedFilters.filter(
      (filter) => filter.field !== field
    );

    // Add the new filter if there's a search term
    if (searchTerm !== "") {
      this.appliedFilters.push({ field, searchTerm, type });
    }

    // Apply all filters
    this.filterResults = this.contractLines.filter((line) => {
      return this.appliedFilters.every((filter) => {
        // Handle nested fields (e.g., Product2.Name)
        let value = filter.field.includes(".")
          ? filter.field.split(".").reduce((obj, key) => obj?.[key], line)
          : line[filter.field];

        // Convert value to string for comparison
        value = value ? value.toString().toLowerCase() : "";

        // Handle different data types
        switch (filter.type) {
          case "date":
            return value.includes(filter.searchTerm);
          case "number":
            return value.includes(filter.searchTerm);
          default: // text
            return value.includes(filter.searchTerm);
        }
      });
    });

    // Force component to re-render
    this.filterResults = [...this.filterResults];
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
   * @description Handles the toggle of the location type
   * @param {Event} event - The event object
   */
  handleToggleLocationType(event) {
    // Set the location type based on the checkbox state
    this.locationType = event.target.checked ? "Address" : "Geolocation";

    // Update the Location Type field on the Service Contract record
    updateServiceContractLocationType({
      recordId: this.recordId,
      locationType: this.locationType
    })
      .then(() => {
        console.log("Location Type updated successfully");
      })
      .catch((error) => {
        console.error("Error updating Location Type:", error);
      });
  }

  /**
   * @description Adds a new row to the contract lines
   */
  handleAddActionRow() {
    // Default dates
    const today = new Date();
    const defaultStartDate = today.toISOString().split("T")[0];
    const defaultEndDate = `${today.getFullYear()}-12-31`;

    // Get dates from existing contract lines if available
    const startDate = this.contractLines[0]?.ServiceContract?.StartDate
      ? this.contractLines[0].ServiceContract.StartDate
      : (this.contractLines[0]?.StartDate ?? defaultStartDate);

    const endDate = this.contractLines[0]?.ServiceContract?.EndDate
      ? this.contractLines[0].ServiceContract.EndDate
      : (this.contractLines[0]?.EndDate ?? defaultEndDate);

    const newRow = {
      Id: null,
      Product2Id: this.serviceContract.Product__c,
      Frequency__c: "",
      Planning_Type__c: "",
      LMRA__c: this.serviceContract.Default_LMRA__c,
      Quantity: 1,
      UnitPrice: 0,
      StartDate: startDate,
      EndDate: endDate,
      IsNew: true,
      ServiceContractId: this.recordId,
      FinCustomers: [],
      Index: this.contractLines.length
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
      ...originalLine,
      Id: null,
      IsNew: true,
      IsSelected: false,
      LineItemNumber: null,
      ServiceContractId: this.recordId,
      Index: this.contractLines.length,
      Class: "hidden"
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
      this.reIndex();
      // this.contractLines = [...this.contractLines];
    }
  }

  /**
   * @description Handles saving all modified contract lines
   */
  handleSaveAll() {
    let hasErrors = false;

    // Clear all previous errors
    this.contractLines = this.contractLines.map((line) => ({
      ...line,
      Error: null,
      Class: "hidden"
    }));

    // Validate each line and set errors
    this.contractLines = this.contractLines.map((line, index) => {
      const errors = [];

      if (!line.Product2Id) errors.push("Service Type");
      if (!line.Project_Code__c) errors.push("Code");
      if (!line.Estimated_Duration__c && line.Estimated_Duration__c !== 0)
        errors.push("Estimated Duration");
      if (!line.Calculated_Duration__c && line.Calculated_Duration__c !== 0)
        errors.push("Calculated Duration");

      // Location validation based on type
      if (this.locationColumns.isGeoLocation) {
        if (!line.Geolocation__Latitude__s) {
          errors.push("Latitude");
        } else if (!line.Geolocation__Longitude__s) {
          errors.push("Longitude");
        }
      } else if (this.locationColumns.isAddress) {
        if (!line.Location__Street__s) {
          errors.push("Street");
        } else if (!line.Location__City__s) {
          errors.push("City");
        } else if (!line.Location__PostalCode__s) {
          errors.push("Zip Code");
        }
      }

      if (!line.StartDate) errors.push("Start Date");
      if (!line.EndDate) errors.push("End Date");

      if (!line.Recurrence_Pattern__c) errors.push("Recurrence Pattern");

      if (errors.length > 0) {
        hasErrors = true;
        return {
          ...line,
          Error: `Missing fields: ${errors.join(", ")}.`,
          Class: "display"
        };
      }
      return line;
    });

    if (hasErrors) {
      this.handleToast(
        "Error",
        "Please complete all required fields before saving the records.",
        "error"
      );
      // Force a refresh of the UI
      this.contractLines = [...this.contractLines];
      return;
    }

    // If validation passes, proceed with saving
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
    contractLine.LMRA__c = this.serviceContract.Default_LMRA__c;
    contractLine.Location__CountryCode__s = "BE";

    // Store the FinCustomers before saving so we can preserve them and add them back after saving
    const existingFinCustomers = contractLine.FinCustomers || [];

    //Check the duration fields and convert them to numbers
    if (contractLine.Estimated_Duration__c) {
      contractLine.Estimated_Duration__c = Number(
        contractLine.Estimated_Duration__c
      );
    }
    if (contractLine.Calculated_Duration__c) {
      contractLine.Calculated_Duration__c = Number(
        contractLine.Calculated_Duration__c
      );
    }
    //Check the geolocation fields and convert them to decimal
    if (contractLine.Geolocation__Latitude__s) {
      contractLine.Geolocation__Latitude__s = parseFloat(
        contractLine.Geolocation__Latitude__s
      );
    }
    if (contractLine.Geolocation__Longitude__s) {
      contractLine.Geolocation__Longitude__s = parseFloat(
        contractLine.Geolocation__Longitude__s
      );
    }

    saveContractLine({ contractLine: contractLine })
      .then((result) => {
        if (result) {
          console.log("Result:", JSON.stringify(result));
          result.IsSelected = false;
          result.IsNew = false;
          result.Index = index;
          // Add the existing FinCustomers back to the result
          result.FinCustomers = existingFinCustomers;
          this.contractLines[index] = result;
          // If there are financial accounts in the FinCustomers array and no Contract_Line_Financial_Accounts__r, insert them
          if (
            this.contractLines[index].FinCustomers.length > 0 &&
            !this.contractLines[index].Contract_Line_Financial_Accounts__r
          ) {
            this.contractLines[index].FinCustomers.forEach((customer) => {
              insertOrRemoveContractLineFinancialAccount({
                name: customer.label,
                contractLineItemId: this.contractLines[index].Id,
                financialCustomerId: customer.recordId,
                action: "insert"
              });
            });
          }
          this.contractLines = [...this.contractLines];
          this.reIndex();
        }
      })
      .catch((error) => {
        console.error("Error saving contract line:", error.message);
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
  closeModal(event) {
    this.isModalOpen = false;

    if (event && event.detail) {
      const deepClone = JSON.parse(JSON.stringify(event.detail));

      this.contractLines = [...deepClone];
    }
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