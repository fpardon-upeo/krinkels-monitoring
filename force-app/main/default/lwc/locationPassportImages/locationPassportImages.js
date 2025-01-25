// accountImages.js
import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getAccountImages from '@salesforce/apex/AccountImagesController.getAccountImages';

// Import custom labels
import LocationPassport_Images_Header from '@salesforce/label/c.LocationPassport_Images_Header';
import LocationPassport_No_Images_Message from '@salesforce/label/c.LocationPassport_No_Images_Message';

export default class AccountImages extends NavigationMixin(LightningElement) {
    @api accountId;
    images;
    imagesLoaded = false;
    selectedImage = null;

    labels = {
        LocationPassport_Images_Header,
        LocationPassport_No_Images_Message
    };

    @api
    async loadImages() {
        try {
            console.log('Loading images for account:', this.accountId);
            const data = await getAccountImages({ accountId: this.accountId });
            console.log('Images loaded:', data.length);
            console.log('Images:', data);
            this.images = { data };
            this.imagesLoaded = true;
            console.log('Images loaded:', this.images.data.length);
        } catch (error) {
            console.error('Error loading images:', error);
            this.imagesLoaded = true;
        }
    }

    connectedCallback() {
        console.log('Account ID in child:', this.accountId);
        if (this.accountId) {
            this.loadImages();
        }
    }

    get noImages() {
        return this.imagesLoaded && (!this.images?.data || this.images.data.length === 0);
    }

    handleImageClick(event) {
        const imageId = event.currentTarget.dataset.id;
        this.selectedImage = this.images.data.find(img => img.Id === imageId);
    }

    handleCloseModal() {
        this.selectedImage = null;
    }
}