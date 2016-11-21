define(['app', './results.controller.js'], function (app) {

  describe('Unit: ResultsService', function () {

    beforeEach(module("AppModule"));

    beforeEach(inject(function (ResultsService, _$httpBackend_) {
      service = ResultsService;
      $httpBackend = _$httpBackend_; // angular strips the underscores so
    }));

    describe('Service: getData', function () {

      it('should invoke GET service', function () {
        var mockData = {
          "complete": true,
          "data": [{}]
        };

        $httpBackend.expectGET('http://ejtestbed.herokuapp.com/flights').respond(mockData);

        function callback(data) {
          expect(data.complete).toEqual(true);
          expect(data.data).not.toBeNull();
        };

        function error(data) {
          expect(data.complete).toEqual(false);
        };

        service.getData(callback, error);
        $httpBackend.flush();
      });

    });

  });

});