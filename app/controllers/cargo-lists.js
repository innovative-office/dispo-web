import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['p', 's', 'cargoListId'],
  p: 1,
  s: 20,
  cargoListId: null,
  actions: {
    searchWithId(id) {
      this.set('cargoListId', id);
    },
    resetSearch() {
      this.set('cargoListId', null);
    }
  }
});
