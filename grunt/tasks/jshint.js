module.exports = {
  options: {
    jshintrc: true,
    reporter: require('jshint-stylish')
  },
  dev: ['app/**/*.js'],
  dist: ['dist/**/*.js']
};