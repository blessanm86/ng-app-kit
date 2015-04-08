angular.module('nakApp')
    .controller('HomeFruitsController', ['$scope', function($scope){
        "use strict";

        var fruits = ['Apple', 'Peaches', 'Bananas'];

        $scope.items = {
        	fruits
        };
    }]);