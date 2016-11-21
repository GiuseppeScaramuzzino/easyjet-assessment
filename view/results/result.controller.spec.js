define(['app','./results.controller.js'], function(app) {
  describe('Unit: Osint', function () {

    beforeEach(module("AppModule", function($provide) {
        $provide.value("ResultsService", {
            getData: function(){}
        });

        var element = document.createElement("div");
        element.setAttribute("id", "overlayBox");
        window.document.body.append(element);

    }));

    var $controller;
    beforeEach(inject(function(_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
    }));

    var ResultsController,
      scope,$q,deferred;

    // Initialize the controller and a mock scope
    // spy the service to simulate the promise
    beforeEach(inject(function ($controller, $rootScope, ResultsService) {
      scope = $rootScope.$new();
      ResultsController = $controller('ResultsController', {
        $scope: scope
      });
    }));

    describe('Controller: ResultsController', function () {
        // finally, why start the test
        it('should not be null', inject(function($controller) {
            expect(ResultsController).not.toBeNull();
        }));

        it('should not be null', inject(function($controller) {
            expect(ResultsController.flights).not.toBe(undefined);
        }));
      });
  });
});
