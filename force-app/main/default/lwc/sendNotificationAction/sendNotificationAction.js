/**
 * Created by fpardon on 09/12/2024.
 */

import {LightningElement, api, wire, track} from 'lwc';

//LABELS
import NotifyCustomer_Toggle from '@salesforce/label/c.NotifyCustomer_Toggle';

export default class SendNotificationAction extends LightningElement {

//--------------------------------------API------------------------------------------//

    @api recordId

    labels = {
        NotifyCustomer_Toggle
    }

//--------------------------------------TRACK----------------------------------------//

//--------------------------------------WIRE-----------------------------------------//

//--------------------------------------LIFECYCLE------------------------------------//

    connectedCallback() {
        console.log('initialized SendNotificationAction')
        console.log('recordId', this.recordId)
    }

//--------------------------------------HANDLERS-------------------------------------//

    handleNotificationChanged(event) {
        console.log('event', event.detail.checked)
        this.bubbleEvent(event);
    }

//--------------------------------------HELPERS--------------------------------------//

    bubbleEvent(event) {
        this.dispatchEvent(new CustomEvent('bubble', {detail: event.detail}));
    }
}