import Ember from 'ember'
import Controller from '@ember/controller';

export default Controller.extend({
  notify: Ember.inject.service(),
  selectedPatient: null,
  sessionStarted: false,
  actions: {
    startSession() {
      if (!this.sessionStarted) {
        if (!this.selectedPatient) {
          this.notify.alert('Cannot start without selecting patient')
        } else {
          this.set('sessionStarted', true)
        }
      }
    },
    stopSession() {
      if (this.sessionStarted) {
        this.set('sessionStarted', false)
      }
    }
  }
});
