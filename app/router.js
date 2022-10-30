import EmberRouter from '@ember/routing/router';
import config from 'photoshop/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('not-found', { path: '/*path' });
  this.route('landing', { path: '/' });
  this.route('index', { path: '/:page_no' });
  this.route('cart');
  this.route('item', { path: '/item/:item_id' });
  this.route('landing');
});
