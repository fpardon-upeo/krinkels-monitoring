/**
 * Created by Frederik on 10/25/2024.
 */

import {LightningElement, wire} from 'lwc';
import LightningConfirm from 'lightning/confirm';
import { CloseActionScreenEvent } from 'lightning/actions';
import prepareForNextYear from "@salesforce/apex/ServiceBuilderController.prepareContractForNextYear";
import {CurrentPageReference} from 'lightning/navigation';





export default class PrepareContractForNextYear extends LightningElement {
    recordId;
    connectedCallback() {
    }

    @wire(CurrentPageReference)
    getStateParameters(currentPageReference) {
        if (currentPageReference) {
            this.recordId = currentPageReference.state.recordId;
        }
    }

    renderedCallback() {
        if(this.recordId) {
            console.log('recordId', this.recordId);
            this.openConfirm();
        }
    }


    async openConfirm() {
        const result = await LightningConfirm.open({
            message: 'Are you sure you want to prepare the contract for next year? This will update the dates of the lines to the next year.',
            variant: 'headerless'
        }).then((result) => {
            console.log('result', result);
            if(result === true) {
                prepareForNextYear({contractId: this.recordId}).then((result) => {
                    console.log('result', result);
                }).catch((error) => {
                    console.error('error', error);
                });
            }
            this.dispatchEvent(new CloseActionScreenEvent());
        }).catch((error) => {
            console.error('error', error);
            this.dispatchEvent(new CloseActionScreenEvent());
        });
    }

}