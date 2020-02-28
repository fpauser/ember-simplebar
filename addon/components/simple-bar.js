import Component from '@glimmer/component';
import { action } from '@ember/object';
import SimpleBar from 'simplebar/dist/simplebar-core.esm';

export default class SimpleBarComponent extends Component {
  willDestroy() {
    super.willDestroy(...arguments);
    this.simpleBar.unMount();
    this.simpleBar = null;
  }

  @action
  initSimplebar(element) {
    let options = {};
    let { defaultOptions } = SimpleBar;
    
    Object.keys(defaultOptions).forEach(key => {
      options[key] = typeof this.args[key] !== 'undefined' ? this.args[key] : defaultOptions[key];
    });

    this.simpleBar = new SimpleBar(element, options);
  }}