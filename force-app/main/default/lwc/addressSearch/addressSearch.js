/**
 * Created by Frederik on 10/29/2024.
 */

import { LightningElement, track } from "lwc";
import getAddress from "@salesforce/apex/AddressSearchService.getAddress";
import getPlaceDetails from "@salesforce/apex/AddressSearchService.getPlaceDetails";

export default class AddressSearch extends LightningElement {

  @track addresses;
  @track noResults = false;
  handleSearch(event) {
    const searchTerm = event.target.value;
    if (searchTerm) {
      getAddress({ address: searchTerm })
        .then(result => {
          let parsedResult = JSON.parse(result);
          console.log('parsedResult: ', parsedResult);
          let suggestions = [];
          parsedResult.suggestions.forEach(suggestion => {
            suggestions.push({
              placeId: suggestion.placePrediction.placeId,
              name: suggestion.placePrediction.text.text
            });
          });
          this.addresses = suggestions;
        })
        .catch(error => {
          console.error('Error searching accounts: ', error);
          this.addresses = undefined;
          this.noResults = true;
        });
    } else {
      this.addresses = undefined;
      this.noResults = false;
    }
  }

  handleAddressSelection(event) {
    const selectedPlaceId = event.currentTarget.dataset.placeId;
    const selectedAddress = event.currentTarget.dataset.address;

    // Update the input field with the selected address
    this.template.querySelector('lightning-input').value = selectedAddress;
    // Clear the dropdown
    this.addresses = undefined;

    getPlaceDetails({ placeId: selectedPlaceId })
      .then(result => {
        console.log('parsedResult: ', result);
        console.log('json result: ', JSON.stringify(result));
      })
      .catch(error => {
        console.error('Error searching accounts: ', error);
      });

    // Dispatch an event with the selected address details
    this.dispatchEvent(new CustomEvent('addressselection', {
      detail: {
        placeId: selectedPlaceId,
        address: selectedAddress
      }
    }));
  }
}