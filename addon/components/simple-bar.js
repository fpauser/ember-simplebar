import Component from '@ember/component';
import SimpleBar from 'simplebar';
import layout from '../templates/components/simple-bar';
import { schedule } from '@ember/runloop';

const SIMPLEBAR_OPTIONS = [
  'autoHide',
  'forceVisible',
  'sbClassNames',
  'scrollbarMinSize',
  'scrollbarMaxSize',
  'timeout'
];

export default Component.extend({
  layout,

  classNames: ['ember-simplebar'],

  didReceiveAttrs() {
    this._super(...arguments);

    // grab any component parameters
    const options = this.getProperties(SIMPLEBAR_OPTIONS);

    // filter out undefined options
    const filteredOptions = Object.keys(options).reduce((result, key) => {
      if (typeof options[key] !== 'undefined') {
        result[key] = options[key];
      }

      return result;
    }, {});

    // set filtered options
    this.set('options', filteredOptions);

    this._initSimplebar();
  },

  didInsertElement() {
    this._super(...arguments);

    this._initSimplebar();
  },

  willDestroyElement() {
    this._super(...arguments);

    const disabled = this.get('disabled');

    if (!disabled) {
      this.sb.unMount();
    }
  },

  _initSimplebar() {
    const { options, disabled } = this.getProperties('options', 'disabled');

    // abort if disabled or element not inserted
    if (!this.element || disabled) {
      if (this.sb) {
        this.sb.unMount();
        this.sb = null;
      }

      return;
    }

    if (this.sb) {
      // destroy and recreate SimpleBar instance with new options
      this.sb.options = Object.assign({}, this.sb.options, options);
      this.sb.unMount();
      this.sb.init();
    } else {
      // only create SimpleBar instance after render to allow DOM elements to be created first
      schedule('afterRender', this, function() {
        this.sb = new SimpleBar(this.element, options);
      });
    }
  }
});
