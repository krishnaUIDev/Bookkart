/**
 * Created by KRISHNA on 7/5/2017.
 */
(function (angular) {
  'use strict';
  function KartController($scope, kartService){
    $scope.kart = kartService.getKart();
    /*$scope.buy = function (book) {
      kartService.buy(book);
    };*/
    $scope.pinni = function () {
      swal({
          title: "Are you sure?",
          text: "Your will not be able to recover this imaginary file!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it"
        },
        function(){
          alert("Deleted!");
        });
    };

  }
  KartController.$inject= ['$scope','kartService'];


  angular.module('customApp.controller').controller('kartController',KartController);

})(window.angular || (window.angular = {}));
