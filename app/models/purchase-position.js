import DS from 'ember-data';

export default DS.Model.extend({
  baanId: DS.attr(),
  deliveryDate: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  availableQuantity: DS.attr(),
  quantity: DS.attr(),
  article: DS.attr(),
  articleNumber: DS.attr(),
  storageLocation: DS.attr(),
  purchaseOrder: DS.belongsTo('purchase-order'),
  zipLocation: DS.belongsTo('zip-location')
});
