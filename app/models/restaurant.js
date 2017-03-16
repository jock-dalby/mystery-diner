import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  address: DS.attr('string'),
  city: DS.attr('string'),
  type: DS.attr('string'),
  image: DS.attr('string'),
  telephone: DS.attr('string'),
  website: DS.attr('string'),
  description: DS.attr('string')
});