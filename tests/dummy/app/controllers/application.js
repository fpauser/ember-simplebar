import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  disabled = false;
  autoHide = false;
  forceVisible = true;
  scrollbarMinSize = 25;

  @action
  doToggleProperty(property) {
    this.toggleProperty(property);
  }

  @action
  doSetNumberProperty(property, event) {
    this.set(property, Number.parseInt(event.target.value));
  }
}
