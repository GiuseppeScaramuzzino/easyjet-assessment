define(['directives/flight/flight.controller', 'css!directives/flight/flight.css'], function (controller) {

  angular.module("AppModule").register.component("flight", {
    templateUrl: 'directives/flight/flight.html',
    bindings: {
      name: '@'
    },
    controller: controller,
    controllerAs: 'flCtrl'
  });
});