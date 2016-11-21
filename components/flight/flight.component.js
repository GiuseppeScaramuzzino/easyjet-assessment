define(['app', 'components/flight/flight.component.controller', 'css!components/flight/flight.component.css'], function (app, controller) {

  app.component("flight", {
    templateUrl: 'components/flight/flight.component.html',
    bindings: {
      element: '='
    },
    controller: controller,
    controllerAs: 'flCtrl'
  });
});
