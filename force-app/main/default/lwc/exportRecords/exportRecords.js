// exportRecords.js
import { LightningElement, api } from "lwc";
import getExportData from "@salesforce/apex/ExportRecordsController.getExportData";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import ExportCLI_Error_Toast_Title from "@salesforce/label/c.ExportCLI_Error_Toast_Title";
import ExportCLI_Error_Toast_Message from "@salesforce/label/c.ExportCLI_Error_Toast_Message";
import ExportCLI_Success_Toast_Title from "@salesforce/label/c.ExportCLI_Success_Toast_Title";
import ExportCLI_Success_Toast_Message from "@salesforce/label/c.ExportCLI_Success_Toast_Message";
import ExportCLI_Header from "@salesforce/label/c.ExportCLI_Header";
import ExportCLI_ExportButton from "@salesforce/label/c.ExportCLI_ExportButton";

export default class ExportRecords extends LightningElement {
  @api recordId;
  loading = false;
  error;

  labels = {
    ExportCLI_Header,
    ExportCLI_ExportButton
  };

  renderedCallback() {
    console.log("recordId", this.recordId);
  }

  async handleExport() {
    try {
      this.loading = true;
      this.error = null;

      this.exportResponse = await getExportData({ parentId: this.recordId }); // Store response
      if (!this.exportResponse.records || !this.exportResponse.records.length) {
        throw new Error("No records found to export");
      }

      console.log("response", JSON.stringify(this.exportResponse));

      // Convert data to CSV with BOM for Excel
      const csvString =
        "\ufeff" +
        this.convertToCSV(
          this.exportResponse.records,
          this.exportResponse.fields
        );
      const encodedData = encodeURIComponent(csvString);
      const downloadUrl = `data:text/csv;charset=utf-8,${encodedData}`;

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `export_${new Date().getTime()}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      this.dispatchEvent(
        new ShowToastEvent({
          title: ExportCLI_Success_Toast_Title,
          message: ExportCLI_Success_Toast_Message,
          variant: "success"
        })
      );

      this.closeQuickAction();
    } catch (error) {
      this.error = error.message || ExportCLI_Error_Toast_Message;
      this.dispatchEvent(
        new ShowToastEvent({
          title: ExportCLI_Error_Toast_Title,
          message: this.error,
          variant: "error"
        })
      );
    } finally {
      this.loading = false;
    }
  }

  convertToCSV(data, allFields) {
    if (!data || !data.length) return "";

    // Create header row using allFields
    const headerRow = allFields
      .map((header) => this.escapeCSVValue(header))
      .join(",");

    // Create data rows ensuring all fields are included
    const rows = data.map((record) => {
      return allFields
        .map((field) => {
          const value = record[field] || ""; // Use empty string for null/undefined values

          // Check if this is a date field
          const fieldType = this.exportResponse.fieldTypes[field];
          if ((fieldType === "DATE" || fieldType === "DATETIME") && value) {
            // Parse the date parts - handle both "MM/DD/YYYY" and existing date formats
            const dateParts = value.split(/[\/\-]/);
            let year, month, day;

            if (dateParts[2] && dateParts[2].length === 4) {
              // If format is MM/DD/YYYY
              month = dateParts[0].padStart(2, "0");
              day = dateParts[1].padStart(2, "0");
              year = dateParts[2];
            } else {
              // Try creating a date object and formatting it
              const date = new Date(value);
              if (!isNaN(date.getTime())) {
                year = date.getFullYear();
                month = String(date.getMonth() + 1).padStart(2, "0");
                day = String(date.getDate()).padStart(2, "0");
              }
            }

            if (year && month && day) {
              // Force Excel to treat it as a string
              return `="${year}-${month}-${day}"`;
            }
          }

          return this.escapeCSVValue(value);
        })
        .join(",");
    });

    // Combine with CRLF line endings for Excel
    return [headerRow, ...rows].join("\r\n");
  }

  escapeCSVValue(value) {
    if (value === null || value === undefined) {
      return '""';
    }

    let stringValue = value.toString();

    // If the value contains quotes, commas, or newlines, escape quotes and wrap in quotes
    if (
      stringValue.includes('"') ||
      stringValue.includes(",") ||
      stringValue.includes("\n") ||
      stringValue.includes("\r")
    ) {
      stringValue = stringValue.replace(/"/g, '""');
      return `"${stringValue}"`;
    }

    return stringValue;
  }

  closeQuickAction() {
    const closeEvent = new CustomEvent("close");
    this.dispatchEvent(closeEvent);
  }
}