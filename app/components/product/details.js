import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ProductDetailsComponent extends Component {
  @service('shopping-cart') cart;
  @tracked size = 'small';
  @action
  addToCart() {
    const { author, image } = this.args;
    this.cart.addItem({
      author,
      image: image,
      size: this.size,
    });
  }
  @action
  setSize(val) {
    this.size = val.target.value;
  }
  @action
  isSmall() {
    console.log(this.size === 'small');
    return this.size === 'small';
  }
}
