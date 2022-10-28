import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

class Item {
  @tracked count;
  author;
  image;
  width;
  height;
  price;
  @tracked size;

  constructor(item) {
    this.count = item.count;
    this.author = item.author;
    this.image = item.image;
    this.width = item.width;
    this.height = item.height;
    this.size = item.size;
    this.price = {
      small: 10,
      medium: 20,
      large: 30,
      xlarge: 40,
    };
  }
}

export default class ShoppingCartService extends Service {
  @tracked itemList = [];
  addItem(item) {
    const existingItem = this.itemList.find(({ author, image, size }) => {
      return (
        author === item.author && image === item.image && item.size === size
      );
    });

    if (existingItem) {
      existingItem.count += 1;
    } else {
      this.itemList = [
        ...this.itemList,
        new Item({
          ...item,
          count: 1,
        }),
      ];
    }
  }
}
