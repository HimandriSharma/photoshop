import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
  // @attr name;
  // @attr description;
  // @attr price;
  // @attr features;
  // @attr colors;
  @attr author;
  @attr width;
  @attr height;
  @attr url;
  @attr download_url;
//   "author": "Frances Gunn",
// "width": 2048,
// "height": 1206,
// "url": "https://unsplash.com/photos/8BmNurlVR6M",
// "download_url"
}
