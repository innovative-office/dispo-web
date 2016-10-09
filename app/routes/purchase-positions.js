import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('purchase-position', { include: 'purchase_order,shipping_route,commodity_code' });
  }
});
