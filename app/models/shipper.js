import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr()
});
