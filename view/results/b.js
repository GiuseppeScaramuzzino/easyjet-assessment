define(['ruleConverterGUI', 'angularMocks' ,'./osintService'], function (app) {

    describe('Unit: Osint', function () {

        beforeEach(module('app'));
        beforeEach(inject(function(observablesList, _$httpBackend_) {
            service = observablesList;
            $httpBackend = _$httpBackend_; // angular strips the underscores so
                                           // we don't need to use unique names
            // https://docs.angularjs.org/api/ngMock/function/angular.mock.inject
        }));
        describe('Service: observablesList', function () {

            it('should invoke GET service with right paramaeters', function() {
                var mockData = {'status':'OK','result':'result'};
                $httpBackend.expectGET('./service/categories/'+'id'+'/observables').respond(mockData);

                function callback(data){
                    expect(data).toEqual(mockData.result);
                    expect(data).not.toEqual([]);
                };
                service.getObservables('id', callback,callback);
                $httpBackend.flush();
            });

            it('should invoke POST service with right paramaeters', function() {
                var mockData = {'status':'OK','result':'result'};
                $httpBackend.expectPOST('./service/categories/'+'id'+'/observables',mockData).respond(mockData);

                function callback(data){
                    expect(data.data.result).toEqual(mockData.result);
                    expect(data).not.toEqual([]);
                    return data;
                };
                service.createObservables('id',mockData).then(callback);
                $httpBackend.flush();
            });

            it('should invoke PUT service with right paramaeters', function() {
                var mockData = {'status':'OK','result':'result'};
                $httpBackend.expectPUT('./service/categories/'+'id'+'/observables',mockData).respond(mockData);

                function callback(data){
                    expect(data.data.result).toEqual(mockData.result);
                    expect(data).not.toEqual([]);
                    return data;
                };
                service.updateObservables('id',mockData).then(callback);
                $httpBackend.flush();
            });

            it('should invoke DELETE service with right paramaeters', function() {
                var testHeader = function(header){return header['Content-Type'] === 'application/json';};
                $httpBackend.expectDELETE('./service/categories/'+'id'+'/observables',testHeader).respond({});

                function callback(data){
                    return data;
                };
                service.deleteObservables('id',[]).then(callback);
                $httpBackend.flush();
            });

            it('should invoke DELETE service with right paramaeters', function() {
                var testHeader = function(header){return header['Content-Type'] === 'application/json';};
                $httpBackend.expectDELETE('./service/categories/'+'id'+'/observables/'+'id',testHeader).respond({});

                function callback(data){
                    return data;
                };
                service.deleteObservable('id',{'id':'id'}, callback,callback);
                $httpBackend.flush();
            });

        });

    });

});
