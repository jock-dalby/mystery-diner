import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log(this.store.findAll('restaurant'))
    return this.store.findAll('restaurant');
  }
});
