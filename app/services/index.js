export default function () {
	'use strict';

	var module = require('angular').module('nakApp.services', []);

	module.value('version', require('./version'));
}