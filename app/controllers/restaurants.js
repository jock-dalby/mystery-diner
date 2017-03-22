import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    filterByCity(param) {
      if (param !== '') {
        return this.get('store').query('restaurant', { city: param });
      } else {
        return this.get('store').findAll('restaurant');
      }
    }
  }
});