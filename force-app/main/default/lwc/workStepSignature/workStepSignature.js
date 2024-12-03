import { LightningElement, api, wire, track } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { CloseActionScreenEvent } from "lightning/actions";
import { loadScript } from "lightning/platformResourceLoader";
import { getRecord, updateRecord } from "lightning/uiRecordApi";
import SIGNATURE_PAD from "@salesforce/resourceUrl/signature_pad";
import WORKORDER_ID_FIELD from "@salesforce/schema/WorkStep.WorkOrderId";
import saveSignature from "@salesforce/apex/WorkStepSignatureController.saveSignature";

export default class WorkStepSignature extends LightningElement {
  @api recordId;
  signaturePad;
  libraryLoaded = false;
  workOrderId;
  //   @track showSuccessMessage = false;
  @track showSignatureSection = true;
  @track showLoadingSpinner = false;

  @wire(getRecord, {
    recordId: "$recordId",
    fields: [WORKORDER_ID_FIELD]
  })
  workStepRecord({ data }) {
    if (data) {
      this.workOrderId = data.fields.WorkOrderId.value;
    }
  }

  renderedCallback() {
    if (this.libraryLoaded) return;

    loadScript(this, SIGNATURE_PAD)
      .then(() => {
        this.libraryLoaded = true;
        this.initializeSignaturePad();
      })
      .catch(() => {
        this.showToast("Error", "Could not load signature pad", "error");
      });
  }

  initializeSignaturePad() {
    const canvas = this.template.querySelector("canvas");
    const container = canvas.parentElement;

    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = container.offsetWidth * ratio;
    canvas.height = container.offsetHeight * ratio;
    canvas.style.width = container.offsetWidth + "px";
    canvas.style.height = container.offsetHeight + "px";

    const ctx = canvas.getContext("2d");
    ctx.scale(ratio, ratio);

    // eslint-disable-next-line no-undef
    this.signaturePad = new SignaturePad(canvas, {
      backgroundColor: "rgb(255, 255, 255)",
      penColor: "rgb(0, 0, 0)",
      velocityFilterWeight: 0.7,
      minWidth: 0.5,
      maxWidth: 2.5,
      throttle: 16
    });
  }

  async handleSave() {
    this.showSignatureSection = false;
    this.showLoadingSpinner = true;

    if (!this.signaturePad || this.signaturePad.isEmpty()) {
      const evt = new ShowToastEvent({
        title: "Error",
        message: "Please provide a signature",
        variant: "error",
        mode: "sticky"
      });
      this.dispatchEvent(evt);
      return;
    }

    try {
      // 1. Save signature
      const dataURL = this.signaturePad.toDataURL("image/png");
      const base64Data = dataURL.split(",")[1];

      await saveSignature({
        workStepId: this.recordId,
        base64Data: base64Data
      });

      // 2. Update WorkStep status
      await updateRecord({
        fields: {
          Id: this.recordId,
          Status: "Completed"
        }
      });

      // 3. Show success toast BEFORE closing
      const successEvt = new ShowToastEvent({
        title: "Success",
        message: "Signature successfully saved to Work Order",
        variant: "success",
        mode: "dismissible"
      });
      this.dispatchEvent(successEvt);
    } catch (error) {
      console.error("Save error:", error);

      const errorEvt = new ShowToastEvent({
        title: "Error",
        message: error.body?.message || "Failed to save signature",
        variant: "error",
        mode: "dismissible"
      });
      this.dispatchEvent(errorEvt);
    }

    // 4. Add a delay before closing (4 seconds)
    await new Promise((resolve) => setTimeout(resolve, 4000));

    // 5. Close the screen
    this.dispatchEvent(new CloseActionScreenEvent());
  }

  handleClear() {
    if (this.signaturePad) {
      this.signaturePad.clear();
    }
  }
}