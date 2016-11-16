define([], function () {

  angular.module("AppModule").register.controller('ResultsController', ResultsController);

  ResultsController.$inject = ["$scope"];

  return {
    pageView: "../view/results/results.html",
    nameController: "ResultsController",
    aliasController: 'rsCtrl',
    pathController: ['../view/results/results.controller.js']
  };
});