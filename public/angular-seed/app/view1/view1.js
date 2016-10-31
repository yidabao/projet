'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
  $scope.students = []
  
  $http({
    method: 'GET',
    url: '/students.json'
  }).then(function successCallback(response) {
      $scope.students = response.data
    }, function errorCallback(response) {
      //document.write("Not Found"); 
  });
  
}]);