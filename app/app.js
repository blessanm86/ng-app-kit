import angular from 'angular';
import 'angular-ui-router';
import './config-generated';

import filters from './filters';
import services from './services';
import directives from './directives';
import controllers from './controllers';

angular.module('nakApp', [
    'ui.router',
    'config',
    'nakApp.controllers',
    'nakApp.filters',
    'nakApp.services',
    'nakApp.directives'
]);

import routerConfig from './router.js';
angular.module('nakApp').config(routerConfig);

controllers();
filters();
services();
directives();
