import { LightningElement, api } from "lwc";
import LightningConfirm from "lightning/confirm";
import { debug, getComputedHeight } from "c/utilsImageCapture";
import ImageSelector_Upload from "@salesforce/label/c.Image_Selector_Upload";

export default class ImageSelector extends LightningElement {
  @api
  allImagesData;

  @api
  recordId;

  labels = {
    ImageSelector_Upload
  };

  get totalSelectedImages() {
    return this.allImagesData.length;
  }

  get noImagesSelected() {
    return this.totalSelectedImages === 0 && !this.isPreviewingImage;
  }

  get someImagesSelected() {
    return this.totalSelectedImages > 0 && !this.isPreviewingImage;
  }

  get imageText() {
    return this.totalSelectedImages > 1 ? "images" : "image";
  }

  get previewContainer() {
    return this.template.querySelector('[data-id="preview-container"]');
  }

  get imagesListContainer() {
    return this.template.querySelector('[data-id="images-list-container"]');
  }

  get imageInfoViewer() {
    return this.template.querySelector('[data-id="image-info-viewer"]');
  }

  async handleRemoveClicked(event) {
    const selectedId = parseInt(event.currentTarget.dataset.id, 10);
    this.dispatchEvent(
      new CustomEvent("delete", {
        detail: selectedId
      })
    );
    this.previewImage = null;
  }

  handleImageSelectedForAnnotation() {
    const selectedId = this.previewImage.id;
    this.dispatchEvent(
      new CustomEvent("annotateimage", {
        detail: selectedId
      })
    );
  }

  async handleFilesSelected(event) {
    const files = event.target.files;
    this.dispatchEvent(
      new CustomEvent("selectimages", {
        detail: files
      })
    );
  }

  async handleUploadClicked() {
    this.dispatchEvent(new CustomEvent("uploadrequest"));
  }
}