angular.module('nakApp')
    .controller('HomeCarsController', ['$scope', 'ENV', function($scope, ENV){
        "use strict";
        
        console.info(ENV);
        $scope.items = ['Mercedes', 'BMW', 'Audi'];
    }]);