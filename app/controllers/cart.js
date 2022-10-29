import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service('shopping-cart') cart;

  get subtotal() {
    return this.cart.itemList.reduce((acc, item) => {
      if (item.size === 'small') {
        return acc + 10 * item.count;
      } else if (item.size === 'medium') {
        return acc + 20 * item.count;
      } else if (item.size === 'large') {
        return acc + 30 * item.count;
      } else if (item.size === 'xlarge') {
        return acc + 40 * item.count;
      }
    }, 0);
  }
  get tax() {
    return 0.09 * this.subtotal;
  }
  get total() {
    return this.subtotal + this.tax;
  }
  @action
  updateItemCount(item, event) {
    const count = event.target.value;
    if (count > 0) {
      item.count = count;
    } else {
      item.count = 0;
      this.cart.itemList = this.cart.itemList.filter((i) => i !== item);
    }
  }
  @action
  removeItem(item) {
    item.count = 0;
    this.cart.itemList = this.cart.itemList.filter((i) => i !== item);
  }
}
