import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { schedule } from '@ember/runloop';

export default class SimpleBarComponent extends Component {
  @tracked
  instance = undefined;

  @action
  setInstance(instance) {
    schedule('afterRender', () => {
      if (this.instance === undefined) {
        this.instance = instance;
      }
    });
  }
}
