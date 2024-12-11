import { LightningElement } from "lwc";
import { createRecord } from "lightning/uiRecordApi";
import { updateRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { CloseActionScreenEvent } from "lightning/actions";
import CONTRACT_LINE_ITEM_OBJECT from "@salesforce/schema/ContractLineItem";
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
    ImportCLI_UploadButton
  };

  handleFileUpload(event) {
    const file = event.target.files[0];

    if (file) {
      // //Error handling - validate that it's a CSV file
      if (!file.name.endsWith(".csv")) {
        console.error("Invalid file type. Please upload a CSV file.");

        const event = new ShowToastEvent({
          title: ImportCLI_Error_Toast_Title,
          message: ImportCLI_WrongFile_Message,
          variant: "error"
        });

        this.dispatchEvent(event);

        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result;

        // Parse the content into rows for use later
        const rows = fileContent.split("\n");

        //Grab the headers values
        const headers = rows[0]
          .split(",")
          .map((header) => header.replace(/\r/g, "").trim());

        //For each row, grab the values and create an object with the headers as keys
        const rowObjectsArray = rows.slice(1).map((row) => {
          const values = row
            .split(",")
            .map((value) => value.replace(/\r/g, "").trim());

          const rowObject = {};

          headers.forEach((header, index) => {
            rowObject[header] = values[index];
          });

          return rowObject;
        });

        try {
          rowObjectsArray.forEach((rowObject) => {
            this.createOrUpdateContractLineItem(rowObject);
          });

          const event = new ShowToastEvent({
            title: ImportCLI_Success_Toast_Title,
            message: ImportCLI_Success_Toast_Message,
            variant: "success"
          });

          this.dispatchEvent(event);
        } catch (error) {
          const event = new ShowToastEvent({
            title: ImportCLI_Error_Toast_Title,
            message: ImportCLI_Error_Toast_Message,
            variant: "error"
          });

          this.dispatchEvent(event);
        }
      };
      reader.readAsText(file);
    }
  }

  async createOrUpdateContractLineItem(rowObject) {
    try {
      const fields = {};
      for (const key in rowObject) {
        // Skip empty values and don't include Id
        if (rowObject[key] && key !== "Id") {
          fields[key] = rowObject[key];
        }
      }

      if (rowObject.Id) {
        // For update include Id in fields and not in apiName
        fields.Id = rowObject.Id;
        //As it's an update, we can't include ServiceContractId in the fields object otherwise it won't update.
        delete fields.ServiceContractId;

        await updateRecord({ fields });

        console.log("Updated Contract Line Item:", rowObject.Id);
      } else {
        // For create include apiName but no Id
        const recordInput = {
          apiName: CONTRACT_LINE_ITEM_OBJECT.objectApiName,
          fields: fields
        };

        const result = await createRecord(recordInput);

        console.log("Created Contract Line Item:", result.id);
      }
    } catch (error) {
      console.error("There was an error creating or updating the CLI:", error);
    }
  }
}