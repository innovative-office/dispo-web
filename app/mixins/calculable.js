import Ember from 'ember';

export default Ember.Mixin.create({
  calculation: DS.belongsTo('calculation')
});
