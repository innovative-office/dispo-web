import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr(),
  title: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr()
});
