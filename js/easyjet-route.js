require("angular");
require("angular-route");

(function () {
  var EasyJetAppRoute = angular.module('EasyJetAppRoute', ['ngRoute']);

  EasyJetAppRoute.config(configRoutes);

  configRoutes.$inject = ['$routeProvider'];

  function configRoutes($routeProvider) {

    /*EasyJetAppRoute.register = {
      controller: $controllerProvider.register,
      factory: $provide.factory
    };*/

    function resolveController(settings) {
      return {
        load: ['$q', '$rootScope', function ($q, $rootScope) {
          var defer = $q.defer();
          require("../html/results/results.settings");
          /*require(names, function () {
            defer.resolve();
            $rootScope.$apply();
          });*/
          //sreturn defer.promise;
        }]
      }
    }

    $routeProvider
      .when("/results", {
        templateUrl: "../html/results/results.html",
        //controller: "ResultsController",
        resolve: resolveController("../html/results/results.settings.js")
      })
      .otherwise({
        templateUrl: "../html/results/results.html",
        resolve: resolveController("../html/results/results.settings.js")

      })
  }; //configRoutes
})();
if (typeof module !== "undefined") module.exports = "EasyJetAppRoute";