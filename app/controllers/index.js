import angular from 'angular';
import CarController from './home/cars';
import FruitController from './home/fruits';

export default  function () {
	'use strict';

	var app = angular.module('nakApp');

	app.controller('HomeCarsController', CarController);
	app.controller('HomeFruitsController', FruitController);
}