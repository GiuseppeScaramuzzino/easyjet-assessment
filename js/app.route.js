"use strict";

define([], function () {

  configRoutes.$inject = ['$routeProvider', '$controllerProvider', '$provide', '$compileProvider', '$filterProvider'];

  function configRoutes($routeProvider, $controllerProvider, $provide, $compileProvider, $filterProvider) {

    angular.module("AppModule").controller = $controllerProvider.register;
    angular.module("AppModule").factory = $provide.factory;
    angular.module("AppModule").directive = $compileProvider.directive;
    angular.module("AppModule").filter = $filterProvider.register;
    angular.module("AppModule").factory = $provide.factory;
    angular.module("AppModule").service = $provide.service;
    angular.module("AppModule").component = $compileProvider.component;

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
