"use strict";
define(['app'], function (app) {

  app.register.factory("ResultsService", ResultsService);

  ResultsService.$inject = ["$http"];

  function ResultsService($http) {
    var urlSearchFlight = "http://ejtestbed.herokuapp.com/flights";

    return {
      getData: getData
    };

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
