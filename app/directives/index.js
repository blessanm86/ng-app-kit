import angular from 'angular';
import appVersion from './app-version';

export default function () {
	'use strict';

	var module = angular.module('nakApp.directives', []);

	module.directive('appVersion', appVersion);
}