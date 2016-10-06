import DS from 'ember-data';

export default DS.Model.extend({
  totalPallets: DS.attr(),
  totalPurchasePositions: DS.attr(),
  calculable: DS.belongsTo('calculable', { polymorphic: true })
});
