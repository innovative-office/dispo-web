import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      let self = this;
      this.get('model').save().then(function() {
        history.back();
      });
    },
    abort() {
      this.get('model').rollbackAttributes();
      history.back();
    }
  }
});
