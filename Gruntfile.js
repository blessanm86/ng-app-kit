module.exports = function(grunt) {
  
  var vendorFiles = {
    scripts: [
      'vendor/jquery/dist/jquery.js',
      'vendor/angular/angular.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/livereload/dist/livereload.js'
    ],
    styles: [
      
    ]
  }
  
  //Vendor files names in import order. Needed for script tag injection
  var vendorScripts = vendorFiles.scripts.map(function(arr){
    var parts = arr.split('/');
    return parts [parts.length-1]
  })

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    watch: {
      dev: {
        files: ['app/**/*'],
        tasks: ['clean:dev', 'copy:dev', 'ngconstant:dev', 'uglify:dev']
      }
    },
    
    clean: {
      dev: ['temp/**/*'],
      dist: ['dist/**/*']
    },
    
    copy: {
      dev: {
        files: [
          //Copy all the public files.
          { expand: true, cwd: 'public/', src: ['**'], dest: 'temp/' },
          
          //Copy all the application files.
          { expand: true, cwd: 'app/', src: ['**/*', '!index.html', '!**/styles/**'], dest: 'temp/app/' },
          
          //Copy the vendor script files
          { expand: true, flatten: true, src: vendorFiles.scripts, dest: 'temp/vendor/' },
          
          //Copy the css file
          { expand: true, cwd: 'app/styles/', src: ['**/*.css'], dest: 'temp/assets' },
          
          //Copy app html file.
          { expand: true, cwd: 'app/', src: 'index.html', dest: 'temp/' }
        ]
      },
      dist: {
        files: [
          //Copy all the public files.
          { expand: true, cwd: 'public/', src: ['**'], dest: 'temp/' },
          
          //Copy the css file
          { expand: true, cwd: 'app/styles/', src: ['**/*.css'], dest: 'dist/assets' },
          
          //Copy template files.
          { expand: true, src: ['app/templates/**/*'], dest: 'dist/' },
          
          //Copy app html files.
          { expand: true, cwd: 'app/', src: 'index.html', dest: 'dist/' }
        ]
      }
    },
    
    connect: {
      dev: {
        options: {
          port: 9001,
          base: 'temp',
          keepalive: true,
          hostname: '127.0.0.1',
          livereload: true
        }
      },
      dist: {
        options: {
          port: 9002,
          base: 'dist',
          keepalive: true,
          hostname: '127.0.0.1',
          livereload: true
        }
      }
    },
    
    uglify: {
      //dev: {
      //  options: {
      //    sourceMap: true,
      //    sourceMapIncludeSources: true,
      //    mangle: false
      //  },
      //  files: {
      //    'temp/assets/app.js': ['temp/app/**/*.js'],
      //    'temp/assets/vendor.js': vendorFiles.scripts
      //  },
      //},
      dist: {
        options: {
          mangle: true
        },
        files: [{
          'dist/assets/app.js': ['app/**/*.js'],
          'dist/assets/vendor.js': vendorFiles.scripts
        }],
      }
    },
    
    injector: {
      options: {
        template: 'app/index.html',
        dest: 'temp/index.html',
        ignorePath: ['temp'],
        sort: function(a, b) {
          if( a.indexOf('vendor') === -1 && b.indexOf('vendor') === -1) {
            return -1;
          } else if( a.indexOf('vendor') === -1) {
            return 1;
          } else if (b.indexOf('vendor') === -1) {
            return -1;
          }
          var aSplit = a.split('/');
          var aName = aSplit [aSplit.length-1];
        
          var bSplit = b.split('/');
          var bName = bSplit[bSplit.length-1];
        
          return vendorScripts.indexOf(aName) - vendorScripts.indexOf(bName);
        }
      },
      dev: {
        files: [
          {'temp/index.html': ['temp/vendor/**/*.js', 'temp/app/**/*.js']},
          //{'temp/index.html': ['temp/app/**/*.js']}
          //{ expand: true, cwd: 'temp/vendor/', src: ['**/*.js'], dest: 'temp/index.html' }
        ]
      }
    },
    
    ngconstant: {
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
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ng-constant');
  grunt.loadNpmTasks('grunt-injector')
  
  grunt.registerTask('default', ['clean:dev', 'copy:dev', 'ngconstant:dev', 'injector:dev']);
  grunt.registerTask('dist', ['clean:dist', 'copy:dist', 'ngconstant:dist', 'uglify:dist', 'connect:dist']);

};