import angular from 'angular';
import appVersion from './app-version';

export default function() {

  var module = angular.module('nakApp.directives', []);

  module.directive('appVersion', appVersion);

}
