define(['components/flight/flight.component.controller', 'css!components/flight/flight.component.css'], function (controller) {

  angular.module("AppModule").register.component("flight", {
    templateUrl: 'components/flight/flight.component.html',
    bindings: {
      element: '='
    },
    controller: controller,
    controllerAs: 'flCtrl'
  });
});