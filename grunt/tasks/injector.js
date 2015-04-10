module.exports = {
  dev: {
    options: {
        template: 'app/index.html',
        dest: 'temp/index.html',
        ignorePath: ['temp/'],
        addRootSlash: false,
    },
    files: [
        {'temp/index.html': ['temp/app/**/*.js']}
    ]
  },
  dist: {
    options: {
        ignorePath: ['dist/'],
        addRootSlash: false,
    },
    files: [
        {'dist/index.html': ['dist/assets/vendor.js', 'dist/assets/app.js']}
    ]
  }
};
