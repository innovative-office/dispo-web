import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['p', 's', 'baanId'],
  p: 1,
  s: 50,
  baanId: null,
  actions: {
    searchWithBaanId(baanId) {
      this.set('baanId', baanId);
    },
    resetSearch() {
      this.set('baanId', null);
    }
  }
});
