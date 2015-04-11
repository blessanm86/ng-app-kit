export default function HomeFruitsController () {
  return ['$scope', function($scope) {
    var fruits = ['Apple', 'Peaches', 'Bananas'];

    $scope.items = {
      fruits
    };
  }];
}
