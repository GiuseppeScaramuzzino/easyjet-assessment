define([], function () {
  "use strict";

  console.log("It workss");

  var AppModule = angular.module('AppModule', ['AppRoute', 'AppLibs']);
  angular.bootstrap(document, ['AppModule']);








  return AppModule;

});