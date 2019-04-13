import DS from 'ember-data';

export default DS.Model.extend({
  patient: DS.belongsTo('patiend'),
  text_sentiment_analysis: DS.attr(),
  text_emotion_analysis: DS.attr(),
  image_emotion_analysis: DS.attr()
})