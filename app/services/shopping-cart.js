import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count;
  author;
  image;
  width;
  height;

  constructor(item) {
    this.count = item.count;
    this.author = item.author;
    this.image = item.image;
    this.width = item.width;
    this.height = item.height;
  }
}

export default class ShoppingCartService extends Service {
  @tracked itemList = [];
  addItem(item) {
    const existingItem = this.itemList.find(({ author, image }) => {
      return author === item.author && image === item.image;
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
