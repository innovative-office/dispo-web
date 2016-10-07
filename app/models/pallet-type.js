import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  countAs: DS.attr(),
  readAs: DS.attr(),
  weight: DS.attr()
});
