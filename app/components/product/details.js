import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductDetailsComponent extends Component {
  @service('shopping-cart') cart;

  @action
  addToCart() {
    // const { name, price, colors } = this.args;
    // this.cart.addItem({
    //   name,
    //   image: colors[0].image,
    //   price: price.current,
    // });
    const { author, image } = this.args;
    this.cart.addItem({
      author,
      image: image,
      // price: price.current,
    });
  }
}
