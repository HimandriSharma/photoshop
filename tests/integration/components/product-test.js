import { module, test } from 'qunit';
import { setupRenderingTest } from 'photoshop/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | product', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('product', {
      id: '118',
      author: 'Rick Waalders',
      width: 1500,
      height: 1000,
      url: 'https://unsplash.com/photos/d-Cr8MEW5Uc',
      download_url: 'https://picsum.photos/id/118/1500/1000',
    });
    await render(hbs`<Product  @product={{this.product}}/>`);
    // await this.pauseTest();

    assert.dom(this.element).hasText('');
  });
});
