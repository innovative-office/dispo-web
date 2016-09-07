import DS from 'ember-data';

export default DS.Model.extend({
  baanUpload: DS.attr(),
  importingDate: DS.attr(),
  url: DS.attr(),
  baanUploadFileName: DS.attr(),
  createdAt: DS.attr()
});
