// exportRecords.js
import { LightningElement, api } from 'lwc';
import getExportData from '@salesforce/apex/ExportRecordsController.getExportData';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ExportRecords extends LightningElement {
  @api recordId;
  loading = false;
  error;

  renderedCallback() {
    console.log('recordId', this.recordId);
  }

  async handleExport() {
    try {
      this.loading = true;
      this.error = null;

      const data = await getExportData({ parentId: this.recordId });
      if (!data || !data.length) {
        throw new Error('No records found to export');
      }

      // Convert data to CSV with BOM for Excel
      const csvString = '\ufeff' + this.convertToCSV(data);
      const encodedData = encodeURIComponent(csvString);
      const downloadUrl = `data:text/csv;charset=utf-8,${encodedData}`;

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `export_${new Date().getTime()}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      this.dispatchEvent(
        new ShowToastEvent({
          title: 'Success',
          message: 'Export completed successfully',
          variant: 'success'
        })
      );

      this.closeQuickAction();
    } catch (error) {
      this.error = error.message || 'An error occurred while exporting records';
      this.dispatchEvent(
        new ShowToastEvent({
          title: 'Error',
          message: this.error,
          variant: 'error'
        })
      );
    } finally {
      this.loading = false;
    }
  }

  convertToCSV(data) {
    if (!data || !data.length) return '';

    // Get headers and create header row
    const headers = Object.keys(data[0]);
    const headerRow = headers.map(header => this.escapeCSVValue(header)).join(',');

    // Create data rows
    const rows = data.map(record => {
      return headers.map(header => {
        const value = record[header];
        return this.escapeCSVValue(value);
      }).join(',');
    });

    // Combine with CRLF line endings for Excel
    return [headerRow, ...rows].join('\r\n');
  }

  escapeCSVValue(value) {
    if (value === null || value === undefined) {
      return '""';
    }

    let stringValue = value.toString();

    // If the value contains quotes, commas, or newlines, escape quotes and wrap in quotes
    if (stringValue.includes('"') || stringValue.includes(',') || stringValue.includes('\n') || stringValue.includes('\r')) {
      stringValue = stringValue.replace(/"/g, '""');
      return `"${stringValue}"`;
    }

    return stringValue;
  }

  closeQuickAction() {
    const closeEvent = new CustomEvent('close');
    this.dispatchEvent(closeEvent);
  }
}