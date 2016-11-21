define(['ruleConverterGUI', 'angularMocks' , './osintController' ,'../source/sourceService','./osintService'], function(App) {
    
    describe('Unit: Osint', function () {
        
        // load the controller's module
        // and mock all service dependencies
        //beforeEach(module('app'));
        beforeEach(module("app", function($provide) {
            $provide.value("observablesList", {
                getObservables: function(){},
                createObservables: function(){},
                updateObservables: function(){},
                deleteObservables: function(){},
                deleteObservable: function(){}
            });
            
            $provide.value("observableTypesList", {
                getObservableTypes: function(){}
            });
            
            $provide.value("categoriesList", {
                getCategories: function(){},
                createCategory: function(){},
                updateCategory: function(){}
            });
        }));
        
        var $controller;
        beforeEach(inject(function(_$controller_){
          // The injector unwraps the underscores (_) from around the parameter names when matching
          $controller = _$controller_;
        }));
        
        var OsintCtrl,
          scope,$q,deferred;

        // Initialize the controller and a mock scope
        // spy the service to simulate the promise
        beforeEach(inject(function ($controller, $rootScope, _$q_, observableTypesList,categoriesList) {
          scope = $rootScope.$new();
          $q = _$q_;
          
          // We use the $q service to create a mock instance of defer
          deferred = _$q_.defer();
          
          // Use a Jasmine Spy to return the deferred promise
          spyOn(observableTypesList, 'getObservableTypes').and.returnValue(deferred.promise);
          spyOn(categoriesList, 'getCategories').and.returnValue(deferred.promise);
          
          // mock all other dependencies
          OsintCtrl = $controller('OsintController', {
            $scope: scope,
            $routeParams:{},
            $location:null,
            //categoriesList:null,
            //observablesList:null,
            tagsList:null,
            //observableTypesList:null
            // place here mocked dependencies
          });
        }));

        describe('Controller: OsintCtrl', function () {
            // finally, why start the test
            it('should not be null', inject(function($controller) {
                expect(OsintCtrl).not.toBeNull();
            }));
            
            it('should resolve promise', function () {
                // Setup the data we wish to return for the .then function in the controller
                deferred.resolve({"data":{"status":"OK","errorMessageList":[],"result":[{"id":2,"description":"spammer","sourceId":2,"confidence":78,"trusted":false,"tagList":[],"converted":0,"alert":0,"osint":1}]}});
                
                // We have to call apply for this to work
                scope.$apply();

                // Since we called apply, not we can perform our assertions
                expect(OsintCtrl.categories).not.toBe(undefined);
              });
            
            it('should reject promise', function () {
                // This will call the .catch function in the controller
                deferred.reject();
                
                // We have to call apply for this to work
                scope.$apply();

                // Since we called apply, not we can perform our assertions
                expect(OsintCtrl.categories).toBe(undefined);
                //expect($scope.error).toBe('There has been an error!');
              });
            
          });//end Ctrl
    });//end Unit
});