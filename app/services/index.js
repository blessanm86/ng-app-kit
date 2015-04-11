import angular from 'angular';

import VersionService from './version.js';


export default function() {
  var app = angular.module('nakApp.services', []);

  
  app.service(VersionService.name, VersionService());
  
}
