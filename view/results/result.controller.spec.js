define(['app', './results.controller.js'], function (app) {
  describe('Unit: ResultsConroller', function () {

    beforeEach(module("AppModule", function ($provide) {
      $provide.value("ResultsService", {
        getData: function () {}
      });

      var element = document.createElement("div");
      element.setAttribute("id", "overlayBox");
      window.document.body.append(element);

    }));

    var $controller;
    beforeEach(inject(function (_$controller_) {
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
    }));

    var ResultsController,
      scope, $q, deferred;

    // Initialize the controller and a mock scope
    // spy the service to simulate the promise
    beforeEach(inject(function ($controller, $rootScope, _$q_, ResultsService) {
      scope = $rootScope.$new();

      scope = $rootScope.$new();
      $q = _$q_;

      // We use the $q service to create a mock instance of defer
      deferred = _$q_.defer();

      // Use a Jasmine Spy to return the deferred promise
      spyOn(ResultsService, 'getData').and.returnValue(deferred.promise);

      ResultsController = $controller('ResultsController', {
        $scope: scope
      });
    }));

    describe('Controller: ResultsController', function () {
      // finally, why start the test
      it('ResultsController should not be null', inject(function ($controller) {
        expect(ResultsController).not.toBeNull();
      }));

      it('flights should not be undefined', inject(function ($controller) {
        expect(ResultsController.flights).not.toBeUndefined();
      }));

      it('flights element should be null', inject(function ($controller) {
        expect(ResultsController.flights).toBeNull();
      }));

      it('should resolve promise', function () {
        // Setup the data we wish to return for the .then function in the controller
        deferred.resolve({
          "complete": true,
          "data": [{
            "id": "EZ001",
            "flightNumber": {
              "carrierCode": "EZY",
              "number": 5407
            },
            "departureAirport": "London Luton (LTN)",
            "departureAirportCode": "LGW",
            "arrivalAirport": "Berlin Schoenefeld (SXF)",
            "arrivalAirportCode": "SXF",
            "depTerminalName": "South Terminal",
            "localDepartureTime": "2016-06-30T06:40:00",
            "localArrivalTime": "2016-06-30T09:35:00",
            "isDisrupted": false,
            "seatsAvailable": 9,
            "prices": {
              "adult": {
                "value": 27.99,
                "valueWithDebitCard": 40.99,
                "valueWithCreditCard": 41.81
              },
              "child": {
                "value": 27.99,
                "valueWithDebitCard": 40.99,
                "valueWithCreditCard": 41.81
              },
              "infant": null
            }
          }]
        });

        // We have to call apply for this to work
        scope.$apply();

        // Since we called apply, not we can perform our assertions
        expect(ResultsController.flights).toBeNull();
      });

    });
  });
});
