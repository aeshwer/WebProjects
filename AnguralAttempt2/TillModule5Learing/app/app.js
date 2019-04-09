(function() {
    
    var app = angular.module('LibraryApp', ['ngRoute']);
    
        app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'BookDetailsController',
                templateUrl: 'app/views/books.html'
            })
            .when('/details/:bookId', {
                controller: 'DetailsController',
                templateUrl: 'app/views/details.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());