import { LightningElement } from "lwc";
import createUpdateRecord from "@salesforce/apex/ImportRecordsController.createUpdateRecord";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import ImportCLI_WrongFile_Message from "@salesforce/label/c.ImportCLI_WrongFile_Message";
import ImportCLI_Error_Toast_Title from "@salesforce/label/c.ImportCLI_Error_Toast_Title";
import ImportCLI_Error_Toast_Message from "@salesforce/label/c.ImportCLI_Error_Toast_Message";
import ImportCLI_Success_Toast_Title from "@salesforce/label/c.ImportCLI_Success_Toast_Title";
import ImportCLI_Success_Toast_Message from "@salesforce/label/c.ImportCLI_Success_Toast_Message";
import ImportCLI_Header from "@salesforce/label/c.ImportCLI_Header";
import ImportCLI_UploadButton from "@salesforce/label/c.ImportCLI_UploadButton";

export default class ImportCsv extends LightningElement {
  labels = {
    ImportCLI_Header,
    ImportCLI_UploadButton,
    ImportCLI_WrongFile_Message,
    ImportCLI_Error_Toast_Title,
    ImportCLI_Error_Toast_Message,
    ImportCLI_Success_Toast_Title,
    ImportCLI_Success_Toast_Message
  };

  // Known field types that need special handling
  fieldTypes = {
    'Notify_Customer_When_En_Route__c': 'BOOLEAN'
  };

  convertFieldValue(value, fieldName) {
    if (!value) return null;

    const fieldType = this.fieldTypes[fieldName];
    if (fieldType === 'BOOLEAN') {
      const upperValue = value.toUpperCase();
      if (upperValue === 'TRUE') return true;
      if (upperValue === 'FALSE') return false;
      return null;
    }

    return value;
  }

  handleFileUpload(event) {
    const file = event.target.files[0];

    if (file) {
      if (!file.name.endsWith(".csv")) {
        console.error("Invalid file type. Please upload a CSV file.");
        this.dispatchEvent(new ShowToastEvent({
          title: this.labels.ImportCLI_Error_Toast_Title,
          message: this.labels.ImportCLI_WrongFile_Message,
          variant: "error"
        }));
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result;
        // Split by newlines and filter out empty rows
        const rows = fileContent.split(/\r?\n/).filter(row => row.trim().length > 0);

        if (rows.length < 2) {
          this.dispatchEvent(new ShowToastEvent({
            title: this.labels.ImportCLI_Error_Toast_Title,
            message: "CSV file is empty or has no data rows",
            variant: "error"
          }));
          return;
        }

        const headers = rows[0].split(",").map(header => header.trim());

        const rowObjectsArray = rows
            .slice(1)
            .filter(row => row.trim().length > 0)  // Additional check for empty rows
            .map(row => {
              const values = row.split(",").map(value => value.trim());

              // Skip rows that don't have enough values
              if (values.length !== headers.length) {
                console.warn('Skipping row due to mismatched column count:', row);
                return null;
              }

              const rowObject = {};
              let hasData = false;  // Flag to check if row has any non-empty values

              headers.forEach((header, index) => {
                const value = this.convertFieldValue(values[index], header);
                if (value !== null) {
                  rowObject[header] = value;
                  hasData = true;
                }
              });

              return hasData ? rowObject : null;
            })
            .filter(row => row !== null);  // Remove any null rows

        if (rowObjectsArray.length > 0) {
          this.processRows(rowObjectsArray);
        } else {
          this.dispatchEvent(new ShowToastEvent({
            title: this.labels.ImportCLI_Error_Toast_Title,
            message: "No valid data rows found in CSV",
            variant: "error"
          }));
        }
      };
      reader.readAsText(file);
    }
  }

  async processRows(rowObjectsArray) {
    try {
      for (const rowObject of rowObjectsArray) {
        await this.createOrUpdateContractLineItem(rowObject);
      }

      this.dispatchEvent(new ShowToastEvent({
        title: this.labels.ImportCLI_Success_Toast_Title,
        message: this.labels.ImportCLI_Success_Toast_Message,
        variant: "success"
      }));
    } catch (error) {
      console.error('Error processing rows:', error);
      this.dispatchEvent(new ShowToastEvent({
        title: this.labels.ImportCLI_Error_Toast_Title,
        message: error.message || this.labels.ImportCLI_Error_Toast_Message,
        variant: "error"
      }));
    }
  }

  async createOrUpdateContractLineItem(rowObject) {
    try {
      const pricebookEntryExternalId = rowObject['PricebookEntry_External_Id__c'];

      // Create fields object with all fields except PricebookEntry.External_Id__c
      const fields = {};
      for (const [key, value] of Object.entries(rowObject)) {
        if (value !== null && value !== undefined && key !== 'PricebookEntry_External_Id__c') {
          fields[key] = value;
        }
      }

      // Skip if no fields to process
      if (Object.keys(fields).length === 0) {
        console.warn('Skipping empty row');
        return;
      }

      const result = await createUpdateRecord({
        fields: fields,
        pricebookEntryExternalId: pricebookEntryExternalId
      });

      if (!result.success) {
        throw new Error(result.error);
      }

      console.log(fields.Id ?
          `Updated Contract Line Item: ${result.recordId}` :
          `Created Contract Line Item: ${result.recordId}`
      );
    } catch (error) {
      console.error("There was an error creating or updating the CLI:",
          JSON.stringify(rowObject),
          error.message || error
      );
      throw error;
    }
  }
}