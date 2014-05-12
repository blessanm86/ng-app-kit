angular.module('nakApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  //$routeProvider.when('/', {templateUrl: '/app/templates/index.html'});
  //$routeProvider.when('/view1', {templateUrl: '/app/partials/partial1.html', controller: 'MyCtrl1'});
  //$routeProvider.when('/view2', {templateUrl: '/app/partials/partial2.html', controller: 'MyCtrl2'});
  
  $stateProvider
      
      .state('home', {
          url: '/',
          templateUrl: '/app/templates/home.html'
      })
      
        .state('home.fruits', {
            url: '/fruits',
            templateUrl: '/app/templates/home/fruits.html',
            controller: 'HomeFruitsController'
        })
        
        .state('home.cars', {
            url: '/cars',
            templateUrl: '/app/templates/home/cars.html',
            controller: 'HomeCarsController'
        })
  
  $urlRouterProvider.otherwise('/');
}]);