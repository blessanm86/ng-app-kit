var vendorFiles = require('../vendor.json');

//Vendor files names in import order. Needed for script tag injection
var vendorScripts = vendorFiles.scripts.map(function(arr){
  var parts = arr.split('/');
  return parts [parts.length-1]
});

module.exports = {
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
      {'temp/index.html': ['temp/vendor/**/*.js', 'temp/app/**/*.js']}
    ]
  }
};