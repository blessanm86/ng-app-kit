//var vendorFiles = require('../vendor.json');

module.exports = {
  dist: {
    options: {
      mangle: true
    },
    files: [{
      'dist/assets/app.js': ['app/**/*.js'],
      //'dist/assets/vendor.js': vendorFiles.scripts
    }],
  }
};