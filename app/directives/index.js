import angular from 'angular';

import AppVersionDirective from './app-version.js';


export default function() {
  var app = angular.module('nakApp.directives', []);

  
  app.directive(AppVersionDirective.name, AppVersionDirective());
  
}
