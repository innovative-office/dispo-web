import DS from 'ember-data';

export default DS.Model.extend({
  quantity: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  amount: DS.attr(),
  weight: DS.attr(),
  reducedPrice: DS.attr(),
  grossPrice: DS.attr(),
  netPrice: DS.attr(),
  valueDiscount: DS.attr(),
  isIndividualPackage: DS.attr(),
  pallet: DS.belongsTo("pallet"),
  variant: DS.belongsTo("variant")
});
