module.exports = {
  dist: {
    options: {
      mangle: true
    },
    files: [{
      'dist/assets/app.js': ['app/**/*.js']
    }],
  }
};
