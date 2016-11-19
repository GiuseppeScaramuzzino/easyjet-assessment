"use strict"

define(['view/results/results.service', 'css!view/results/results.style.css',
  'flight'], function () {

  angular.module("AppModule").register.controller('ResultsController', ResultsController);

  ResultsController.$inject = ["$scope", "ResultsService"];

  function ResultsController(scope, service) {
    var vm = this;
    vm.flights = null;

    angular.element("#overlayBox").show();

    service.getData(function (response) {
      angular.element("#overlayBox").hide();

      if (response.complete) {
        vm.flights = response.data;
      }
    });

  }; //ResultsController

  return ResultsController;
});
