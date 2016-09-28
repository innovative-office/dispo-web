import Ember from 'ember';

export default Ember.Controller.extend({
  consideredItems: Ember.A(),

  actions: {
    assignItems() {
      console.log('assigning new items...');
      this.set('palletId', null);
    },
    considerItem(hash) {
      console.log("array length: " + this.get('consideredItems').get('length'));
      console.log(hash);
    }
  }
});
