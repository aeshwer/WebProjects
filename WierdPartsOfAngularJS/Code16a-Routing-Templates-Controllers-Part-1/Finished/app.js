//Notes:
//1)Angular has a utility called $location.path() which inside implements the hashchange event which can grab the changed hash of the url.
//2) Use ng-route library to route using these hash
//3)In .when , in the String param, put whatever u see as hash in url

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider     
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    .otherwise( { redirectTo: '/' } );
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Main';
    
}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {
    
    $scope.name = 'Second';
    
}]);
