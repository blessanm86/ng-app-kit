angular.module('nakApp')
    .controller('HomeCarsController', ['$scope', 'ENV', function($scope, ENV){
        console.info(ENV);
        $scope.items = ['Mercedes', 'BMW', 'Audi'];
    }]);