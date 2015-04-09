export default  function () {
	'use strict';

	var app = require('angular').module('nakApp');

	app.controller('HomeCarsController', require('./home/cars'));
	app.controller('HomeFruitsController', require('./home/fruits'));
}