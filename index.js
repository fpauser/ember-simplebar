'use strict';

module.exports = {
  options: {
    babel: {
      plugins: ['transform-object-rest-spread']
    }
  },
  
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);
    app.import('node_modules/simplebar/dist/simplebar.css');
  }
};
