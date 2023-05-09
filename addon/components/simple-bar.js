import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import SimpleBarCore from 'simplebar-core';

export default class SimpleBarComponent extends Component {
  @tracked
  instance = undefined;

  get ariaLabel() {
    return this.args.ariaLabel || SimpleBarCore.defaultOptions.ariaLabel;
  }

  @action
  setInstance(instance) {
    this.instance = instance;
  }
}
