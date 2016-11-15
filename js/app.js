define([], function () {
  "use strict";

  console.log("It works");

  var AppModule = angular.module('AppModule', ['AppRoute', 'AppLibs']);
  angular.bootstrap(document, ['AppModule']);

  return AppModule;

});