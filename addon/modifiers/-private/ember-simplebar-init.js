import Modifier from 'ember-modifier';
import SimpleBar from 'simplebar/dist/simplebar-core.esm';

export default class EmberSimplebarInitModifier extends Modifier {
  sb = undefined;

  get options() {
    const { defaultOptions } = SimpleBar;
    return { ...defaultOptions, ...this.args.positional[0] };
  }

  get setInstance() {
    return this.args.named.onUpdate;
  }

  didReceiveArguments() {
    if (!this.sb) {
      // init
      this.sb = new SimpleBar(this.element, this.options);
      this.setInstance(this.sb);
    } else {
      // update
      this.sb.options = this.options;
      this.sb.recalculate.call(this.sb);
    }
  }

  willRemove() {
    this.sb.unMount();
    this.sb = undefined;
  }
}
