import Component from '@ember/component';

export default Component.extend({
  dataUri: '',
  textSentimentData: [
    {
      label: "sad",
      value: 100
    },
    {
      label: "something",
      value: 100
    },
    {
      label: "something",
      value: 100
    },
    {
      label: "happy",
      value: 100
    }
  ],
  actions: {
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
