define([], function () {
  var EasyJetAppLibs = angular.module("EasyJetAppLibs", ['blockUI', 'ui.bootstrap']);

  angular.module('EasyJetAppLibs').config(function (blockUIConfig) {

    blockUIConfig.message = 'Please wait!';

    blockUIConfig.delay = 0;

    blockUIConfig.blockBrowserNavigation = true;

  });

  return EasyJetAppLibs;
});