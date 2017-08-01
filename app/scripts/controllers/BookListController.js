(function (angular) {
  'use strict';
  function BookListController($scope, bookService, kartService){
    $scope.BookList = bookService.getBooks();

    $scope.addToKart = function(book) {
      kartService.addToKart(book);
      alert('add to kart');

    };

  }
  BookListController.$inject= ['$scope','bookService','kartService'];


  angular.module('customApp.controller').controller('bookListController',BookListController);

})(window.angular || (window.angular = {}));


