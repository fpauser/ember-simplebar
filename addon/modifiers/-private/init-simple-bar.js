import Modifier from 'ember-modifier';
import SimpleBar from 'simplebar/dist/simplebar-core.esm';

export default class InitSimpleBarModifier extends Modifier {
  sb = undefined;

  get options() {
    const { defaultOptions } = SimpleBar;
    return { ...defaultOptions, ...this.args.positional[0] };
  }

  didReceiveArguments() {
    if (this.sb) { this.sb.unMount(); }
    this.sb = new SimpleBar(this.element, this.options);
  }

  willRemove() {
    this.sb.unMount();
    this.sb = undefined;
  }
}
