import Component from '@ember/component';

export default Component.extend({
  dataUri: '',
  textSentimentData: {
    labels: ['Sad', 'Happy', 'Fear'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3],
      borderWidth: 1
    }]
  },
  actions: {
    didSnap(dataUri) {
      // Delivers a data URI when snapshot is taken.
      this.set('dataUri', dataUri);
    },
    didError(error) {
      // Fires when a WebcamError occurs.
      console.error(error);
    },
    getResult(result) {
      console.log(result)
    }
  }
});
