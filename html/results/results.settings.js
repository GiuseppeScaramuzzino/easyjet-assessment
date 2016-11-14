module.exports = {
  'dependencies': ['$scope']
};

//var controller = require("./results.controller");
//controller.$inject = ["$scope"];
//angular.module("EasyJetAppModule").controller("ResultsController", controller);


angular.module("EasyJetAppModule").controller("ResultsController", ResultsController);
ResultsController.$inject = ["$scope"];

function ResultsController($scope) {
  var vm = this;
  vm.msg = "It's works";
}; //ResultsController