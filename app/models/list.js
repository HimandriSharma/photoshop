import Model, { attr } from '@ember-data/model';

export default class ListModel extends Model {
  @attr author;
  @attr width;
  @attr height;
  @attr url;
  @attr download_url;
}
