import Ember from 'ember';

export default Ember.Component.extend({
  pallet: null,
  purchaseOrder: null,

  isMixed: Ember.computed("pallet.purchaseOrders.length", function() {
    return this.get('pallet.purchaseOrders.length') > 1;
  }),
  actions: {
    unlinkPallet(pallet) {
      pallet.get('purchaseOrders').removeObject(this.get('purchaseOrder'));
      pallet.save();
    },
    selectPallet(pallet) {
      this.sendAction('action', pallet);
    },
    increase(lineItem) {
      lineItem.save().then(function(record) {
        let qty = lineItem.get('variant.purchasePosition.availableQuantity') - 1;
        lineItem.set('variant.purchasePosition.availableQuantity', qty);
      });
    },

    decrease(lineItem) {
      lineItem.save().then(function(record) {
        let qty = lineItem.get('variant.purchasePosition.availableQuantity') + 1;
        lineItem.set('variant.purchasePosition.availableQuantity', qty);
        if (lineItem.get('quantity') == 0) {
          lineItem.destroyRecord();
        }
      });
    },

    destroyPallet(pallet) {
      pallet.destroyRecord();
    }
  }
});
