"use strict"

define(['view/results/results.service', 'flight'], function () {

  angular.module("AppModule").register.controller('ResultsController', ResultsController);

  ResultsController.$inject = ["$scope", "ResultsService"];

  function ResultsController(scope, service) {
    var vm = this;
    vm.flights = null;
    vm.pager = {};    
    vm.setPage = setPage;     

    function setPage(page) {        
      if (page < 1 || page > vm.pager.totalPages) {            
        return;        
      }             
      vm.pager = service.GetPager(vm.flights.length, page);       
      vm.items = vm.flights.slice(vm.pager.startIndex, vm.pager.endIndex + 1);    
    }

    angular.element("#overlayBox").show();

    service.getData(function (response) {
      angular.element("#overlayBox").hide();

      if (response.complete) {
        vm.flights = response.data;
        vm.setPage(1);    

      } else {

      }
    });

  }; //ResultsController

  return ResultsController;
});