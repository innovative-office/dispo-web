import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('cargo-list', { include: 'shipper,pallets,pallets.pallet_type,pallets.shipping_route,pallets.zip_location' });
  }
});
