import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['p', 's', 'baanId', 'delivered'],
  p: 1,
  s: 50,
  baanId: null,
  delivered: false,
  shippingRouteId: null,
  filterOptions: [true, false],

  actions: {
    searchWithBaanId(baanId) {
      this.set('baanId', baanId);
    },
    filterDelivered(value) {
      console.log(value);
      this.set('delivered', value);
    },
    filterWithShippingRouteId(shippingRouteId) {
      this.set('shippingRouteId', shippingRouteId);
    },
    resetSearch() {
      this.set('baanId', null);
      this.set('delivered', false);
      this.set('shippingRouteId', null);
    }
  }
});
