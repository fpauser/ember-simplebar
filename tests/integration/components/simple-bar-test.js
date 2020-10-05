import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerEvent, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { later } from '@ember/runloop';
import Ember from 'ember';

function waitABit(interval = 500) { return new Ember.Test.promise(function (resolve) {
  Ember.Test.adapter.asyncStart();
  later(this, function () {
    Ember.Test.adapter.asyncEnd();
    resolve();
  }, interval); // in ms
})}

async function renderLongTemplate() {
  await render(hbs`
    <style>
      .wrapper {
        width: 400px;
        height: 400px;
      }

      .inner-content {
        width: 800px;
      }
    </style>
    <div>
      <h1>SimpleBar</h1>
      <SimpleBar @autoHide={{this.autoHide}} @timeout={{this.timeout}} class="wrapper">
        <div class="inner-content">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
          <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
          <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. </p>
          <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. </p>
          <p class="last">Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus. </p>
        </div>
      </SimpleBar>
    </div>
  `)
}

module('Integration | Component | simple-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <SimpleBar>
        template block text
      </SimpleBar>
    `);

    assert.ok(find('.simplebar-wrapper'), 'simplebar wrapper is present (enabled)')
    assert.equal(this.element.textContent.trim(), 'template block text', 'block text renders within the component');
  });

  test('it yields the current simplebar instance', async function(assert) {
    assert.expect(1);

    this.set('checkInstance', (simplebar) => {
      assert.ok(simplebar);
    });

    await render(hbs`
      <SimpleBar as |simplebar|>
        <button type="button" {{did-insert (fn this.checkInstance simplebar)}}>
          check simplebar
        </button>
      </SimpleBar>
    `);
  });

  test('it follows default behavior for presence of track bars', async function(assert) {
    this.set('autoHide', true);
    this.set('timeout', 100);

    await renderLongTemplate();
    assert.notEqual(find('.simplebar-track.simplebar-horizontal > .simplebar-scrollbar').classList[1], 'simplebar-visible', 'hidden before scroll event')

    await waitABit(100);
    await triggerEvent('.inner-content', 'scroll');
    await waitABit(50);
    assert.equal(find('.simplebar-track.simplebar-horizontal > .simplebar-scrollbar').classList[1], 'simplebar-visible', 'visible 100ms after scroll event')

    await waitABit(300);
    assert.notEqual(find('.simplebar-track.simplebar-horizontal > .simplebar-scrollbar').classList[1], 'simplebar-visible', 'hidden after autoHide timeout')
  });

  test('it takes parameters', async function(assert) {
    this.set('autoHide', false);
    await renderLongTemplate();
    assert.equal(find('.simplebar-track.simplebar-horizontal > .simplebar-scrollbar').classList[1], 'simplebar-visible', 'simplebar trackbars always visible')
  });
});
