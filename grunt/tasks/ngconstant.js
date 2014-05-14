var grunt = require('grunt');

module.exports = {
  options: {
    dest: 'app/config-generated.js',
    name: 'config'
  },
  dev: {
    constants: grunt.file.readJSON('app/config/dev.json')
  },
  dist: {
    constants: grunt.file.readJSON('app/config/prod.json')
  }
};