export default function interpolate () {
  return ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version.code);
    };
  }];
}
