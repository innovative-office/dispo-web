import Ember from 'ember';

export default Ember.Component.extend({
  quantity: null,

  actions: {
    focusOut() {
      if (this.get('quantity') != "") {
        this.sendAction('action', {purchasePosition: this.get('purchasePosition'), quantity: this.get('quantity')});
      }
    }
  }
});
