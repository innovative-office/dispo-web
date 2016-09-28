import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
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
      });
    }
  }
});
