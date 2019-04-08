(function() {
    
    var BookDetailsController = function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        
        $scope.bookDetails= [{name:'Harry Potter',author:'Chandler',price:29.9956,details:'afhhs'},{  name:'Game of Thrones',author:'Sam',price:19.99,details:'saas'},{  name:'You can Win',author:'Tina',price:44.99,details:'dsd'},{name:'Head First',author:'David',price:101.50,details:'xcx'}];
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
    };
    
    BookDetailsController.$inject =['$scope'];
    
    angular.module('LibraryApp')
      .controller('BookDetailsController', BookDetailsController);
    
}());