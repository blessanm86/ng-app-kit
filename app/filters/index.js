import angular from 'angular';

import InterpolateFilter from './interpolate.js';


export default function() {
  var app = angular.module('nakApp.filters', []);

  
  app.filter(InterpolateFilter.name, InterpolateFilter());
  
}
