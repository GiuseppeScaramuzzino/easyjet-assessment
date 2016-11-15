"use strict"



define(['app'], function (app) {
  app.register.controller('ResultsController', ResultsController);
  ResultsController.$inject = ["$scope"];

  function ResultsController(scope) {
    var vm = this;
    vm.msg = "It's works";
  }; //ResultsController
  return ResultsController;
});