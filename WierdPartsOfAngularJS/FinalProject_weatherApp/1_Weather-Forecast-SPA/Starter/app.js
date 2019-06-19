//Module
var weatherApp = angular.module("weatherApp",['ngRoute','ngResource']);


//Routing
weatherApp.config(function($routeProvider){
    
    $routeProvider
        .when('/',{
        templateUrl:'pages/home.htm',
        controller:'homeController'
        
    })
    .when('/forecast',{
        templateUrl:'pages/forecast.htm',
        controller:'forecastController'        
    })
    .otherwise( { redirectTo: '/' } );
    
});


//Controller
weatherApp.controller('homeController',['$scope','$log', function($scope,$log){
    
    $log.log('homeController');
    
}]);

weatherApp.controller('forecastController',['$scope','$log', function($scope,$log){
    
    $log.log('forecastController');
    
}]);

