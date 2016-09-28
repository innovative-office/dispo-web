import Ember from 'ember';

export default Ember.Component.extend({
  increaseDisabled: Ember.computed('purchasePosition.availableQuantity', function() {
    if (this.get('purchasePosition.availableQuantity') >= this.get('lineItem.quantity')) {
      return false;
    } else {
      return true;
    }
  }),

  decreaseDisabled: Ember.computed('purchasePosition.availableQuantity', function() {
    return false;
  }),

  actions: {
    decrease() {
      this.set('lineItem.quantity', this.get('lineItem.quantity') - 1);
      this.sendAction('decreaseItem', this.get('lineItem'));
    },
    increase() {
      this.set('lineItem.quantity', this.get('lineItem.quantity') + 1);
      this.sendAction('increaseItem', this.get('lineItem'));
    }

  }
});
