import DS from 'ember-data';

export default DS.Model.extend({
  baanId: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr()
});
