import { LightningElement, api } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { CloseActionScreenEvent } from "lightning/actions";
import setReadyForValidation from "@salesforce/apex/ReadyForValidation.setReadyForValidation";
import ReadyForValidation_SuccessTitle from "@salesforce/label/c.ReadyForValidation_SuccessTitle";
import ReadyForValidation_SuccessMessage from "@salesforce/label/c.ReadyForValidation_SuccessMessage";
import ReadyForValidation_ErrorTitle from "@salesforce/label/c.ReadyForValidation_ErrorTitle";
import ReadyForValidation_ErrorMessage from "@salesforce/label/c.ReadyForValidation_ErrorMessage";

export default class ReadyForValidation extends LightningElement {
  @api recordId;
  labels = {
    ReadyForValidation_SuccessTitle,
    ReadyForValidation_SuccessMessage,
    ReadyForValidation_ErrorTitle,
    ReadyForValidation_ErrorMessage
  };

  connectedCallback() {
    setTimeout(() => {
      setReadyForValidation({ recordId: this.recordId })
        .then((result) => {
          if (result) {
            this.dispatchEvent(
              new ShowToastEvent({
                title: this.labels.ReadyForValidation_SuccessTitle,
                message: this.labels.ReadyForValidation_SuccessMessage,
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
              title: this.labels.ReadyForValidation_ErrorTitle,
              message:
                this.labels.ReadyForValidation_ErrorMessage +
                ": " +
                error.body.message,
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