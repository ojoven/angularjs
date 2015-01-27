var app = angular.module('app', []);

// HelloWorld.html
app.controller('HelloController', ['$scope',
  function($scope) {
    $scope.greeting = {text: 'Hello'};
  }]
);

// Watch.html
app.controller('WatchController', ['$scope',
  function($scope) {
    $scope.number = {start: 0, multiplier: 0 };
    $scope.result = 0;

    $scope.update = function() {
      console.log($scope);
      $scope.result = $scope.number.start * $scope.number.multiplier;
    }

    // Really ugly solution, but just wanted to check how $watch worked
    $scope.$watch('number.start',$scope.update);
    $scope.$watch('number.multiplier',$scope.update);

  }]
);

// List.html
app.controller('ListController', ['$scope', function($scope) {

  $scope.products = [
    { name: 'Onion', price: '3' },
    { name: 'Oil', price: '5' },
    { name: 'Rice', price: '1' }
  ];

}]);

// ShowHide.html
app.controller('ShowHideController', ['$scope', function($scope) {

  $scope.men = [{ name: 'Anthony' }, { name: 'Mark' }, { name: 'Emil' }];
  $scope.women = [{ name: 'Daniela' }, { name: 'Miren' }, { name: 'Ane' }];

  $scope.showMen = false;
  $scope.showWomen = true;

  $scope.showWomenFunction = function() {
    $scope.showWomen = true;
    $scope.showMen = false;
  }

  $scope.showMenFunction = function() {
    $scope.showWomen = false;
    $scope.showMen = true;
  }

}]);