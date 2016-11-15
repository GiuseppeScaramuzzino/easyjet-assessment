"use strict";

define([], function () {

  var AppRoute = angular.module('AppRoute', ['ngRoute']);

  AppRoute.config(configRoutes);

  configRoutes.$inject = ['$routeProvider', '$controllerProvider'];

  function configRoutes($routeProvider, $controllerProvider) {

    /*AppRoute.register = {
      controller: $controllerProvider.register,
      factory: $provide.factory
    };*/

    function resolveController(names) {
      return {
        load: ['$q', '$rootScope', function ($q, $rootScope) {
          var defer = $q.defer();
          require(names, function () {
            defer.resolve();
            $rootScope.$apply();
          });
          return defer.promise;
        }]
      }
    } //resolveController

    $routeProvider
      .when("/results", {
        templateUrl: "../view/results/results.html",
        controller: "ResultsController",
        controllerAs: 'rsCtrl',
        resolve: resolveController(["../view/results/results.controller"])
      })
      .otherwise({
        redirectTo: "/results",
      })
  }; //configRoutes
});