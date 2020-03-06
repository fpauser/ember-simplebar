import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class SimpleBarComponent extends Component {
  instance = undefined;

  @action
  setInstance(instance) {
    this.instance = instance;
  }

  @action
  recalculate() {
    this.instance?.recalculate();
  }
}
