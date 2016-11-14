require("angular");
require("angular-block-ui");
require("../node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls");

(function () {
  var EasyJetAppLibs = angular.module("EasyJetAppLibs", ['blockUI', 'ui.bootstrap']);

  EasyJetAppLibs.config(blockUIConfig);

  function blockUIConfig() {

    blockUIConfig.message = 'Please wait!';

    blockUIConfig.delay = 0;

    blockUIConfig.blockBrowserNavigation = true;

  }; //blockUIConfig
}());
if (typeof module !== "undefined") module.exports = "EasyJetAppLibs";