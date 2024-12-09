import { LightningElement } from "lwc";

export default class ImportCsv extends LightningElement {
  handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      // Validate that it's a CSV file
      if (!file.name.endsWith(".csv")) {
        console.error("Invalid file type. Please upload a CSV file.");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result;
        console.log("CSV File Content:", fileContent);

        // Parse the content into rows for use later
        const rows = fileContent.split("\n");
        const headers = rows[0].split(",");
        console.log("Headers:", JSON.stringify(headers));

        rows.slice(1).forEach((row) => {
          const values = row.split(",");
          console.log("Row Values:", JSON.stringify(values));
        });
      };
      reader.readAsText(file);
    }
  }
}