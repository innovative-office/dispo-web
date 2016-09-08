import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    getFileDataUrl: function(fileName, data) {
      console.log(fileName);
      console.log(data);
    }
  }
});
