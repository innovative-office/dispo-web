import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('purchase-order', { include: 'purchase_positions, shipping_route, shipping_address, calculation' });
  }
});
