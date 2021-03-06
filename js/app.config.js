var pathExtLibs = "bower_components/";

require.config({
  baseUrl: ".",
  map: {
    '*': {
      'css': pathExtLibs + '/require-css/css.min'
    }
  },

  shim: {
    'app': ['angular', 'app.route', 'app.libs','angular-route', 'css!/css/style'],
    'app.route': ['angular'],
    'app.libs': ['angular', 'angular-bootstrap'],
    'angular-route': ['angular'],
    'angular-block-ui': ['angular'],
    'angular-bootstrap': ['angular'],
    'flight': ['app']
  },

  // alias libraries paths
  paths: {
    'angular': [
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.min',
      pathExtLibs + 'angular/angular.min'
    ],
    'angular-route': [
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-route.min',
      pathExtLibs + 'angular-route/angular-route.min'
    ],
    'angular-block-ui': [
      'https://cdnjs.cloudflare.com/ajax/libs/angular-block-ui/0.2.2/angular-block-ui.min',
      pathExtLibs + 'angular-block-ui/dist/angular-block-ui.min'
    ],
    'angular-bootstrap': [
      'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.2.0/ui-bootstrap-tpls.min',
      pathExtLibs + 'angular-bootstrap/ui-bootstrap-tpls.min'
    ],
    'app': 'js/app',
    'app.route': 'js/app.route',
    'app.libs': 'js/app.libs',
    'flight': 'components/flight/flight.component'
  },

  // kick start application
  deps: ['app']

});
