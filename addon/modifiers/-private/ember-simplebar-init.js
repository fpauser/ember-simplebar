import Modifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';
import SimpleBar from 'simplebar/dist/simplebar-core.esm';

function cleanup(instance) {
  instance.sb?.unMount();
  instance.sb = undefined;
}

export default class EmberSimplebarInitModifier extends Modifier {
  constructor(owner, args) {
    super(owner, args);
    registerDestructor(this, cleanup);
  }

  modify(element, [options], { onUpdate }) {
    const sbOpts = { ...SimpleBar.defaultOptions, ...options };
    if (!this.sb) {
      // init
      this.sb = new SimpleBar(element, sbOpts);
      onUpdate?.(this.sb);
    } else {
      // update
      this.sb.options = sbOpts;
      this.sb.recalculate();
    }
  }
}
