'use strict';

angular.module('nakApp.filters', []);
angular.module('nakApp.services', []);
angular.module('nakApp.directives', []);

angular.module('nakApp', [
    'ui.router',
    'config',
    'nakApp.filters',
    'nakApp.services',
    'nakApp.directives',
]);
