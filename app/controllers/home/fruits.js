angular.module('nakApp')
  .controller('HomeFruitsController', ['$scope', function($scope){
    $scope.items = ['Apple', 'Peaches', 'Bananas'];
}]);