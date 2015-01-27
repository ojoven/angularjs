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