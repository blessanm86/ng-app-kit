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
    'eslint',
    'ngimporter',
    'ngconstant:dev',
    'sass:dev',
    'copy:dev',
    'browserify:dev',
    'injector:dev'
  ]);

  grunt.registerTask('dist', [
    'clean:dist',
    'eslint',
    'ngimporter',
    'ngconstant:dist',
    'sass:dist',
    'copy:dist',
    'browserify:dist',
    'uglify:dist',
    'clean:distPostCleanup',
    'injector:dist',
    'connect:dist'
  ]);

  grunt.registerTask('server', ['connect:dev']);

  grunt.initConfig(config);
};
