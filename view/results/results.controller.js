"use strict"

define(['flight'], function () {

  angular.module("AppModule").register.controller('ResultsController', ResultsController);

  ResultsController.$inject = ["$scope"];

  function ResultsController(scope) {
    var vm = this;
    vm.msg = "It's works";
  }; //ResultsController

  return ResultsController;
});