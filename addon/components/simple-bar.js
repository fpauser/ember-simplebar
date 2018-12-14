import Component from '@ember/component';
import layout from '../templates/components/simple-bar';
import SimpleBar from 'simplebar';

export default Component.extend({
  layout,
  attributeBindings: ['data-simplebar'],

  dataSimplebar: undefined,

  autoHide: true,
  forceVisible: false,

  didInsertElement() {
    const { autoHide, forceVisible } = this;
    this.sb = new SimpleBar(this.element, {
      autoHide, forceVisible
    });
  }
});
