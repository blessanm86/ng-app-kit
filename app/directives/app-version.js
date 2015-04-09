export default ['version', function(version) {
    'use strict';
    
    return function(scope, elm) {
        elm.text(version);
    };
}];
