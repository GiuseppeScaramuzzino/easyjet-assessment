"use strict"

define(['app','view/results/results.service', 'css!view/results/results.style.css',
  'flight','angular'], function (app) {

  app.register.controller('ResultsController', ResultsController);

  ResultsController.$inject = ["$scope", "ResultsService"];

  function ResultsController(scope, service) {
    var vm = this;
    vm.flights = null;
    vm.showFilters = false;
    vm.isOpenCalendar = false;
    vm.filters = {
      departureAirport: null,
      arrivalAiport: null,
      departureAirportCode: null,
      arrivalAirportCode: null,
      localDepartureTime: null,
      isDisrupted: null
    };
    vm.applyFilters = applyFilters;
    vm.openCalendar = openCalendar;

    angular.element("#overlayBox").show();

    service.getData(function (response) {
      angular.element("#overlayBox").hide();

      if (response.complete) {
        vm.flights = response.data;
        vm.flightsToView = vm.flights.slice();
      }
    });

    function openCalendar() {
      vm.isOpenCalendar = true;
    } //openCalendar

    function applyFilters() {
      vm.flightsToView = [];
      vm.flights.forEach(checkValue)
    } //applyFilters

    function checkValue(item) {
      var toInsert = true;
      for (var key in vm.filters) {
        if (vm.filters[key] !== null && vm.filters[key] !== "") {
          if (key == "localDepartureTime") {
            var day = new Date(item.localDepartureTime);
            day.setHours(0, 0, 0);
            if (vm.filters.localDepartureTime.getTime() != day.getTime()) {
              toInsert = false;
            }
          } else {
            if (typeof item[key] === "string") {
              if (item[key].trim() !== vm.filters[key].trim()) {
                toInsert = false;
              }
            } else {
              if (item[key] != vm.filters[key]) {
                toInsert = false;
              }
            }
          }
        }
      }
      if (toInsert) vm.flightsToView.push(item);
    } //checkValue

  }; //ResultsController

  return ResultsController;
});
