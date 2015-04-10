module.exports = {
  dist: {
    options: {
      mangle: false
    },
    files: [{
      'dist/assets/app.js': ['dist/assets/bundle.js']
    }],
  }
};
