import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('restaurant-listing', 'Integration | Component | restaurant listing', {
  integration: true
});

test('should toggle wide class on click', function(assert) {
  assert.expect(3);
  let stubrestaurant = Ember.Object.create({
    image: 'fake.png',
    title: 'test-title',
    address: 'test-address',
    type: 'test-type',
    city: 'test-city',
    bedrooms: 3
  });
  this.set('restaurantObj', stubrestaurant);
  this.render(hbs`{{restaurant-listing restaurant=restaurantObj}}`);
  assert.equal(this.$('.image.wide').length, 0, 'initially rendered small');
  this.$('.image').click();
  assert.equal(this.$('.image.wide').length, 1, 'rendered wide after click');
  this.$('.image').click();
  assert.equal(this.$('.image.wide').length, 0, 'rendered small after second click');
});