import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked
  autoHide = false;

  @tracked
  forceVisible = true;

  @tracked
  scrollbarMinSize = 50;

  @action
  doToggleProperty(property) {
    this[property] = !this[property];
  }

  @action
  doSetNumberProperty(property, event) {
    this[property] = Number.parseInt(event.target.value);
  }
}
