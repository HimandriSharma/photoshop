import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  @service store;
  @service('pages') page;
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

  @action
  async model(params = 1) {
    this.page.pageNumber = parseInt(params.page_no);
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${params.page_no}&limit=25`
    );
    const m = await response.json();
    const res = this.transform(m);
    return res;
  }
}
