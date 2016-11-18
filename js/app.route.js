"use strict";

define([], function () {

  configRoutes.$inject = ['$routeProvider', '$controllerProvider', '$provide', '$compileProvider', '$filterProvider'];

  function configRoutes($routeProvider, $controllerProvider, $provide, $compileProvider, $filterProvider) {

    angular.module("AppModule").register = {
      controller: $controllerProvider.register,
      factory: $provide.factory,
      directive: $compileProvider.directive,
      filter: $filterProvider.register,
      factory: $provide.factory,
      service: $provide.service,
      component: $compileProvider.component,
    };

    function getSettings(names) {
      var settings = require(names);
      console.log(settings);
      return {
        templateUrl: "../view/results/results.html",
        controller: "ResultsController",
        controllerAs: 'rsCtrl',
        resolve: resolveController(["../view/results/results.settings"])
      };
    } //getSettings

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
     .when("/search", {
        templateUrl: "../view/search/search.html"
      })
      .otherwise({
        redirectTo: "/search",
      })
  }; //configRoutes
  return configRoutes;

});
