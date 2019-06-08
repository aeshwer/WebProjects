// To handle minification ,just pass a array rather than a funtion in module.controller()
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    console.log($scope);
    
}]);
