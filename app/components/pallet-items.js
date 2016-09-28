import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    increase(lineItem) {
      lineItem.save().then(function(record) {
        // lineItem.get("variant.purchasePosition").reset();
      });
    },

    decrease(lineItem) {
      lineItem.save().then(function(record) {
        // lineItem.get("variant.purchasePosition").reset();
      });
    }
  }
});
