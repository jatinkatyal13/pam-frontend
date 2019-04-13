import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | initiate', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:initiate');
    assert.ok(route);
  });
});
