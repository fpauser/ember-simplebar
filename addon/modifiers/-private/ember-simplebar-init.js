import Modifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';
import SimpleBarCore from 'simplebar-core';

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
    const sbOpts = { ...SimpleBarCore.defaultOptions, ...options };
    if (!this.sb) {
      // init
      this.sb = new SimpleBarCore(element, sbOpts);
      onUpdate?.(this.sb);
    } else {
      // update
      this.sb.options = sbOpts;
      this.sb.recalculate();
    }
  }
}
