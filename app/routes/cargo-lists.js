import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').query('cargo-list', {
      include: 'shipper,pallets,pallets.pallet_type,pallets.shipping_route,pallets.zip_location',
      page: {
        number: params.p,
        size: params.s
      },
      filter: {
        id: params.cargoListId
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
    cargoListId: {
      refreshModel: true
    }
  }

});
