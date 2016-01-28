export default function appVersion () {
  return ['version', function(version) {
    return function(scope, elm) {
      elm.text(version.code);
    };
  }];
}
