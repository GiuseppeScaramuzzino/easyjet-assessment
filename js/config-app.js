require.config({
  "baseUrl": '.',
  "map": {
    '*': {
      'css': 'bower_components/require-css/css.min'
    }
  },
  "shim": {
    "EasyJetAppModule": {
      "deps": ["EasyJetAppRoute", "EasyJetAppLibs"] // "css/style.css"
    },
    "EasyJetAppRoute": {
      "deps": ["angular", "angular-route"]
    },
    "EasyJetAppLibs": {
      "deps": ["angular", "angular-block-ui", "angular-bootstrap"]
    },
    "angular-route": {
      "deps": ["angular"]
    },
    "angular-block-ui": {
      "deps": ["angular", "css!bower_components/angular-block-ui/dist/angular-block-ui"]
    },
    "angular-bootstrap": {
      "deps": ["angular", "css!bower_components/angular-bootstrap/ui-bootstrap-csp"]
    }
  },
  "paths": {
    "EasyJetAppModule": './js/easyjet-app',
    "EasyJetAppRoute": './js/easyjet-route',
    "EasyJetAppLibs": './js/easyjet-libs',
    "angular": [
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.min',
      'bower_components/angular/angular.min'
    ],
    "angular-route": [
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-route.min',
      'bower_components/angular-route/angular-route.min'
    ],
    "angular-block-ui": [
      'https://cdnjs.cloudflare.com/ajax/libs/angular-block-ui/0.2.2/angular-block-ui.min',
      'bower_components/angular-block-ui/dist/angular-block-ui.min'
    ],
    "angular-bootstrap": [
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.min'
    ],
  }
});

require(['EasyJetAppModule'], function () {
  angular.bootstrap(document, ['EasyJetAppModule']);
});