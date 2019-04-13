import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({
  store: Ember.inject.service(),
  model () {
    return this.store.findAll('patient')
  },
  setupController(controller, model) {
    controller.set('patients', model)
  }
});
