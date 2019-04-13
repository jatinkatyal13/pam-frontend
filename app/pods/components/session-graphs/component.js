import Component from '@ember/component';

export default Component.extend({
  dataUri: '',
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
