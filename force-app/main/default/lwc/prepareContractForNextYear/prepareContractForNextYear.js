/**
 * Created by Frederik on 10/25/2024.
 */

import {LightningElement} from 'lwc';
import LightningConfirm from 'lightning/confirm';
import { CloseActionScreenEvent } from 'lightning/actions';



export default class PrepareContractForNextYear extends LightningElement {
    connectedCallback() {
        this.openConfirm();
    }

    async openConfirm() {
        const result = await LightningConfirm.open({
            message: 'Are you sure you want to prepare the contract for next year? This will update the dates of the lines to the next year.',
            variant: 'headerless'
        }).then((result) => {
            console.log('result', result);
            this.dispatchEvent(new CloseActionScreenEvent());
        }).catch((error) => {
            console.error('error', error);
            this.dispatchEvent(new CloseActionScreenEvent());
        });
    }

}