import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked
  autoHide = true;

  @tracked
  forceVisible = false;

  @tracked
  scrollbarMinSize = 50;

  @tracked
  timeout = 1000;

  @tracked
  sbInstance = undefined;

  @action
  doToggleProperty(property) {
    this[property] = !this[property];
  }

  @action
  doSetNumberProperty(property, event) {
    this[property] = Number.parseInt(event.target.value);
  }

  @action
  scrollToRandom() {
    this.sbInstance?.getScrollElement()?.scrollTo({
      top: Math.random() * 10000,
      behavior: 'smooth',
    });
  }

  @action
  recalculate(simplebar) {
    simplebar.recalculate();
  }

  @action
  setSbInstance(sb) {
    this.sbInstance = sb;
  }
}
