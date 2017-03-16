import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('restaurant');
  },

  actions: {

    saveRestaurant(newRestaurant) {
      newRestaurant.save().then(() => this.transitionTo('restaurants'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
