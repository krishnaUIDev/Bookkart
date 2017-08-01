/**
 * Created by KRISHNA on 7/7/2017.
 */
(function (angular) {
  'use strict';
  function LoginController($scope,$location) {
    //sign in controller
    $scope.user = {
      'email':'',
      'password':''
    };
    $scope.loginUser = function () {
      var X = document.getElementById("saire");
      if($scope.user.email === 'admin@gmail.com' && $scope.user.password === 'root'){
        $location.path('/books');
      }
      else if($scope.user.email !== 'admin@gmail.com' && $scope.user.password !== 'root'){
        X.innerHTML = "Please enter correct email and password";
      }
      else if($scope.user.email !== 'admin@gmail.com'){
        X.innerHTML = "Please enter correct email";
        X.style.color = "red";
      }else if($scope.user.password !== 'root'){
        X.innerHTML = "Please enter correct password";
        X.style.color = "red";
      }
    };
    //clear in signin form
    $scope.clearUser = function () {
      $scope.user.email = '';
      $scope.user.password = '';
    };

    //signup controller
    $scope.use = {
      'Email':'',
      'Password':'',
      'Pass':''
    };

    $scope.signupUser = function () {
      var X = document.getElementById("memama");
      if($scope.use.email === 'admin@gmail.com' && $scope.use.Password === $scope.use.Pass){
        $location.path('/login');
      }else if($scope.use.email !== 'admin@gmail.com') {
        X.innerHTML = "Please enter correct Email";
        X.style.color = "red";
      }else if($scope.use.Password !== $scope.use.Pass) {
        X.innerHTML = "Password didnot matched";
      } else{
        X.innerHTML = "Please enter correct Email and Password";
      }
    };
    //signup clear
    $scope.clearUse = function () {
      $scope.use.email = '';
      $scope.use.Password = '';
      $scope.use.Pass = '';
    };
    //forget controller

    $scope.ufor = {
      'piss':''
    };
    $scope.forget = function () {
      if($scope.ufor.piss === 'admin@gmail.com'){
        $location.path('/login');
      }else{
        document.getElementById("mmama").innerHTML = 'Wrong Email' +'<br/>'+ '  <a href="#!/home"><button class="btn btn-default">SignIn</button></a>' +
         '' +'   <button class="btn btn-danger" ng-click="removeUse()">Clear</button>'+
          '    <a href="#!/signup"><button class="btn btn-warning">Signup</button></a>';
       /* document.getElementById("mmama").style.color = "red";*/
      }
    };
    //clear button
    $scope.removeUse = function () {
      $scope.ufor.piss = '';
    };

  }

  LoginController.$inject=['$scope','$location'];


  angular.module('customApp.controller').controller('logincontroller',LoginController);
})(window.angular ||(window.angular = {}));
