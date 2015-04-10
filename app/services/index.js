import angular from 'angular';
import version from './version';

export default function () {
	'use strict';

	var module = angular.module('nakApp.services', []);

	module.value('version', version);
}