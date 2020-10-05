import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SimpleBarComponent extends Component {
  @tracked
  instance = undefined;

  @action
  setInstance(instance) {
    this.instance = instance;
  }
}
