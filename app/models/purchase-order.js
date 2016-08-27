import DS from 'ember-data';

export default DS.Model.extend({
  baanId: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  deliveryDate: DS.attr(),
  purchasePositions: DS.hasMany('purchase-position'),
  shippingRoute: DS.belongsTo('shipping-route'),
  shippingAddress: DS.belongsTo('shipping-address')
});
