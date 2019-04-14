import Ember from 'ember'
import Component from '@ember/component';
import { task } from 'ember-concurrency';

export default Component.extend({
  api: Ember.inject.service(),
  dataUri: '',
  messages: [],
  sentiments: [0.6, 0.7,],
  emotions: [],
  allEmotions: {"anticipation": 0.0, "joy": 0.0, "sadness": 0.0, "neutral": 1.0, "disgust": 0.0, "anger": 0.0, "surprise": 0.0, "fear": 0.0, "trust": 0.0},
  messagesAsChat: Ember.computed('messages.@each', function() {
    return this.messages.map(message => ({
      t: message,
      x: '',
      isOwner: false
    }))
  }),
  textSentimentData: Ember.computed('sentiments.@each', function() {
    const positive_data = this.get('sentiments').map(x => x)
    const negative_data = this.get('sentiments').map(x => 1-x)
    const res = {
      datasets: [
        {
          label: 'positive',
          data: positive_data,
          borderWidth: 1,
          backgroundColor: 'rgba(75, 192, 192, 0.2)'
        },
        {
          label: 'negative',
          data: negative_data,
          borderWidth: 1,
          backgroundColor: 'rgba(255, 99, 132, 0.2)' 
        }
      ]
    }
    return res
  }),
  textEmotionData: {
    labels: ['Sad', 'Happy', 'Fear'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3],
      borderWidth: 1
    }]
  },
  fetchResultTask: task(function*(text) {
    const result = JSON.parse(yield this.api.post('ml/text', {
      data: {
        text
      }
    }))
    this.set('emotions', result.emotions)
    
    this.get('sentiments').pushObject(result.sentiments.magnitude)
  }),
  actions: {
    onResult(result) {
      this.get('messages').pushObject(result)
      this.fetchResultTask.perform(result)
      console.log(result)
    },
    didSnap(dataUri) {
      // Delivers a data URI when snapshot is taken.
      this.set('dataUri', dataUri);
    },
    didError(error) {
      // Fires when a WebcamError occurs.
      console.error(error);
    }
  }
});
