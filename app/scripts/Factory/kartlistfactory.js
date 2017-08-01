(function (angular) {
  'use strict';
  function KartService(){
    var kart = [];

    return{
      getKart: function () {
        return kart;
      },
      addToKart: function (book) {
        kart.push(book);
      }/*,
      buy: function (book) {
        alert("thanks for buying:", book.name);
      }*/
    };

  }
  KartService.$inject= [];


  angular.module('booklist.factory').factory('kartService',KartService);

})(window.angular || (window.angular = {}));
