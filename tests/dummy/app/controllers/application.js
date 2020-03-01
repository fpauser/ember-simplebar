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

  @action
  doToggleProperty(property) {
    this[property] = !this[property];
  }

  @action
  doSetNumberProperty(property, event) {
    this[property] = Number.parseInt(event.target.value);
  }
}
