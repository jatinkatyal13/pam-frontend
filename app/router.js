import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('patient', function() {
    this.route('id', {path: '/:id'});
  });
  this.route('404', {path: '/*'});
  this.route('initiate');
});

export default Router;
