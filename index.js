'use strict';

module.exports = {
  options: {
  },

  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);
    app.import('node_modules/simplebar/dist/simplebar.css');
    app.import('vendor/simple-bar.css');
  }
};
