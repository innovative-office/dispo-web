import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
  },
  quantity: null,

  actions: {
    focusOut() {
      if (this.get('quantity') != "") {
        this.sendAction('action', this.get('purchasePosition'), this.get('quantity'));
      }
    }
  }
});
