import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count;
  author;
  download_url;
  width;
  height;

  constructor(item) {
    this.count = item.count;
    this.author = item.author;
    this.download_url = item.image;
    this.width = item.width;
    this.height = item.height;
  }
}

export default class ShoppingCartService extends Service {
  @tracked itemList = [];
  addItem(item) {
    const existingItem = this.itemList.find(({ author, image }) => {
      // console.log(download_url)
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
