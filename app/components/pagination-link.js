import Ember from 'ember';

export default Ember.Component.extend({
  url: '',
  title: '',
  pageNumber: Ember.computed('url', function() {
    return this.get('url').match(/page%5Bnumber%5D=([^&]*)/)[1];
  }),
  pageSize: Ember.computed('url', function() {
    return this.get('url').match(/page%5Bsize%5D=([^&]*)/)[1];
  })
});
