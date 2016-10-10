import DS from 'ember-data';

export default DS.Model.extend({
  pickUpTimeEarliest: DS.attr(),
  pickUpTimeLatest: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  delivered: DS.attr(),
  referee: DS.attr(),
  country: DS.attr(),
  palletsCount: DS.attr(),
  eori: DS.attr(),
  taxNumber: DS.attr(),
  deliveryCity: DS.attr(),
  deliveryZip: DS.attr(),
  deliveryStreet: DS.attr(),
  deliveryCountry: DS.attr(),
  deliveryWarehouse: DS.attr(),
  shipper: DS.belongsTo('shipper')
});
