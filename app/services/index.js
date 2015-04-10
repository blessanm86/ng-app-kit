import angular from 'angular';
import version from './version';

export default function() {

  var module = angular.module('nakApp.services', []);

  module.value('version', version);

}
