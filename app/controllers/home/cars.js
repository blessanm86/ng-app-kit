export default ['$scope', 'ENV', function($scope, ENV){
    "use strict";
    
    console.info(ENV);
    $scope.items = ['Mercedes', 'BMW', 'Audi'];
}];