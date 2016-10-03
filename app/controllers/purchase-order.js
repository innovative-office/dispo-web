import Ember from 'ember';

export default Ember.Controller.extend({
  showModal: null,
  externalPalletId: null,

  consideredItems: Ember.A(),
  availableItems: Ember.computed('model.purchasePositions.@each.availableQuantity', function() {
    return this.get('model.purchasePositions').filter(function(item) {
      return item.get('availableQuantity') > 0;
    });
  }),
  palletSorting: ['id:desc'],
  sortedPallets: Ember.computed.sort('model.pallets', 'palletSorting'),
  hasLineItems: Ember.computed('consideredItems.length', 'pallet', function() {
    return !this.get('pallet') || this.get('consideredItems.length') === 0;
  }),
  actions: {
    showModal(target) {
      this.set('showModal', true);
      //var modal = this.get('component-' + target);
      // modal.send('toggleModal');
      // this.$('.modal').modal();
    },
    fetchPallet() {
      let self = this;
      this.get('store').findRecord('pallet', this.get('externalPalletId'), { include: 'line_items.variant.purchase_position' }).then(function(pallet) {
        self.set('externalPalletId', null);

        pallet.get('purchaseOrders').addObject(self.get('model'));
        pallet.set('selected', true);
      });
    },
    discardFetchPallet() {
      this.set('externalPalletId', null);
    },
    buildPallet() {
      if (this.get('pallet')) {
        this.set('pallet.selected', false);
      }
      this.set('pallet', this.get('store').createRecord('pallet', {
        selected: true
      }));
      this.get('pallet.purchaseOrders').addObject(this.get('model'));
      this.get('pallet').save();
    },

    selectPallet(pallet) {
      if (this.get('pallet')) {
        this.set('pallet.selected', false);
      }
      this.set('pallet', pallet);
      this.set('pallet.selected', true);
    },

    assignItems() {
      let self = this;
      // this.get('pallet.purchaseOrders').addObject(this.get('model'));
      this.get('consideredItems').forEach(function(lineItem) {
        lineItem.set('pallet', self.get('pallet'));
        lineItem.save().then(function(result) {
          self.get('consideredItems').removeObject(lineItem);
        });
      });
    },

    considerItem(purchasePosition, quantity) {
      if (!this.get('consideredItems').findBy('purchasePosition.id', purchasePosition.get('id'))) {
        let lineItem = this.get('store').createRecord('line-item', {
          quantity: quantity,
          purchasePosition: purchasePosition
        });
        this.get('consideredItems').addObject(lineItem);
      }
    }
  }
});
