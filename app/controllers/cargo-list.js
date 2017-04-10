import Ember from 'ember';

export default Ember.Controller.extend({
  assignableUnits: [],
  removableUnits: [],
  remainingPallets: Ember.computed('pallets.@each.cargoList', function() {
    return this.get('pallets').filter(function(pallet) {
      return Ember.isNone(pallet.get('cargoList.id'));
    });
  }),
  actions: {
    remove(pallet) {
      let self = this;
      pallet.set('cargoList', null);
      pallet.save();
    },
    assign(pallet) {
      let self = this;
      pallet.set('cargoList', this.get('model'));
      pallet.save();
    }
  }
});
