import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @service('pages') page;

  @action
  nextPage() {
    this.page.pageNumber += 1;
  }
  @action
  previousPage() {
    if (this.page.pageNumber > 1) {
      this.page.pageNumber -= 1;
    }
  }
}
