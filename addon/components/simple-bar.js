import Component from '@ember/component';
import layout from '../templates/components/simple-bar';
import SimpleBar from 'simplebar';

export default Component.extend({
  layout,
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
    const options = this.get('options');
    // Send any options to the SimpleBar constructor
    this.sb = new SimpleBar(this.element, {...options});
  }
});
