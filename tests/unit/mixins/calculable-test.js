import Ember from 'ember';
import CalculableMixin from 'dispo-web/mixins/calculable';
import { module, test } from 'qunit';

module('Unit | Mixin | calculable');

// Replace this with your real tests.
test('it works', function(assert) {
  let CalculableObject = Ember.Object.extend(CalculableMixin);
  let subject = CalculableObject.create();
  assert.ok(subject);
});
