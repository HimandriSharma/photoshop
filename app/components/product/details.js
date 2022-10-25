import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/action';

export default class ProductDetailsComponent extends Component {
  @service('shoping-cart') cart;
}
