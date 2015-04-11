import angular from 'angular';

import HomeCarsController from './home/cars.js';

import HomeFruitsController from './home/fruits.js';


export default function() {
  var app = angular.module('nakApp.controllers', []);

  
  app.controller(HomeCarsController.name, HomeCarsController());
  
  app.controller(HomeFruitsController.name, HomeFruitsController());
  
}
