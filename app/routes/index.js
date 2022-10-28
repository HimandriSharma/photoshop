import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  transform(arr) {
    var result = [],
      temp = [];
    arr.forEach(function (elem, i) {
      if (i > 0 && i % 3 === 0) {
        result.push(temp);
        temp = [];
      }
      temp.push(elem);
    });
    if (temp.length > 0) {
      result.push(temp);
    }
    return result;
  }
  async model() {
    const data = await this.store.findAll('list');
    const res = this.transform(data);
    return res;
  }
}
