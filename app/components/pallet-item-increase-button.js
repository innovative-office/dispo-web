import Ember from 'ember';

export default Ember.Component.extend({
  isDisabled: Ember.computed('purchasePosition.availableQuantity', function() {
    if (this.get('purchasePosition.availableQuantity') > this.get('lineItem.quantity')) {
      return false;
    } else {
      return true;
    }
  }),
  actions: {
    save() {
      this.set('lineItem.quantity', this.get('lineItem.quantity') + 1);
      this.sendAction('submitItem', this.get('lineItem'));
    }
  }
});
