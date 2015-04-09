export default function () {
	'use strict';

	var module = require('angular').module('nakApp.filters', []);

	module.filter('interpolate', require('./interpolate'));
}