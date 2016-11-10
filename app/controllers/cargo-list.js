import Ember from 'ember';

export default Ember.Controller.extend({
  assignableUnits: [],
  removableUnits: [],

  actions: {
    remove(pallet) {
      if (this.get('removableUnits').findBy('id', pallet.get('id'))) {
        this.get('removableUnits').removeObject(pallet);
      } else {
        this.get('removableUnits').addObject(pallet);
      }
      console.log('removableUnits.length ' + this.get('removableUnits.length'));
    },
    assign(pallet) {
      if (this.get('assignableUnits').findBy('id', pallet.get('id'))) {
        this.get('assignableUnits').removeObject(pallet);
      } else {
        this.get('assignableUnits').addObject(pallet);
      }
      console.log('assignableUnits.length ' + this.get('assignableUnits.length'));
    },
    removePallets() {
      this.get('removableUnits').forEach(function(item) {
        item.set('cargoList', null);
        item.save();
      });
    },
    assignPallets() {
      let self = this;
      this.get('assignableUnits').forEach(function(item) {
        item.set('cargoList', self.get('model'));
        item.save();
      });
    }
  }
});
