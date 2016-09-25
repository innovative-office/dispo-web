import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('purchase-order', params["purchase-order_id"], { include: 'pallets.line_items' });
  }
});
