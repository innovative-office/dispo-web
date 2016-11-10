import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').query('purchase-order', {
      include: 'purchase_positions, shipping_route, shipping_address, calculation',
      page: {
        number: params.p,
        size: params.s
      }
    });
  },
  queryParams: {
    p: {
      refreshModel: true
    },
    s: {
      refreshModel: true
    }
  }
});
