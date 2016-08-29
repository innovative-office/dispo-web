import DS from 'ember-data';

export default DS.Model.extend({
  baanId: DS.attr(),
  deliveryDate: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  purchaseOrder: DS.belongsTo('purchase-order'),
  zipLocation: DS.belongsTo('zip-location')
});
