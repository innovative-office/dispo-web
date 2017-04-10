import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    var purchaseOrders = this.get('store').query('purchase-order', {
      include: 'purchase_positions, shipping_route, shipping_address, calculation',
      page: {
        number: params.p,
        size: params.s
      },
      filter: {
        baan_id: params.baanId,
        shipping_route_id: params.shippingRouteId,
        delivered: function() {
          if (params.delivered) {
            return 1;
          } else {
            return 0;
          }
        }
      }
    });
    var shippingRoutes = this.get('store').findAll('shipping-route');
    var zipLocations = this.get('store').findAll('zip-location');
    return RSVP.hash({
      purchaseOrders: purchaseOrders,
      shippingRoutes: shippingRoutes,
      zipLocations: zipLocations
    });
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('model', model.purchaseOrders);
    controller.set('shippingRoutes', model.shippingRoutes);
    controller.set('zipLocations', model.zipLocations);
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
    },
    delivered: {
      refreshModel: true
    },
    shippingRouteId: {
      refreshModel: true
    }
  }
});
