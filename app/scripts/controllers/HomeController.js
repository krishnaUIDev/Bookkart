/**
 * Created by KRISHNA on 7/5/2017.
 */
(function (angular) {
  'use strict';
  function HomeController($scope){
    $scope.appDetails = {
      title:'Bookart'
    };

  }
  HomeController.$inject= ['$scope'];


  angular.module('customApp.controller').controller('homeController',HomeController);

})(window.angular || (window.angular = {}));
