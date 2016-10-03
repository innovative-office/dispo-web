import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleModal() {
      this.toggleProperty('enabled');
      this.sendAction("secondaryAction")
    },
    primaryAction() {
      this.toggleProperty('enabled');
      this.sendAction("primaryAction");
    },
    secondaryAction() {
      this.toggleProperty('enabled');
      this.sendAction("secondaryAction")
    }
  }
});
