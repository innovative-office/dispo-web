import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('variant', { path: '/variants/:variant_id' }, function() {
    this.route('edit');
  });
  this.route('pallets');
  this.route('pallet', { path: '/pallets/:pallet_id' }, function() {
    this.route('edit');
  });
  this.route('purchase-positions');
  this.route('purchase-position', { path: '/purchase-positions/:purchase-position_id' }, function() {
    this.route('edit');
  });
  this.route('purchase-orders');
  this.route('purchase-order', { path: '/purchase-orders/:purchase-order_id' }, function() {
    this.route('edit');
  });
  this.route('baan-imports', function() {
    this.route('new');
  });
  this.route('cargo-lists');
  this.route('cargo-list', { path: '/cargo-lists/:cargo-list_id' }, function() {
    this.route('edit');
  });
});

export default Router;
