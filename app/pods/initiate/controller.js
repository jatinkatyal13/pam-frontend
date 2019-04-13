import Controller from '@ember/controller';

export default Controller.extend({
  selectedPatient: null,
  sessionStarted: false,
  actions: {
    startSession() {
      if (!this.sessionStarted) {
        this.set('sessionStarted', true)
      }
    },
    stopSession() {
      if (this.sessionStarted) {
        this.set('sessionStarted', false)
      }
    }
  }
});
