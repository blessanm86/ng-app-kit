module.exports = {
  options: {
    format: 'stylish'
  },
  dev: ['app/**/*.js', '!app/config-generated.js'],
  dist: ['dist/**/*.js']
};
