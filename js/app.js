define(['app.route'], function (configRoutes) {
  "use strict";

  var AppModule = angular.module('AppModule', ['ngRoute', 'AppLibs']);

  AppModule.config(configRoutes);

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['AppModule']);
  });

  return AppModule;

});
