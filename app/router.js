angular.module('nakApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: './app/templates/home.html'
        })

        .state('home.fruits', {
            url: 'fruits',
            templateUrl: './app/templates/home/fruits.html',
            controller: 'HomeFruitsController'
        })

        .state('home.cars', {
            url: 'cars',
            templateUrl: './app/templates/home/cars.html',
            controller: 'HomeCarsController'
        });

    $urlRouterProvider.otherwise('/');

}]);