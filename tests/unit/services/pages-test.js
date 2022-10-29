import { module, test } from 'qunit';
import { setupTest } from 'photoshop/tests/helpers';

module('Unit | Service | pages', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:pages');
    assert.ok(service);
  });
});
