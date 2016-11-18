"use strict";
define(['services/pager.service'], function () {

  angular.module("AppModule").register.factory("ResultsService", ResultsService);

  ResultsService.$inject = ["$http", "PagerService"];

  function ResultsService($http, service) {
    var urlSearchFlight = "http://ejtestbed.herokuapp.com/flights";
    
    var resultsService = angular.extend(service);
    resultsService.getData = getData;
    return resultsService;

    function getData(callbackFn) {
      var objResponse = {};
      $http.get(urlSearchFlight).then(function successCallback(response) {
        objResponse.complete = true;
        objResponse.data = response.data;
        callbackFn(objResponse);
      }, function errorCallback(response) {
        objResponse.complete = false;
        callbackFn(objResponse);
      });
    } //searchFlights


  }; //  ResultsService
});
