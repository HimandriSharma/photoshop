import { module, test } from 'qunit';
import { setupTest } from 'photoshop/tests/helpers';

module('Unit | Model | list', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('list', {});
    assert.ok(model);
  });
});
