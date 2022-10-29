import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ItemRoute extends Route {
  @service store;
  @service('pages') page;
  async model(params) {
    const { item_id } = params;
    // const data = await this.store.findAll('list');
    // const product = data.find(({ id }) => id === item_id);
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${this.page.pageNumber}&limit=25`
    );
    const m = await response.json();
    const product = m.find(({ id }) => id === item_id);
    return product;
  }
  setupController(controller, model) {
    super.setupController(controller, model);
    // controller.color = model.colors[0].color;
  }
}
