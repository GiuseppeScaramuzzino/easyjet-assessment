define([], function () {

  var EasyJetAppRoute = angular.module('EasyJetAppRoute', ['ngRoute']);

  angular.module('EasyJetAppRoute').config(configRoutes);

  configRoutes.$inject = ['$routeProvider'];

  function configRoutes($routeProvider) {
    $routeProvider.otherwise({
      templateUrl: "index.html"
    });
  }; //configRoutes

  return EasyJetAppRoute;
});