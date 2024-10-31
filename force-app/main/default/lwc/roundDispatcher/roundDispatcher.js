/**
 * Created by Frederik on 10/30/2024.
 */

import { LightningElement, track } from 'lwc';

export default class RoundDispatcher extends LightningElement {
  @track draggedAssetId;
  @track draggedAssetDetails;

  handleDragDataChange(event) {
    console.log('Parent received dragdatachange:', event.detail);
    this.draggedAssetId = event.detail.assetId;
    this.draggedAssetDetails = event.detail.assetDetails;
  }
}