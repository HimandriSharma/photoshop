import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
  @tracked isZoomed = false;

  get productImage() {
    return this.model.download_url;
  }
  @action
  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }
}
