import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').query('purchase-position', {
      include: 'purchase_order,shipping_route,commodity_code',
      page: {
        number: params.p,
        size: params.s
      },
      filter: {
        baan_id: params.baanId
      }
    });
  },
  queryParams: {
    p: {
      refreshModel: true
    },
    s: {
      refreshModel: true
    },
    baanId: {
      refreshModel: true
    }
  }
});
