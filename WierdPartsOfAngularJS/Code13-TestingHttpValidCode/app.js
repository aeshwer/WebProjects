var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$http', function ($scope, $http) {

    $scope.names = {};    
    
    $http({
        method : "GET",
        url: "https://jsonplaceholder.typicode.com/todos/"
    }).then(function mySuccess(response) {
        $scope.names = response.data;
        console.log(response);
  }, function myError(response) {
        $scope.todos = response;
        console.log(response);
  });    
  
}]);