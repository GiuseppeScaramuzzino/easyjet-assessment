//var AppLibs = angular.module("AppLibs", ['blockUI', 'ui.bootstrap']);
"use strict";

define([], function () {
  var AppLibs = angular.module("AppLibs", ['blockUI', 'ui.bootstrap']);

  AppLibs.config(blockUIConfig);

  function blockUIConfig() {

    blockUIConfig.message = 'Please wait!';

    blockUIConfig.delay = 0;

    blockUIConfig.blockBrowserNavigation = true;

  }; //blockUIConfig
});