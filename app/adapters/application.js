import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host= 'https://picsum.photos';
  namespace = 'v2';
  // namespace = 'api';
  // buildURL(...args) {
  //   return `${super.buildURL(...args)}.json`;
  // }
  pathForType(){
    return 'list'
  }
}
