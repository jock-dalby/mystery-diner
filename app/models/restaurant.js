import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  address: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  telephone: DS.attr(),
  website: DS.attr(),
  description: DS.attr()
});