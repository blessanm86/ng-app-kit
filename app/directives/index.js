export default function () {
	'use strict';

	var module = require('angular').module('nakApp.directives', []);

	module.directive('appVersion', require('./app-version'));
}