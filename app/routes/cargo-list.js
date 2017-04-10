import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    return RSVP.hash({
      cargoList: this.get('store').findRecord('cargo-list', params["cargo-list_id"], {
        include: 'pallets,pallets.pallet_type,pallets.shipping_route,pallets.zip_location'
      }),
      pallets: this.get('store').query('pallet', {
        include: 'pallet_type,shipping_address,shipping_route,zip_location',
        filter: {
          cargoListId: null,
          delivered: 0
        }
      })
    });
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('model', model.cargoList);
    controller.set('pallets', model.pallets);
  }
});
