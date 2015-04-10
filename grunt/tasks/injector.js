//var vendorFiles = require('../vendor.json');

//Vendor files names in import order. Needed for script tag injection
// var vendorScripts = vendorFiles.scripts.map(function(arr){
//     var parts = arr.split('/');
//     return parts [parts.length-1];
// });

module.exports = {
  dev: {
    options: {
        template: 'app/index.html',
        dest: 'temp/index.html',
        ignorePath: ['temp/'],
        addRootSlash: false,
        sort: function(a, b) {

            //Make sure vendors files are injected before any other app files.
            if( a.indexOf('vendor') === -1 && b.indexOf('vendor') === -1) {

                //Make sure app.js is injected before any other app files.
                if (a.indexOf('app.js') < 0) {
                  return 1;
                } else {
                  return -1;
                }
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
    files: [
        //{'temp/index.html': ['temp/vendor/**/*.js', 'temp/app/**/*.js']}
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