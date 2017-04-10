import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').query('pallet', {
      include: 'pallet_type,line_items.variant.purchase_position',
      page: {
        number: params.p,
        size: params.s
      },
      filter: {
        id: params.palletId,
        delivered: function() {
          if (params.delivered) {
            return 1;
          } else {
            return 0;
          }
        }
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
    palletId: {
      refreshModel: true
    },
    delivered: {
      refreshModel: true
    }
  }
});
