import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('pallet', { include: 'pallet_type,line_items.variant.purchase_position' });
  }
});
