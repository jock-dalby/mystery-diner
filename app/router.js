import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('restaurants', function() {
    this.route('show', { path: '/:restaurant_id' });
  });
});

export default Router;
