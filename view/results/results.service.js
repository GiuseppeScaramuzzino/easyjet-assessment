"use strict";
define(['app'], function (app) {

  app.factory("ResultsService", ResultsService);

  ResultsService.$inject = ["$http"];

  function ResultsService($http) {
    var urlSearchFlight = "http://ejtestbed.herokuapp.com/flights";

    return {
      getData: getData
    };

    function getData() {
      var objResponse = {};
      return $http.get(urlSearchFlight).then(function successCallback(response) {
        objResponse.complete = true;
        objResponse.data = response.data;
        return objResponse;
      }, function errorCallback(response) {
        objResponse.complete = false;
        return objResponse;
      });
    } //searchFlights


  }; //  ResultsService
});
