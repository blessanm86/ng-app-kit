var vendorFiles = require('../vendor.json');

module.exports = {
  dev: {
    files: [
      //Copy all the public files.
      { expand: true, cwd: 'public/', src: ['**'], dest: 'temp/' },

      //Copy all the application template files.
      //grunt-babel will do the copying of js files after compilation.
      { expand: true, cwd: 'app/', src: ['**/*.html', '!index.html', '!**/styles/**'], dest: 'temp/app/' },

      //Copy the vendor script files
      { expand: true, flatten: true, src: vendorFiles.scripts, dest: 'temp/vendor/' },

      //Copy the livereload script files
      { expand: true, flatten: true, src: 'vendor/livereload/dist/livereload.js', dest: 'temp/' },

      //Copy the css file
      { expand: true, cwd: 'app/styles/', src: ['**/*.css'], dest: 'temp/assets' },

      //Copy app html file.
      { expand: true, cwd: 'app/', src: 'index.html', dest: 'temp/' }
    ]
  },
  dist: {
    files: [
      //Copy all the public files.
      { expand: true, cwd: 'public/', src: ['**'], dest: 'dist/' },

      //Copy the css file
      { expand: true, cwd: 'app/styles/', src: ['**/*.css'], dest: 'dist/assets' },

      //Copy template files.
      { expand: true, src: ['app/templates/**/*'], dest: 'dist/' },

      //Copy app html files.
      { expand: true, cwd: 'app/', src: 'index.html', dest: 'dist/' }
    ]
  }
};