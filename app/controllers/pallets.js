import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['s', 'p', 'palletId', 'delivered'],
  p: 1,
  s: 20,
  palletId: null,
  delivered: false,
  filterOptions: [true, false],
  actions: {
    searchWithPalletId(palletId) {
      this.set('palletId', palletId);
    },
    filterPalletDelivered(value) {
      console.log(value);
      this.set('delivered', value);
    },
    resetSearch() {
      this.set('palletId', null);
      this.set('delivered', false);
    }
  }
});
