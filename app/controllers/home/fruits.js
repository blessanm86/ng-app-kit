angular.module('nakApp')
    .controller('HomeFruitsController', ['$scope', function($scope){
        "use strict";
        
        $scope.items = ['Apple', 'Peaches', 'Bananas'];
    }]);