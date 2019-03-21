import Component from '@ember/component';
import SimpleBar from 'simplebar';
import layout from '../templates/components/simple-bar';

const SIMPLEBAR_OPTIONS = [
  "autoHide", "forceVisible", "sbClassNames",
  "scrollbarMinSize", "scrollbarMaxSize", "timeout"
];

export default Component.extend({
  layout,

  didReceiveAttrs() {
    this._super(...arguments);

    // grab any component parameters
    const options = this.getProperties(SIMPLEBAR_OPTIONS);

    // filter out undefined options
    const filteredOptions = Object.keys(options)
      .reduce((result, key) => {
        if (typeof options[key] !== 'undefined') {
          result[key] = options[key];
        }

        return result;
      }, {});

    // set filtered options
    this.set('options', filteredOptions);
  },

  didInsertElement() {
    this._super(...arguments);

    const { options, disabled } = this.getProperties('options', 'disabled');

    // abort if disabled
    if (disabled) { return; }

    // send options to the SimpleBar constructor
    this.sb = new SimpleBar(this.element, {...options});

    // work around: otherwise scrollbars
    // are not shown after first render
    if (options.autoHide === false) {
      this.sb.showScrollbar('x');
      this.sb.showScrollbar('y');
    }
  },

  willDestroyElement() {
    this._super(...arguments);

    const disabled = this.get('disabled');

    if (!disabled) {
      this.sb.unMount();
    }
  }
});
