angular.module('nakApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    'use strict';
    
    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: './app/templates/home.html'
        })

        .state('home.fruits', {
            url: 'home/fruits',
            templateUrl: './app/templates/home/fruits.html',
            controller: 'HomeFruitsController'
        })

        .state('home.cars', {
            url: 'home/cars',
            templateUrl: './app/templates/home/cars.html',
            controller: 'HomeCarsController'
        });

    $urlRouterProvider.otherwise('/');

}]);