export default function HomeCarsController () {
  return ['$scope', 'ENV', function($scope, ENV) {
    $scope.items = ['Mercedes', 'BMW', 'Audi'];
    $scope.env = ENV;
  }];
}
