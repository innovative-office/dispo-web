import Ember from 'ember';

export default Ember.Component.extend({
  isChecked: false,
  pallet: null,

  checkedHasChanged() {
    this.sendAction('action', this.get('pallet'))
  },

  actions: {
  }
});
