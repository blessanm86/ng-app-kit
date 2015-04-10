export default ['version', function(version) {

  return function(text) {

    return String(text).replace(/\%VERSION\%/mg, version);

  };

}];
