import { LightningElement, api } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { CloseActionScreenEvent } from "lightning/actions";
import setReadyForValidation from "@salesforce/apex/ReadyForValidation.setReadyForValidation";

export default class ReadyForValidation extends LightningElement {
  @api recordId;

  connectedCallback() {
    setTimeout(() => {
      setReadyForValidation({ recordId: this.recordId })
        .then(() => {
          this.dispatchEvent(
            new ShowToastEvent({
              title: "Ready for Validation",
              message: "This record was set to Ready for Validation.",
              variant: "success",
              mode: "dismissable"
            })
          );
          this.closeQuickAction();
        })
        .catch((error) => {
          this.dispatchEvent(
            new ShowToastEvent({
              title: "Ready for Validation",
              message: "Error setting record to Ready for Validation: " + error,
              variant: "error",
              mode: "dismissable"
            })
          );
          this.closeQuickAction();
        });
    }, 100);
  }

  closeQuickAction() {
    this.dispatchEvent(new CloseActionScreenEvent());
  }
}