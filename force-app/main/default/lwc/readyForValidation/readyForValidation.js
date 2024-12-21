import { LightningElement, api } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { CloseActionScreenEvent } from "lightning/actions";
import setReadyForValidation from "@salesforce/apex/ReadyForValidation.setReadyForValidation";

export default class ReadyForValidation extends LightningElement {
  @api recordId;

  connectedCallback() {
    setTimeout(() => {
      setReadyForValidation({ recordId: this.recordId })
        .then((result) => {
          if (result) {
            this.dispatchEvent(
              new ShowToastEvent({
                title: "Success",
                message:
                  "The Contract Manager of each contract line item will be notified.",
                variant: "success",
                mode: "dismissable"
              })
            );
            this.closeQuickAction();
          }
        })
        .catch((error) => {
          this.dispatchEvent(
            new ShowToastEvent({
              title: "Failed",
              message: "Error: " + error.body.message,
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