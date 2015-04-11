export default function AppVersion () {
  return ['version', function(version) {
    return function(scope, elm) {
      elm.text(version.code);
    };
  }];
}
