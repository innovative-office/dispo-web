import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    getFileDataUrl: function(fileName, data) {
      this.set('model.baanUpload', data);
    },
    saveModel() {
      let self = this;
      this.get('model').save().then(function() {
        var newRecord = self.get('store').createRecord('baan-import', { });
        self.set('model', newRecord);
      });
    }
  }
});
