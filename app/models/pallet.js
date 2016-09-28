import DS from 'ember-data';

export default DS.Model.extend({
  delivered: DS.attr(),
  mixed: DS.attr(),
  lineItemsQuantity: DS.attr(),
  purchaseOrders: DS.hasMany('purchase-order'),
  lineItems: DS.hasMany('line-item')
});
