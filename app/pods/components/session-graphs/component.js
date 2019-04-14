import Component from '@ember/component';

export default Component.extend({
  dataUri: '',
  messages: [],
  textSentimentData: {
    labels: ['Sad', 'Happy', 'Fear'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3],
      borderWidth: 1
    }]
  },
  actions: {
    onResult(result) {
      this.get('messages').pushObject(result)
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
