import { module, test } from 'qunit';
import { setupTest } from 'photoshop/tests/helpers';

module('Unit | Route | landing', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:landing');
    assert.ok(route);
  });
});
