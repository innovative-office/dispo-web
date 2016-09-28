import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pallet-item-decrease-button', 'Integration | Component | pallet item decrease button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pallet-item-decrease-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pallet-item-decrease-button}}
      template block text
    {{/pallet-item-decrease-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
