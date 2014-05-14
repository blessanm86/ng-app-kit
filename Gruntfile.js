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
    'copy:dev',
    'ngconstant:dev',
    'injector:dev'
  ]);
  
  grunt.registerTask('dist', [
    'clean:dist',
    'copy:dist',
    'ngconstant:dist',
    'uglify:dist',
    'connect:dist'
  ]);
  
  grunt.initConfig(config);
};