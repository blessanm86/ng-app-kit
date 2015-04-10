import angular from 'angular';
import interpolate from './interpolate';

export default function() {

  var module = angular.module('nakApp.filters', []);

  module.filter('interpolate', interpolate);

}
