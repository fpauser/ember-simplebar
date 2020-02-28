import Modifier from 'ember-modifier';
import SimpleBar from 'simplebar/dist/simplebar-core.esm';

export default class InitSimpleBarModifier extends Modifier {
  sb = undefined;

  get options() {
    const { defaultOptions } = SimpleBar;
    return { ...defaultOptions, ...this.args.positional[0] };
  }

  didReceiveArguments() {
    if (!this.sb) {
      this.sb = new SimpleBar(this.element, this.options);
    } else {
      this.sb.options = this.options;
      this.sb.unMount();
      this.sb.init();
    }
  }

  willRemove() {
    this.sb.unMount();
    this.sb = undefined;
  }
}
