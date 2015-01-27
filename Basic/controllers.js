var app = angular.module('app', []);

app.controller('HelloController', ['$scope',
  function($scope) {
    $scope.greeting = {text: 'Hello'};
  }]
);