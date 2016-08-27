import DS from 'ember-data';

export default DS.Model.extend({
  consigneeFull: DS.attr(),
  purchaseOrders: DS.hasMany('purchase-order')
});
