module.exports = function(grunt) {

  var _ = grunt.util._;
  var path = require('path');

  var config = _.extend({},
    require('load-grunt-config')(grunt, {
      configPath: path.join(__dirname, 'grunt/tasks'),
      init: false
    })
  );
  config.env = process.env;

  grunt.registerTask('default', [
    'clean:dev',
    'jshint:dev',
    'ngconstant:dev',
    'sass:dev',
    'copy:dev',
    'injector:dev'
  ]);

  grunt.registerTask('dist', [
    'clean:dist',
    'jshint:dev',
    'ngconstant:dist',
    'sass:dev',
    'copy:dist',
    'uglify:dist',
    'injector:dist',
    'connect:dist'
  ]);
  
  grunt.registerTask('server', ['connect:dev']);

  grunt.initConfig(config);
};