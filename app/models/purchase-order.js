import DS from 'ember-data';
import Calculable from '../mixins/calculable';

export default DS.Model.extend(Calculable, {
  baanId: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  deliveryDate: DS.attr(),
  purchasePositions: DS.hasMany('purchase-position'),
  shippingRoute: DS.belongsTo('shipping-route'),
  shippingAddress: DS.belongsTo('shipping-address'),
  pallets: DS.hasMany('pallet')
});
