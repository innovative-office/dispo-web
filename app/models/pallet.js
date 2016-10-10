import DS from 'ember-data';

export default DS.Model.extend({
  delivered: DS.attr(),
  mixed: DS.attr(),
  lineItemsQuantity: DS.attr(),
  selected: DS.attr(),
  additionalSpace: DS.attr(),
  shippingRoute: DS.belongsTo('shipping-route'),
  shippingAddress: DS.belongsTo('shipping-address'),
  purchaseOrders: DS.hasMany('purchase-order'),
  lineItems: DS.hasMany('line-item'),
  palletType: DS.belongsTo('pallet-type'),
  zipLocation: DS.belongsTo('zip-location')
});
