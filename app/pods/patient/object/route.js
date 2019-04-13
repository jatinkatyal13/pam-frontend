import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({
  store: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('patient', params.id)
  },
  setupController(controller, model) {
    controller.set('patient', model)
  }
});
