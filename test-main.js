var allTestFiles = [
];
var pathExtLibs = "bower_components/";
var TEST_REGEXP = /(spec|test)\.js$/i

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
  //  var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '')
    allTestFiles.push(file)
  }
})

require.config({
  baseUrl: "base",
  map: {
    '*': {
      'css': pathExtLibs + 'require-css/css.min'
    }
  },

  shim: {
    angular: {
      exports: 'angular'
    },
    'app': ['angular', 'app.route', 'app.libs','angular-route','angular-mocks','jquery'],
    'app.route': ['angular'],
    'app.libs': ['angular', 'angular-bootstrap'],
    'angular-route': ['angular'],
    'angular-block-ui': ['angular'],
    'angular-bootstrap': ['angular'],
    'flight': ['app'],
    'angular-mocks': ['angular']
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
    'jquery': [
      pathExtLibs + 'jquery/dist/jquery.min'
    ],
    'app': 'js/app.mocks',
    'app.route': 'js/app.route',
    'app.libs': 'js/app.libs',
    'flight': 'components/flight/flight.component',
    'angular-mocks': 'node_modules/angular-mocks/angular-mocks'
  },

  // kick start application
  deps: allTestFiles,

  callback: window.__karma__.start

});
