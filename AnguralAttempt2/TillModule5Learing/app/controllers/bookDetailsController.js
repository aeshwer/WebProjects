(function() {
    
    var BookDetailsController = function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        
          $scope.bookDetails= [{id: 1,name:'Harry Potter',author:'Chandler',price:29.9956, details: [
                    {
                        id: 1,
                        student: 'kevin'
                    }
                ]},{  id: 2,name:'Game of Thrones',author:'Sam',price:19.99, details: [
                    {
                        id: 1,
                        student: 'jack'
                    }
                ]},{  id: 3,name:'You can Win',author:'Tina',price:44.99, details: [
                    {
                        id: 1,
                        student: 'amber'
                    }
                ]},{id: 4,name:'Head First',author:'David',price:101.50, details: [
                    {
                        id: 1,
                        student: 'kate'
                    }
                ]}];
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
    };
    
    BookDetailsController.$inject =['$scope'];
    
    angular.module('LibraryApp')
      .controller('BookDetailsController', BookDetailsController);
    
}());