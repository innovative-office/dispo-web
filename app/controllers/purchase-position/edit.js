import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      let self = this;
      this.get('model').save().then(function() {
        self.transitionToRoute('purchase-order', self.get('model.purchaseOrder'));
      });
    },
    abort() {
      this.get('model').rollbackAttributes();
      this.transitionToRoute('purchase-order', this.get('model.purchaseOrder'));
    }
  }
});
