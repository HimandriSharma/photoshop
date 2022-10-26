import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  async model() {
    const response = await fetch('/api/products.json');
    const { products } = await response.json();
    // console.log(response);
    return this.store.findAll('product');
  }
}
