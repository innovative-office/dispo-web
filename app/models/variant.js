import DS from 'ember-data';

export default DS.Model.extend({
  weightSingle: DS.attr(),
  weightTotal: DS.attr(),
  amount: DS.attr(),
  totalAmount: DS.attr(),
  grossPrice: DS.attr(),
  netPrice: DS.attr(),
  valueDiscount: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  volume: DS.attr(),
  purchasePosition: DS.belongsTo('purchase-position')
});
