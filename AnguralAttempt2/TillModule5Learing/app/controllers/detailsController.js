(function() {
    
    var DetailsController = function ($scope,$routeParams) {
        
       var bookId = $routeParams.bookId;
        $scope.details = null;
        
         function init() {
            //Search the customers for the customerId
            for (var i=0,len=$scope.bookDetails.length;i<len;i++) {
               if ($scope.bookDetails[i].id === parseInt(bookId)) {
                   $scope.details = $scope.bookDetails[i].details;
                   break;
               }
            }
        }
        
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
        
            
        init();
    };
    
    DetailsController.$inject =['$scope','$routeParams'];
    
    angular.module('LibraryApp')
      .controller('DetailsController', DetailsController);
    
}());