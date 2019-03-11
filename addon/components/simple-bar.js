import Component from '@ember/component';
import SimpleBar from 'simplebar';

export default Component.extend({
  attributeBindings: ['data-simplebar'],

  dataSimplebar: undefined,

  didReceiveAttrs() {
    // Grab any component parameters
    const { autoHide, forceVisible, sbClassNames, scrollbarMinSize, scrollbarMaxSize, timeout } = this.getProperties('autoHide', 'forceVisible', 'sbClassNames', 'scrollbarMinSize', 'scrollbarMaxSize', 'timeout')
    //  Assign them to an object
    const options = { autoHide, forceVisible, sbClassNames, scrollbarMinSize, scrollbarMaxSize, timeout }
    // Filter out undefined
    Object.keys(options).forEach(key => { if (typeof options[key] === 'undefined') delete options[key] });
    // Set options object on the component
    this.set('options', options);
  },

  didInsertElement() {
    const {options, disabled} = this.getProperties('options', 'disabled');
    // Send any options to the SimpleBar constructor
    // Do not create an instance if disabled boolean is true
    if (!disabled) this.sb = new SimpleBar(this.element, {...options});
  },

  willDestroyElement() {
    const disabled = this.get('disabled');
    this._super(...arguments);
    if (!disabled) this.sb.unMount();
  }
});
